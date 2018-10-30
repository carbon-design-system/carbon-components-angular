import {
	Component,
	Input,
	Output,
	ViewChild,
	ElementRef,
	HostListener,
	EventEmitter
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

/**
 * `ibm-select` provides a styled `select` component.
 *
 * Example:
 *
 * ```
 * <ibm-select [(ngModel)]="model">
 * 	<option value="default" disabled selected hidden>Choose an option</option>
 * 	<option value="option1">Option 1</option>
 *	<option value="option2">Option 2</option>
 * 	<option value="option3">Option 3</option>
 * </ibm-select>
 *	```

 */
@Component({
	selector: "ibm-select",
	template: `
		<div class="bx--form-item">
			<div
				[ngClass]="{ 'bx--select--inline': display === 'inline' }"
				class="bx--select">
				<label [attr.for]="id" class="bx--label">{{label}}</label>
				<select
					#select
					[attr.id]="id"
					[disabled]="disabled"
					(change)="onChange($event)"
					class="bx--select-input">
					<ng-content></ng-content>
				</select>
				<svg class="bx--select__arrow" width="10" height="5" viewBox="0 0 10 5">
				<path d="M0 0l5 4.998L10 0z" fill-rule="evenodd" />
				</svg>
			</div>
		</div>
	`,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: Select,
			multi: true
		}
	]
})
export class Select implements ControlValueAccessor {
	/**
	 * Tracks the total number of selects instantiated. Used to generate unique IDs
	 */
	static selectCount = 0;
  
  /**
   * toggles between `inline` and `default` states.
   */
	@Input() display: "inline" | "default" = "default";
	/**
	 * Label for the select. Appears above the input.
	 */
	@Input() label = "Select label";
	/**
	 * Sets the unique ID. Defaults to `select-${total count of selects instantiated}`
	 */
	@Input() id = `select-${Select.selectCount++}`;
	/**
	 * Set to true to disable component.
	 */
	@Input() disabled = false;
	/**
	 * emits the selected options `value`
	 */
	@Output() selected = new EventEmitter();

	@ViewChild("select") select: ElementRef;

	get value() {
		return this.select.nativeElement.value;
	}

	set value(v) {
		this.select.nativeElement.value = v;
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
		this.onChangeHandler(event.target.value);
		this.selected.emit(event.target.value);
	}

	/**
	 * placeholder declarations. Replaced by the functions provided to `registerOnChange` and `registerOnTouched`
	 */
	private onChangeHandler = (_: any) => { };
	private onTouchedHandler = () => { };

	/**
	 * Listens for the host blurring, and notifies the model
	 */
	@HostListener("blur")
	private blur() {
		this.onTouchedHandler();
	}
}
