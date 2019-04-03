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
	HostBinding
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
	 * @type {(Radio | null)}
	 * @memberof RadioChange
	 */
	source: Radio | null;
	/**
	 * The value of the `Radio` encompassed in the `RadioChange` class.
	 * @type {any}
	 * @memberof RadioChange
	 */
	value: any;
}

/**
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
 */
@Component({
	selector: "ibm-radio-group",
	template: `
		<div class="bx--radio-button-group" role="radiogroup">
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
export class RadioGroup implements OnInit, AfterContentInit, ControlValueAccessor {
	/**
	 * Used for creating the `RadioGroup` 'name' property dynamically.
	 */
	static radioGroupCount = 0;

	/**
	 * Emits event notifying other classes of a change using a `RadioChange` class.
	 * @type {EventEmitter<RadioChange>}
	 */
	@Output() change: EventEmitter<RadioChange> = new EventEmitter<RadioChange>();

	/**
	 * The `Radio` input items in the `RadioGroup`.
	 */
	// tslint:disable-next-line:no-forward-ref
	@ContentChildren(forwardRef(() => Radio)) radios: QueryList<Radio>;

	/**
	 * Determines the render size of the `Radio` inputs within the group.
	 */
	@Input() size: "sm" | "md" = "md";

	/**
	 * Returns the `Radio` that is selected within the `RadioGroup`.
	 * @readonly
	 */
	@Input()
	get selected() {
		return this._selected;
	}
	/**
	 * Sets the passed in `Radio` item as the selected input within the `RadioGroup`.
	 */
	set selected(selected: Radio | null) {
		this._selected = selected;
		this.value = selected ? selected.value : null;
		this.checkSelectedRadio();
	}

	/**
	 * Returns the value/state of the selected `Radio` within the `RadioGroup`.
	 */
	@Input()
	get value() {
		return this._value;
	}
	/**
	 * Sets the value/state of the selected `Radio` within the `RadioGroup` to the passed in value.
	 */
	set value(newValue: any) {
		if (this._value !== newValue) {
			this._value = newValue;

			this.updateSelectedRadioFromValue();
			this.checkSelectedRadio();
		}
	}

	/**
	 * Returns the associated name of the `RadioGroup`.
	 */
	@Input()
	get name() {
		return this._name;
	}
	/**
	 * Replaces the name associated with the `RadioGroup` with the provided parameter.
	 */
	set name(name: string) {
		this._name = name;
		this.updateRadioNames();
	}

	/**
	 * Returns the disabled value in the `RadioGroup` if there is one.
	 */
	@Input()
	get disabled() {
		return this._disabled;
	}
	/**
	 * Updates the disabled value using the provided parameter and marks the radios to be checked for
	 * changes.
	 */
	set disabled(value) {
		this._disabled = value;
		this.markRadiosForCheck();
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
	 * Reflects wheather or not the dropdown is loading.
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
	protected _name = `radio-group-${RadioGroup.radioGroupCount}`;

	/**
	 * Creates an instance of RadioGroup.
	 */
	constructor(protected changeDetectorRef: ChangeDetectorRef, protected elementRef: ElementRef, protected renderer: Renderer2) {
		RadioGroup.radioGroupCount++;
	}

	/**
	 * Updates the selected `Radio` to be checked (selected).
	 */
	checkSelectedRadio() {
		if (this._selected && !this._selected.checked) {
			this._selected.checked = true;
		}
	}

	/**
	 * Use the value of the `RadioGroup` to update the selected radio to the right state (selected state).
	 */
	updateSelectedRadioFromValue() {
		let alreadySelected = this._selected != null && this._selected.value === this._value;

		if (this.radios != null && !alreadySelected) {
			this._selected = null;
			this.radios.forEach(radio => {
				radio.checked = this.value === radio.value;
				if (radio.checked) {
					this._selected = radio;
				}
			});
		}
	}

	/**
	 * Creates a class of `RadioChange` to emit the change in the `RadioGroup`.
	 */
	emitChangeEvent() {
		if (this.isInitialized) {
			let event = new RadioChange();
			event.source = this._selected;
			event.value = this._value;
			this.change.emit(event);
		}
	}

	/**
	 * Calls the `markForCheck()` function within the `changeDetectorRef` class
	 * to trigger Angular's change detection on each radio item.
	 */
	markRadiosForCheck() {
		if (this.radios) {
			this.radios.forEach(radio => radio.markForCheck());
		}
	}

	/**
	 * Synchronizes the names of the radio items with the name of the `RadioGroup`.
	 */
	updateRadioNames() {
		if (this.radios) {
			this.radios.forEach(radio => radio.name = this.name);
		}
	}

	/**
	 * Updates the value of the `RadioGroup` using the provided parameter.
	 */
	writeValue(value: any) {
		this.value = value;
		this.changeDetectorRef.markForCheck();
	}

	/**
	 * Callback triggered when a `Radio` within the `RadioGroup` is changed.
	 */
	touch() {
		if (this.onTouched) {
			this.onTouched();
		}
	}

	/**
	 * Builds variant class on the radio items within the `RadioGroup`.
	 */
	ngOnInit() {
		// Build variant class
		const className = `radio${this.size !== "md" ? `--${this.size}` : ""}`;

		// Add class to host element
		this.renderer.addClass(this.elementRef.nativeElement, className);
	}

	/**
	 * Marks this component as initialized to avoid the initial value getting set by `NgModel` on `RadioGroup`.
	 * This avoids `NgModel` setting the initial value before the OnInit of the `RadioGroup`.
	 */
	ngAfterContentInit() {
		// Mark this component as initialized in AfterContentInit because the initial value can
		// possibly be set by NgModel on RadioGroup, and it is possible that the OnInit of the
		// NgModel occurs *after* the OnInit of the RadioGroup.
		this.isInitialized = true;
		this.updateFocusableRadio();

		this.radios.changes.subscribe(updatedRadios => {
			this.radios = updatedRadios;
			this.updateFocusableRadio();
		});

		this.updateChildren();
	}

	updateFocusableRadio() {
		if (this.radios && !this.radios.some(radio => radio.checked)) {
			this.radios.forEach(radio => radio.needsToBeFocusable = false);
			this.radios.first.needsToBeFocusable = true;
			this.radios.forEach(radio => radio.changeDetectorRef.detectChanges());
		}
	}

	/**
	 * Used to set method to propagate changes back to the form.
	 */
	public registerOnChange(fn: any) {
		this.propagateChange = value => {
			this.value = value;
			fn(value);
		};
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
			this.radios.toArray().forEach(child => child.skeleton = this.skeleton);
		}
	}
}
