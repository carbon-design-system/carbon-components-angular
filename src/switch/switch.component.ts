import { CheckboxComponent } from "../checkbox/checkbox.component";
import {
	ChangeDetectorRef,
	Component,
	Input
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";


/**
 * Deprecated in favour of `ToggleState` (to be removed in v3.0).
 * Defines the set of states for a switch component.
 * @export
 * @enum {number}
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
 * @export
 * @class SwitchChange
 * @deprecated
 */
export class SwitchChange {
	/**
	 * Contains the `SwitchComponent` that has been changed.
	 * @type {SwitchComponent}
	 * @memberof SwitchChange
	 */
	source: SwitchComponent;
	/**
	 * The state of the `SwitchComponent` encompassed in the `SwitchChange` class.
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
 * @export
 * @class SwitchComponent
 * @extends {CheckboxComponent}
 * @implements {OnInit}
 * @deprecated
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
			useExisting: SwitchComponent,
			multi: true
		}
	]
})
export class SwitchComponent extends CheckboxComponent {
	/**
	 * Variable used for creating unique ids for switch components.
	 * @type {number}
	 * @static
	 * @memberof SwitchComponent
	 */
	static switchCount = 0;

	/**
	 * Size of the switch component.
	 * (size `"default"` is being deprecated as of neutrino v1.2.0, please use `"md"` instead)
	 * @type {("sm" | "md" | "default")}
	 * @memberof SwitchComponent
	 */
	@Input() size: "sm" | "md" | "default" = "md";

	/**
	 * The unique id allocated to the `SwitchComponent`.
	 * @type {string}
	 * @memberof SwitchComponent
	 */
	id = "switch-" + SwitchComponent.switchCount;

	/**
	 * Creates an instance of SwitchComponent.
	 * @param {ChangeDetectorRef} changeDetectorRef
	 * @memberof SwitchComponent
	 */
	constructor(protected changeDetectorRef: ChangeDetectorRef) {
		super(changeDetectorRef);
		SwitchComponent.switchCount++;
	}
}
