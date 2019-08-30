/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, HostBinding, ViewChild, HostListener } from "@angular/core";
import { I18n } from "../i18n/i18n.module";
/** @enum {string} */
const SnippetType = {
    single: "single",
    multi: "multi",
    inline: "inline",
};
export { SnippetType };
/**
 * [See demo](../../?path=/story/code-snippet--basic)
 *
 * ```html
 * <ibm-code-snippet>Code</ibm-code-snippet>
 * ```
 *
 * <example-url>../../iframe.html?id=code-snippet--basic</example-url>
 */
export class CodeSnippet {
    /**
     * Creates an instance of CodeSnippet.
     * @param {?} i18n
     */
    constructor(i18n) {
        this.i18n = i18n;
        /**
         * It can be `"single"`, `"multi"` or `"inline"`
         *
         */
        this.display = SnippetType.single;
        this.translations = this.i18n.get().CODE_SNIPPET;
        /**
         * Set to `"light"` to apply the light style on the code snippet.
         */
        this.theme = "dark";
        /**
         * Text displayed in the tooltip when user clicks button to copy code.
         *
         */
        this.feedbackText = this.translations.COPIED;
        /**
         * Time in miliseconds to keep the feedback tooltip displayed.
         *
         */
        this.feedbackTimeout = 2000;
        this.expanded = false;
        this.skeleton = false;
        this.snippetClass = true;
        this.showFeedback = false;
        CodeSnippet.codeSnippetCount++;
    }
    /**
     * @return {?}
     */
    get snippetSingleClass() {
        return this.display === SnippetType.single;
    }
    /**
     * @return {?}
     */
    get snippetMultiClass() {
        return this.display === SnippetType.multi;
    }
    /**
     * @return {?}
     */
    get snippetInlineClass() {
        return this.display === SnippetType.inline;
    }
    /**
     * @return {?}
     */
    get snippetInlineLightClass() {
        return this.display === SnippetType.inline && this.theme === "light";
    }
    /**
     * @return {?}
     */
    get btnCopyClass() {
        return this.display === SnippetType.inline;
    }
    /**
     * @return {?}
     */
    get displayStyle() {
        return this.display !== SnippetType.inline ? "block" : null;
    }
    /**
     * @return {?}
     */
    get attrType() {
        return this.display === SnippetType.inline ? "button" : null;
    }
    /**
     * @return {?}
     */
    get shouldShowExpandButton() {
        return this.code ? this.code.nativeElement.getBoundingClientRect().height > 255 : false;
    }
    /**
     * @return {?}
     */
    toggleSnippetExpansion() {
        this.expanded = !this.expanded;
    }
    /**
     * Copies the code from the `<code>` block to clipboard.
     *
     * @return {?}
     */
    copyCode() {
        /** @type {?} */
        const textarea = document.createElement("textarea");
        textarea.value = this.code.nativeElement.innerText || this.code.nativeElement.textContent;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "absolute";
        textarea.style.right = "-99999px";
        document.body.appendChild(textarea);
        /** @type {?} */
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
    /**
     * @return {?}
     */
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
     * @return {?}
     */
    hostClick() {
        if (this.display !== SnippetType.inline) {
            return;
        }
        this.onCopyButtonClicked();
    }
}
/**
 * Variable used for creating unique ids for code-snippet components.
 */
CodeSnippet.codeSnippetCount = 0;
CodeSnippet.decorators = [
    { type: Component, args: [{
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
				<ibm-icon-copy16 class="bx--snippet__icon"></ibm-icon-copy16>
				<ng-container *ngTemplateOutlet="feedbackTemplate"></ng-container>
			</button>
			<button
				*ngIf="display === 'multi' && shouldShowExpandButton"
				class="bx--btn bx--btn--ghost bx--btn--sm bx--snippet-btn--expand"
				(click)="toggleSnippetExpansion()"
				type="button">
				<span class="bx--snippet-btn--text">{{expanded ? translations.SHOW_LESS : translations.SHOW_MORE}}</span>
				<ibm-icon-chevron-down16 class="bx--icon-chevron--down" [ariaLabel]="translations.SHOW_MORE_ICON"></ibm-icon-chevron-down16>
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
            }] }
];
/** @nocollapse */
CodeSnippet.ctorParameters = () => [
    { type: I18n }
];
CodeSnippet.propDecorators = {
    display: [{ type: Input }],
    translations: [{ type: Input }],
    theme: [{ type: Input }],
    feedbackText: [{ type: Input }],
    feedbackTimeout: [{ type: Input }],
    expanded: [{ type: HostBinding, args: ["class.bx--snippet--expand",] }, { type: Input }],
    skeleton: [{ type: HostBinding, args: ["class.bx--skeleton",] }, { type: Input }],
    snippetClass: [{ type: HostBinding, args: ["class.bx--snippet",] }],
    snippetSingleClass: [{ type: HostBinding, args: ["class.bx--snippet--single",] }],
    snippetMultiClass: [{ type: HostBinding, args: ["class.bx--snippet--multi",] }],
    snippetInlineClass: [{ type: HostBinding, args: ["class.bx--snippet--inline",] }],
    snippetInlineLightClass: [{ type: HostBinding, args: ["class.bx--snippet--light",] }],
    btnCopyClass: [{ type: HostBinding, args: ["class.bx--btn--copy",] }],
    displayStyle: [{ type: HostBinding, args: ["style.display",] }],
    attrType: [{ type: HostBinding, args: ["attr.type",] }],
    code: [{ type: ViewChild, args: ["code",] }],
    hostClick: [{ type: HostListener, args: ["click",] }]
};
function CodeSnippet_tsickle_Closure_declarations() {
    /**
     * Variable used for creating unique ids for code-snippet components.
     * @type {?}
     */
    CodeSnippet.codeSnippetCount;
    /**
     * It can be `"single"`, `"multi"` or `"inline"`
     *
     * @type {?}
     */
    CodeSnippet.prototype.display;
    /** @type {?} */
    CodeSnippet.prototype.translations;
    /**
     * Set to `"light"` to apply the light style on the code snippet.
     * @type {?}
     */
    CodeSnippet.prototype.theme;
    /**
     * Text displayed in the tooltip when user clicks button to copy code.
     *
     * @type {?}
     */
    CodeSnippet.prototype.feedbackText;
    /**
     * Time in miliseconds to keep the feedback tooltip displayed.
     *
     * @type {?}
     */
    CodeSnippet.prototype.feedbackTimeout;
    /** @type {?} */
    CodeSnippet.prototype.expanded;
    /** @type {?} */
    CodeSnippet.prototype.skeleton;
    /** @type {?} */
    CodeSnippet.prototype.snippetClass;
    /** @type {?} */
    CodeSnippet.prototype.code;
    /** @type {?} */
    CodeSnippet.prototype.showFeedback;
    /** @type {?} */
    CodeSnippet.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS1zbmlwcGV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJjb2RlLXNuaXBwZXQvY29kZS1zbmlwcGV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsV0FBVyxFQUNYLFNBQVMsRUFDVCxZQUFZLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7SUFHMUMsUUFBUyxRQUFRO0lBQ2pCLE9BQVEsT0FBTztJQUNmLFFBQVMsUUFBUTs7Ozs7Ozs7Ozs7O0FBa0VsQixNQUFNOzs7OztJQW9FTCxZQUFzQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTs7Ozs7dUJBMURBLFdBQVcsQ0FBQyxNQUFNOzRCQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLFlBQVk7Ozs7cUJBS2pCLE1BQU07Ozs7OzRCQU1qQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU07Ozs7OytCQU1yQixJQUFJO3dCQUUrQixLQUFLO3dCQUNaLEtBQUs7NEJBRVgsSUFBSTs0QkE4QnRDLEtBQUs7UUFNbkIsV0FBVyxDQUFDLGdCQUFnQixFQUFFLENBQUM7S0FDL0I7Ozs7SUFwQ0QsSUFBOEMsa0JBQWtCO1FBQy9ELE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDO0tBQzNDOzs7O0lBQ0QsSUFBNkMsaUJBQWlCO1FBQzdELE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxXQUFXLENBQUMsS0FBSyxDQUFDO0tBQzFDOzs7O0lBQ0QsSUFBOEMsa0JBQWtCO1FBQy9ELE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDO0tBQzNDOzs7O0lBQ0QsSUFBNkMsdUJBQXVCO1FBQ25FLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxXQUFXLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssT0FBTyxDQUFDO0tBQ3JFOzs7O0lBQ0QsSUFBd0MsWUFBWTtRQUNuRCxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssV0FBVyxDQUFDLE1BQU0sQ0FBQztLQUMzQzs7OztJQUVELElBQWtDLFlBQVk7UUFDN0MsT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0tBQzVEOzs7O0lBQ0QsSUFBOEIsUUFBUTtRQUNyQyxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7S0FDN0Q7Ozs7SUFJRCxJQUFJLHNCQUFzQjtRQUN6QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0tBQ3hGOzs7O0lBV0Qsc0JBQXNCO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0tBQy9COzs7Ozs7SUFNRCxRQUFROztRQUVQLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEQsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO1FBQzFGLFFBQVEsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUNyQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7UUFDbEMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7O1FBR3BDLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzs7UUFHbkcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7O1FBRzdCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDOztRQUdwQyxJQUFJLFFBQVEsRUFBRTtZQUNiLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUMxQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzNDO0tBQ0Q7Ozs7SUFFRCxtQkFBbUI7UUFDbEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWhCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBRXpCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztTQUMxQixFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztLQUN6Qjs7Ozs7OztJQVFELFNBQVM7UUFDUixJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssV0FBVyxDQUFDLE1BQU0sRUFBRTtZQUN4QyxPQUFPO1NBQ1A7UUFFRCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztLQUMzQjs7Ozs7K0JBNUh5QixDQUFDOztZQTFEM0IsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrRFQ7YUFDRDs7OztZQXRFUSxJQUFJOzs7c0JBaUZYLEtBQUs7MkJBQ0wsS0FBSztvQkFLTCxLQUFLOzJCQU1MLEtBQUs7OEJBTUwsS0FBSzt1QkFFTCxXQUFXLFNBQUMsMkJBQTJCLGNBQUcsS0FBSzt1QkFDL0MsV0FBVyxTQUFDLG9CQUFvQixjQUFHLEtBQUs7MkJBRXhDLFdBQVcsU0FBQyxtQkFBbUI7aUNBQy9CLFdBQVcsU0FBQywyQkFBMkI7Z0NBR3ZDLFdBQVcsU0FBQywwQkFBMEI7aUNBR3RDLFdBQVcsU0FBQywyQkFBMkI7c0NBR3ZDLFdBQVcsU0FBQywwQkFBMEI7MkJBR3RDLFdBQVcsU0FBQyxxQkFBcUI7MkJBSWpDLFdBQVcsU0FBQyxlQUFlO3VCQUczQixXQUFXLFNBQUMsV0FBVzttQkFJdkIsU0FBUyxTQUFDLE1BQU07d0JBZ0VoQixZQUFZLFNBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0SW5wdXQsXG5cdEhvc3RCaW5kaW5nLFxuXHRWaWV3Q2hpbGQsXG5cdEhvc3RMaXN0ZW5lclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBJMThuIH0gZnJvbSBcIi4uL2kxOG4vaTE4bi5tb2R1bGVcIjtcblxuZXhwb3J0IGVudW0gU25pcHBldFR5cGUge1xuXHRzaW5nbGUgPSBcInNpbmdsZVwiLFxuXHRtdWx0aSA9IFwibXVsdGlcIixcblx0aW5saW5lID0gXCJpbmxpbmVcIlxufVxuXG4vKipcbiAqIFtTZWUgZGVtb10oLi4vLi4vP3BhdGg9L3N0b3J5L2NvZGUtc25pcHBldC0tYmFzaWMpXG4gKlxuICogYGBgaHRtbFxuICogPGlibS1jb2RlLXNuaXBwZXQ+Q29kZTwvaWJtLWNvZGUtc25pcHBldD5cbiAqIGBgYFxuICpcbiAqIDxleGFtcGxlLXVybD4uLi8uLi9pZnJhbWUuaHRtbD9pZD1jb2RlLXNuaXBwZXQtLWJhc2ljPC9leGFtcGxlLXVybD5cbiAqL1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImlibS1jb2RlLXNuaXBwZXRcIixcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiZGlzcGxheSA9PT0gJ2lubGluZSc7IGVsc2Ugbm90SW5saW5lXCI+XG5cdFx0XHQ8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29kZVRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG5cdFx0XHQ8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZmVlZGJhY2tUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuXHRcdDwvbmctY29udGFpbmVyPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNub3RJbmxpbmU+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYngtLXNuaXBwZXQtY29udGFpbmVyXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJ0cmFuc2xhdGlvbnMuQ09ERV9TTklQUEVUX1RFWFRcIj5cblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cInNrZWxldG9uXCI+XG5cdFx0XHRcdFx0PHNwYW4gKm5nSWY9XCJkaXNwbGF5ID09PSAnc2luZ2xlJzsgZWxzZSBtdWx0aVNrZWxldG9uXCI+PC9zcGFuPlxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSAjbXVsdGlTa2VsZXRvbj5cblx0XHRcdFx0XHRcdDxzcGFuPjwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuPjwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuPjwvc3Bhbj5cblx0XHRcdFx0XHQ8L25nLXRlbXBsYXRlPlxuXHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cblx0XHRcdFx0PHByZSAqbmdJZj1cIiFza2VsZXRvblwiPjxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb2RlVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj48L3ByZT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGJ1dHRvblxuXHRcdFx0XHQqbmdJZj1cIiFza2VsZXRvblwiXG5cdFx0XHRcdGNsYXNzPVwiYngtLXNuaXBwZXQtYnV0dG9uXCJcblx0XHRcdFx0W2F0dHIuYXJpYS1sYWJlbF09XCJ0cmFuc2xhdGlvbnMuQ09QWV9DT0RFXCJcblx0XHRcdFx0KGNsaWNrKT1cIm9uQ29weUJ1dHRvbkNsaWNrZWQoKVwiXG5cdFx0XHRcdHRhYmluZGV4PVwiMFwiPlxuXHRcdFx0XHQ8aWJtLWljb24tY29weTE2IGNsYXNzPVwiYngtLXNuaXBwZXRfX2ljb25cIj48L2libS1pY29uLWNvcHkxNj5cblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImZlZWRiYWNrVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cblx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PGJ1dHRvblxuXHRcdFx0XHQqbmdJZj1cImRpc3BsYXkgPT09ICdtdWx0aScgJiYgc2hvdWxkU2hvd0V4cGFuZEJ1dHRvblwiXG5cdFx0XHRcdGNsYXNzPVwiYngtLWJ0biBieC0tYnRuLS1naG9zdCBieC0tYnRuLS1zbSBieC0tc25pcHBldC1idG4tLWV4cGFuZFwiXG5cdFx0XHRcdChjbGljayk9XCJ0b2dnbGVTbmlwcGV0RXhwYW5zaW9uKClcIlxuXHRcdFx0XHR0eXBlPVwiYnV0dG9uXCI+XG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwiYngtLXNuaXBwZXQtYnRuLS10ZXh0XCI+e3tleHBhbmRlZCA/IHRyYW5zbGF0aW9ucy5TSE9XX0xFU1MgOiB0cmFuc2xhdGlvbnMuU0hPV19NT1JFfX08L3NwYW4+XG5cdFx0XHRcdDxpYm0taWNvbi1jaGV2cm9uLWRvd24xNiBjbGFzcz1cImJ4LS1pY29uLWNoZXZyb24tLWRvd25cIiBbYXJpYUxhYmVsXT1cInRyYW5zbGF0aW9ucy5TSE9XX01PUkVfSUNPTlwiPjwvaWJtLWljb24tY2hldnJvbi1kb3duMTY+XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNjb2RlVGVtcGxhdGU+XG5cdFx0XHQ8Y29kZSAjY29kZT48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9jb2RlPlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2ZlZWRiYWNrVGVtcGxhdGU+XG5cdFx0XHQ8ZGl2XG5cdFx0XHRjbGFzcz1cImJ4LS1idG4tLWNvcHlfX2ZlZWRiYWNrXCJcblx0XHRcdFtuZ0NsYXNzXT1cIntcblx0XHRcdFx0J2J4LS1idG4tLWNvcHlfX2ZlZWRiYWNrLS1kaXNwbGF5ZWQnOiBzaG93RmVlZGJhY2tcblx0XHRcdH1cIlxuXHRcdFx0W2F0dHIuZGF0YS1mZWVkYmFja109XCJmZWVkYmFja1RleHRcIj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgQ29kZVNuaXBwZXQge1xuXHQvKipcblx0ICogVmFyaWFibGUgdXNlZCBmb3IgY3JlYXRpbmcgdW5pcXVlIGlkcyBmb3IgY29kZS1zbmlwcGV0IGNvbXBvbmVudHMuXG5cdCAqL1xuXHRzdGF0aWMgY29kZVNuaXBwZXRDb3VudCA9IDA7XG5cblx0LyoqXG5cdCAqIEl0IGNhbiBiZSBgXCJzaW5nbGVcImAsIGBcIm11bHRpXCJgIG9yIGBcImlubGluZVwiYFxuXHQgKlxuXHQgKi9cblx0QElucHV0KCkgZGlzcGxheTogU25pcHBldFR5cGUgPSBTbmlwcGV0VHlwZS5zaW5nbGU7XG5cdEBJbnB1dCgpIHRyYW5zbGF0aW9ucyA9IHRoaXMuaTE4bi5nZXQoKS5DT0RFX1NOSVBQRVQ7XG5cblx0LyoqXG5cdCAqIFNldCB0byBgXCJsaWdodFwiYCB0byBhcHBseSB0aGUgbGlnaHQgc3R5bGUgb24gdGhlIGNvZGUgc25pcHBldC5cblx0ICovXG5cdEBJbnB1dCgpIHRoZW1lOiBcImxpZ2h0XCIgfCBcImRhcmtcIiA9IFwiZGFya1wiO1xuXG5cdC8qKlxuXHQgKiBUZXh0IGRpc3BsYXllZCBpbiB0aGUgdG9vbHRpcCB3aGVuIHVzZXIgY2xpY2tzIGJ1dHRvbiB0byBjb3B5IGNvZGUuXG5cdCAqXG5cdCAqL1xuXHRASW5wdXQoKSBmZWVkYmFja1RleHQgPSB0aGlzLnRyYW5zbGF0aW9ucy5DT1BJRUQ7XG5cblx0LyoqXG5cdCAqIFRpbWUgaW4gbWlsaXNlY29uZHMgdG8ga2VlcCB0aGUgZmVlZGJhY2sgdG9vbHRpcCBkaXNwbGF5ZWQuXG5cdCAqXG5cdCAqL1xuXHRASW5wdXQoKSBmZWVkYmFja1RpbWVvdXQgPSAyMDAwO1xuXG5cdEBIb3N0QmluZGluZyhcImNsYXNzLmJ4LS1zbmlwcGV0LS1leHBhbmRcIikgQElucHV0KCkgZXhwYW5kZWQgPSBmYWxzZTtcblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MuYngtLXNrZWxldG9uXCIpIEBJbnB1dCgpIHNrZWxldG9uID0gZmFsc2U7XG5cblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MuYngtLXNuaXBwZXRcIikgc25pcHBldENsYXNzID0gdHJ1ZTtcblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MuYngtLXNuaXBwZXQtLXNpbmdsZVwiKSBnZXQgc25pcHBldFNpbmdsZUNsYXNzKCkge1xuXHRcdHJldHVybiB0aGlzLmRpc3BsYXkgPT09IFNuaXBwZXRUeXBlLnNpbmdsZTtcblx0fVxuXHRASG9zdEJpbmRpbmcoXCJjbGFzcy5ieC0tc25pcHBldC0tbXVsdGlcIikgZ2V0IHNuaXBwZXRNdWx0aUNsYXNzKCkge1xuXHRcdHJldHVybiB0aGlzLmRpc3BsYXkgPT09IFNuaXBwZXRUeXBlLm11bHRpO1xuXHR9XG5cdEBIb3N0QmluZGluZyhcImNsYXNzLmJ4LS1zbmlwcGV0LS1pbmxpbmVcIikgZ2V0IHNuaXBwZXRJbmxpbmVDbGFzcygpIHtcblx0XHRyZXR1cm4gdGhpcy5kaXNwbGF5ID09PSBTbmlwcGV0VHlwZS5pbmxpbmU7XG5cdH1cblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MuYngtLXNuaXBwZXQtLWxpZ2h0XCIpIGdldCBzbmlwcGV0SW5saW5lTGlnaHRDbGFzcygpIHtcblx0XHRyZXR1cm4gdGhpcy5kaXNwbGF5ID09PSBTbmlwcGV0VHlwZS5pbmxpbmUgJiYgdGhpcy50aGVtZSA9PT0gXCJsaWdodFwiO1xuXHR9XG5cdEBIb3N0QmluZGluZyhcImNsYXNzLmJ4LS1idG4tLWNvcHlcIikgZ2V0IGJ0bkNvcHlDbGFzcygpIHtcblx0XHRyZXR1cm4gdGhpcy5kaXNwbGF5ID09PSBTbmlwcGV0VHlwZS5pbmxpbmU7XG5cdH1cblxuXHRASG9zdEJpbmRpbmcoXCJzdHlsZS5kaXNwbGF5XCIpIGdldCBkaXNwbGF5U3R5bGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGlzcGxheSAhPT0gU25pcHBldFR5cGUuaW5saW5lID8gXCJibG9ja1wiIDogbnVsbDtcblx0fVxuXHRASG9zdEJpbmRpbmcoXCJhdHRyLnR5cGVcIikgZ2V0IGF0dHJUeXBlKCkge1xuXHRcdHJldHVybiB0aGlzLmRpc3BsYXkgPT09IFNuaXBwZXRUeXBlLmlubGluZSA/IFwiYnV0dG9uXCIgOiBudWxsO1xuXHR9XG5cblx0QFZpZXdDaGlsZChcImNvZGVcIikgY29kZTtcblxuXHRnZXQgc2hvdWxkU2hvd0V4cGFuZEJ1dHRvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5jb2RlID8gdGhpcy5jb2RlLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0ID4gMjU1IDogZmFsc2U7XG5cdH1cblxuXHRzaG93RmVlZGJhY2sgPSBmYWxzZTtcblxuXHQvKipcblx0ICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBDb2RlU25pcHBldC5cblx0ICovXG5cdGNvbnN0cnVjdG9yKHByb3RlY3RlZCBpMThuOiBJMThuKSB7XG5cdFx0Q29kZVNuaXBwZXQuY29kZVNuaXBwZXRDb3VudCsrO1xuXHR9XG5cblx0dG9nZ2xlU25pcHBldEV4cGFuc2lvbigpIHtcblx0XHR0aGlzLmV4cGFuZGVkID0gIXRoaXMuZXhwYW5kZWQ7XG5cdH1cblxuXHQvKipcblx0ICogQ29waWVzIHRoZSBjb2RlIGZyb20gdGhlIGA8Y29kZT5gIGJsb2NrIHRvIGNsaXBib2FyZC5cblx0ICpcblx0ICovXG5cdGNvcHlDb2RlKCkge1xuXHRcdC8vIGNyZWF0ZSBpbnZpc2libGUsIHVuZWRpdGFibGUgdGV4dGFyZWEgd2l0aCBvdXIgY29kZSBpbiBpdFxuXHRcdGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuXHRcdHRleHRhcmVhLnZhbHVlID0gdGhpcy5jb2RlLm5hdGl2ZUVsZW1lbnQuaW5uZXJUZXh0IHx8IHRoaXMuY29kZS5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50O1xuXHRcdHRleHRhcmVhLnNldEF0dHJpYnV0ZShcInJlYWRvbmx5XCIsIFwiXCIpO1xuXHRcdHRleHRhcmVhLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuXHRcdHRleHRhcmVhLnN0eWxlLnJpZ2h0ID0gXCItOTk5OTlweFwiO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGV4dGFyZWEpO1xuXG5cdFx0Ly8gc2F2ZSB1c2VyIHNlbGVjdGlvblxuXHRcdGNvbnN0IHNlbGVjdGVkID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkucmFuZ2VDb3VudCA/IGRvY3VtZW50LmdldFNlbGVjdGlvbigpLmdldFJhbmdlQXQoMCkgOiBudWxsO1xuXG5cdFx0Ly8gY29weSB0byBjbGlwYm9hcmRcblx0XHR0ZXh0YXJlYS5zZWxlY3QoKTtcblx0XHRkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XG5cblx0XHQvLyByZW1vdmUgdGV4dGFyZWFcblx0XHRkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRleHRhcmVhKTtcblxuXHRcdC8vIHJlc3RvcmUgdXNlciBzZWxlY3Rpb25cblx0XHRpZiAoc2VsZWN0ZWQpIHtcblx0XHRcdGRvY3VtZW50LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpO1xuXHRcdFx0ZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkuYWRkUmFuZ2Uoc2VsZWN0ZWQpO1xuXHRcdH1cblx0fVxuXG5cdG9uQ29weUJ1dHRvbkNsaWNrZWQoKSB7XG5cdFx0dGhpcy5jb3B5Q29kZSgpO1xuXG5cdFx0dGhpcy5zaG93RmVlZGJhY2sgPSB0cnVlO1xuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLnNob3dGZWVkYmFjayA9IGZhbHNlO1xuXHRcdH0sIHRoaXMuZmVlZGJhY2tUaW1lb3V0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbmxpbmUgY29kZSBzbmlwcGV0IGFjdHMgYXMgYnV0dG9uIGFuZCBtYWtlcyB0aGUgd2hvbGUgY29tcG9uZW50IGNsaWNrYWJsZS5cblx0ICpcblx0ICogVGhpcyBoYW5kbGVzIGNsaWNrcyBpbiB0aGF0IGNhc2UuXG5cdCAqL1xuXHRASG9zdExpc3RlbmVyKFwiY2xpY2tcIilcblx0aG9zdENsaWNrKCkge1xuXHRcdGlmICh0aGlzLmRpc3BsYXkgIT09IFNuaXBwZXRUeXBlLmlubGluZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMub25Db3B5QnV0dG9uQ2xpY2tlZCgpO1xuXHR9XG59XG4iXX0=