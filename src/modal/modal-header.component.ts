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
				<n-static-icon icon="x" classList="close_icon" size="sm"></n-static-icon>
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
