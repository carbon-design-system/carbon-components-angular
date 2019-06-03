import { Component, Input } from "@angular/core";

/**
 * Carbon uses feature-flags to toggle the new ui-shell feature.
 *
 * To turn on this feature flag, include the feature-flag variable into your SCSS file before importing carbon-components,
 * then set ui-shell to true.
 *
 * ```scss
 * $feature-flags: (
 * 	ui-shell: true
 * );
 * @import 'carbon-components/src/globals/scss/styles';
 * ```
 *
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
	@Input() expanded = false;
}
