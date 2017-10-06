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
	ViewChild
} from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";
import { CheckboxComponent, CheckboxState } from "./checkbox.component";

export class RadioChange {
	source: RadioComponent | null;
	value: any;
}

@Directive({
	selector: "n-radio-group",
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => RadioGroup),
			multi: true
		}
	],
	host: {
		"role": "radiogroup"
	},
	inputs: ["disabled"]
})
export class RadioGroup implements AfterContentInit, ControlValueAccessor {
	static radioGroupCount = 0;

	private _isInitialized = false;
	private _disabled = false;
	private _value: any = null;
	private _selected: RadioComponent = null;
	private _name = `radio-group-${RadioGroup.radioGroupCount}`;

	@Output() change: EventEmitter<RadioChange> = new EventEmitter<RadioChange>();
	@ContentChildren(forwardRef(() => RadioComponent)) _radios: QueryList<RadioComponent>;

	@Input() size: "default" | "sm" = "default";

	@Input()
	get selected() {
		return this._selected;
	}
	set selected(selected: RadioComponent | null) {
		this._selected = selected;
		this.value = selected ? selected.value : null;
		this.checkSelectedRadio();
	}

	@Input()
	get value() {
		return this._value;
	}
	set value(newValue: any) {
		if (this._value !== newValue) {
			this._value = newValue;

			this.updateSelectedRadioFromValue();
			this.checkSelectedRadio();
		}
	}

	@Input()
	get name() {
		return this._name;
	}
	set name(name: string) {
		this._name = name;
		this.updateRadioNames();
	}

	@Input()
	get disabled() {
		return this._disabled;
	}
	set disabled(value) {
		this._disabled = value;
		this.markRadiosForCheck();
	}

	constructor(private changeDetectorRef: ChangeDetectorRef, private _elementRef: ElementRef, private renderer: Renderer2) {
		RadioGroup.radioGroupCount++;
	}

	checkSelectedRadio() {
		if (this._selected && !this._selected.checked) {
			this._selected.checked = true;
		}
	}

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

	emitChangeEvent() {
		if (this._isInitialized) {
			let event = new RadioChange();
			event.source = this._selected;
			event.value = this._value;
			this.change.emit(event);
		}
	}

	markRadiosForCheck() {
		if (this._radios) {
			this._radios.forEach(radio => radio.markForCheck());
		}
	}

	updateRadioNames() {
		if (this._radios) {
			this._radios.forEach(radio => {
				radio.name = this.name;
			});
		}
	}

	writeValue(value: any) {
		this.value = value;
		this.changeDetectorRef.markForCheck();
	}

	touch() {
		if (this.onTouched) {
			this.onTouched();
		}
	}

	/**
	 * Creates a class name based on @input() size.
	 * @return className {string}
	 */
	getSizeClass() {
		if (this.size !== "default") {
			return "radio--" + this.size;
		} else {
			return "radio";
		}
	}

	ngOnInit() {
		// Add class to host element
		this.renderer.addClass(this._elementRef.nativeElement, this.getSizeClass());
	}

	ngAfterContentInit() {
		// Mark this component as initialized in AfterContentInit because the initial value can
		// possibly be set by NgModel on RadioGroup, and it is possible that the OnInit of the
		// NgModel occurs *after* the OnInit of the RadioGroup.
		this._isInitialized = true;
	}

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

	// Needed to properly implement ControlValueAccessor.
	onTouched: () => any = () => {};

	// method set in registerOnChange to propagate changes back to the form
	propagateChange = (_: any) => {};
}



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
			useExisting: forwardRef(() => RadioComponent),
			multi: true
		}
	],
	host: {
		"role": "radio"
	}
})
export class RadioComponent extends CheckboxComponent {
	static radioCount = 0;
	id = `radio-${RadioComponent.radioCount}`;
	radioGroup: RadioGroup;
	_value: any = null;

	constructor(@Optional() radioGroup: RadioGroup,
				protected changeDetectorRef: ChangeDetectorRef, protected _elementRef: ElementRef, protected renderer: Renderer2) {
		super(changeDetectorRef, _elementRef, renderer);
		RadioComponent.radioCount++;
		this.radioGroup = radioGroup;
	}

	ngOnInit() {
		if (this.radioGroup) {
			// if in group check if it needs checked and use group name
			this.checked = this.radioGroup.value === this._value;
			this.name = this.radioGroup.name;
		}
	}

	onClick(event: Event) {
		event.stopPropagation();
	}

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

	markForCheck() {
		this.changeDetectorRef.markForCheck();
	}

	@Input()
	get value(): any {
		return this._value;
	}

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
