import { Component, Input, ViewChild, AfterViewInit, ElementRef } from "@angular/core";


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
	[attr.aria-labelledby]="buttonId">
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
	 * Unique generated id for `SideNavSubpanel` catagory heading button.
	 * @memberof SideNavSubpanel
	 */
	buttonId = "side-nav-subpanel-button-" + SideNavSubpanel.sideNavSubpanelCount;
	/**
	 * Unique generated id for `SideNavSubpanel` content section.
	 * @memberof SideNavSubpanel
	 */
	subsectionId = "side-nav-subpanel-section-" + SideNavSubpanel.sideNavSubpanelCount;

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
}
