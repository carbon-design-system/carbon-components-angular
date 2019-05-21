import { Component, Input } from "@angular/core";

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
