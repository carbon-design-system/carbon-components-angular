import {
	AfterViewInit,
	Component,
	ElementRef,
	Input,
	Output,
	HostListener,
	EventEmitter,
	TemplateRef,
	ViewChild
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { NgClass, NgTemplateOutlet } from "@angular/common";
import { IconDirective } from "carbon-components-angular/icon";

/**
 * `cds-select` provides a styled `select` component. Get started with importing the module:
 *
 * ```typescript
 * import { SelectModule } from 'carbon-components-angular';
 * ```
 *
 * ```html
 * <cds-select [(ngModel)]="model">
 * 	<option value="default" disabled selected hidden>Choose an option</option>
 * 	<option value="option1">Option 1</option>
 *	<option value="option2">Option 2</option>
 * 	<option value="option3">Option 3</option>
 * </cds-select>
 *	```
 *
 * [See demo](../../?path=/story/components-select--basic)
 */
@Component({
	selector: "cds-select, ibm-select",
	template: `
		<div
			[ngClass]="{
				'cds--form-item': !skeleton,
				'cds--select--fluid': fluid && !skeleton
			}">
			@if (skeleton && !fluid) {
				@if (label) {
					<div class="cds--label cds--skeleton"></div>
				}
				<div class="cds--select cds--skeleton"></div>
			}
			@if (skeleton && fluid) {
				<div class="cds--list-box__wrapper--fluid">
					<div class="cds--list-box cds--skeleton">
						<div class="cds--list-box__label"></div>
						<div class="cds--list-box__field"></div>
					</div>
				</div>
			}
			@if (!skeleton) {
				<div
					class="cds--select"
					[ngClass]="{
						'cds--select--inline': display === 'inline',
						'cds--select--light': theme === 'light',
						'cds--select--invalid': invalid,
						'cds--select--warning': warn,
						'cds--select--disabled': disabled,
						'cds--select--readonly': readonly,
						'cds--select--fluid--invalid': fluid && invalid,
						'cds--select--fluid--focus': fluid && focused
					}">
					@if (label) {
						<label
							[for]="id"
							class="cds--label"
							[ngClass]="{'cds--label--disabled': disabled}">
							@if (isTemplate(label)) {
								<ng-template [ngTemplateOutlet]="label" />
							} @else {
								{{label}}
							}
						</label>
					}
					@if (display === 'inline') {
						<div class="cds--select-input--inline__wrapper">
							<ng-container *ngTemplateOutlet="noInline"></ng-container>
						</div>
					} @else {
						<ng-container *ngTemplateOutlet="noInline"></ng-container>
					}
					@if (helperText && !invalid && !warn && !skeleton && !fluid) {
						<div
							class="cds--form__helper-text"
							[ngClass]="{
								'cds--form__helper-text--disabled': disabled
							}">
							@if (isTemplate(helperText)) {
								<ng-template [ngTemplateOutlet]="helperText" />
							} @else {
								{{helperText}}
							}
						</div>
					}
				</div>
			}
		</div>

		<!-- select element: dynamically projected based on 'display' variant -->
		<ng-template #noInline>
			<div class="cds--select-input__wrapper" [attr.data-invalid]="(invalid ? true : null)">
				<select
					#select
					[attr.id]="id"
					[attr.aria-label]="ariaLabel"
					[disabled]="disabled"
					(change)="onChange($event)"
					[attr.aria-invalid]="invalid ? 'true' : null"
					[attr.aria-readonly]="readonly ? 'true' : null"
					class="cds--select-input"
					[ngClass]="{
						'cds--select-input--sm': size === 'sm',
						'cds--select-input--md': size === 'md',
						'cds--select-input--lg': size === 'lg'
					}"
					(mousedown)="onMouseDown($event)"
					(keydown)="onKeyDown($event)"
					(focus)="fluid ? handleFocus($event) : null"
					(blur)="fluid ? handleFocus($event) : null">
					<ng-content />
				</select>
				<svg
					focusable="false"
					preserveAspectRatio="xMidYMid meet"
					style="will-change: transform;"
					xmlns="http://www.w3.org/2000/svg"
					class="cds--select__arrow"
					width="16"
					height="16"
					viewBox="0 0 16 16"
					aria-hidden="true">
					<path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path>
				</svg>
				@if (invalid) {
					<svg
						cdsIcon="warning--filled"
						size="16"
						class="cds--select__invalid-icon">
					</svg>
				} @else if (warn) {
					<svg
						cdsIcon="warning--alt--filled"
						size="16"
						class="cds--select__invalid-icon cds--select__invalid-icon--warning">
					</svg>
				}
				@if (fluid) {
					<hr class="cds--select__divider" />
					@if (invalid) {
						<div
							role="alert"
							class="cds--form-requirement"
							aria-live="polite">
							@if (isTemplate(invalidText)) {
								<ng-template [ngTemplateOutlet]="invalidText" />
							} @else {
								{{invalidText}}
							}
						</div>
					} @else if (warn) {
						<div class="cds--form-requirement">
							@if (isTemplate(warnText)) {
								<ng-template [ngTemplateOutlet]="warnText" />
							} @else {
								{{warnText}}
							}
						</div>
					}
				}
			</div>
			@if (!fluid) {
				@if (invalid) {
					<div
						role="alert"
						class="cds--form-requirement"
						aria-live="polite">
						@if (isTemplate(invalidText)) {
							<ng-template [ngTemplateOutlet]="invalidText" />
						} @else {
							{{invalidText}}
						}
					</div>
				} @else if (warn) {
					<div class="cds--form-requirement">
						@if (isTemplate(warnText)) {
							<ng-template [ngTemplateOutlet]="warnText" />
						} @else {
							{{warnText}}
						}
					</div>
				}
			}
		</ng-template>
	`,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: Select,
			multi: true
		}
	],
	standalone: true,
	imports: [NgClass, NgTemplateOutlet, IconDirective]
})
export class Select implements ControlValueAccessor, AfterViewInit {
	@Input() set value(v) {
		this._value = v;
		if (this.select) {
			this.select.nativeElement.value = this._value;
		}
	}

