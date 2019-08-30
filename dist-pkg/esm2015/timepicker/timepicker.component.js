/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, HostBinding, TemplateRef } from "@angular/core";
/**
 * [See demo](../../?path=/story/time-picker--simple)
 *
 * <example-url>../../iframe.html?id=time-picker--simple</example-url>
 */
export class TimePicker {
    constructor() {
        this.timePicker = true;
        this.placeholder = "hh:mm";
        this.pattern = "(1[012]|[0-9]):[0-5][0-9]";
        this.id = `timepicker-${TimePicker.timePickerCount++}`;
        this.disabled = false;
        /**
         * Set to true for a loading select.
         */
        this.skeleton = false;
        /**
         * `light` or `dark` select theme
         */
        this.theme = "dark";
        this.valueChange = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
        this.valueChange.emit(event.target.value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isTemplate(value) {
        return value instanceof TemplateRef;
    }
}
/**
 * Tracks the total number of selects instantiated. Used to generate unique IDs
 */
TimePicker.timePickerCount = 0;
TimePicker.decorators = [
    { type: Component, args: [{
                selector: "ibm-timepicker",
                template: `
			<div class="bx--time-picker__input">
				<label *ngIf="!skeleton && label" [for]="id" class="bx--label">
					<ng-container *ngIf="!isTemplate(label)">{{label}}</ng-container>
					<ng-template *ngIf="isTemplate(label)" [ngTemplateOutlet]="label"></ng-template>
				</label>
				<input
					[ngClass]="{
						'bx--text-input--light': theme === 'light',
						'bx--skeleton': skeleton
					}"
					[value]="value"
					[placeholder]="placeholder"
					[pattern]="pattern"
					[attr.id]="id"
					[disabled]="disabled"
					maxlength="5"
					(change)="onChange($event)"
					type="text"
					class="bx--time-picker__input-field bx--text-input">
			</div>
			<ng-content></ng-content>
	`
            }] }
];
TimePicker.propDecorators = {
    timePicker: [{ type: HostBinding, args: ["class.bx--time-picker",] }],
    label: [{ type: Input }],
    placeholder: [{ type: Input }],
    pattern: [{ type: Input }],
    id: [{ type: Input }],
    disabled: [{ type: Input }],
    value: [{ type: Input }],
    skeleton: [{ type: Input }],
    theme: [{ type: Input }],
    valueChange: [{ type: Output }]
};
function TimePicker_tsickle_Closure_declarations() {
    /**
     * Tracks the total number of selects instantiated. Used to generate unique IDs
     * @type {?}
     */
    TimePicker.timePickerCount;
    /** @type {?} */
    TimePicker.prototype.timePicker;
    /** @type {?} */
    TimePicker.prototype.label;
    /** @type {?} */
    TimePicker.prototype.placeholder;
    /** @type {?} */
    TimePicker.prototype.pattern;
    /** @type {?} */
    TimePicker.prototype.id;
    /** @type {?} */
    TimePicker.prototype.disabled;
    /** @type {?} */
    TimePicker.prototype.value;
    /**
     * Set to true for a loading select.
     * @type {?}
     */
    TimePicker.prototype.skeleton;
    /**
     * `light` or `dark` select theme
     * @type {?}
     */
    TimePicker.prototype.theme;
    /** @type {?} */
    TimePicker.prototype.valueChange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJib24tY29tcG9uZW50cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsidGltZXBpY2tlci90aW1lcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixXQUFXLEVBQ1gsV0FBVyxFQUNYLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFpQ3ZCLE1BQU07OzBCQU04QyxJQUFJOzJCQUdoQyxPQUFPO3VCQUNYLDJCQUEyQjtrQkFDaEMsY0FBYyxVQUFVLENBQUMsZUFBZSxFQUFFLEVBQUU7d0JBQ3RDLEtBQUs7Ozs7d0JBTUwsS0FBSzs7OztxQkFLVSxNQUFNOzJCQUVLLElBQUksWUFBWSxFQUFFOzs7Ozs7SUFFaEUsUUFBUSxDQUFDLEtBQUs7UUFDYixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzFDOzs7OztJQUVNLFVBQVUsQ0FBQyxLQUFLO1FBQ3RCLE9BQU8sS0FBSyxZQUFZLFdBQVcsQ0FBQzs7Ozs7OzZCQTVCWixDQUFDOztZQTlCMUIsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXNCVDthQUNEOzs7eUJBT0MsV0FBVyxTQUFDLHVCQUF1QjtvQkFFbkMsS0FBSzswQkFDTCxLQUFLO3NCQUNMLEtBQUs7aUJBQ0wsS0FBSzt1QkFDTCxLQUFLO29CQUNMLEtBQUs7dUJBS0wsS0FBSztvQkFLTCxLQUFLOzBCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdEV2ZW50RW1pdHRlcixcblx0SG9zdEJpbmRpbmcsXG5cdFRlbXBsYXRlUmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbi8qKlxuICogW1NlZSBkZW1vXSguLi8uLi8/cGF0aD0vc3RvcnkvdGltZS1waWNrZXItLXNpbXBsZSlcbiAqXG4gKiA8ZXhhbXBsZS11cmw+Li4vLi4vaWZyYW1lLmh0bWw/aWQ9dGltZS1waWNrZXItLXNpbXBsZTwvZXhhbXBsZS11cmw+XG4gKi9cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJpYm0tdGltZXBpY2tlclwiLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdFx0PGRpdiBjbGFzcz1cImJ4LS10aW1lLXBpY2tlcl9faW5wdXRcIj5cblx0XHRcdFx0PGxhYmVsICpuZ0lmPVwiIXNrZWxldG9uICYmIGxhYmVsXCIgW2Zvcl09XCJpZFwiIGNsYXNzPVwiYngtLWxhYmVsXCI+XG5cdFx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpc1RlbXBsYXRlKGxhYmVsKVwiPnt7bGFiZWx9fTwvbmctY29udGFpbmVyPlxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSAqbmdJZj1cImlzVGVtcGxhdGUobGFiZWwpXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwibGFiZWxcIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRbbmdDbGFzc109XCJ7XG5cdFx0XHRcdFx0XHQnYngtLXRleHQtaW5wdXQtLWxpZ2h0JzogdGhlbWUgPT09ICdsaWdodCcsXG5cdFx0XHRcdFx0XHQnYngtLXNrZWxldG9uJzogc2tlbGV0b25cblx0XHRcdFx0XHR9XCJcblx0XHRcdFx0XHRbdmFsdWVdPVwidmFsdWVcIlxuXHRcdFx0XHRcdFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG5cdFx0XHRcdFx0W3BhdHRlcm5dPVwicGF0dGVyblwiXG5cdFx0XHRcdFx0W2F0dHIuaWRdPVwiaWRcIlxuXHRcdFx0XHRcdFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG5cdFx0XHRcdFx0bWF4bGVuZ3RoPVwiNVwiXG5cdFx0XHRcdFx0KGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCJcblx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0Y2xhc3M9XCJieC0tdGltZS1waWNrZXJfX2lucHV0LWZpZWxkIGJ4LS10ZXh0LWlucHV0XCI+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxuZy1jb250ZW50PjwvbmctY29udGVudD5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBUaW1lUGlja2VyIHtcblx0LyoqXG5cdCAqIFRyYWNrcyB0aGUgdG90YWwgbnVtYmVyIG9mIHNlbGVjdHMgaW5zdGFudGlhdGVkLiBVc2VkIHRvIGdlbmVyYXRlIHVuaXF1ZSBJRHNcblx0ICovXG5cdHN0YXRpYyB0aW1lUGlja2VyQ291bnQgPSAwO1xuXG5cdEBIb3N0QmluZGluZyhcImNsYXNzLmJ4LS10aW1lLXBpY2tlclwiKSB0aW1lUGlja2VyID0gdHJ1ZTtcblxuXHRASW5wdXQoKSBsYWJlbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pjtcblx0QElucHV0KCkgcGxhY2Vob2xkZXIgPSBcImhoOm1tXCI7XG5cdEBJbnB1dCgpIHBhdHRlcm4gPSBcIigxWzAxMl18WzAtOV0pOlswLTVdWzAtOV1cIjtcblx0QElucHV0KCkgaWQgPSBgdGltZXBpY2tlci0ke1RpbWVQaWNrZXIudGltZVBpY2tlckNvdW50Kyt9YDtcblx0QElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcblx0QElucHV0KCkgdmFsdWU6IHN0cmluZztcblxuXHQvKipcblx0ICogU2V0IHRvIHRydWUgZm9yIGEgbG9hZGluZyBzZWxlY3QuXG5cdCAqL1xuXHRASW5wdXQoKSBza2VsZXRvbiA9IGZhbHNlO1xuXG5cdC8qKlxuXHQgKiBgbGlnaHRgIG9yIGBkYXJrYCBzZWxlY3QgdGhlbWVcblx0ICovXG5cdEBJbnB1dCgpIHRoZW1lOiBcImxpZ2h0XCIgfCBcImRhcmtcIiA9IFwiZGFya1wiO1xuXG5cdEBPdXRwdXQoKSB2YWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0b25DaGFuZ2UoZXZlbnQpIHtcblx0XHR0aGlzLnZhbHVlQ2hhbmdlLmVtaXQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcblx0fVxuXG5cdHB1YmxpYyBpc1RlbXBsYXRlKHZhbHVlKSB7XG5cdFx0cmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XG5cdH1cbn1cbiJdfQ==