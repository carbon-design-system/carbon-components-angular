import {
	AfterContentInit,
	Component,
	Input,
	ViewChild,
	HostListener,
} from "@angular/core";

import {
	getFocusElementList,
	focusFirstFocusableElement,
	focusLastFocusableElement,
	isFocusInFirstItem,
	isFocusInLastItem,
	isElementFocused
} from "./../common/tab.service";

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
	 * A complete list of all the items in the `SideNavGroup` in the form of an array.
	 * @public
	 * @type {array}
	 * @memberof SideNavGroup
	 */
	private items = [];
	private index = -1;
	/**
	 * A complete list of all the headers in the `SideNavGroup` in the form of an array.
	 * @public
	 * @type {array}
	 * @memberof SideNavGroup
	 */
	private headers = [];

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
		this.headers = getFocusElementList(this.dt.nativeElement.parentNode.parentNode);

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

		if (event.key === "ArrowDown") {
			event.preventDefault();

			this.items = getFocusElementList(this.dt.nativeElement.parentNode.parentNode);

			if (!isFocusInLastItem(event, this.items))  {
				this.index = this.items.findIndex(item => item === event.target);
				this.items[this.index + 1].focus();
			} else {
				this.items[0].focus();
				this.index = 0;
			}
		}

		if (event.shiftKey && event.key === "PageDown") {
			event.preventDefault();

			if ((event.target as HTMLElement).tagName === "A") {
				let rootIndex = this.headers.findIndex(item => item === this.dt.nativeElement.firstElementChild);
				if (this.headers[rootIndex + 1] === undefined || this.headers[rootIndex + 1] === null) {
					this.headers[0].focus();
				} else {
					this.headers[rootIndex + 1].focus();
				}
			} else {
				if (!isFocusInLastItem(event, this.headers)) {
					this.index = this.headers.findIndex(item => item === event.target);
					this.headers[this.index + 1].focus();
				} else {
					this.headers[0].focus();
					this.index = 0;
				}
			}
		}

		if (event.key === "ArrowUp") {
			event.preventDefault();
			this.items = getFocusElementList(this.dt.nativeElement.parentNode.parentNode);

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

			if ((event.target as HTMLElement).tagName === "A") {
				(this.dt.nativeElement.firstElementChild).focus();
			} else {
				if (!isFocusInFirstItem(event, this.headers)) {
					this.index = this.headers.findIndex(item => item === event.target);
					this.headers[this.index - 1].focus();
				} else {
					this.headers[this.headers.length - 1].focus();
					this.index = this.headers.length - 1;
				}
			}
		}

		if (event.key === "HOME") {
			event.preventDefault();
			focusFirstFocusableElement(this.items);
		}
		if (event.key === "END") {
			event.preventDefault();
			focusLastFocusableElement(this.items);
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
