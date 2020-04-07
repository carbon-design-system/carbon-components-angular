import { Component, Input } from "@angular/core";

/**
 * `Panel` is a component that can be used to display content on the right side of the screen.
 * `Panel`s are generally activated by and linked to a `HeaderAction` component.
 */
@Component({
	selector: "ibm-panel",
	template: `
		<div
			class="bx--panel--overlay"
			[attr.aria-label]="ariaLabel"
			[ngClass]="{
				'bx--panel--expanded': expanded
			}">
			<ng-content></ng-content>
		</div>
	`
})
export class Panel {
	/**
	 * Controls the visibility of the panel
	 */
	@Input() expanded = false;

	@Input() ariaLabel = "Header panel";
}
