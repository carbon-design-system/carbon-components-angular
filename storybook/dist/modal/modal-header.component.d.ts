import { EventEmitter } from "@angular/core";
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
export declare class ModalHeaderComponent {
    /**
     * Sets the style on the modal heading based on its category.
     * @type {"default" | "warning" | "error"}
     * @memberof ModalHeaderComponent
     */
    modalType: string;
    /**
     * To emit the event of clicking on the close icon within the modal.
     * @memberof ModalHeaderComponent
     */
    closeSelect: EventEmitter<{}>;
    /**
     * Handles click for the close icon button within the `Modal`.
     * @memberof ModalHeaderComponent
     */
    onClose(): void;
}
