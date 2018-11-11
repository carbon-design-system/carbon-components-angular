import { Checkbox } from "../checkbox/checkbox.component";
import {
	ChangeDetectorRef,
	Component,
	Input
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";


/**
 * Deprecated in favour of `ToggleState` (to be removed in v3.0).
 * Defines the set of states for a switch component.
 * @deprecated
 */
export enum SwitchState {
	Init,
	Indeterminate,
	Checked,
	Unchecked
}

/**
 * Deprecated in favour of `ToggleChange` (to be removed in v3.0).
 * Used to emit changes performed on switch components.
 * @deprecated
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
 * Deprecated in favour of `Toggle` (to be removed in v3.0).
 * ```html
 * <ibm-switch [(ngModel)]="switchState">Switch</ibm-switch>
 * ```
 * @deprecated
 */
@Component({
	selector: "ibm-switch",
	template: `
		<input
			class="bx--toggle"
			type="checkbox"
			[ngClass]="{
				'bx--toggle--small': size === 'sm'
			}"
			[id]="id"
			[value]="value"
			[name]="name"
			[required]="required"
			[checked]="checked"
			[disabled]="disabled"
			[attr.aria-checked]="checked"
			(change)="onChange($event)"
			(click)="onClick($event)">
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
	 */
	static switchCount = 0;

	/**
	 * Size of the switch component.
	 */
	@Input() size: "sm" | "md" = "md";

	/**
	 * The unique id allocated to the `Switch`.
	 */
	id = "switch-" + Switch.switchCount;

	/**
	 * Creates an instance of Switch.
	 */
	constructor(protected changeDetectorRef: ChangeDetectorRef) {
		super(changeDetectorRef);
		Switch.switchCount++;

		console.warn("`ibm-switch` has been deprecated in favour of `ibm-toggle`");
	}
}
