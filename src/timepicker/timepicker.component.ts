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
 * [See demo](../../?path=/story/time-picker--simple)
 *
 * <example-url>../../iframe.html?id=time-picker--simple</example-url>
 */
@Component({
	selector: "ibm-timepicker",
	template: `
			<div class="bx--time-picker__input">
				<label *ngIf="!skeleton && label" [for]="id" class="bx--label">
					<ng-container *ngIf="!isTemplate(label)">{{label}}</ng-container>
					<ng-template *ngIf="isTemplate(label)" [ngTemplateOutlet]="label"></ng-template>
				</label>
				<input
					[ngClass]="{
						'bx--text-input--light': theme === 'light',
						'bx--skeleton': skeleton
					}"
					[value]="value"
					[placeholder]="placeholder"
					[pattern]="pattern"
					[attr.id]="id"
					[disabled]="disabled"
					maxlength="5"
					(change)="onChange($event)"
					type="text"
					class="bx--time-picker__input-field bx--text-input">
			</div>
			<ng-content></ng-content>
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

	@HostBinding("class.bx--time-picker") timePicker = true;

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
