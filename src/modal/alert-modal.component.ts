import {
	Component,
	Inject,
	ViewChild,
	AfterViewInit
} from "@angular/core";
import { BaseModal } from "./base-modal.class";

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
 *			label: "optional header text",
 *			title: "Modal title",
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
 */
@Component({
	selector: "ibm-alert-modal",
	template: `
		<ibm-modal
			[size]="size"
			[theme]="type"
			[ariaLabel]="title"
			[open]="open"
			(overlaySelected)="dismissModal('overlay')">
			<ibm-modal-header (closeSelect)="dismissModal('close')">
				<p class="bx--modal-header__label bx--type-delta">{{label}}</p>
      			<p class="bx--modal-header__heading bx--type-beta">{{title}}</p>
			</ibm-modal-header>
			<div #modalContent class="bx--modal-content">
				<p [innerHTML]="content"></p>
			</div>
			<ibm-modal-footer *ngIf="buttons.length > 0">
				<ng-container *ngFor="let button of buttons; let i = index">
					<button
						[ibmButton]="button.type"
						(click)="buttonClicked(i)"
						[id]="button.id"
						[attr.modal-primary-focus]="(button.type.indexOf('primary') !== -1 ? '' : null)">
						{{button.text}}
					</button>
				</ng-container>
			</ibm-modal-footer>
		</ibm-modal>
	`
})
export class AlertModal extends BaseModal implements AfterViewInit {
	@ViewChild("modalContent") modalContent;
	/**
	 * Creates an instance of `AlertModal`.
	 */
	constructor(
		@Inject("type") public type = "default",
		@Inject("label") public label: string,
		@Inject("title") public title: string,
		@Inject("content") public content: string,
		@Inject("size") public size: string,
		@Inject("buttons") public buttons = [],
		@Inject("close") public onClose: Function
	) {
		super();
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

	ngAfterViewInit() {
		if (!this.modalContent) { return false; }
		const element = this.modalContent.nativeElement;
		if (element.scrollHeight > element.clientHeight) {
			element.tabIndex = 0;
		} else {
			element.tabIndex = -1;
		}
	}

	buttonClicked(buttonIndex) {
		const button = this.buttons[buttonIndex];
		if (button.click) {
			button.click();
		}

		this.closeModal();
	}

	dismissModal(trigger) {
		if (this.onClose && this.onClose(trigger) === false) {
			return;
		}
		this.closeModal();
	}
}
