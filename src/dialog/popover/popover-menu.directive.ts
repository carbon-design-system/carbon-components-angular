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
import { PopoverMenu } from "./popover-menu.component";
import { DialogService } from "./../dialog.service";

@Directive({
	selector: "[nPopoverMenu]",
	exportAs: "nPopoverMenu"
})
export class PopoverMenuDirective extends DialogDirective {
	@Input() footer: TemplateRef<any>;
	@Input() nPopoverMenu: string | TemplateRef<any>;

	constructor(
		protected _elementRef: ElementRef,
		protected _injector: Injector,
		protected _componentFactoryResolver: ComponentFactoryResolver,
		protected _viewContainerRef: ViewContainerRef
	) {
		super(_elementRef, _injector, _componentFactoryResolver, _viewContainerRef);
		this.dialogService = new DialogService(PopoverMenu, _viewContainerRef, _componentFactoryResolver, _injector);
	}

	onDialogInit() {
		this.dialogConfig.content = this.nPopoverMenu;
	}
}
