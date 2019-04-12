import {
	ChangeDetectorRef,
	Component,
	ElementRef,
	Input,
	OnInit,
	Optional,
	Renderer2,
	HostBinding,
	Output,
	EventEmitter
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { Checkbox } from "../checkbox/checkbox.component";
import { RadioGroup, RadioChange } from "./radio-group.component";

/**
 * class: Radio (extends Checkbox)
 *
 * selector: `n-radio`
 *
 * source: `src/forms/radio.component.ts`
 *
 * ```html
 * <ibm-radio [(ngModel)]="radioState">Radio</ibm-radio>
 * ```
 *
 * Also see: [`RadioGroup`](#ibm-radio-group)
 *
 * @export
 * @class Radio
 * @extends {Checkbox}
 * @implements {OnInit}
 */
@Component({
	selector: "ibm-radio",
	template: `
		<input
			*ngIf="!skeleton"
			class="bx--radio-button"
			type="radio"
			[checked]="checked"
			[disabled]="disabled"
			[name]="name"
			[id]="id"
			[required]="required"
			[value]="value"
			[attr.aria-labelledby]="ariaLabelledby"
			(change)="onChange($event)">
		<div *ngIf="skeleton" class="bx--radio-button bx--skeleton"></div>
		<label
			class="bx--radio-button__label"
			[ngClass]="{
				'bx--skeleton': skeleton
			}"
			[for]="id"
			id="label-{{id}}">
			<span class="bx--radio-button__appearance"></span>
			<ng-content></ng-content>
		</label>
	`,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: Radio,
			multi: true
		}
	]
})
export class Radio {
	/**
	 * Used to dynamically create unique ids for the `Radio`.
	 */
	static radioCount = 0;

	@Input() checked = false;

	@Input() name = "";

	@Input() disabled = false;

	@Input() set ariaLabelledby(value: string) {
		this._labelledby = value;
	}

	get ariaLabelledby() {
		if (this._labelledby) {
			return this._labelledby;
		}
		return `label-${this.id}`;
	}
	/**
	 * Sets the HTML required attribute
	 */
	@Input() required = false;
	/**
	 * The value of the `Radio`.
	 */
	@Input() value = "";
	/**
	 * Set to `true` for a loading table.
	 */
	@Input() skeleton = false;
	/**
	 * The id for the `Radio`.
	 */
	@Input() id = `radio-${Radio.radioCount++}`;
	/**
	 * emits when the state of the radio changes
	 */
	@Output() change = new EventEmitter<RadioChange>();
	/**
	 * Binds 'radio' value to the role attribute for `Radio`.
	 */
	@HostBinding("attr.role") role = "radio";

	protected _labelledby = "";

	/**
	 * Handler provided by the `RadioGroup` to bubble events up
	 */
	radioChangeHandler = (event: RadioChange) => {};

	/**
	 * Synchronizes with the `RadioGroup` in the event of a changed `Radio`.
	 * Emits the changes of both the `RadioGroup` and `Radio`.
	 */
	onChange(event: Event) {
		event.stopPropagation();
		this.checked = (event.target as HTMLInputElement).checked;
		const radioEvent = new RadioChange(this, this.value);
		this.change.emit(radioEvent);
		this.radioChangeHandler(radioEvent);
	}

	/**
	 * Method called by `RadioGroup` with a callback function to bubble `RadioChange` events
	 * @param fn callback that expects a `RadioChange` as an argument
	 */
	registerRadioChangeHandler(fn: (event: RadioChange) => void) {
		this.radioChangeHandler = fn;
	}
}
