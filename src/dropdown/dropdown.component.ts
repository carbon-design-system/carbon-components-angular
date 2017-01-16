import { Component, OnDestroy, Input, Output, ElementRef, Renderer, ViewEncapsulation, ContentChild } from "@angular/core";

import { ListView } from "./../list-view/list-view.component";

@Component({
	selector: "cdl-dropdown",
	template: `
		<button class="dropdown-value {{size}}" (click)="openMenu()" [disabled]="disabled">
			{{displayValue}}
			<span [class.divider]="isSplit"></span>
			<span class="dropdown-icon" [class.open]="!menuIsClose">
				<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
					<path class="st0" d="M14.6 4L8 10.6 1.4 4l-.8.8L8 12.3l7.4-7.5z"/>
				</svg>
			</span>
		</button>
		<div class="dropdown-menu {{size}} {{type}}" [class.open]="!menuIsClose">
			<ng-content></ng-content>
		</div>
	`,
	encapsulation: ViewEncapsulation.None,
	styleUrls: ["./dropdown.component.scss"],
	host: {"class": "dropdown-wrapper"}
})
export class Dropdown implements OnDestroy {
	private text: string;
	private clickInsideComp = false;
	private listenFn: Function;
	private globalListenFn: Function;
	private menuIsClose: boolean;
	private prevSelectItem: any;

	@Input() displayValue: string;
	@Input() size: "sm" | "default" | "lg";
	@Input() disabled: boolean;
	@Input() selectedVal: any;
	@Input() isSplit: boolean;
	@Input() closeOnSelect: boolean;
	@Input() multiSelect: boolean;

	@ContentChild(ListView) list: ListView;

	constructor(private _elementRef: ElementRef, _renderer: Renderer) {
		this.size = "default";
		this.menuIsClose = true;
		this.disabled = false;
		this.isSplit = false;
		this.closeOnSelect = true;
		this.multiSelect = false;

		// Check for click event outside of the component
		this.listenFn = _renderer.listen(_elementRef.nativeElement, "click", (event) => {
			this.clickInsideComp = true;
		});

		this.globalListenFn = _renderer.listenGlobal("document", "click", (event) => {
			if (!this.clickInsideComp && !this.menuIsClose) {
				this.menuIsClose = true;
			}

			this.clickInsideComp = false;
		});
		// End check for click event outside of the component
	}

	ngAfterViewInit() {
		this.list.select.subscribe((evt) => {
			if (this.closeOnSelect) {
				this.menuIsClose = true;
			}

			if (!this.multiSelect && this.prevSelectItem) {
				this.prevSelectItem.selected = false;
			}

			this.prevSelectItem = evt.item;
		});
	}

	ngOnDestroy() {
		this.listenFn();
		this.globalListenFn();
	}

	private openMenu() {
		this.menuIsClose = !this.menuIsClose;
	}
}
