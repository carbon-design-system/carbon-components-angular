import { Component } from "@angular/core";
import { BaseModal } from "../";

@Component({
	selector: "app-form-modal",
	template: `
		<cds-modal
			size="lg"
			open="true"
			(overlaySelected)="closeModal()">
			<cds-modal-header (closeSelect)="closeModal()">
				<h2 cdsModalHeaderLabel>Label</h2>
				<h3 cdsModalHeaderHeading>Modal</h3>
			</cds-modal-header>
			<section cdsModalContent hasForm="true">
				<h1 cdsModalContentText class="cds--modal-content__regular-content modal-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus erat vel aliquam sodales.
					Phasellus porta velit vel libero pulvinar, sit amet semper purus volutpat.
				</h1>
				<div class="cds--text-input__field-wrapper">
					<cds-label helperText="Helper text">
						{{label}}
						<input
							cdsText
							placeholder="Placeholder"
							[autocomplete]="false">
					</cds-label>
				</div>
			</section>
			<cds-modal-footer>
				<button class="cds--btn cds--btn--secondary" (click)="closeModal()">Show secondary modal</button>
				<button class="cds--btn cds--btn--primary" modal-primary-focus (click)="closeModal()">Close</button>
			</cds-modal-footer>
		</cds-modal>
	`,
	styles: [`
		.modal-text {
			margin-bottom: 30px;
		}
	`]
})
export class SampleFormModal extends BaseModal { }
