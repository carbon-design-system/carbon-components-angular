import {
	AfterViewInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ElementRef,
	EventEmitter,
	Input,
	Output,
	ViewChild,
	HostBinding
} from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";


/**
 * Defines the set of states for a checkbox component.
 */
export enum CheckboxState {
	Init,
	Indeterminate,
	Checked,
	Unchecked
}

/**
 * Used to emit changes performed on checkbox components.
 */
export class CheckboxChange {
	/**
	 * Contains the `Checkbox` that has been changed.
	 */
	source: Checkbox;
	/**
	 * The state of the `Checkbox` encompassed in the `CheckboxChange` class.
	 */
	checked: boolean;
}

/**
 * [See demo](../../?path=/story/checkbox--basic)
 *
 * <example-url>../../iframe.html?id=checkbox--basic</example-url>
 */
@Component({
	selector: "ibm-checkbox",
	template: `
		<input
			#inputCheckbox
			class="bx--checkbox"
			type="checkbox"
			[id]="id"
			[value]="value"
			[name]="name"
			[required]="required"
			[checked]="checked"
			[disabled]="disabled"
			[indeterminate]="indeterminate"
			[attr.aria-label]="ariaLabel"
			[attr.aria-labelledby]="ariaLabelledby"
			[attr.aria-checked]="(indeterminate ? 'mixed' : checked)"
			(change)="onChange($event)"
			(click)="onClick($event)">
		<label
			[for]="id"
			class="bx--checkbox-label"
			[ngClass]="{
				'bx--skeleton' : skeleton
			}">
			<span [ngClass]="{'bx--visually-hidden' : hideLabel}">
				<ng-content></ng-content>
			</span>
		</label>
	`,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: Checkbox,
			multi: true
		}
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class Checkbox implements ControlValueAccessor, AfterViewInit {
	/**
	 * Variable used for creating unique ids for checkbox components.
	 */
	static checkboxCount = 0;

	/**
	 * Size of the checkbox.
	 */
	@Input() size: "sm" | "md" = "md";
	/**
	 * Set to `true` for checkbox to be rendered with nested styles.
	 */
	@Input() nested: boolean;
	/**
	 * Set to `true` for checkbox to be rendered without any classes on the host element.
	 */
	@Input() inline = false;
	/**
	 * Set to `true` for a disabled checkbox.
	 */
	@Input() disabled = false;
	/**
	 * Set to `true` for a loading checkbox.
	 */
	@Input() skeleton = false;
	/**
	 * Set to `true` to hide the checkbox labels.
	 */
	@Input() hideLabel = false;
	/**
	 * Sets the name attribute on the `input` element.
	 */
	@Input() name: string;
	/**
	 * The unique id for the checkbox component.
	 */
	@Input() id = `checkbox-${Checkbox.checkboxCount}`;
	/**
	 * Reflects the required attribute of the `input` element.
	 */
	@Input() required: boolean;
	/**
	 * Sets the value attribute on the `input` element.
	 */
	@Input() value: string;
	/**
	 * Used to set the `aria-label` attribute on the input element.
	 */
	// tslint:disable-next-line:no-input-rename
	@Input("aria-label") ariaLabel = "";
	/**
	 * Used to set the `aria-labelledby` attribute on the input element.
	 */
	// tslint:disable-next-line:no-input-rename
	@Input("aria-labelledby") ariaLabelledby: string;
	/**
	 * Reflects whether the checkbox state is indeterminate.
	 */
	get indeterminate() {
		return this._indeterminate;
	}

	/**
	 * Set the checkbox's indeterminate state to match the parameter and transition the view to reflect the change.
	 */
	@Input() set indeterminate(indeterminate: boolean) {
		if (indeterminate === this._indeterminate) {
			return;
		}
		// Set indeterminate and reset checked if indeterminate is true - only one of them can be true
		this._indeterminate = indeterminate;
		if (indeterminate && this._checked) {
			this._checked = false;
		}

		if (this._indeterminate) {
			this.transitionCheckboxState(CheckboxState.Indeterminate);
		} else {
			this.transitionCheckboxState(this.checked ? CheckboxState.Checked : CheckboxState.Unchecked);
		}
		this.changeDetectorRef.markForCheck();
		this.indeterminateChange.emit(this._indeterminate);
	}

	/**
	 * Returns value `true` if state is selected for the checkbox.
	 */
	get checked() {
		return this._checked;
	}

	/**
	 * Updating the state of a checkbox to match the state of the parameter passed in.
	 */
	@Input() set checked (checked: boolean) {
		// Set checked and reset indeterminate if checked is true - only one of them can be true
		this.setChecked(checked, checked);
	}

	@HostBinding("class.bx--checkbox-wrapper") get checkboxWrapperClass() {
		return !this.inline;
	}
	@HostBinding("class.bx--form-item") get formItemClass() {
		return !this.inline;
	}

	/**
	 * Emits click event.
	 */
	@Output() click = new EventEmitter<void>();
	/**
	 * Emits event notifying other classes when a change in state occurs on a checkbox after a
	 * click.
	 */
	@Output() change = new EventEmitter<CheckboxChange>();
	/**
	 * Emits event notifying other classes when a change in state occurs specifically
	 * on an indeterminate checkbox.
	 */
	@Output() indeterminateChange = new EventEmitter<boolean>();

	/**
	 * Set to `true` if the input checkbox is selected (or checked).
	 */
	_checked = false;
	/**
	 * Set to `true` if the input checkbox is in state indeterminate.
	 */
	_indeterminate = false;

	currentCheckboxState: CheckboxState = CheckboxState.Init;

	/**
	 * Maintains a reference to the view DOM element of the `Checkbox`.
	 */
	@ViewChild("inputCheckbox") inputCheckbox: ElementRef;

	/**
	 * Creates an instance of `Checkbox`.
	 */
	constructor(protected changeDetectorRef: ChangeDetectorRef) {
		Checkbox.checkboxCount++;
	}

	/**
	 * Toggle the selected state of the checkbox.
	 */
	public toggle() {
		// Flip checked and reset indeterminate
		this.setChecked(!this.checked, true);
	}

	// this is the initial value set to the component
	public writeValue(value: any) {
		// Set checked and reset indeterminate
		this.setChecked(!!value, true);
	}

	/**
	 * Sets a method in order to propagate changes back to the form.
	 */
	public registerOnChange(fn: any) {
		this.propagateChange = fn;
	}

	/**
	 * Registers a callback to be triggered when the control has been touched.
	 * @param fn Callback to be triggered when the checkbox is touched.
	 */
	public registerOnTouched(fn: any) {
		this.onTouched = fn;
	}

	/**
	 * Executes on the event of a change within `Checkbox` to block propagation.
	 */
	onChange(event) {
		event.stopPropagation();
	}

	/**
	 * Handles click events on the `Checkbox` and emits changes to other classes.
	 */
	onClick(event) {
		if (this.click.observers.length) {
			// Disable default checkbox activation behavior which flips checked and resets indeterminate.
			// This allows the parent component to control the checked/indeterminate properties.
			event.preventDefault();
			this.click.emit();
			return;
		}
		if (!this.disabled) {
			this.toggle();
			this.transitionCheckboxState(this._checked ? CheckboxState.Checked : CheckboxState.Unchecked);
			this.emitChangeEvent();
		}
	}


	/**
	 * Called when checkbox is blurred. Needed to properly implement `ControlValueAccessor`.
	 */
	onTouched: () => any = () => {};

	/**
	 * Handles changes between checkbox states.
	 */
	transitionCheckboxState(newState: CheckboxState) {
		this.currentCheckboxState = newState;
	}

	/**
	 * Creates instance of `CheckboxChange` used to propagate the change event.
	 */
	emitChangeEvent() {
		let event = new CheckboxChange();
		event.source = this;
		event.checked = this.checked;

		this.propagateChange(this.checked);
		this.change.emit(event);
	}

	/**
	 * Updates the checkbox if it is in the indeterminate state.
	 */
	ngAfterViewInit() {
		if (this.indeterminate) {
			this.inputCheckbox.nativeElement.indeterminate = true;
			this.checked = false;
		}
	}

	/**
	 * Method set in `registerOnChange` to propagate changes back to the form.
	 */
	propagateChange = (_: any) => {};

	/**
	 * Sets checked state and optionally resets indeterminate state.
	 */
	private setChecked(checked: boolean, resetIndeterminate: boolean) {
		if (checked === this._checked) {
			return;
		}
		this._checked = checked;
		// Reset indeterminate if requested
		if (resetIndeterminate && this._indeterminate) {
			this._indeterminate = false;
			Promise.resolve().then(() => {
				this.indeterminateChange.emit(this._indeterminate);
			});
		}
		this.changeDetectorRef.markForCheck();
	}
}
