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
	selector: "[cdlEllipsisTooltip]"
})
export class EllipsisTooltipDirective extends PopoverDirective {
	constructor(private _elementRef: ElementRef, private _injector: Injector,
			_componentFactoryResolver: ComponentFactoryResolver, private _viewContainerRef: ViewContainerRef) {
		super(_elementRef, _injector, _componentFactoryResolver, _viewContainerRef);
		this.trigger = "mouseenter";
		this.isTooltip = true;
	}

	open() {
		if (this._elementRef.nativeElement.scrollWidth <= this._elementRef.nativeElement.offsetWidth) {
			return;
		}

		this.cdlPopover = this._elementRef.nativeElement.innerText;
		super.open();
	}
}
