import {
	Component,
	Output,
	EventEmitter,
	Input
} from "@angular/core";
import { I18n } from "./../i18n/i18n.module";
import { ExperimentalService } from "./../experimental.service";

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
 *
 * @export
 * @class ModalHeader
 */
@Component({
	selector: "ibm-modal-header",
	template: `
		<header class="{{theme}} bx--modal-header">
			<ng-content></ng-content>
			<button
				class="bx--modal-close"
				[attr.aria-label]="closeLabel"
				(click)="onClose()">
				<ibm-icon-close16 class="bx--modal-close__icon"></ibm-icon-close16>
			</button>
		</header>

	`
})
export class ModalHeader {
	/**
	 * Sets the style on the modal heading based on its category.
	 * @type {"default" | "warning" | "error"}
	 */
	@Input() theme = "default";
	/**
	 * Accessible label for the header close button.
	 * Defaults to the `MODAL.CLOSE` value from the i18n service.
	 */
	@Input() closeLabel = this.i18n.get().MODAL.CLOSE;

	/**
	 * To emit the event of clicking on the close icon within the modal.
	 */
	@Output() closeSelect = new EventEmitter();

	get isExperimental() {
		return this.experimental.isExperimental;
	}

	constructor(protected i18n: I18n, protected experimental: ExperimentalService) {}

	/**
	 * Handles click for the close icon button within the `Modal`.
	 */
	public onClose() {
		this.closeSelect.emit();
	}
}
