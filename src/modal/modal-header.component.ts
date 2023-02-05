import {
	Component,
	Output,
	EventEmitter,
	Input
} from "@angular/core";
import { I18n } from "carbon-components-angular/i18n";
import { ExperimentalService } from "carbon-components-angular/experimental";

/**
 * ***Inputs***
 * ```html
 * <ibm-modal-header>Header text</ibm-modal-header>
 * ```
 *
 * ***Outputs***
 * ```html
 * <ibm-modal-header (closeSelect)="closeModal()">Header text</ibm-modal-header>
 * ```
 */
@Component({
	selector: "ibm-modal-header",
	template: `
		<header class="{{theme}} cds--modal-header">
			<ng-content></ng-content>
			<button
				*ngIf="showCloseButton"
				type="button"
				class="cds--modal-close"
				(click)="onClose()">
				<span class="cds--assistive-text">{{ closeLabel }}</span>
				<svg ibmIcon="close" size="20" class="cds--modal-close__icon"></svg>
			</button>
		</header>

	`
})
export class ModalHeader {
	/**
	 * Accessible label for the header close button.
	 * Defaults to the `MODAL.CLOSE` value from the i18n service.
	 */
	@Input() closeLabel = this.i18n.get().MODAL.CLOSE;
	/**
	 * Set to `false` to hide the close button.
	 */
	@Input() showCloseButton = true;

	/**
	 * To emit the event of clicking on the close icon within the modal.
	 */
	@Output() closeSelect = new EventEmitter();

	constructor(protected i18n: I18n, protected experimental: ExperimentalService) {}

	/**
	 * Handles click for the close icon button within the `Modal`.
	 */
	public onClose() {
		this.closeSelect.emit();
	}
}
