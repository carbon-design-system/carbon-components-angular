import { ModalService } from "./modal.service";
import { AfterViewInit, EventEmitter, OnDestroy, OnInit, ElementRef } from "@angular/core";
/**
 * Component to create modals for presenting content.
 *
 * Using a modal in your application requires `ibm-modal-placeholder` which would generally be
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
 * 			<button class="btn--icon-link" nPopover="Hello there" title="Popover title" placement="right" appendInline="true">
 * 				<ibm-icon icon="info" size="sm"></ibm-icon>
 * 			</button>
 * 			{{modalText}}
 * 			</section>
 * 			<ibm-modal-footer><button ibmButton="primary" (click)="closeModal()">Close</button></ibm-modal-footer>
 * 		</ibm-modal>`,
 * 	styles: [require('./sample-modal.component.scss')]
 * })
 * export class SampleModal {
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
 *   <button ibmButton="primary" (click)="openModal('drill')">Drill-down modal</button>
 *   <ibm-modal-placeholder></ibm-modal-placeholder>`
 * })
 * export class ModalDemo {
 * 	openModal() {
 * 		this.modalService.create({component: SampleModal, inputs: {modalText: "Hello universe."}});
 * 	}
 * }
 * ```
 *
 */
export declare class Modal implements AfterViewInit, OnInit, OnDestroy {
    modalService: ModalService;
    /**
     * Size of the modal to display.
     */
    size: "sm" | "md" | "lg" | "xl" | "xxl";
    /**
     * Classification of the modal.
     */
    theme: "default" | "danger";
    /**
     * Label for the modal.
     */
    modalLabel: string;
    /**
     * Emits event when click occurs within `n-overlay` element. This is to track click events occuring outside bounds of the `Modal` object.
     */
    overlaySelected: EventEmitter<{}>;
    /**
     * To emit the closing event of the modal window.
     */
    close: EventEmitter<{}>;
    /**
     * Maintains a reference to the view DOM element of the `Modal`.
     */
    modal: ElementRef;
    /**
     * Controls the transitions of the `Modal` component.
     */
    modalState: "in" | "out";
    /**
     * An element should have 'data-modal-primary-focus' as an attribute to receive initial focus within the `Modal` component.
     */
    selectorPrimaryFocus: string;
    /**
     * Creates an instance of `Modal`.
     */
    constructor(modalService: ModalService);
    /**
     * Set modalState on the modal component when it is initialized.
     */
    ngOnInit(): void;
    /**
     * Set document focus to be on the modal component after it is initialized.
     */
    ngAfterViewInit(): void;
    /**
     * Emit the close event when the modal component is destroyed.
     */
    ngOnDestroy(): void;
    /**
     * Handle keyboard events to close modal and tab through the content within the modal.
     */
    handleKeyboardEvent(event: KeyboardEvent): void;
}
