import { Component, Input } from "@angular/core";

/**
 * `Panel` is a component that can be used to display content on the right side of the screen.
 * `Panel`s are generally activated by and linked to a `HeaderAction` component.
 */
@Component({
	selector: "cds-panel, ibm-panel",
	template: `
		<div
			class="cds--header-panel"
			[attr.aria-label]="ariaLabel"
			[ngClass]="{
				'cds--header-panel--expanded': expanded
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

	@Input() ariaLabel;
}
