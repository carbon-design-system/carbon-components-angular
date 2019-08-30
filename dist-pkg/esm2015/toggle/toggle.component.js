/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Checkbox } from "../checkbox/checkbox.component";
import { ChangeDetectorRef, Component, Input, Output, EventEmitter, TemplateRef } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { I18n } from "../i18n/i18n.module";
/** @enum {number} */
const ToggleState = {
    Init: 0,
    Indeterminate: 1,
    Checked: 2,
    Unchecked: 3,
};
export { ToggleState };
ToggleState[ToggleState.Init] = 'Init';
ToggleState[ToggleState.Indeterminate] = 'Indeterminate';
ToggleState[ToggleState.Checked] = 'Checked';
ToggleState[ToggleState.Unchecked] = 'Unchecked';
/**
 * Used to emit changes performed on toggle components.
 */
export class ToggleChange {
}
function ToggleChange_tsickle_Closure_declarations() {
    /**
     * Contains the `Toggle` that has been changed.
     * @type {?}
     */
    ToggleChange.prototype.source;
    /**
     * The state of the `Toggle` encompassed in the `ToggleChange` class.
     * @type {?}
     */
    ToggleChange.prototype.checked;
}
/**
 * [See demo](../../?path=/story/toggle--basic)
 *
 * ```html
 * <ibm-toggle [(ngModel)]="toggleState">Toggle</ibm-toggle>
 * ```
 *
 * <example-url>../../iframe.html?id=toggle--basic</example-url>
 */
