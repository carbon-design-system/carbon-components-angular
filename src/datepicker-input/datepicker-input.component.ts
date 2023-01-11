import {
	Component,
	Input,
	Output,
	EventEmitter,
	ElementRef,
	TemplateRef,
	ViewChild
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
	selector: "ibm-date-picker-input",
	template: `
	<div class="bx--form-item">
		<div class="bx--date-picker"
			[ngClass]="{
				'bx--date-picker--simple' : type === 'simple',
				'bx--date-picker--single' : type === 'single',
				'bx--date-picker--range' : type === 'range',
				'bx--date-picker--light' : theme === 'light',
				'bx--skeleton' : skeleton
			}">
			<div class="bx--date-picker-container">
				<label *ngIf="label" [for]="id" class="bx--label">
					<ng-container *ngIf="!isTemplate(label)">{{label}}</ng-container>
					<ng-template *ngIf="isTemplate(label)" [ngTemplateOutlet]="label"></ng-template>
				</label>
				<div class="bx--date-picker-input__wrapper"
					[ngClass]="{
						'bx--date-picker-input__wrapper--invalid': invalid,
						'bx--date-picker-input__wrapper--warn': warn
					}">
					<input
						#input
						*ngIf="!skeleton"
						autocomplete="off"
						type="text"
						class="bx--date-picker__input"
						[ngClass]="{
							'bx--date-picker__input--sm': size === 'sm',
							'bx--date-picker__input--xl': size === 'xl'
						}"
						[attr.data-invalid]="invalid ? true : undefined"
						[value]="value"
						[pattern]="pattern"
						[placeholder]="placeholder"
						[id]= "id"
						[disabled]="disabled"
						(change)="onChange($event)"/>
						<svg
							*ngIf="type !== 'simple' && !warn && !invalid"
							ibmIcon="calendar"
							size="16"
							class="bx--date-picker__icon">
						</svg>
						<svg
							*ngIf="!warn && invalid"
							class="bx--date-picker__icon bx--date-picker__icon--invalid"
							ibmIcon="warning--filled"
							size="16">
						</svg>
						<svg
							*ngIf="!invalid && warn"
							ibmIcon="warning--alt--filled"
							size="16"
							class="bx--date-picker__icon bx--date-picker__icon--warn">
						</svg>
				</div>
				<div
					*ngIf="helperText && !invalid && !warn"
					class="bx--form__helper-text"
					[ngClass]="{'bx--form__helper-text--disabled': disabled}">
					<ng-container *ngIf="!isTemplate(helperText)">{{helperText}}</ng-container>
					<ng-template *ngIf="isTemplate(helperText)" [ngTemplateOutlet]="helperText"></ng-template>
				</div>
				<div *ngIf="!warn && invalid" class="bx--form-requirement">
					<ng-container *ngIf="!isTemplate(invalidText)">{{invalidText}}</ng-container>
					<ng-template *ngIf="isTemplate(invalidText)" [ngTemplateOutlet]="invalidText"></ng-template>
				</div>
				<div *ngIf="!invalid && warn" class="bx--form-requirement">
					<ng-container *ngIf="!isTemplate(warnText)">{{warnText}}</ng-container>
					<ng-template *ngIf="isTemplate(warnText)" [ngTemplateOutlet]="warnText"></ng-template>
				</div>
			</div>
		</div>
</div>
	`,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: DatePickerInput,
			multi: true
		}
	]
})
export class DatePickerInput {
	private static datePickerCount = 0;
	/**
	 * Select a calendar type for the `model`.
	 * Internal purposes only.
	 */
	@Input() type: "simple" | "single" | "range" = "simple";

	@Input() id = `datepicker-${DatePickerInput.datePickerCount++}`;

	@Input() hasIcon = false;

	@Input() label: string | TemplateRef<any>;

	@Input() placeholder = "mm/dd/yyyy";

	@Input() pattern = "^\\d{1,2}/\\d{1,2}/\\d{4}$";

	@Output() valueChange: EventEmitter<string> = new EventEmitter();

	@Input() theme: "light" | "dark" = "dark";

	@Input() disabled = false;
	/**
	 * Set to `true` for invalid state.
	 */
	@Input() invalid = false;
	/**
	 * Value displayed if dropdown is in invalid state.
	 */
	@Input() invalidText: string | TemplateRef<any>;
	/**
	  * Set to `true` to show a warning (contents set by warnText)
	  */
	@Input() warn = false;
	/**
	 * Sets the warning text
	 */
	@Input() warnText: string | TemplateRef<any>;

	/**
	 * Sets the optional helper text.
	 */
	@Input() helperText: string | TemplateRef<any>;

	@Input() skeleton = false;

	@Input() value = "";

	@Input() size: "sm" | "md" | "xl" = "md";

	// @ts-ignore
	@ViewChild("input", { static: false }) input: ElementRef;

	constructor(protected elementRef: ElementRef) { }

	onChange(event) {
		this.value = event.target.value;
		this.valueChange.emit(this.value);
		this.propagateChange(this.value);
		this.onTouched();
	}

	public writeValue(value: any) {
		this.value = value;
	}

	public registerOnChange(fn: any) {
		this.propagateChange = fn;
	}

	public registerOnTouched(fn: any) {
		this.onTouched = fn;
	}

	onTouched: () => any = () => { };

	propagateChange = (_: any) => { };

	public isTemplate(value) {
		return value instanceof TemplateRef;
	}
}
