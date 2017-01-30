import { Component, Output, EventEmitter} from "@angular/core";

@Component({
	selector: "cdl-hamburger",
	template: `
	<button class="hamburger" 
			(click)="clickFn()" 
			aria-label="toggle primary navigation menu" 
			tabindex="0" 
			type="button" 
			role="button" 
			title="Primary navigation menu">
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
 		<path class="st0" d="M1
 		3h18v3H1zM1 9h18v3H1zM1 15h18v3H1z"/></svg>
	</button>
  `,
	styleUrls: ["./hamburger.component.scss"]
})
export class Hamburger {
	@Output() onClick: EventEmitter<Object> = new EventEmitter<Object>();

	private clickFn() {
		let hamburgerClick = {};
			this.onClick.emit({
				hamburgerClick
			});
	}
}
