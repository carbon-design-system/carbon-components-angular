import {
	Component,
	Input,
	Output,
	EventEmitter,
	ElementRef,
	TemplateRef,
	ViewChild,
	ChangeDetectionStrategy
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { NgClass, NgTemplateOutlet } from "@angular/common";
import { IconDirective } from "carbon-components-angular/icon";

@Component({
	selector: "cds-date-picker-input, ibm-date-picker-input",
	template: `
		<div class="cds--form-item">
			<div class="cds--date-picker"
				[ngClass]="{
					'cds--date-picker--simple' : type === 'simple',
					'cds--date-picker--single' : type === 'single',
					'cds--date-picker--range' : type === 'range',
					'cds--date-picker--light' : theme === 'light',
					'cds--skeleton' : skeleton
				}">
				<div class="cds--date-picker-container">
					<!-- Skeleton structure -->
					@if (skeleton) {
						<span class="cds--label cds--skeleton"></span>
						<div class="cds--date-picker__input cds--skeleton"></div>
					} @else {
						@if (label) {
							<label
								[for]="id"
								class="cds--label"
								[ngClass]="{'cds--label--disabled': disabled}">
								@if (isTemplate(label)) {
									<ng-template [ngTemplateOutlet]="label" />
								} @else {
									{{label}}
								}
							</label>
						}
						<div class="cds--date-picker-input__wrapper"
							[ngClass]="{
								'cds--date-picker-input__wrapper--invalid': invalid,
								'cds--date-picker-input__wrapper--warn': warn
							}">
							<span>
								<input
									#input
									autocomplete="off"
									type="text"
									class="cds--date-picker__input"
									[ngClass]="{
										'cds--date-picker__input--sm': size === 'sm',
										'cds--date-picker__input--md': size === 'md',
										'cds--date-picker__input--lg': size === 'lg'
									}"
									[attr.data-invalid]="invalid ? true : undefined"
									[value]="value"
									[pattern]="pattern"
									[placeholder]="placeholder"
									[id]= "id"
									[disabled]="disabled"
									[readonly]="readonly"
									(change)="onChange($event)"/>
									@if (type !== 'simple' && !warn && !invalid) {
										<svg
											cdsIcon="calendar"
											size="16"
											class="cds--date-picker__icon">
										</svg>
									}
									@if (invalid) {
										<svg
											class="cds--date-picker__icon cds--date-picker__icon--invalid"
											cdsIcon="warning--filled"
											size="16">
										</svg>
									} @else if (warn) {
										<svg
											cdsIcon="warning--alt--filled"
											size="16"
											class="cds--date-picker__icon cds--date-picker__icon--warn">
										</svg>
									}
							</span>
						</div>
					}

					@if (invalid) {
						<div class="cds--form-requirement">
							@if (isTemplate(invalidText)) {
								<ng-template [ngTemplateOutlet]="invalidText" />
							} @else {
								{{invalidText}}
							}
						</div>
					} @else if (warn) {
						<div class="cds--form-requirement">
							@if (isTemplate(warnText)) {
								<ng-template [ngTemplateOutlet]="warnText" />
							} @else {
								{{warnText}}
							}
						</div>
					} @else if(helperText) {
						<div
							class="cds--form__helper-text"
							[ngClass]="{'cds--form__helper-text--disabled': disabled}">
							@if (isTemplate(helperText)) {
								<ng-template [ngTemplateOutlet]="helperText" />
							} @else {
								{{helperText}}
							}
						</div>
					}
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
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [NgClass, NgTemplateOutlet, IconDirective]
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

	/**
	 * @deprecated since v5 - Use `cdsLayer` directive instead
	 * Set to `"light"` to apply the light style
	 */
	@Input() theme: "light" | "dark" = "dark";

	@Input() disabled = false;

	@Input() readonly = false;
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

	@Input() size: "sm" | "md" | "lg" = "md";

	@ViewChild("input") input: ElementRef;

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
