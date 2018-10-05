import {
	Component,
	Output,
	EventEmitter,
	Input
} from "@angular/core";

const EN = require("./../i18n/en.json");

/**
 * ***Inputs***
 * ```html
 * <ibm-modal-header [modalType]="default">Header text</ibm-modal-header>
 * ```
 *
 * ***Outputs***
 * ```html
 * <ibm-modal-header (closeSelect)="closeModal()">Header text</ibm-modal-header>
 * ```
 *
 * @export
 * @class ModalHeaderComponent
 */
@Component({
	selector: "ibm-modal-header",
	template: `
		<header class="{{modalType}} bx--modal-header" role="banner">
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
export class ModalHeaderComponent {
	/**
	 * Sets the style on the modal heading based on its category.
	 * @type {"default" | "warning" | "error"}
	 * @memberof ModalHeaderComponent
	 */
	@Input() modalType = "default";

	@Input() closeLabel = EN.MODAL.CLOSE;

	/**
	 * To emit the event of clicking on the close icon within the modal.
	 * @memberof ModalHeaderComponent
	 */
	@Output() closeSelect = new EventEmitter();

	/**
	 * Handles click for the close icon button within the `Modal`.
	 * @memberof ModalHeaderComponent
	 */
	public onClose() {
		this.closeSelect.emit();
	}
}
