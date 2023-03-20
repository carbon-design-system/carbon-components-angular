import {
	AfterViewInit,
	Component,
	ElementRef,
	Input,
	Output,
	HostListener,
	EventEmitter,
	TemplateRef,
	ViewChild
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

/**
 * `cds-select` provides a styled `select` component.
 *
 * [See demo](../../?path=/story/components-select--basic)
 *
 * Example:
 *
 * ```
 * <cds-select [(ngModel)]="model">
 * 	<option value="default" disabled selected hidden>Choose an option</option>
 * 	<option value="option1">Option 1</option>
 *	<option value="option2">Option 2</option>
 * 	<option value="option3">Option 3</option>
 * </cds-select>
 *	```
 */
@Component({
	selector: "cds-select, ibm-select",
	template: `
		<div class="cds--form-item">
			<ng-template [ngIf]="skeleton">
				<div *ngIf="label" class="cds--label cds--skeleton"></div>
				<div class="cds--select cds--skeleton"></div>
			</ng-template>
			<div
				*ngIf="!skeleton"
				class="cds--select"
				[ngClass]="{
					'cds--select--inline': display === 'inline',
					'cds--select--light': theme === 'light',
					'cds--select--invalid': invalid,
					'cds--select--warning': warn,
					'cds--select--disabled': disabled
				}">
				<label
					*ngIf="label"
					[for]="id"
					class="cds--label"
					[ngClass]="{'cds--label--disabled': disabled}">
					<ng-container *ngIf="!isTemplate(label)">{{label}}</ng-container>
					<ng-template *ngIf="isTemplate(label)" [ngTemplateOutlet]="label"></ng-template>
				</label>
				<div *ngIf="display === 'inline'; else noInline" class="cds--select-input--inline__wrapper">
					<ng-container *ngTemplateOutlet="noInline"></ng-container>
				</div>
				<div
					*ngIf="helperText"
					class="cds--form__helper-text"
					[ngClass]="{
						'cds--form__helper-text--disabled': disabled
					}">
					<ng-container *ngIf="!isTemplate(helperText)">{{helperText}}</ng-container>
					<ng-template *ngIf="isTemplate(helperText)" [ngTemplateOutlet]="helperText"></ng-template>
				</div>
			</div>
		</div>

		<!-- select element: dynamically projected based on 'display' variant -->
		<ng-template #noInline>
			<div class="cds--select-input__wrapper" [attr.data-invalid]="(invalid ? true : null)">
				<select
					#select
					[attr.id]="id"
					[attr.aria-label]="ariaLabel"
					[disabled]="disabled"
					(change)="onChange($event)"
					[attr.aria-invalid]="invalid ? 'true' : null"
					class="cds--select-input"
					[ngClass]="{
						'cds--select-input--sm': size === 'sm',
						'cds--select-input--md': size === 'md',
						'cds--select-input--lg': size === 'lg'
					}">
					<ng-content></ng-content>
				</select>
				<svg
					focusable="false"
					preserveAspectRatio="xMidYMid meet"
					style="will-change: transform;"
					xmlns="http://www.w3.org/2000/svg"
					class="cds--select__arrow"
					width="16"
					height="16"
					viewBox="0 0 16 16"
					aria-hidden="true">
					<path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path>
				</svg>
				<svg
					*ngIf="!warn && invalid"
					cdsIcon="warning--filled"
					size="16"
					class="cds--select__invalid-icon">
				</svg>
				<svg
					*ngIf="!invalid && warn"
					cdsIcon="warning--alt--filled"
					size="16"
					class="cds--select__invalid-icon cds--select__invalid-icon--warning">
				</svg>
			</div>
			<div
				*ngIf="invalid && invalidText && !warn" role="alert" class="cds--form-requirement" aria-live="polite">
				<ng-container *ngIf="!isTemplate(invalidText)">{{invalidText}}</ng-container>
				<ng-template *ngIf="isTemplate(invalidText)" [ngTemplateOutlet]="invalidText"></ng-template>
			</div>
			<div *ngIf="!invalid && warn" class="cds--form-requirement">
				<ng-container *ngIf="!isTemplate(warnText)">{{warnText}}</ng-container>
				<ng-template *ngIf="isTemplate(warnText)" [ngTemplateOutlet]="warnText"></ng-template>
			</div>
		</ng-template>
	`,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: Select,
			multi: true
		}
	]
})
export class Select implements ControlValueAccessor, AfterViewInit {
	/**
	 * Tracks the total number of selects instantiated. Used to generate unique IDs
	 */
	static selectCount = 0;

