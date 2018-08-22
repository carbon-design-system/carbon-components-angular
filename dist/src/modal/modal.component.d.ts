import { ModalService } from "./modal.service";
import { EventEmitter, OnInit, OnDestroy, ElementRef } from "@angular/core";
/**
 * Component to create modals for presenting content.
 *
 * Using a modal in your application requires `n-modal-placeholder` which would generally be
 * placed near the end of your app component template (app.component.ts or app.component.html) as:
 *
 * ```html
 * <ibm-modal-placeholder></ibm-modal-placeholder>
 * ```
 *
 * A more complete example for `Modal` is given as follows:
 *
 * Example modal definition:
 *
 * ```typescript
 * \@Modal()
 * \@Component({
 * 	selector: "app-sample-modal",
 * 	template: `
 *		<ibm-modal size="xl">
 * 			<ibm-modal-header (closeSelect)="closeModal()">Header text</ibm-modal-header>
 * 			<section class="modal-body">
 * 			<h1>Sample modal works.</h1>
 * 			<button class="btn--icon-link" nPopover="Hello there" title="Popover title" placement="right" appendToBody="false">
 * 				<ibm-icon icon="info" size="sm"></ibm-icon>
 * 			</button>
 * 			{{modalText}}
 * 			</section>
 * 			<ibm-modal-footer><button class="btn--primary cancel-button" (click)="closeModal()">Close</button></ibm-modal-footer>
 * 		</ibm-modal>`,
 * 	styles: [require('./sample-modal.component.scss')]
 * })
 * export class SampleModalComponent {
 * 	closeModal: any; // placeholder for the closeModal method provided by the Modal decorator
 * 	modalText: string;
 * 	constructor(private injector: Injector) {
 * 		this.modalText = this.injector.get("modalText");
 * 	}
 * }
 * ```
 *
 * Example of opening the modal:
 *
 * ```typescript
 * \@Component({
 *  selector: "app-modal-demo",
 *  template: `
 *   <button class="btn--primary" (click)="openModal('drill')">Drill-down modal</button>
 *   <ibm-modal-placeholder></ibm-modal-placeholder>`
 * })
 * export class ModalDemo {
 * 	openModal() {
 * 		this.modalService.create({component: SampleModalComponent, inputs: {modalText: "Hello universe."}});
 * 	}
 * }
 * ```
 *
 * @export
 * @class ModalComponent
 * @implements {OnInit}
 * @implements {OnDestroy}
 */
export declare class ModalComponent implements OnInit, OnDestroy {
    modalService: ModalService;
    /**
     * Size of the modal to display.
     * (size `"default"` is being deprecated as of neutrino v1.2.0, please use `"md"` instead)
     * @type {"sm" | "md" | "default" | "lg" | "xl" | "xxl"}
     * @memberof ModalComponent
     */
    size: string;
    /**
     * Classification of the modal.
     * @type {"default" | "warning" | "error"}
     * @memberof ModalComponent
     */
    modalType: string;
    /**
     * Emits event when click occurs within `n-overlay` element. This is to track click events occuring outside bounds of the `Modal` object.
     * @memberof ModalComponent
     */
    overlaySelected: EventEmitter<{}>;
    /**
     * To emit the closing event of the modal window.
     * @memberof ModalComponent
     */
    close: EventEmitter<{}>;
    /**
     * Maintains a reference to the view DOM element of the `Modal`.
     * @type {ElementRef}
     * @memberof ModalComponent
     */
    modal: ElementRef;
    /**
     * Controls the transitions of the `Modal` component.
     * @type {"in" | "out"}
     * @memberof ModalComponent
     */
    modalState: string;
    /**
     * Creates an instance of `ModalComponent`.
     * @param {ModalService} modalService
     * @memberof ModalComponent
     */
    constructor(modalService: ModalService);
    /**
     * Set document focus to be on the modal component when it is initialized.
     * @memberof ModalComponent
     */
    ngOnInit(): void;
    /**
     * Emit the close event when the modal component is destroyed.
     * @memberof ModalComponent
     */
    ngOnDestroy(): void;
    /**
     * Handle keyboard events to close modal and tab through the content within the modal.
     * @param {KeyboardEvent} event
     * @memberof ModalComponent
     */
    handleKeyboardEvent(event: KeyboardEvent): void;
}
