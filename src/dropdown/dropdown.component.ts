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

import { AbstractDropdownView } from "./AbstractDropdownView.class";
import { KeyCodes } from "./../constant/keys";
import { findNextElem, findPrevElem, focusNextElem } from "./../common/a11y.service";

@Component({
	selector: "cdl-dropdown",
	template: `
		<button
			#dropdownHost
			[attr.aria-label]="a11yLabel"
			[attr.aria-expanded]="!menuIsClosed"
			[attr.aria-disabled]="disabled"
			class="dropdown-value {{size}}"
			(click)="openMenu()"
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
			class="dropdown-menu {{size}} {{type}}"
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
	private prevSelectItem: any;

	@Input() displayValue = "";
	@Input() size: "sm" | "default" | "lg" = "default";
	@Input() type: "single" | "multi" = "single";
	@Input() disabled = false;
	@Output() select = new EventEmitter<Object>();

	@ContentChild(AbstractDropdownView) view;
	@ViewChild("dropdownHost") rootButton;

	constructor(public _elementRef: ElementRef) {
		// Check for click event outside of the component
		Observable.fromEvent(_elementRef.nativeElement, "click").subscribe(evt => {
			this.clickInsideComp = true;
		});

		Observable.fromEvent(window, "click").subscribe(evt => {
			if (!this.clickInsideComp && !this.menuIsClosed) {
				this.menuIsClosed = true;
			}

			this.clickInsideComp = false;
		});
		// End check for click event outside of the component
	}

	writeValue(value: any) {
		if (this.type === "single") {
			this.prevSelectItem = value;
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
			this.menuIsClosed = true;
			this.rootButton.nativeElement.focus();
		} else if (evt.which === KeyCodes.DOWN_ARROW && evt.altKey) {
			evt.preventDefault();
			this.menuIsClosed = false;
		}

		if (evt.target === this.rootButton.nativeElement
			&& !this.menuIsClosed
			&& evt.which === KeyCodes.DOWN_ARROW) {
			focusNextElem(evt.target);
		}

		if (!this.menuIsClosed && evt.which === KeyCodes.TAB_KEY) {
			this.menuIsClosed = true;
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
				this.menuIsClosed = true;
				this.rootButton.nativeElement.focus();
			}
			evt.item.selected = !evt.item.selected;
			if (this.type === "single" && this.prevSelectItem && evt.item !== this.prevSelectItem) {
				this.prevSelectItem.selected = false;
			}

			this.prevSelectItem = evt.item;
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
		this.menuIsClosed = !this.menuIsClosed;
	}
}
