import { Component, Input, ViewChild } from "@angular/core";

@Component({
	selector: "cdl-side-nav-pane-title",
	template: `
	<button class="side-nav-pane-title" (click)="hidePane()" #item>
		<svg
			class="side-nav-arrow"
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			viewBox="0 0 16 16">
			<path d="M4 14.7l6.6-6.6L4 1.6l.8-.9 7.5 7.4-7.5 7.5z"/>
		</svg>
		<ng-content></ng-content>
	</button>
  `
})
export class SideNavPaneTitle {
	@ViewChild("item") item;

	hidePane() {
		this.item.nativeElement.closest(".left-nav-container").classList.remove("side-nav-pane-sub-template-visible");

		// hide after the animation
		setTimeout( () => {
			this.item.nativeElement.closest(".side-nav-pane-sub-template").classList.remove("side-nav-pane-visible");
		}, 200);
	}
}
