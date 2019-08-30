/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ModalService } from "./modal.service";
import { Component, EventEmitter, HostListener, Input, Output, ElementRef, ViewChild } from "@angular/core";
import { trigger, state, style, transition, animate } from "@angular/animations";
import { cycleTabs, getFocusElementList } from "./../common/tab.service";
/**
 * Component to create modals for presenting content.
 *
 * [See demo](../../?path=/story/modal--basic)
 *
 * Using a modal in your application requires `ibm-placeholder` which would generally be
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
 * \@Component({
 * selector: "app-sample-modal",
 * template: `
 * <ibm-modal size="xl" (overlaySelected)="closeModal()">
 * <ibm-modal-header (closeSelect)="closeModal()">Header text</ibm-modal-header>
 * <section class="modal-body">
 * <h1>Sample modal works.</h1>
 * <button class="btn--icon-link" nPopover="Hello there" title="Popover title" placement="right" appendInline="true">
 * <ibm-icon icon="info" size="sm"></ibm-icon>
 * </button>
 * {{modalText}}
 * </section>
 * <ibm-modal-footer><button ibmButton="primary" (click)="closeModal()">Close</button></ibm-modal-footer>
 * </ibm-modal>`,
 * styleUrls: ["./sample-modal.component.scss"]
 * })
 * export class SampleModal extends BaseModal {
 * modalText: string;
 * constructor(protected injector: Injector) {
 * super();
 * this.modalText = this.injector.get("modalText");
 * }
 * }
 * ```
 *
 * Example of opening the modal:
 *
 * ```typescript
 * \@Component({
 * selector: "app-modal-demo",
 * template: `
 * <button ibmButton="primary" (click)="openModal('drill')">Drill-down modal</button>
 * <ibm-placeholder></ibm-placeholder>`
 * })
 * export class ModalDemo {
 * openModal() {
 * this.modalService.create({component: SampleModal, inputs: {modalText: "Hello universe."}});
 * }
 * }
 * ```
 *
 * <example-url>../../iframe.html?id=modal--basic</example-url>
 */
