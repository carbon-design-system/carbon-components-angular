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
	TemplateRef
} from "@angular/core";
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
			<legend *ngIf="legend" class="cds--label" [attr.id]="legendId || null">
				<ng-template *ngIf="isTemplate(legend); else legendLabel" [ngTemplateOutlet]="legend"></ng-template>
				<ng-template #legendLabel>{{legend}}</ng-template>
				<ng-container *ngIf="decorator">
					<div class="cds--checkbox-group-inner--decorator">
						<ng-template [ngTemplateOutlet]="decorator"></ng-template>
					</div>
				</ng-container>
			</legend>
			<ng-content></ng-content>
			<div class="cds--checkbox-group__validation-msg">
				<ng-container *ngIf="!readOnly && invalid">
					<svg
						cdsIcon="warning--filled"
						size="16"
						class="cds--checkbox__invalid-icon">
					</svg>
					<div class="cds--form-requirement">
						<ng-container *ngIf="!isTemplate(invalidText)">{{ invalidText }}</ng-container>
						<ng-template *ngIf="isTemplate(invalidText)" [ngTemplateOutlet]="invalidText"></ng-template>
					</div>
				</ng-container>
				<ng-container *ngIf="!readOnly && !invalid && warn">
					<svg
						cdsIcon="warning--alt--filled"
						size="16"
						class="cds--checkbox__invalid-icon cds--checkbox__invalid-icon--warning">
					</svg>
					<div class="cds--form-requirement">
						<ng-container *ngIf="!isTemplate(warnText)">{{warnText}}</ng-container>
						<ng-template *ngIf="isTemplate(warnText)" [ngTemplateOutlet]="warnText"></ng-template>
					</div>
				</ng-container>
			</div>
			<div
				*ngIf="helperText && !invalid && !warn"
				class="cds--form__helper-text"
				[id]="helperTextId">
				<ng-container *ngIf="!isTemplate(helperText)">{{helperText}}</ng-container>
				<ng-template *ngIf="isTemplate(helperText)" [ngTemplateOutlet]="helperText"></ng-template>
			</div>
		</fieldset>
	`,
	providers: [
		{ provide: CHECKBOX_GROUP_HOST, useExisting: CheckboxGroup }
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxGroup implements OnChanges, AfterContentInit {

	private static _nextGroupHelperId = 0;
	@HostBinding("class.cds--form-item") hostFormItem = true;

	// tslint:disable-next-line:no-forward-ref
	@ContentChildren(forwardRef(() => Checkbox), { descendants: true }) checkboxes: QueryList<Checkbox>;

	readonly helperTextId = `checkbox-group-helper-${CheckboxGroup._nextGroupHelperId++}`;

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

	constructor(private changeDetectorRef: ChangeDetectorRef) {}

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
