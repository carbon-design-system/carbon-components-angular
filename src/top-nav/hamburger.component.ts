import { Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
	selector: "cdl-hamburger",
	template: `
	<button class="hamburger"
			[ngClass]="{'hamburger-selected': selected}"
			(click)="clickFn()"
			aria-label="toggle primary navigation menu"
			tabindex="0"
			type="button"
			role="button"
			title="Primary navigation menu">
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="1 3 18 18">
 		<path class="st0" d="M1
 		3h18v3H1zM1 9h18v3H1zM1 15h18v3H1z"/></svg>
	</button>
  `,
	styleUrls: ["./hamburger.component.scss"]
})
export class Hamburger {
	@Input() selected = false;
	@Output() onClick: EventEmitter<Object> = new EventEmitter<Object>();

	public clickFn() {
		let hamburgerClick = {};
			this.onClick.emit({
				hamburgerClick
			});
	}
}
