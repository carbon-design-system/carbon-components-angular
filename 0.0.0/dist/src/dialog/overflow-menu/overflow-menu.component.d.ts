import { ElementRef } from "@angular/core";
import { I18n } from "./../../i18n/i18n.module";
/**
 * The OverFlow menu component encapsulates the OverFlowMenu directive, and the menu iconography into one convienent component
 *
 * html:
 * ```
 * <ibm-overflow-menu>
 *	<ibm-overflow-menu-option>Option 1</ibm-overflow-menu-option>
 *	<ibm-overflow-menu-option>Option 2</ibm-overflow-menu-option>
 * </ibm-overflow-menu>
 * ```
 */
export declare class OverflowMenu {
    protected elementRef: ElementRef;
    protected i18n: I18n;
    buttonLabel: any;
    constructor(elementRef: ElementRef, i18n: I18n);
    readonly open: boolean;
}
