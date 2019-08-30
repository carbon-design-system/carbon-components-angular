/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from "@angular/core";
import { I18n } from "./../i18n/i18n.module";
import { ExperimentalService } from "./../experimental.service";
/**
 * ***Inputs***
 * ```html
 * <ibm-modal-header>Header text</ibm-modal-header>
 * ```
 *
 * ***Outputs***
 * ```html
 * <ibm-modal-header (closeSelect)="closeModal()">Header text</ibm-modal-header>
 * ```
 */
export class ModalHeader {
    /**
     * @param {?} i18n
     * @param {?} experimental
     */
    constructor(i18n, experimental) {
        this.i18n = i18n;
        this.experimental = experimental;
        /**
         * Sets the style on the modal heading based on its category.
         */
        this.theme = "default";
        /**
         * Accessible label for the header close button.
         * Defaults to the `MODAL.CLOSE` value from the i18n service.
         */
        this.closeLabel = this.i18n.get().MODAL.CLOSE;
        /**
         * To emit the event of clicking on the close icon within the modal.
         */
        this.closeSelect = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get isExperimental() {
        return this.experimental.isExperimental;
    }
    /**
     * Handles click for the close icon button within the `Modal`.
     * @return {?}
     */
    onClose() {
        this.closeSelect.emit();
    }
}
ModalHeader.decorators = [
    { type: Component, args: [{
                selector: "ibm-modal-header",
                template: `
		<header class="{{theme}} bx--modal-header">
			<ng-content></ng-content>
			<button
				class="bx--modal-close"
				[attr.aria-label]="closeLabel"
				(click)="onClose()">
				<ibm-icon-close16 class="bx--modal-close__icon"></ibm-icon-close16>
			</button>
		</header>

	`
            }] }
];
/** @nocollapse */
ModalHeader.ctorParameters = () => [
    { type: I18n },
    { type: ExperimentalService }
];
ModalHeader.propDecorators = {
    theme: [{ type: Input }],
    closeLabel: [{ type: Input }],
    closeSelect: [{ type: Output }]
};
function ModalHeader_tsickle_Closure_declarations() {
    /**
     * Sets the style on the modal heading based on its category.
     * @type {?}
     */
    ModalHeader.prototype.theme;
    /**
     * Accessible label for the header close button.
     * Defaults to the `MODAL.CLOSE` value from the i18n service.
     * @type {?}
     */
    ModalHeader.prototype.closeLabel;
    /**
     * To emit the event of clicking on the close icon within the modal.
     * @type {?}
     */
    ModalHeader.prototype.closeSelect;
    /** @type {?} */
    ModalHeader.prototype.i18n;
    /** @type {?} */
    ModalHeader.prototype.experimental;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJtb2RhbC9tb2RhbC1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUNULE1BQU0sRUFDTixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Ozs7Ozs7O0FBNEJoRSxNQUFNOzs7OztJQW9CTCxZQUFzQixJQUFVLEVBQVksWUFBaUM7UUFBdkQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFZLGlCQUFZLEdBQVosWUFBWSxDQUFxQjs7OztxQkFoQjVELFNBQVM7Ozs7OzBCQUtKLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUs7Ozs7MkJBS3pCLElBQUksWUFBWSxFQUFFO0tBTXVDOzs7O0lBSmpGLElBQUksY0FBYztRQUNqQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDO0tBQ3hDOzs7OztJQU9NLE9BQU87UUFDYixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDOzs7O1lBekN6QixTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFOzs7Ozs7Ozs7OztFQVdUO2FBQ0Q7Ozs7WUE1QlEsSUFBSTtZQUNKLG1CQUFtQjs7O29CQWdDMUIsS0FBSzt5QkFLTCxLQUFLOzBCQUtMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdE91dHB1dCxcblx0RXZlbnRFbWl0dGVyLFxuXHRJbnB1dFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSTE4biB9IGZyb20gXCIuLy4uL2kxOG4vaTE4bi5tb2R1bGVcIjtcbmltcG9ydCB7IEV4cGVyaW1lbnRhbFNlcnZpY2UgfSBmcm9tIFwiLi8uLi9leHBlcmltZW50YWwuc2VydmljZVwiO1xuXG4vKipcbiAqICoqKklucHV0cyoqKlxuICogYGBgaHRtbFxuICogPGlibS1tb2RhbC1oZWFkZXI+SGVhZGVyIHRleHQ8L2libS1tb2RhbC1oZWFkZXI+XG4gKiBgYGBcbiAqXG4gKiAqKipPdXRwdXRzKioqXG4gKiBgYGBodG1sXG4gKiA8aWJtLW1vZGFsLWhlYWRlciAoY2xvc2VTZWxlY3QpPVwiY2xvc2VNb2RhbCgpXCI+SGVhZGVyIHRleHQ8L2libS1tb2RhbC1oZWFkZXI+XG4gKiBgYGBcbiAqL1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImlibS1tb2RhbC1oZWFkZXJcIixcblx0dGVtcGxhdGU6IGBcblx0XHQ8aGVhZGVyIGNsYXNzPVwie3t0aGVtZX19IGJ4LS1tb2RhbC1oZWFkZXJcIj5cblx0XHRcdDxuZy1jb250ZW50PjwvbmctY29udGVudD5cblx0XHRcdDxidXR0b25cblx0XHRcdFx0Y2xhc3M9XCJieC0tbW9kYWwtY2xvc2VcIlxuXHRcdFx0XHRbYXR0ci5hcmlhLWxhYmVsXT1cImNsb3NlTGFiZWxcIlxuXHRcdFx0XHQoY2xpY2spPVwib25DbG9zZSgpXCI+XG5cdFx0XHRcdDxpYm0taWNvbi1jbG9zZTE2IGNsYXNzPVwiYngtLW1vZGFsLWNsb3NlX19pY29uXCI+PC9pYm0taWNvbi1jbG9zZTE2PlxuXHRcdFx0PC9idXR0b24+XG5cdFx0PC9oZWFkZXI+XG5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbEhlYWRlciB7XG5cdC8qKlxuXHQgKiBTZXRzIHRoZSBzdHlsZSBvbiB0aGUgbW9kYWwgaGVhZGluZyBiYXNlZCBvbiBpdHMgY2F0ZWdvcnkuXG5cdCAqL1xuXHRASW5wdXQoKSB0aGVtZSA9IFwiZGVmYXVsdFwiO1xuXHQvKipcblx0ICogQWNjZXNzaWJsZSBsYWJlbCBmb3IgdGhlIGhlYWRlciBjbG9zZSBidXR0b24uXG5cdCAqIERlZmF1bHRzIHRvIHRoZSBgTU9EQUwuQ0xPU0VgIHZhbHVlIGZyb20gdGhlIGkxOG4gc2VydmljZS5cblx0ICovXG5cdEBJbnB1dCgpIGNsb3NlTGFiZWwgPSB0aGlzLmkxOG4uZ2V0KCkuTU9EQUwuQ0xPU0U7XG5cblx0LyoqXG5cdCAqIFRvIGVtaXQgdGhlIGV2ZW50IG9mIGNsaWNraW5nIG9uIHRoZSBjbG9zZSBpY29uIHdpdGhpbiB0aGUgbW9kYWwuXG5cdCAqL1xuXHRAT3V0cHV0KCkgY2xvc2VTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Z2V0IGlzRXhwZXJpbWVudGFsKCkge1xuXHRcdHJldHVybiB0aGlzLmV4cGVyaW1lbnRhbC5pc0V4cGVyaW1lbnRhbDtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKHByb3RlY3RlZCBpMThuOiBJMThuLCBwcm90ZWN0ZWQgZXhwZXJpbWVudGFsOiBFeHBlcmltZW50YWxTZXJ2aWNlKSB7fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIGNsaWNrIGZvciB0aGUgY2xvc2UgaWNvbiBidXR0b24gd2l0aGluIHRoZSBgTW9kYWxgLlxuXHQgKi9cblx0cHVibGljIG9uQ2xvc2UoKSB7XG5cdFx0dGhpcy5jbG9zZVNlbGVjdC5lbWl0KCk7XG5cdH1cbn1cbiJdfQ==