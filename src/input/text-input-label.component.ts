import {
	AfterContentInit,
	AfterViewInit,
	ChangeDetectorRef,
	Component,
	ElementRef,
	HostBinding,
	Input,
	OnChanges,
	OnDestroy,
	SimpleChanges,
	TemplateRef,
	ViewChild
} from "@angular/core";

/**
 * Get started with importing the module:
 *
 * ```typescript
 * import { InputModule } from 'carbon-components-angular';
 * ```
 *
 * ```html
 * <cds-text-label>
 * 	Label
 * 	<input cdsText type="text" class="input-field">
 * </cds-text-label>
 * ```
 *
 * [See demo](../../?path=/story/components-input--basic)
 */
@Component({
	selector: "cds-text-label, ibm-text-label",
	template: `
		<ng-container *ngIf="skeleton">
			<span class="cds--label cds--skeleton"></span>
			<div class="cds--text-input cds--skeleton"></div>
		</ng-container>
		<ng-container *ngIf="!skeleton">
			<!-- non-inline: label-wrapper above field; inline: label+validation side-by-side -->
			<ng-container *ngIf="!inline; else inlineHeader">
				<div class="cds--text-input__label-wrapper">
					<label
						[for]="labelInputID"
						[attr.aria-label]="ariaLabel"
						class="cds--label"
						[ngClass]="{
							'cds--label--disabled': disabled,
							'cds--visually-hidden': hideLabel
						}">
						<ng-template *ngIf="labelTemplate; else labelContent" [ngTemplateOutlet]="labelTemplate"></ng-template>
						<ng-template #labelContent>
							<ng-content></ng-content>
						</ng-template>
					</label>
					<span
						*ngIf="enableCounter && maxCount"
						class="cds--label"
						[ngClass]="{'cds--label--disabled': disabled}"
						aria-hidden="true">
						{{textCount}}/{{maxCount}}
					</span>
				</div>
			</ng-container>

			<ng-template #inlineHeader>
				<div class="cds--text-input__label-helper-wrapper">
					<div class="cds--text-input__label-wrapper">
						<label
							[for]="labelInputID"
							[attr.aria-label]="ariaLabel"
							class="cds--label"
							[ngClass]="{
								'cds--label--disabled': disabled,
								'cds--visually-hidden': hideLabel,
								'cds--label--inline': true,
								'cds--label--inline--sm': size === 'sm',
								'cds--label--inline--md': size === 'md',
								'cds--label--inline--lg': size === 'lg'
							}">
							<ng-template *ngIf="labelTemplate" [ngTemplateOutlet]="labelTemplate"></ng-template>
						</label>
					</div>
					<ng-container *ngIf="!fluid">
						<ng-container [ngTemplateOutlet]="validationOrHelper"></ng-container>
					</ng-container>
				</div>
			</ng-template>

			<div
				class="cds--text-input__field-outer-wrapper"
				[ngClass]="{'cds--text-input__field-outer-wrapper--inline': inline}">
			<div
				class="cds--text-input__field-wrapper"
				[ngClass]="{
					'cds--text-input__field-wrapper--warning': warn,
					'cds--text-input__field-wrapper--decorator': !!decorator
				}"
					[attr.data-invalid]="(invalid ? true : null)"
					#wrapper>
					<svg
						*ngIf="invalid && !warn"
						cdsIcon="warning--filled"
						size="16"
						class="cds--text-input__invalid-icon">
					</svg>
					<svg
						*ngIf="!invalid && warn"
						cdsIcon="warning--alt--filled"
						size="16"
						class="cds--text-input__invalid-icon cds--text-input__invalid-icon--warning">
					</svg>
					<ng-template *ngIf="textInputTemplate; else textInputContent" [ngTemplateOutlet]="textInputTemplate"></ng-template>
					<ng-template #textInputContent>
						<ng-content select="[cdsText],[ibmText],input[type=text],div"></ng-content>
					</ng-template>
					<ng-container *ngIf="decorator">
						<div class="cds--text-input__field-inner-wrapper--decorator">
							<ng-template [ngTemplateOutlet]="decorator"></ng-template>
						</div>
					</ng-container>

					<ng-container *ngIf="fluid">
						<hr class="cds--text-input__divider" />
						<div *ngIf="invalid" class="cds--form-requirement">
							<ng-container *ngIf="!isTemplate(invalidText)">{{invalidText}}</ng-container>
							<ng-template *ngIf="isTemplate(invalidText)" [ngTemplateOutlet]="invalidText"></ng-template>
						</div>
						<div *ngIf="!invalid && warn" class="cds--form-requirement">
							<ng-container *ngIf="!isTemplate(warnText)">{{warnText}}</ng-container>
							<ng-template *ngIf="isTemplate(warnText)" [ngTemplateOutlet]="warnText"></ng-template>
						</div>
					</ng-container>
				</div>
				<ng-container *ngIf="!fluid && !inline">
					<ng-container [ngTemplateOutlet]="validationOrHelper"></ng-container>
				</ng-container>
			</div>
		</ng-container>

		<ng-template #validationOrHelper>
			<div
				*ngIf="helperText && !invalid && !warn"
				class="cds--form__helper-text"
				[ngClass]="{'cds--form__helper-text--disabled': disabled, 'cds--form__helper-text--inline': inline}">
				<ng-container *ngIf="!isTemplate(helperText)">{{helperText}}</ng-container>
				<ng-template *ngIf="isTemplate(helperText)" [ngTemplateOutlet]="helperText"></ng-template>
			</div>
			<div *ngIf="invalid" class="cds--form-requirement">
				<ng-container *ngIf="!isTemplate(invalidText)">{{invalidText}}</ng-container>
				<ng-template *ngIf="isTemplate(invalidText)" [ngTemplateOutlet]="invalidText"></ng-template>
			</div>
			<div *ngIf="!invalid && warn" class="cds--form-requirement">
				<ng-container *ngIf="!isTemplate(warnText)">{{warnText}}</ng-container>
				<ng-template *ngIf="isTemplate(warnText)" [ngTemplateOutlet]="warnText"></ng-template>
			</div>
		</ng-template>
	`
})
export class TextInputLabelComponent implements AfterViewInit, AfterContentInit, OnChanges, OnDestroy {