export class Toggle extends Checkbox {
    /**
     * Creates an instance of Toggle.
     * @param {?} changeDetectorRef
     * @param {?} i18n
     */
    constructor(changeDetectorRef, i18n) {
        super(changeDetectorRef);
        this.changeDetectorRef = changeDetectorRef;
        this.i18n = i18n;
        /**
         * Size of the toggle component.
         */
        this.size = "md";
        /**
         * Set to `true` for a loading toggle.
         */
        this.skeleton = false;
        /**
         * The unique id allocated to the `Toggle`.
         */
        this.id = "toggle-" + Toggle.toggleCount;
        /**
         * Emits event notifying other classes when a change in state occurs on a toggle after a
         * click.
         */
        this.change = new EventEmitter();
        this._offValues = this.i18n.getOverridable("TOGGLE.OFF");
        this._onValues = this.i18n.getOverridable("TOGGLE.ON");
        Toggle.toggleCount++;
    }
    /**
     * Text that is set on the left side of the toggle.
     * @param {?} value
     * @return {?}
     */
    set offText(value) {
        this._offValues.override(value);
    }
    /**
     * @return {?}
     */
    get offText() {
        return this._offValues.value;
    }
    /**
     * Text that is set on the right side of the toggle.
     * @param {?} value
     * @return {?}
     */
    set onText(value) {
        this._onValues.override(value);
    }
    /**
     * @return {?}
     */
    get onText() {
        return this._onValues.value;
    }
    /**
     * @return {?}
     */
    getOffText() {
        return this._offValues.subject;
    }
    /**
     * @return {?}
     */
    getOnText() {
        return this._onValues.subject;
    }
    /**
     * Creates instance of `ToggleChange` used to propagate the change event.
     * @return {?}
     */
    emitChangeEvent() {
        /** @type {?} */
        let event = new ToggleChange();
        event.source = this;
        event.checked = this.checked;
        this.propagateChange(this.checked);
        this.change.emit(event);
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
 * Variable used for creating unique ids for toggle components.
 */
Toggle.toggleCount = 0;
Toggle.decorators = [
    { type: Component, args: [{
                selector: "ibm-toggle",
                template: `
		<label *ngIf="label" [id]="ariaLabelledby" class="bx--label">
			<ng-container *ngIf="!isTemplate(label)">{{label}}</ng-container>
			<ng-template *ngIf="isTemplate(label)" [ngTemplateOutlet]="label"></ng-template>
		</label>
		<input
			class="bx--toggle"
			type="checkbox"
			[ngClass]="{
				'bx--toggle--small': size === 'sm',
				'bx--skeleton': skeleton
			}"
			[id]="id"
			[value]="value"
			[name]="name"
			[required]="required"
			[checked]="checked"
			[disabled]="disabled"
			[attr.aria-labelledby]="ariaLabelledby"
			[attr.aria-checked]="checked"
			(change)="onChange($event)"
			(click)="onClick($event)">
		<label
			class="bx--toggle__label"
			[for]="id"
			[ngClass]="{
				'bx--skeleton': skeleton
			}">
			<span class="bx--toggle__text--left">{{(!skeleton ? getOffText() : null) | async }}</span>
			<span class="bx--toggle__appearance">
				<svg *ngIf="size === 'sm'" class="bx--toggle__check" width="6px" height="5px" viewBox="0 0 6 5">
					<path d="M2.2 2.7L5 0 6 1 2.2 5 0 2.7 1 1.5z"/>
				</svg>
			</span>
			<span class="bx--toggle__text--right">{{(!skeleton ? getOnText() : null) | async}}</span>
		</label>
	`,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: Toggle,
                        multi: true
                    }
                ]
            }] }
];
/** @nocollapse */
Toggle.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: I18n }
];
Toggle.propDecorators = {
    offText: [{ type: Input }],
    onText: [{ type: Input }],
    label: [{ type: Input }],
    size: [{ type: Input }],
    skeleton: [{ type: Input }],
    change: [{ type: Output }]
};
function Toggle_tsickle_Closure_declarations() {
    /**
     * Variable used for creating unique ids for toggle components.
     * @type {?}
     */
    Toggle.toggleCount;
    /**
     * Text that is set as the label of the toggle.
     * @type {?}
     */
    Toggle.prototype.label;
    /**
     * Size of the toggle component.
     * @type {?}
     */
    Toggle.prototype.size;
    /**
     * Set to `true` for a loading toggle.
     * @type {?}
     */
    Toggle.prototype.skeleton;
    /**
     * The unique id allocated to the `Toggle`.
     * @type {?}
     */
    Toggle.prototype.id;
    /**
     * Emits event notifying other classes when a change in state occurs on a toggle after a
     * click.
     * @type {?}
     */
    Toggle.prototype.change;
    /** @type {?} */
    Toggle.prototype._offValues;
    /** @type {?} */
    Toggle.prototype._onValues;
    /** @type {?} */
    Toggle.prototype.changeDetectorRef;
    /** @type {?} */
    Toggle.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ0b2dnbGUvdG9nZ2xlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzFELE9BQU8sRUFDTixpQkFBaUIsRUFDakIsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFdBQVcsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsSUFBSSxFQUFlLE1BQU0scUJBQXFCLENBQUM7OztJQU92RCxPQUFJO0lBQ0osZ0JBQWE7SUFDYixVQUFPO0lBQ1AsWUFBUzs7O3dCQUhULElBQUk7d0JBQ0osYUFBYTt3QkFDYixPQUFPO3dCQUNQLFNBQVM7Ozs7QUFNVixNQUFNO0NBU0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwREQsTUFBTSxhQUFjLFNBQVEsUUFBUTs7Ozs7O0lBMERuQyxZQUFzQixpQkFBb0MsRUFBWSxJQUFVO1FBQy9FLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBREosc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUFZLFNBQUksR0FBSixJQUFJLENBQU07Ozs7b0JBdEJuRCxJQUFJOzs7O3dCQUliLEtBQUs7Ozs7a0JBS3BCLFNBQVMsR0FBRyxNQUFNLENBQUMsV0FBVzs7Ozs7c0JBTWhCLElBQUksWUFBWSxFQUFnQjswQkFFNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDO3lCQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUM7UUFNMUQsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3JCOzs7Ozs7SUFwREQsSUFDSSxPQUFPLENBQUMsS0FBa0M7UUFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDaEM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDVixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO0tBQzdCOzs7Ozs7SUFLRCxJQUNJLE1BQU0sQ0FBQyxLQUFrQztRQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMvQjs7OztJQUVELElBQUksTUFBTTtRQUNULE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7S0FDNUI7Ozs7SUFtQ0QsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7S0FDL0I7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztLQUM5Qjs7Ozs7SUFLRCxlQUFlOztRQUNkLElBQUksS0FBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0IsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDcEIsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRTdCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3hCOzs7OztJQUVNLFVBQVUsQ0FBQyxLQUFLO1FBQ3RCLE9BQU8sS0FBSyxZQUFZLFdBQVcsQ0FBQzs7Ozs7O3FCQWhGaEIsQ0FBQzs7WUFuRHRCLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFvQ1Q7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWO3dCQUNDLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxNQUFNO3dCQUNuQixLQUFLLEVBQUUsSUFBSTtxQkFDWDtpQkFDRDthQUNEOzs7O1lBM0ZBLGlCQUFpQjtZQVNULElBQUk7OztzQkE0RlgsS0FBSztxQkFZTCxLQUFLO29CQVdMLEtBQUs7bUJBSUwsS0FBSzt1QkFJTCxLQUFLO3FCQVdMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGVja2JveCB9IGZyb20gXCIuLi9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnRcIjtcbmltcG9ydCB7XG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRDb21wb25lbnQsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdEV2ZW50RW1pdHRlcixcblx0VGVtcGxhdGVSZWZcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5cbmltcG9ydCB7IEkxOG4sIE92ZXJyaWRhYmxlIH0gZnJvbSBcIi4uL2kxOG4vaTE4bi5tb2R1bGVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuXG4vKipcbiAqIERlZmluZXMgdGhlIHNldCBvZiBzdGF0ZXMgZm9yIGEgdG9nZ2xlIGNvbXBvbmVudC5cbiAqL1xuZXhwb3J0IGVudW0gVG9nZ2xlU3RhdGUge1xuXHRJbml0LFxuXHRJbmRldGVybWluYXRlLFxuXHRDaGVja2VkLFxuXHRVbmNoZWNrZWRcbn1cblxuLyoqXG4gKiBVc2VkIHRvIGVtaXQgY2hhbmdlcyBwZXJmb3JtZWQgb24gdG9nZ2xlIGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUb2dnbGVDaGFuZ2Uge1xuXHQvKipcblx0ICogQ29udGFpbnMgdGhlIGBUb2dnbGVgIHRoYXQgaGFzIGJlZW4gY2hhbmdlZC5cblx0ICovXG5cdHNvdXJjZTogVG9nZ2xlO1xuXHQvKipcblx0ICogVGhlIHN0YXRlIG9mIHRoZSBgVG9nZ2xlYCBlbmNvbXBhc3NlZCBpbiB0aGUgYFRvZ2dsZUNoYW5nZWAgY2xhc3MuXG5cdCAqL1xuXHRjaGVja2VkOiBib29sZWFuO1xufVxuXG4vKipcbiAqIFtTZWUgZGVtb10oLi4vLi4vP3BhdGg9L3N0b3J5L3RvZ2dsZS0tYmFzaWMpXG4gKlxuICogYGBgaHRtbFxuICogPGlibS10b2dnbGUgWyhuZ01vZGVsKV09XCJ0b2dnbGVTdGF0ZVwiPlRvZ2dsZTwvaWJtLXRvZ2dsZT5cbiAqIGBgYFxuICpcbiAqIDxleGFtcGxlLXVybD4uLi8uLi9pZnJhbWUuaHRtbD9pZD10b2dnbGUtLWJhc2ljPC9leGFtcGxlLXVybD5cbiAqL1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImlibS10b2dnbGVcIixcblx0dGVtcGxhdGU6IGBcblx0XHQ8bGFiZWwgKm5nSWY9XCJsYWJlbFwiIFtpZF09XCJhcmlhTGFiZWxsZWRieVwiIGNsYXNzPVwiYngtLWxhYmVsXCI+XG5cdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzVGVtcGxhdGUobGFiZWwpXCI+e3tsYWJlbH19PC9uZy1jb250YWluZXI+XG5cdFx0XHQ8bmctdGVtcGxhdGUgKm5nSWY9XCJpc1RlbXBsYXRlKGxhYmVsKVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImxhYmVsXCI+PC9uZy10ZW1wbGF0ZT5cblx0XHQ8L2xhYmVsPlxuXHRcdDxpbnB1dFxuXHRcdFx0Y2xhc3M9XCJieC0tdG9nZ2xlXCJcblx0XHRcdHR5cGU9XCJjaGVja2JveFwiXG5cdFx0XHRbbmdDbGFzc109XCJ7XG5cdFx0XHRcdCdieC0tdG9nZ2xlLS1zbWFsbCc6IHNpemUgPT09ICdzbScsXG5cdFx0XHRcdCdieC0tc2tlbGV0b24nOiBza2VsZXRvblxuXHRcdFx0fVwiXG5cdFx0XHRbaWRdPVwiaWRcIlxuXHRcdFx0W3ZhbHVlXT1cInZhbHVlXCJcblx0XHRcdFtuYW1lXT1cIm5hbWVcIlxuXHRcdFx0W3JlcXVpcmVkXT1cInJlcXVpcmVkXCJcblx0XHRcdFtjaGVja2VkXT1cImNoZWNrZWRcIlxuXHRcdFx0W2Rpc2FibGVkXT1cImRpc2FibGVkXCJcblx0XHRcdFthdHRyLmFyaWEtbGFiZWxsZWRieV09XCJhcmlhTGFiZWxsZWRieVwiXG5cdFx0XHRbYXR0ci5hcmlhLWNoZWNrZWRdPVwiY2hlY2tlZFwiXG5cdFx0XHQoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIlxuXHRcdFx0KGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiPlxuXHRcdDxsYWJlbFxuXHRcdFx0Y2xhc3M9XCJieC0tdG9nZ2xlX19sYWJlbFwiXG5cdFx0XHRbZm9yXT1cImlkXCJcblx0XHRcdFtuZ0NsYXNzXT1cIntcblx0XHRcdFx0J2J4LS1za2VsZXRvbic6IHNrZWxldG9uXG5cdFx0XHR9XCI+XG5cdFx0XHQ8c3BhbiBjbGFzcz1cImJ4LS10b2dnbGVfX3RleHQtLWxlZnRcIj57eyghc2tlbGV0b24gPyBnZXRPZmZUZXh0KCkgOiBudWxsKSB8IGFzeW5jIH19PC9zcGFuPlxuXHRcdFx0PHNwYW4gY2xhc3M9XCJieC0tdG9nZ2xlX19hcHBlYXJhbmNlXCI+XG5cdFx0XHRcdDxzdmcgKm5nSWY9XCJzaXplID09PSAnc20nXCIgY2xhc3M9XCJieC0tdG9nZ2xlX19jaGVja1wiIHdpZHRoPVwiNnB4XCIgaGVpZ2h0PVwiNXB4XCIgdmlld0JveD1cIjAgMCA2IDVcIj5cblx0XHRcdFx0XHQ8cGF0aCBkPVwiTTIuMiAyLjdMNSAwIDYgMSAyLjIgNSAwIDIuNyAxIDEuNXpcIi8+XG5cdFx0XHRcdDwvc3ZnPlxuXHRcdFx0PC9zcGFuPlxuXHRcdFx0PHNwYW4gY2xhc3M9XCJieC0tdG9nZ2xlX190ZXh0LS1yaWdodFwiPnt7KCFza2VsZXRvbiA/IGdldE9uVGV4dCgpIDogbnVsbCkgfCBhc3luY319PC9zcGFuPlxuXHRcdDwvbGFiZWw+XG5cdGAsXG5cdHByb3ZpZGVyczogW1xuXHRcdHtcblx0XHRcdHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuXHRcdFx0dXNlRXhpc3Rpbmc6IFRvZ2dsZSxcblx0XHRcdG11bHRpOiB0cnVlXG5cdFx0fVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFRvZ2dsZSBleHRlbmRzIENoZWNrYm94IHtcblx0LyoqXG5cdCAqIFZhcmlhYmxlIHVzZWQgZm9yIGNyZWF0aW5nIHVuaXF1ZSBpZHMgZm9yIHRvZ2dsZSBjb21wb25lbnRzLlxuXHQgKi9cblx0c3RhdGljIHRvZ2dsZUNvdW50ID0gMDtcblxuXHQvKipcblx0ICogVGV4dCB0aGF0IGlzIHNldCBvbiB0aGUgbGVmdCBzaWRlIG9mIHRoZSB0b2dnbGUuXG5cdCAqL1xuXHRASW5wdXQoKVxuXHRzZXQgb2ZmVGV4dCh2YWx1ZTogc3RyaW5nIHwgT2JzZXJ2YWJsZTxzdHJpbmc+KSB7XG5cdFx0dGhpcy5fb2ZmVmFsdWVzLm92ZXJyaWRlKHZhbHVlKTtcblx0fVxuXG5cdGdldCBvZmZUZXh0KCkge1xuXHRcdHJldHVybiB0aGlzLl9vZmZWYWx1ZXMudmFsdWU7XG5cdH1cblxuXHQvKipcblx0ICogVGV4dCB0aGF0IGlzIHNldCBvbiB0aGUgcmlnaHQgc2lkZSBvZiB0aGUgdG9nZ2xlLlxuXHQgKi9cblx0QElucHV0KClcblx0c2V0IG9uVGV4dCh2YWx1ZTogc3RyaW5nIHwgT2JzZXJ2YWJsZTxzdHJpbmc+KSB7XG5cdFx0dGhpcy5fb25WYWx1ZXMub3ZlcnJpZGUodmFsdWUpO1xuXHR9XG5cblx0Z2V0IG9uVGV4dCgpIHtcblx0XHRyZXR1cm4gdGhpcy5fb25WYWx1ZXMudmFsdWU7XG5cdH1cblx0LyoqXG5cdCAqIFRleHQgdGhhdCBpcyBzZXQgYXMgdGhlIGxhYmVsIG9mIHRoZSB0b2dnbGUuXG5cdCAqL1xuXHRASW5wdXQoKSBsYWJlbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pjtcblx0LyoqXG5cdCAqIFNpemUgb2YgdGhlIHRvZ2dsZSBjb21wb25lbnQuXG5cdCAqL1xuXHRASW5wdXQoKSBzaXplOiBcInNtXCIgfCBcIm1kXCIgPSBcIm1kXCI7XG5cdC8qKlxuXHQgKiBTZXQgdG8gYHRydWVgIGZvciBhIGxvYWRpbmcgdG9nZ2xlLlxuXHQgKi9cblx0QElucHV0KCkgc2tlbGV0b24gPSBmYWxzZTtcblxuXHQvKipcblx0ICogVGhlIHVuaXF1ZSBpZCBhbGxvY2F0ZWQgdG8gdGhlIGBUb2dnbGVgLlxuXHQgKi9cblx0aWQgPSBcInRvZ2dsZS1cIiArIFRvZ2dsZS50b2dnbGVDb3VudDtcblxuXHQvKipcblx0ICogRW1pdHMgZXZlbnQgbm90aWZ5aW5nIG90aGVyIGNsYXNzZXMgd2hlbiBhIGNoYW5nZSBpbiBzdGF0ZSBvY2N1cnMgb24gYSB0b2dnbGUgYWZ0ZXIgYVxuXHQgKiBjbGljay5cblx0ICovXG5cdEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFRvZ2dsZUNoYW5nZT4oKTtcblxuXHRwcm90ZWN0ZWQgX29mZlZhbHVlcyA9IHRoaXMuaTE4bi5nZXRPdmVycmlkYWJsZShcIlRPR0dMRS5PRkZcIik7XG5cdHByb3RlY3RlZCBfb25WYWx1ZXMgPSB0aGlzLmkxOG4uZ2V0T3ZlcnJpZGFibGUoXCJUT0dHTEUuT05cIik7XG5cdC8qKlxuXHQgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFRvZ2dsZS5cblx0ICovXG5cdGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByb3RlY3RlZCBpMThuOiBJMThuKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYpO1xuXHRcdFRvZ2dsZS50b2dnbGVDb3VudCsrO1xuXHR9XG5cblx0Z2V0T2ZmVGV4dCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuXHRcdHJldHVybiB0aGlzLl9vZmZWYWx1ZXMuc3ViamVjdDtcblx0fVxuXG5cdGdldE9uVGV4dCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuXHRcdHJldHVybiB0aGlzLl9vblZhbHVlcy5zdWJqZWN0O1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgaW5zdGFuY2Ugb2YgYFRvZ2dsZUNoYW5nZWAgdXNlZCB0byBwcm9wYWdhdGUgdGhlIGNoYW5nZSBldmVudC5cblx0ICovXG5cdGVtaXRDaGFuZ2VFdmVudCgpIHtcblx0XHRsZXQgZXZlbnQgPSBuZXcgVG9nZ2xlQ2hhbmdlKCk7XG5cdFx0ZXZlbnQuc291cmNlID0gdGhpcztcblx0XHRldmVudC5jaGVja2VkID0gdGhpcy5jaGVja2VkO1xuXG5cdFx0dGhpcy5wcm9wYWdhdGVDaGFuZ2UodGhpcy5jaGVja2VkKTtcblx0XHR0aGlzLmNoYW5nZS5lbWl0KGV2ZW50KTtcblx0fVxuXG5cdHB1YmxpYyBpc1RlbXBsYXRlKHZhbHVlKSB7XG5cdFx0cmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XG5cdH1cbn1cbiJdfQ==