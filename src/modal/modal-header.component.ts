import { Component, Output, EventEmitter, Input } from "@angular/core";

@Component({
	selector: "cdl-modal-header",
	template: `
		<header class="{{modalType}}">
			<h4>
				<ng-content></ng-content>
			</h4>
		</header>
	`,
	styleUrls: ["./modal-header.component.scss"]
})

export class ModalHeaderComponent {
	@Input() modalType = "default";
	@Output() closeSelect = new EventEmitter();
	constructor() {}
}
