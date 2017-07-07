import {
	Component,
	Input,
	Output,
	EventEmitter,
	ElementRef,
	ViewEncapsulation,
	ContentChild,
	OnInit,
	ViewChild,
	AfterContentInit,
	AfterViewInit,
	HostListener,
	forwardRef,
	OnDestroy
} from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/fromEvent";
import "rxjs/add/operator/throttleTime";

import { TranslateService } from "@ngx-translate/core";

import { AbstractDropdownView } from "./abstract-dropdown-view.class";
import { positionElements } from "../common/position.service";
import { ListItem } from "./list-item.interface";
import { findNextElem, findPrevElem, focusNextElem } from "./../common/a11y.service";

@Component({
	selector: "n-dropdown",
	template: `
		<button
			type="button"
			#dropdownHost
			[attr.aria-expanded]="!menuIsClosed"
			[attr.aria-disabled]="disabled"
			class="dropdown-value size-{{size}}"
			(click)="toggleMenu()"
			(blur)="onBlur()"
			[disabled]="disabled"
			[class.open]="!menuIsClosed">
			<span *ngIf="valueSelected()">{{getDisplayValue() | async}}</span>
			<span *ngIf="!valueSelected()" class="placeholder">{{getDisplayValue() | async}}</span>
			<span class="dropdown-icon" [class.open]="!menuIsClosed">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 16 16">
					<path d="M14.6 4L8 10.6 1.4 4l-.8.8L8 12.3l7.4-7.5z"/>
				</svg>
			</span>
		</button>
		<div
			class="dropdown-menu size-{{size}}"
			[class.popover]="appendToBody"
			[class.open]="!menuIsClosed">
			<ng-content></ng-content>
		</div>
	`,
	encapsulation: ViewEncapsulation.None,
	host: {
		"class": "dropdown-wrapper",
		"role": "combobox"
	},
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => Dropdown),
			multi: true
		}
	]
})
export class Dropdown implements OnInit, AfterContentInit, AfterViewInit, OnDestroy {
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

	@Input() placeholder = "";
	@Input() displayValue = "";
	@Input() size: "sm" | "default" | "lg" = "default";
	@Input() type: "single" | "multi" = "single";
	@Input() disabled = false;
	@Input() appendToBody = false;
	@Input() scrollableContainer: string;
	@Output() select: EventEmitter<Object> = new EventEmitter<Object>();
	@Output() onClose: EventEmitter<any> = new EventEmitter<any>();

	@ContentChild(AbstractDropdownView) view: AbstractDropdownView;
	@ViewChild("dropdownHost") rootButton;

	constructor(private _elementRef: ElementRef, private _translate: TranslateService) {}

	ngOnInit() {
		this.view.type = this.type;
	}

	ngAfterContentInit() {
		this.view.type = this.type;
		this.view.size = this.size;
		this.view.select.subscribe(evt => {
			if (this.type === "single") {
				this.closeMenu();
				this.rootButton.nativeElement.focus();
			}
			if (this.type === "multi") {
				this.propagateChange(this.view.getSelected());
			} else {
				if (evt.item.selected) {
					this.propagateChange(evt.item);
				} else {
					this.propagateChange(null);
				}
			}
			this.select.emit(evt);
		});
	}

	ngAfterViewInit() {
		this.dropdown = this._elementRef.nativeElement.querySelector(".dropdown-menu");
	}

	ngOnDestroy() {
		if (this.appendToBody) {
			this._appendToDropdown();
		}
	}

	writeValue(value: any) {
		if (value) {
			if (this.type === "single") {
				this.view.propagateSelected([value]);
			} else {
				this.view.propagateSelected(value);
			}
		}
	}

	onBlur() {
		this.onTouchedCallback();
	}

	registerOnChange(fn: any) {
		this.propagateChange = fn;
	}

	registerOnTouched(fn: any) {
		this.onTouchedCallback = fn;
	}

	propagateChange = (_: any) => {};

	@HostListener("keydown", ["$event"])
	onKeyDown(ev: KeyboardEvent) {
		if (ev.key === "Escape" && !this.menuIsClosed) {
			ev.stopImmediatePropagation();  // don't unintentionally close other widgets that listen for Escape
		}
		if (ev.key === "Escape" || (ev.key === "ArrowUp" && ev.altKey)) {
			ev.preventDefault();
			this.closeMenu();
			this.rootButton.nativeElement.focus();
		} else if (ev.key === "ArrowDown" && ev.altKey) {
			ev.preventDefault();
			this.openMenu();
		}

		if (!this.menuIsClosed && ev.key === "Tab" && this.dropdown.contains(ev.target as Node)) {
			this.closeMenu();
		}

		if (!this.menuIsClosed && ev.key === "Tab" && ev.shiftKey) {
			this.closeMenu();
		}

		if (this.type === "multi") { return; }

		if (this.menuIsClosed) {
			this.closedDropdownNavigation(ev);
		}
	}

