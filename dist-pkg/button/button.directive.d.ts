import { OnInit } from "@angular/core";
/**
 * A convinence directive for applying styling to a button.
 *
 * [See demo](../../?path=/story/button--basic)
 *
 * Example:
 *
 * ```html
 * <button ibmButton>A button</button>
 * <button ibmButton="secondary">A secondary button</button>
 * ```
 *
 * See the [vanilla carbon docs](http://www.carbondesignsystem.com/components/button/code) for more detail.
 *
 * <example-url>../../iframe.html?id=button--basic</example-url>
 */
export declare class Button implements OnInit {
    /**
     * sets the button type
     */
    ibmButton: "primary" | "secondary" | "tertiary" | "ghost" | "danger" | "danger--primary" | "toolbar-action";
    /**
     * Specify the size of the button
     */
    size: "normal" | "sm";
    readonly baseClass: boolean;
    primary: boolean;
    secondary: boolean;
    tertiary: boolean;
    ghost: boolean;
    danger: boolean;
    dangerPrimary: boolean;
    skeleton: boolean;
    smallSize: boolean;
    toolbarAction: boolean;
    overflowMenu: boolean;
    ngOnInit(): void;
}
