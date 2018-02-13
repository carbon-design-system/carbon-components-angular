import {
	Directive,
	Input,
	TemplateRef,
	ElementRef,
	Injector,
	ComponentFactoryResolver,
	ViewContainerRef
} from "@angular/core";
import { DialogDirective } from "./../dialog.directive";
import { Tooltip } from "./tooltip.component";
import { DialogService } from "./../dialog.service";


let tooltipCounter = 0;

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
@Directive({
	selector: "[nTooltip]",
	exportAs: "nTooltip",
	providers: [
		DialogService
	]
})
export class TooltipDirective extends DialogDirective {
	/**
	 * The string or template content to be exposed by the tooltip.
	 * @type {(string | TemplateRef<any>)}
	 * @memberof TooltipDirective
	 */
	@Input() nTooltip: string | TemplateRef<any>;
	/**
	 * Set tooltip type to reflect 'warning' or 'error' styles.
	 *
	 * @deprecated from the next major neutrino version in favor of
	 * `tooltip-type` because of name collision with HTML. Please use
	 * `tooltip-type` instead.
	 * @type {("warning" | "error" | "")}
	 * @memberof TooltipDirective
	 */
	@Input() type: "warning" | "error" | "" = "";
	/**
	 * Set tooltip type to reflect 'warning' or 'error' styles.
	 * @type {("warning" | "error" | "")}
	 * @memberof TooltipDirective
	 */
	// tslint:disable-next-line:no-input-rename
	@Input("tooltip-type") tooltipType: "warning" | "error" | "" = "";

	/**
	 * Creates an instance of `TooltipDirective`.
	 * @param {ElementRef} elementRef
	 * @param {ViewContainerRef} viewContainerRef
	 * @param {DialogService} dialogService
	 * @memberof TooltipDirective
	 */
	constructor(
		protected elementRef: ElementRef,
		protected viewContainerRef: ViewContainerRef,
		protected dialogService: DialogService
	) {
		super(elementRef, viewContainerRef, dialogService);
		dialogService.create(Tooltip);
	}

	/**
	 * Extends the `Dialog` component's data structure with tooltip properties.
	 * @memberof TooltipDirective
	 */
	onDialogInit() {
		tooltipCounter++;
		this.dialogConfig.compID = "tooltip-" + tooltipCounter;
		this.dialogConfig.content = this.nTooltip;
		this.dialogConfig.type = this.tooltipType !== undefined ? this.tooltipType : this.type;
		this.elementRef.nativeElement.setAttribute("aria-describedby", this.dialogConfig.compID);
	}
}
