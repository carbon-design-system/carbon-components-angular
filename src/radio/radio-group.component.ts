import {
	AfterContentInit,
	ContentChildren,
	Component,
	EventEmitter,
	forwardRef,
	Input,
	Output,
	QueryList,
	HostBinding,
	AfterViewInit,
	HostListener,
	TemplateRef
} from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";
import { Radio } from "./radio.component";
import { RadioChange } from "./radio-change.class";

/**
 * [See demo](../../?path=/story/components-radio--basic)
 *
 * class: RadioGroup
 *
 * selector: `cds-radio-group`
 *
 * source: `src/forms/radio.component.ts`
 *
 * Ex:
 *
 * ```html
 * <cds-radio-group [(ngModel)]="radio">
 * 	<cds-radio *ngFor="let one of manyRadios" [value]="one">
 *		Radio {{one}}
 * 	</cds-radio>
 * </cds-radio-group>
 *
 * Radio selected: {{radio}}
 * ```
 *
 * ```ts
 *	const manyRadios = ["one", "two", "three", "four", "five", "six"];
 * ```
 *
 * Also see: [Radio](#cds-radio)
 */
@Component({
	selector: "cds-radio-group, ibm-radio-group",
	template: `
		<fieldset
			class="cds--radio-button-group"
			[attr.aria-label]="ariaLabel"
			[attr.aria-labelledby]="ariaLabelledby"
			[ngClass]="{
				'cds--radio-button-group--vertical': orientation === 'vertical',
				'cds--radio-button-group--label-left': labelPlacement === 'left',
				'cds--radio-button-group--invalid' : !warn && invalid,
				'cds--radio-button-group--warning': !invalid && warn
			}"
			[attr.data-invalid]="invalid ? true : null">
			<legend *ngIf="legend" class="cds--label">
				<ng-template *ngIf="isTemplate(legend); else legendLabel;" [ngTemplateOutlet]="legend"></ng-template>
				<ng-template #legendLabel>{{legend}}</ng-template>
			</legend>
			<ng-content></ng-content>
		</fieldset>
		<div class="cds--radio-button__validation-msg">
			<ng-container *ngIf="!warn && invalid">
				<svg
					cdsIcon="warning--filled"
					size="16"
					class="cds--radio-button__invalid-icon">
				</svg>
				<div class="cds--form-requirement">
					<ng-container *ngIf="!isTemplate(invalidText)">{{ invalidText }}</ng-container>
					<ng-template *ngIf="isTemplate(invalidText)" [ngTemplateOutlet]="invalidText"></ng-template>
				</div>
			</ng-container>
			<ng-container *ngIf="!invalid && warn">
				<svg
					cdsIcon="warning--alt--filled"
					class="cds--radio-button__invalid-icon cds--radio-button__invalid-icon--warning"
					size="16">
				</svg>
				<div class="cds--form-requirement">
					<ng-container *ngIf="!isTemplate(warnText)">{{warnText}}</ng-container>
					<ng-template *ngIf="isTemplate(warnText)" [ngTemplateOutlet]="warnText"></ng-template>
				</div>
			</ng-container>
		</div>
		<div
			*ngIf="helperText && !invalid && !warn"
			class="cds--form__helper-text"
			[ngClass]="{'cds--form__helper-text--disabled': disabled}">
			<ng-container *ngIf="!isTemplate(helperText)">{{helperText}}</ng-container>
			<ng-template *ngIf="isTemplate(helperText)" [ngTemplateOutlet]="helperText"></ng-template>
		</div>
	`,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: RadioGroup,
			multi: true
		}
	]
})
export class RadioGroup implements AfterContentInit, AfterViewInit, ControlValueAccessor {

	/**
	 * Sets the passed in `Radio` item as the selected input within the `RadioGroup`.
	 */
	@Input()
	set selected(selected: Radio | null) {
		const alreadySelected = (this._selected && this._selected.value) === (selected && selected.value);
		if (alreadySelected) {
			// no need to redo
			return;
		}

		if (this._selected) {
			this._selected.checked = false;
		}
		this._selected = selected;
		this.value = selected ? selected.value : null;
		this.checkSelectedRadio();
	}

	/**
	 * Returns the `Radio` that is selected within the `RadioGroup`.
	 */
	get selected() {
		return this._selected;
	}

	/**
	 * Sets the value/state of the selected `Radio` within the `RadioGroup` to the passed in value.
	 */
	@Input()
	set value(newValue: any) {
		if (this._value !== newValue) {
			this._value = newValue;

			this.updateSelectedRadioFromValue();
			this.checkSelectedRadio();
		}
	}

	/**
	 * Returns the value/state of the selected `Radio` within the `RadioGroup`.
	 */
	get value() {
		return this._value;
	}

	/**
	 * Replaces the name associated with the `RadioGroup` with the provided parameter.
	 */
	@Input()
	set name(name: string) {
		this._name = name;
		this.updateRadios();
	}
	/**
	 * Returns the associated name of the `RadioGroup`.
	 */
	get name() {
		return this._name;
	}

	/**
	 * Set to true to disable the whole radio group
	 */
	@Input()
	set disabled(disabled: boolean) {
		this._disabled = disabled;
		this.updateRadios();
	}
	/**
	 * Returns the disabled value for the `RadioGroup`.
	 */
	get disabled(): boolean {
		return this._disabled;
	}

	/**
	 * Returns the skeleton value in the `RadioGroup` if there is one.
	 */
	@Input()
	get skeleton(): any {
		return this._skeleton;
	}

