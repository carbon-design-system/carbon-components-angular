import { Component } from "@angular/core";
import { BaseModal } from "../";

@Component({
	selector: "app-form-modal",
	template: `
		<ibm-modal
			size="lg"
			open="true"
			(overlaySelected)="closeModal()">
			<ibm-modal-header (closeSelect)="closeModal()">
				<h2 ibmModalHeaderLabel>Label</h2>
				<h3 ibmModalHeaderHeading>Modal</h3>
			</ibm-modal-header>
			<section ibmModalContent hasForm="true">
				<h1 ibmModalContentText class="cds--modal-content__regular-content modal-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus erat vel aliquam sodales.
					Phasellus porta velit vel libero pulvinar, sit amet semper purus volutpat.
				</h1>
				<div class="cds--text-input__field-wrapper">
					<ibm-label helperText="Helper text">
						{{label}}
						<input
							ibmText
							placeholder="Placeholder"
							[autocomplete]="false">
					</ibm-label>
				</div>
			</section>
			<ibm-modal-footer>
				<button class="cds--btn cds--btn--secondary" (click)="closeModal()">Show secondary modal</button>
				<button class="cds--btn cds--btn--primary" modal-primary-focus (click)="closeModal()">Close</button>
			</ibm-modal-footer>
		</ibm-modal>
	`,
	styles: [`
		.modal-text {
			margin-bottom: 30px;
		}
	`]
})
export class SampleFormModal extends BaseModal { }
