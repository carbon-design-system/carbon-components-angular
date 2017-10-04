import { Component, Input, ViewChild } from "@angular/core";

@Component({
	selector: "n-side-nav-pane-title",
	template: `
	<button
	class="subpanel_heading"
	type="button"
	aria-level="3"
	(click)="hidePane()"
	#item>
		<ng-content></ng-content>
	</button>
  `
})
export class SideNavPaneTitle {
	@ViewChild("item") item;

	hidePane() {
		this.item.nativeElement.closest(".side-nav_subpanel").classList.remove("slide-in");

		// hide after the animation
		setTimeout( () => {
			this.item.nativeElement.closest(".side-nav_subpanel-wrapper").setAttribute("style", "display: none;");
			this.item.nativeElement.closest("li").querySelector("a").focus();
		}, 360);
	}
}
