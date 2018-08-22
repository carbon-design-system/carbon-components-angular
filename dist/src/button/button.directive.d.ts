import { OnInit } from "@angular/core";
/**
 * A convinence directive for applying styling to a button.
 *
 * Example:
 *
 * ```hmtl
 * <button ibmButton>A button</button>
 * <button ibmButton="secondary">A secondary button</button>
 * ```
 *
 * See the [vanilla carbon docs](http://www.carbondesignsystem.com/components/button/code) for more detail.
 */
export declare class Button implements OnInit {
    /**
     * sets the button type
     */
    ibmButton: "primary" | "secondary" | "tertiary" | "ghost" | "danger" | "danger--primary";
    /**
     * Specify the size of the button
     */
    size: "normal" | "sm";
    btnClass: string;
    primary: boolean;
    secondary: boolean;
    tertiary: boolean;
    ghost: boolean;
    danger: boolean;
    dangerPrimary: boolean;
    smallSize: boolean;
    ngOnInit(): void;
}
