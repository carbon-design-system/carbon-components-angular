import { Component, Input, ViewChild, AfterViewInit, ElementRef } from "@angular/core";

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
	static sideNavSubpanelCount = 0;
	buttonId = "side-nav-subpanel-button-" + SideNavSubpanel.sideNavSubpanelCount;
	subsectionId = "side-nav-subpanel-section-" + SideNavSubpanel.sideNavSubpanelCount;

	constructor(private _elementRef: ElementRef) {
		SideNavSubpanel.sideNavSubpanelCount++;
	}

	ngAfterViewInit() {
		// set the ids and aria labels on the button passed in via ng-content
		let button = this._elementRef.nativeElement.querySelector(".subpanel_heading");
		button.setAttribute("id", this.buttonId);
		button.setAttribute("aria-owns", this.subsectionId);
	}
}
