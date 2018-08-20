import { OnInit, ViewContainerRef } from "@angular/core";
import { ModalPlaceholderService } from "./modal-placeholder.service";
/**
 * Using a modal in your application requires *this* component (`n-modal-placeholder`).
 * It would generally be placed near the end of your app component template
 * (app.component.ts or app.component.html) as:
 *
 * ```html
 * ...
 * <ibm-modal-placeholder></ibm-modal-placeholder>
 * ```
 *
 * A more complete example for `Modal` is given as follows:
 *
 * ```html
 * <ibm-modal size="xl" (overlaySelected)="closeModal()">
 * 	<ibm-modal-header (closeSelect)="closeModal()">Header text</ibm-modal-header>
 * 	<section class="modal-body">
 * 		<h1>It Works!</h1>
 * 		{{modalText}}
 * 	</section>
 * 	<ibm-modal-footer><button class="btn cancel-button" (click)="closeModal()">Cancel</button></ibm-modal-footer>
 * </ibm-modal>
 * ...
 * <ibm-modal-placeholder></ibm-modal-placeholder>
 * ```
 *
 * @export
 * @class ModalPlaceholderComponent
 * @implements {OnInit}
 */
export declare class ModalPlaceholderComponent implements OnInit {
    modalPlaceholderService: ModalPlaceholderService;
    /**
     * Maintains a reference to the view DOM element of the `ModalPlaceholderComponent`.
     * @type {ViewContainerRef}
     * @memberof ModalPlaceholderComponent
     */
    viewContainerRef: ViewContainerRef;
    /**
     * Creates an instance of `ModalPlaceholderComponent`.
     * @param {ModalService} modalPlaceholderService
     * @memberof ModalPlaceholderComponent
     */
    constructor(modalPlaceholderService: ModalPlaceholderService);
    /**
     * Initializes the component using `ModalService`.
     * @memberof ModalPlaceholderComponent
     */
    ngOnInit(): void;
}
