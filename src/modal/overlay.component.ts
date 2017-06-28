import { Component, Output, EventEmitter } from "@angular/core";

@Component({
	selector: "n-overlay",
	template: `
		<section class="overlay" (click)="overlayClick($event)"></section>
	`
})
export class OverlayComponent {
	@Output() overlaySelect = new EventEmitter();

	constructor() { }

	overlayClick(event) {
		event.stopPropagation();
		this.overlaySelect.emit(event);
	}

}
