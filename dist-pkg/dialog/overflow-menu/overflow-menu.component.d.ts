import { ElementRef } from "@angular/core";
import { I18n } from "./../../i18n/i18n.module";
import { OverflowMenuDirective } from "./overflow-menu.directive";
/**
 * The OverFlow menu component encapsulates the OverFlowMenu directive, and the menu iconography into one convienent component
 *
 * [See demo](../../?path=/story/overflow-menu--basic)
 *
 * html:
 * ```
 * <ibm-overflow-menu>
 *	<ibm-overflow-menu-option>Option 1</ibm-overflow-menu-option>
 *	<ibm-overflow-menu-option>Option 2</ibm-overflow-menu-option>
 * </ibm-overflow-menu>
 * ```
 *
 * <example-url>../../iframe.html?id=overflow-menu--basic</example-url>
 */
export declare class OverflowMenu {
    protected elementRef: ElementRef;
    protected i18n: I18n;
    buttonLabel: any;
    flip: boolean;
    overflowMenuDirective: OverflowMenuDirective;
    open: boolean;
    constructor(elementRef: ElementRef, i18n: I18n);
}
