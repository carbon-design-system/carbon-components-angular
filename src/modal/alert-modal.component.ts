import {
	Component,
	Injector,
	OnInit,
	ElementRef,
	AfterViewInit
} from "@angular/core";
import {
	trigger,
	state,
	style,
	transition,
	animate
} from "@angular/animations";
import Modal from "./modal.decorator";
import { ModalService } from "./modal.service";

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
 *
 * 	openModal() {
 * 		this.modalService.show({
 *			modalType: "default" | "danger",
 *			headerText: "optional header text",
 *			title: "Modal title",
 *			text: "Modal text",
 *			buttons: [{
 *				text: "Button text",
 *				type: "primary" | "secondary" | "tertiary" | "ghost" | "danger" | "danger--primary" = "primary",
 *				click: clickFunction,
 *			}]
 *		});
 * 	}
 * }
 * ```
 *
 * @export
 * @class AlertModalComponent
 */
@Modal()
@Component({
	selector: "ibm-alert-modal",
	template: `
		<ibm-modal [modalType]="modalType">
			<ibm-modal-header (closeSelect)="closeModal()">
				<p class="bx--modal-header__label bx--type-delta">{{headerText}}</p>
      			<p class="bx--modal-header__heading bx--type-beta">{{title}}</p>
			</ibm-modal-header>
			<div class="bx--modal-content">
				<p>{{text}}</p>
			</div>
			<ibm-modal-footer *ngIf="buttons.length > 0">
				<button ibmButton="{{button.type}}" *ngFor="let button of buttons; let i = index"
					(click)="buttonClicked(i)" id="{{button.id}}">{{button.text}}</button>
			</ibm-modal-footer>
		</ibm-modal>
	`,
})
export class AlertModalComponent implements AfterViewInit {

	modalType = "default";
	headerText: string;
	title: string;
	text: string;
	buttons = [];

	/**
	 * Creates an instance of `AlertModalComponent`.
	 * @param {ModalService} modalService
	 * @memberof AlertModalComponent
	 */
	constructor(
		private injector: Injector,
		private elRef: ElementRef,
	) {
		this.modalType = this.injector.get("modalType");
		this.headerText = this.injector.get("headerText");
		this.title = this.injector.get("title");
		this.text = this.injector.get("text");

		this.buttons = this.injector.get("buttons") || [];
		for (let i = 0; i < this.buttons.length; i++) {
			const button = this.buttons[i];
			if (!button.id) {
				button.id = `alert-modal-button-${i}`;
			}
			if (!button.type) {
				button.type = "secondary";
			}
		}
	}

	ngAfterViewInit(): void {
		// focus the primary button if there's one
		if (this.buttons && this.buttons.length > 0) {
			const primaryButtonIndex = this.buttons.findIndex(
				button => button.type.indexOf("primary") !== -1) || 0;
			const primaryButton = this.buttons[primaryButtonIndex];
			const buttonNode = this.elRef.nativeElement.querySelector(`#${primaryButton.id}`);
			if (buttonNode) {
				buttonNode.focus();
			}
		}
	}

	buttonClicked(buttonIndex) {
		const button = this.buttons[buttonIndex];
		if (button.click) {
			button.click();
		}

		this.closeModal();
	}

	closeModal() {
		this["destroy"]();
	}
}
