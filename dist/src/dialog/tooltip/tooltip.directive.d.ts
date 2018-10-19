import { TemplateRef, ElementRef, ViewContainerRef } from "@angular/core";
import { DialogDirective } from "./../dialog.directive";
import { DialogService } from "./../dialog.service";
/**
 * Directive for extending `Dialog` to create tooltips.
 *
 * class: TooltipDirective (extends PopoverDirective)
 *
 *
 * selector: `nTooltip`
 *
 *
 * ```html
 * <button nTooltip="I am a tooltip" placement="right" trigger="mouseenter" type="danger">Tooltip Right</button>
 * <button nTooltip="I am a tooltip" type="warning">Tooltip Top warning on click</button>
 * ```
 *
 * @export
 * @class TooltipDirective
 * @extends {DialogDirective}
 */
export declare class TooltipDirective extends DialogDirective {
    protected elementRef: ElementRef;
    protected viewContainerRef: ViewContainerRef;
    protected dialogService: DialogService;
    static tooltipCounter: number;
    /**
     * The string or template content to be exposed by the tooltip.
     * @type {(string | TemplateRef<any>)}
     * @memberof TooltipDirective
     */
    ibmTooltip: string | TemplateRef<any>;
    /**
     * Set tooltip type to reflect 'warning' or 'error' styles.
     *
     * @deprecated from the next major neutrino version in favor of
     * `tooltip-type` because of name collision with HTML. Please use
     * `tooltip-type` instead.
     * @type {("warning" | "error" | "")}
     * @memberof TooltipDirective
     */
    type: "warning" | "error" | "";
    /**
     * Set tooltip type to reflect 'warning' or 'error' styles.
     * @type {("warning" | "error" | "")}
     * @memberof TooltipDirective
     */
    tooltipType: "warning" | "error" | "";
    descriptorId: string;
    /**
     * Creates an instance of `TooltipDirective`.
     * @param {ElementRef} elementRef
     * @param {ViewContainerRef} viewContainerRef
     * @param {DialogService} dialogService
     * @memberof TooltipDirective
     */
    constructor(elementRef: ElementRef, viewContainerRef: ViewContainerRef, dialogService: DialogService);
    /**
     * Extends the `Dialog` component's data structure with tooltip properties.
     * @memberof TooltipDirective
     */
    onDialogInit(): void;
}
