import {
	ChangeDetectorRef,
	Component,
	ElementRef,
	Input,
	OnInit,
	Optional,
	Renderer2,
	HostBinding,
	AfterContentInit
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { CheckboxComponent } from "../checkbox/checkbox.component";
import { RadioGroup } from "./radio-group.component";

/**
 * class: RadioComponent (extends CheckboxComponent)
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
 * @class RadioComponent
 * @extends {CheckboxComponent}
 * @implements {OnInit}
 */
@Component({
	selector: "ibm-radio",
	template: `
		<input
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
		<label
			class="bx--radio-button__label"
			[for]="id">
			<span class="bx--radio-button__appearance"></span>
			<ng-content></ng-content>
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
	 * set to true if the `RadioComponent` needs a tabIndex of 0.
	 * @type {RadioGroup}
	 * @memberof RadioComponent
	 */
	needsToBeFocusable: boolean;
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

			setTimeout(() => {
				if (this.radioGroup.radios &&
					!this.radioGroup.radios.some(radio => radio.checked) &&
					this.radioGroup.radios.first === this) {
					this.needsToBeFocusable = true;
				}
			}, 0);
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
		this.radioGroup.radios.first.needsToBeFocusable = false;
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
}
