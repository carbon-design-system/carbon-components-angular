import { OnInit, ViewContainerRef } from "@angular/core";
import { PlaceholderService } from "./../placeholder/placeholder.module";
/**
 * Deprecated as of v2.0, will be removed with v3.0
 * Using a dialog (popover, tooltip, etc) with appendToBody="true" in your application
 * requires *this* component (`n-dialog-placeholder`).
 * It would generally be placed near the end of your app component template
 * (app.component.ts or app.component.html) as:
 *
 * ```html
 * ...
 * <ibm-dialog-placeholder></ibm-dialog-placeholder>
 * ```
 *
 * A more complete example for `Popover` is given as follows:
 *
 * ```html
 * <button [ibmPopover]="Hello" appendToBody="true"></button>
 * ...
 * <ibm-dialog-placeholder></ibm-dialog-placeholder>
 * ```
 *
 * @deprecated
 */
export declare class DialogPlaceholder implements OnInit {
    placeholderService: PlaceholderService;
    /**
     * Maintains a reference to the view DOM element of the `DialogPlaceholder`.
     */
    viewContainerRef: ViewContainerRef;
    /**
     * Creates an instance of `DialogPlaceholder`.
     */
    constructor(placeholderService: PlaceholderService);
    /**
     * Initializes the component using `PlaceholderService`.
     */
    ngOnInit(): void;
}
