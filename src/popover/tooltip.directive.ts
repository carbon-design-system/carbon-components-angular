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

@Directive({
	selector: "[cdlTooltip]",
	exportAs: "cdlTooltip"
})
export class TooltipDirective extends PopoverDirective {
	@Input() cdlTooltip: string | TemplateRef<any>;

	constructor(private _elementRef: ElementRef, private _injector: Injector,
			_componentFactoryResolver: ComponentFactoryResolver, private _viewContainerRef: ViewContainerRef) {
		super(_elementRef, _injector, _componentFactoryResolver, _viewContainerRef);
	}

	open() {
		this.cdlPopover = this.cdlTooltip;
		this.isTooltip = true;
		super.open();
	}
}
