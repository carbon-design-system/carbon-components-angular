import {
	Component,
	Input,
	HostBinding,
	Output,
	EventEmitter
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { RadioChange } from "./radio-change.class";

/**
 * class: Radio (extends Checkbox)
 *
 * selector: `n-radio`
 *
 * source: `src/forms/radio.component.ts`
 *
 * ```html
 *	<cds-radio [(ngModel)]="radioState">Radio</cds-radio>
 * ```
 *
 * Also see: [`RadioGroup`](#cds-radio-group)
 */
@Component({
	selector: "cds-radio, ibm-radio",
	template: `
		<input
			*ngIf="!skeleton"
			class="cds--radio-button"
			type="radio"
			[checked]="checked"
			[disabled]="disabled || disabledFromGroup"
			[name]="name"
			[id]="id"
			[required]="required"
			[attr.value]="value"
			[attr.aria-labelledby]="ariaLabelledby"
			(change)="onChange($event)"
			(click)="onClick($event)">
		<div *ngIf="skeleton" class="cds--radio-button cds--skeleton"></div>
		<label
			class="cds--radio-button__label"
			[attr.aria-label]="ariaLabel"
			[ngClass]="{
				'cds--skeleton': skeleton
			}"
			[for]="id"
			id="label-{{id}}">
			<span class="cds--radio-button__appearance"></span>
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

	@Input() labelPlacement: "right" | "left" =  "right";

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
	 * Used to set the `aria-label` attribute on the input label.
	 */
	@Input() ariaLabel: string;

	/**
	 * Sets the HTML required attribute
	 */
	@Input() required = false;
	/**
	 * The value of the `Radio`.
	 */
	@Input() value;
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

	@HostBinding("class.cds--radio-button-wrapper") hostClass = true;

	@HostBinding("class.cds--radio-button-wrapper--label-left") get labelLeft() {
		return this.labelPlacement === "left";
	}

	/**
	 * Reflects whether or not the input is disabled at `RadioGroup` level.
	 */
	disabledFromGroup = false;

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
	}

	onClick(event: Event) {
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

	setDisabledFromGroup(disabled: boolean) {
		this.disabledFromGroup = disabled;
	}
}
