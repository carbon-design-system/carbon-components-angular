import {
	Component,
	Input,
	HostBinding,
	ViewChild,
	HostListener,
	AfterViewInit
} from "@angular/core";

import { I18n } from "carbon-components-angular/i18n";

export enum SnippetType {
	single = "single",
	multi = "multi",
	inline = "inline"
}

/**
 * [See demo](../../?path=/story/code-snippet--basic)
 *
 * ```html
 * <ibm-code-snippet>Code</ibm-code-snippet>
 * ```
 *
 * <example-url>../../iframe.html?id=code-snippet--basic</example-url>
 */
@Component({
	selector: "ibm-code-snippet",
	template: `
		<ng-container *ngIf="display === 'inline'; else notInline">
			<ng-container *ngTemplateOutlet="codeTemplate"></ng-container>
			<ng-container *ngTemplateOutlet="feedbackTemplate"></ng-container>
		</ng-container>

		<ng-template #notInline>
			<div class="bx--snippet-container" [attr.aria-label]="translations.CODE_SNIPPET_TEXT">
				<ng-container *ngIf="skeleton">
					<span *ngIf="display === 'single'; else multiSkeleton"></span>
					<ng-template #multiSkeleton>
						<span></span>
						<span></span>
						<span></span>
					</ng-template>
				</ng-container>
				<pre *ngIf="!skeleton"><ng-container *ngTemplateOutlet="codeTemplate"></ng-container></pre>
			</div>
			<button
				*ngIf="!skeleton"
				class="bx--snippet-button"
				[attr.aria-label]="translations.COPY_CODE"
				(click)="onCopyButtonClicked()"
				tabindex="0">
				<ibm-icon-copy size="16" class="bx--snippet__icon"></ibm-icon-copy>
				<ng-container *ngTemplateOutlet="feedbackTemplate"></ng-container>
			</button>
			<button
				*ngIf="shouldShowExpandButton"
				class="bx--btn bx--btn--ghost bx--btn--sm bx--snippet-btn--expand"
				(click)="toggleSnippetExpansion()"
				type="button">
				<span class="bx--snippet-btn--text">{{expanded ? translations.SHOW_LESS : translations.SHOW_MORE}}</span>
				<ibm-icon-chevron-down size="16" class="bx--icon-chevron--down" [ariaLabel]="translations.SHOW_MORE_ICON"></ibm-icon-chevron-down>
			</button>
		</ng-template>

		<ng-template #codeTemplate>
			<code #code><ng-content></ng-content></code>
		</ng-template>

		<ng-template #feedbackTemplate>
			<div
			class="bx--btn--copy__feedback"
			[ngClass]="{
				'bx--btn--copy__feedback--displayed': showFeedback
			}"
			[attr.data-feedback]="feedbackText">
			</div>
		</ng-template>
	`
})
export class CodeSnippet implements AfterViewInit {
	/**
	 * Variable used for creating unique ids for code-snippet components.
	 */
	static codeSnippetCount = 0;

	/**
	 * It can be `"single"`, `"multi"` or `"inline"`
	 *
	 */
	@Input() display: SnippetType = SnippetType.single;
	@Input() translations = this.i18n.get().CODE_SNIPPET;

	/**
	 * Set to `"light"` to apply the light style on the code snippet.
	 */
	@Input() theme: "light" | "dark" = "dark";

	/**
	 * Text displayed in the tooltip when user clicks button to copy code.
	 *
	 */
	@Input() feedbackText = this.translations.COPIED;

	/**
	 * Time in miliseconds to keep the feedback tooltip displayed.
	 *
	 */
	@Input() feedbackTimeout = 2000;

	@HostBinding("class.bx--snippet--expand") @Input() expanded = false;
	@HostBinding("class.bx--skeleton") @Input() skeleton = false;

	@HostBinding("class.bx--snippet") snippetClass = true;
	@HostBinding("class.bx--snippet--single") get snippetSingleClass() {
		return this.display === SnippetType.single;
	}
	@HostBinding("class.bx--snippet--multi") get snippetMultiClass() {
		return this.display === SnippetType.multi;
	}
	@HostBinding("class.bx--snippet--inline") get snippetInlineClass() {
		return this.display === SnippetType.inline;
	}
	@HostBinding("class.bx--snippet--light") get snippetInlineLightClass() {
		return this.display === SnippetType.inline && this.theme === "light";
	}
	@HostBinding("class.bx--btn--copy") get btnCopyClass() {
		return this.display === SnippetType.inline;
	}

	@HostBinding("style.display") get displayStyle() {
		return this.display !== SnippetType.inline ? "block" : null;
	}
	@HostBinding("attr.type") get attrType() {
		return this.display === SnippetType.inline ? "button" : null;
	}

	// @ts-ignore
	@ViewChild("code", { static: false }) code;

	get shouldShowExpandButton() {
		// Checks if `hasExpand` button has been initialized in `AfterViewInit` before detecting whether or not to
		// show the expand button when the code displayed in the component changes during the life of the component.
		// This is to avoid the `ExpressionChangedAfterItHasBeenCheckedError`.
		if (this.hasExpandButton === null) {
			return this.hasExpandButton;
		}
		return this.canExpand();
	}

	showFeedback = false;

	hasExpandButton = null;

	/**
	 * Creates an instance of CodeSnippet.
	 */
	constructor(protected i18n: I18n) {
		CodeSnippet.codeSnippetCount++;
	}

	toggleSnippetExpansion() {
		this.expanded = !this.expanded;
	}

	/**
	 * Copies the code from the `<code>` block to clipboard.
	 *
	 */
	copyCode() {
		// create invisible, uneditable textarea with our code in it
		const textarea = document.createElement("textarea");
		textarea.value = this.code.nativeElement.innerText || this.code.nativeElement.textContent;
		textarea.setAttribute("readonly", "");
		textarea.style.position = "absolute";
		textarea.style.right = "-99999px";
		document.body.appendChild(textarea);

		// save user selection
		const selected = document.getSelection().rangeCount ? document.getSelection().getRangeAt(0) : null;

		// copy to clipboard
		textarea.select();
		document.execCommand("copy");

		// remove textarea
		document.body.removeChild(textarea);

		// restore user selection
		if (selected) {
			document.getSelection().removeAllRanges();
			document.getSelection().addRange(selected);
		}
	}

	onCopyButtonClicked() {
		this.copyCode();

		this.showFeedback = true;

		setTimeout(() => {
			this.showFeedback = false;
		}, this.feedbackTimeout);
	}

	ngAfterViewInit() {
		setTimeout(() => {
			if (this.canExpand()) {
				this.hasExpandButton = true;
			} else {
				this.hasExpandButton = false;
			}
		});
	}

	/**
	 * Inline code snippet acts as button and makes the whole component clickable.
	 *
	 * This handles clicks in that case.
	 */
	@HostListener("click")
	hostClick() {
		if (this.display !== SnippetType.inline) {
			return;
		}

		this.onCopyButtonClicked();
	}

	protected canExpand() {
		return (this.code && this.code.nativeElement.getBoundingClientRect().height > 255) && this.display === "multi";
	}
}
