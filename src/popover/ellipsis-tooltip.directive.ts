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
	constructor(public _elementRef: ElementRef, public _injector: Injector,
			_componentFactoryResolver: ComponentFactoryResolver, public _viewContainerRef: ViewContainerRef) {
		super(_elementRef, _injector, _componentFactoryResolver, _viewContainerRef);
		this.trigger = "mouseenter";
		this.isTooltip = true;
	}

	toggle() {
		if (this._elementRef.nativeElement.scrollWidth <= this._elementRef.nativeElement.offsetWidth) {
			return;
		}

		this.popoverConfig.content = this._elementRef.nativeElement.innerText;
		super.toggle();
	}
}
