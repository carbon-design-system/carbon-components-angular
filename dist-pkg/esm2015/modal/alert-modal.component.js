/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Inject } from "@angular/core";
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
 * \\@Component({
 *  selector: "app-modal-demo",
 *  template: `
 *   <button class="btn--primary" (click)="openModal()">Open modal</button>
 *   <ibm-modal-placeholder></ibm-modal-placeholder>`
 * })
 * export class ModalDemo {
 * 	openModal() {
 * 		this.modalService.show({
 * 			modalType: "default",
 * 			modalLabel: "optional header text",
 * 			modalTitle: "Modal modalTitle",
 * 			text: "Modal text",
 * 			buttons: [{
 * 				text: "Button text",
 * 				type: "primary",
 * 				click: clickFunction
 * 			}]
 * 		});
 * 	}
 * }
 * ```
 */
export class AlertModal extends BaseModal {
    /**
     * Creates an instance of `AlertModal`.
     * @param {?=} modalType
     * @param {?=} modalLabel
     * @param {?=} modalTitle
     * @param {?=} modalContent
     * @param {?=} buttons
     * @param {?=} onClose
     */
    constructor(modalType = "default", modalLabel, modalTitle, modalContent, buttons = [], onClose) {
        super();
        this.modalType = modalType;
        this.modalLabel = modalLabel;
        this.modalTitle = modalTitle;
        this.modalContent = modalContent;
        this.buttons = buttons;
        this.onClose = onClose;
        for (let i = 0; i < this.buttons.length; i++) {
            /** @type {?} */
            const button = this.buttons[i];
            if (!button.id) {
                button.id = `alert-modal-button-${i}`;
            }
            if (!button.type) {
                button.type = "secondary";
            }
        }
    }
    /**
     * @param {?} buttonIndex
     * @return {?}
     */
    buttonClicked(buttonIndex) {
        /** @type {?} */
        const button = this.buttons[buttonIndex];
        if (button.click) {
            button.click();
        }
        this.closeModal();
    }
    /**
     * @return {?}
     */
    dismissModal() {
        if (this.onClose && this.onClose() === false) {
            return;
        }
        this.closeModal();
    }
}
AlertModal.decorators = [
    { type: Component, args: [{
                selector: "ibm-alert-modal",
                template: `
		<ibm-modal [theme]="modalType" [modalLabel]="modalTitle" (overlaySelected)="dismissModal()">
			<ibm-modal-header (closeSelect)="dismissModal()">
				<p class="bx--modal-header__label bx--type-delta">{{modalLabel}}</p>
      			<p class="bx--modal-header__heading bx--type-beta">{{modalTitle}}</p>
			</ibm-modal-header>
			<div class="bx--modal-content">
				<p [innerHTML]="modalContent"></p>
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
            }] }
];
/** @nocollapse */
AlertModal.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["modalType",] }] },
    { type: String, decorators: [{ type: Inject, args: ["modalLabel",] }] },
    { type: String, decorators: [{ type: Inject, args: ["modalTitle",] }] },
    { type: String, decorators: [{ type: Inject, args: ["modalContent",] }] },
    { type: undefined, decorators: [{ type: Inject, args: ["buttons",] }] },
    { type: Function, decorators: [{ type: Inject, args: ["close",] }] }
];
function AlertModal_tsickle_Closure_declarations() {
    /** @type {?} */
    AlertModal.prototype.modalType;
    /** @type {?} */
    AlertModal.prototype.modalLabel;
    /** @type {?} */
    AlertModal.prototype.modalTitle;
    /** @type {?} */
    AlertModal.prototype.modalContent;
    /** @type {?} */
    AlertModal.prototype.buttons;
    /** @type {?} */
    AlertModal.prototype.onClose;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FyYm9uLWNvbXBvbmVudHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbIm1vZGFsL2FsZXJ0LW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxNQUFNLEVBQ04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpRS9DLE1BQU0saUJBQWtCLFNBQVEsU0FBUzs7Ozs7Ozs7OztJQUl4QyxZQUM2QixZQUFZLFNBQVMsRUFDcEIsVUFBa0IsRUFDbEIsVUFBa0IsRUFDaEIsWUFBb0IsRUFDekIsVUFBVSxFQUFFLEVBQ2QsT0FBaUI7UUFFekMsS0FBSyxFQUFFLENBQUM7UUFQb0IsY0FBUyxHQUFULFNBQVMsQ0FBWTtRQUNwQixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ2xCLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQVE7UUFDekIsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUNkLFlBQU8sR0FBUCxPQUFPLENBQVU7UUFHekMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztZQUM3QyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFO2dCQUNmLE1BQU0sQ0FBQyxFQUFFLEdBQUcsc0JBQXNCLENBQUMsRUFBRSxDQUFDO2FBQ3RDO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Z0JBQ2pCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO2FBQzFCO1NBQ0Q7S0FDRDs7Ozs7SUFFRCxhQUFhLENBQUMsV0FBVzs7UUFDeEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6QyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDakIsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Y7UUFFRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7S0FDbEI7Ozs7SUFFRCxZQUFZO1FBQ1gsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxLQUFLLEVBQUU7WUFDN0MsT0FBTztTQUNQO1FBQ0QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0tBQ2xCOzs7WUEvREQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBcUJUO2FBQ0Q7Ozs7NENBTUUsTUFBTSxTQUFDLFdBQVc7eUNBQ2xCLE1BQU0sU0FBQyxZQUFZO3lDQUNuQixNQUFNLFNBQUMsWUFBWTt5Q0FDbkIsTUFBTSxTQUFDLGNBQWM7NENBQ3JCLE1BQU0sU0FBQyxTQUFTO1lBQ2dCLFFBQVEsdUJBQXhDLE1BQU0sU0FBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbmplY3Rcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEJhc2VNb2RhbCB9IGZyb20gXCIuL2Jhc2UtbW9kYWwuY2xhc3NcIjtcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gY3JlYXRlIHN0YW5kYXJkIG1vZGFscyBmb3IgcHJlc2VudGluZyBjb250ZW50IG9yIGFza2luZyBmb3IgdXNlcidzIGlucHV0LlxuICogSXQgY2FuIHNob3cgYXMgYSBwYXNzaXZlIG1vZGFsIHNob3dpbmcgb25seSB0ZXh0IG9yIHNob3cgYXMgYSB0cmFuc2FjdGlvbmFsIG1vZGFsIHdpdGhcbiAqIG11bHRpcGxlIGJ1dHRvbnMgZm9yIGRpZmZlcmVudCBhY3Rpb25zIGZvciB0aGUgdXNlciB0byBjaG9vc2UgZnJvbS5cbiAqXG4gKiBVc2luZyBhIG1vZGFsIGluIHlvdXIgYXBwbGljYXRpb24gcmVxdWlyZXMgYGlibS1tb2RhbC1wbGFjZWhvbGRlcmAgd2hpY2ggd291bGQgZ2VuZXJhbGx5IGJlXG4gKiBwbGFjZWQgbmVhciB0aGUgZW5kIG9mIHlvdXIgYXBwIGNvbXBvbmVudCB0ZW1wbGF0ZSAoYXBwLmNvbXBvbmVudC50cyBvciBhcHAuY29tcG9uZW50Lmh0bWwpIGFzOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxpYm0tbW9kYWwtcGxhY2Vob2xkZXI+PC9pYm0tbW9kYWwtcGxhY2Vob2xkZXI+XG4gKiBgYGBcbiAqXG4gKiBFeGFtcGxlIG9mIG9wZW5pbmcgdGhlIG1vZGFsOlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIFxcQENvbXBvbmVudCh7XG4gKiAgc2VsZWN0b3I6IFwiYXBwLW1vZGFsLWRlbW9cIixcbiAqICB0ZW1wbGF0ZTogYFxuICogICA8YnV0dG9uIGNsYXNzPVwiYnRuLS1wcmltYXJ5XCIgKGNsaWNrKT1cIm9wZW5Nb2RhbCgpXCI+T3BlbiBtb2RhbDwvYnV0dG9uPlxuICogICA8aWJtLW1vZGFsLXBsYWNlaG9sZGVyPjwvaWJtLW1vZGFsLXBsYWNlaG9sZGVyPmBcbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgTW9kYWxEZW1vIHtcbiAqIFx0b3Blbk1vZGFsKCkge1xuICogXHRcdHRoaXMubW9kYWxTZXJ2aWNlLnNob3coe1xuICpcdFx0XHRtb2RhbFR5cGU6IFwiZGVmYXVsdFwiLFxuICpcdFx0XHRtb2RhbExhYmVsOiBcIm9wdGlvbmFsIGhlYWRlciB0ZXh0XCIsXG4gKlx0XHRcdG1vZGFsVGl0bGU6IFwiTW9kYWwgbW9kYWxUaXRsZVwiLFxuICpcdFx0XHR0ZXh0OiBcIk1vZGFsIHRleHRcIixcbiAqXHRcdFx0YnV0dG9uczogW3tcbiAqXHRcdFx0XHR0ZXh0OiBcIkJ1dHRvbiB0ZXh0XCIsXG4gKlx0XHRcdFx0dHlwZTogXCJwcmltYXJ5XCIsXG4gKlx0XHRcdFx0Y2xpY2s6IGNsaWNrRnVuY3Rpb25cbiAqXHRcdFx0fV1cbiAqXHRcdH0pO1xuICogXHR9XG4gKiB9XG4gKiBgYGBcbiAqL1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImlibS1hbGVydC1tb2RhbFwiLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxpYm0tbW9kYWwgW3RoZW1lXT1cIm1vZGFsVHlwZVwiIFttb2RhbExhYmVsXT1cIm1vZGFsVGl0bGVcIiAob3ZlcmxheVNlbGVjdGVkKT1cImRpc21pc3NNb2RhbCgpXCI+XG5cdFx0XHQ8aWJtLW1vZGFsLWhlYWRlciAoY2xvc2VTZWxlY3QpPVwiZGlzbWlzc01vZGFsKClcIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJieC0tbW9kYWwtaGVhZGVyX19sYWJlbCBieC0tdHlwZS1kZWx0YVwiPnt7bW9kYWxMYWJlbH19PC9wPlxuICAgICAgXHRcdFx0PHAgY2xhc3M9XCJieC0tbW9kYWwtaGVhZGVyX19oZWFkaW5nIGJ4LS10eXBlLWJldGFcIj57e21vZGFsVGl0bGV9fTwvcD5cblx0XHRcdDwvaWJtLW1vZGFsLWhlYWRlcj5cblx0XHRcdDxkaXYgY2xhc3M9XCJieC0tbW9kYWwtY29udGVudFwiPlxuXHRcdFx0XHQ8cCBbaW5uZXJIVE1MXT1cIm1vZGFsQ29udGVudFwiPjwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGlibS1tb2RhbC1mb290ZXIgKm5nSWY9XCJidXR0b25zLmxlbmd0aCA+IDBcIj5cblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgYnV0dG9uIG9mIGJ1dHRvbnM7IGxldCBpID0gaW5kZXhcIj5cblx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRbaWJtQnV0dG9uXT1cImJ1dHRvbi50eXBlXCJcblx0XHRcdFx0XHRcdChjbGljayk9XCJidXR0b25DbGlja2VkKGkpXCJcblx0XHRcdFx0XHRcdFtpZF09XCJidXR0b24uaWRcIlxuXHRcdFx0XHRcdFx0W2F0dHIubW9kYWwtcHJpbWFyeS1mb2N1c109XCIoYnV0dG9uLnR5cGUuaW5kZXhPZigncHJpbWFyeScpICE9PSAtMSA/ICcnIDogbnVsbClcIj5cblx0XHRcdFx0XHRcdHt7YnV0dG9uLnRleHR9fVxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cblx0XHRcdDwvaWJtLW1vZGFsLWZvb3Rlcj5cblx0XHQ8L2libS1tb2RhbD5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBBbGVydE1vZGFsIGV4dGVuZHMgQmFzZU1vZGFsIHtcblx0LyoqXG5cdCAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgYEFsZXJ0TW9kYWxgLlxuXHQgKi9cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChcIm1vZGFsVHlwZVwiKSBwdWJsaWMgbW9kYWxUeXBlID0gXCJkZWZhdWx0XCIsXG5cdFx0QEluamVjdChcIm1vZGFsTGFiZWxcIikgcHVibGljIG1vZGFsTGFiZWw6IHN0cmluZyxcblx0XHRASW5qZWN0KFwibW9kYWxUaXRsZVwiKSBwdWJsaWMgbW9kYWxUaXRsZTogc3RyaW5nLFxuXHRcdEBJbmplY3QoXCJtb2RhbENvbnRlbnRcIikgcHVibGljIG1vZGFsQ29udGVudDogc3RyaW5nLFxuXHRcdEBJbmplY3QoXCJidXR0b25zXCIpIHB1YmxpYyBidXR0b25zID0gW10sXG5cdFx0QEluamVjdChcImNsb3NlXCIpIHB1YmxpYyBvbkNsb3NlOiBGdW5jdGlvblxuXHQpIHtcblx0XHRzdXBlcigpO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idXR0b25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBidXR0b24gPSB0aGlzLmJ1dHRvbnNbaV07XG5cdFx0XHRpZiAoIWJ1dHRvbi5pZCkge1xuXHRcdFx0XHRidXR0b24uaWQgPSBgYWxlcnQtbW9kYWwtYnV0dG9uLSR7aX1gO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFidXR0b24udHlwZSkge1xuXHRcdFx0XHRidXR0b24udHlwZSA9IFwic2Vjb25kYXJ5XCI7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0YnV0dG9uQ2xpY2tlZChidXR0b25JbmRleCkge1xuXHRcdGNvbnN0IGJ1dHRvbiA9IHRoaXMuYnV0dG9uc1tidXR0b25JbmRleF07XG5cdFx0aWYgKGJ1dHRvbi5jbGljaykge1xuXHRcdFx0YnV0dG9uLmNsaWNrKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5jbG9zZU1vZGFsKCk7XG5cdH1cblxuXHRkaXNtaXNzTW9kYWwoKSB7XG5cdFx0aWYgKHRoaXMub25DbG9zZSAmJiB0aGlzLm9uQ2xvc2UoKSA9PT0gZmFsc2UpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5jbG9zZU1vZGFsKCk7XG5cdH1cbn1cbiJdfQ==