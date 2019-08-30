/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Output, EventEmitter, ViewChild, ElementRef, Input } from "@angular/core";
/**
 * Component for the overlay object that acts as a backdrop to the `Modal` component.
 *
 * The main purpose for this component is to be able to handle click events that fall outside
 * the bounds of the `Modal` component.
 */
export class Overlay {
    constructor() {
        /**
         * Classification of the modal.
         */
        this.theme = "default";
        /**
         * To emit the event where the user selects the overlay behind the `Modal`.
         */
        this.overlaySelect = new EventEmitter();
    }
    /**
     * Handles the user clicking on the `Overlay` which resides outside the `Modal` object.
     * @param {?} event
     * @return {?}
     */
    overlayClick(event) {
        if (event.target !== this.overlay.nativeElement) {
            return;
        }
        event.stopPropagation();
        this.overlaySelect.emit(event);
    }
}
Overlay.decorators = [
    { type: Component, args: [{
                selector: "ibm-overlay",
                template: `
		<section
			class="bx--modal bx--modal-tall is-visible"
			[ngClass]="{'bx--modal--danger': theme === 'danger'}"
			(click)="overlayClick($event)"
			#overlay>
			<ng-content></ng-content>
		</section>
	`
            }] }
];
Overlay.propDecorators = {
    theme: [{ type: Input }],
    overlaySelect: [{ type: Output }],
    overlay: [{ type: ViewChild, args: ["overlay",] }]
};
function Overlay_tsickle_Closure_declarations() {
    /**
     * Classification of the modal.
     * @type {?}
     */
    Overlay.prototype.theme;
    /**
     * To emit the event where the user selects the overlay behind the `Modal`.
     * @type {?}
     */
    Overlay.prototype.overlaySelect;
    /**
     * Maintains a reference to the view DOM element of the `Overlay`.
     * @type {?}
     */
    Overlay.prototype.overlay;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJib24tY29tcG9uZW50cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsibW9kYWwvb3ZlcmxheS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBQ1QsTUFBTSxFQUNOLFlBQVksRUFDWixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQXFCdkIsTUFBTTs7Ozs7cUJBSWtDLFNBQVM7Ozs7NkJBSXRCLElBQUksWUFBWSxFQUFFOzs7Ozs7O0lBUzVDLFlBQVksQ0FBQyxLQUFLO1FBQ2pCLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRTtZQUFFLE9BQU87U0FBRTtRQUM1RCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDL0I7OztZQWpDRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRTs7Ozs7Ozs7RUFRVDthQUNEOzs7b0JBS0MsS0FBSzs0QkFJTCxNQUFNO3NCQUlOLFNBQVMsU0FBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRPdXRwdXQsXG5cdEV2ZW50RW1pdHRlcixcblx0Vmlld0NoaWxkLFxuXHRFbGVtZW50UmVmLFxuXHRJbnB1dFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5cbi8qKlxuICogQ29tcG9uZW50IGZvciB0aGUgb3ZlcmxheSBvYmplY3QgdGhhdCBhY3RzIGFzIGEgYmFja2Ryb3AgdG8gdGhlIGBNb2RhbGAgY29tcG9uZW50LlxuICpcbiAqIFRoZSBtYWluIHB1cnBvc2UgZm9yIHRoaXMgY29tcG9uZW50IGlzIHRvIGJlIGFibGUgdG8gaGFuZGxlIGNsaWNrIGV2ZW50cyB0aGF0IGZhbGwgb3V0c2lkZVxuICogdGhlIGJvdW5kcyBvZiB0aGUgYE1vZGFsYCBjb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJpYm0tb3ZlcmxheVwiLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxzZWN0aW9uXG5cdFx0XHRjbGFzcz1cImJ4LS1tb2RhbCBieC0tbW9kYWwtdGFsbCBpcy12aXNpYmxlXCJcblx0XHRcdFtuZ0NsYXNzXT1cInsnYngtLW1vZGFsLS1kYW5nZXInOiB0aGVtZSA9PT0gJ2Rhbmdlcid9XCJcblx0XHRcdChjbGljayk9XCJvdmVybGF5Q2xpY2soJGV2ZW50KVwiXG5cdFx0XHQjb3ZlcmxheT5cblx0XHRcdDxuZy1jb250ZW50PjwvbmctY29udGVudD5cblx0XHQ8L3NlY3Rpb24+XG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgT3ZlcmxheSB7XG5cdC8qKlxuXHQgKiBDbGFzc2lmaWNhdGlvbiBvZiB0aGUgbW9kYWwuXG5cdCAqL1xuXHRASW5wdXQoKSB0aGVtZTogXCJkZWZhdWx0XCIgfCBcImRhbmdlclwiID0gXCJkZWZhdWx0XCI7XG5cdC8qKlxuXHQgKiBUbyBlbWl0IHRoZSBldmVudCB3aGVyZSB0aGUgdXNlciBzZWxlY3RzIHRoZSBvdmVybGF5IGJlaGluZCB0aGUgYE1vZGFsYC5cblx0ICovXG5cdEBPdXRwdXQoKSBvdmVybGF5U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHQvKipcblx0ICogTWFpbnRhaW5zIGEgcmVmZXJlbmNlIHRvIHRoZSB2aWV3IERPTSBlbGVtZW50IG9mIHRoZSBgT3ZlcmxheWAuXG5cdCAqL1xuXHRAVmlld0NoaWxkKFwib3ZlcmxheVwiKSBvdmVybGF5OiBFbGVtZW50UmVmO1xuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIHRoZSB1c2VyIGNsaWNraW5nIG9uIHRoZSBgT3ZlcmxheWAgd2hpY2ggcmVzaWRlcyBvdXRzaWRlIHRoZSBgTW9kYWxgIG9iamVjdC5cblx0ICovXG5cdG92ZXJsYXlDbGljayhldmVudCkge1xuXHRcdGlmIChldmVudC50YXJnZXQgIT09IHRoaXMub3ZlcmxheS5uYXRpdmVFbGVtZW50KSB7IHJldHVybjsgfVxuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdHRoaXMub3ZlcmxheVNlbGVjdC5lbWl0KGV2ZW50KTtcblx0fVxuXG59XG4iXX0=