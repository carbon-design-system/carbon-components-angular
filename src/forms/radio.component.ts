import {
	AfterContentInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	ContentChildren,
	Component,
	Directive,
	ElementRef,
	EventEmitter,
	forwardRef,
	Input,
	OnInit,
	Optional,
	Output,
	QueryList,
	Renderer2,
	ViewChild,
	HostBinding
} from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";
import { CheckboxComponent, CheckboxState } from "./checkbox.component";


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
 * <n-radio-group [(ngModel)]="radio">
 * 	<n-radio *ngFor="let one of manyRadios" [value]="one">
 *		Radio {{one}}
 * 	</n-radio>
 * </n-radio-group>
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
	selector: "n-radio-group",
	template: `
		<ng-content></ng-content>
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
	 * @type {("default" | "sm")}
	 * @memberof RadioGroup
	 */
	@Input() size: "default" | "sm" = "default";

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
		const className = `radio${this.size !== "default" ? `--${this.size}` : ""}`;

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
	 * @memberof RadioGroup
	 */
	onTouched: () => any = () => {};

	/**
	 * Method set in registerOnChange to propagate changes back to the form.
	 * @memberof RadioGroup
	 */
	propagateChange = (_: any) => {};
}


/**
 * class: RadioComponent (extends CheckboxComponent)
 *
 * selector: `n-radio`
 *
 * source: `src/forms/radio.component.ts`
 *
 * ```html
 * <n-radio [(ngModel)]="radioState">Radio</n-radio>
 * ```
 *
 * Also see: [`RadioGroup`](#n-radio-group)
 *
 * @export
 * @class RadioComponent
 * @extends {CheckboxComponent}
 * @implements {OnInit}
 */
@Component({
	selector: "n-radio",
	template: `
		<label [for]="id">
			<input type="radio" #inputCheckbox
				[checked]="checked"
				[disabled]="disabled"
				[name]="name"
				[id]="id"
				[required]="required"
				[value]="value"
				[attr.aria-label]="ariaLabel"
				[attr.aria-labelledby]="ariaLabelledby"
				(change)="onChange($event)"
				(click)="onClick($event)">
			<span class="radio_label"><ng-content></ng-content></span>
		</label>
	`,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: RadioComponent,
			multi: true
		}
	]
})
export class RadioComponent extends CheckboxComponent implements OnInit {
	/**
	 * Used to dynamically create unique ids for the `RadioComponent`.
	 * @static
	 * @memberof RadioComponent
	 */
	static radioCount = 0;

	/**
	 * Binds 'radio' value to the role attribute for `RadioComponent`.
	 * @memberof RadioComponent
	 */
	@HostBinding("attr.role") role = "radio";

	/**
	 * The id for the `RadioComponent`.
	 * @type {string}
	 * @memberof RadioComponent
	 */
	id = `radio-${RadioComponent.radioCount}`;
	/**
	 * The radio group that this `RadioComponent` belongs to (if any).
	 * @type {RadioGroup}
	 * @memberof RadioComponent
	 */
	radioGroup: RadioGroup;
	/**
	 * The value of the `RadioComponent`.
	 * @type {any}
	 * @memberof RadioComponent
	 */
	_value: any = null;

	/**
	 * Creates an instance of RadioComponent.
	 * @param {RadioGroup} radioGroup
	 * @param {ChangeDetectorRef} changeDetectorRef
	 * @param {ElementRef} elementRef
	 * @param {Renderer2} renderer
	 * @memberof RadioComponent
	 */
	constructor(@Optional() radioGroup: RadioGroup,
				protected changeDetectorRef: ChangeDetectorRef, private elementRef: ElementRef, private renderer: Renderer2) {
		super(changeDetectorRef);
		RadioComponent.radioCount++;
		this.radioGroup = radioGroup;
	}

	/**
	 * If the component has an encompassing `RadioGroup` it synchronizes the name with that
	 * of the group.
	 * @memberof RadioComponent
	 */
	ngOnInit() {
		if (this.radioGroup) {
			// if in group check if it needs checked and use group name
			this.checked = this.radioGroup.value === this._value;
			this.name = this.radioGroup.name;
		}
	}

	/**
	 * Handles the event of a mouse click on the `RadioComponent`.
	 * @param {Event} event
	 * @memberof RadioComponent
	 */
	onClick(event: Event) {
		event.stopPropagation();
	}

	/**
	 * Synchronizes with the `RadioGroup` in the event of a changed `RadioComponent`.
	 * Emits the changes of both the `RadioGroup` and `RadioComponent`.
	 * @param {Event} event
	 * @memberof RadioComponent
	 */
	onChange(event: Event) {
		event.stopPropagation();

		let groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
		this.checked = true;
		this.emitChangeEvent();

		if (this.radioGroup) {
			this.radioGroup.propagateChange(this.value);
			this.radioGroup.touch();
			if (groupValueChanged) {
				this.radioGroup.emitChangeEvent();
			}
		}
	}

	/**
	 * Calls the `markForCheck()` function within the `changeDetectorRef` class
	 * to make sure that Angular's change detection is triggered for the input.
	 * @memberof RadioComponent
	 */
	markForCheck() {
		this.changeDetectorRef.markForCheck();
	}

	/**
	 * Returns the value/state of the `RadioComponent`.
	 * @readonly
	 * @type {any}
	 * @returns {any}
	 * @memberof RadioComponent
	 */
	@Input()
	get value(): any {
		return this._value;
	}

	/**
	 * Replaces `@Input value` with the provided parameter supplied from the parent.
	 * @param {any} value
	 * @memberof RadioComponent
	 */
	set value(value: any) {
		if (this._value !== value) {
			this._value = value;
			if (this.radioGroup != null) {
				if (!this.checked) {
					this.checked = this.radioGroup.value === value;
				}
				if (this.checked) {
					this.radioGroup.selected = this;
				}
			}
		}
	}
}
