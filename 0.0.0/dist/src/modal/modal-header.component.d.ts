import { EventEmitter } from "@angular/core";
import { I18n } from "./../i18n/i18n.module";
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
    protected i18n: I18n;
    /**
     * Sets the style on the modal heading based on its category.
     * @type {"default" | "warning" | "error"}
     * @memberof ModalHeaderComponent
     */
    modalType: string;
    /**
     * Accessible label for the header close button.
     * Defaults to the `MODAL.CLOSE` value from the i18n service.
     */
    closeLabel: any;
    /**
     * To emit the event of clicking on the close icon within the modal.
     * @memberof ModalHeaderComponent
     */
    closeSelect: EventEmitter<{}>;
    constructor(i18n: I18n);
    /**
     * Handles click for the close icon button within the `Modal`.
     * @memberof ModalHeaderComponent
     */
    onClose(): void;
}
