import { EventEmitter } from "@angular/core";
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
 */
export declare class ModalHeader {
    protected i18n: I18n;
    protected experimental: ExperimentalService;
    /**
     * Sets the style on the modal heading based on its category.
     */
    theme: string;
    /**
     * Accessible label for the header close button.
     * Defaults to the `MODAL.CLOSE` value from the i18n service.
     */
    closeLabel: any;
    /**
     * To emit the event of clicking on the close icon within the modal.
     */
    closeSelect: EventEmitter<{}>;
    readonly isExperimental: boolean;
    constructor(i18n: I18n, experimental: ExperimentalService);
    /**
     * Handles click for the close icon button within the `Modal`.
     */
    onClose(): void;
}