	get value() {
		return this._value;
	}

	/**
	 * Tracks the total number of selects instantiated. Used to generate unique IDs
	 */
	static selectCount = 0;

	/**
	 * `inline` or `default` select displays
	 */
	@Input() display: "inline" | "default" = "default";
	/**
	 * Label for the select. Appears above the input.
	 */
	@Input() label: string | TemplateRef<any>;
	/**
	 * Optional helper text that appears under the label.
	 */
	@Input() helperText: string | TemplateRef<any>;
	/**
	 * Sets the invalid text.
	 */
	@Input() invalidText: string | TemplateRef<any>;
	/**
	  * Set to `true` to show a warning (contents set by warningText)
	  */
	@Input() warn = false;
	/**
	 * Sets the warning text
	 */
	@Input() warnText: string | TemplateRef<any>;
	/**
	 * Sets the unique ID. Defaults to `select-${total count of selects instantiated}`
	 */
	@Input() id = `select-${Select.selectCount++}`;
	/**
	 * Number input field render size
	 */
	@Input() size: "sm" | "md" | "lg" = "md";
	/**
	 * Set to true to disable component.
	 */
	@Input() disabled = false;
	/**
	 * Set to true for a loading select.
	 */
	@Input() skeleton = false;
	/**
	 * Set to `true` for an invalid select component.
	 */
	@Input() invalid = false;
	/**
	 * Set to `true` for readonly state.
	 */
	@Input() readonly = false;

	/**
	 * @deprecated since v5 - Use `cdsLayer` directive instead
	 * `light` or `dark` select theme
	 */
	@Input() theme: "light" | "dark" = "dark";
	@Input() ariaLabel: string;

	/**
	 * Experimental: enable fluid state
	 */
	@Input() fluid = false;

	@Output() valueChange = new EventEmitter();

	@ViewChild("select") select: ElementRef;

	focused = false;

	protected _value;

	ngAfterViewInit() {
		if (
			this.value !== undefined &&
			this.value !== null &&
			this.select &&
			this.select.nativeElement.value !== this.value
		) {
			this.select.nativeElement.value = this.value;
		}
	}

	/**
	 * Receives a value from the model.
	 */
	writeValue(obj: any) {
		this.value = obj;
	}

	/**
	 * Registers a listener that notifies the model when the control updates
	 */
	registerOnChange(fn: any) {
		this.onChangeHandler = fn;
	}

	/**
	 * Registers a listener that notifies the model when the control is blurred
	 */
	registerOnTouched(fn: any) {
		this.onTouchedHandler = fn;
	}

	/**
	 * Sets the disabled state through the model
	 */
	setDisabledState(isDisabled: boolean) {
		this.disabled = isDisabled;
	}

	/**
	 * Handles the change event from the `select`.
	 * Sends events to the change handler and emits a `selected` event.
	 */
	onChange(event) {
		this.value = event.target.value;
		this.onChangeHandler(event.target.value);
		this.valueChange.emit(event.target.value);
	}

	/**
	 * Listens for the host blurring, and notifies the model
	 */
	@HostListener("focusout")
	focusOut() {
		this.onTouchedHandler();
	}

	public isTemplate(value) {
		return value instanceof TemplateRef;
	}

	onMouseDown(event: MouseEvent) {
		/**
		 * This prevents the select from opening with mouse
		 */
		if (this.readonly) {
			event.preventDefault();
			(event.target as HTMLElement).focus();
		}
	}

	onKeyDown(event: KeyboardEvent) {
		const selectAccessKeys = ["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight", " "];
		/**
		 * This prevents the select from opening for the above keys
		 */
		if (this.readonly && selectAccessKeys.includes(event.key)) {
			event.preventDefault();
		}
	}

	handleFocus(event: FocusEvent) {
		this.focused = event.type === "focus";
	}

	/**
	 * placeholder declarations. Replaced by the functions provided to `registerOnChange` and `registerOnTouched`
	 */
	protected onChangeHandler = (_: any) => { };
	protected onTouchedHandler = () => { };

}
