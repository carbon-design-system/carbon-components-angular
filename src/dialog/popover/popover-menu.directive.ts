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
	exportAs: "nPopoverMenu",
	providers: [
		DialogService
	]
})
export class PopoverMenuDirective extends DialogDirective {
	@Input() footer: TemplateRef<any>;
	@Input() nPopoverMenu: string | TemplateRef<any>;

	constructor(
		protected _elementRef: ElementRef,
		protected _viewContainerRef: ViewContainerRef,
		protected _dialogService: DialogService
	) {
		super(_elementRef, _viewContainerRef, _dialogService);
		_dialogService.create(PopoverMenu);
	}

	onDialogInit() {
		this.dialogConfig.content = this.nPopoverMenu;
	}
}
