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
 *
 * <example-url>../../iframe.html?id=components-time-picker--simple</example-url>
 */
@Component({
	selector: "ibm-timepicker",
	template: `
		<label *ngIf="!skeleton && label" [for]="id" class="bx--label">
			<ng-container *ngIf="!isTemplate(label)">{{label}}</ng-container>
			<ng-template *ngIf="isTemplate(label)" [ngTemplateOutlet]="label"></ng-template>
		</label>
		<div
			class="bx--time-picker"
			[ngClass]="{'bx--time-picker--invalid' : invalid}">
			<div class="bx--time-picker__input">
				<input
					[ngClass]="{
						'bx--text-input--light': theme === 'light',
						'bx--skeleton': skeleton
					}"
					[value]="value"
					[placeholder]="placeholder"
					[attr.data-invalid]="invalid ? true : undefined"
					[pattern]="pattern"
					[attr.id]="id"
					[disabled]="disabled"
					maxlength="5"
					(change)="onChange($event)"
					type="text"
					class="bx--time-picker__input-field bx--text-input">
			</div>
			<ng-content></ng-content>
		</div>
		<div *ngIf="invalid" class="bx--form-requirement">
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
	@Input() placeholder = "hh:mm";
	@Input() pattern = "(1[012]|[0-9]):[0-5][0-9]";
	@Input() id = `timepicker-${TimePicker.timePickerCount++}`;
	@Input() disabled = false;
	@Input() value: string;

	/**
	 * Set to true for a loading select.
	 */
	@Input() skeleton = false;

	/**
	 * `light` or `dark` select theme
	 */
	@Input() theme: "light" | "dark" = "dark";

	@Output() valueChange: EventEmitter<string> = new EventEmitter();

	/**
	 * Ensures component is properly styled when used standalone.
	 */
	@HostBinding("class.bx--form-item") timepickerClass = true;

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
