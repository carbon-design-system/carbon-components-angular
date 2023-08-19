import {
	Component,
	Input,
	HostBinding,
	EventEmitter,
	Output,
	TemplateRef,
	HostListener
} from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

import { I18n, Overridable } from "carbon-components-angular/i18n";
import { Observable } from "rxjs";

/**
 * Used to emit changes performed on number input components.
 */
export class NumberChange {
	/**
	 * Contains the `Number` that has been changed.
	 */
	source: NumberComponent;
	/**
	 * The value of the `Number` field encompassed in the `NumberChange` class.
	 */
	value: number;
}

/**
 * [See demo](../../?path=/story/components-number--basic)
 */
@Component({
	selector: "cds-number, ibm-number",
	template: `
		<div
			data-numberinput
			[attr.data-invalid]="(invalid ? true : null)"
			class="cds--number"
			[ngClass]="{
				'cds--number--light': theme === 'light',
				'cds--number--nolabel': !label,
				'cds--number--helpertext': helperText,
				'cds--skeleton' : skeleton,
				'cds--number--sm': size === 'sm',
				'cds--number--md': size === 'md',
				'cds--number--lg': size === 'lg'
			}">
			<label *ngIf="skeleton && label" class="cds--label cds--skeleton"></label>
			<label
				*ngIf="!skeleton && label"
				[for]="id"
				class="cds--label"
				[ngClass]="{'cds--label--disabled': disabled}">
				<ng-container *ngIf="!isTemplate(label)">{{label}}</ng-container>
				<ng-template *ngIf="isTemplate(label)" [ngTemplateOutlet]="label"></ng-template>
			</label>
			<div
				class="cds--number__input-wrapper"
				[ngClass]="{
					'cds--number__input-wrapper--warning': warn
				}">
				<input
					type="number"
					[id]="id"
					[value]="value"
					[attr.min]="min"
					[attr.max]="max"
					[attr.step]="step"
					[disabled]="disabled"
					[required]="required"
					[attr.aria-label]="ariaLabel"
					[attr.data-invalid]="invalid ? invalid : null"
					[placeholder]="placeholder"
					(change)="onNumberInputChange($event)"/>
				<svg
					*ngIf="!skeleton && !warn && invalid"
					cdsIcon="warning--filled"
					size="16"
					class="cds--number__invalid">
				</svg>
				<svg
					*ngIf="!skeleton && !invalid && warn"
					cdsIcon="warning--alt--filled"
					size="16"
					class="cds--number__invalid cds--number__invalid--warning">
				</svg>
				<div *ngIf="!skeleton" class="cds--number__controls">
					<button
						class="cds--number__control-btn down-icon"
						type="button"
						[attr.disabled]="disabled ? true : null"
						aria-live="polite"
						aria-atomic="true"
						[attr.aria-label]="getDecrementLabel() | async"
						(click)="onDecrement()">
						<svg cdsIcon="subtract" size="16"></svg>
					</button>
					<div class="cds--number__rule-divider"></div>
					<button
						class="cds--number__control-btn up-icon"
						type="button"
						[attr.disabled]="disabled ? true : null"
						aria-live="polite"
						aria-atomic="true"
						[attr.aria-label]="getIncrementLabel() | async"
						(click)="onIncrement()">
						<svg cdsIcon="add" size="16"></svg>
					</button>
					<div class="cds--number__rule-divider"></div>
				</div>
			</div>
			<div
				*ngIf="helperText && !invalid && !warn"
				class="cds--form__helper-text"
				[ngClass]="{
					'cds--form__helper-text--disabled': disabled
				}">
				<ng-container *ngIf="!isTemplate(helperText)">{{helperText}}</ng-container>
				<ng-template *ngIf="isTemplate(helperText)" [ngTemplateOutlet]="helperText"></ng-template>
			</div>
			<div *ngIf="!warn && invalid" class="cds--form-requirement">
				<ng-container *ngIf="!isTemplate(invalidText)">{{invalidText}}</ng-container>
				<ng-template *ngIf="isTemplate(invalidText)" [ngTemplateOutlet]="invalidText"></ng-template>
			</div>
			<div *ngIf="!invalid && warn" class="cds--form-requirement">
				<ng-container *ngIf="!isTemplate(warnText)">{{warnText}}</ng-container>
				<ng-template *ngIf="isTemplate(warnText)" [ngTemplateOutlet]="warnText"></ng-template>
			</div>
		</div>
	`,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: NumberComponent,
			multi: true
		}
	]
})
export class NumberComponent implements ControlValueAccessor {
	/**
	 * Variable used for creating unique ids for number input components.
	 */
	static numberCount = 0;

