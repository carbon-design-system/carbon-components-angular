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
	@Input() footer: TemplateRef<any>;
	@Input() nPopover: string | TemplateRef<any>;

	constructor(
		protected _elementRef: ElementRef,
		protected _dialogService: DialogService
	) {
		super(_elementRef, _dialogService);
		_dialogService.create(Popover);
	}

	onDialogInit() {
		this.dialogConfig.content = this.nPopover;
		this.dialogConfig.footer = this.footer;
	}
}
