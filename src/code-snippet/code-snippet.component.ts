import {
	Component,
	Input,
	HostBinding,
	ViewChild,
	HostListener
} from "@angular/core";

import { I18n } from "../i18n/i18n.module";

export enum SnippetType {
	single = "single",
	multi = "multi",
	inline = "inline"
}

/**
 * ```html
 * <ibm-code-snippet>Code</ibm-code-snippet>
 * ```
 * @export
 * @class CodeSnippet
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
				<pre><ng-container *ngTemplateOutlet="codeTemplate"></ng-container></pre>
			</div>
			<button
				class="bx--snippet-button"
				[attr.aria-label]="translations.COPY_CODE"
				(click)="onCopyButtonClicked()"
				tabindex="0">
				<svg class="bx--snippet__icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
					<path d="M1 10H0V2C0 .9.9 0 2 0h8v1H2c-.6 0-1 .5-1 1v8z" />
					<path d="M11 4.2V8h3.8L11 4.2zM15 9h-4c-.6 0-1-.4-1-1V4H4.5c-.3 0-.5.2-.5.5v10c0 .3.2.5.5.5h10c.3 0
						.5-.2.5-.5V9zm-4-6c.1 0 .3.1.4.1l4.5 4.5c0 .1.1.3.1.4v6.5c0 .8-.7 1.5-1.5 1.5h-10c-.8
						0-1.5-.7-1.5-1.5v-10C3 3.7 3.7 3 4.5 3H11z"/>
				</svg>
				<ng-container *ngTemplateOutlet="feedbackTemplate"></ng-container>
			</button>
			<button
				*ngIf="display === 'multi' && shouldShowExpandButton"
				class="bx--btn bx--btn--ghost bx--btn--sm bx--snippet-btn--expand"
				(click)="toggleSnippetExpansion()"
				type="button">
				<span class="bx--snippet-btn--text">{{snippetExpanded ? translations.SHOW_LESS : translations.SHOW_MORE}}</span>
				<svg
					class="bx--icon-chevron--down"
					width="12" height="7"
					viewBox="0 0 12 7"
					[attr.aria-label]="translations.SHOW_MORE_ICON">
					<title>{{translations.SHOW_MORE_ICON}}</title>
					<path fill-rule="nonzero" d="M6.002 5.55L11.27 0l.726.685L6.003 7 0 .685.726 0z" />
				</svg>
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
export class CodeSnippet {
	/**
	 * Variable used for creating unique ids for code-snippet components.
	 * @type {number}
	 * @static
	 * @memberof CodeSnippet
	 */
	static codeSnippetCount = 0;

	/**
	 * It can be `"single"`, `"multi"` or `"inline"`
	 *
	 * @type {SnippetType}
	 * @memberof CodeSnippet
	 */
	@Input() display: SnippetType = SnippetType.single;
	@Input() translations = this.i18n.get().CODE_SNIPPET;

	/**
	 * Text displayed in the tooltip when user clicks button to copy code.
	 *
	 * @memberof CodeSnippet
	 */
	@Input() feedbackText = this.translations.COPIED;

	/**
	 * Time in miliseconds to keep the feedback tooltip displayed.
	 *
	 * @memberof CodeSnippet
	 */
	@Input() feedbackTimeout = 2000;

	@HostBinding("class.bx--snippet--expand") @Input() snippetExpanded = false;

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
	@HostBinding("class.bx--btn--copy") get btnCopyClass() {
		return this.display === SnippetType.inline;
	}

	@HostBinding("style.display") get displayStyle() {
		return this.display !== SnippetType.inline ? "block" : null;
	}
	@HostBinding("attr.type") get attrType() {
		return this.display === SnippetType.inline ? "button" : null;
	}

	@ViewChild("code") code;

	get shouldShowExpandButton() {
		return this.code ? this.code.nativeElement.getBoundingClientRect().height > 255 : false;
	}

	showFeedback = false;


	/**
	 * Creates an instance of CodeSnippet.
	 * @param {ChangeDetectorRef} changeDetectorRef
	 * @param {ElementRef} elementRef
	 * @param {Renderer2} renderer
	 * @memberof CodeSnippet
	 */
	constructor(protected i18n: I18n) {
		CodeSnippet.codeSnippetCount++;
	}

	toggleSnippetExpansion() {
		this.snippetExpanded = !this.snippetExpanded;
	}

	/**
	 * Copies the code from the `<code>` block to clipboard.
	 *
	 * @memberof CodeSnippet
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

	/**
	 * Inline code snippet acts as button and makes the whole component clickable.
	 *
	 * This handles clicks in that case.
	 *
	 * @returns
	 * @memberof CodeSnippet
	 */
	@HostListener("click")
	hostClick() {
		if (this.display !== SnippetType.inline) {
			return;
		}

		this.onCopyButtonClicked();
	}
}
