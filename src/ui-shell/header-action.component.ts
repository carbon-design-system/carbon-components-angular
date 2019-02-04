import { Component, Input } from "@angular/core";

@Component({
	selector: "ibm-header-action",
	template: `
		<button
			class="bx--header__action"
			[attr.aria-label]="title"
			[title]="title">
			<ng-content></ng-content>
		</button>
	`
})
export class HeaderAction {
	@Input() title;
}
