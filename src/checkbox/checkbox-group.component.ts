import {
	AfterContentInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ContentChildren,
	ElementRef,
	forwardRef,
	HostBinding,
	HostListener,
	Input,
	OnChanges,
	QueryList,
	SimpleChanges,
	TemplateRef,
	inject
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { NgClass, NgTemplateOutlet } from "@angular/common";
import { IconDirective } from "carbon-components-angular/icon";
import { CHECKBOX_GROUP_HOST, CheckboxGroupHost } from "./checkbox-group-host";
import { Checkbox } from "./checkbox.component";

/**
 * Groups related checkboxes with a shared legend, validation, and optional decorator
 * (e.g. AI label).
 *
 * ```html
 * <cds-checkbox-group legend="Group label" [decorator]="decoratorTpl">
 *   <cds-checkbox>Option 1</cds-checkbox>
 * </cds-checkbox-group>
 * ```
 *
 * The group can also be used with `ngModel` or reactive forms. Its value is an array
 * containing the `value` of every checked `cds-checkbox` in the group:
 *
 * ```html
 * <cds-checkbox-group legend="Group label" [(ngModel)]="selected">
 *   <cds-checkbox value="a">Option A</cds-checkbox>
 *   <cds-checkbox value="b">Option B</cds-checkbox>
 * </cds-checkbox-group>
 * ```
 */
@Component({
	selector: "cds-checkbox-group, ibm-checkbox-group",
	template: `
		<fieldset
			class="cds--checkbox-group"
			[ngClass]="{
				'cds--checkbox-group--horizontal': orientation === 'horizontal',
				'cds--checkbox-group--readonly': readOnly,
				'cds--checkbox-group--invalid': !readOnly && invalid,
				'cds--checkbox-group--warning': !readOnly && !invalid && warn,
				'cds--checkbox-group--decorator': !!decorator
			}"
			[attr.data-invalid]="invalid ? true : null"
			[attr.aria-labelledby]="legendId || fieldsetAriaLabelledby || null"
			[attr.aria-readonly]="readOnly ? true : null"
			[attr.aria-describedby]="(helperText && !invalid && !warn) ? helperTextId : null">
			@if (legend) {
				<legend
					class="cds--label"
					[attr.id]="legendId || null">
					@if (isTemplate(legend)) {
						<ng-template [ngTemplateOutlet]="legend"></ng-template>
					} @else {
						{{legend}}
					}
					@if (decorator) {
						<div class="cds--checkbox-group-inner--decorator">
							<ng-template [ngTemplateOutlet]="decorator"></ng-template>
						</div>
					}
				</legend>
			}
			<ng-content></ng-content>
			<div class="cds--checkbox-group__validation-msg">
				@if (!readOnly && invalid) {
					<svg
						cdsIcon="warning--filled"
						size="16"
						class="cds--checkbox__invalid-icon">
					</svg>
					<div class="cds--form-requirement">
						@if (!isTemplate(invalidText)) {
							{{ invalidText }}
						}
						@if (isTemplate(invalidText)) {
							<ng-template [ngTemplateOutlet]="invalidText"></ng-template>
						}
					</div>
				}
				@if (!readOnly && !invalid && warn) {
					<svg
						cdsIcon="warning--alt--filled"
						size="16"
						class="cds--checkbox__invalid-icon cds--checkbox__invalid-icon--warning">
					</svg>
					<div class="cds--form-requirement">
						@if (!isTemplate(warnText)) {
							{{warnText}}
						}
						@if (isTemplate(warnText)) {
							<ng-template [ngTemplateOutlet]="warnText"></ng-template>
						}
					</div>
				}
			</div>
			@if (helperText && !invalid && !warn) {
				<div
					class="cds--form__helper-text"
					[id]="helperTextId">
					@if (!isTemplate(helperText)) {
						{{helperText}}
					}
					@if (isTemplate(helperText)) {
						<ng-template [ngTemplateOutlet]="helperText"></ng-template>
					}
				</div>
			}
		</fieldset>
	`,
	providers: [
		{ provide: CHECKBOX_GROUP_HOST, useExisting: CheckboxGroup },
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => CheckboxGroup),
			multi: true
		}
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [NgClass, NgTemplateOutlet, IconDirective]
})
export class CheckboxGroup implements OnChanges, AfterContentInit, ControlValueAccessor, CheckboxGroupHost {
	private static nextHelperId = 0;

	@HostBinding("class.cds--form-item") hostFormItem = true;

	@ContentChildren(forwardRef(() => Checkbox), { descendants: true }) checkboxes: QueryList<Checkbox>;

