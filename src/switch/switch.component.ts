import { Checkbox } from "../checkbox/checkbox.component";
import {
	ChangeDetectorRef,
	Component,
	Input
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";


/**
 * Defines the set of states for a switch component.
 * @export
 * @enum {number}
 */
export enum SwitchState {
	Init,
	Indeterminate,
	Checked,
	Unchecked
}

/**
 * Used to emit changes performed on switch components.
 * @export
 * @class SwitchChange
 */
export class SwitchChange {
	/**
	 * Contains the `Switch` that has been changed.
	 * @type {Switch}
	 * @memberof SwitchChange
	 */
	source: Switch;
	/**
	 * The state of the `Switch` encompassed in the `SwitchChange` class.
	 * @type {boolean}
	 * @memberof SwitchChange
	 */
	checked: boolean;
}

/**
 * ```html
 * <ibm-switch [(ngModel)]="switchState">Switch</ibm-switch>
 * ```
 * @export
 * @class Switch
 * @extends {Checkbox}
 * @implements {OnInit}
 */
@Component({
	selector: "ibm-switch",
	template: `
		<input
			class="bx--toggle"
			[ngClass]="{
				'bx--toggle--small': size === 'sm'
			}"
			[id]="id"
			type="checkbox"
			(click)="onClick($event)"
			[disabled]="disabled"
			[attr.aria-checked]="checked">
		<label *ngIf="size === 'md'" class="bx--toggle__label" [for]="id">
			<span class="bx--toggle__text--left">Off</span>
			<span class="bx--toggle__appearance"></span>
			<span class="bx--toggle__text--right">On</span>
		</label>
		<label *ngIf="size === 'sm'" class="bx--toggle__label" [for]="id">
			<span class="bx--toggle__appearance">
				<svg class="bx--toggle__check" width="6px" height="5px" viewBox="0 0 6 5">
					<path d="M2.2 2.7L5 0 6 1 2.2 5 0 2.7 1 1.5z"/>
				</svg>
			</span>
		</label>
	`,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: Switch,
			multi: true
		}
	]
})
export class Switch extends Checkbox {
	/**
	 * Variable used for creating unique ids for switch components.
	 * @type {number}
	 * @static
	 * @memberof Switch
	 */
	static switchCount = 0;

	/**
	 * Size of the switch component.
	 * (size `"default"` is being deprecated as of neutrino v1.2.0, please use `"md"` instead)
	 * @type {("sm" | "md" | "default")}
	 * @memberof Switch
	 */
	@Input() size: "sm" | "md" | "default" = "md";

	/**
	 * The unique id allocated to the `Switch`.
	 * @type {string}
	 * @memberof Switch
	 */
	id = "switch-" + Switch.switchCount;

	/**
	 * Creates an instance of Switch.
	 * @param {ChangeDetectorRef} changeDetectorRef
	 * @memberof Switch
	 */
	constructor(protected changeDetectorRef: ChangeDetectorRef) {
		super(changeDetectorRef);
		Switch.switchCount++;
	}
}
