import {
	Component,
	Input,
	ElementRef,
	ViewEncapsulation,
	ContentChild,
	ViewChild,
	AfterContentInit,
	AfterViewInit,
	HostListener
} from "@angular/core";

import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/fromEvent";

import { View } from "./../common/view.class";
import { KeyCodes } from "./../constant/keys";
import { findNextElem, findPrevElem, focusNextElem } from "./../common/a11y.service";

@Component({
	selector: "cdl-dropdown",
	template: `
		<button
			#dropdownHost
			[attr.aria-label]="'Toggle dropdown display'"
			[attr.aria-expanded]="!menuIsClose"
			[attr.aria-disabled]="disabled"
			class="dropdown-value {{size}}"
			(click)="openMenu()"
			[disabled]="disabled"
			[class.open]="!menuIsClose">
			{{displayValue}}
			<span class="dropdown-icon" [class.open]="!menuIsClose">
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
			[class.open]="!menuIsClose">
			<ng-content></ng-content>
		</div>
	`,
	encapsulation: ViewEncapsulation.None,
	host: {
		"class": "dropdown-wrapper",
		"role": "combobox"
	}
})
export class Dropdown implements AfterContentInit {
	private text: string;
	private clickInsideComp = false;
	private menuIsClose = true;
	private prevSelectItem: any;
	private currentEl = null;
	private list: Array<any>;
	private idx = -1;

	@Input() displayValue = "";
	@Input() size: "sm" | "default" | "lg" = "default";
	@Input() type: "single" | "multi" = "single";
	@Input() dropdownType: "list-view" | "tree-view" | "sub-menu-view" = "list-view";
	@Input() disabled = false;
	@Input() selectedVal: any;
	@Input() closeOnSelect = true;

	@ContentChild(View) view;
	@ViewChild("dropdownHost") rootButton;

	constructor(public _elementRef: ElementRef) {
		// Check for click event outside of the component
		Observable.fromEvent(_elementRef.nativeElement, "click").subscribe(evt => {
			this.clickInsideComp = true;
		});

		Observable.fromEvent(window, "click").subscribe(evt => {
			if (!this.clickInsideComp && !this.menuIsClose) {
				this.menuIsClose = true;
			}

			this.clickInsideComp = false;
		});
		// End check for click event outside of the component
	}

	@HostListener("keydown", ["$event"])
	onKeyDown(evt) {
		if (evt.which === KeyCodes.ESCAPE || (evt.which === KeyCodes.UP_ARROW && evt.altKey)) {
			evt.preventDefault();
			this.menuIsClose = true;
			this.rootButton.nativeElement.focus();
		} else if (evt.which === KeyCodes.DOWN_ARROW && evt.altKey) {
			evt.preventDefault();
			this.menuIsClose = false;
		}

		if (evt.target === this.rootButton.nativeElement && !this.menuIsClose && evt.which === KeyCodes.DOWN_ARROW) {
			focusNextElem(evt.target);
		}

		if (!this.menuIsClose && evt.target === this.rootButton.nativeElement && evt.which === KeyCodes.TAB_KEY) {
			this.menuIsClose = true;
		}

		if (this.type === "multi") { return; }

		if (this.menuIsClose) {
			this.closedDropdownNavigation(evt);
		}
	}

	closedDropdownNavigation(evt) {
		if (this.dropdownType === "list-view") {
			if (evt.which === KeyCodes.DOWN_ARROW) {
				evt.preventDefault();
				if (this.currentEl === null) {
					this.currentEl = findNextElem(evt.target).querySelector("[tabindex='0'");
					this.currentEl.click();
				} else {
					let nextEl = findNextElem(this.currentEl);
					if (nextEl) {
						this.currentEl = nextEl;
						this.currentEl.click();
					}
				}
			} else if (evt.which === KeyCodes.UP_ARROW) {
				evt.preventDefault();
				if (this.currentEl) {
					let prevEl = findPrevElem(this.currentEl);
					if (prevEl) {
						this.currentEl = prevEl;
						this.currentEl.click();
					}
				}
			}
		} else if (this.dropdownType === "tree-view" || this.dropdownType === "sub-menu-view") {
			if (evt.which === KeyCodes.DOWN_ARROW) {
				evt.preventDefault();
				if (this.idx < (this.list.length - 1)) {
					this.idx++;
					while (this.list[this.idx].firstElementChild.classList.contains("disabled")) {
						this.idx++;
					}
					this.list[this.idx].firstElementChild.click();
				}
			} else if (evt.which === KeyCodes.UP_ARROW) {
				evt.preventDefault();
				if (this.idx > 0) {
					this.idx--;
					while (this.list[this.idx].firstElementChild.classList.contains("disabled")) {
						this.idx--;
					}
					this.list[this.idx].firstElementChild.click();
				}
			}
		}
	}

	ngAfterContentInit() {
		this.view.select.subscribe(evt => {
			if (this.closeOnSelect) {
				this.menuIsClose = true;
				this.rootButton.nativeElement.focus();
			}

			if (this.type === "single" && this.prevSelectItem && evt.item !== this.prevSelectItem) {
				this.prevSelectItem.selected = false;
			}

			this.prevSelectItem = evt.item;

			function findInd(el) {
				return el.querySelector("span").innerHTML === evt.item.content;
			}

			if (this.dropdownType === "tree-view" || this.dropdownType === "sub-menu-view") {
				this.idx = this.list.findIndex(findInd);
			}
		});
	}

	ngAfterViewInit() {
		if (this.dropdownType === "tree-view") {
			this.list = Array.from(this._elementRef.nativeElement.getElementsByTagName("cdl-tree-view-item"));
			this.list = this.list.filter(function(el) {
				return el.childElementCount === 1;
			});
		} else if (this.dropdownType === "sub-menu-view") {
			this.list = Array.from(this._elementRef.nativeElement.getElementsByTagName("cdl-sub-menu-view-item"));
			this.list = this.list.filter(function(el) {
				return el.childElementCount === 1;
			});
		}
	}

	private openMenu() {
		this.menuIsClose = !this.menuIsClose;
	}
}
