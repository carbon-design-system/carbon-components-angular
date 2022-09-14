import { Checkbox } from "carbon-components-angular/checkbox";
import {
	ChangeDetectorRef,
	Component,
	Input,
	Output,
	EventEmitter,
	TemplateRef,
	HostBinding
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

import { I18n, Overridable } from "carbon-components-angular/i18n";
import { Observable } from "rxjs";

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
 *
 * @deprecated since v4
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
 * [See demo](../../?path=/story/components-toggle--basic)
 *
 * ```html
 * <ibm-toggle [(ngModel)]="toggleState">Toggle</ibm-toggle>
 * ```
 *
 * <example-url>../../iframe.html?id=components-toggle--basic</example-url>
 */
@Component({
	selector: "ibm-toggle",
	template: `
		<label
			*ngIf="label"
			[id]="ariaLabelledby"
			class="bx--label"
			[ngClass]="{'bx--label--disabled': disabled}">
			<ng-container *ngIf="!isTemplate(label)">{{label}}</ng-container>
			<ng-template *ngIf="isTemplate(label)" [ngTemplateOutlet]="label"></ng-template>
		</label>
		<input
			class="bx--toggle-input"
			type="checkbox"
			[ngClass]="{
				'bx--toggle-input--small': size === 'sm',
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
			(click)="onClick($event)"
			(keyup.enter)="onClick($event)">
		<label
			class="bx--toggle-input__label"
			[for]="id"
			[ngClass]="{
				'bx--skeleton': skeleton
			}">
			<span class="bx--toggle__switch">
				<span class="bx--toggle__text--off">{{(!skeleton ? getOffText() : null) | async }}</span>
				<span class="bx--toggle__text--on">{{(!skeleton ? getOnText() : null) | async}}</span>
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
	 */
	static toggleCount = 0;

	/**
	 * Text that is set on the left side of the toggle.
	 */
	@Input()
	set offText(value: string | Observable<string>) {
		this._offValues.override(value);
	}

	get offText() {
		return this._offValues.value;
	}

	/**
	 * Text that is set on the right side of the toggle.
	 */
	@Input()
	set onText(value: string | Observable<string>) {
		this._onValues.override(value);
	}

	get onText() {
		return this._onValues.value;
	}
	/**
	 * Text that is set as the label of the toggle.
	 */
	@Input() label: string | TemplateRef<any>;
	/**
	 * Size of the toggle component.
	 */
	@Input() size: "sm" | "md" = "md";
	/**
	 * Set to `true` for a loading toggle.
	 */
	@Input() skeleton = false;

	@HostBinding("class.bx--form-item") formItem = true;

	/**
	 * The unique id allocated to the `Toggle`.
	 */
	id = "toggle-" + Toggle.toggleCount;

	/**
	 * Emits event notifying other classes when a change in state occurs on a toggle after a
	 * click.
	 *
	 * @deprecated since v4
	 */
	@Output() change = new EventEmitter<ToggleChange>();

	protected _offValues = this.i18n.getOverridable("TOGGLE.OFF");
	protected _onValues = this.i18n.getOverridable("TOGGLE.ON");
	/**
	 * Creates an instance of Toggle.
	 */
	constructor(protected changeDetectorRef: ChangeDetectorRef, protected i18n: I18n) {
		super(changeDetectorRef);
		Toggle.toggleCount++;
	}

	/**
	 * `ControlValueAccessor` method to programmatically disable the toggle input.
	 *
	 * ex: `this.formGroup.get("myToggle").disable();`
	 *
	 * @param isDisabled `true` to disable the input
	 */
	setDisabledState(isDisabled: boolean) {
		this.disabled = isDisabled;
	}

	getOffText(): Observable<string> {
		return this._offValues.subject;
	}

	getOnText(): Observable<string> {
		return this._onValues.subject;
	}

	/**
	 * Creates instance of `ToggleChange` used to propagate the change event.
	 */
	emitChangeEvent() {
		/* begin deprecation */
		let event = new ToggleChange();
		event.source = this;
		event.checked = this.checked;
		this.change.emit(event);
		/* end deprecation */

		this.checkedChange.emit(this.checked);
		this.propagateChange(this.checked);
	}

	public isTemplate(value) {
		return value instanceof TemplateRef;
	}
}