	/**
	 * `inline` or `default` select displays
	 */
	@Input() display: "inline" | "default" = "default";
	/**
	 * Label for the select. Appears above the input.
	 */
	@Input() label: string | TemplateRef<any>;
	/**
	 * Optional helper text that appears under the label.
	 */
	@Input() helperText: string | TemplateRef<any>;
	/**
	 * Sets the invalid text.
	 */
	@Input() invalidText: string | TemplateRef<any>;
	/**
	  * Set to `true` to show a warning (contents set by warningText)
	  */
	@Input() warn = false;
	/**
	 * Sets the warning text
	 */
	@Input() warnText: string | TemplateRef<any>;
	/**
	 * Sets the unique ID. Defaults to `select-${total count of selects instantiated}`
	 */
	@Input() id = `select-${Select.selectCount++}`;
	/**
	 * Number input field render size
	 */
	@Input() size: "sm" | "md" | "lg" = "md";
	/**
	 * Set to true to disable component.
	 */
	@Input() disabled = false;
	/**
	 * Set to true for a loading select.
	 */
	@Input() skeleton = false;
	/**
	 * Set to `true` for an invalid select component.
	 */
	@Input() invalid = false;

	/**
	 * @deprecated since v5 - Use `cdsLayer` directive instead
	 * `light` or `dark` select theme
	 */
	@Input() theme: "light" | "dark" = "dark";
	@Input() ariaLabel: string;

	@Output() valueChange = new EventEmitter();

	@ViewChild("select") select: ElementRef;

	@Input() set value(v) {
		this._value = v;
		if (this.select) {
			this.select.nativeElement.value = this._value;
		}
	}

	get value() {
		return this._value;
	}

	protected _value;

	ngAfterViewInit() {
		if (
			this.value !== undefined &&
			this.value !== null &&
			this.select &&
			this.select.nativeElement.value !== this.value
		) {
			this.select.nativeElement.value = this.value;
		}
	}

	/**
	 * Receives a value from the model.
	 */
	writeValue(obj: any) {
		this.value = obj;
	}

	/**
	 * Registers a listener that notifies the model when the control updates
	 */
	registerOnChange(fn: any) {
		this.onChangeHandler = fn;
	}

	/**
	 * Registers a listener that notifies the model when the control is blurred
	 */
	registerOnTouched(fn: any) {
		this.onTouchedHandler = fn;
	}

	/**
	 * Sets the disabled state through the model
	 */
	setDisabledState(isDisabled: boolean) {
		this.disabled = isDisabled;
	}

	/**
	 * Handles the change event from the `select`.
	 * Sends events to the change handler and emits a `selected` event.
	 */
	onChange(event) {
		this.value = event.target.value;
		this.onChangeHandler(event.target.value);
		this.valueChange.emit(event.target.value);
	}

	/**
	 * Listens for the host blurring, and notifies the model
	 */
	@HostListener("focusout")
	focusOut() {
		this.onTouchedHandler();
	}

	public isTemplate(value) {
		return value instanceof TemplateRef;
	}

	/**
	 * placeholder declarations. Replaced by the functions provided to `registerOnChange` and `registerOnTouched`
	 */
	protected onChangeHandler = (_: any) => { };
	protected onTouchedHandler = () => { };
}
