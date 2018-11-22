/**
 * A directive for applying styling to an input element.
 *
 * Example:
 *
 * ```html
 * <input ibmText/>
 * ```
 *
 * See the [vanilla carbon docs](http://www.carbondesignsystem.com/components/text-input/code) for more detail.
 */
export declare class TextInput {
    /**
     * `light` or `dark` input theme
     */
    theme: "light" | "dark";
    inputClass: boolean;
    readonly isLightTheme: boolean;
}
