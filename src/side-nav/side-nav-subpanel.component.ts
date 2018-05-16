import { Component, Input, ViewChild, AfterViewInit, ElementRef, HostListener } from "@angular/core";
import {
	getFocusElementList,
	focusFirstFocusableElement,
	focusLastFocusableElement,
	isFocusInFirstItem,
	isFocusInLastItem,
	isElementFocused
} from "./../common/tab.service";


/**
 * Contains the pane for any `SideNavItem` that has subitems.
 * @export
 * @class SideNavSubpanel
 * @implements {AfterViewInit}
 */
@Component({
	selector: "n-side-nav-subpanel",
	template: `
	<ng-content select="n-side-nav-pane-title"></ng-content>
	<section
	class="subpanel_content"
	[id]="subsectionId"
	[attr.aria-labelledby]="buttonId"
	#item>
		<ng-content></ng-content>
	</section>
	`
})
export class SideNavSubpanel implements AfterViewInit {
	/**
	 * To uniquely id 'SideNavSubpanel' components contained in the `SideNavGroup` parent component.
	 * @static
	 * @memberof SideNavSubpanel
	 */
	static sideNavSubpanelCount = 0;
	/**
	 * The region containing the list subitems for the `SideNavSubpanel`.
	 * @memberof SideNavSubpanel
	 */
	@ViewChild("item") item;
	/**
	 * Unique generated id for `SideNavSubpanel` catagory heading button.
	 * @memberof SideNavSubpanel
	 */
	buttonId = "side-nav-subpanel-button-" + SideNavSubpanel.sideNavSubpanelCount;
	/**
	 * Unique generated id for `SideNavSubpanel` content section.
	 * @memberof SideNavSubpanel
	 */
	subsectionId = "side-nav-subpanel-section-" + SideNavSubpanel.sideNavSubpanelCount;

	/**
	 * A complete list of all the items in the `SideNavSubpanel` in the form of an array.
	 * @protected
	 * @type {array}
	 * @memberof SideNavSubpanel
	 */
	private items = [];
	private index = -1;

	constructor(private _elementRef: ElementRef) {
		SideNavSubpanel.sideNavSubpanelCount++;
	}

	/**
	 * Set the ids and aria label attributes on the `SideNavSubpanel` catagory button.
	 * @memberof SideNavSubpanel
	 */
	ngAfterViewInit() {
		// set the ids and aria labels on the button passed in via ng-content
		let button = this._elementRef.nativeElement.querySelector(".subpanel_heading");
		button.setAttribute("id", this.buttonId);
		button.setAttribute("aria-owns", this.subsectionId);
	}

	/**
	 * Adds keyboard functionality for navigation.
	 * @param {KeyboardEvent} event
	 * @memberof SideNavSubpanel
	 */
	@HostListener("keydown", ["$event"])
	handleKeyboardEvent(event: KeyboardEvent) {

		if (event.key === "ArrowDown") {
			event.preventDefault();
			event.stopPropagation();

			this.items = getFocusElementList(this.item.nativeElement.parentNode.parentNode);

			if (!isFocusInLastItem(event, this.items)) {
				this.index = this.items.findIndex(item => item === event.target);
				this.items[this.index + 1].focus();
			} else {
				this.items[0].focus();
				this.index = 0;
			}
		}

		if (event.shiftKey && event.key === "PageDown") {
			event.preventDefault();
			event.stopPropagation();
		}
		if (event.key === "ArrowUp") {
			event.preventDefault();
			event.stopImmediatePropagation();

			this.items = getFocusElementList(this.item.nativeElement.parentNode.parentNode);

			if (!isFocusInFirstItem(event, this.items)) {
				this.index = this.items.findIndex(item => item === event.target);
				this.items[this.index - 1].focus();
			} else {
				this.items[this.items.length - 1].focus();
				this.index = this.items.length - 1;
			}
		}

		if (event.shiftKey && event.key === "PageUp") {
			event.preventDefault();
			event.stopImmediatePropagation();
		}

		if (event.key === "HOME") {
			event.preventDefault();
			event.stopImmediatePropagation();

			focusFirstFocusableElement(this.items);
		}
		if (event.key === "END") {
			event.stopImmediatePropagation();

			focusLastFocusableElement(this.items);
		}
	}
}
