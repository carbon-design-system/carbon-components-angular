import { ElementRef, ViewContainerRef, TemplateRef } from "@angular/core";
import { DialogDirective } from "./../dialog.directive";
import { DialogService } from "./../dialog.service";
/**
 * Directive for extending `Dialog` to create overflow menus.
 *
 * class: OverflowMenuDirective (extends DialogDirective)
 *
 *
 * selector: `ibmOverflowMenu`
 *
 *
 * ```html
 * <div [ibmOverflowMenu]="templateRef"></div>
 * <ng-template #templateRef>
 * 	<!-- overflow menu options here -->
 * </ng-template>
 * ```
 */
export declare class OverflowMenuDirective extends DialogDirective {
    protected elementRef: ElementRef;
    protected viewContainerRef: ViewContainerRef;
    protected dialogService: DialogService;
    /**
     * Takes a template ref of `OverflowMenuOptions`s
     */
    ibmOverflowMenu: TemplateRef<any>;
    /**
     * Controls wether the overflow menu is flipped
     */
    flip: boolean;
    /**
     * Creates an instance of `OverflowMenuDirective`.
     */
    constructor(elementRef: ElementRef, viewContainerRef: ViewContainerRef, dialogService: DialogService);
    onDialogInit(): void;
    hostkeys(event: KeyboardEvent): void;
}
