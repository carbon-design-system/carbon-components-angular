import { Checkbox } from "../checkbox/checkbox.component";
import {
	ChangeDetectorRef,
	Component,
	Input,
	Output,
	EventEmitter
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

import { I18n } from "../i18n/i18n.module";

/**
 * Defines the set of states for a toggle component.
 * @export
 * @enum {number}
 */
export enum ToggleState {
	Init,
	Indeterminate,
	Checked,
	Unchecked
}

/**
 * Used to emit changes performed on toggle components.
 * @export
 * @class ToggleChange
 */
export class ToggleChange {
	/**
	 * Contains the `Toggle` that has been changed.
	 * @type {Toggle}
	 * @memberof ToggleChange
	 */
	source: Toggle;
	/**
	 * The state of the `Toggle` encompassed in the `ToggleChange` class.
	 * @type {boolean}
	 * @memberof ToggleChange
	 */
	checked: boolean;
}

/**
 * ```html
 * <ibm-toggle [(ngModel)]="toggleState">Toggle</ibm-toggle>
 * ```
 * @export
 * @class Toggle
 * @extends {Checkbox}
 * @implements {OnInit}
 */
@Component({
	selector: "ibm-toggle",
	template: `
		<input
			class="bx--toggle"
			type="checkbox"
			[ngClass]="{
				'bx--toggle--small': size === 'sm',
				'bx--skeleton': skeleton
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
		<label
			*ngIf="size === 'md'"
			class="bx--toggle__label"
			[for]="id"
			[ngClass]="{
				'bx--skeleton': skeleton
			}">
			<span class="bx--toggle__text--left">{{!skeleton ? leftText : null}}</span>
			<span class="bx--toggle__appearance"></span>
			<span class="bx--toggle__text--right">{{!skeleton ? rightText : null}}</span>
		</label>

		<label
			*ngIf="size === 'sm'"
			class="bx--toggle__label"
			[for]="id"
			[ngClass]="{
				'bx--skeleton': skeleton
			}">
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
			useExisting: Toggle,
			multi: true
		}
	]
})
export class Toggle extends Checkbox {
	/**
	 * Variable used for creating unique ids for toggle components.
	 * @type {number}
	 * @static
	 * @memberof Toggle
	 */
	static toggleCount = 0;

	/**
	 * Text that is set on the left side of the toggle.
	 * @type {(string)}
	 * @memberof Toggle
	 */
	@Input() leftText = this.i18n.get().TOGGLE.LEFTTEXT;
	/**
	 * Text that is set on the right side of the toggle.
	 * @type {(string)}
	 * @memberof Toggle
	 */
	@Input() rightText = this.i18n.get().TOGGLE.RIGHTTEXT;
	/**
	 * Size of the toggle component.
	 * @type {("sm" | "md" | "default")}
	 * @memberof Toggle
	 */
	@Input() size: "sm" | "md" = "md";
	/**
	 * Set to `true` for a loading toggle.
	 * @type {(boolean)}
	 * @memberof Toggle
	 */
	@Input() skeleton = false;

	/**
	 * The unique id allocated to the `Toggle`.
	 * @type {string}
	 * @memberof Toggle
	 */
	id = "toggle-" + Toggle.toggleCount;

	/**
	 * Emits event notifying other classes when a change in state occurs on a toggle after a
	 * click.
	 */
	@Output() change = new EventEmitter<ToggleChange>();

	/**
	 * Creates an instance of Toggle.
	 * @param {ChangeDetectorRef} changeDetectorRef
	 * @memberof Toggle
	 */
	constructor(protected changeDetectorRef: ChangeDetectorRef, protected i18n: I18n) {
		super(changeDetectorRef);
		Toggle.toggleCount++;
	}

	/**
	 * Creates instance of `ToggleChange` used to propagate the change event.
	 * @memberof To
	 */
	emitChangeEvent() {
		let event = new ToggleChange();
		event.source = this;
		event.checked = this.checked;

		this.propagateChange(this.checked);
		this.change.emit(event);
	}
}
