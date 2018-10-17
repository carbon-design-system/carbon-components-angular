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
import { RadioComponent } from "./radio.component";

/**
 * Used to emit changes performed on a `RadioComponent`.
 * @export
 * @class RadioChange
 */
export class RadioChange {
	/**
	 * Contains the `RadioComponent` that has been changed.
	 * @type {(RadioComponent | null)}
	 * @memberof RadioChange
	 */
	source: RadioComponent | null;
	/**
	 * The value of the `RadioComponent` encompassed in the `RadioChange` class.
	 * @type {any}
	 * @memberof RadioChange
	 */
	value: any;
}

/**
 * class: RadioGroup
 *
 * selector: `n-radio-group`
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
 * Also see: [`RadioComponent`](#n-radio)
 *
 *
 * @export
 * @class RadioGroup
 * @implements {OnInit}
 * @implements {AfterContentInit}
 * @implements {ControlValueAccessor}
 */
@Component({
	selector: "ibm-radio-group",
	template: `
		<div class="bx--radio-button-group">
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
	 * @type {number}
	 * @static
	 * @memberof RadioGroup
	 */
	static radioGroupCount = 0;

	/**
	 * Emits event notifying other classes of a change using a `RadioChange` class.
	 * @type {EventEmitter<RadioChange>}
	 * @memberof RadioGroup
	 */
	@Output() change: EventEmitter<RadioChange> = new EventEmitter<RadioChange>();

	/**
	 * The `RadioComponent` input items in the `RadioGroup`.
	 * @type {QueryList<RadioComponent>}
	 * @memberof RadioGroup
	 */
	// tslint:disable-next-line:no-forward-ref
	@ContentChildren(forwardRef(() => RadioComponent)) _radios: QueryList<RadioComponent>;

	/**
	 * Determines the render size of the `RadioComponent` inputs within the group.
	 * (size `"default"` is being deprecated as of next major release, please use `"md"` instead)
	 * @type {("sm" | "md" | "default")}
	 * @memberof RadioGroup
	 */
	@Input() size: "sm" | "md" | "default" = "md";

	/**
	 * Returns the `RadioComponent` that is selected within the `RadioGroup`.
	 * @readonly
	 * @memberof RadioGroup
	 */
	@Input()
	get selected() {
		return this._selected;
	}
	/**
	 * Sets the passed in `RadioComponent` item as the selected input within the `RadioGroup`.
	 * @param selected
	 * @memberof RadioGroup
	 */
	set selected(selected: RadioComponent | null) {
		this._selected = selected;
		this.value = selected ? selected.value : null;
		this.checkSelectedRadio();
	}

	/**
	 * Returns the value/state of the selected `RadioComponent` within the `RadioGroup`.
	 * @readonly
	 * @memberof RadioGroup
	 */
	@Input()
	get value() {
		return this._value;
	}
	/**
	 * Sets the value/state of the selected `RadioComponent` within the `RadioGroup` to the passed in value.
	 * @param {newValue}
	 * @memberof RadioGroup
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
	 * @readonly
	 * @memberof RadioGroup
	 */
	@Input()
	get name() {
		return this._name;
	}
	/**
	 * Replaces the name associated with the `RadioGroup` with the provided parameter.
	 * @param name
	 * @memberof RadioGroup
	 */
	set name(name: string) {
		this._name = name;
		this.updateRadioNames();
	}

	/**
	 * Returns the disabled value in the `RadioGroup` if there is one.
	 * @readonly
	 * @memberof RadioGroup
	 */
	@Input()
	get disabled() {
		return this._disabled;
	}
	/**
	 * Updates the disabled value using the provided parameter and marks the radios to be checked for
	 * changes.
	 * @param value
	 * @memberof RadioGroup
	 */
	set disabled(value) {
		this._disabled = value;
		this.markRadiosForCheck();
	}

	/**
	 * Binds 'radiogroup' value to the role attribute for `RadioGroup`.
	 * @memberof RadioGroup
	 */
	@HostBinding("attr.role") role = "radiogroup";

	/**
	 * Binds 'radiogroup' value to the aria-label attribute for `RadioGroup`.
	 * @memberof RadioComponent
	 */
	@HostBinding("attr.aria-label") ariaLabel = "radiogroup";

	/**
	 * To track whether the `RadioGroup` has been initialized.
	 * @private
	 * @memberof RadioGroup
	 */
	private isInitialized = false;
	/**
	 * Reflects whether or not the input is disabled and cannot be selected.
	 * @type {boolean}
	 * @private
	 * @memberof RadioGroup
	 */
	private _disabled = false;
	/**
	 * The value of the selected option within the `RadioGroup`.
	 * @private
	 * @type {any}
	 * @memberof RadioGroup
	 */
	private _value: any = null;
	/**
	 * The `RadioComponent` within the `RadioGroup` that is selected.
	 * @private
	 * @type {RadioComponent}
	 * @memberof RadioGroup
	 */
	private _selected: RadioComponent = null;
	/**
	 * The name attribute associated with the `RadioGroup`.
	 * @type {string}
	 * @private
	 * @memberof RadioGroup
	 */
	private _name = `radio-group-${RadioGroup.radioGroupCount}`;

	/**
	 * Creates an instance of RadioGroup.
	 * @param {ChangeDetectorRef} changeDetectorRef
	 * @param {ElementRef} elementRef
	 * @param {Renderer2} renderer
	 * @memberof RadioGroup
	 */
	constructor(private changeDetectorRef: ChangeDetectorRef, private elementRef: ElementRef, private renderer: Renderer2) {
		RadioGroup.radioGroupCount++;
	}

	/**
	 * Updates the selected `RadioComponent` to be checked (selected).
	 * @memberof RadioGroup
	 */
	checkSelectedRadio() {
		if (this._selected && !this._selected.checked) {
			this._selected.checked = true;
		}
	}

	/**
	 * Use the value of the `RadioGroup` to update the selected radio to the right state (selected state).
	 * @memberof RadioGroup
	 */
	updateSelectedRadioFromValue() {
		let alreadySelected = this._selected != null && this._selected.value === this._value;

		if (this._radios != null && !alreadySelected) {
			this._selected = null;
			this._radios.forEach(radio => {
				radio.checked = this.value === radio.value;
				if (radio.checked) {
					this._selected = radio;
				}
			});
		}
	}

	/**
	 * Creates a class of `RadioChange` to emit the change in the `RadioGroup`.
	 * @memberof RadioGroup
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
	 * @memberof RadioGroup
	 */
	markRadiosForCheck() {
		if (this._radios) {
			this._radios.forEach(radio => radio.markForCheck());
		}
	}

	/**
	 * Synchronizes the names of the radio items with the name of the `RadioGroup`.
	 * @memberof RadioGroup
	 */
	updateRadioNames() {
		if (this._radios) {
			this._radios.forEach(radio => {
				radio.name = this.name;
			});
		}
	}

	/**
	 * Updates the value of the `RadioGroup` using the provided parameter.
	 * @param {any} value
	 * @memberof RadioGroup
	 */
	writeValue(value: any) {
		this.value = value;
		this.changeDetectorRef.markForCheck();
	}

	/**
	 * Callback triggered when a `RadioComponent` within the `RadioGroup` is changed.
	 * @memberof RadioGroup
	 */
	touch() {
		if (this.onTouched) {
			this.onTouched();
		}
	}

	/**
	 * Builds variant class on the radio items within the `RadioGroup`.
	 * @memberof RadioGroup
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
	 * @memberof RadioGroup
	 */
	ngAfterContentInit() {
		// Mark this component as initialized in AfterContentInit because the initial value can
		// possibly be set by NgModel on RadioGroup, and it is possible that the OnInit of the
		// NgModel occurs *after* the OnInit of the RadioGroup.
		this.isInitialized = true;
	}

	/**
	 * Used to set method to propagate changes back to the form.
	 * @param {*} fn
	 * @memberof RadioGroup
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
	 * @memberof RadioGroup
	 */
	onTouched: () => any = () => {};

	/**
	 * Method set in registerOnChange to propagate changes back to the form.
	 * @memberof RadioGroup
	 */
	propagateChange = (_: any) => {};
}
