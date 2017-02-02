import { Component } from "@angular/core";

@Component({
	selector: "cdl-modal-footer",
	template: `
		<footer>
			<ng-content></ng-content>
		</footer>
	`,
	styleUrls: ["./modal-footer.component.scss"]
})

export class ModalFooterComponent {
	constructor() {}
}