export class Modal {
    /**
     * Creates an instance of `Modal`.
     * @param {?} modalService
     */
    constructor(modalService) {
        this.modalService = modalService;
        /**
         * Size of the modal to display.
         */
        this.size = "md";
        /**
         * Classification of the modal.
         */
        this.theme = "default";
        /**
         * Label for the modal.
         */
        this.modalLabel = "default";
        /**
         * Emits event when click occurs within `n-overlay` element. This is to track click events occurring outside bounds of the `Modal` object.
         */
        this.overlaySelected = new EventEmitter();
        /**
         * To emit the closing event of the modal window.
         */
        this.close = new EventEmitter();
        /**
         * Controls the transitions of the `Modal` component.
         */
        this.modalState = "out";
        /**
         * An element should have 'modal-primary-focus' as an attribute to receive initial focus within the `Modal` component.
         */
        this.selectorPrimaryFocus = "[modal-primary-focus]";
    }
    /**
     * Set modalState on the modal component when it is initialized.
     * @return {?}
     */
    ngOnInit() {
        this.modalState = "in";
    }
    /**
     * Set document focus to be on the modal component after it is initialized.
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const primaryFocusElement = this.modal.nativeElement.querySelector(this.selectorPrimaryFocus);
        if (primaryFocusElement && primaryFocusElement.focus) {
            setTimeout(() => primaryFocusElement.focus());
            return;
        }
        if (getFocusElementList(this.modal.nativeElement).length > 0) {
            setTimeout(() => getFocusElementList(this.modal.nativeElement)[0].focus());
        }
        else {
            setTimeout(() => this.modal.nativeElement.focus());
        }
    }
    /**
     * Emit the close event when the modal component is destroyed.
     * @return {?}
     */
    ngOnDestroy() {
        this.modalState = "out";
    }
    /**
     * Handle keyboard events to close modal and tab through the content within the modal.
     * @param {?} event
     * @return {?}
     */
    handleKeyboardEvent(event) {
        switch (event.key) {
            case "Escape": {
                event.stopImmediatePropagation(); // prevents events being fired for multiple modals if more than 2 open
                this.modalService.destroy(); // destroy top (latest) modal
                break;
            }
            case "Tab": {
                cycleTabs(event, this.modal.nativeElement);
                break;
            }
        }
    }
}
Modal.decorators = [
    { type: Component, args: [{
                selector: "ibm-modal",
                template: `
		<ibm-overlay [theme]="theme" (overlaySelect)="overlaySelected.emit()">
			<div
				class="bx--modal-container"
				[@modalState]="modalState"
				role="dialog"
				aria-modal="true"
				style="z-index:1;"
				[attr.aria-label]="modalLabel"
				#modal>
				<ng-content></ng-content>
			</div>
		</ibm-overlay>
	`,
                animations: [
                    trigger("modalState", [
                        state("void", style({ transform: "translate(0, 5%)", opacity: 0 })),
                        transition(":enter", [
                            animate("200ms ease-in")
                        ]),
                        transition(":leave", [
                            animate(200, style({ transform: "translate(0, 5%)", opacity: 0 }))
                        ])
                    ])
                ]
            }] }
];
/** @nocollapse */
Modal.ctorParameters = () => [
    { type: ModalService }
];
Modal.propDecorators = {
    size: [{ type: Input }],
    theme: [{ type: Input }],
    modalLabel: [{ type: Input }],
    overlaySelected: [{ type: Output }],
    close: [{ type: Output }],
    modal: [{ type: ViewChild, args: ["modal",] }],
    handleKeyboardEvent: [{ type: HostListener, args: ["keydown", ["$event"],] }]
};
function Modal_tsickle_Closure_declarations() {
    /**
     * Size of the modal to display.
     * @type {?}
     */
    Modal.prototype.size;
    /**
     * Classification of the modal.
     * @type {?}
     */
    Modal.prototype.theme;
    /**
     * Label for the modal.
     * @type {?}
     */
    Modal.prototype.modalLabel;
    /**
     * Emits event when click occurs within `n-overlay` element. This is to track click events occurring outside bounds of the `Modal` object.
     * @type {?}
     */
    Modal.prototype.overlaySelected;
    /**
     * To emit the closing event of the modal window.
     * @type {?}
     */
    Modal.prototype.close;
    /**
     * Maintains a reference to the view DOM element of the `Modal`.
     * @type {?}
     */
    Modal.prototype.modal;
    /**
     * Controls the transitions of the `Modal` component.
     * @type {?}
     */
    Modal.prototype.modalState;
    /**
     * An element should have 'modal-primary-focus' as an attribute to receive initial focus within the `Modal` component.
     * @type {?}
     */
    Modal.prototype.selectorPrimaryFocus;
    /** @type {?} */
    Modal.prototype.modalService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FyYm9uLWNvbXBvbmVudHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbIm1vZGFsL21vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFFTixTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFVBQVUsRUFDVixTQUFTLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNOLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ1AsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwRnpFLE1BQU07Ozs7O0lBeUNMLFlBQW1CLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjOzs7O29CQXJDTSxJQUFJOzs7O3FCQUloQixTQUFTOzs7OzBCQUsxQixTQUFTOzs7OytCQUtILElBQUksWUFBWSxFQUFFOzs7O3FCQUk1QixJQUFJLFlBQVksRUFBRTs7OzswQkFTVCxLQUFLOzs7O29DQUtULHVCQUF1QjtLQUtHOzs7OztJQUtqRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7S0FDdkI7Ozs7O0lBS0QsZUFBZTs7UUFDZCxNQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUM5RixJQUFJLG1CQUFtQixJQUFJLG1CQUFtQixDQUFDLEtBQUssRUFBRTtZQUNyRCxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUM5QyxPQUFPO1NBQ1A7UUFDRCxJQUFJLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM3RCxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQzNFO2FBQU07WUFDTixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUNuRDtLQUNEOzs7OztJQUtELFdBQVc7UUFDVixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztLQUN4Qjs7Ozs7O0lBTUQsbUJBQW1CLENBQUMsS0FBb0I7UUFDdkMsUUFBUSxLQUFLLENBQUMsR0FBRyxFQUFFO1lBQ2xCLEtBQUssUUFBUSxDQUFDLENBQUM7Z0JBQ2QsS0FBSyxDQUFDLHdCQUF3QixFQUFFLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQzVCLE1BQU07YUFDTjtZQUVELEtBQUssS0FBSyxDQUFDLENBQUM7Z0JBQ1gsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMzQyxNQUFNO2FBQ047U0FDRDtLQUNEOzs7WUF0SEQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7RUFhVDtnQkFDRCxVQUFVLEVBQUU7b0JBQ1gsT0FBTyxDQUFDLFlBQVksRUFBRTt3QkFDckIsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7d0JBQ2pFLFVBQVUsQ0FBQyxRQUFRLEVBQUU7NEJBQ3BCLE9BQU8sQ0FBQyxlQUFlLENBQUM7eUJBQ3hCLENBQUM7d0JBQ0YsVUFBVSxDQUFDLFFBQVEsRUFBRTs0QkFDcEIsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7eUJBQ2hFLENBQUM7cUJBQ0YsQ0FBQztpQkFDRjthQUNEOzs7O1lBN0dRLFlBQVk7OzttQkFrSG5CLEtBQUs7b0JBSUwsS0FBSzt5QkFLTCxLQUFLOzhCQUtMLE1BQU07b0JBSU4sTUFBTTtvQkFJTixTQUFTLFNBQUMsT0FBTztrQ0FrRGpCLFlBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tIFwiLi9tb2RhbC5zZXJ2aWNlXCI7XG5pbXBvcnQge1xuXHRBZnRlclZpZXdJbml0LFxuXHRDb21wb25lbnQsXG5cdEV2ZW50RW1pdHRlcixcblx0SG9zdExpc3RlbmVyLFxuXHRJbnB1dCxcblx0T25EZXN0cm95LFxuXHRPbkluaXQsXG5cdE91dHB1dCxcblx0RWxlbWVudFJlZixcblx0Vmlld0NoaWxkXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1xuXHR0cmlnZ2VyLFxuXHRzdGF0ZSxcblx0c3R5bGUsXG5cdHRyYW5zaXRpb24sXG5cdGFuaW1hdGVcbn0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7IGN5Y2xlVGFicywgZ2V0Rm9jdXNFbGVtZW50TGlzdCB9IGZyb20gXCIuLy4uL2NvbW1vbi90YWIuc2VydmljZVwiO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byBjcmVhdGUgbW9kYWxzIGZvciBwcmVzZW50aW5nIGNvbnRlbnQuXG4gKlxuICogW1NlZSBkZW1vXSguLi8uLi8/cGF0aD0vc3RvcnkvbW9kYWwtLWJhc2ljKVxuICpcbiAqIFVzaW5nIGEgbW9kYWwgaW4geW91ciBhcHBsaWNhdGlvbiByZXF1aXJlcyBgaWJtLXBsYWNlaG9sZGVyYCB3aGljaCB3b3VsZCBnZW5lcmFsbHkgYmVcbiAqIHBsYWNlZCBuZWFyIHRoZSBlbmQgb2YgeW91ciBhcHAgY29tcG9uZW50IHRlbXBsYXRlIChhcHAuY29tcG9uZW50LnRzIG9yIGFwcC5jb21wb25lbnQuaHRtbCkgYXM6XG4gKlxuYGBgaHRtbFxuPGlibS1tb2RhbC1wbGFjZWhvbGRlcj48L2libS1tb2RhbC1wbGFjZWhvbGRlcj5cbmBgYFxuICpcbiAqIEEgbW9yZSBjb21wbGV0ZSBleGFtcGxlIGZvciBgTW9kYWxgIGlzIGdpdmVuIGFzIGZvbGxvd3M6XG4gKlxuICogRXhhbXBsZSBtb2RhbCBkZWZpbml0aW9uOlxuICpcbmBgYHR5cGVzY3JpcHRcbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJhcHAtc2FtcGxlLW1vZGFsXCIsXG5cdHRlbXBsYXRlOiBgXG5cdFx0XHRcdDxpYm0tbW9kYWwgc2l6ZT1cInhsXCIgKG92ZXJsYXlTZWxlY3RlZCk9XCJjbG9zZU1vZGFsKClcIj5cblx0XHRcdFx0XHQ8aWJtLW1vZGFsLWhlYWRlciAoY2xvc2VTZWxlY3QpPVwiY2xvc2VNb2RhbCgpXCI+SGVhZGVyIHRleHQ8L2libS1tb2RhbC1oZWFkZXI+XG5cdFx0XHRcdFx0XHQ8c2VjdGlvbiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cblx0XHRcdFx0XHRcdFx0PGgxPlNhbXBsZSBtb2RhbCB3b3Jrcy48L2gxPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuLS1pY29uLWxpbmtcIiBuUG9wb3Zlcj1cIkhlbGxvIHRoZXJlXCIgdGl0bGU9XCJQb3BvdmVyIHRpdGxlXCIgcGxhY2VtZW50PVwicmlnaHRcIiBhcHBlbmRJbmxpbmU9XCJ0cnVlXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGlibS1pY29uIGljb249XCJpbmZvXCIgc2l6ZT1cInNtXCI+PC9pYm0taWNvbj5cblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdHt7bW9kYWxUZXh0fX1cblx0XHRcdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0XHQ8aWJtLW1vZGFsLWZvb3Rlcj48YnV0dG9uIGlibUJ1dHRvbj1cInByaW1hcnlcIiAoY2xpY2spPVwiY2xvc2VNb2RhbCgpXCI+Q2xvc2U8L2J1dHRvbj48L2libS1tb2RhbC1mb290ZXI+XG5cdFx0XHRcdDwvaWJtLW1vZGFsPmAsXG5cdHN0eWxlVXJsczogW1wiLi9zYW1wbGUtbW9kYWwuY29tcG9uZW50LnNjc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgU2FtcGxlTW9kYWwgZXh0ZW5kcyBCYXNlTW9kYWwge1xuXHRtb2RhbFRleHQ6IHN0cmluZztcblx0Y29uc3RydWN0b3IocHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3Rvcikge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5tb2RhbFRleHQgPSB0aGlzLmluamVjdG9yLmdldChcIm1vZGFsVGV4dFwiKTtcblx0fVxufVxuYGBgXG4gKlxuICogRXhhbXBsZSBvZiBvcGVuaW5nIHRoZSBtb2RhbDpcbiAqXG5gYGB0eXBlc2NyaXB0XG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiYXBwLW1vZGFsLWRlbW9cIixcblx0dGVtcGxhdGU6IGBcblx0XHRcdFx0PGJ1dHRvbiBpYm1CdXR0b249XCJwcmltYXJ5XCIgKGNsaWNrKT1cIm9wZW5Nb2RhbCgnZHJpbGwnKVwiPkRyaWxsLWRvd24gbW9kYWw8L2J1dHRvbj5cblx0XHRcdFx0PGlibS1wbGFjZWhvbGRlcj48L2libS1wbGFjZWhvbGRlcj5gXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsRGVtbyB7XG5cdG9wZW5Nb2RhbCgpIHtcblx0XHR0aGlzLm1vZGFsU2VydmljZS5jcmVhdGUoe2NvbXBvbmVudDogU2FtcGxlTW9kYWwsIGlucHV0czoge21vZGFsVGV4dDogXCJIZWxsbyB1bml2ZXJzZS5cIn19KTtcblx0fVxufVxuYGBgXG4gKlxuICogPGV4YW1wbGUtdXJsPi4uLy4uL2lmcmFtZS5odG1sP2lkPW1vZGFsLS1iYXNpYzwvZXhhbXBsZS11cmw+XG4gKi9cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJpYm0tbW9kYWxcIixcblx0dGVtcGxhdGU6IGBcblx0XHQ8aWJtLW92ZXJsYXkgW3RoZW1lXT1cInRoZW1lXCIgKG92ZXJsYXlTZWxlY3QpPVwib3ZlcmxheVNlbGVjdGVkLmVtaXQoKVwiPlxuXHRcdFx0PGRpdlxuXHRcdFx0XHRjbGFzcz1cImJ4LS1tb2RhbC1jb250YWluZXJcIlxuXHRcdFx0XHRbQG1vZGFsU3RhdGVdPVwibW9kYWxTdGF0ZVwiXG5cdFx0XHRcdHJvbGU9XCJkaWFsb2dcIlxuXHRcdFx0XHRhcmlhLW1vZGFsPVwidHJ1ZVwiXG5cdFx0XHRcdHN0eWxlPVwiei1pbmRleDoxO1wiXG5cdFx0XHRcdFthdHRyLmFyaWEtbGFiZWxdPVwibW9kYWxMYWJlbFwiXG5cdFx0XHRcdCNtb2RhbD5cblx0XHRcdFx0PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9pYm0tb3ZlcmxheT5cblx0YCxcblx0YW5pbWF0aW9uczogW1xuXHRcdHRyaWdnZXIoXCJtb2RhbFN0YXRlXCIsIFtcblx0XHRcdHN0YXRlKFwidm9pZFwiLCBzdHlsZSh7dHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgwLCA1JSlcIiwgb3BhY2l0eTogMH0pKSxcblx0XHRcdHRyYW5zaXRpb24oXCI6ZW50ZXJcIiwgW1xuXHRcdFx0XHRhbmltYXRlKFwiMjAwbXMgZWFzZS1pblwiKVxuXHRcdFx0XSksXG5cdFx0XHR0cmFuc2l0aW9uKFwiOmxlYXZlXCIsIFtcblx0XHRcdFx0YW5pbWF0ZSgyMDAsIHN0eWxlKHt0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDAsIDUlKVwiLCBvcGFjaXR5OiAwfSkpXG5cdFx0XHRdKVxuXHRcdF0pXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgTW9kYWwgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQsIE9uRGVzdHJveSB7XG5cdC8qKlxuXHQgKiBTaXplIG9mIHRoZSBtb2RhbCB0byBkaXNwbGF5LlxuXHQgKi9cblx0QElucHV0KCkgc2l6ZTogXCJzbVwiIHwgXCJtZFwiIHwgXCJsZ1wiIHwgXCJ4bFwiIHwgXCJ4eGxcIiA9IFwibWRcIjtcblx0LyoqXG5cdCAqIENsYXNzaWZpY2F0aW9uIG9mIHRoZSBtb2RhbC5cblx0ICovXG5cdEBJbnB1dCgpIHRoZW1lOiBcImRlZmF1bHRcIiB8IFwiZGFuZ2VyXCIgPSBcImRlZmF1bHRcIjtcblxuXHQvKipcblx0ICogTGFiZWwgZm9yIHRoZSBtb2RhbC5cblx0ICovXG5cdEBJbnB1dCgpIG1vZGFsTGFiZWwgPSBcImRlZmF1bHRcIjtcblxuXHQvKipcblx0ICogRW1pdHMgZXZlbnQgd2hlbiBjbGljayBvY2N1cnMgd2l0aGluIGBuLW92ZXJsYXlgIGVsZW1lbnQuIFRoaXMgaXMgdG8gdHJhY2sgY2xpY2sgZXZlbnRzIG9jY3VycmluZyBvdXRzaWRlIGJvdW5kcyBvZiB0aGUgYE1vZGFsYCBvYmplY3QuXG5cdCAqL1xuXHRAT3V0cHV0KCkgb3ZlcmxheVNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHQvKipcblx0ICogVG8gZW1pdCB0aGUgY2xvc2luZyBldmVudCBvZiB0aGUgbW9kYWwgd2luZG93LlxuXHQgKi9cblx0QE91dHB1dCgpIGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHQvKipcblx0ICogTWFpbnRhaW5zIGEgcmVmZXJlbmNlIHRvIHRoZSB2aWV3IERPTSBlbGVtZW50IG9mIHRoZSBgTW9kYWxgLlxuXHQgKi9cblx0QFZpZXdDaGlsZChcIm1vZGFsXCIpIG1vZGFsOiBFbGVtZW50UmVmO1xuXG5cdC8qKlxuXHQgKiBDb250cm9scyB0aGUgdHJhbnNpdGlvbnMgb2YgdGhlIGBNb2RhbGAgY29tcG9uZW50LlxuXHQgKi9cblx0bW9kYWxTdGF0ZTogXCJpblwiIHwgXCJvdXRcIiA9IFwib3V0XCI7XG5cblx0LyoqXG5cdCAqIEFuIGVsZW1lbnQgc2hvdWxkIGhhdmUgJ21vZGFsLXByaW1hcnktZm9jdXMnIGFzIGFuIGF0dHJpYnV0ZSB0byByZWNlaXZlIGluaXRpYWwgZm9jdXMgd2l0aGluIHRoZSBgTW9kYWxgIGNvbXBvbmVudC5cblx0ICovXG5cdHNlbGVjdG9yUHJpbWFyeUZvY3VzID0gXCJbbW9kYWwtcHJpbWFyeS1mb2N1c11cIjtcblxuXHQvKipcblx0ICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBgTW9kYWxgLlxuXHQgKi9cblx0Y29uc3RydWN0b3IocHVibGljIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlKSB7fVxuXG5cdC8qKlxuXHQgKiBTZXQgbW9kYWxTdGF0ZSBvbiB0aGUgbW9kYWwgY29tcG9uZW50IHdoZW4gaXQgaXMgaW5pdGlhbGl6ZWQuXG5cdCAqL1xuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLm1vZGFsU3RhdGUgPSBcImluXCI7XG5cdH1cblxuXHQvKipcblx0ICogU2V0IGRvY3VtZW50IGZvY3VzIHRvIGJlIG9uIHRoZSBtb2RhbCBjb21wb25lbnQgYWZ0ZXIgaXQgaXMgaW5pdGlhbGl6ZWQuXG5cdCAqL1xuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0Y29uc3QgcHJpbWFyeUZvY3VzRWxlbWVudCA9IHRoaXMubW9kYWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JQcmltYXJ5Rm9jdXMpO1xuXHRcdGlmIChwcmltYXJ5Rm9jdXNFbGVtZW50ICYmIHByaW1hcnlGb2N1c0VsZW1lbnQuZm9jdXMpIHtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4gcHJpbWFyeUZvY3VzRWxlbWVudC5mb2N1cygpKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGdldEZvY3VzRWxlbWVudExpc3QodGhpcy5tb2RhbC5uYXRpdmVFbGVtZW50KS5sZW5ndGggPiAwKSB7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IGdldEZvY3VzRWxlbWVudExpc3QodGhpcy5tb2RhbC5uYXRpdmVFbGVtZW50KVswXS5mb2N1cygpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB0aGlzLm1vZGFsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEVtaXQgdGhlIGNsb3NlIGV2ZW50IHdoZW4gdGhlIG1vZGFsIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuXG5cdCAqL1xuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLm1vZGFsU3RhdGUgPSBcIm91dFwiO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZSBrZXlib2FyZCBldmVudHMgdG8gY2xvc2UgbW9kYWwgYW5kIHRhYiB0aHJvdWdoIHRoZSBjb250ZW50IHdpdGhpbiB0aGUgbW9kYWwuXG5cdCAqL1xuXHRASG9zdExpc3RlbmVyKFwia2V5ZG93blwiLCBbXCIkZXZlbnRcIl0pXG5cdGhhbmRsZUtleWJvYXJkRXZlbnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcblx0XHRzd2l0Y2ggKGV2ZW50LmtleSkge1xuXHRcdFx0Y2FzZSBcIkVzY2FwZVwiOiB7XG5cdFx0XHRcdGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpOyAgLy8gcHJldmVudHMgZXZlbnRzIGJlaW5nIGZpcmVkIGZvciBtdWx0aXBsZSBtb2RhbHMgaWYgbW9yZSB0aGFuIDIgb3BlblxuXHRcdFx0XHR0aGlzLm1vZGFsU2VydmljZS5kZXN0cm95KCk7ICAvLyBkZXN0cm95IHRvcCAobGF0ZXN0KSBtb2RhbFxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBcIlRhYlwiOiB7XG5cdFx0XHRcdGN5Y2xlVGFicyhldmVudCwgdGhpcy5tb2RhbC5uYXRpdmVFbGVtZW50KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iXX0=