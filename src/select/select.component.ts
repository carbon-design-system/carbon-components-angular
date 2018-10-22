import {
	Component,
	Input,
	Output,
	ViewChild,
	ElementRef,
	HostListener,
	EventEmitter
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
	selector: "ibm-select",
	template: `
		<div class="bx--form-item">
			<div class="bx--select">
				<label [attr.for]="id" class="bx--label">{{label}}</label>
				<select
					#select
					[attr.id]="id"
					[disabled]="disabled"
					(change)="onChange($event)"
					class="bx--select-input">
					<ng-content></ng-content>
				</select>
				<svg class="bx--select__arrow" width="10" height="5" viewBox="0 0 10 5">
				<path d="M0 0l5 4.998L10 0z" fill-rule="evenodd" />
				</svg>
			</div>
		</div>
	`,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: Select,
			multi: true
		}
	]
})
export class Select implements ControlValueAccessor {
	static selectCount = 0;
	@Input() label = "Select label";
	@Input() id = `select-${Select.selectCount++}`;
	@Input() disabled = false;

	@Output() change = new EventEmitter();

	@ViewChild("select") select: ElementRef;

	private onChangeHandler;
	private onTouchedHandler;

	get value() {
		return this.select.nativeElement.value;
	}

	set value(v) {
		this.select.nativeElement.value = v;
	}

	writeValue(obj: any) {
		this.select.nativeElement.value = obj;
	}

	registerOnChange(fn: any) {
		this.onChangeHandler = fn;
	}

	registerOnTouched(fn: any) {
		this.onTouchedHandler = fn;
	}

	setDisabledState(isDisabled: boolean) {
		this.disabled = isDisabled;
	}

	onChange(event) {
		this.onChangeHandler(event.target.value);
		this.change.emit(event);
	}

	@HostListener("blur")
	private blur() {
		this.onTouchedHandler();
	}
}
