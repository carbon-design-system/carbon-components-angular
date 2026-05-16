import {
	AfterContentInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ContentChildren,
	forwardRef,
	HostBinding,
	Input,
	OnChanges,
	QueryList,
	SimpleChanges,
	TemplateRef,
	inject
} from "@angular/core";
import { NgClass, NgTemplateOutlet } from "@angular/common";
import { IconDirective } from "carbon-components-angular/icon";
import { CHECKBOX_GROUP_HOST } from "./checkbox-group-host";
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
		{ provide: CHECKBOX_GROUP_HOST, useExisting: CheckboxGroup }
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [NgClass, NgTemplateOutlet, IconDirective]
})
export class CheckboxGroup implements OnChanges, AfterContentInit {
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
	 * Optional decorator (e.g. AI label) rendered in the legend.
	 */
	@Input() decorator: TemplateRef<any>;

	private changeDetectorRef = inject(ChangeDetectorRef);

	/** Inserted by Angular inject() migration for backwards compatibility */
	// eslint-disable-next-line @angular-eslint/prefer-inject -- backwards-compatible DI overload until next major
	constructor(...args: unknown[]);

	constructor() {}

	ngOnChanges(changes: SimpleChanges) {
		if (changes["readOnly"] || changes["invalid"] || changes["warn"]) {
			this.notifyCheckboxesHostStateChanged();
		}
	}

	ngAfterContentInit() {
		this.checkboxes.changes.subscribe(() => this.notifyCheckboxesHostStateChanged());
	}

	isTemplate(value: any): boolean {
		return value instanceof TemplateRef;
	}

	private notifyCheckboxesHostStateChanged() {
		Promise.resolve().then(() => {
			this.checkboxes?.forEach((cb) => cb.markForCheckFromGroup());
			this.changeDetectorRef.markForCheck();
		});
	}
}
