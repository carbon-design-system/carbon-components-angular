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
				<!-- old icon -->
				<svg
					*ngIf="!isExperimental"
					class="bx--modal-close__icon"
					fill-rule="evenodd"
					height="10"
					role="img"
					viewBox="0 0 10 10"
					width="10"
					[attr.aria-label]="closeLabel">
					<title>{{closeLabel}}</title>
					<path d="M6.32 5L10 8.68 8.68 10 5 6.32 1.32 10 0 8.68 3.68 5 0 1.32 1.32 0 5 3.68 8.68 0 10 1.32 6.32 5z"></path>
				</svg>
				<!-- new icon -->
				<svg
					*ngIf="isExperimental"
					focusable="false"
					preserveAspectRatio="xMidYMid meet"
					style="will-change: transform;"
					xmlns="http://www.w3.org/2000/svg"
					class="bx--modal-close__icon"
					width="16"
					height="16"
					viewBox="0 0 16 16"
					aria-hidden="true">
					<path
						d="M12 4.7l-.7-.7L8 7.3 4.7 4l-.7.7L7.3 8 4 11.3l.7.7L8 8.7l3.3 3.3.7-.7L8.7 8z">
					</path>
				</svg>
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
