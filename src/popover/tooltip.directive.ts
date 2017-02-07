import {
	Directive,
	Input,
	TemplateRef,
	ElementRef,
	Injector,
	ComponentFactoryResolver,
	ViewContainerRef
} from "@angular/core";

import { PopoverDirective } from "./popover.directive";

let tooltipCounter = 0;

@Directive({
	selector: "[cdlTooltip]",
	exportAs: "cdlTooltip"
})
export class TooltipDirective extends PopoverDirective {
	@Input() cdlTooltip: string | TemplateRef<any>;
	tooltipID: string;

	constructor(private _elementRef: ElementRef, private _injector: Injector,
			_componentFactoryResolver: ComponentFactoryResolver, private _viewContainerRef: ViewContainerRef) {
		super(_elementRef, _injector, _componentFactoryResolver, _viewContainerRef);
	}

	ngOnInit() {
		tooltipCounter++;

		super.ngOnInit();

		this.popoverConfig.compID = "tooltip-" + tooltipCounter;
		this.popoverConfig.isTooltip = true;
		this.popoverConfig.content = this.cdlTooltip;
		this._elementRef.nativeElement.setAttribute("aria-describedby", this.popoverConfig.compID);
	}
}
