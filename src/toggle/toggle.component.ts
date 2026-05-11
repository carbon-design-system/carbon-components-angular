import {
	ChangeDetectorRef,
	Component,
	EventEmitter,
	HostBinding,
	HostListener,
	Input,
	Output,
	TemplateRef
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

import { I18n } from "carbon-components-angular/i18n";
import { Observable } from "rxjs";
import { NgClass, NgTemplateOutlet, AsyncPipe } from "@angular/common";

/**
 * Get started with importing the component:
 *
 * ```typescript
 * import { Toggle } from 'carbon-components-angular';
 * ```
 *
 * ```html
 * <cds-toggle [(ngModel)]="toggleState">Toggle</cds-toggle>
 * ```
 *
 * [See demo](../../?path=/story/components-toggle--basic)
 */
@Component({
	selector: "cds-toggle, ibm-toggle",
	template: `
		@if (skeleton) {
			<div class="cds--toggle__skeleton-circle"></div>
			<div class="cds--toggle__skeleton-rectangle"></div>
		} @else {
			<button
				class="cds--toggle__button"
				[disabled]="disabled"
				[id]="id"
				role="switch"
				type="button"
				[attr.aria-checked]="checked"
				(click)="onClick($event)"
				[attr.aria-label]="ariaLabel">
			</button>
			<label
				class="cds--toggle__label"
				[for]="id">
				<span
					class="cds--toggle__label-text"
					[ngClass]="{
						'cds--visually-hidden': hideLabel
					}">
					@if (isTemplate(label)) {
						<ng-template [ngTemplateOutlet]="label" />
					} @else {
						{{label}}
					}
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
						@if (size === 'sm') {
							<svg
								class='cds--toggle__check'
								width="6px"
								height="5px"
								viewBox="0 0 6 5">
								<path d="M2.2 2.7L5 0 6 1 2.2 5 0 2.7 1 1.5z" />
							</svg>
						}
					</div>
					<span class="cds--toggle__text">
						{{(hideLabel ? label : (getCheckedText() | async))}}
					</span>
				</div>
			</label>
		}
	`,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: Toggle,
			multi: true
		}
	],
	imports: [NgClass, NgTemplateOutlet, AsyncPipe]
})
export class Toggle implements ControlValueAccessor {
	/**
	 * Variable used for creating unique ids for toggle components.
	 */
	static toggleCount = 0;

	/**
	 * Set to `true` for a disabled toggle.
	 */
	@Input() disabled = false;

	/**
	 * Sets the `checked` state. `true` for on, `false` for off.
	 * Allows double binding with the `checkedChange` Output.
	 */
	@Input()
	set checked(checked: boolean) {
		this.setChecked(!!checked);
	}

	get checked() {
		return this._checked;
	}

	/**
	 * Emits an event when the value of the toggle changes.
	 * Allows double binding with the `checked` Input.
	 */
	@Output() checkedChange = new EventEmitter<boolean>();

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

	/**
	 * Set `aria-label` property for the button when label is empty
	 */
	@Input() ariaLabel: string;

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

	protected _checked = false;

	protected _offValues = this.i18n.getOverridable("TOGGLE.OFF");
	protected _onValues = this.i18n.getOverridable("TOGGLE.ON");
	/**
	 * Creates an instance of Toggle.
	 */
	constructor(
		protected changeDetectorRef: ChangeDetectorRef,
		protected i18n: I18n
	) {
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
		this.changeDetectorRef.markForCheck();
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
	 * Creates instance used to propagate the change event.
	 */
	emitChangeEvent() {
		this.checkedChange.emit(this.checked);
		this.propagateChange(this.checked);
	}

	public isTemplate(value) {
		return value instanceof TemplateRef;
	}

	/**
	 * Writes a value from `ngModel` to the component.
	 *
	 * @param value boolean, corresponds to the `checked` property.
	 */
	public writeValue(value: unknown) {
		this.setChecked(!!value);
	}

	public registerOnChange(fn: (value: boolean) => void) {
		this.propagateChange = fn;
	}

	public registerOnTouched(fn: () => void) {
		this.onTouched = fn;
	}

	onClick(event: Event) {
		event.stopPropagation();
		if (this.disabled) {
			return;
		}
		this.setChecked(!this._checked);
		this.emitChangeEvent();
	}

	@HostListener("focusout")
	focusOut() {
		this.onTouched();
	}

	onTouched: () => void = () => {};

	propagateChange: (value: boolean) => void = () => {};

	private setChecked(checked: boolean) {
		if (checked === this._checked) {
			return;
		}
		this._checked = checked;
		this.changeDetectorRef.markForCheck();
	}
}