	@HostBinding("class.cds--form-item") containerClass = true;

	/**
	 * @deprecated since v5 - Use `cdsLayer` directive instead
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
	@Input() id = `number-${NumberComponent.numberCount}`;
	/**
	 * Sets the placeholder attribute on the `input` element.
	 */
	@Input() placeholder = "";
	/**
	 * Number input field render size
	 */
	@Input() size: "sm" | "md" | "lg" = "md";
	/**
	 * Reflects the required attribute of the `input` element.
	 */
	@Input() required: boolean;
	/**
	 * Sets the value attribute on the `input` element.
	 */
	@Input() set value(v: any) {
		if (v === "" || v === null) {
			this._value = null;
			return;
		}
		this._value = Number(v);
	}

	get value() {
		return this._value;
	}
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
	 * Sets the amount the number controls increment and decrement by.
	 */
	@Input() step = 1;
	/**
	 * If `step` is a decimal, we may want precision to be set to go around floating point precision.
	 */
	@Input() precision: number;
	/**
	 * Set to `true` to show a warning (contents set by warningText)
	 */
	@Input() warn = false;
	/**
	 * Sets the warning text
	 */
	@Input() warnText: string | TemplateRef<any>;
	/**
	 * Sets the arialabel for input
	 */
	@Input() ariaLabel: string;
	/**
	 * Emits event notifying other classes when a change in state occurs in the input.
	 */
	@Output() change = new EventEmitter<NumberChange>();

	@Input()
	set decrementLabel(value: string | Observable<string>) {
		this._decrementLabel.override(value);
	}

	get decrementLabel() {
		return this._decrementLabel.value;
	}

	@Input()
	set incrementLabel(value: string | Observable<string>) {
		this._incrementLabel.override(value);
	}

	get incrementLabel() {
		return this._incrementLabel.value;
	}

	protected _value = 0;

	protected _decrementLabel: Overridable = this.i18n.getOverridable("NUMBER.DECREMENT");
	protected _incrementLabel: Overridable = this.i18n.getOverridable("NUMBER.INCREMENT");

	/**
	 * Creates an instance of `Number`.
	 */
	constructor(protected i18n: I18n) {
		NumberComponent.numberCount++;
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

	@HostListener("focusout")
	focusOut() {
		this.onTouched();
	}

	/**
	 * Sets the disabled state through the model
	 */
	setDisabledState(isDisabled: boolean) {
		this.disabled = isDisabled;
	}

	/**
	 * Called when number input is blurred. Needed to properly implement `ControlValueAccessor`.
	 */
	onTouched: () => any = () => { };

	/**
	 * Method set in `registerOnChange` to propagate changes back to the form.
	 */
	propagateChange = (_: any) => { };

	/**
	 * Adds `step` to the current `value`.
	 */
	onIncrement(): void {
		if (this.max === null || this.value + this.step <= this.max) {
			this.value += this.step;
			this.value = parseFloat(this.value.toPrecision(this.precision));
			this.emitChangeEvent();
		}
	}

	/**
	 * Subtracts `step` to the current `value`.
	 */
	onDecrement(): void {
		if (this.min === null || this.value - this.step >= this.min) {
			this.value -= this.step;
			this.value = parseFloat(this.value.toPrecision(this.precision));
			this.emitChangeEvent();
		}
	}

	getDecrementLabel(): Observable<string> {
		return this._decrementLabel.subject;
	}

	getIncrementLabel(): Observable<string> {
		return this._incrementLabel.subject;
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
export { NumberComponent as Number };
