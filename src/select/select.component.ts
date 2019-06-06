import {
	Component,
	Input,
	Output,
	ViewChild,
	ElementRef,
	HostListener,
	EventEmitter,
	TemplateRef
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

/**
 * `ibm-select` provides a styled `select` component.
 *
 * [See demo](../../?path=/story/select--basic)
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
 *
 * <example-url>../../iframe.html?id=select--basic</example-url>
 *
 * @export
 * @class Select
 * @implements {ControlValueAccessor}
 */
@Component({
	selector: "ibm-select",
	template: `
		<div class="bx--form-item">
			<div
				[ngClass]="{
					'bx--select--inline': display === 'inline',
					'bx--select--light': theme === 'light',
					'bx--skeleton': skeleton
				}"
				class="bx--select"
				style="width: 100%">
				<label *ngIf="skeleton" [for]="id" class="bx--label bx--skeleton"></label>
				<label *ngIf="!skeleton" [for]="id" class="bx--label">
					<ng-container *ngIf="!isTemplate(label)">{{label}}</ng-container>
					<ng-template *ngIf="isTemplate(label)" [ngTemplateOutlet]="label"></ng-template>
				</label>
				<div *ngIf="helperText" class="bx--form__helper-text">
					<ng-container *ngIf="!isTemplate(helperText)">{{helperText}}</ng-container>
					<ng-template *ngIf="isTemplate(helperText)" [ngTemplateOutlet]="helperText"></ng-template>
				</div>
				<div class="bx--select-input__wrapper" [attr.data-invalid]="(invalid ? true : null)">
					<select
						#select
						[attr.id]="id"
						[disabled]="disabled"
						(change)="onChange($event)"
						class="bx--select-input">
						<ng-content></ng-content>
					</select>
					<ibm-icon-warning-filled16
						*ngIf="!skeleton && invalid"
						class="bx--select__invalid-icon"
						style="display: inherit;">
					</ibm-icon-warning-filled16>
					<ibm-icon-chevron-down16 *ngIf="!skeleton" class="bx--select__arrow" style="display: inherit;"></ibm-icon-chevron-down16>
				</div>
				<div *ngIf="invalid" class="bx--form-requirement">
					<ng-container *ngIf="!isTemplate(invalidText)">{{invalidText}}</ng-container>
					<ng-template *ngIf="isTemplate(invalidText)" [ngTemplateOutlet]="invalidText"></ng-template>
				</div>
			</div>
		</div>
	`,
	styles: [`
		[data-invalid] ~ .bx--select__arrow {
			bottom: 2.25rem;
		}
	`],
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
	 * Sets the unique ID. Defaults to `select-${total count of selects instantiated}`
	 */
	@Input() id = `select-${Select.selectCount++}`;
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
	 * `light` or `dark` select theme
	 */
	@Input() theme: "light" | "dark" = "dark";
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

	public isTemplate(value) {
		return value instanceof TemplateRef;
	}

	/**
	 * placeholder declarations. Replaced by the functions provided to `registerOnChange` and `registerOnTouched`
	 */
	protected onChangeHandler = (_: any) => { };
	protected onTouchedHandler = () => { };

	/**
	 * Listens for the host blurring, and notifies the model
	 */
	@HostListener("blur")
	protected blur() {
		this.onTouchedHandler();
	}
}
