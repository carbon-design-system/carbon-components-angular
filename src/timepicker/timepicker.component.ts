import {
	Component,
	Input,
	Output,
	EventEmitter,
	HostBinding,
	TemplateRef,
	HostListener
} from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

/**
 * [See demo](../../?path=/story/components-time-picker--simple)
 */
@Component({
	selector: "cds-timepicker, ibm-timepicker",
	template: `
		<label
		*ngIf="!skeleton && label"
		[for]="id"
		class="cds--label"
		[ngClass]="{
			'cds--label--disabled': disabled,
			'cds--visually-hidden': hideLabel
		}">
			<ng-container *ngIf="!isTemplate(label)">{{label}}</ng-container>
			<ng-template *ngIf="isTemplate(label)" [ngTemplateOutlet]="label"></ng-template>
		</label>
		<div
			class="cds--time-picker"
			[ngClass]="{
				'cds--time-picker--invalid' : invalid,
				'cds--time-picker--sm': size === 'sm',
				'cds--time-picker--md': size === 'md',
				'cds--time-picker--lg': size === 'lg',
				'cds--time-picker--light': theme === 'light'
			}">
			<div class="cds--time-picker__input">
				<input
					[ngClass]="{
						'cds--text-input--light': theme === 'light',
						'cds--skeleton': skeleton
					}"
					[value]="value"
					[placeholder]="placeholder"
					[attr.data-invalid]="invalid ? true : undefined"
					[pattern]="pattern"
					[attr.id]="id"
					[disabled]="disabled"
					[attr.maxlength]="maxLength"
					(change)="onChange($event)"
					type="text"
					class="cds--time-picker__input-field cds--text-input">
			</div>
			<ng-content></ng-content>
		</div>
		<div *ngIf="invalid" class="cds--form-requirement">
			<ng-container *ngIf="!isTemplate(invalidText)">{{invalidText}}</ng-container>
			<ng-template *ngIf="isTemplate(invalidText)" [ngTemplateOutlet]="invalidText"></ng-template>
		</div>
	`,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: TimePicker,
			multi: true
		}
	]
})
export class TimePicker implements ControlValueAccessor {
	/**
	 * Tracks the total number of selects instantiated. Used to generate unique IDs
	 */
	static timePickerCount = 0;

	@Input() invalid = false;
	@Input() invalidText: string | TemplateRef<any>;
	@Input() label: string | TemplateRef<any>;
	@Input() hideLabel = false;
	@Input() placeholder = "hh:mm";
	@Input() pattern = "(1[012]|[0-9]):[0-5][0-9]";
	@Input() id = `timepicker-${TimePicker.timePickerCount++}`;
	@Input() disabled = false;
	@Input() value: string;
	@Input() maxLength = 5;

	/**
	 * Set to true for a loading select.
	 */
	@Input() skeleton = false;

	/**
	 * @deprecated since v5 - Use `cdsLayer` directive instead
	 */
	@Input() theme: "light" | "dark" = "dark";

	/**
	 * `sm`, `md` (default), or `lg` select size
	 */
	@Input() size: "sm" | "md" | "lg" = "md";

	@Output() valueChange: EventEmitter<string> = new EventEmitter();

	/**
	 * Ensures component is properly styled when used standalone.
	 */
	@HostBinding("class.cds--form-item") timepickerClass = true;

	writeValue(value: string) {
		this.value = value;
	}

	registerOnChange(callback: any) {
		this.onChangeHandler = callback;
	}

	registerOnTouched(callback: any) {
		this.onTouchedHandler = callback;
	}

	setDisabledState(isDisabled: boolean) {
		this.disabled = isDisabled;
	}

	onChange(event) {
		this.onChangeHandler(event.target.value);
		this.valueChange.emit(event.target.value);
	}

	@HostListener("focusout")
	focusOut() {
		this.onTouchedHandler();
	}

	public isTemplate(value) {
		return value instanceof TemplateRef;
	}

	protected onChangeHandler = (_: any) => { };
	protected onTouchedHandler = () => { };
}
