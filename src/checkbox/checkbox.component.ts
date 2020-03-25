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
 *
 * @deprecated since v4
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

export type CheckboxValue = boolean | "on" | "off";

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
			(click)="onClick()">
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
	 *
	 * @deprecated since v4
	 */
	@Input() size: "sm" | "md" = "md";
	/**
	 * Set to `true` for checkbox to be rendered with nested styles.
	 *
	 * @deprecated since v4
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
	@Input() value: CheckboxValue;
	/**
	 * Used to set the `aria-label` attribute on the input element.
	 *
	 * @deprecated since v4 use the `ariaLabel` input instead
	 */
	// tslint:disable-next-line:no-input-rename
	@Input("aria-label") set ariaLabel(value: string) {
		this._ariaLabel = value;
	}

	get ariaLabel() {
		return this._ariaLabel;
	}

	// TODO: drop the `_`
	// tslint:disable-next-line:no-input-rename
	@Input("ariaLabel") _ariaLabel = "";

	/**
	 * Used to set the `aria-labelledby` attribute on the input element.
	 *
	 * @deprecated since v4 use the `ariaLabelledby` input instead
	 */
	// tslint:disable-next-line:no-input-rename
	@Input("aria-labelledby") set ariaLabelledby(value: string) {
		this._ariaLabelledby = value;
	}

	get ariaLabelledby() {
		return this._ariaLabelledby;
	}

	// TODO: drop the `_`
	// tslint:disable-next-line:no-input-rename
	@Input("ariaLabelledby") _ariaLabelledby: string;

	/**
	 * Set the checkbox's indeterminate state to match the parameter and transition the view to reflect the change.
	 *
	 * Allows double binding with the `indeterminateChange` Output.
	 */
	@Input() set indeterminate(indeterminate: boolean) {
		let changed = this._indeterminate !== indeterminate;
		this._indeterminate = indeterminate;

		if (changed) {
			this.transitionCheckboxState(CheckboxState.Indeterminate);
		} else {
			this.transitionCheckboxState(this.checked ? CheckboxState.Checked : CheckboxState.Unchecked);
		}

		this.indeterminateChange.emit(this._indeterminate);
	}

	/**
	 * Reflects whether the checkbox state is indeterminate.
	 */
	get indeterminate() {
		return this._indeterminate;
	}

	/**
	 * Sets the `checked` state. `true` for checked, `false` for unchecked
	 *
	 * Allows double binding with the `checkedChange` Output.
	 */
	@Input() set checked (checked: boolean) {
		if (checked !== this.checked) {
			if (this._indeterminate) {
				Promise.resolve().then(() => {
					this._indeterminate = false;
					this.indeterminateChange.emit(this._indeterminate);
				});
			}
			this._checked = checked;
			this.changeDetectorRef.markForCheck();
		}
	}

	/**
	 * Returns value `true` if state is selected for the checkbox.
	 */
	get checked() {
		return this._checked;
	}

	@HostBinding("class.bx--checkbox-wrapper") get checkboxWrapperClass() {
		return !this.inline;
	}
	@HostBinding("class.bx--form-item") get formItemClass() {
		return !this.inline;
	}

	/**
	 * Emits event notifying other classes when a change in state occurs on a checkbox after a
	 * click.
	 *
	 * @deprecated since v4 use `checked` and `checkedChange` instead
	 */
	@Output() change = new EventEmitter<CheckboxChange>();

	/**
	 * Emits an event when the value of the checkbox changes.
	 *
	 * Allows double biding with the `checked` Input.
	 */
	@Output() checkedChange = new EventEmitter<boolean>();

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

	/**
	 * Keeps a reference to the checkboxes current state, as defined in `CheckboxState`.
	 */
	currentCheckboxState = CheckboxState.Init;

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
		this.checked = !this.checked;
	}

	/**
	 * Writes a value from `ngModel` to the component.
	 *
	 * In this case the value is the `checked` property.
	 *
	 * @param value boolean, corresponds to the `checked` property.
	 */
	public writeValue(value: any) {
		this.checked = !!value;
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
	onChange(event: Event) {
		event.stopPropagation();
	}

	/**
	 * Handles click events on the `Checkbox` and emits changes to other classes.
	 */
	onClick() {
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
		let oldState = this.currentCheckboxState;

		// Indeterminate has to be set always if it's transitioned to
		// checked has to be set before indeterminate or it overrides
		// indeterminate's dash
		if (newState === CheckboxState.Indeterminate) {
			this.checked = false;
			this.inputCheckbox.nativeElement.indeterminate = true;
		}

		if (oldState === newState) {
			return;
		}

		this.currentCheckboxState = newState;
	}

	/**
	 * Creates instance of `CheckboxChange` used to propagate the change event.
	 */
	emitChangeEvent() {
		/* begin deprecation */
		let event = new CheckboxChange();
		event.source = this;
		event.checked = this.checked;
		this.change.emit(event);
		/* end deprecation */

		this.checkedChange.emit(this.checked);
		this.propagateChange(this.checked);
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
}
