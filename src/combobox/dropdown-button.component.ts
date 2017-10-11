import {
	Component,
	OnInit,
	ElementRef,
	Input,
	Output,
	EventEmitter,
	HostListener,
	ContentChild
} from "@angular/core";
import { AbstractDropdownView } from "./../dropdown/abstract-dropdown-view.class";

/**
 * Dropdown button expects a component that implements the AbstractDropdownView base class;
 * in Neutrino those are DropdownList, DropdownTree, and DropdownSubMenu.
 * **note:** According to the design specs you should **only** use DropdownList or DropdownTree.
 */
@Component({
	selector: "n-dropdown-button",
	template: `
		<div class="combo-button-wrapper">
			<button
				role="button"
				class="btn--add-on"
				type="button"
				[disabled]="disabled"
				[ngStyle]="{
					height: open?null:'30px'
				}"
				(click)="toggleDropdown()">
				<svg
					class="icon--xs"
					[ngClass]="{
						open: open
					}"
					width="16"
					height="16">
					<use xlink:href="#chevron_down_16"></use>
				</svg>
			</button>
		</div>
		<!--<div class="dropdown-wrapper">
			<div
				class="dropdown-menu">
				<ng-content></ng-content>
			</div>
		</div>-->
	`,
})
export class DropdownButton {
	/** reference to the dropdown list dom node */
	private dropdown;
	/** specifies weather the dropdown should be visible or not. true/false */
	@Input() open = false;
	/** specifies weather the dropdown is disabled or not. true/false */
	@Input() disabled = false;
	/** emits an empty event when the menu is closed */
	@Output() close: EventEmitter<any> = new EventEmitter<any>();
	/** ContentChild reference to the item list */
	@ContentChild(AbstractDropdownView) view: AbstractDropdownView;

	/**
	 * Instantiates DropdownButton
	 * @param {ElementRef} _elementRef
	 */
	constructor(private _elementRef: ElementRef) {}

	/**
	 * populates `this.dropdown` with the menu node
	 */
	ngAfterViewInit() {
		this.dropdown = this._elementRef.nativeElement.querySelector(".dropdown-menu");
	}

	/**
	 * Handles tabs out of the list, and arrow keys into the list
	 *
	 * @param {KeyboardEvent} ev
	 */
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

	/** closes the dropdown and emits the close event */
	public closeDropdown() {
		this.open = false;
		this.close.emit();
	}

	/** opens the dropdown */
	public openDropdown() {
		this.open = true;
	}

	/** toggles the dropdown */
	public toggleDropdown() {
		if (this.open) {
			this.closeDropdown();
		} else {
			this.openDropdown();
		}
	}
}