	@HostBinding("class.cds--text-input-wrapper--inline") get isInlineWrapper() {
		return this.inline;
	}

	@HostBinding("class.cds--text-input-wrapper--readonly") get isReadonly() {
		return this.wrapper?.nativeElement.querySelector("input")?.readOnly ?? false;
	}

	@HostBinding("class.cds--text-input--fluid") get fluidClass() {
		return this.fluid && !this.skeleton;
	}

	@HostBinding("class.cds--text-input--fluid__skeleton") get fluidSkeletonClass() {
		return this.fluid && this.skeleton;
	}
	/**
	 * Used to build the id of the input item associated with the `Label`.
	 */
	static labelCounter = 0;
	/**
	 * The id of the input item associated with the `Label`. This value is also used to associate the `Label` with
	 * its input counterpart through the 'for' attribute.
	*/
	@Input() labelInputID = "ibm-text-input-" + TextInputLabelComponent.labelCounter++;

	/**
	 * Set to `true` for a disabled label.
	 */
	@Input() disabled = false;
	/**
	 * Set to `true` for a loading label.
	 */
	@Input() skeleton = false;

	/**
	 * Helper input property for ease of migration
	 * Since we cannot pass ng-content down easily from label component, we will accept the templates
	 */
	@Input() labelTemplate: TemplateRef<any>;
	@Input() textInputTemplate: TemplateRef<any>;
	/**
	 * Optional helper text that appears under the label.
	 */
	@Input() helperText: string | TemplateRef<any>;
	/**
	 * Sets the invalid text.
	 */
	@Input() invalidText: string | TemplateRef<any>;
	/**
	 * Set to `true` for an invalid label component.
	 */
	@Input() invalid = false;
	/**
	  * Set to `true` to show a warning (contents set by warningText)
	  */
	@Input() warn = false;
	/**
	 * Sets the warning text
	 */
	@Input() warnText: string | TemplateRef<any>;
	/**
	 * Set the arialabel for label
	 */
	@Input() ariaLabel: string;

	/**
	 * Experimental: enable fluid state
	 */
	@Input() fluid = false;

	/**
	 * **Experimental**: Optional decorator (e.g. AI label).
	 */
	@Input() decorator: TemplateRef<any>;

