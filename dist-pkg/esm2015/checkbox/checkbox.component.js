/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild, HostBinding } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
/** @enum {number} */
const CheckboxState = {
    Init: 0,
    Indeterminate: 1,
    Checked: 2,
    Unchecked: 3,
};
export { CheckboxState };
CheckboxState[CheckboxState.Init] = 'Init';
CheckboxState[CheckboxState.Indeterminate] = 'Indeterminate';
CheckboxState[CheckboxState.Checked] = 'Checked';
CheckboxState[CheckboxState.Unchecked] = 'Unchecked';
/**
 * Used to emit changes performed on checkbox components.
 */
export class CheckboxChange {
}
function CheckboxChange_tsickle_Closure_declarations() {
    /**
     * Contains the `Checkbox` that has been changed.
     * @type {?}
     */
    CheckboxChange.prototype.source;
    /**
     * The state of the `Checkbox` encompassed in the `CheckboxChange` class.
     * @type {?}
     */
    CheckboxChange.prototype.checked;
}
/**
 * [See demo](../../?path=/story/checkbox--basic)
 *
 * <example-url>../../iframe.html?id=checkbox--basic</example-url>
 */
export class Checkbox {
    /**
     * Creates an instance of `Checkbox`.
     * @param {?} changeDetectorRef
     */
    constructor(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        /**
         * Size of the checkbox.
         */
        this.size = "md";
        /**
         * Set to `true` for checkbox to be rendered without any classes on the host element.
         */
        this.inline = false;
        /**
         * Set to `true` for a disabled checkbox.
         */
        this.disabled = false;
        /**
         * Set to `true` for a loading checkbox.
         */
        this.skeleton = false;
        /**
         * Set to `true` to hide the checkbox labels.
         */
        this.hideLabel = false;
        /**
         * The unique id for the checkbox component.
         */
        this.id = `checkbox-${Checkbox.checkboxCount}`;
        /**
         * Used to set the `aria-label` attribute on the input element.
         */
        this.ariaLabel = "";
        /**
         * Emits event notifying other classes when a change in state occurs on a checkbox after a
         * click.
         */
        this.change = new EventEmitter();
        /**
         * Emits event notifying other classes when a change in state occurs specifically
         * on an indeterminate checkbox.
         */
        this.indeterminateChange = new EventEmitter();
        /**
         * Set to `true` if the input checkbox is selected (or checked).
         */
        this._checked = false;
        /**
         * Set to `true` if the input checkbox is in state indeterminate.
         */
        this._indeterminate = false;
        this.currentCheckboxState = CheckboxState.Init;
        /**
         * Called when checkbox is blurred. Needed to properly implement `ControlValueAccessor`.
         */
        this.onTouched = () => { };
        /**
         * Method set in `registerOnChange` to propagate changes back to the form.
         */
        this.propagateChange = (_) => { };
        Checkbox.checkboxCount++;
    }
    /**
     * Reflects whether the checkbox state is indeterminate.
     * @return {?}
     */
    get indeterminate() {
        return this._indeterminate;
    }
    /**
     * Set the checkbox's indeterminate state to match the parameter and transition the view to reflect the change.
     * @param {?} indeterminate
     * @return {?}
     */
    set indeterminate(indeterminate) {
        /** @type {?} */
        let changed = this._indeterminate !== indeterminate;
        this._indeterminate = indeterminate;
        if (changed) {
            this.transitionCheckboxState(CheckboxState.Indeterminate);
        }
        else {
            this.transitionCheckboxState(this.checked ? CheckboxState.Checked : CheckboxState.Unchecked);
        }
        this.indeterminateChange.emit(this._indeterminate);
    }
    /**
     * Returns value `true` if state is selected for the checkbox.
     * @return {?}
     */
    get checked() {
        return this._checked;
    }
    /**
     * Updating the state of a checkbox to match the state of the parameter passed in.
     * @param {?} checked
     * @return {?}
     */
    set checked(checked) {
        if (checked !== this.checked) {
            if (this._indeterminate) {
                Promise.resolve().then(() => {
                    this._indeterminate = false;
                    this.indeterminateChange.emit(this._indeterminate);
                });
            }
            this._checked = checked;
            this.changeDetectorRef.markForCheck();
        }
    }
    /**
     * @return {?}
     */
    get checkboxWrapperClass() {
        return !this.inline;
    }
    /**
     * @return {?}
     */
    get formItemClass() {
        return !this.inline;
    }
    /**
     * Toggle the selected state of the checkbox.
     * @return {?}
     */
    toggle() {
        this.checked = !this.checked;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.checked = !!value;
    }
    /**
     * Sets a method in order to propagate changes back to the form.
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * Registers a callback to be triggered when the control has been touched.
     * @param {?} fn Callback to be triggered when the checkbox is touched.
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Executes on the event of a change within `Checkbox` to block propagation.
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
        event.stopPropagation();
    }
    /**
     * Handles click events on the `Checkbox` and emits changes to other classes.
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        if (!this.disabled) {
            this.toggle();
            this.transitionCheckboxState(this._checked ? CheckboxState.Checked : CheckboxState.Unchecked);
            this.emitChangeEvent();
        }
    }
    /**
     * Handles changes between checkbox states.
     * @param {?} newState
     * @return {?}
     */
    transitionCheckboxState(newState) {
        /** @type {?} */
        let oldState = this.currentCheckboxState;
        // Indeterminate has to be set always if it's transitioned to
        // checked has to be set before indeterminate or it overrides
        // indeterminate's dash
        if (newState === CheckboxState.Indeterminate) {
            this.checked = false;
            this.inputCheckbox.nativeElement.indeterminate = true;
        }
        if (oldState === newState) {
            return;
        }
        this.currentCheckboxState = newState;
    }
    /**
     * Creates instance of `CheckboxChange` used to propagate the change event.
     * @return {?}
     */
    emitChangeEvent() {
        /** @type {?} */
        let event = new CheckboxChange();
        event.source = this;
        event.checked = this.checked;
        this.propagateChange(this.checked);
        this.change.emit(event);
    }
    /**
     * Updates the checkbox if it is in the indeterminate state.
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.indeterminate) {
            this.inputCheckbox.nativeElement.indeterminate = true;
            this.checked = false;
        }
    }
}
/**
 * Variable used for creating unique ids for checkbox components.
 */
Checkbox.checkboxCount = 0;
Checkbox.decorators = [
    { type: Component, args: [{
                selector: "ibm-checkbox",
                template: `
		<input
			#inputCheckbox
			class="bx--checkbox"
			type="checkbox"
			[id]="id"
			[value]="value"
			[name]="name"
			[required]="required"
			[checked]="checked"
			[disabled]="disabled"
			[indeterminate]="indeterminate"
			[attr.aria-label]="ariaLabel"
			[attr.aria-labelledby]="ariaLabelledby"
			[attr.aria-checked]="(indeterminate ? 'mixed' : checked)"
			(change)="onChange($event)"
			(click)="onClick($event)">
		<label
			[for]="id"
			class="bx--checkbox-label"
			[ngClass]="{
				'bx--skeleton' : skeleton
			}">
			<span [ngClass]="{'bx--visually-hidden' : hideLabel}">
				<ng-content></ng-content>
			</span>
		</label>
	`,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: Checkbox,
                        multi: true
                    }
                ],
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
Checkbox.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
Checkbox.propDecorators = {
    size: [{ type: Input }],
    nested: [{ type: Input }],
    inline: [{ type: Input }],
    disabled: [{ type: Input }],
    skeleton: [{ type: Input }],
    hideLabel: [{ type: Input }],
    name: [{ type: Input }],
    id: [{ type: Input }],
    required: [{ type: Input }],
    value: [{ type: Input }],
    ariaLabel: [{ type: Input, args: ["aria-label",] }],
    ariaLabelledby: [{ type: Input, args: ["aria-labelledby",] }],
    indeterminate: [{ type: Input }],
    checked: [{ type: Input }],
    checkboxWrapperClass: [{ type: HostBinding, args: ["class.bx--checkbox-wrapper",] }],
    formItemClass: [{ type: HostBinding, args: ["class.bx--form-item",] }],
    change: [{ type: Output }],
    indeterminateChange: [{ type: Output }],
    inputCheckbox: [{ type: ViewChild, args: ["inputCheckbox",] }]
};
function Checkbox_tsickle_Closure_declarations() {
    /**
     * Variable used for creating unique ids for checkbox components.
     * @type {?}
     */
    Checkbox.checkboxCount;
    /**
     * Size of the checkbox.
     * @type {?}
     */
    Checkbox.prototype.size;
    /**
     * Set to `true` for checkbox to be rendered with nested styles.
     * @type {?}
     */
    Checkbox.prototype.nested;
    /**
     * Set to `true` for checkbox to be rendered without any classes on the host element.
     * @type {?}
     */
    Checkbox.prototype.inline;
    /**
     * Set to `true` for a disabled checkbox.
     * @type {?}
     */
    Checkbox.prototype.disabled;
    /**
     * Set to `true` for a loading checkbox.
     * @type {?}
     */
    Checkbox.prototype.skeleton;
    /**
     * Set to `true` to hide the checkbox labels.
     * @type {?}
     */
    Checkbox.prototype.hideLabel;
    /**
     * Sets the name attribute on the `input` element.
     * @type {?}
     */
    Checkbox.prototype.name;
    /**
     * The unique id for the checkbox component.
     * @type {?}
     */
    Checkbox.prototype.id;
    /**
     * Reflects the required attribute of the `input` element.
     * @type {?}
     */
    Checkbox.prototype.required;
    /**
     * Sets the value attribute on the `input` element.
     * @type {?}
     */
    Checkbox.prototype.value;
    /**
     * Used to set the `aria-label` attribute on the input element.
     * @type {?}
     */
    Checkbox.prototype.ariaLabel;
    /**
     * Used to set the `aria-labelledby` attribute on the input element.
     * @type {?}
     */
    Checkbox.prototype.ariaLabelledby;
    /**
     * Emits event notifying other classes when a change in state occurs on a checkbox after a
     * click.
     * @type {?}
     */
    Checkbox.prototype.change;
    /**
     * Emits event notifying other classes when a change in state occurs specifically
     * on an indeterminate checkbox.
     * @type {?}
     */
    Checkbox.prototype.indeterminateChange;
    /**
     * Set to `true` if the input checkbox is selected (or checked).
     * @type {?}
     */
    Checkbox.prototype._checked;
    /**
     * Set to `true` if the input checkbox is in state indeterminate.
     * @type {?}
     */
    Checkbox.prototype._indeterminate;
    /** @type {?} */
    Checkbox.prototype.currentCheckboxState;
    /**
     * Maintains a reference to the view DOM element of the `Checkbox`.
     * @type {?}
     */
    Checkbox.prototype.inputCheckbox;
    /**
     * Called when checkbox is blurred. Needed to properly implement `ControlValueAccessor`.
     * @type {?}
     */
    Checkbox.prototype.onTouched;
    /**
     * Method set in `registerOnChange` to propagate changes back to the form.
     * @type {?}
     */
    Checkbox.prototype.propagateChange;
    /** @type {?} */
    Checkbox.prototype.changeDetectorRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FyYm9uLWNvbXBvbmVudHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbImNoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVOLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsV0FBVyxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQzs7O0lBT3hFLE9BQUk7SUFDSixnQkFBYTtJQUNiLFVBQU87SUFDUCxZQUFTOzs7NEJBSFQsSUFBSTs0QkFDSixhQUFhOzRCQUNiLE9BQU87NEJBQ1AsU0FBUzs7OztBQU1WLE1BQU07Q0FTTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOENELE1BQU07Ozs7O0lBMklMLFlBQXNCLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1COzs7O29CQWxJN0IsSUFBSTs7OztzQkFRZixLQUFLOzs7O3dCQUlILEtBQUs7Ozs7d0JBSUwsS0FBSzs7Ozt5QkFJSixLQUFLOzs7O2tCQVFaLFlBQVksUUFBUSxDQUFDLGFBQWEsRUFBRTs7Ozt5QkFhakIsRUFBRTs7Ozs7c0JBK0RoQixJQUFJLFlBQVksRUFBa0I7Ozs7O21DQUtyQixJQUFJLFlBQVksRUFBVzs7Ozt3QkFLaEQsS0FBSzs7Ozs4QkFJQyxLQUFLO29DQUVnQixhQUFhLENBQUMsSUFBSTs7Ozt5QkErRGpDLEdBQUcsRUFBRSxJQUFHOzs7OytCQWdEYixDQUFDLENBQU0sRUFBRSxFQUFFLElBQUc7UUFwRy9CLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUN6Qjs7Ozs7SUFsRkQsSUFBSSxhQUFhO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FB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QXFCO3FCQVFqQyxNQUFNO2tDQUtOLE1BQU07NEJBZ0JOLFNBQVMsU0FBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0QWZ0ZXJWaWV3SW5pdCxcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdEV2ZW50RW1pdHRlcixcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0Vmlld0NoaWxkLFxuXHRIb3N0QmluZGluZ1xufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5cblxuLyoqXG4gKiBEZWZpbmVzIHRoZSBzZXQgb2Ygc3RhdGVzIGZvciBhIGNoZWNrYm94IGNvbXBvbmVudC5cbiAqL1xuZXhwb3J0IGVudW0gQ2hlY2tib3hTdGF0ZSB7XG5cdEluaXQsXG5cdEluZGV0ZXJtaW5hdGUsXG5cdENoZWNrZWQsXG5cdFVuY2hlY2tlZFxufVxuXG4vKipcbiAqIFVzZWQgdG8gZW1pdCBjaGFuZ2VzIHBlcmZvcm1lZCBvbiBjaGVja2JveCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hDaGFuZ2Uge1xuXHQvKipcblx0ICogQ29udGFpbnMgdGhlIGBDaGVja2JveGAgdGhhdCBoYXMgYmVlbiBjaGFuZ2VkLlxuXHQgKi9cblx0c291cmNlOiBDaGVja2JveDtcblx0LyoqXG5cdCAqIFRoZSBzdGF0ZSBvZiB0aGUgYENoZWNrYm94YCBlbmNvbXBhc3NlZCBpbiB0aGUgYENoZWNrYm94Q2hhbmdlYCBjbGFzcy5cblx0ICovXG5cdGNoZWNrZWQ6IGJvb2xlYW47XG59XG5cbi8qKlxuICogW1NlZSBkZW1vXSguLi8uLi8/cGF0aD0vc3RvcnkvY2hlY2tib3gtLWJhc2ljKVxuICpcbiAqIDxleGFtcGxlLXVybD4uLi8uLi9pZnJhbWUuaHRtbD9pZD1jaGVja2JveC0tYmFzaWM8L2V4YW1wbGUtdXJsPlxuICovXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiaWJtLWNoZWNrYm94XCIsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGlucHV0XG5cdFx0XHQjaW5wdXRDaGVja2JveFxuXHRcdFx0Y2xhc3M9XCJieC0tY2hlY2tib3hcIlxuXHRcdFx0dHlwZT1cImNoZWNrYm94XCJcblx0XHRcdFtpZF09XCJpZFwiXG5cdFx0XHRbdmFsdWVdPVwidmFsdWVcIlxuXHRcdFx0W25hbWVdPVwibmFtZVwiXG5cdFx0XHRbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxuXHRcdFx0W2NoZWNrZWRdPVwiY2hlY2tlZFwiXG5cdFx0XHRbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuXHRcdFx0W2luZGV0ZXJtaW5hdGVdPVwiaW5kZXRlcm1pbmF0ZVwiXG5cdFx0XHRbYXR0ci5hcmlhLWxhYmVsXT1cImFyaWFMYWJlbFwiXG5cdFx0XHRbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwiYXJpYUxhYmVsbGVkYnlcIlxuXHRcdFx0W2F0dHIuYXJpYS1jaGVja2VkXT1cIihpbmRldGVybWluYXRlID8gJ21peGVkJyA6IGNoZWNrZWQpXCJcblx0XHRcdChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiXG5cdFx0XHQoY2xpY2spPVwib25DbGljaygkZXZlbnQpXCI+XG5cdFx0PGxhYmVsXG5cdFx0XHRbZm9yXT1cImlkXCJcblx0XHRcdGNsYXNzPVwiYngtLWNoZWNrYm94LWxhYmVsXCJcblx0XHRcdFtuZ0NsYXNzXT1cIntcblx0XHRcdFx0J2J4LS1za2VsZXRvbicgOiBza2VsZXRvblxuXHRcdFx0fVwiPlxuXHRcdFx0PHNwYW4gW25nQ2xhc3NdPVwieydieC0tdmlzdWFsbHktaGlkZGVuJyA6IGhpZGVMYWJlbH1cIj5cblx0XHRcdFx0PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuXHRcdFx0PC9zcGFuPlxuXHRcdDwvbGFiZWw+XG5cdGAsXG5cdHByb3ZpZGVyczogW1xuXHRcdHtcblx0XHRcdHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuXHRcdFx0dXNlRXhpc3Rpbmc6IENoZWNrYm94LFxuXHRcdFx0bXVsdGk6IHRydWVcblx0XHR9XG5cdF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrYm94IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyVmlld0luaXQge1xuXHQvKipcblx0ICogVmFyaWFibGUgdXNlZCBmb3IgY3JlYXRpbmcgdW5pcXVlIGlkcyBmb3IgY2hlY2tib3ggY29tcG9uZW50cy5cblx0ICovXG5cdHN0YXRpYyBjaGVja2JveENvdW50ID0gMDtcblxuXHQvKipcblx0ICogU2l6ZSBvZiB0aGUgY2hlY2tib3guXG5cdCAqL1xuXHRASW5wdXQoKSBzaXplOiBcInNtXCIgfCBcIm1kXCIgPSBcIm1kXCI7XG5cdC8qKlxuXHQgKiBTZXQgdG8gYHRydWVgIGZvciBjaGVja2JveCB0byBiZSByZW5kZXJlZCB3aXRoIG5lc3RlZCBzdHlsZXMuXG5cdCAqL1xuXHRASW5wdXQoKSBuZXN0ZWQ6IGJvb2xlYW47XG5cdC8qKlxuXHQgKiBTZXQgdG8gYHRydWVgIGZvciBjaGVja2JveCB0byBiZSByZW5kZXJlZCB3aXRob3V0IGFueSBjbGFzc2VzIG9uIHRoZSBob3N0IGVsZW1lbnQuXG5cdCAqL1xuXHRASW5wdXQoKSBpbmxpbmUgPSBmYWxzZTtcblx0LyoqXG5cdCAqIFNldCB0byBgdHJ1ZWAgZm9yIGEgZGlzYWJsZWQgY2hlY2tib3guXG5cdCAqL1xuXHRASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuXHQvKipcblx0ICogU2V0IHRvIGB0cnVlYCBmb3IgYSBsb2FkaW5nIGNoZWNrYm94LlxuXHQgKi9cblx0QElucHV0KCkgc2tlbGV0b24gPSBmYWxzZTtcblx0LyoqXG5cdCAqIFNldCB0byBgdHJ1ZWAgdG8gaGlkZSB0aGUgY2hlY2tib3ggbGFiZWxzLlxuXHQgKi9cblx0QElucHV0KCkgaGlkZUxhYmVsID0gZmFsc2U7XG5cdC8qKlxuXHQgKiBTZXRzIHRoZSBuYW1lIGF0dHJpYnV0ZSBvbiB0aGUgYGlucHV0YCBlbGVtZW50LlxuXHQgKi9cblx0QElucHV0KCkgbmFtZTogc3RyaW5nO1xuXHQvKipcblx0ICogVGhlIHVuaXF1ZSBpZCBmb3IgdGhlIGNoZWNrYm94IGNvbXBvbmVudC5cblx0ICovXG5cdEBJbnB1dCgpIGlkID0gYGNoZWNrYm94LSR7Q2hlY2tib3guY2hlY2tib3hDb3VudH1gO1xuXHQvKipcblx0ICogUmVmbGVjdHMgdGhlIHJlcXVpcmVkIGF0dHJpYnV0ZSBvZiB0aGUgYGlucHV0YCBlbGVtZW50LlxuXHQgKi9cblx0QElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW47XG5cdC8qKlxuXHQgKiBTZXRzIHRoZSB2YWx1ZSBhdHRyaWJ1dGUgb24gdGhlIGBpbnB1dGAgZWxlbWVudC5cblx0ICovXG5cdEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XG5cdC8qKlxuXHQgKiBVc2VkIHRvIHNldCB0aGUgYGFyaWEtbGFiZWxgIGF0dHJpYnV0ZSBvbiB0aGUgaW5wdXQgZWxlbWVudC5cblx0ICovXG5cdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcblx0QElucHV0KFwiYXJpYS1sYWJlbFwiKSBhcmlhTGFiZWwgPSBcIlwiO1xuXHQvKipcblx0ICogVXNlZCB0byBzZXQgdGhlIGBhcmlhLWxhYmVsbGVkYnlgIGF0dHJpYnV0ZSBvbiB0aGUgaW5wdXQgZWxlbWVudC5cblx0ICovXG5cdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcblx0QElucHV0KFwiYXJpYS1sYWJlbGxlZGJ5XCIpIGFyaWFMYWJlbGxlZGJ5OiBzdHJpbmc7XG5cdC8qKlxuXHQgKiBSZWZsZWN0cyB3aGV0aGVyIHRoZSBjaGVja2JveCBzdGF0ZSBpcyBpbmRldGVybWluYXRlLlxuXHQgKi9cblx0Z2V0IGluZGV0ZXJtaW5hdGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2luZGV0ZXJtaW5hdGU7XG5cdH1cblxuXHQvKipcblx0ICogU2V0IHRoZSBjaGVja2JveCdzIGluZGV0ZXJtaW5hdGUgc3RhdGUgdG8gbWF0Y2ggdGhlIHBhcmFtZXRlciBhbmQgdHJhbnNpdGlvbiB0aGUgdmlldyB0byByZWZsZWN0IHRoZSBjaGFuZ2UuXG5cdCAqL1xuXHRASW5wdXQoKSBzZXQgaW5kZXRlcm1pbmF0ZShpbmRldGVybWluYXRlOiBib29sZWFuKSB7XG5cdFx0bGV0IGNoYW5nZWQgPSB0aGlzLl9pbmRldGVybWluYXRlICE9PSBpbmRldGVybWluYXRlO1xuXHRcdHRoaXMuX2luZGV0ZXJtaW5hdGUgPSBpbmRldGVybWluYXRlO1xuXG5cdFx0aWYgKGNoYW5nZWQpIHtcblx0XHRcdHRoaXMudHJhbnNpdGlvbkNoZWNrYm94U3RhdGUoQ2hlY2tib3hTdGF0ZS5JbmRldGVybWluYXRlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy50cmFuc2l0aW9uQ2hlY2tib3hTdGF0ZSh0aGlzLmNoZWNrZWQgPyBDaGVja2JveFN0YXRlLkNoZWNrZWQgOiBDaGVja2JveFN0YXRlLlVuY2hlY2tlZCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5pbmRldGVybWluYXRlQ2hhbmdlLmVtaXQodGhpcy5faW5kZXRlcm1pbmF0ZSk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB2YWx1ZSBgdHJ1ZWAgaWYgc3RhdGUgaXMgc2VsZWN0ZWQgZm9yIHRoZSBjaGVja2JveC5cblx0ICovXG5cdGdldCBjaGVja2VkKCkge1xuXHRcdHJldHVybiB0aGlzLl9jaGVja2VkO1xuXHR9XG5cblx0LyoqXG5cdCAqIFVwZGF0aW5nIHRoZSBzdGF0ZSBvZiBhIGNoZWNrYm94IHRvIG1hdGNoIHRoZSBzdGF0ZSBvZiB0aGUgcGFyYW1ldGVyIHBhc3NlZCBpbi5cblx0ICovXG5cdEBJbnB1dCgpIHNldCBjaGVja2VkIChjaGVja2VkOiBib29sZWFuKSB7XG5cdFx0aWYgKGNoZWNrZWQgIT09IHRoaXMuY2hlY2tlZCkge1xuXHRcdFx0aWYgKHRoaXMuX2luZGV0ZXJtaW5hdGUpIHtcblx0XHRcdFx0UHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5faW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuXHRcdFx0XHRcdHRoaXMuaW5kZXRlcm1pbmF0ZUNoYW5nZS5lbWl0KHRoaXMuX2luZGV0ZXJtaW5hdGUpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHRoaXMuX2NoZWNrZWQgPSBjaGVja2VkO1xuXHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcblx0XHR9XG5cdH1cblxuXHRASG9zdEJpbmRpbmcoXCJjbGFzcy5ieC0tY2hlY2tib3gtd3JhcHBlclwiKSBnZXQgY2hlY2tib3hXcmFwcGVyQ2xhc3MoKSB7XG5cdFx0cmV0dXJuICF0aGlzLmlubGluZTtcblx0fVxuXHRASG9zdEJpbmRpbmcoXCJjbGFzcy5ieC0tZm9ybS1pdGVtXCIpIGdldCBmb3JtSXRlbUNsYXNzKCkge1xuXHRcdHJldHVybiAhdGhpcy5pbmxpbmU7XG5cdH1cblxuXHQvKipcblx0ICogRW1pdHMgZXZlbnQgbm90aWZ5aW5nIG90aGVyIGNsYXNzZXMgd2hlbiBhIGNoYW5nZSBpbiBzdGF0ZSBvY2N1cnMgb24gYSBjaGVja2JveCBhZnRlciBhXG5cdCAqIGNsaWNrLlxuXHQgKi9cblx0QE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hlY2tib3hDaGFuZ2U+KCk7XG5cdC8qKlxuXHQgKiBFbWl0cyBldmVudCBub3RpZnlpbmcgb3RoZXIgY2xhc3NlcyB3aGVuIGEgY2hhbmdlIGluIHN0YXRlIG9jY3VycyBzcGVjaWZpY2FsbHlcblx0ICogb24gYW4gaW5kZXRlcm1pbmF0ZSBjaGVja2JveC5cblx0ICovXG5cdEBPdXRwdXQoKSBpbmRldGVybWluYXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG5cdC8qKlxuXHQgKiBTZXQgdG8gYHRydWVgIGlmIHRoZSBpbnB1dCBjaGVja2JveCBpcyBzZWxlY3RlZCAob3IgY2hlY2tlZCkuXG5cdCAqL1xuXHRfY2hlY2tlZCA9IGZhbHNlO1xuXHQvKipcblx0ICogU2V0IHRvIGB0cnVlYCBpZiB0aGUgaW5wdXQgY2hlY2tib3ggaXMgaW4gc3RhdGUgaW5kZXRlcm1pbmF0ZS5cblx0ICovXG5cdF9pbmRldGVybWluYXRlID0gZmFsc2U7XG5cblx0Y3VycmVudENoZWNrYm94U3RhdGU6IENoZWNrYm94U3RhdGUgPSBDaGVja2JveFN0YXRlLkluaXQ7XG5cblx0LyoqXG5cdCAqIE1haW50YWlucyBhIHJlZmVyZW5jZSB0byB0aGUgdmlldyBET00gZWxlbWVudCBvZiB0aGUgYENoZWNrYm94YC5cblx0ICovXG5cdEBWaWV3Q2hpbGQoXCJpbnB1dENoZWNrYm94XCIpIGlucHV0Q2hlY2tib3g6IEVsZW1lbnRSZWY7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgYENoZWNrYm94YC5cblx0ICovXG5cdGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcblx0XHRDaGVja2JveC5jaGVja2JveENvdW50Kys7XG5cdH1cblxuXHQvKipcblx0ICogVG9nZ2xlIHRoZSBzZWxlY3RlZCBzdGF0ZSBvZiB0aGUgY2hlY2tib3guXG5cdCAqL1xuXHRwdWJsaWMgdG9nZ2xlKCkge1xuXHRcdHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XG5cdH1cblxuXHQvLyB0aGlzIGlzIHRoZSBpbml0aWFsIHZhbHVlIHNldCB0byB0aGUgY29tcG9uZW50XG5cdHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLmNoZWNrZWQgPSAhIXZhbHVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldHMgYSBtZXRob2QgaW4gb3JkZXIgdG8gcHJvcGFnYXRlIGNoYW5nZXMgYmFjayB0byB0aGUgZm9ybS5cblx0ICovXG5cdHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcblx0XHR0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVycyBhIGNhbGxiYWNrIHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSBjb250cm9sIGhhcyBiZWVuIHRvdWNoZWQuXG5cdCAqIEBwYXJhbSBmbiBDYWxsYmFjayB0byBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgY2hlY2tib3ggaXMgdG91Y2hlZC5cblx0ICovXG5cdHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG5cdFx0dGhpcy5vblRvdWNoZWQgPSBmbjtcblx0fVxuXG5cdC8qKlxuXHQgKiBFeGVjdXRlcyBvbiB0aGUgZXZlbnQgb2YgYSBjaGFuZ2Ugd2l0aGluIGBDaGVja2JveGAgdG8gYmxvY2sgcHJvcGFnYXRpb24uXG5cdCAqL1xuXHRvbkNoYW5nZShldmVudCkge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgY2xpY2sgZXZlbnRzIG9uIHRoZSBgQ2hlY2tib3hgIGFuZCBlbWl0cyBjaGFuZ2VzIHRvIG90aGVyIGNsYXNzZXMuXG5cdCAqL1xuXHRvbkNsaWNrKGV2ZW50KSB7XG5cdFx0aWYgKCF0aGlzLmRpc2FibGVkKSB7XG5cdFx0XHR0aGlzLnRvZ2dsZSgpO1xuXHRcdFx0dGhpcy50cmFuc2l0aW9uQ2hlY2tib3hTdGF0ZSh0aGlzLl9jaGVja2VkID8gQ2hlY2tib3hTdGF0ZS5DaGVja2VkIDogQ2hlY2tib3hTdGF0ZS5VbmNoZWNrZWQpO1xuXHRcdFx0dGhpcy5lbWl0Q2hhbmdlRXZlbnQoKTtcblx0XHR9XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBDYWxsZWQgd2hlbiBjaGVja2JveCBpcyBibHVycmVkLiBOZWVkZWQgdG8gcHJvcGVybHkgaW1wbGVtZW50IGBDb250cm9sVmFsdWVBY2Nlc3NvcmAuXG5cdCAqL1xuXHRvblRvdWNoZWQ6ICgpID0+IGFueSA9ICgpID0+IHt9O1xuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIGNoYW5nZXMgYmV0d2VlbiBjaGVja2JveCBzdGF0ZXMuXG5cdCAqL1xuXHR0cmFuc2l0aW9uQ2hlY2tib3hTdGF0ZShuZXdTdGF0ZTogQ2hlY2tib3hTdGF0ZSkge1xuXHRcdGxldCBvbGRTdGF0ZSA9IHRoaXMuY3VycmVudENoZWNrYm94U3RhdGU7XG5cblx0XHQvLyBJbmRldGVybWluYXRlIGhhcyB0byBiZSBzZXQgYWx3YXlzIGlmIGl0J3MgdHJhbnNpdGlvbmVkIHRvXG5cdFx0Ly8gY2hlY2tlZCBoYXMgdG8gYmUgc2V0IGJlZm9yZSBpbmRldGVybWluYXRlIG9yIGl0IG92ZXJyaWRlc1xuXHRcdC8vIGluZGV0ZXJtaW5hdGUncyBkYXNoXG5cdFx0aWYgKG5ld1N0YXRlID09PSBDaGVja2JveFN0YXRlLkluZGV0ZXJtaW5hdGUpIHtcblx0XHRcdHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xuXHRcdFx0dGhpcy5pbnB1dENoZWNrYm94Lm5hdGl2ZUVsZW1lbnQuaW5kZXRlcm1pbmF0ZSA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKG9sZFN0YXRlID09PSBuZXdTdGF0ZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuY3VycmVudENoZWNrYm94U3RhdGUgPSBuZXdTdGF0ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGluc3RhbmNlIG9mIGBDaGVja2JveENoYW5nZWAgdXNlZCB0byBwcm9wYWdhdGUgdGhlIGNoYW5nZSBldmVudC5cblx0ICovXG5cdGVtaXRDaGFuZ2VFdmVudCgpIHtcblx0XHRsZXQgZXZlbnQgPSBuZXcgQ2hlY2tib3hDaGFuZ2UoKTtcblx0XHRldmVudC5zb3VyY2UgPSB0aGlzO1xuXHRcdGV2ZW50LmNoZWNrZWQgPSB0aGlzLmNoZWNrZWQ7XG5cblx0XHR0aGlzLnByb3BhZ2F0ZUNoYW5nZSh0aGlzLmNoZWNrZWQpO1xuXHRcdHRoaXMuY2hhbmdlLmVtaXQoZXZlbnQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFVwZGF0ZXMgdGhlIGNoZWNrYm94IGlmIGl0IGlzIGluIHRoZSBpbmRldGVybWluYXRlIHN0YXRlLlxuXHQgKi9cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdGlmICh0aGlzLmluZGV0ZXJtaW5hdGUpIHtcblx0XHRcdHRoaXMuaW5wdXRDaGVja2JveC5uYXRpdmVFbGVtZW50LmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xuXHRcdFx0dGhpcy5jaGVja2VkID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIE1ldGhvZCBzZXQgaW4gYHJlZ2lzdGVyT25DaGFuZ2VgIHRvIHByb3BhZ2F0ZSBjaGFuZ2VzIGJhY2sgdG8gdGhlIGZvcm0uXG5cdCAqL1xuXHRwcm9wYWdhdGVDaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcbn1cbiJdfQ==