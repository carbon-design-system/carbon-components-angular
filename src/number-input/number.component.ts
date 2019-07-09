import {
	Component,
	Input,
	HostBinding,
	EventEmitter,
	Output,
	TemplateRef
} from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

/**
 * Used to emit changes performed on number input components.
 * @export
 * @class NumberChange
 */
export class NumberChange {
	/**
	 * Contains the `Number` that has been changed.
	 * @type {Number}
	 * @memberof NumberChange
	 */
	source: Number;
	/**
	 * The value of the `Number` field encompassed in the `NumberChange` class.
	 * @type {number}
	 * @memberof NumberChange
	 */
	value: number;
}

/**
 * [See demo](../../?path=/story/number--basic)
 *
 * <example-url>../../iframe.html?id=number--basic</example-url>
 *
 * @export
 * @class Number
 * @implements {ControlValueAccessor}
 */
@Component({
	selector: "ibm-number",
	template: `
		<label *ngIf="skeleton && label" class="bx--label bx--skeleton"></label>
		<label *ngIf="!skeleton && label" [for]="id" class="bx--label">
			<ng-container *ngIf="!isTemplate(label)">{{label}}</ng-container>
			<ng-template *ngIf="isTemplate(label)" [ngTemplateOutlet]="label"></ng-template>
		</label>
		<div *ngIf="helperText" class="bx--form__helper-text">
			<ng-container *ngIf="!isTemplate(helperText)">{{helperText}}</ng-container>
			<ng-template *ngIf="isTemplate(helperText)" [ngTemplateOutlet]="helperText"></ng-template>
		</div>
		<div
			data-numberinput
			[attr.data-invalid]="(invalid ? true : null)"
			class="bx--number"
			[ngClass]="{
				'bx--number--light': theme === 'light',
				'bx--number--nolabel': !label,
				'bx--number--helpertext': helperText,
				'bx--skeleton' : skeleton
			}">
			<div class="bx--number__input-wrapper">
				<input
					type="number"
					[id]="id"
					[value]="value"
					[attr.min]="min"
					[attr.max]="max"
					[disabled]="disabled"
					[required]="required"
					(input)="onNumberInputChange($event)"/>
				<ibm-icon-warning-filled16
					*ngIf="!skeleton && invalid"
					class="bx--number__invalid"
					style="display: inherit;">
				</ibm-icon-warning-filled16>
				<div *ngIf="!skeleton" class="bx--number__controls">
					<button
						class="bx--number__control-btn up-icon"
						type="button"
						aria-live="polite"
						aria-atomic="true"
						(click)="onIncrement()">
						<ibm-icon-caret-up16></ibm-icon-caret-up16>
					</button>
					<button
						class="bx--number__control-btn down-icon"
						type="button"
						aria-live="polite"
						aria-atomic="true"
						(click)="onDecrement()">
						<ibm-icon-caret-down16></ibm-icon-caret-down16>
					</button>
				</div>
			</div>
			<div *ngIf="invalid" class="bx--form-requirement">
				<ng-container *ngIf="!isTemplate(invalidText)">{{invalidText}}</ng-container>
				<ng-template *ngIf="isTemplate(invalidText)" [ngTemplateOutlet]="invalidText"></ng-template>
			</div>
		</div>
	`,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: Number,
			multi: true
		}
	]
})
export class Number implements ControlValueAccessor {
	/**
	 * Variable used for creating unique ids for number input components.
	 */
	static numberCount = 0;

	@HostBinding("class.bx--form-item") containerClass = true;

	/**
	 * `light` or `dark` number input theme.
	 */
	@Input() theme: "light" | "dark" = "dark";
	/**
	 * Set to `true` for a disabled number input.
	 */
	@Input() disabled = false;
	/**
	 * Set to `true` for a loading number component.
	 */
	@Input() skeleton = false;
	/**
	 * Set to `true` for an invalid number component.
	 */
	@Input() invalid = false;
	/**
	 * The unique id for the number component.
	 */
	@Input() id = `number-${Number.numberCount}`;
	/**
	 * Reflects the required attribute of the `input` element.
	 */
	@Input() required: boolean;
	/**
	 * Sets the value attribute on the `input` element.
	 */
	@Input() value = 0;
	/**
	 * Sets the min attribute on the `input` element.
	 */
	@Input() min = null;
	/**
	 * Sets the max attribute on the `input` element.
	 */
	@Input() max = null;
	/**
	 * Sets the text inside the `label` tag.
	 */
	@Input() label: string | TemplateRef<any>;
	/**
	 * Sets the optional helper text.
	 */
	@Input() helperText: string | TemplateRef<any>;
	/**
	 * Sets the invalid text.
	 */
	@Input() invalidText: string | TemplateRef<any>;
	/**
	 * Emits event notifying other classes when a change in state occurs in the input.
	 */
	@Output() change = new EventEmitter<NumberChange>();

	/**
	 * Creates an instance of `Number`.
	 * @memberof Number
	 */
	constructor() {
		Number.numberCount++;
	}

	/**
	 * This is the initial value set to the component
	 * @param value The input value.
	 */
	public writeValue(value: any) {
		this.value = value;
	}

	/**
	 * Sets a method in order to propagate changes back to the form.
	 * @param {any} fn
	 * @memberof Number
	 */
	public registerOnChange(fn: any) {
		this.propagateChange = fn;
	}

	/**
	 * Registers a callback to be triggered when the control has been touched.
	 * @param fn Callback to be triggered when the number input is touched.
	 */
	public registerOnTouched(fn: any) {
		this.onTouched = fn;
	}

	/**
	 * Sets the disabled state through the model
	 */
	setDisabledState(isDisabled: boolean) {
		this.disabled = isDisabled;
	}

	/**
	 * Called when number input is blurred. Needed to properly implement `ControlValueAccessor`.
	 * @memberof Number
	 */
	onTouched: () => any = () => { };

	/**
	 * Method set in `registerOnChange` to propagate changes back to the form.
	 * @memberof Number
	 */
	propagateChange = (_: any) => { };

	/**
	 * Adds 1 to the current `value`.
	 */
	onIncrement(): void {
		if (this.max === null || this.value < this.max) {
			this.value++;
			this.emitChangeEvent();
		}
	}

	/**
	 * Subtracts 1 to the current `value`.
	 */
	onDecrement(): void {
		if (this.min === null || this.value > this.min) {
			this.value--;
			this.emitChangeEvent();
		}
	}

	/**
	 * Creates a class of `NumberChange` to emit the change in the `Number`.
	 */
	emitChangeEvent(): void {
		let event = new NumberChange();
		event.source = this;
		event.value = this.value;
		this.change.emit(event);
		this.propagateChange(this.value);
	}

	onNumberInputChange(event) {
		this.value = event.target.value;
		this.emitChangeEvent();
	}

	public isTemplate(value) {
		return value instanceof TemplateRef;
	}
}
