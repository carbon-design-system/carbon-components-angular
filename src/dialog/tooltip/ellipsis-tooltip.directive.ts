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
import { DialogService } from "./../dialog.service";
import { Tooltip } from "./tooltip.component";

@Directive({
	selector: "[nEllipsisTooltip]"
})
export class EllipsisTooltipDirective extends DialogDirective {
	constructor(
		protected _elementRef: ElementRef,
		protected _injector: Injector,
		protected _componentFactoryResolver: ComponentFactoryResolver,
		protected _viewContainerRef: ViewContainerRef
	) {
		super(_elementRef, _injector, _componentFactoryResolver, _viewContainerRef);
		this.dialogService = new DialogService(Tooltip, _viewContainerRef, _componentFactoryResolver, _injector);
	}

	toggle() {
		if (this._elementRef.nativeElement.scrollWidth <= this._elementRef.nativeElement.offsetWidth) {
			return;
		}

		this.dialogConfig.content = this._elementRef.nativeElement.innerText;
		super.toggle();
	}
}
