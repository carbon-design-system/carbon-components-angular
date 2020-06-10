import {
	Component,
	Inject,
	ViewChild,
	AfterViewInit,
	Optional
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
			[hasScrollingContent]="hasScrollingContent"
			[open]="open"
			(overlaySelected)="dismissModal('overlay')">
			<ibm-modal-header (closeSelect)="dismissModal('close')">
				<p ibmModalHeaderLabel class="bx--type-delta">{{label}}</p>
				<p ibmModalHeaderHeading class="bx--type-beta">{{title}}</p>
			</ibm-modal-header>
			<div ibmModalContent #modalContent>
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
	// @ts-ignore
	@ViewChild("modalContent", { static: true }) modalContent;
	/**
	 * Creates an instance of `AlertModal`.
	 */
	constructor(
		@Optional() @Inject("type") public type = "default",
		@Optional() @Inject("label") public label: string,
		@Optional() @Inject("title") public title: string,
		@Optional() @Inject("content") public content: string,
		@Optional() @Inject("size") public size: string,
		@Optional() @Inject("hasScrollingContent") public hasScrollingContent: boolean = null,
		@Optional() @Inject("buttons") public buttons = [],
		@Optional() @Inject("close") public onClose: Function
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
