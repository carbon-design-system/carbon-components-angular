import {
	Component,
	Input,
	AfterViewInit,
	OnChanges,
	OnDestroy,
	ElementRef,
	HostBinding,
	TemplateRef,
	ViewChild,
	ContentChild,
	ChangeDetectorRef,
	SimpleChanges
} from "@angular/core";

import { TextArea } from "./text-area.directive";

/**
 * Get started with importing the module:
 *
 * ```typescript
 * import { InputModule } from 'carbon-components-angular';
 * ```
 *
 * ```html
 * <cds-textarea-label>
 * 	Label
 * 	<textarea cdsTextArea class="textarea-field">
 * </cds-textarea-label>
 * ```
 *
 * [See demo](../../?path=/story/components-input-text-area--basic)
 */
@Component({
	selector: "cds-textarea-label, ibm-textarea-label",
	template: `
		<ng-container *ngIf="skeleton">
			<span class="cds--label cds--skeleton"></span>
			<div class="cds--text-area cds--skeleton"></div>
		</ng-container>
		<ng-container *ngIf="!skeleton">
			<div class="cds--text-area__label-wrapper">
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
			<div
				class="cds--text-area__wrapper"
				[ngClass]="{
					'cds--text-area__wrapper--warn': warn
				}"
				[attr.data-invalid]="(invalid ? true : null)"
				#wrapper>
				<svg
					*ngIf="!fluid && invalid"
					cdsIcon="warning--filled"
					size="16"
					class="cds--text-area__invalid-icon">
				</svg>
				<svg
					*ngIf="!fluid && !invalid && warn"
					cdsIcon="warning--alt--filled"
					size="16"
					class="cds--text-area__invalid-icon cds--text-area__invalid-icon--warning">
				</svg>
				<ng-template *ngIf="textAreaTemplate; else textAreaContent" [ngTemplateOutlet]="textAreaTemplate"></ng-template>
				<ng-template #textAreaContent>
					<ng-content select="[cdsTextArea],[ibmTextArea],textarea"></ng-content>
				</ng-template>

				<ng-container *ngIf="fluid">
					<hr class="cds--text-area__divider" />
					<div *ngIf="invalid" class="cds--form-requirement">
						<ng-container *ngIf="!isTemplate(invalidText)">{{invalidText}}</ng-container>
						<ng-template *ngIf="isTemplate(invalidText)" [ngTemplateOutlet]="invalidText"></ng-template>
						<svg
							cdsIcon="warning--filled"
							size="16"
							class="cds--text-area__invalid-icon">
						</svg>
					</div>
					<div *ngIf="!invalid && warn" class="cds--form-requirement">
						<ng-container *ngIf="!isTemplate(warnText)">{{warnText}}</ng-container>
						<ng-template *ngIf="isTemplate(warnText)" [ngTemplateOutlet]="warnText"></ng-template>
						<svg
							cdsIcon="warning--alt--filled"
							size="16"
							class="cds--text-area__invalid-icon cds--text-area__invalid-icon--warning">
						</svg>
					</div>
				</ng-container>
			</div>
			<ng-container *ngIf="!fluid">
				<div
					*ngIf="helperText && !invalid && !warn"
					class="cds--form__helper-text"
					[ngClass]="{'cds--form__helper-text--disabled': disabled}">
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
			</ng-container>
		</ng-container>
	`
})
export class TextareaLabelComponent implements AfterViewInit, OnChanges, OnDestroy {
	/**
	 * Used to build the id of the input item associated with the `Label`.
	 */
	static labelCounter = 0;
	/**
	 * The id of the input item associated with the `Label`. This value is also used to associate the `Label` with
	 * its input counterpart through the 'for' attribute.
	*/
	@Input() labelInputID = "ibm-textarea-" + TextareaLabelComponent.labelCounter;

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
	@Input() textAreaTemplate: TemplateRef<any>;
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
	 * Set to `true` to hide the label visually, but keep accessible to
	 * screen readers.
	 */
	@Input() hideLabel = false;

	/**
	 * When `true` (and `maxCount` is set), displays a live character/word
	 * counter alongside the label.
	 */
	@Input() enableCounter = false;

	/**
	 * Maximum number of characters (or words) allowed. Required for the
	 * counter to display.
	 */
	@Input() maxCount: number;

	/**
	 * Determines whether the counter counts characters or words.
	 * When `"word"` and `maxCount` is set, input is clamped to `maxCount` words
	 * on each change — excess words are trimmed from the end of the value.
	 */
	@Input() counterMode: "character" | "word" = "character";

	/** Tracks current character / word count for the counter display. */
	textCount = 0;

	/** Cached reference to the textarea element, set once in ngAfterViewInit. */
	private _textareaElement: HTMLTextAreaElement | null = null;
	/** Cached listener so it can be removed precisely (avoids anonymous-function leak). */
	private _inputListener: ((e: Event) => void) | null = null;

