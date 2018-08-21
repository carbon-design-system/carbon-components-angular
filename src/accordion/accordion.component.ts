import { Component } from "@angular/core";

@Component({
	selector: "ibm-accordion",
	template: `
		<ul class="bx--accordion">
			<ng-content></ng-content>
		</ul>
	`
})
export class Accordion {

}