	/**
	 * Set to `true` to hide the label visually, but keep accessible to
	 * screen readers.
	 */
	@Input() hideLabel = false;

	/**
	 * Set to `true` to render the label and field side-by-side instead of stacked.
	 */
	@Input() inline = false;

	/**
	 * The render size for the `TextInput`. Used to compute the INLINE label size
	 * variant class (`cds--label--inline--{size}`).
	 */
	@Input() size: "sm" | "md" | "lg" = "md";

	/**
	 * Set to `true` (`maxCount` must be set) to displays a live character
	 * counter alongside the label.
	 */
	@Input() enableCounter = false;

	/**
	 * Maximum number of characters (or words) allowed. Required for the
	 * counter to display.
	 */
	@Input() maxCount: number;

	// Tracks current character count for the counter display.
	textCount = 0;

	// @ts-ignore
	@ViewChild("wrapper", { static: false }) wrapper: ElementRef<HTMLDivElement>;

	@HostBinding("class.cds--form-item") labelClass = true;

	@HostBinding("class.cds--text-input-wrapper") textInputWrapper = true;

	// Cached reference to the input element, set once in ngAfterViewInit.
	private _inputElement: HTMLInputElement | null = null;
	// Cached listener so it can be removed precisely (avoids anonymous-function leak).
	private _inputListener: ((e: Event) => void) | null = null;

	/**
	 * Creates an instance of Label.
	 */
	constructor(protected changeDetectorRef: ChangeDetectorRef) {}

	/**
	 * Sets the id on the input item associated with the `Label` and attaches the
	 * counter listener when `enableCounter` is already `true` on first render.
	 * Sets the id on the input item associated with the `Label` and attaches the
	 * counter listener when `enableCounter` is already `true` on first render.
	 */
	ngAfterViewInit() {
		if (this.wrapper) {
			// Prioritize setting id to `input` over div
			const inputElement = this.wrapper.nativeElement.querySelector("input");
			if (inputElement) {
				// avoid overriding ids already set by the user, reuse it instead
				if (inputElement.id) {
					this.labelInputID = inputElement.id;
					this.changeDetectorRef.detectChanges();
				}
				inputElement.setAttribute("id", this.labelInputID);

				this._inputElement = inputElement;

				if (this.enableCounter) {
					this.textCount = inputElement.value?.length || 0;
					this._attachCounterListener();
				}


				this._inputElement = inputElement;

				if (this.enableCounter) {
					this.textCount = inputElement.value?.length || 0;
					this._attachCounterListener();
				}

				return;
			}

			const divElement = this.wrapper.nativeElement.querySelector("div");
			if (divElement) {
				if (divElement.id) {
					this.labelInputID = divElement.id;
					this.changeDetectorRef.detectChanges();
				}
				divElement.setAttribute("id", this.labelInputID);
			}
		}
	}

	/**
	 * Attach/remove listener and seed `textCount` from the textarea's current value.
	 * @param changes
	 */
	ngOnChanges(changes: SimpleChanges) {
		if (changes.enableCounter && !changes.enableCounter.firstChange) {
			if (changes.enableCounter.currentValue) {
				if (this._inputElement) {
					this.textCount = this._inputElement.value?.length || 0;
					this._attachCounterListener();
					this.changeDetectorRef.detectChanges();
				}
			} else {
				this._detachCounterListener();
			}
		}
	}

	ngAfterContentInit() {
		this.changeDetectorRef.detectChanges();
	}

	ngOnDestroy() {
		this._detachCounterListener();
	}

	public isTemplate(value) {
		return value instanceof TemplateRef;
	}

	/**
	 * Attaches the input event listener, ensuring it is never added twice.
	 */
	private _attachCounterListener(): void {
		this._detachCounterListener();
		if (!this._inputElement) {
			return;
		}
		this._inputListener = (e: Event) => {
			this.textCount = (e.target as HTMLInputElement).value?.length || 0;
			this.changeDetectorRef.detectChanges();
		};
		this._inputElement.addEventListener("input", this._inputListener);
	}

	/**
	 * Removes the input event listener and clears the cached reference.
	 */
	private _detachCounterListener(): void {
		if (this._inputListener && this._inputElement) {
			this._inputElement.removeEventListener("input", this._inputListener);
			this._inputListener = null;
		}
	}
}
