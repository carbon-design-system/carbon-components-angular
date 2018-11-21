/**
 * A directive for applying styling to a textarea element.
 *
 * Example:
 *
 * ```html
 * <textarea ibmTextArea></textarea>
 * ```
 *
 * See the [vanilla carbon docs](http://www.carbondesignsystem.com/components/text-input/code) for more detail.
 */
export declare class TextArea {
    /**
     * `light` or `dark` input theme
     */
    theme: "light" | "dark";
    baseClass: boolean;
    readonly isLightTheme: boolean;
}
