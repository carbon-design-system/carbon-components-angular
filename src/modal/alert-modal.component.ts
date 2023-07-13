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
 * Using a modal in your application requires `cds-placeholder` which would generally be
 * placed near the end of your app component template (app.component.ts or app.component.html) as:
 *
 * ```html
 * <cds-placeholder></cds-placeholder>
 * ```
 *
 * Example of opening the modal:
 *
 * ```typescript
 * \@Component({
 *  selector: "app-modal-demo",
 *  template: `
 *   <button class="btn--primary" (click)="openModal()">Open modal</button>
 *   <cds-placeholder></cds-placeholder>`
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
	selector: "cds-alert-modal, ibm-alert-modal",
	template: `
		<cds-modal
			[size]="size"
			[theme]="type"
			[ariaLabel]="title"
			[hasScrollingContent]="hasScrollingContent"
			[open]="open"
			(overlaySelected)="dismissModal('overlay')">
			<cds-modal-header (closeSelect)="dismissModal('close')" [showCloseButton]="showCloseButton">
				<p cdsModalHeaderLabel class="cds--type-delta">{{label}}</p>
				<p cdsModalHeaderHeading class="cds--type-beta">{{title}}</p>
			</cds-modal-header>
			<div cdsModalContent #modalContent>
				<p [innerHTML]="content"></p>
			</div>
			<cds-modal-footer *ngIf="buttons.length > 0">
				<ng-container *ngFor="let button of buttons; let i = index">
					<button
						[cdsButton]="button.type"
						(click)="buttonClicked(i)"
						[id]="button.id"
						[attr.modal-primary-focus]="(button.type.indexOf('primary') !== -1 ? '' : null)">
						{{button.text}}
					</button>
				</ng-container>
			</cds-modal-footer>
		</cds-modal>
	`
})
export class AlertModal extends BaseModal implements AfterViewInit {
	@ViewChild("modalContent", { static: true }) modalContent: { nativeElement: any; };
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
		@Optional() @Inject("close") public onClose: Function,
		@Optional() @Inject("showCloseButton") public showCloseButton = true
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

	buttonClicked(buttonIndex: string | number) {
		const button = this.buttons[buttonIndex];
		if (button.click) {
			button.click();
		}

		this.closeModal();
	}

	dismissModal(trigger: any) {
		if (this.onClose && this.onClose(trigger) === false) {
			return;
		}
		this.closeModal();
	}
}
