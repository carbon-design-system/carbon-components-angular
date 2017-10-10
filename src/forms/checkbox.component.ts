import {
	AfterViewInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ElementRef,
	EventEmitter,
	forwardRef,
	Input,
	OnInit,
	Output,
	ViewChild,
	HostBinding
} from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

export enum CheckboxState {
	Init,
	Indeterminate,
	Checked,
	Unchecked
}

export class CheckboxChange {
	source: CheckboxComponent;
	checked: boolean;
}

@Component({
	selector: "n-checkbox",
	template: `
		<label [for]="id" class="checkbox">
			<input type="checkbox" #inputCheckbox
				[checked]="checked"
				[disabled]="disabled"
				[indeterminate]="indeterminate"
				[name]="name"
				[id]="id"
				[required]="required"
				[value]="value"
				[attr.aria-label]="ariaLabel"
				[attr.aria-labelledby]="ariaLabelledby"
				[attr.aria-checked]="indeterminate ? 'mixed' : checked"
				(change)="onChange($event)"
				(click)="onClick($event)">
			<span class="checkbox_label"><ng-content></ng-content></span>
		</label>
	`,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: CheckboxComponent,
			multi: true
		}
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent implements ControlValueAccessor, AfterViewInit {
	static checkboxCount = 0;

	@Input() disabled = false;
	@Input() name: string;
	@Input() id = `checkbox-${CheckboxComponent.checkboxCount}`;
	@Input() required: boolean;
	@Input() value: string;
	// tslint:disable-next-line:no-input-rename
	@Input("aria-label") ariaLabel = "";
	// tslint:disable-next-line:no-input-rename
	@Input("aria-labelledby") ariaLabelledby: string;
	@Input() get indeterminate() {
		return this._indeterminate;
	}

	set indeterminate(indeterminate: boolean) {
		let changed = this._indeterminate !== indeterminate;
		this._indeterminate = indeterminate;

		if (changed) {
			this.transitionCheckboxState(CheckboxState.Indeterminate);
		} else {
			this.transitionCheckboxState(this.checked ? CheckboxState.Checked : CheckboxState.Unchecked);
		}

		this.indeterminateChange.emit(this._indeterminate);
	}

	@Input() get checked() {
		return this._checked;
	}

	set checked (checked: boolean) {
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

	@Output() change = new EventEmitter<CheckboxChange>();
	@Output() indeterminateChange = new EventEmitter<boolean>();

	_checked = false;
	_indeterminate = false;

	currentCheckboxState: CheckboxState = CheckboxState.Init;

	@ViewChild("inputCheckbox") inputCheckbox: ElementRef;

	@HostBinding("attr.role") role = "checkbox";


	constructor(protected changeDetectorRef: ChangeDetectorRef) {
		CheckboxComponent.checkboxCount++;
	}

	public toggle() {
		this.checked = !this.checked;
	}

	// this is the initial value set to the component
	public writeValue(value: any) {
		this.checked = !!value;
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

	onChange(event) {
		event.stopPropagation();
	}

	onClick(event) {
		if (!this.disabled) {
			this.toggle();
			this.transitionCheckboxState(this._checked ? CheckboxState.Checked : CheckboxState.Unchecked);
			this.emitChangeEvent();
		}
	}

	// Called when the checkbox is blurred.
	// Needed to properly implement ControlValueAccessor.
	onTouched: () => any = () => {};

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

	emitChangeEvent() {
		let event = new CheckboxChange();
		event.source = this;
		event.checked = this.checked;

		this.propagateChange(this.checked);
		this.change.emit(event);
	}

	ngAfterViewInit() {
		if (this.indeterminate) {
			this.inputCheckbox.nativeElement.indeterminate = true;
			this.checked = false;
		}
	}

	// method set in registerOnChange to propagate changes back to the form
	propagateChange = (_: any) => {};
}
