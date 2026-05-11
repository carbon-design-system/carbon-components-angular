import {
	AfterViewInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ElementRef,
	EventEmitter,
	Inject,
	Input,
	Optional,
	Output,
	TemplateRef,
	ViewChild,
	HostListener
} from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";
import { CheckboxValue } from "./checkbox.types";
import { NgClass, NgTemplateOutlet } from "@angular/common";
import { IconDirective } from "carbon-components-angular/icon";
import { CHECKBOX_GROUP_HOST, CheckboxGroupHost } from "./checkbox-group-host";

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
 * Get started with importing the component:
 *
 * ```typescript
 * import { Checkbox } from 'carbon-components-angular';
 * ```
 *
 * [See demo](../../?path=/story/components-checkbox--basic)
 */
@Component({
	selector: "cds-checkbox, ibm-checkbox",
	template: `
		<div class="cds--form-item cds--checkbox-wrapper"
			[ngClass]="{
				'cds--checkbox-wrapper--invalid': !effectiveReadOnly && effectiveInvalid,
				'cds--checkbox-wrapper--warning': !effectiveReadOnly && !effectiveInvalid && effectiveWarn,
				'cds--checkbox-wrapper--readonly': effectiveReadOnly,
				'cds--checkbox-wrapper--decorator': !!decorator
			}">
			<input
				#inputCheckbox
				class="cds--checkbox"
				type="checkbox"
				[id]="id + '_input'"
				[value]="value"
				[name]="name"
				[required]="required"
				[checked]="checked"
				[disabled]="disabled"
				[attr.data-invalid]="(!effectiveReadOnly && effectiveInvalid) ? true : null"
				[attr.aria-readonly]="effectiveReadOnly ? true : null"
				[attr.aria-labelledby]="ariaLabelledby"
				[attr.aria-describedby]="(helperText && !effectiveInvalid && !effectiveWarn) ? helperId : null"
				(change)="onChange($event)"
				(click)="onClick($event)">
			<label
				[for]="id + '_input'"
				[attr.aria-label]="ariaLabel"
				[attr.title]="title || null"
				class="cds--checkbox-label"
				[ngClass]="{
					'cds--skeleton' : skeleton
				}">
				<span [ngClass]="{'cds--visually-hidden' : hideLabel}" class="cds--checkbox-label-text">
					<ng-content></ng-content>
					@if (decorator) {
						<div class="cds--checkbox-wrapper-inner--decorator">
							<ng-template [ngTemplateOutlet]="decorator"></ng-template>
						</div>
					}
				</span>
			</label>
			<div class="cds--checkbox__validation-msg">
				@if (!effectiveReadOnly && effectiveInvalid) {
					<svg
						cdsIcon="warning--filled"
						size="16"
						class="cds--checkbox__invalid-icon">
					</svg>
					<div class="cds--form-requirement">
						@if (!isTemplate(invalidText)) {
							{{invalidText}}
						}
						@if (isTemplate(invalidText)) {
							<ng-template [ngTemplateOutlet]="$any(invalidText)"></ng-template>
						}
					</div>
				}
				@if (!effectiveReadOnly && !effectiveInvalid && effectiveWarn) {
					<svg
						cdsIcon="warning--alt--filled"
						size="16"
						class="cds--checkbox__invalid-icon cds--checkbox__invalid-icon--warning">
					</svg>
					<div class="cds--form-requirement">
						@if (!isTemplate(warnText)) {
							{{warnText}}
						}
						@if (isTemplate(warnText)) {
							<ng-template [ngTemplateOutlet]="$any(warnText)"></ng-template>
						}
					</div>
				}
			</div>
			@if (helperText && !effectiveInvalid && !effectiveWarn) {
				<div
					class="cds--form__helper-text"
					[id]="helperId">
					@if (!isTemplate(helperText)) {
						{{helperText}}
					}
					@if (isTemplate(helperText)) {
						<ng-template [ngTemplateOutlet]="$any(helperText)"></ng-template>
					}
				</div>
			}
		</div>
	`,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: Checkbox,
			multi: true
		}
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [NgClass, NgTemplateOutlet, IconDirective]
})
export class Checkbox implements ControlValueAccessor, AfterViewInit {
	/**
	 * Variable used for creating unique ids for checkbox components.
	 */
	static checkboxCount = 0;

	private static helperIdCounter = 0;

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
	@Input() ariaLabel: string;
	@Input() ariaLabelledby: string;

	/**
	 * Optional title for the `<label>` element.
	 */
	@Input() title = "";

	/**
	 * Optional helper text displayed below the checkbox label.
	 * Not shown when `invalid` or `warn` is `true`.
	 */
	@Input() helperText: string | TemplateRef<any>;

	/**
	 * Set to `true` to show the checkbox in an invalid/error state.
	 * When omitted inside a `cds-checkbox-group`, the group's `invalid` value applies.
	 */
	@Input() invalid?: boolean;

