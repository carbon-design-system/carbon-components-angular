import { Component, Output, EventEmitter, Input } from "@angular/core";


/**
 * class: ModalHeaderComponent
 *
 * selector: `n-modal-header`
 *
 * source: `src/modal/list/modal-header.component.ts`
 *
 * ***Inputs***
 * ```html
 * <n-modal-header [modalType]="default">Header text</n-modal-header>
 * ```
 *
 * ***Outputs***
 * ```html
 * <n-modal-header (closeSelect)="closeModal()">Header text</n-modal-header>
 * ```
 *
 * @export
 * @class ModalHeaderComponent
 */
@Component({
	selector: "n-modal-header",
	template: `
		<header class="{{modalType}} modal_header" role="banner">
			<h5 class="header_title">
				<ng-content></ng-content>
			</h5>
			<button class="close--white-md" aria-label="Close Tooltip" (click)="onClose()">
				<svg class="close_icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 16 16">
				<path d="M14.5 2.6l-1.1-1.1L8 6.9 2.6 1.5 1.5 2.6 6.9 8l-5.4 5.4 1.1 1.1L8 9.1l5.4 5.4 1.1-1.1L9.1 8z"/>
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