	readonly helperTextId = `checkbox-group-helper-${CheckboxGroup.nextHelperId++}`;

	@Input() legend: string | TemplateRef<any>;

	/**
	 * Optional id for the `<legend>`; referenced by `fieldsetAriaLabelledby` when set.
	 */
	@Input() legendId: string;

	/**
	 * Optional `aria-labelledby` for the `<fieldset>` when not using `legendId`.
	 */
	@Input() fieldsetAriaLabelledby: string;

	@Input() orientation: "horizontal" | "vertical" = "vertical";

	@Input() helperText: string | TemplateRef<any>;

	@Input() invalid = false;

	@Input() invalidText: string | TemplateRef<any>;

	@Input() warn = false;

	@Input() warnText: string | TemplateRef<any>;

	@Input() readOnly = false;

	/**
	 * Set to `true` to disable every checkbox in the group.
	 * Set automatically when the group is bound to a disabled form control.
	 */
	@Input() disabled = false;

	/**
	 * Optional decorator (e.g. AI label) rendered in the legend.
	 */
	@Input() decorator: TemplateRef<any>;

	private changeDetectorRef = inject(ChangeDetectorRef);
	private elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
	private value: unknown[] = [];
	// the checkboxes are only driven by the group once a form control wrote a value,
	// otherwise a standalone group would reset checkboxes using `checked`
	private hasWrittenValue = false;
	private propagateChange?: (value: unknown[]) => void;
	private onTouched?: () => void;

	/** Inserted by Angular inject() migration for backwards compatibility */
	// eslint-disable-next-line @angular-eslint/prefer-inject -- backwards-compatible DI overload until next major
	constructor(...args: unknown[]);

	constructor() {}

	ngOnChanges(changes: SimpleChanges) {
		if (changes["readOnly"] || changes["invalid"] || changes["warn"] || changes["disabled"]) {
			this.notifyCheckboxesHostStateChanged();
		}
	}

	ngAfterContentInit() {
		this.updateCheckboxesFromValue();
		this.checkboxes.changes.subscribe(() => {
			this.notifyCheckboxesHostStateChanged();
			// the inputs of freshly added checkboxes are only bound after the query updates
			Promise.resolve().then(() => this.updateCheckboxesFromValue());
		});
	}

	/**
	 * `ControlValueAccessor` method. Checks the checkboxes whose `value` is included in the
	 * provided array, and unchecks the others.
	 */
	writeValue(value: unknown[] | null) {
		this.hasWrittenValue = true;
		this.value = Array.isArray(value) ? [...value] : [];
		this.updateCheckboxesFromValue();
	}

	registerOnChange(fn: (value: unknown[]) => void) {
		this.propagateChange = fn;
	}

	registerOnTouched(fn: () => void) {
		this.onTouched = fn;
	}

	/**
	 * `ControlValueAccessor` method to programmatically disable the group.
	 */
	setDisabledState(isDisabled: boolean) {
		this.disabled = isDisabled;
		this.changeDetectorRef.markForCheck();
		this.notifyCheckboxesHostStateChanged();
	}

	/**
	 * Called by a nested `cds-checkbox` when the user toggles it. Updates the group value
	 * and propagates it to the form.
	 */
	checkboxChanged(checkbox: { value: unknown, checked: boolean }) {
		if (checkbox.value === undefined) {
			return;
		}
		const isIncluded = this.value.includes(checkbox.value);
		if (checkbox.checked && !isIncluded) {
			this.value = [...this.value, checkbox.value];
		} else if (!checkbox.checked && isIncluded) {
			this.value = this.value.filter(item => item !== checkbox.value);
		} else {
			return;
		}
		this.propagateChange?.([...this.value]);
	}

	@HostListener("focusout", ["$event"])
	onFocusOut(event: FocusEvent) {
		// only mark as touched once the focus leaves the whole group
		if (!this.elementRef.nativeElement.contains(event.relatedTarget as Node | null)) {
			this.onTouched?.();
		}
	}

	isTemplate(value: any): boolean {
		return value instanceof TemplateRef;
	}

	private updateCheckboxesFromValue() {
		if (!this.hasWrittenValue) {
			return;
		}
		this.checkboxes?.forEach((checkbox) => {
			if (checkbox.value !== undefined) {
				checkbox.checked = this.value.includes(checkbox.value);
			}
		});
	}

	private notifyCheckboxesHostStateChanged() {
		Promise.resolve().then(() => {
			this.checkboxes?.forEach((cb) => cb.markForCheckFromGroup());
			this.changeDetectorRef.markForCheck();
		});
	}
}
