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

@Directive({
	selector: "[nTooltip]",
	exportAs: "nTooltip"
})
export class TooltipDirective extends DialogDirective {
	@Input() nTooltip: string | TemplateRef<any>;
	tooltipID: string;

	constructor(
		protected _elementRef: ElementRef,
		protected _dialogService: DialogService
	) {
		super(_elementRef, _dialogService);
		_dialogService.create(Tooltip);
	}

	onDialogInit() {
		tooltipCounter++;
		this.dialogConfig.compID = "tooltip-" + tooltipCounter;
		this.dialogConfig.content = this.nTooltip;
		this._elementRef.nativeElement.setAttribute("aria-describedby", this.dialogConfig.compID);
	}
}
