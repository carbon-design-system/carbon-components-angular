import { Component, Input } from "@angular/core";

/**
 * `Panel` is a component that can be used to display content on the right side of the screen.
 * `Panel`s are generally activated by and linked to a `HeaderAction` component.
 */
@Component({
	selector: "ibm-panel",
	template: `
		<aside
			class="bx--panel--overlay"
			[ngClass]="{
				'bx--panel--expanded': expanded
			}">
			<ng-content></ng-content>
		</aside>
	`
})
export class Panel {
	/**
	 * Controls the visibility of the panel
	 */
	@Input() expanded = false;
}
