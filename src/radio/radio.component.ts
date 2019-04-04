import {
	ChangeDetectorRef,
	Component,
	ElementRef,
	Input,
	OnInit,
	Optional,
	Renderer2,
	HostBinding
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { Checkbox } from "../checkbox/checkbox.component";
import { RadioGroup } from "./radio-group.component";

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
			#inputCheckbox
			[checked]="checked"
			[disabled]="disabled"
			[name]="name"
			[id]="id"
			[required]="required"
			[value]="value"
			[attr.aria-label]="ariaLabel"
			[attr.aria-labelledby]="ariaLabelledby"
			(change)="onChange($event)"
			(click)="onClick($event)"
			[tabindex]="(checked || needsToBeFocusable ? 0 : -1)">
		<div *ngIf="skeleton" class="bx--radio-button bx--skeleton"></div>
		<label
			class="bx--radio-button__label"
			[ngClass]="{
				'bx--skeleton': skeleton
			}"
			[for]="id">
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
export class Radio extends Checkbox implements OnInit {
	/**
	 * Used to dynamically create unique ids for the `Radio`.
	 * @static
	 * @memberof Radio
	 */
	static radioCount = 0;

	/**
	 * Set to `true` for a loading table.
	 */
	@Input() skeleton = false;
	/**
	 * Returns the value/state of the `Radio`.
	 * @readonly
	 * @type {any}
	 * @returns {any}
	 * @memberof Radio
	 */
	@Input()
	get value(): any {
		return this._value;
	}

	/**
	 * Replaces `@Input value` with the provided parameter supplied from the parent.
	 * @param {any} value
	 * @memberof Radio
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

	/**
	 * Binds 'radio' value to the role attribute for `Radio`.
	 * @memberof Radio
	 */
	@HostBinding("attr.role") role = "radio";

	@HostBinding("class.bx--checkbox-wrapper") get checkboxWrapperClass() {
		return false;
	}
	@HostBinding("class.bx--form-item") get formItemClass() {
		return false;
	}

	/**
	 * The id for the `Radio`.
	 * @type {string}
	 * @memberof Radio
	 */
	id = `radio-${Radio.radioCount}`;
	/**
	 * The radio group that this `Radio` belongs to (if any).
	 * @type {RadioGroup}
	 * @memberof Radio
	 */
	radioGroup: RadioGroup;
	/**
	 * set to true if the `Radio` needs a tabIndex of 0.
	 * @type {RadioGroup}
	 * @memberof Radio
	 */
	needsToBeFocusable: boolean;
	/**
	 * The value of the `Radio`.
	 * @type {any}
	 * @memberof Radio
	 */
	_value: any = null;

	/**
	 * Creates an instance of Radio.
	 * @param {RadioGroup} radioGroup
	 * @param {ChangeDetectorRef} changeDetectorRef
	 * @param {ElementRef} elementRef
	 * @param {Renderer2} renderer
	 * @memberof Radio
	 */
	constructor(@Optional() radioGroup: RadioGroup,
				public changeDetectorRef: ChangeDetectorRef, protected elementRef: ElementRef, protected renderer: Renderer2) {
		super(changeDetectorRef);
		Radio.radioCount++;
		this.radioGroup = radioGroup;
	}

	/**
	 * If the component has an encompassing `RadioGroup` it synchronizes the name with that
	 * of the group.
	 * @memberof Radio
	 */
	ngOnInit() {
		if (this.radioGroup) {
			// if in group check if it needs checked and use group name
			this.checked = this.radioGroup.value === this._value;
			this.name = this.radioGroup.name;
		}
	}

	/**
	 * Handles the event of a mouse click on the `Radio`.
	 * @param {Event} event
	 * @memberof Radio
	 */
	onClick(event: Event) {
		event.stopPropagation();
	}

	/**
	 * Synchronizes with the `RadioGroup` in the event of a changed `Radio`.
	 * Emits the changes of both the `RadioGroup` and `Radio`.
	 * @param {Event} event
	 * @memberof Radio
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
	 * @memberof Radio
	 */
	markForCheck() {
		this.changeDetectorRef.markForCheck();
	}
}
