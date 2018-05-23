import { NavigationEnd } from "@angular/router";
import {
	AfterContentInit,
	Component,
	Input,
	ElementRef,
	ViewChild,
	HostListener
} from "@angular/core";

import { getFocusElementList, isFocusInFirstItem, isFocusInLastItem } from "./../common/tab.service";

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
	 * Creates an instance of `SideNavGroup`.
	 * @memberof SideNavGroup
	 */
	constructor(public elementRef: ElementRef) {
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
		const headerList = this.elementRef.nativeElement.parentNode.querySelectorAll("n-side-nav-group");
		const items = getFocusElementList(this.elementRef.nativeElement.parentNode);

		switch (event.key) {
			case "ArrowDown":
				event.preventDefault();

				if (!isFocusInLastItem(event, items))  {
					const index = items.findIndex(item => item === event.target);
					items[index + 1].focus();
				} else {
					items[0].focus();
				}
				break;

			case "PageDown":
				if (event.ctrlKey) {
					const nextHeader = this.dt.nativeElement.parentNode.nextElementSibling;

					if (!nextHeader) {
						headerList[0].focus();
					} else {
						nextHeader.firstElementChild.firstElementChild.focus();
					}
				}
				break;

			case "ArrowUp":
				event.preventDefault();

				if (!isFocusInFirstItem(event, items)) {
					const index = items.findIndex(item => item === event.target);
					items[index - 1].focus();
				} else {
					items[items.length - 1].focus();
				}
				break;

			case "PageUp":
				if (event.ctrlKey) {
					const prevHeader = this.dt.nativeElement.parentNode.previousElementSibling;

					if (!prevHeader) {
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
