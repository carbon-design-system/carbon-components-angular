import {
	Component,
	Output,
	EventEmitter,
	Input
} from "@angular/core";
import { I18n } from "./../i18n/i18n.module";

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
			<div class="bx--modal-header">
				<ng-content></ng-content>
			</div>
			<button
				class="bx--modal-close"
				[attr.aria-label]="closeLabel"
				(click)="onClose()">
				<svg
					class="bx--modal-close__icon"
					fill-rule="evenodd"
					height="10"
					role="img"
					viewBox="0 0 10 10"
					width="10"
					[attr.aria-label]="closeLabel"
					[attr.alt]="closeLabel">
					<title>{{closeLabel}}</title>
					<path d="M6.32 5L10 8.68 8.68 10 5 6.32 1.32 10 0 8.68 3.68 5 0 1.32 1.32 0 5 3.68 8.68 0 10 1.32 6.32 5z"></path>
				</svg>
			</button>
		</header>

	`
})
export class ModalHeader {
	/**
	 * Sets the style on the modal heading based on its category.
	 * @type {"default" | "warning" | "error"}
	 * @memberof ModalHeader
	 */
	@Input() theme = "default";
	/**
	 * Accessible label for the header close button.
	 * Defaults to the `MODAL.CLOSE` value from the i18n service.
	 */
	@Input() closeLabel = this.i18n.get().MODAL.CLOSE;

	/**
	 * To emit the event of clicking on the close icon within the modal.
	 * @memberof ModalHeader
	 */
	@Output() closeSelect = new EventEmitter();

	constructor(protected i18n: I18n) {}

	/**
	 * Handles click for the close icon button within the `Modal`.
	 * @memberof ModalHeader
	 */
	public onClose() {
		this.closeSelect.emit();
	}
}
