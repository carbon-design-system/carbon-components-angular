import { I18n } from "../i18n/i18n.module";
export declare enum SnippetType {
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
export declare class CodeSnippet {
    protected i18n: I18n;
    /**
     * Variable used for creating unique ids for code-snippet components.
     */
    static codeSnippetCount: number;
    /**
     * It can be `"single"`, `"multi"` or `"inline"`
     *
     */
    display: SnippetType;
    translations: any;
    /**
     * Set to `"light"` to apply the light style on the code snippet.
     */
    theme: "light" | "dark";
    /**
     * Text displayed in the tooltip when user clicks button to copy code.
     *
     */
    feedbackText: any;
    /**
     * Time in miliseconds to keep the feedback tooltip displayed.
     *
     */
    feedbackTimeout: number;
    expanded: boolean;
    skeleton: boolean;
    snippetClass: boolean;
    readonly snippetSingleClass: boolean;
    readonly snippetMultiClass: boolean;
    readonly snippetInlineClass: boolean;
    readonly snippetInlineLightClass: boolean;
    readonly btnCopyClass: boolean;
    readonly displayStyle: string;
    readonly attrType: string;
    code: any;
    readonly shouldShowExpandButton: boolean;
    showFeedback: boolean;
    /**
     * Creates an instance of CodeSnippet.
     */
    constructor(i18n: I18n);
    toggleSnippetExpansion(): void;
    /**
     * Copies the code from the `<code>` block to clipboard.
     *
     */
    copyCode(): void;
    onCopyButtonClicked(): void;
    /**
     * Inline code snippet acts as button and makes the whole component clickable.
     *
     * This handles clicks in that case.
     */
    hostClick(): void;
}
