import { NavigationEnd } from "@angular/router";
import {
	AfterContentInit,
	Component,
	Input,
	ViewChild,
	QueryList,
	HostListener,
	ViewChildren
} from "@angular/core";

import {
	getFocusElementList,
	focusFirstFocusableElement,
	focusLastFocusableElement,
	isFocusInFirstItem,
	isFocusInLastItem,
	isElementFocused
} from "./../common/tab.service";

import { SideNavItem } from "./side-nav-item.component";


/**
 * Each `SideNavGroup` is either a leaf (has no children subitems) or higher level non-leaf (expands) holding
 * associated subitems to create an organized hierarchy in the menu.
 *
 * @export
 * @class SideNavGroup
 * @implements {AfterContentInit}
 */
@Component({
	selector: "n-side-nav-group",
	template: `
	<dt role="heading" aria-level="1" #dt>
		<button
		[id]="accordionId"
		(click)="onClick()"
		[attr.aria-controls]="sectionId"
		[attr.aria-expanded]="expanded">
			<ng-content select=".accordion_icon"></ng-content>
			<ng-content select=".accordion_title"></ng-content>
		</button>
	</dt>
	<dd [id]="sectionId" role="region" [attr.aria-labelledby]="accordionId" #dd>
		<ul class="side-nav_menu">
			<ng-content></ng-content>
		</ul>
	</dd>
  `
})


export class SideNavGroup implements AfterContentInit {
	/**
	 * Counter for unique generation of `SideNavGroup` ids.
	 * @static
	 * @memberof SideNavGroup
	 */
	static sideNavGroupCount = 0;
	/**
	 * Distinct id for the group's top level identifying heading.
	 * @memberof SideNavGroup
	 */
	accordionId = "side-nav-accordion-" + SideNavGroup.sideNavGroupCount;
	/**
	 * The id for the section containing the sub items for the `SideNavGroup`.
	 * @memberof SideNavGroup
	 */
	sectionId = "side-nav-section-" + SideNavGroup.sideNavGroupCount;

	/**
	 * Value `true` if the group is expanded within the `SideNav`.
	 * @type {boolean}
	 * @memberof SideNavGroup
	 */
	@Input() expanded: boolean;

	/**
	 * The top level heading for the `SideNavGroup` in view DOM.
	 * @memberof SideNavGroup
	 */
	@ViewChild("dt") dt;
	/**
	 * The region containing the list subitems for the `SideNavGroup`.
	 * @memberof SideNavGroup
	 */
	@ViewChild("dd") dd;

	/**
	 * Maintains the index for the selected item within the `SideNavGroup`.
	 * @private
	 * @type {number}
	 * @memberof SideNavGroup
	 */
	private index = -1;

	/**
	 * Creates an instance of `SideNavGroup`.
	 * @memberof SideNavGroup
	 */
	constructor() {
		SideNavGroup.sideNavGroupCount++;
	}

	/**
	 * Sets the `SideNavGroup` to the collapsed state hiding the associated subitems.
	 * @memberof SideNavGroup
	 */
	ngAfterContentInit() {
		if (this.hasSubmenu() && this.expanded === undefined) {
			this.expanded = false;
		}
	}

	/**
	 * Adds keyboard functionality for navigation.
	 * @param {KeyboardEvent} event
	 * @memberof SideNavGroup
	 */
	@HostListener("keydown", ["$event"])
	handleKeyboardEvent(event: KeyboardEvent) {
		let headerList = document.getElementsByTagName("N-SIDE-NAV-GROUP");
		console.log(this.dt.nativeElement.querySelector(".side-nav_accordion"));
		let items = getFocusElementList(this.dt.nativeElement.parentNode.parentNode);

		switch (event.key) {
			case "ArrowDown":
				event.preventDefault();

				if (!isFocusInLastItem(event, items))  {
					this.index = items.findIndex(item => item === event.target);
					items[this.index + 1].focus();
				} else {
					items[0].focus();
				}
				break;

			case "PageDown":
				if (event.shiftKey) {
					event.preventDefault();

					let nextHeader = this.dt.nativeElement.parentNode.nextElementSibling;

					if (nextHeader === undefined || nextHeader === null) {
						items[0].focus();
					} else {
						nextHeader.firstElementChild.firstElementChild.focus();
					}
				}
				break;

			case "ArrowUp":
				event.preventDefault();

				if (!isFocusInFirstItem(event, items)) {
					this.index = items.findIndex(item => item === event.target);
					items[this.index - 1].focus();
				} else {
					items[items.length - 1].focus();
				}
				break;

			case "PageUp":
				if (event.shiftKey) {
					event.preventDefault();

					let prevHeader = this.dt.nativeElement.parentNode.previousElementSibling;

					if (prevHeader === undefined || prevHeader === null) {
						(headerList[headerList.length - 1].firstElementChild.firstElementChild as HTMLElement).focus();
					} else if ((event.target as HTMLElement).tagName === "A") {
						this.dt.nativeElement.firstElementChild.focus();
					} else {
						prevHeader.firstElementChild.firstElementChild.focus();
					}
				}
				break;

			case "Home":
				event.preventDefault();
				(headerList[0].firstElementChild.firstElementChild as HTMLElement).focus();
				break;

			case "End":
				event.preventDefault();
				(headerList[headerList.length - 1].firstElementChild.firstElementChild as HTMLElement).focus();
				break;
		}
	}

	/**
	 * Expands and collapses the list of subitems for the `SideNavGroup`.
	 * @memberof SideNavGroup
	 */
	onClick() {
		if (this.expanded !== undefined) {
			this.expanded = !this.expanded;
		}

		if (this.dd.nativeElement.classList.contains("grow-down")) {
			this.dd.nativeElement.classList.remove("grow-down");
		} else {
			this.dd.nativeElement.classList.add("grow-down");
		}
	}

	/**
	 * Checks if there are any subitems associated with the group.
	 * @returns {boolean}
	 * @memberof SideNavGroup
	 */
	hasSubmenu() {
		let ul = this.dd.nativeElement.querySelector(".side-nav_menu");
		return (ul.children && ul.children.length > 0);
	}
}
