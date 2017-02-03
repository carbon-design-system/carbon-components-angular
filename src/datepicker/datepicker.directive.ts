import {
	Directive,
	Input,
	TemplateRef,
	ElementRef,
	Injector,
	ComponentFactoryResolver,
	ViewContainerRef
} from "@angular/core";

import { PopoverDirective } from "./../popover/popover.directive";
import { DatepickerPopover } from "./datepicker-popover.component";
import { PopoverService } from "./../popover/popover.service";
import { DatepickerService } from "./datepicker.service";

@Directive({
	selector: "[cdlDatepicker]",
	exportAs: "cdlDatepicker",
	providers: [DatepickerService]
})
export class DatepickerDirective extends PopoverDirective {
	selectedDate;

	constructor(private _elementRef: ElementRef, private _injector: Injector,
			_componentFactoryResolver: ComponentFactoryResolver, private _viewContainerRef: ViewContainerRef) {
		super(_elementRef, _injector, _componentFactoryResolver, _viewContainerRef);

		this.popoverService = new PopoverService(DatepickerPopover, _viewContainerRef, _componentFactoryResolver, _injector);

		this.popoverService.isClosed.subscribe((date) => {
			this.selectedDate = date;
		});
	}
}
