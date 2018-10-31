import { I18n } from "../i18n/i18n.module";
export declare enum SnippetType {
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
export declare class CodeSnippet {
    protected i18n: I18n;
    /**
     * Variable used for creating unique ids for code-snippet components.
     * @type {number}
     * @static
     * @memberof CodeSnippet
     */
    static codeSnippetCount: number;
    /**
     * It can be `"single"`, `"multi"` or `"inline"`
     *
     * @type {SnippetType}
     * @memberof CodeSnippet
     */
    display: SnippetType;
    translations: any;
    /**
     * Text displayed in the tooltip when user clicks button to copy code.
     *
     * @memberof CodeSnippet
     */
    feedbackText: any;
    /**
     * Time in miliseconds to keep the feedback tooltip displayed.
     *
     * @memberof CodeSnippet
     */
    feedbackTimeout: number;
    expanded: boolean;
    snippetClass: boolean;
    readonly snippetSingleClass: boolean;
    readonly snippetMultiClass: boolean;
    readonly snippetInlineClass: boolean;
    readonly btnCopyClass: boolean;
    readonly displayStyle: string;
    readonly attrType: string;
    code: any;
    readonly shouldShowExpandButton: boolean;
    showFeedback: boolean;
    /**
     * Creates an instance of CodeSnippet.
     * @param {ChangeDetectorRef} changeDetectorRef
     * @param {ElementRef} elementRef
     * @param {Renderer2} renderer
     * @memberof CodeSnippet
     */
    constructor(i18n: I18n);
    toggleSnippetExpansion(): void;
    /**
     * Copies the code from the `<code>` block to clipboard.
     *
     * @memberof CodeSnippet
     */
    copyCode(): void;
    onCopyButtonClicked(): void;
    /**
     * Inline code snippet acts as button and makes the whole component clickable.
     *
     * This handles clicks in that case.
     *
     * @returns
     * @memberof CodeSnippet
     */
    hostClick(): void;
}