	/**
	 * The error message displayed when `invalid` is `true`.
	 */
	@Input() invalidText: string | TemplateRef<any>;

	/**
	 * Set to `true` to show the checkbox in a warning state.
	 * When omitted inside a `cds-checkbox-group`, the group's `warn` value applies.
	 */
	@Input() warn?: boolean;

	/**
	 * The warning message displayed when `warn` is `true` and `invalid` is `false`.
	 */
	@Input() warnText: string | TemplateRef<any>;

	/**
	 * When `true`, the checkbox cannot be toggled (matches `readonly` attribute semantics for form controls).
	 * When omitted inside a `cds-checkbox-group`, the group's `readOnly` value applies.
	 */
	@Input() readOnly?: boolean;

	/**
	 * Optional `TemplateRef` (e.g. AI label) rendered next to the label text.
	 */
	@Input() decorator: TemplateRef<any>;

	/**
	 * Set the checkbox's indeterminate state to match the parameter and transition the view to reflect the change.
	 *
	 * Allows double binding with the `indeterminateChange` Output.
	 */
	@Input() set indeterminate(indeterminate: boolean) {
		if (indeterminate === this._indeterminate) {
			return;
		}

		this._indeterminate = indeterminate;

		if (this._indeterminate) {
			this.transitionCheckboxState(CheckboxState.Indeterminate);
		} else {
			this.transitionCheckboxState(this.checked ? CheckboxState.Checked : CheckboxState.Unchecked);
		}

		if (this.inputCheckbox && this.inputCheckbox.nativeElement) {
			this.inputCheckbox.nativeElement.indeterminate = indeterminate;
		}
		this.changeDetectorRef.markForCheck();
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
		this.setChecked(checked, false);
	}

	/**
	 * Returns value `true` if state is selected for the checkbox.
	 */
	get checked() {
		return this._checked;
	}

	/**
	 * Emits click event.
	 */
	// eslint-disable-next-line @angular-eslint/no-output-native
	@Output() click = new EventEmitter<void>();

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

	readonly helperId = `checkbox-helper-${Checkbox.helperIdCounter++}`;

	/**
	 * Creates an instance of `Checkbox`.
	 */
	constructor(
		protected changeDetectorRef: ChangeDetectorRef,
		@Optional() @Inject(CHECKBOX_GROUP_HOST) private hostGroup: CheckboxGroupHost | null
	) {
		Checkbox.checkboxCount++;
	}

	get effectiveReadOnly(): boolean {
		const own = this.readOnly;
		const group = this.hostGroup?.readOnly ?? false;
		return !!(own !== undefined ? own : group);
	}

	get effectiveInvalid(): boolean {
		const own = this.invalid;
		const group = this.hostGroup?.invalid ?? false;
		return !!(own !== undefined ? own : group);
	}

	get effectiveWarn(): boolean {
		const own = this.warn;
		const group = this.hostGroup?.warn ?? false;
		return !!(own !== undefined ? own : group);
	}

	/**
	 * Toggle the selected state of the checkbox.
	 */
	public toggle() {
		if (this.effectiveReadOnly) {
			return;
		}
		// Flip checked and reset indeterminate
		this.setChecked(!this.checked, true);
	}

	/**
	 * Writes a value from `ngModel` to the component.
	 *
	 * In this case the value is the `checked` property.
	 *
	 * @param value boolean, corresponds to the `checked` property.
	 */
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
	 * `ControlValueAccessor` method to programmatically disable the checkbox.
	 *
	 * ex: `this.formGroup.get("myCheckbox").disable();`
	 *
	 * @param isDisabled `true` to disable the checkbox
	 */
	setDisabledState(isDisabled: boolean) {
		this.disabled = isDisabled;
		this.changeDetectorRef.markForCheck();
	}

	/**
	 * Invoked by `CheckboxGroup` when group `readOnly`, `invalid`, `warn` change so `OnPush`
	 * checkboxes still refresh inherited state from `CHECKBOX_GROUP_HOST`.
	 */
	markForCheckFromGroup(): void {
		this.changeDetectorRef.markForCheck();
	}

	@HostListener("focusout")
	focusOut() {
		this.onTouched();
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
	onClick(event: Event) {
		if (this.effectiveReadOnly) {
			event.preventDefault();
			if (this.click.observers.length) {
				this.click.emit();
			}
			return;
		}
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
		this.checkedChange.emit(this.checked);
		this.propagateChange(this.checked);
	}

	/**
	 * Updates the checkbox if it is in the indeterminate state.
	 */
	ngAfterViewInit() {
		if (this.indeterminate && this.inputCheckbox && this.inputCheckbox.nativeElement) {
			this.inputCheckbox.nativeElement.indeterminate = true;
		}
	}

	/**
	 * Method set in `registerOnChange` to propagate changes back to the form.
	 */
	propagateChange = (_: any) => {};

	/**
	 * Returns `true` when the provided value is a `TemplateRef`.
	 */
	isTemplate(value: any): boolean {
		return value instanceof TemplateRef;
	}

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
