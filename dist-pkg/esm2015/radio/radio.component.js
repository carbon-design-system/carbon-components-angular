/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, HostBinding, Output, EventEmitter } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { RadioChange } from "./radio-change.class";
/**
 * class: Radio (extends Checkbox)
 *
 * selector: `n-radio`
 *
 * source: `src/forms/radio.component.ts`
 *
 * ```html
 * <ibm-radio [(ngModel)]="radioState">Radio</ibm-radio>
 * ```
 *
 * Also see: [`RadioGroup`](#ibm-radio-group)
 */
export class Radio {
    constructor() {
        this.checked = false;
        this.name = "";
        this.disabled = false;
        this.labelPlacement = "right";
        /**
         * Sets the HTML required attribute
         */
        this.required = false;
        /**
         * The value of the `Radio`.
         */
        this.value = "";
        /**
         * Set to `true` for a loading table.
         */
        this.skeleton = false;
        /**
         * The id for the `Radio`.
         */
        this.id = `radio-${Radio.radioCount++}`;
        /**
         * emits when the state of the radio changes
         */
        this.change = new EventEmitter();
        /**
         * Binds 'radio' value to the role attribute for `Radio`.
         */
        this.role = "radio";
        this.hostClass = true;
        this._labelledby = "";
        /**
         * Handler provided by the `RadioGroup` to bubble events up
         */
        this.radioChangeHandler = (event) => { };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ariaLabelledby(value) {
        this._labelledby = value;
    }
    /**
     * @return {?}
     */
    get ariaLabelledby() {
        if (this._labelledby) {
            return this._labelledby;
        }
        return `label-${this.id}`;
    }
    /**
     * @return {?}
     */
    get labelLeft() {
        return this.labelPlacement === "left";
    }
    /**
     * Synchronizes with the `RadioGroup` in the event of a changed `Radio`.
     * Emits the changes of both the `RadioGroup` and `Radio`.
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
        event.stopPropagation();
        this.checked = (/** @type {?} */ (event.target)).checked;
        /** @type {?} */
        const radioEvent = new RadioChange(this, this.value);
        this.change.emit(radioEvent);
        this.radioChangeHandler(radioEvent);
    }
    /**
     * Method called by `RadioGroup` with a callback function to bubble `RadioChange` events
     * @param {?} fn callback that expects a `RadioChange` as an argument
     * @return {?}
     */
    registerRadioChangeHandler(fn) {
        this.radioChangeHandler = fn;
    }
}
/**
 * Used to dynamically create unique ids for the `Radio`.
 */
