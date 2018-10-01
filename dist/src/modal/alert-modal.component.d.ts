import { Injector, ElementRef } from "@angular/core";
/**
 * Component to create standard modals for presenting content or asking for user's input.
 * It can show as a passive modal showing only text or show as a transactional modal with
 * multiple buttons for different actions for the user to choose from.
 *
 * Using a modal in your application requires `ibm-modal-placeholder` which would generally be
 * placed near the end of your app component template (app.component.ts or app.component.html) as:
 *
 * ```html
 * <ibm-modal-placeholder></ibm-modal-placeholder>
 * ```
 *
 * Example of opening the modal:
 *
 * ```typescript
 * \@Component({
 *  selector: "app-modal-demo",
 *  template: `
 *   <button class="btn--primary" (click)="openModal()">Open modal</button>
 *   <ibm-modal-placeholder></ibm-modal-placeholder>`
 * })
 * export class ModalDemo {
 * 	openModal() {
 * 		this.modalService.show({
 *			modalType: "default",
 *			modalLabel: "optional header text",
 *			modalTitle: "Modal modalTitle",
 *			text: "Modal text",
 *			buttons: [{
 *				text: "Button text",
 *				type: "primary",
 *				click: clickFunction
 *			}]
 *		});
 * 	}
 * }
 * ```
 *
 * @export
 * @class AlertModalComponent
 */
export declare class AlertModalComponent {
    private injector;
    private elementRef;
    modalType: string;
    modalLabel: string;
    modalTitle: string;
    modalContent: string;
    buttons: any[];
    /**
     * Creates an instance of `AlertModalComponent`.
     * @param {ModalService} modalService
     * @memberof AlertModalComponent
     */
    constructor(injector: Injector, elementRef: ElementRef);
    buttonClicked(buttonIndex: any): void;
    closeModal(): void;
}
