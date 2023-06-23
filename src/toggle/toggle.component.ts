import { Checkbox } from "carbon-components-angular/checkbox";
import {
	ChangeDetectorRef,
	Component,
	Input,
	HostBinding,
	TemplateRef
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

import { I18n } from "carbon-components-angular/i18n";
import { Observable } from "rxjs";

/**
 * Defines the set of states for a toggle component.
 */
export enum ToggleState {
	Init,
	Checked,
	Unchecked
}

/**
 * [See demo](../../?path=/story/components-toggle--basic)
 *
 * ```html
 * <cds-toggle [(ngModel)]="toggleState">Toggle</cds-toggle>
 * ```
 */
@Component({
	selector: "cds-toggle, ibm-toggle",
	template: `
		<ng-container *ngIf="!skeleton; else skeletonTemplate;">
			<button
				class="cds--toggle__button"
				[disabled]="disabled"
				[id]="id"
				role="switch"
				type="button"
				[attr.aria-checked]="checked"
				(click)="onClick($event)">
			</button>
			<label
				class="cds--toggle__label"
				[for]="id">
				<span
					class="cds--toggle__label-text"
					[ngClass]="{
						'cds--visually-hidden': hideLabel
					}">
					<ng-container *ngIf="!isTemplate(label)">{{label}}</ng-container>
					<ng-template *ngIf="isTemplate(label)" [ngTemplateOutlet]="label"></ng-template>
				</span>
				<div
					class="cds--toggle__appearance"
					[ngClass]="{
						'cds--toggle__appearance--sm': size === 'sm'
					}">
					<div
						class="cds--toggle__switch"
						[ngClass]="{
							'cds--toggle__switch--checked': checked
						}">
						<svg
							*ngIf="size === 'sm'"
							class='cds--toggle__check'
							width="6px"
							height="5px"
							viewBox="0 0 6 5">
							<path d="M2.2 2.7L5 0 6 1 2.2 5 0 2.7 1 1.5z" />
						</svg>
					</div>
					<span class="cds--toggle__text">
						{{(hideLabel ? label : (getCheckedText() | async))}}
					</span>
				</div>
			</label>
		</ng-container>
		<ng-template #skeletonTemplate>
			<div class="cds--toggle__skeleton-circle"></div>
			<div class="cds--toggle__skeleton-rectangle"></div>
		</ng-template>
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
	 * Set to `true` to hide the toggle label & set toggle on/off text to label.
	 */
	@Input() hideLabel = false;

	@HostBinding("class.cds--toggle--skeleton") @Input() skeleton = false;

	@HostBinding("class.cds--toggle") toggleClass = true;
	@HostBinding("class.cds--toggle--disabled") get disabledClass () {
		return this.disabled;
	}

	@HostBinding("class.cds--form-item") get formItem() {
		return !this.skeleton;
	}

	/**
	 * The unique id allocated to the `Toggle`.
	 */
	id = "toggle-" + Toggle.toggleCount;

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

	getCheckedText(): Observable<string> {
		if (this.checked) {
			return this._onValues.subject;
		}
		return this._offValues.subject;
	}

	/**
	 * Creates instance of `ToggleChange` used to propagate the change event.
	 */
	emitChangeEvent() {
		this.checkedChange.emit(this.checked);
		this.propagateChange(this.checked);
	}

	public isTemplate(value) {
		return value instanceof TemplateRef;
	}
}
