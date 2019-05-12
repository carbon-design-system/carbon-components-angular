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
 */
export enum ToggleState {
	Init,
	Indeterminate,
	Checked,
	Unchecked
}

/**
 * Used to emit changes performed on toggle components.
 */
export class ToggleChange {
	/**
	 * Contains the `Toggle` that has been changed.
	 */
	source: Toggle;
	/**
	 * The state of the `Toggle` encompassed in the `ToggleChange` class.
	 */
	checked: boolean;
}

/**
 * demo: [https://angular.carbondesignsystem.com/?path=/story/toggle--basic](../../?path=/story/toggle--basic)
 *
 * ```html
 * <ibm-toggle [(ngModel)]="toggleState">Toggle</ibm-toggle>
 * ```
 *
 * <example-url>../../iframe.html?id=toggle--basic</example-url>
 *
 * @export
 * @class Toggle
 * @extends {Checkbox}
 */
@Component({
	selector: "ibm-toggle",
	template: `
		<div *ngIf="label" class="bx--label" [id]="ariaLabelledby">{{label}}</div>
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
			[attr.aria-labelledby]="ariaLabelledby"
			[attr.aria-checked]="checked"
			(change)="onChange($event)"
			(click)="onClick($event)">
		<label
			class="bx--toggle__label"
			[for]="id"
			[ngClass]="{
				'bx--skeleton': skeleton
			}">
			<span class="bx--toggle__text--left">{{(!skeleton ? offText : null) | async }}</span>
			<span class="bx--toggle__appearance">
				<svg *ngIf="size === 'sm'" class="bx--toggle__check" width="6px" height="5px" viewBox="0 0 6 5">
					<path d="M2.2 2.7L5 0 6 1 2.2 5 0 2.7 1 1.5z"/>
				</svg>
			</span>
			<span class="bx--toggle__text--right">{{(!skeleton ? onText : null) | async}}</span>
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
	 */
	static toggleCount = 0;

	/**
	 * Text that is set on the left side of the toggle.
	 */
	@Input()
	set offText(value: string) {
		this._offText.next(value);
	}

	get offText() {
		return this._offText;
	}

	/**
	 * Text that is set on the right side of the toggle.
	 */
	@Input()
	set onText(value: string) {
		this._onText.next(value);
	}

	get onText() {
		return this._onText;
	}
	/**
	 * Text that is set as the label of the toggle.
	 * @type {(string)}
	 */
	@Input() label: string;
	/**
	 * Size of the toggle component.
	 */
	@Input() size: "sm" | "md" = "md";
	/**
	 * Set to `true` for a loading toggle.
	 */
	@Input() skeleton = false;

	/**
	 * The unique id allocated to the `Toggle`.
	 */
	id = "toggle-" + Toggle.toggleCount;

	/**
	 * Emits event notifying other classes when a change in state occurs on a toggle after a
	 * click.
	 */
	@Output() change = new EventEmitter<ToggleChange>();

	protected _offText = this.i18n.get("TOGGLE.OFF");
	protected _onText = this.i18n.get("TOGGLE.ON");
	/**
	 * Creates an instance of Toggle.
	 */
	constructor(protected changeDetectorRef: ChangeDetectorRef, protected i18n: I18n) {
		super(changeDetectorRef);
		Toggle.toggleCount++;
	}

	/**
	 * Creates instance of `ToggleChange` used to propagate the change event.
	 */
	emitChangeEvent() {
		let event = new ToggleChange();
		event.source = this;
		event.checked = this.checked;

		this.propagateChange(this.checked);
		this.change.emit(event);
	}
}
