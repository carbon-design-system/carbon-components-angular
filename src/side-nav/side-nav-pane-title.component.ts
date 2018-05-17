import { Component, Input, ViewChild, HostListener } from "@angular/core";

/**
 * `SideNavPaneTitle` expects some title to be projected, to be used as the title of the fly in sub view.
 *
 * @export
 * @class SideNavPaneTitle
 */
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
	/**
	 * The element in the view DOM that displays the parent catagory heading for the items in the pane.
	 * @memberof SideNavPaneTitle
	 */
	@ViewChild("item") item;

	/**
	 * Keyboard listening event to close the menu.
	 * @param {KeyboardEvent} event
	 * @memberof SideNavPaneTitle
	 */
	@HostListener("keydown", ["$event"])
	handleKeyboardEvent(event: KeyboardEvent) {
		if (event.key === "Enter" || event.keyCode === 32 || event.key === "ArrowLeft") {
			event.preventDefault();
			this.hidePane();
		}
	}

	/**
	 * Closes the pane of subitems to go up a level to the parent catagories.
	 * @memberof SideNavPaneTitle
	 */
	hidePane() {
		this.item.nativeElement.closest(".side-nav_subpanel").classList.remove("slide-in");

		// hide after the animation
		setTimeout( () => {
			this.item.nativeElement.closest(".side-nav_subpanel-wrapper").setAttribute("style", "display: none;");
			this.item.nativeElement.closest("li").querySelector("a").focus();
		}, 360);
	}
}
