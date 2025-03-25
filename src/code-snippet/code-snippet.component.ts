import {
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	HostBinding,
	Input,
	OnInit,
	ViewChild
} from "@angular/core";

import { BaseIconButton } from "carbon-components-angular/button";
import { I18n } from "carbon-components-angular/i18n";
import { EventService } from "carbon-components-angular/utils";

export enum SnippetType {
	single = "single",
	multi = "multi",
	inline = "inline"
}

/**
 * Get started with importing the module:
 *
 * ```typescript
 * import { CodeSnippetModule } from 'carbon-components-angular';
 * ```
 *
 * ```html
 * <cds-code-snippet>Code</cds-code-snippet>
 * ```
 *
 * [See demo](../../?path=/story/components-code-snippet--basic)
 */
@Component({
	selector: "cds-code-snippet, ibm-code-snippet",
	template: `
		@if (display === 'inline') {
			@if (!hideCopyButton) {
				<ng-container *ngTemplateOutlet="buttonTemplate" />
			} @else {
				<span
					class="cds--snippet cds--snippet--inline cds--snippet--no-copy"
					[ngClass]="{
						'cds--snippet--light': theme === 'light'
					}">
					<code #code>
						<ng-container *ngTemplateOutlet="codeTemplate" />
					</code>
				</span>
			}
		} @else {
			<div
				#codeContainer
				class="cds--snippet-container"
				[attr.aria-label]="translations.CODE_SNIPPET_TEXT"
				[attr.tabindex]="display === 'single' && !disabled ? '0' : null"
				[attr.role]="display==='single' ? 'textarea' : null"
				[ngStyle]="styles"
				(scroll)="(display === 'single' ? handleScroll() : null)">
				@if (skeleton) {
					@if (display === 'single') {
						<span></span>
					} @else {
						<span></span>
						<span></span>
						<span></span>
					}
				}
				@if (!skeleton) {
					<pre #codeContent (scroll)="(display === 'multi' ? handleScroll() : null)"><code #code><ng-container *ngTemplateOutlet="codeTemplate" /></code></pre>
				}
			</div>
			@if (hasLeft) {
				<div class="cds--snippet__overflow-indicator--left"></div>
			}
			@if (hasRight) {
				<div class="cds--snippet__overflow-indicator--right"></div>
			}
			@if (!hideCopyButton) {
				<ng-container *ngTemplateOutlet="buttonTemplate" />
			}
			@if (isExpandable) {
				<button
					class="cds--btn cds--btn--ghost cds--btn--sm cds--snippet-btn--expand"
					(click)="toggleSnippetExpansion()"
					type="button">
					<span class="cds--snippet-btn--text">{{expanded ? translations.SHOW_LESS : translations.SHOW_MORE}}</span>
					<svg cdsIcon="chevron--down" size="16" class="cds--icon-chevron--down" [attr.aria-label]="translations.SHOW_MORE_ICON"></svg>
				</button>
			}
		}

		<ng-template #buttonTemplate>
			@if (!skeleton) {
				<cds-icon-button
					[description]="showFeedback ? feedbackText : copyButtonDescription"
					[align]="align"
					[autoAlign]="autoAlign"
					[dropShadow]="dropShadow"
					[caret]="caret"
					[highContrast]="highContrast"
					[isOpen]="isOpen"
					[enterDelayMs]="enterDelayMs"
					[leaveDelayMs]="leaveDelayMs"
					type="button"
					kind="primary"
					size="md"
					(click)="onCopyButtonClicked($event)"
					[buttonNgClass]="{
						'cds--snippet--light': theme === 'light',
						'cds--snippet--inline': display === 'inline',
						'cds--btn--icon-only': display !== 'inline',
						'cds--copy-btn': display !== 'inline',
						'cds--copy-btn--animating': animating,
						'cds--copy-btn--fade-in': showFeedback,
						'cds--copy-btn--fade-out': !showFeedback && animating,
						'cds--snippet cds--copy': true
					}"
					[buttonAttributes]="{
						'aria-label': translations.COPY_CODE,
						'aria-live': 'polite',
						'tabindex': '0'
					}">
					@if (display === 'inline') {
						<code #code>
							<ng-container *ngTemplateOutlet="codeTemplate" />
						</code>
					} @else {
						<svg cdsIcon="copy" size="16" class="cds--snippet__icon"></svg>
					}
				</cds-icon-button>
			}
		</ng-template>

		<ng-template #codeTemplate>
			<ng-content />
		</ng-template>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeSnippet extends BaseIconButton implements OnInit, AfterViewInit {
	@HostBinding("class.cds--snippet") get snippetClass() {
		return this.display !== SnippetType.inline;
	}
	@HostBinding("class.cds--snippet--single") get snippetSingleClass() {
		return this.display === SnippetType.single;
	}
	@HostBinding("class.cds--snippet--multi") get snippetMultiClass() {
		return this.display === SnippetType.multi;
	}
	@HostBinding("class.cds--snippet--disabled") get snippetDisabledClass() {
		return this.display !== "inline" && this.disabled;
	}
	@HostBinding("class.cds--snippet--light") get snippetInlineLightClass() {
		return this.theme === "light";
	}

	readonly rowHeightInPixel: number = 16;

	/**
	 * It can be `"single"`, `"multi"` or `"inline"`
	 */
	@Input() display: SnippetType = SnippetType.single;
	@Input() translations = this.i18n.get().CODE_SNIPPET;
	/**
	 * copy button description to show on hover
	 */
	@Input() copyButtonDescription: string;
	/**
	 * Set to `true` to hide copy button
	 */
	@Input() hideCopyButton = false;
	/**
	 * Set to `true` to disable the code snippet
	 */
	@Input() disabled = false;
	/**
	 * Specify the max number of rows to show when collapsed
	 * Default is `15`
	 */
	@Input() maxCollapsedNumberOfRows = 15;
	/**
	 * Specify the min number of rows to show when collapsed
	 * Default is `3`
	 */
	@Input() minCollapsedNumberOfRows = 3;
	/**
	 * Specify the max number of rows to show when expanded
	 * Default is `0`, hence all content will be visible when expanded
	 */
	@Input() maxExpandedNumberOfRows = 0;
	/**
	 * Specify the min number of rows to show when expanded
	 * Default is `16`, hence height of expanded row will be 16 * rowHeightInPixel (16) =  256px
	 */
	@Input() minExpandedNumberOfRows = 16;
	/**
	 * Set to `true` to wrap the text
	 */
	@HostBinding("class.cds--snippet--wraptext") @Input() wrapText = false;
	/**
	 * @deprecated since v5 - Use `cdsLayer` directive instead
	 * Set to `"light"` to apply the light style
	 */
	@Input() theme: "light" | "dark" = "dark";
	/**
	 * Text displayed in the tooltip when user clicks button to copy code.
	 */
	@Input() feedbackText = this.translations.COPIED;
	/**
	 * Time in miliseconds to keep the feedback tooltip displayed.
	 * Defaults to 2 seconds
	 */
	@Input() feedbackTimeout = 2000;

	@HostBinding("class.cds--snippet--expand") @Input() expanded = false;
	@HostBinding("class.cds--skeleton") @Input() skeleton = false;
	styles: any = {};

	@ViewChild("code") code;
	@ViewChild("codeContent") codeContent;
	@ViewChild("codeContainer") codeContainer;

	showFeedback = false;
	animating = false;
	hasExpandButton = null;
	isExpandable = false;
	hasRightOverflow = false;

	hasRight = false;
	hasLeft = false;

	/**
	 * Creates an instance of CodeSnippet.
	 */
	constructor(protected i18n: I18n, protected eventService: EventService) {
		super();
		this.dropShadow = false;
	}

	handleScroll() {
		if (this.skeleton) {
			return;
		}

		let ref;
		switch (this.display) {
			case "multi":
				ref = this.codeContent.nativeElement;
				break;
			case "single":
				ref = this.codeContainer.nativeElement;
				break;
			default:
				return;
		}
		if (ref) {
			const {
				scrollWidth,
				clientWidth,
				scrollLeft
			} = ref;
			const horizontalOverflow = scrollWidth > clientWidth;
			this.hasLeft = horizontalOverflow && !!scrollLeft;
			this.hasRight = horizontalOverflow && scrollLeft + clientWidth !== scrollWidth;
		}
	}

	toggleSnippetExpansion() {
		this.expanded = !this.expanded;
		this.calculateContainerHeight();
	}

	onCopyButtonClicked() {
		if (!this.disabled) {
			window.navigator.clipboard
				.writeText(this.code.nativeElement.innerText || this.code.nativeElement.textContent).then(() => {
					this.showFeedback = true;
					this.animating = true;
					setTimeout(() => {
						this.showFeedback = false;
						this.animating = false;
					}, this.feedbackTimeout);
				});
		}
	}

	ngOnInit() {
		this.calculateContainerHeight();
	}

	ngAfterViewInit() {
		this.canExpand();
		this.handleScroll();
		if (window) {
			this.eventService.on(window as any, "resize", () => {
				this.canExpand();
				this.handleScroll();
			});
		}
	}

	calculateContainerHeight() {
		if (this.display === "multi" && !this.skeleton) {
			this.styles = {};
			if (this.expanded) {
				if (this.maxExpandedNumberOfRows > 0) {
					this.styles["max-height"] = `${this.maxExpandedNumberOfRows * this.rowHeightInPixel}px`;
				}
				if (this.minExpandedNumberOfRows > 0) {
					this.styles["min-height"] = `${this.minExpandedNumberOfRows * this.rowHeightInPixel}px`;
				}
			} else {
				if (this.maxCollapsedNumberOfRows > 0) {
					this.styles["max-height"] = `${this.maxCollapsedNumberOfRows * this.rowHeightInPixel}px`;
				}
				if (this.minCollapsedNumberOfRows > 0) {
					this.styles["min-height"] = `${this.minCollapsedNumberOfRows * this.rowHeightInPixel}px`;
				}
			}
		}
	}

	protected canExpand() {
		if (this.display === "multi" && !this.skeleton) {
			const height = this.codeContent.nativeElement.getBoundingClientRect().height;
			if (
				this.maxCollapsedNumberOfRows > 0 &&
				(this.maxExpandedNumberOfRows <= 0 ||
					this.maxExpandedNumberOfRows > this.maxCollapsedNumberOfRows) &&
				height > this.maxCollapsedNumberOfRows * this.rowHeightInPixel
			) {
				this.isExpandable = true;
			} else {
				this.isExpandable = false;
			}

			if (
				this.expanded &&
				this.minExpandedNumberOfRows > 0 &&
				height <= this.minExpandedNumberOfRows * this.rowHeightInPixel
			) {
				this.isExpandable = false;
			}
		}
	}
}
