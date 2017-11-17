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
	 * @type {("warning" | "error" | "")}
	 * @memberof TooltipDirective
	 */
	@Input() type: "warning" | "error" | "" = "";

	/**
	 * Creates an instance of TooltipDirective.
	 * @param {ElementRef} _elementRef
	 * @param {ViewContainerRef} _viewContainerRef
	 * @param {DialogService} _dialogService
	 * @memberof TooltipDirective
	 */
	constructor(
		protected _elementRef: ElementRef,
		protected _viewContainerRef: ViewContainerRef,
		protected _dialogService: DialogService
	) {
		super(_elementRef, _viewContainerRef, _dialogService);
		_dialogService.create(Tooltip);
	}

	/**
	 * Extends the `Dialog` component's data structure with tooltip properties.
	 * @memberof TooltipDirective
	 */
	onDialogInit() {
		tooltipCounter++;
		this.dialogConfig.compID = "tooltip-" + tooltipCounter;
		this.dialogConfig.content = this.nTooltip;
		this.dialogConfig.type = this.type;
		this._elementRef.nativeElement.setAttribute("aria-describedby", this.dialogConfig.compID);
	}
}
