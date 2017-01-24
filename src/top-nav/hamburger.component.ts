import { Component, Output, EventEmitter} from "@angular/core";

@Component({
	selector: "cdl-hamburger",
	template: `
	<span class="hamburger" (click)="clickFn()">
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
 		<path class="st0" d="M1
 		3h18v3H1zM1 9h18v3H1zM1 15h18v3H1z"/></svg>
	</span>
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
