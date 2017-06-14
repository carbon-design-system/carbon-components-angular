import {
	Component,
	OnInit,
	ElementRef,
	Input,
	HostListener,
	ContentChild
} from "@angular/core";
import { AbstractDropdownView } from "./../dropdown/abstract-dropdown-view.class";

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
	private dropdown;
	@Input() open = false;
	@ContentChild(AbstractDropdownView) view: AbstractDropdownView;

	constructor(private _elementRef: ElementRef) {}

	ngAfterViewInit() {
		this.dropdown = this._elementRef.nativeElement.querySelector(".dropdown-menu");
		document.addEventListener("click", (ev) => {
			if (!this._elementRef.nativeElement.contains(ev.target)) {
				// this.open = false;
			}
		});
	}

	@HostListener("keydown", ["$event"])
	private keyDown(ev: KeyboardEvent) {
		if (ev.key === "Tab") {
			this.open = false;
		}
		if (ev.key === "ArrowDown" && !this.dropdown.contains(ev.target)) {
			ev.stopImmediatePropagation();
			this.view.getCurrentElement().focus();
		}
	}

	public toggleDropdown() {
		this.open = !this.open;
	}
}
