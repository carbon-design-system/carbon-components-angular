import { ButtonMenuItem } from "./button-menu-item.component";
import {
	Component,
	ContentChildren,
	Input,
	Output,
	EventEmitter,
	ElementRef,
	ViewEncapsulation,
	ViewChild,
	AfterContentInit,
	AfterViewInit,
	HostListener,
	HostBinding,
	QueryList
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/fromEvent";
import "rxjs/add/operator/throttleTime";

import { position } from "../utils/position";
import { getFocusElementList, isFocusInLastItem, isFocusInFirstItem } from "./../common/tab.service";

@Component({
	selector: "n-button-menu",
	template: `
		<button
		[ngClass]="{
			'btn--primary': type === 'primary',
			'btn--secondary': type === 'secondary'
		}"
		[disabled]="disabled"
		type="button"
		#menubutton
		(click)="onClick.emit()">
			{{value}}
		</button>
		<button
		[ngClass]="{
			'btn--primary-addon': type === 'primary',
			'btn--secondary-addon': type === 'secondary'
		}"
		type="button"
		#dropdownHost
		[attr.aria-expanded]="!menuIsClosed"
		aria-haspopup="true"
		[attr.aria-disabled]="disabled"
		(click)="toggleMenu()"
		[disabled]="disabled">
			<svg
				[ngClass]="{
					'icon--white-sm': type === 'primary',
					'icon--blue-sm': type === 'secondary'
				}"
				width="16"
				height="16"
				viewBox="0 0 16 16">
				<path d="M14.6 4L8 10.6 1.4 4l-.8.8L8 12.3l7.4-7.5z"/>
			</svg>
		</button>
		<ul role="menu">
			<ng-content></ng-content>
		</ul>
	`,
	encapsulation: ViewEncapsulation.None
})
export class ButtonMenu implements AfterContentInit, AfterViewInit {
	/**
	 * Value to show on the main button
	 *
	 * @memberof ButtonMenu
	 */
	@Input() value = "";
	/**
	 * Size of the button menu.
	 *
	 * `"sm"` | `"md"` | `"default"` | `"lg"`
	 * (size `"default"` is being deprecated as of neutrino v1.2.0, please use `"md"` instead)
	 *
	 * @type {("sm" | "default" | "md" | "lg")}
	 * @memberof ButtonMenu
	 */
	@Input() size: "sm" | "md" | "default" | "lg" = "md";
	/**
	 * Primary or secondary button colors.
	 *
	 * `"primary"` | `"secondary"`
	 *
	 * @type {("primary" | "secondary")}
	 * @memberof ButtonMenu
	 */
	@Input() type: "primary" | "secondary" = "primary";

	/**
	 * Set to `true` to disable the button menu.
	 *
	 * @memberof ButtonMenu
	 */
	@Input() disabled = false;
	@Input() appendToBody = false;
	@Input() scrollableContainer: string;
	@Output() close: EventEmitter<any> = new EventEmitter<any>();
	/**
	 * Emitted when main action button is clicked.
	 *
	 * Different from `click`, which is angular event.
	 *
	 * ```html
	 * <n-button-menu
	 *		value="Save"
	 *		(onClick)="doSave()">
	 *	</n-button-menu>
	 * ```
	 *
	 * @type {EventEmitter<any>}
	 * @memberof ButtonMenu
	 */
	@Output() onClick: EventEmitter<any> = new EventEmitter<any>();

	@ViewChild("dropdownHost") rootButton;

	@ViewChild("menubutton") mainButton;

	@ContentChildren(ButtonMenuItem) items: QueryList<ButtonMenuItem>;

	@HostBinding("attr.role") role = "group";

	menuIsClosed = true;
	dropdown: HTMLElement;
	dropdownWrapper: HTMLElement;
	// .bind creates a new function, so we decalre the methods below
	// but .bind them up here
	noop = this._noop.bind(this);
	outsideClick = this._outsideClick.bind(this);
	outsideKey = this._outsideKey.bind(this);
	keyboardNav = this._keyboardNav.bind(this);
	resize;
	scroll;

	private onTouchedCallback: () => void = this._noop;

	constructor(private elementRef: ElementRef) {}

	ngAfterContentInit() {
		this.elementRef.nativeElement.classList.add(this.buildClass());
		this.elementRef.nativeElement.querySelector("[role='menu']").classList.add(this.buildClass("btn_menu"));
	}

	ngAfterViewInit() {
		this.dropdown = this.elementRef.nativeElement.querySelector("[role='menu']");

		this.items.forEach(item => {
			item.parent = this;
		});
	}

	buildClass(baseClass = "btn-group") {
		if (this.size === "sm") { return `${baseClass}--sm`; }
		if (this.size === "default") { return baseClass; }
		if (this.size === "md") { return baseClass; }
		if (this.size === "lg") { return `${baseClass}--lg`; }
	}

	@HostListener("window:keydown", ["$event"])
	keyboardInput(event: KeyboardEvent) {
		let menu = this.elementRef.nativeElement;
		if (this.appendToBody && !this.menuIsClosed) {
			menu = this.dropdownWrapper;
		}
		const listItems = Array.prototype.slice.call(menu.querySelectorAll("[role='menuitem']"));

		// Allows opening of the menu
		if (event.key === "ArrowDown" && event.altKey || event.key === " ") {
			if (event.target === this.rootButton.nativeElement) {
				this.openMenu();
			}
		}

		// Everything else only happens on an open menu
		if (this.menuIsClosed) {
			return;
		}

		if (event.key === "Enter") {
			setTimeout(() => this.closeMenu());
			this.rootButton.nativeElement.focus();
		}

		if (event.key === "ArrowDown") {
			event.preventDefault();
			if (!isFocusInLastItem(event, listItems))  {
				const index = listItems.findIndex(item => item === event.target);
				listItems[index + 1].focus();
			} else {
				listItems[0].focus();
			}
		}

		if (event.key === "ArrowUp") {
			event.preventDefault();
			if (event.target !== this.rootButton.nativeElement) {
				if (!isFocusInFirstItem(event, listItems))  {
					const index = listItems.findIndex(item => item === event.target);
					listItems[index - 1].focus();
				} else {
					listItems[listItems.length - 1].focus();
				}
			}
		}

		if (event.key === "Escape" || (event.key === "ArrowUp" && event.altKey)) {
			event.preventDefault();
			if (event.key === "Escape") {
				event.stopImmediatePropagation();  // don't unintentionally close other widgets that listen for Escape
			}
			this.closeMenu();
			this.rootButton.nativeElement.focus();
		}

		if (event.key === "Tab" && event.shiftKey || event.key === "Tab" && this.dropdown.contains(event.target as Node)) {
			this.closeMenu();
		}
	}

	_noop() {}
	_outsideClick(event) {
		if (!this.elementRef.nativeElement.contains(event.target) &&
			// if we're appendToBody the list isn't within the _elementRef,
			// so we've got to check if our target is possibly in there too.
			!this.dropdown.contains(event.target)) {
			this.closeMenu();
		}
	}
	_outsideKey(event) {
		if (!this.menuIsClosed && event.key === "Tab" && this.dropdown.contains(event.target as Node)) {
			this.closeMenu();
		}
	}
	_keyboardNav(event: KeyboardEvent) {
		if (event.key === "Escape" && !this.menuIsClosed) {
			event.stopImmediatePropagation();  // don't unintentionally close modal if inside of it
		}
		if (event.key === "Escape" || (event.key === "ArrowUp" && event.altKey)) {
			event.preventDefault();
			this.closeMenu();
			this.rootButton.nativeElement.focus();
		} else if (!this.menuIsClosed && event.key === "Tab") {
			// this way focus will start on the next focusable item from the dropdown
			// not the top of the body!
			this.rootButton.nativeElement.focus();
			this.rootButton.nativeElement.dispatchEvent(new KeyboardEvent("keydown", {bubbles: true, cancelable: true, key: "Tab"}));
			this.closeMenu();
		}
	}

	_appendToDropdown() {
		if (document.body.contains(this.dropdownWrapper)) {
			this.dropdown.style.display = "none";
			this.elementRef.nativeElement.appendChild(this.dropdown);
			document.body.removeChild(this.dropdownWrapper);
			this.resize.unsubscribe();
			this.dropdownWrapper.removeEventListener("keydown", this.keyboardNav, true);
		}
	}

	_appendToBody() {
		const positionDropdown = () => {
			position.setElement(
				this.dropdownWrapper,
				position.addOffset(
					position.findAbsolute(this.elementRef.nativeElement, this.dropdownWrapper, "bottom"),
					window.scrollY,
					window.scrollX
				)
			);
		};
		this.dropdown.style.display = "block";
		this.dropdownWrapper = document.createElement("div");
		this.dropdownWrapper.className = "dropdown";
		this.dropdownWrapper.style.width = this.elementRef.nativeElement.offsetWidth + "px";
		this.dropdownWrapper.style.position = "absolute";
		this.dropdownWrapper.appendChild(this.dropdown);
		document.body.appendChild(this.dropdownWrapper);
		positionDropdown();
		this.dropdownWrapper.addEventListener("keydown", this.keyboardNav, true);
		this.resize = Observable.fromEvent(window, "resize")
			.throttleTime(100)
			.subscribe(() => positionDropdown());
	}

	openMenu() {
		this.menuIsClosed = false;

		// move the dropdown list to the body if appendToBody is true
		// and position it relative to the dropdown wrapper
		if (this.appendToBody) {
			this.addScrollEventListener();
			this._appendToBody();
		}

		// we bind noop to document.body.firstElementChild to allow safari to fire events
		// from document. Then we unbind everything later to keep things light.
		document.body.firstElementChild.addEventListener("click", this.noop, true);
		document.body.firstElementChild.addEventListener("keydown", this.noop, true);
		document.addEventListener("click", this.outsideClick, true);
		document.addEventListener("keydown", this.outsideKey, true);

		let menu = this.elementRef.nativeElement;
		if (this.appendToBody) {
			menu = this.dropdownWrapper;
		}
		setTimeout(() => menu.querySelector("[role='menuitem']").focus());
	}

	closeMenu() {
		this.menuIsClosed = true;
		this.close.emit();

		// move the list back in the component on close
		if (this.appendToBody) {
			this.removeScrollEventListener();
			this._appendToDropdown();
		}
		document.body.firstElementChild.removeEventListener("click", this.noop, true);
		document.body.firstElementChild.removeEventListener("keydown", this.noop, true);
		document.removeEventListener("click", this.outsideClick, true);
		document.removeEventListener("keydown", this.outsideKey, true);
	}

	addScrollEventListener() {
		// add scroll event listenter if scrollableContainer is provided
		if (this.scrollableContainer) {
			const container = document.querySelector(this.scrollableContainer);

			if (container) {
				this.scroll = Observable.fromEvent(container, "scroll")
				.subscribe(() => {
					if (this.isVisibleInContainer(this.elementRef.nativeElement, container)) {
						position.setElement(
							this.dropdownWrapper,
							position.addOffset(
								position.findAbsolute(this.elementRef.nativeElement, this.dropdownWrapper, "bottom"),
								window.scrollY,
								window.scrollX
							)
						);
					} else {
						this.closeMenu();
					}
				});
			}
		}
	}

	removeScrollEventListener() {
		if (this.scroll) {
			this.scroll.unsubscribe();
		}
	}

	toggleMenu() {
		if (this.menuIsClosed) {
			this.openMenu();
		} else {
			this.closeMenu();
		}
	}

	isVisibleInContainer(elem, container) {
		const containerTop = container.scrollTop;
		const containerBottom = containerTop + container.offsetHeight;
		const elemTop = elem.offsetTop + elem.offsetHeight;
		const elemBottom = elemTop;

		if ((elemBottom <= containerBottom) && (elemTop >= containerTop)) {
			return true;
		}

		return false;
	}
}
