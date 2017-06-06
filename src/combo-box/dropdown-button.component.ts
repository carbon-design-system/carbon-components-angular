import { Component, OnInit, ElementRef, Input } from "@angular/core";

@Component({
	selector: "cdl-dropdown-button",
	template: `
		<button
			class="combo-button"
			(click)="toggleDropdown()">
			<svg
				class="icon"
				[ngClass]="{
					open: open
				}"
				width="16"
				height="16">
				<use xlink:href="#chevron_down_16"></use>
			</svg>
		</button>
		<div class="dropdown-wrapper">
			<div
				class="dropdown-menu"
				style="position: relative;"
				[ngClass]="{
					open: open
				}">
				<ng-content></ng-content>
			</div>
		</div>
	`,
})
export class DropdownButton {
	@Input() open = false;

	constructor(private _elementRef: ElementRef) {}

	ngAfterViewInit() {
		document.addEventListener("click", (ev) => {
			if (!this._elementRef.nativeElement.contains(ev.target)) {
				this.open = false;
			}
		});
	}

	toggleDropdown() {
		this.open = !this.open;
	}
}
