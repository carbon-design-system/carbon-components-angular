/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, ViewContainerRef, Input, TemplateRef, HostListener } from "@angular/core";
import { DialogDirective } from "./../dialog.directive";
import { DialogService } from "./../dialog.service";
import { OverflowMenuPane } from "./overflow-menu-pane.component";
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
export class OverflowMenuDirective extends DialogDirective {
    /**
     * Creates an instance of `OverflowMenuDirective`.
     * @param {?} elementRef
     * @param {?} viewContainerRef
     * @param {?} dialogService
     */
    constructor(elementRef, viewContainerRef, dialogService) {
        super(elementRef, viewContainerRef, dialogService);
        this.elementRef = elementRef;
        this.viewContainerRef = viewContainerRef;
        this.dialogService = dialogService;
        /**
         * Controls wether the overflow menu is flipped
         */
        this.flip = false;
        dialogService.create(OverflowMenuPane);
    }
    /**
     * @return {?}
     */
    onDialogInit() {
        this.dialogConfig.content = this.ibmOverflowMenu;
        this.dialogConfig["flip"] = this.flip;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    hostkeys(event) {
        switch (event.key) {
            case "Enter":
            case " ":
                event.preventDefault();
                this.toggle();
                break;
        }
    }
}
OverflowMenuDirective.decorators = [
    { type: Directive, args: [{
                selector: "[ibmOverflowMenu]",
                exportAs: "ibmOverflowMenu",
                providers: [
                    DialogService
                ]
            },] }
];
/** @nocollapse */
OverflowMenuDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: DialogService }
];
OverflowMenuDirective.propDecorators = {
    ibmOverflowMenu: [{ type: Input }],
    flip: [{ type: Input }],
    hostkeys: [{ type: HostListener, args: ["keydown", ["$event"],] }]
};
function OverflowMenuDirective_tsickle_Closure_declarations() {
    /**
     * Takes a template ref of `OverflowMenuOptions`s
     * @type {?}
     */
    OverflowMenuDirective.prototype.ibmOverflowMenu;
    /**
     * Controls wether the overflow menu is flipped
     * @type {?}
     */
    OverflowMenuDirective.prototype.flip;
    /** @type {?} */
    OverflowMenuDirective.prototype.elementRef;
    /** @type {?} */
    OverflowMenuDirective.prototype.viewContainerRef;
    /** @type {?} */
    OverflowMenuDirective.prototype.dialogService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmZsb3ctbWVudS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJib24tY29tcG9uZW50cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGlhbG9nL292ZXJmbG93LW1lbnUvb3ZlcmZsb3ctbWVudS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBQ1QsVUFBVSxFQUNWLGdCQUFnQixFQUNoQixLQUFLLEVBQ0wsV0FBVyxFQUNYLFlBQVksRUFDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQTBCbEUsTUFBTSw0QkFBNkIsU0FBUSxlQUFlOzs7Ozs7O0lBYXpELFlBQ1csVUFBc0IsRUFDdEIsZ0JBQWtDLEVBQ2xDLGFBQTRCO1FBRXRDLEtBQUssQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFKekMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGtCQUFhLEdBQWIsYUFBYSxDQUFlOzs7O29CQVJ2QixLQUFLO1FBV3BCLGFBQWEsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztLQUN2Qzs7OztJQUVELFlBQVk7UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQ2pELElBQUksQ0FBQyxZQUFZLFdBQVEsSUFBSSxDQUFDLElBQUksQ0FBQztLQUNuQzs7Ozs7SUFHRCxRQUFRLENBQUMsS0FBb0I7UUFDNUIsUUFBUSxLQUFLLENBQUMsR0FBRyxFQUFFO1lBQ2xCLEtBQUssT0FBTyxDQUFDO1lBQ2IsS0FBSyxHQUFHO2dCQUNQLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNkLE1BQU07U0FDUDtLQUNEOzs7WUEzQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFNBQVMsRUFBRTtvQkFDVixhQUFhO2lCQUNiO2FBQ0Q7Ozs7WUFqQ0EsVUFBVTtZQUNWLGdCQUFnQjtZQU1SLGFBQWE7Ozs4QkErQnBCLEtBQUs7bUJBSUwsS0FBSzt1QkFtQkwsWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdERpcmVjdGl2ZSxcblx0RWxlbWVudFJlZixcblx0Vmlld0NvbnRhaW5lclJlZixcblx0SW5wdXQsXG5cdFRlbXBsYXRlUmVmLFxuXHRIb3N0TGlzdGVuZXJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IERpYWxvZ0RpcmVjdGl2ZSB9IGZyb20gXCIuLy4uL2RpYWxvZy5kaXJlY3RpdmVcIjtcbmltcG9ydCB7IERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwiLi8uLi9kaWFsb2cuc2VydmljZVwiO1xuaW1wb3J0IHsgT3ZlcmZsb3dNZW51UGFuZSB9IGZyb20gXCIuL292ZXJmbG93LW1lbnUtcGFuZS5jb21wb25lbnRcIjtcblxuXG4vKipcbiAqIERpcmVjdGl2ZSBmb3IgZXh0ZW5kaW5nIGBEaWFsb2dgIHRvIGNyZWF0ZSBvdmVyZmxvdyBtZW51cy5cbiAqXG4gKiBjbGFzczogT3ZlcmZsb3dNZW51RGlyZWN0aXZlIChleHRlbmRzIERpYWxvZ0RpcmVjdGl2ZSlcbiAqXG4gKlxuICogc2VsZWN0b3I6IGBpYm1PdmVyZmxvd01lbnVgXG4gKlxuICpcbiAqIGBgYGh0bWxcbiAqIDxkaXYgW2libU92ZXJmbG93TWVudV09XCJ0ZW1wbGF0ZVJlZlwiPjwvZGl2PlxuICogPG5nLXRlbXBsYXRlICN0ZW1wbGF0ZVJlZj5cbiAqIFx0PCEtLSBvdmVyZmxvdyBtZW51IG9wdGlvbnMgaGVyZSAtLT5cbiAqIDwvbmctdGVtcGxhdGU+XG4gKiBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiBcIltpYm1PdmVyZmxvd01lbnVdXCIsXG5cdGV4cG9ydEFzOiBcImlibU92ZXJmbG93TWVudVwiLFxuXHRwcm92aWRlcnM6IFtcblx0XHREaWFsb2dTZXJ2aWNlXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgT3ZlcmZsb3dNZW51RGlyZWN0aXZlIGV4dGVuZHMgRGlhbG9nRGlyZWN0aXZlIHtcblx0LyoqXG5cdCAqIFRha2VzIGEgdGVtcGxhdGUgcmVmIG9mIGBPdmVyZmxvd01lbnVPcHRpb25zYHNcblx0ICovXG5cdEBJbnB1dCgpIGlibU92ZXJmbG93TWVudTogVGVtcGxhdGVSZWY8YW55Pjtcblx0LyoqXG5cdCAqIENvbnRyb2xzIHdldGhlciB0aGUgb3ZlcmZsb3cgbWVudSBpcyBmbGlwcGVkXG5cdCAqL1xuXHRASW5wdXQoKSBmbGlwID0gZmFsc2U7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgYE92ZXJmbG93TWVudURpcmVjdGl2ZWAuXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRwcm90ZWN0ZWQgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcblx0XHRwcm90ZWN0ZWQgZGlhbG9nU2VydmljZTogRGlhbG9nU2VydmljZVxuXHQpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmLCB2aWV3Q29udGFpbmVyUmVmLCBkaWFsb2dTZXJ2aWNlKTtcblx0XHRkaWFsb2dTZXJ2aWNlLmNyZWF0ZShPdmVyZmxvd01lbnVQYW5lKTtcblx0fVxuXG5cdG9uRGlhbG9nSW5pdCgpIHtcblx0XHR0aGlzLmRpYWxvZ0NvbmZpZy5jb250ZW50ID0gdGhpcy5pYm1PdmVyZmxvd01lbnU7XG5cdFx0dGhpcy5kaWFsb2dDb25maWcuZmxpcCA9IHRoaXMuZmxpcDtcblx0fVxuXG5cdEBIb3N0TGlzdGVuZXIoXCJrZXlkb3duXCIsIFtcIiRldmVudFwiXSlcblx0aG9zdGtleXMoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcblx0XHRzd2l0Y2ggKGV2ZW50LmtleSkge1xuXHRcdFx0Y2FzZSBcIkVudGVyXCI6XG5cdFx0XHRjYXNlIFwiIFwiOlxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR0aGlzLnRvZ2dsZSgpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cbn1cbiJdfQ==