	// @ts-ignore
	@ViewChild("wrapper", { static: false }) wrapper: ElementRef<HTMLDivElement>;

	// @ts-ignore
	@ContentChild(TextArea, { static: false }) textArea: TextArea;

	@HostBinding("class.cds--form-item") labelClass = true;

	@HostBinding("class.cds--text-area__wrapper--readonly") get isReadonly() {
		return this.wrapper?.nativeElement.querySelector("textarea")?.readOnly ?? false;
	}

	@HostBinding("class.cds--text-area--fluid") get fluidClass() {
		return this.fluid && !this.skeleton;
	}

	@HostBinding("class.cds--text-area--fluid__skeleton") get fluidSkeletonClass() {
		return this.fluid && this.skeleton;
	}

	/**
	 * Creates an instance of Label.
	 */
	constructor(protected changeDetectorRef: ChangeDetectorRef) { }

	/**
	 * Sets the id on the input item associated with the `Label` and attaches the
	 * counter listener when `enableCounter` is already `true` on first render.
	 */
	ngAfterViewInit() {
		if (this.wrapper) {
			// Prioritize setting id to `textarea` over div
			const inputElement = this.wrapper.nativeElement.querySelector("textarea");
			if (inputElement) {
				// avoid overriding ids already set by the user — reuse it instead
				if (inputElement.id) {
					this.labelInputID = inputElement.id;
					this.changeDetectorRef.detectChanges();
				}
				inputElement.setAttribute("id", this.labelInputID);

				this._textareaElement = inputElement;
				this._syncMaxLength();

				if (this.enableCounter) {
					this.textCount = this._countValue(inputElement.value || "");
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
				if (this._textareaElement) {
					this.textCount = this._countValue(this._textareaElement.value || "");
					this._attachCounterListener();
					this.changeDetectorRef.detectChanges();
				}
			} else {
				this._detachCounterListener();
			}
		}

		if (
			(changes.maxCount || changes.counterMode) &&
			!(changes.maxCount?.firstChange && changes.counterMode?.firstChange)
		) {
			this._syncMaxLength();
		}
	}

	ngOnDestroy() {
		this._detachCounterListener();
	}

	/**
	 * Keeps the textarea's `maxlength` attribute in sync with `maxCount`.
	 * Only set in character mode — word mode enforces its limit in JS and must
	 * not restrict raw character length via the HTML attribute.
	 * If `maxCount` is unset or the mode is `"word"`, any previously applied
	 * `maxlength` is removed so the textarea is unrestricted by the attribute.
	 */
	private _syncMaxLength(): void {
		if (!this._textareaElement) {
			return;
		}
		if (this.counterMode === "character" && this.maxCount != null) {
			this._textareaElement.setAttribute("maxlength", String(this.maxCount));
		} else {
			this._textareaElement.removeAttribute("maxlength");
		}
	}

	/**
	 * Attaches the input event listener, ensuring it is never added twice.
	 */
	private _attachCounterListener(): void {
		this._detachCounterListener();
		if (!this._textareaElement) {
			return;
		}
		this._inputListener = (e: Event) => {
			const el = e.target as HTMLTextAreaElement;
			// Word-mode enforcement: clamp value to maxCount words on each input so
			// the textarea never holds more words than allowed.  Character mode relies
			// on the native `maxlength` attribute set by the consumer.
			if (this.counterMode === "word" && this.maxCount != null) {
				const clamped = this._truncateToWordLimit(el.value || "", this.maxCount);
				if (clamped !== el.value) {
					el.value = clamped;
				}
			}
			this.textCount = this._countValue(el.value || "");
		};
		this._textareaElement.addEventListener("input", this._inputListener);
	}

	/**
	 * Truncates `value` so it contains at most `limit` Unicode words.
	 * Whitespace between and around words is preserved up to the last allowed word;
	 * any trailing content (partial word or space) beyond the limit is dropped.
	 */
	private _truncateToWordLimit(value: string, limit: number): string {
		let wordsSeen = 0;
		// Walk through the string capturing word boundaries
		const wordPattern = /\p{L}+/gu;
		let match: RegExpExecArray | null;
		let cutIndex = value.length;
		while ((match = wordPattern.exec(value)) !== null) {
			wordsSeen++;
			if (wordsSeen === limit) {
				// Allow the string to continue up to (but not past) the end of this word
				cutIndex = match.index + match[0].length;
				break;
			}
		}
		return wordsSeen < limit ? value : value.slice(0, cutIndex);
	}


	/**
	 * Removes the input event listener and clears the cached reference.
	 */
	private _detachCounterListener(): void {
		if (this._inputListener && this._textareaElement) {
			this._textareaElement.removeEventListener("input", this._inputListener);
			this._inputListener = null;
		}
	}

	private _countValue(value: string): number {
		if (this.counterMode === "word") {
			return value.match(/\p{L}+/gu)?.length || 0;
		}
		return value.length;
	}

	public isTemplate(value) {
		return value instanceof TemplateRef;
	}
}