Radio.radioCount = 0;
Radio.decorators = [
    { type: Component, args: [{
                selector: "ibm-radio",
                template: `
		<input
			*ngIf="!skeleton"
			class="bx--radio-button"
			type="radio"
			[checked]="checked"
			[disabled]="disabled"
			[name]="name"
			[id]="id"
			[required]="required"
			[value]="value"
			[attr.aria-labelledby]="ariaLabelledby"
			(change)="onChange($event)">
		<div *ngIf="skeleton" class="bx--radio-button bx--skeleton"></div>
		<label
			class="bx--radio-button__label"
			[ngClass]="{
				'bx--skeleton': skeleton
			}"
			[for]="id"
			id="label-{{id}}">
			<span class="bx--radio-button__appearance"></span>
			<ng-content></ng-content>
		</label>
	`,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: Radio,
                        multi: true
                    }
                ]
            }] }
];
Radio.propDecorators = {
    checked: [{ type: Input }],
    name: [{ type: Input }],
    disabled: [{ type: Input }],
    labelPlacement: [{ type: Input }],
    ariaLabelledby: [{ type: Input }],
    required: [{ type: Input }],
    value: [{ type: Input }],
    skeleton: [{ type: Input }],
    id: [{ type: Input }],
    change: [{ type: Output }],
    role: [{ type: HostBinding, args: ["attr.role",] }],
    hostClass: [{ type: HostBinding, args: ["class.bx--radio-button-wrapper",] }],
    labelLeft: [{ type: HostBinding, args: ["class.bx--radio-button-wrapper--label-left",] }]
};
function Radio_tsickle_Closure_declarations() {
    /**
     * Used to dynamically create unique ids for the `Radio`.
     * @type {?}
     */
    Radio.radioCount;
    /** @type {?} */
    Radio.prototype.checked;
    /** @type {?} */
    Radio.prototype.name;
    /** @type {?} */
    Radio.prototype.disabled;
    /** @type {?} */
    Radio.prototype.labelPlacement;
    /**
     * Sets the HTML required attribute
     * @type {?}
     */
    Radio.prototype.required;
    /**
     * The value of the `Radio`.
     * @type {?}
     */
    Radio.prototype.value;
    /**
     * Set to `true` for a loading table.
     * @type {?}
     */
    Radio.prototype.skeleton;
    /**
     * The id for the `Radio`.
     * @type {?}
     */
    Radio.prototype.id;
    /**
     * emits when the state of the radio changes
     * @type {?}
     */
    Radio.prototype.change;
    /**
     * Binds 'radio' value to the role attribute for `Radio`.
     * @type {?}
     */
    Radio.prototype.role;
    /** @type {?} */
    Radio.prototype.hostClass;
    /** @type {?} */
    Radio.prototype._labelledby;
    /**
     * Handler provided by the `RadioGroup` to bubble events up
     * @type {?}
     */
    Radio.prototype.radioChangeHandler;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FyYm9uLWNvbXBvbmVudHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbInJhZGlvL3JhZGlvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsV0FBVyxFQUNYLE1BQU0sRUFDTixZQUFZLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7Ozs7OztBQWtEbkQsTUFBTTs7dUJBTWMsS0FBSztvQkFFUixFQUFFO3dCQUVFLEtBQUs7OEJBRW9CLE9BQU87Ozs7d0JBZWhDLEtBQUs7Ozs7cUJBSVIsRUFBRTs7Ozt3QkFJQyxLQUFLOzs7O2tCQUlYLFNBQVMsS0FBSyxDQUFDLFVBQVUsRUFBRSxFQUFFOzs7O3NCQUl4QixJQUFJLFlBQVksRUFBZTs7OztvQkFJakIsT0FBTzt5QkFFbUIsSUFBSTsyQkFNdkMsRUFBRTs7OztrQ0FLTCxDQUFDLEtBQWtCLEVBQUUsRUFBRSxJQUFHOzs7Ozs7SUE5Qy9DLElBQWEsY0FBYyxDQUFDLEtBQWE7UUFDeEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7S0FDekI7Ozs7SUFFRCxJQUFJLGNBQWM7UUFDakIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUN4QjtRQUNELE9BQU8sU0FBUyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7S0FDMUI7Ozs7SUE0QkQsSUFBK0QsU0FBUztRQUN2RSxPQUFPLElBQUksQ0FBQyxjQUFjLEtBQUssTUFBTSxDQUFDO0tBQ3RDOzs7Ozs7O0lBYUQsUUFBUSxDQUFDLEtBQVk7UUFDcEIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsbUJBQUMsS0FBSyxDQUFDLE1BQTBCLEVBQUMsQ0FBQyxPQUFPLENBQUM7O1FBQzFELE1BQU0sVUFBVSxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQ3BDOzs7Ozs7SUFNRCwwQkFBMEIsQ0FBQyxFQUFnQztRQUMxRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDO0tBQzdCOzs7OzttQkE1RW1CLENBQUM7O1lBdkNyQixTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBd0JUO2dCQUNELFNBQVMsRUFBRTtvQkFDVjt3QkFDQyxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsS0FBSzt3QkFDbEIsS0FBSyxFQUFFLElBQUk7cUJBQ1g7aUJBQ0Q7YUFDRDs7O3NCQU9DLEtBQUs7bUJBRUwsS0FBSzt1QkFFTCxLQUFLOzZCQUVMLEtBQUs7NkJBRUwsS0FBSzt1QkFhTCxLQUFLO29CQUlMLEtBQUs7dUJBSUwsS0FBSztpQkFJTCxLQUFLO3FCQUlMLE1BQU07bUJBSU4sV0FBVyxTQUFDLFdBQVc7d0JBRXZCLFdBQVcsU0FBQyxnQ0FBZ0M7d0JBRTVDLFdBQVcsU0FBQyw0Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdElucHV0LFxuXHRIb3N0QmluZGluZyxcblx0T3V0cHV0LFxuXHRFdmVudEVtaXR0ZXJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBSYWRpb0NoYW5nZSB9IGZyb20gXCIuL3JhZGlvLWNoYW5nZS5jbGFzc1wiO1xuXG4vKipcbiAqIGNsYXNzOiBSYWRpbyAoZXh0ZW5kcyBDaGVja2JveClcbiAqXG4gKiBzZWxlY3RvcjogYG4tcmFkaW9gXG4gKlxuICogc291cmNlOiBgc3JjL2Zvcm1zL3JhZGlvLmNvbXBvbmVudC50c2BcbiAqXG4gKiBgYGBodG1sXG4gKiA8aWJtLXJhZGlvIFsobmdNb2RlbCldPVwicmFkaW9TdGF0ZVwiPlJhZGlvPC9pYm0tcmFkaW8+XG4gKiBgYGBcbiAqXG4gKiBBbHNvIHNlZTogW2BSYWRpb0dyb3VwYF0oI2libS1yYWRpby1ncm91cClcbiAqL1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImlibS1yYWRpb1wiLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxpbnB1dFxuXHRcdFx0Km5nSWY9XCIhc2tlbGV0b25cIlxuXHRcdFx0Y2xhc3M9XCJieC0tcmFkaW8tYnV0dG9uXCJcblx0XHRcdHR5cGU9XCJyYWRpb1wiXG5cdFx0XHRbY2hlY2tlZF09XCJjaGVja2VkXCJcblx0XHRcdFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG5cdFx0XHRbbmFtZV09XCJuYW1lXCJcblx0XHRcdFtpZF09XCJpZFwiXG5cdFx0XHRbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxuXHRcdFx0W3ZhbHVlXT1cInZhbHVlXCJcblx0XHRcdFthdHRyLmFyaWEtbGFiZWxsZWRieV09XCJhcmlhTGFiZWxsZWRieVwiXG5cdFx0XHQoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIj5cblx0XHQ8ZGl2ICpuZ0lmPVwic2tlbGV0b25cIiBjbGFzcz1cImJ4LS1yYWRpby1idXR0b24gYngtLXNrZWxldG9uXCI+PC9kaXY+XG5cdFx0PGxhYmVsXG5cdFx0XHRjbGFzcz1cImJ4LS1yYWRpby1idXR0b25fX2xhYmVsXCJcblx0XHRcdFtuZ0NsYXNzXT1cIntcblx0XHRcdFx0J2J4LS1za2VsZXRvbic6IHNrZWxldG9uXG5cdFx0XHR9XCJcblx0XHRcdFtmb3JdPVwiaWRcIlxuXHRcdFx0aWQ9XCJsYWJlbC17e2lkfX1cIj5cblx0XHRcdDxzcGFuIGNsYXNzPVwiYngtLXJhZGlvLWJ1dHRvbl9fYXBwZWFyYW5jZVwiPjwvc3Bhbj5cblx0XHRcdDxuZy1jb250ZW50PjwvbmctY29udGVudD5cblx0XHQ8L2xhYmVsPlxuXHRgLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcblx0XHRcdHVzZUV4aXN0aW5nOiBSYWRpbyxcblx0XHRcdG11bHRpOiB0cnVlXG5cdFx0fVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFJhZGlvIHtcblx0LyoqXG5cdCAqIFVzZWQgdG8gZHluYW1pY2FsbHkgY3JlYXRlIHVuaXF1ZSBpZHMgZm9yIHRoZSBgUmFkaW9gLlxuXHQgKi9cblx0c3RhdGljIHJhZGlvQ291bnQgPSAwO1xuXG5cdEBJbnB1dCgpIGNoZWNrZWQgPSBmYWxzZTtcblxuXHRASW5wdXQoKSBuYW1lID0gXCJcIjtcblxuXHRASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuXG5cdEBJbnB1dCgpIGxhYmVsUGxhY2VtZW50OiBcInJpZ2h0XCIgfCBcImxlZnRcIiA9ICBcInJpZ2h0XCI7XG5cblx0QElucHV0KCkgc2V0IGFyaWFMYWJlbGxlZGJ5KHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLl9sYWJlbGxlZGJ5ID0gdmFsdWU7XG5cdH1cblxuXHRnZXQgYXJpYUxhYmVsbGVkYnkoKSB7XG5cdFx0aWYgKHRoaXMuX2xhYmVsbGVkYnkpIHtcblx0XHRcdHJldHVybiB0aGlzLl9sYWJlbGxlZGJ5O1xuXHRcdH1cblx0XHRyZXR1cm4gYGxhYmVsLSR7dGhpcy5pZH1gO1xuXHR9XG5cdC8qKlxuXHQgKiBTZXRzIHRoZSBIVE1MIHJlcXVpcmVkIGF0dHJpYnV0ZVxuXHQgKi9cblx0QElucHV0KCkgcmVxdWlyZWQgPSBmYWxzZTtcblx0LyoqXG5cdCAqIFRoZSB2YWx1ZSBvZiB0aGUgYFJhZGlvYC5cblx0ICovXG5cdEBJbnB1dCgpIHZhbHVlID0gXCJcIjtcblx0LyoqXG5cdCAqIFNldCB0byBgdHJ1ZWAgZm9yIGEgbG9hZGluZyB0YWJsZS5cblx0ICovXG5cdEBJbnB1dCgpIHNrZWxldG9uID0gZmFsc2U7XG5cdC8qKlxuXHQgKiBUaGUgaWQgZm9yIHRoZSBgUmFkaW9gLlxuXHQgKi9cblx0QElucHV0KCkgaWQgPSBgcmFkaW8tJHtSYWRpby5yYWRpb0NvdW50Kyt9YDtcblx0LyoqXG5cdCAqIGVtaXRzIHdoZW4gdGhlIHN0YXRlIG9mIHRoZSByYWRpbyBjaGFuZ2VzXG5cdCAqL1xuXHRAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxSYWRpb0NoYW5nZT4oKTtcblx0LyoqXG5cdCAqIEJpbmRzICdyYWRpbycgdmFsdWUgdG8gdGhlIHJvbGUgYXR0cmlidXRlIGZvciBgUmFkaW9gLlxuXHQgKi9cblx0QEhvc3RCaW5kaW5nKFwiYXR0ci5yb2xlXCIpIHJvbGUgPSBcInJhZGlvXCI7XG5cblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MuYngtLXJhZGlvLWJ1dHRvbi13cmFwcGVyXCIpIGhvc3RDbGFzcyA9IHRydWU7XG5cblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MuYngtLXJhZGlvLWJ1dHRvbi13cmFwcGVyLS1sYWJlbC1sZWZ0XCIpIGdldCBsYWJlbExlZnQoKSB7XG5cdFx0cmV0dXJuIHRoaXMubGFiZWxQbGFjZW1lbnQgPT09IFwibGVmdFwiO1xuXHR9XG5cblx0cHJvdGVjdGVkIF9sYWJlbGxlZGJ5ID0gXCJcIjtcblxuXHQvKipcblx0ICogSGFuZGxlciBwcm92aWRlZCBieSB0aGUgYFJhZGlvR3JvdXBgIHRvIGJ1YmJsZSBldmVudHMgdXBcblx0ICovXG5cdHJhZGlvQ2hhbmdlSGFuZGxlciA9IChldmVudDogUmFkaW9DaGFuZ2UpID0+IHt9O1xuXG5cdC8qKlxuXHQgKiBTeW5jaHJvbml6ZXMgd2l0aCB0aGUgYFJhZGlvR3JvdXBgIGluIHRoZSBldmVudCBvZiBhIGNoYW5nZWQgYFJhZGlvYC5cblx0ICogRW1pdHMgdGhlIGNoYW5nZXMgb2YgYm90aCB0aGUgYFJhZGlvR3JvdXBgIGFuZCBgUmFkaW9gLlxuXHQgKi9cblx0b25DaGFuZ2UoZXZlbnQ6IEV2ZW50KSB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0dGhpcy5jaGVja2VkID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS5jaGVja2VkO1xuXHRcdGNvbnN0IHJhZGlvRXZlbnQgPSBuZXcgUmFkaW9DaGFuZ2UodGhpcywgdGhpcy52YWx1ZSk7XG5cdFx0dGhpcy5jaGFuZ2UuZW1pdChyYWRpb0V2ZW50KTtcblx0XHR0aGlzLnJhZGlvQ2hhbmdlSGFuZGxlcihyYWRpb0V2ZW50KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBNZXRob2QgY2FsbGVkIGJ5IGBSYWRpb0dyb3VwYCB3aXRoIGEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYnViYmxlIGBSYWRpb0NoYW5nZWAgZXZlbnRzXG5cdCAqIEBwYXJhbSBmbiBjYWxsYmFjayB0aGF0IGV4cGVjdHMgYSBgUmFkaW9DaGFuZ2VgIGFzIGFuIGFyZ3VtZW50XG5cdCAqL1xuXHRyZWdpc3RlclJhZGlvQ2hhbmdlSGFuZGxlcihmbjogKGV2ZW50OiBSYWRpb0NoYW5nZSkgPT4gdm9pZCkge1xuXHRcdHRoaXMucmFkaW9DaGFuZ2VIYW5kbGVyID0gZm47XG5cdH1cbn1cbiJdfQ==