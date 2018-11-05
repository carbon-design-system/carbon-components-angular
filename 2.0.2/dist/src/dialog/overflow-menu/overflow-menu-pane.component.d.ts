import { ElementRef } from "@angular/core";
import { Dialog } from "../dialog.component";
import { I18n } from "./../../i18n/i18n.module";
/**
 * Extend the `Dialog` component to create an overflow menu.
 *
 * Not used directly. See overflow-menu.component and overflow-menu.directive for more
 */
export declare class OverflowMenuPane extends Dialog {
    protected elementRef: ElementRef;
    protected i18n: I18n;
    constructor(elementRef: ElementRef, i18n: I18n);
    onDialogInit(): void;
    hostkeys(event: KeyboardEvent): void;
    clickClose(event: any): void;
    private listItems;
}
