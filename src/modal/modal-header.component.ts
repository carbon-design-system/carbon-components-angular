import { Component, Output, EventEmitter, Input } from "@angular/core";


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
		<header class="{{modalType}} modal_header" role="banner">
			<h5 class="header_title">
				<ng-content></ng-content>
			</h5>
			<button class="close--white-md" attr.aria-label="{{'MODAL.CLOSE' | translate}}" (click)="onClose()">
				<ibm-static-icon icon="x" classList="close_icon" size="sm"></ibm-static-icon>
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