	/**
	 * Sets the skeleton value for all `Radio` to the skeleton value of `RadioGroup`.
	 */
	set skeleton(value: any) {
		this._skeleton = value;
		this.updateChildren();
	}
	/**
	 * Used for creating the `RadioGroup` 'name' property dynamically.
	 */
	static radioGroupCount = 0;

	@Input() orientation: "horizontal" | "vertical" = "horizontal";

	@Input() labelPlacement: "right" | "left" =  "right";

	@Input() legend: string | TemplateRef<any>;

	/**
	 * Used to set the `aria-label` attribute on the radio group element.
	 */
	@Input() ariaLabel: string;

	/**
	 * Used to set the `aria-labelledby` attribute on the radio group element.
	 */
	@Input() ariaLabelledby: string;

	/**
	 * Sets the optional helper text.
	 */
	@Input() helperText: string | TemplateRef<any>;

	/**
	 * Set to `true` to show the invalid state.
	 */
	@Input() invalid = false;

	/**
	 * Value displayed if combobox is in an invalid state.
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
	 * Emits event notifying other classes of a change using a `RadioChange` class.
	 */
	@Output() change: EventEmitter<RadioChange> = new EventEmitter<RadioChange>();

	/**
	 * The `Radio` input items in the `RadioGroup`.
	 */
	// tslint:disable-next-line:no-forward-ref
	@ContentChildren(forwardRef(() => Radio)) radios: QueryList<Radio>;

	/**
	 * Binds 'cds--form-item' value to the class for `RadioGroup`.
	 */
	@HostBinding("class.cds--form-item") radioButtonGroupClass = true;

	/**
	 * To track whether the `RadioGroup` has been initialized.
	 */
	protected isInitialized = false;
	/**
	 * Reflects whether or not the input is disabled and cannot be selected.
	 */
	protected _disabled = false;
	/**
	 * Reflects whether or not the dropdown is loading.
	 */
	protected _skeleton = false;
	/**
	 * The value of the selected option within the `RadioGroup`.
	 */
	protected _value: any = null;
	/**
	 * The `Radio` within the `RadioGroup` that is selected.
	 */
	protected _selected: Radio = null;
	/**
	 * The name attribute associated with the `RadioGroup`.
	 */
	protected _name = `radio-group-${RadioGroup.radioGroupCount++}`;

	/**
	 * Updates the selected `Radio` to be checked (selected).
	 */
	checkSelectedRadio() {
		if (this.selected && !this._selected.checked) {
			this.selected.checked = true;
		}
	}

	/**
	 * Use the value of the `RadioGroup` to update the selected radio to the right state (selected state).
	 */
	updateSelectedRadioFromValue() {
		let alreadySelected = this._selected != null && this._selected.value === this._value;
		if (this.radios && !alreadySelected) {
			if (this.selected && this.value) {
				this.selected.checked = false;
			}
			this._selected = null;
			this.radios.forEach(radio => {
				if (radio.checked || radio.value === this._value) {
					this._selected = radio;
				}
			});
			if (this.selected && !this.value) {
				this._value = this.selected.value;
			}
		}
	}

	/**
	 * `ControlValueAccessor` method to programmatically disable the `RadioGroup`.
	 *
	 * ex: `this.formGroup.get("myRadioGroup").disable();`
	 *
	 * @param isDisabled `true` to disable the inputs
	 */
	setDisabledState(isDisabled: boolean) {
		this.disabled = isDisabled;
	}

	/**
	 * Creates a class of `RadioChange` to emit the change in the `RadioGroup`.
	 */
	emitChangeEvent(event: RadioChange) {
		this.change.emit(event);
		this.propagateChange(event.value);
		this.onTouched();
	}

	/**
	 * Synchronizes radio properties.
	 */
	updateRadios() {
		if (this.radios) {
			setTimeout(() => {
				this.radios.forEach(radio => {
					radio.name = this.name;
					radio.setDisabledFromGroup(this.disabled);
					if (this.labelPlacement === "left") {
						radio.labelPlacement = "left";
					}
				});
			});
		}
	}

	/**
	 * Updates the value of the `RadioGroup` using the provided parameter.
	 */
	writeValue(value: any) {
		this.value = value;
		setTimeout(() => {
			this.updateSelectedRadioFromValue();
			this.checkSelectedRadio();
		});
	}

	ngAfterContentInit() {
		this.radios.changes.subscribe(() => {
			this.updateRadios();
			this.updateRadioChangeHandler();
		});

		this.updateChildren();
		this.updateRadioChangeHandler();
	}

	ngAfterViewInit() {
		this.updateRadios();
	}

	/**
	 * Used to set method to propagate changes back to the form.
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

	@HostListener("focusout")
	focusOut() {
		this.onTouched();
	}

	/**
	 * Needed to properly implement ControlValueAccessor.
	 */
	onTouched: () => any = () => {};

	/**
	 * Method set in registerOnChange to propagate changes back to the form.
	 */
	propagateChange = (_: any) => {};

	public isTemplate(value) {
		return value instanceof TemplateRef;
	}

	protected updateChildren() {
		if (this.radios) {
			this.radios.forEach(child => child.skeleton = this.skeleton);
		}
	}

	protected updateRadioChangeHandler() {
		this.radios.forEach(radio => {
			radio.registerRadioChangeHandler((event: RadioChange) => {
				if ((this.selected && this.selected.value) === event.value) {
					// no need to redo
					return;
				}
				// deselect previous radio
				if (this.selected) {
					this.selected.checked = false;
				}
				// update selected and value from the event
				this._selected = event.source;
				this._value = event.value;
				// bubble the event
				this.emitChangeEvent(event);
			});
		});
	}
}
