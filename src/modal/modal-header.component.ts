import { Component, Output, EventEmitter, Input } from "@angular/core";

@Component({
	selector: "cdl-modal-header",
	template: `
		<header class="{{modalType}}">
			<h4 class="header-text">
				<ng-content></ng-content>
			</h4>
			<button class="close-icon" aria-label="Close Tooltip" (click)="onClose()">
				<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 16 16">
				<path d="M14.5 2.6l-1.1-1.1L8 6.9 2.6 1.5 1.5 2.6 6.9 8l-5.4 5.4 1.1 1.1L8 9.1l5.4 5.4 1.1-1.1L9.1 8z"/>
				</svg>
			</button>
		</header>

	`
})

export class ModalHeaderComponent {
	@Input() modalType = "default";
	@Output() closeSelect = new EventEmitter();
	constructor() {}

	public onClose() {
		this.closeSelect.emit();
	}
}
