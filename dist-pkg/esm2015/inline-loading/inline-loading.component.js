/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, HostBinding } from "@angular/core";
/**
 * [See demo](../../?path=/story/inline-loading--basic)
 *
 * <example-url>../../iframe.html?id=inline-loading--basic</example-url>
 */
export class InlineLoading {
    constructor() {
        /**
         * Provide a delay for the `setTimeout` for success.
         */
        this.successDelay = 1500;
        /**
         * set to `false` to stop the loading animation
         */
        this.isActive = true;
        /**
         * Emits event after the success state is active
         */
        this.onSuccess = new EventEmitter();
        this.loadingClass = true;
        /**
         * Set to `true` if the action is completed successfully.
         */
        this._success = false;
    }
    /**
     * Returns value `true` if the component is in the success state.
     * @return {?}
     */
    get success() {
        return this._success;
    }
    /**
     * Set the component's state to match the parameter and emits onSuccess if it exits.
     * @param {?} success
     * @return {?}
     */
    set success(success) {
        this._success = success;
        if (this._success) {
            setTimeout(() => {
                this.onSuccess.emit();
            }, this.successDelay);
        }
    }
}
InlineLoading.decorators = [
    { type: Component, args: [{
                selector: "ibm-inline-loading",
                template: `
		<div class="bx--inline-loading__animation">
			<div
				*ngIf="success === false"
				class="bx--loading bx--loading--small"
				[ngClass]="{
					'bx--loading--stop': !isActive
				}">
				<svg class="bx--loading__svg" viewBox="-75 -75 150 150">
					<circle class="bx--loading__background" cx="0" cy="0" r="30" />
					<circle class="bx--loading__stroke" cx="0" cy="0" r="30" />
				</svg>
			</div>
			<svg
				*ngIf="success === true"
				class="bx--inline-loading__checkmark-container bx--inline-loading__svg"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 10 10">
				<polyline class="bx--inline-loading__checkmark" points="0.74 3.4 3.67 6.34 9.24 0.74"></polyline>
			</svg>
		</div>
		<p *ngIf="success === false" class="bx--inline-loading__text">{{loadingText}}</p>
		<p *ngIf="success === true" class="bx--inline-loading__text">{{successText}}</p>
	`
            }] }
];
InlineLoading.propDecorators = {
    loadingText: [{ type: Input }],
    successText: [{ type: Input }],
    successDelay: [{ type: Input }],
    isActive: [{ type: Input }],
    success: [{ type: Input }],
    onSuccess: [{ type: Output }],
    loadingClass: [{ type: HostBinding, args: ["class.bx--inline-loading",] }]
};
function InlineLoading_tsickle_Closure_declarations() {
    /**
     * Specify the text description for the loading state.
     * @type {?}
     */
    InlineLoading.prototype.loadingText;
    /**
     * Specify the text description for the success state.
     * @type {?}
     */
    InlineLoading.prototype.successText;
    /**
     * Provide a delay for the `setTimeout` for success.
     * @type {?}
     */
    InlineLoading.prototype.successDelay;
    /**
     * set to `false` to stop the loading animation
     * @type {?}
     */
    InlineLoading.prototype.isActive;
    /**
     * Emits event after the success state is active
     * @type {?}
     */
    InlineLoading.prototype.onSuccess;
    /** @type {?} */
    InlineLoading.prototype.loadingClass;
    /**
     * Set to `true` if the action is completed successfully.
     * @type {?}
     */
    InlineLoading.prototype._success;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLWxvYWRpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FyYm9uLWNvbXBvbmVudHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbImlubGluZS1sb2FkaW5nL2lubGluZS1sb2FkaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixXQUFXLEVBQ1gsTUFBTSxlQUFlLENBQUM7Ozs7OztBQWtDdkIsTUFBTTs7Ozs7NEJBWW1CLElBQUk7Ozs7d0JBSVIsSUFBSTs7Ozt5QkF1QmlCLElBQUksWUFBWSxFQUFFOzRCQUVILElBQUk7Ozs7d0JBS3ZDLEtBQUs7Ozs7OztJQXpCMUIsSUFBYSxPQUFPO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztLQUNyQjs7Ozs7O0lBSUQsSUFBSSxPQUFPLENBQUUsT0FBZ0I7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN0QixFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN0QjtLQUNEOzs7WUE3REQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF1QlQ7YUFDRDs7OzBCQUtDLEtBQUs7MEJBSUwsS0FBSzsyQkFJTCxLQUFLO3VCQUlMLEtBQUs7c0JBS0wsS0FBSzt3QkFrQkwsTUFBTTsyQkFFTixXQUFXLFNBQUMsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRFdmVudEVtaXR0ZXIsXG5cdEhvc3RCaW5kaW5nXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbi8qKlxuICogW1NlZSBkZW1vXSguLi8uLi8/cGF0aD0vc3RvcnkvaW5saW5lLWxvYWRpbmctLWJhc2ljKVxuICpcbiAqIDxleGFtcGxlLXVybD4uLi8uLi9pZnJhbWUuaHRtbD9pZD1pbmxpbmUtbG9hZGluZy0tYmFzaWM8L2V4YW1wbGUtdXJsPlxuICovXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiaWJtLWlubGluZS1sb2FkaW5nXCIsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiBjbGFzcz1cImJ4LS1pbmxpbmUtbG9hZGluZ19fYW5pbWF0aW9uXCI+XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdCpuZ0lmPVwic3VjY2VzcyA9PT0gZmFsc2VcIlxuXHRcdFx0XHRjbGFzcz1cImJ4LS1sb2FkaW5nIGJ4LS1sb2FkaW5nLS1zbWFsbFwiXG5cdFx0XHRcdFtuZ0NsYXNzXT1cIntcblx0XHRcdFx0XHQnYngtLWxvYWRpbmctLXN0b3AnOiAhaXNBY3RpdmVcblx0XHRcdFx0fVwiPlxuXHRcdFx0XHQ8c3ZnIGNsYXNzPVwiYngtLWxvYWRpbmdfX3N2Z1wiIHZpZXdCb3g9XCItNzUgLTc1IDE1MCAxNTBcIj5cblx0XHRcdFx0XHQ8Y2lyY2xlIGNsYXNzPVwiYngtLWxvYWRpbmdfX2JhY2tncm91bmRcIiBjeD1cIjBcIiBjeT1cIjBcIiByPVwiMzBcIiAvPlxuXHRcdFx0XHRcdDxjaXJjbGUgY2xhc3M9XCJieC0tbG9hZGluZ19fc3Ryb2tlXCIgY3g9XCIwXCIgY3k9XCIwXCIgcj1cIjMwXCIgLz5cblx0XHRcdFx0PC9zdmc+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxzdmdcblx0XHRcdFx0Km5nSWY9XCJzdWNjZXNzID09PSB0cnVlXCJcblx0XHRcdFx0Y2xhc3M9XCJieC0taW5saW5lLWxvYWRpbmdfX2NoZWNrbWFyay1jb250YWluZXIgYngtLWlubGluZS1sb2FkaW5nX19zdmdcIlxuXHRcdFx0XHR4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcblx0XHRcdFx0dmlld0JveD1cIjAgMCAxMCAxMFwiPlxuXHRcdFx0XHQ8cG9seWxpbmUgY2xhc3M9XCJieC0taW5saW5lLWxvYWRpbmdfX2NoZWNrbWFya1wiIHBvaW50cz1cIjAuNzQgMy40IDMuNjcgNi4zNCA5LjI0IDAuNzRcIj48L3BvbHlsaW5lPlxuXHRcdFx0PC9zdmc+XG5cdFx0PC9kaXY+XG5cdFx0PHAgKm5nSWY9XCJzdWNjZXNzID09PSBmYWxzZVwiIGNsYXNzPVwiYngtLWlubGluZS1sb2FkaW5nX190ZXh0XCI+e3tsb2FkaW5nVGV4dH19PC9wPlxuXHRcdDxwICpuZ0lmPVwic3VjY2VzcyA9PT0gdHJ1ZVwiIGNsYXNzPVwiYngtLWlubGluZS1sb2FkaW5nX190ZXh0XCI+e3tzdWNjZXNzVGV4dH19PC9wPlxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIElubGluZUxvYWRpbmcge1xuXHQvKipcblx0ICogU3BlY2lmeSB0aGUgdGV4dCBkZXNjcmlwdGlvbiBmb3IgdGhlIGxvYWRpbmcgc3RhdGUuXG5cdCAqL1xuXHRASW5wdXQoKSBsb2FkaW5nVGV4dDtcblx0LyoqXG5cdCAqIFNwZWNpZnkgdGhlIHRleHQgZGVzY3JpcHRpb24gZm9yIHRoZSBzdWNjZXNzIHN0YXRlLlxuXHQgKi9cblx0QElucHV0KCkgc3VjY2Vzc1RleHQ7XG5cdC8qKlxuXHQgKiBQcm92aWRlIGEgZGVsYXkgZm9yIHRoZSBgc2V0VGltZW91dGAgZm9yIHN1Y2Nlc3MuXG5cdCAqL1xuXHRASW5wdXQoKSBzdWNjZXNzRGVsYXkgPSAxNTAwO1xuXHQvKipcblx0ICogc2V0IHRvIGBmYWxzZWAgdG8gc3RvcCB0aGUgbG9hZGluZyBhbmltYXRpb25cblx0ICovXG5cdEBJbnB1dCgpIGlzQWN0aXZlID0gdHJ1ZTtcblxuXHQvKipcblx0ICogUmV0dXJucyB2YWx1ZSBgdHJ1ZWAgaWYgdGhlIGNvbXBvbmVudCBpcyBpbiB0aGUgc3VjY2VzcyBzdGF0ZS5cblx0ICovXG5cdEBJbnB1dCgpIGdldCBzdWNjZXNzKCkge1xuXHRcdHJldHVybiB0aGlzLl9zdWNjZXNzO1xuXHR9XG5cdC8qKlxuXHQgKiBTZXQgdGhlIGNvbXBvbmVudCdzIHN0YXRlIHRvIG1hdGNoIHRoZSBwYXJhbWV0ZXIgYW5kIGVtaXRzIG9uU3VjY2VzcyBpZiBpdCBleGl0cy5cblx0ICovXG5cdHNldCBzdWNjZXNzIChzdWNjZXNzOiBib29sZWFuKSB7XG5cdFx0dGhpcy5fc3VjY2VzcyA9IHN1Y2Nlc3M7XG5cdFx0aWYgKHRoaXMuX3N1Y2Nlc3MpIHtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLm9uU3VjY2Vzcy5lbWl0KCk7XG5cdFx0XHR9LCB0aGlzLnN1Y2Nlc3NEZWxheSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEVtaXRzIGV2ZW50IGFmdGVyIHRoZSBzdWNjZXNzIHN0YXRlIGlzIGFjdGl2ZVxuXHQgKi9cblx0QE91dHB1dCgpIG9uU3VjY2VzczogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MuYngtLWlubGluZS1sb2FkaW5nXCIpIGxvYWRpbmdDbGFzcyA9IHRydWU7XG5cblx0LyoqXG5cdCAqIFNldCB0byBgdHJ1ZWAgaWYgdGhlIGFjdGlvbiBpcyBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5LlxuXHQgKi9cblx0cHJvdGVjdGVkIF9zdWNjZXNzID0gZmFsc2U7XG59XG4iXX0=