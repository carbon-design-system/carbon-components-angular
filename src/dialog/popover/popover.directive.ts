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


/**
 * Directive for extending the neutrino `Dialog` Component to render a popover element.
 * @export
 * @class PopoverDirective
 * @extends {DialogDirective}
 */
@Directive({
	selector: "[nPopover]",
	exportAs: "nPopover",
	providers: [
		DialogService
	]
})
export class PopoverDirective extends DialogDirective {
	/**
	 * To contain the footer template for the `Popover`.
	 * @type {TemplateRef<any>}
	 * @memberof PopoverDirective
	 */
	@Input() footer: TemplateRef<any>;
	/**
	 * The content for the `Popover`.
	 * @type {(string | TemplateRef<any>)}
	 * @memberof PopoverDirective
	 */
	@Input() nPopover: string | TemplateRef<any>;

	/**
	 * Creates an instance of PopoverDirective.
	 * @param {ElementRef} _elementRef
	 * @param {ViewContainerRef} _viewContainerRef
	 * @param {DialogService} _dialogService
	 * @memberof PopoverDirective
	 */
	constructor(
		protected _elementRef: ElementRef,
		protected _viewContainerRef: ViewContainerRef,
		protected _dialogService: DialogService
	) {
		super(_elementRef, _viewContainerRef, _dialogService);
		_dialogService.create(Popover);
	}

	/**
	 * Extends the `Dialog` component's data structure with popover content.
	 * @memberof PopoverDirective
	 */
	onDialogInit() {
		this.dialogConfig.content = this.nPopover;
		this.dialogConfig.footer = this.footer;
	}
}
