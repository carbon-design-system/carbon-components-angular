import {
	Component,
	Directive,
	Input,
	EventEmitter,
	OnInit,
	Injector,
	ComponentRef,
	ElementRef,
	TemplateRef,
	ViewContainerRef,
	ComponentFactory,
	ComponentFactoryResolver,
	HostListener
} from "@angular/core";
import { DialogDirective } from "./../dialog.directive";
import { Popover } from "./popover.component";
import { DialogService } from "./../dialog.service";

@Directive({
	selector: "[nPopover]",
	exportAs: "nPopover"
})
export class PopoverDirective extends DialogDirective {
	@Input() popoverMenu = false;
	@Input() popoverFilter = false;
	@Input() footer: TemplateRef<any>;
	@Input() nPopover: string | TemplateRef<any>;

	constructor(
		protected _elementRef: ElementRef,
		protected _injector: Injector,
		protected _componentFactoryResolver: ComponentFactoryResolver,
		protected _viewContainerRef: ViewContainerRef
	) {
		super(_elementRef, _injector, _componentFactoryResolver, _viewContainerRef);
		this.dialogService = new DialogService(Popover, _viewContainerRef, _componentFactoryResolver, _injector);
	}

	dialogInit() {
		this.dialogConfig.content = this.nPopover;
		this.dialogConfig.popoverMenu = this.popoverMenu;
		this.dialogConfig.popoverFilter = this.popoverFilter;
	}
}