	closedDropdownNavigation(ev) {
		if (ev.key === "ArrowDown") {
			ev.preventDefault();
			this.view.getCurrentItem().selected = false;
			let item = this.view.getNextItem();
			if (item) { item.selected = true; }
		} else if (ev.key === "ArrowUp") {
			ev.preventDefault();
			this.view.getCurrentItem().selected = false;
			let item = this.view.getPrevItem();
			if (item) { item.selected = true; }
		}
	}

	getDisplayValue() {
		let selected = this.view.getSelected();
		if (selected && !this.displayValue) {
			if (this.type === "multi") {
				return this._translate.get("DROPDOWN.SELECTED", {number: selected.length});
			} else {
				return Observable.of(selected[0].content);
			}
		} else if (selected) {
			return Observable.of(this.displayValue);
		}
		return Observable.of(this.placeholder);
	}

	valueSelected() {
		if (this.view.getSelected()) { return true; }
		return false;
	}

	_noop() {}
	_outsideClick(ev) {
		if (!this._elementRef.nativeElement.contains(ev.target) &&
			// if we're appendToBody the list isn't within the _elementRef,
			// so we've got to check if our target is possibly in there too.
			!this.dropdown.contains(ev.target)) {
			this.closeMenu();
		}
	}
	_outsideKey(ev) {
		if (!this.menuIsClosed && ev.key === "Tab" && this.dropdown.contains(ev.target as Node)) {
			this.closeMenu();
		}
	}
	_keyboardNav(ev: KeyboardEvent) {
		if (ev.key === "Escape" && !this.menuIsClosed) {
			ev.stopImmediatePropagation();  // don't unintentionally close modal if inside of it
		}
		if (ev.key === "Escape" || (ev.key === "ArrowUp" && ev.altKey)) {
			ev.preventDefault();
			this.closeMenu();
			this.rootButton.nativeElement.focus();
		} else if (!this.menuIsClosed && ev.key === "Tab") {
			// this way focus will start on the next focusable item from the dropdown
			// not the top of the body!
			this.rootButton.nativeElement.focus();
			this.rootButton.nativeElement.dispatchEvent(new KeyboardEvent("keydown", {bubbles: true, cancelable: true, key: "Tab"}));
			this.closeMenu();
		}
	}

	_appendToDropdown() {
		if (document.body.contains(this.dropdownWrapper)) {
			this._elementRef.nativeElement.appendChild(this.dropdown);
			document.body.removeChild(this.dropdownWrapper);
			this.resize.unsubscribe();
			this.dropdownWrapper.removeEventListener("keydown", this.keyboardNav, true);
		}
	}

	_appendToBody() {
		this.dropdownWrapper = document.createElement("div");
		this.dropdownWrapper.className = "dropdown-wrapper append-body";
		this.dropdownWrapper.style.width = this._elementRef.nativeElement.offsetWidth + "px";
		this.dropdownWrapper.appendChild(this.dropdown);
		document.body.appendChild(this.dropdownWrapper);
		positionElements(this._elementRef.nativeElement, this.dropdownWrapper, "bottom", true, 0, 0);
		this.dropdownWrapper.addEventListener("keydown", this.keyboardNav, true);
		this.resize = Observable.fromEvent(window, "resize")
			.throttleTime(100)
			.subscribe(() => {
				positionElements(this._elementRef.nativeElement, this.dropdownWrapper, "bottom", true, 0, 0);
			});
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
		document.addEventListener("click", this.outsideClick, true);
		setTimeout(() => this.view.getCurrentElement().focus(), 0);
	}

	closeMenu() {
		this.menuIsClosed = true;
		this.onClose.emit();

		// move the list back in the component on close
		if (this.appendToBody) {
			this.removeScrollEventListener();
			this._appendToDropdown();
		}
		document.body.firstElementChild.removeEventListener("click", this.noop, true);
		document.removeEventListener("click", this.outsideClick, true);
	}

	addScrollEventListener() {
		// add scroll event listenter if scrollableContainer is provided
		if (this.scrollableContainer) {
			const container = document.querySelector(this.scrollableContainer);

			if (container) {
				this.scroll = Observable.fromEvent(container, "scroll")
				.subscribe(() => {
					if (this.isVisibleInContainer(this._elementRef.nativeElement, container)) {
						positionElements(this._elementRef.nativeElement, this.dropdownWrapper, "bottom", true, 0, 0);
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
			document.addEventListener("keydown", this.outsideKey);
		} else {
			this.closeMenu();
			document.removeEventListener("keydown", this.outsideKey);
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
