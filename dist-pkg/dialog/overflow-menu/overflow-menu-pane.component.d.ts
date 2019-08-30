import { ElementRef, AfterViewInit } from "@angular/core";
import { Dialog } from "../dialog.component";
import { I18n } from "./../../i18n/i18n.module";
import { ExperimentalService } from "./../../experimental.module";
/**
 * Extend the `Dialog` component to create an overflow menu.
 *
 * Not used directly. See overflow-menu.component and overflow-menu.directive for more
 */
export declare class OverflowMenuPane extends Dialog implements AfterViewInit {
    protected elementRef: ElementRef;
    protected i18n: I18n;
    protected experimental: ExperimentalService;
    constructor(elementRef: ElementRef, i18n: I18n, experimental: ExperimentalService);
    onDialogInit(): void;
    hostkeys(event: KeyboardEvent): void;
    afterDialogViewInit(): void;
    protected listItems(): HTMLElement[];
}
