import { AfterContentInit, Component, Input, ViewChild } from "@angular/core";


/**
 * Each `SideNavGroup` is either a Leaf (has no children subitems) or higher level Non-Leaf (expands) holding
 * associated subitems to create an organized hierarchy in the menu.
 *
 * selector: <n-side-nav-group>
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
