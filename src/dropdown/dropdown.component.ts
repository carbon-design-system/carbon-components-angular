import {
	Component,
	Input,
	ElementRef,
	ViewEncapsulation,
	ContentChild,
	ViewChild,
	AfterContentInit,
	HostListener
} from "@angular/core";

import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/fromEvent";

import { View } from "./../common/view.class";
import { KeyCodes } from "./../constant/keys";

@Component({
	selector: "cdl-dropdown",
	template: `
		<button
			#dropdownHost
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
	host: {"class": "dropdown-wrapper"},
})
export class Dropdown implements AfterContentInit {
	private text: string;
	private clickInsideComp = false;
	private menuIsClose: boolean = true;
	private prevSelectItem: any;

	@Input() displayValue: string = "";
	@Input() size: "sm" | "default" | "lg" = "default";
	@Input() type: "single" | "multi" = "single";
	@Input() disabled: boolean = false;
	@Input() selectedVal: any;
	@Input() closeOnSelect: boolean = true;

	@ContentChild(View) view;
	@ViewChild("dropdownHost") rootButton;

	constructor(private _elementRef: ElementRef) {
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
		if (evt.which === KeyCodes.ESCAPE) {
			this.menuIsClose = true;
			this.rootButton.nativeElement.focus();
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
		});
	}

	private openMenu() {
		this.menuIsClose = !this.menuIsClose;
	}
}
