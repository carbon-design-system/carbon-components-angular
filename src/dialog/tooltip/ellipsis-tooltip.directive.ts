import {
	Directive,
	Input,
	TemplateRef,
	ElementRef,
	Injector,
	ComponentFactoryResolver,
	ViewContainerRef
} from "@angular/core";
import { TooltipDirective } from "./tooltip.directive";
import { DialogService } from "./../dialog.service";
import { Tooltip } from "./tooltip.component";

@Directive({
	selector: "[nEllipsisTooltip]",
	providers: [
		DialogService
	]
})
export class EllipsisTooltipDirective extends TooltipDirective {
	toggle() {
		if (this._elementRef.nativeElement.scrollWidth <= this._elementRef.nativeElement.offsetWidth) {
			return;
		}

		this.dialogConfig.content = this._elementRef.nativeElement.innerText;
		super.toggle();
	}
}
