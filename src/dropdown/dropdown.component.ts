import {
	Component,
	Input,
	Output,
	EventEmitter,
	ElementRef,
	ViewEncapsulation,
	ContentChild,
	ViewChild,
	AfterContentInit,
	AfterViewInit,
	HostListener,
	forwardRef
} from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/fromEvent";

import { AbstractDropdownView } from "./abstract-dropdown-view.class";
import { positionElements } from "../common/position.service";
import { ListItem } from "./list-item.interface";
import { KeyCodes } from "./../constant/keys";
import { findNextElem, findPrevElem, focusNextElem } from "./../common/a11y.service";

@Component({
	selector: "cdl-dropdown",
	template: `
		<button
			type="button"
			#dropdownHost
			[attr.aria-label]="a11yLabel"
			[attr.aria-expanded]="!menuIsClosed"
			[attr.aria-disabled]="disabled"
			class="dropdown-value size-{{size}}"
			(click)="toggleMenu()"
			[disabled]="disabled"
			[class.open]="!menuIsClosed">
			{{displayValue}}
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
export class Dropdown implements AfterContentInit {
	private clickInsideComp = false;
	private menuIsClosed = true;
	private prevSelectedItem: ListItem;
	private dropdown: HTMLElement;
	private dropdownWraper: HTMLElement;

	@Input() displayValue = "";
	@Input() size: "sm" | "default" | "lg" = "default";
	@Input() type: "single" | "multi" = "single";
	@Input() disabled = false;
	@Input() appendToBody = false;
	@Output() select: EventEmitter<Object> = new EventEmitter<Object>();

	@ContentChild(AbstractDropdownView) view;
	@ViewChild("dropdownHost") rootButton;

	constructor(public _elementRef: ElementRef) {
		// Check for click event outside of the component
		Observable.fromEvent(_elementRef.nativeElement, "click").subscribe(evt => {
			this.clickInsideComp = true;
		});

		Observable.fromEvent(window, "click").subscribe(evt => {
			if (!this.clickInsideComp && !this.menuIsClosed) {
				this.closeMenu();
			}

			this.clickInsideComp = false;
		});
		// End check for click event outside of the component
	}

	writeValue(value: any) {
		if (this.type === "single") {
			this.prevSelectedItem = value;
		}
	}

	registerOnChange(fn: any) {
		this.propagateChange = fn;
	}

	registerOnTouched() {

	}

	private propagateChange = (_: any) => {};

	@HostListener("keydown", ["$event"])
	onKeyDown(evt) {
		if (evt.which === KeyCodes.ESCAPE || (evt.which === KeyCodes.UP_ARROW && evt.altKey)) {
			evt.preventDefault();
			this.closeMenu();
			this.rootButton.nativeElement.focus();
		} else if (evt.which === KeyCodes.DOWN_ARROW && evt.altKey) {
			evt.preventDefault();
			this.openMenu();
		}

		if (evt.target === this.rootButton.nativeElement
			&& !this.menuIsClosed
			&& evt.which === KeyCodes.DOWN_ARROW) {
			focusNextElem(evt.target);
		}

		if (!this.menuIsClosed && evt.which === KeyCodes.TAB_KEY) {
			this.closeMenu();
		}

		if (this.type === "multi") { return; }

		if (this.menuIsClosed) {
			this.closedDropdownNavigation(evt);
		}
	}

	closedDropdownNavigation(evt) {
		if (evt.which === KeyCodes.DOWN_ARROW) {
			evt.preventDefault();
			let elem = this.view.getNextElement();
			if (elem) {
				elem.click();
			}
		} else if (evt.which === KeyCodes.UP_ARROW) {
			evt.preventDefault();
			let elem = this.view.getPrevElement();
			if (elem) {
				elem.click();
			}
		}
	}

	ngAfterContentInit() {
		this.view.select.subscribe(evt => {
			if (this.type === "single") {
				this.closeMenu();
				this.rootButton.nativeElement.focus();
			}
			evt.item.selected = !evt.item.selected;
			if (this.type === "single" && this.prevSelectedItem && evt.item !== this.prevSelectedItem) {
				this.prevSelectedItem.selected = false;
			}

			this.prevSelectedItem = evt.item;
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

	private openMenu() {
		this.menuIsClosed = false;

		// move the dropdown list to the body if appendToBody is true
		// and position it relative to the dropdown wrapper
		if (this.appendToBody) {
				this.dropdownWraper = document.createElement("div");
				this.dropdown = this._elementRef.nativeElement.querySelector(".dropdown-menu");
				this.dropdownWraper.className = "dropdown-wrapper append-body";
				this.dropdownWraper.style.width = this._elementRef.nativeElement.offsetWidth + "px";
				this.dropdownWraper.appendChild(this.dropdown);
				window.document.querySelector("body").appendChild(this.dropdownWraper);

				positionElements(this._elementRef.nativeElement, this.dropdownWraper, "bottom", true, 0, 0);
		}

	}

	private closeMenu() {
		this.menuIsClosed = true;

		// move the list back in the component on close
		if (this.appendToBody) {
			this._elementRef.nativeElement.appendChild(this.dropdown);
			window.document.querySelector("body").removeChild(this.dropdownWraper);
		}
	}

	private toggleMenu() {
		if (this.menuIsClosed) {
			this.openMenu();
		} else {
			this.closeMenu();
		}
	}
}
