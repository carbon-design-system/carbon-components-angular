import {
	AfterContentInit,
	ChangeDetectorRef,
	ContentChildren,
	Component,
	ElementRef,
	EventEmitter,
	forwardRef,
	Input,
	OnInit,
	Output,
	QueryList,
	Renderer2,
	HostBinding,
	AfterViewInit
} from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";
import { Radio } from "./radio.component";

/**
 * Used to emit changes performed on a `Radio`.
 * @export
 * @class RadioChange
 */
export class RadioChange {
	/**
	 * Contains the `Radio` that has been changed.
	 */
	source: Radio | null;
	/**
	 * The value of the `Radio` encompassed in the `RadioChange` class.
	 */
	value: string;

	constructor(source: Radio, value: string) {
		this.source = source;
		this.value = value;
	}
}

/**
 * [See demo](../../?path=/story/radio--basic)
 *
 * class: RadioGroup
 *
 * selector: `ibm-radio-group`
 *
 * source: `src/forms/radio.component.ts`
 *
 *
 * Ex:
 * ```html
 * <ibm-radio-group [(ngModel)]="radio">
 * 	<ibm-radio *ngFor="let one of manyRadios" [value]="one">
 *		Radio {{one}}
 * 	</ibm-radio>
 * </ibm-radio-group>
 *
 * Radio selected: {{radio}}
 * ```
 *
 * ```typescript
 * manyRadios = ["one", "two", "three", "four", "five", "six"];
 * ```
 *
 * Also see: [`Radio`](#ibm-radio)
 *
 * <example-url>../../iframe.html?id=radio--basic</example-url>
 */
@Component({
	selector: "ibm-radio-group",
	template: `
		<div
			class="bx--radio-button-group"
			[ngClass]="{
				'bx--radio-button-group--vertical': orientation === 'vertical',
				'bx--radio-button-group--label-left': orientation === 'vertical' && labelPlacement === 'left'
			}"
			role="radiogroup">
			<ng-content></ng-content>
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
	 * Used for creating the `RadioGroup` 'name' property dynamically.
	 */
	static radioGroupCount = 0;

	@Input() orientation: "horizontal" | "vertical" = "horizontal";

	@Input() labelPlacement: "right" | "left" =  "right";

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
	 * Sets the passed in `Radio` item as the selected input within the `RadioGroup`.
	 */
	@Input()
	set selected(selected: Radio | null) {
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
	@Input() disabled = false;

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
	 * Binds 'bx--form-item' value to the class for `RadioGroup`.
	 */
	@HostBinding("class.bx--form-item") radioButtonGroupClass = true;

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
			this._selected = null;
			this.radios.forEach(radio => {
				if (radio.checked) {
					this._selected = radio;
				}
			});
		}
	}

	/**
	 * Creates a class of `RadioChange` to emit the change in the `RadioGroup`.
	 */
	emitChangeEvent(event: RadioChange) {
		this.change.emit(event);
		this.propagateChange(event.value);
		this.onTouched();
	}

	updateRadioNames() {
		console.warn("updateRadioNames had been deprecated. Use updateRadios instead");
		this.updateRadios();
	}

	/**
	 * Synchronizes radio properties.
	 */
	updateRadios() {
		if (this.radios) {
			setTimeout(() => {
				this.radios.forEach(radio => radio.name = this.name);
				if (this.labelPlacement === "left") {
					this.radios.forEach(radio => radio.labelPlacement = "left");
				}
			});
		}
	}

	/**
	 * Updates the value of the `RadioGroup` using the provided parameter.
	 */
	writeValue(value: any) {
		this.value = value;
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

	/**
	 * Needed to properly implement ControlValueAccessor.
	 */
	onTouched: () => any = () => {};

	/**
	 * Method set in registerOnChange to propagate changes back to the form.
	 */
	propagateChange = (_: any) => {};

	protected updateChildren() {
		if (this.radios) {
			this.radios.forEach(child => child.skeleton = this.skeleton);
		}
	}

	protected updateRadioChangeHandler() {
		this.radios.forEach(radio => {
			radio.registerRadioChangeHandler((event: RadioChange) => {
				// update selected and value from the event
				this._selected = event.source;
				this._value = event.value;
				// bubble the event
				this.emitChangeEvent(event);
			});
		});
	}
}
