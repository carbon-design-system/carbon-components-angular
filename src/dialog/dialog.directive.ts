import {
	Component,
	Directive,
	Input,
	Output,
	EventEmitter,
	OnInit,
	OnDestroy,
	Injector,
	ComponentRef,
	ElementRef,
	TemplateRef,
	ViewContainerRef,
	ComponentFactory,
	ComponentFactoryResolver,
	HostListener
} from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/throttleTime";
import "rxjs/add/observable/fromEvent";
import { DialogService } from "./dialog.service";
import { DialogConfig } from "./dialog-config.interface";


/**
 * A generic directive that can be inherited from to create dialogs (for example, a tooltip or popover)
 *
 * This class contains the relevant intilization code, specific templates, options, and additional inputs
 * should be specified in the derived class.
 *
 * NOTE: All child classes should add `DialogService` as a provider, otherwise they will lose context that
 * the service relies on.
 */
@Directive({
	selector: "[nDialog]",
	exportAs: "nDialog",
	providers: [
		DialogService
	]
})
export class DialogDirective implements OnInit, OnDestroy {
	/**
	 * Title for the dialog
	 * @type {string}
	 * @memberof DialogDirective
	 */
	@Input() title = "";
	/**
	 * Dialog body content.
	 * @type {(string | TemplateRef<any>)}
	 * @memberof DialogDirective
	 */
	@Input() nDialog: string | TemplateRef<any>;
	/**
	 * Defines how the Dialog is triggered.(Hover and click behave the same on mobile - both respond to a single tap)
	 * @type {("click" | "hover" | "mouseenter")}
	 * @memberof DialogDirective
	 */
	@Input() trigger: "click" | "hover" | "mouseenter" = "click";
	/**
	 * Placement of the dialog, usually relative to the element the directive is on.
	 * @type {("top" | "bottom" | "bottom-left" | "bottom-right" | "left" | "right")}
	 * @memberof DialogDirective
	 */
	@Input() placement: "top" | "bottom" | "bottom-left" | "bottom-right" | "left" | "right" = "left";
	/**
	 * Class to add to the dialog container
	 * @type {string}
	 * @memberof DialogDirective
	 */
	@Input() wrapperClass: string;
	/**
	 * Spacing between the dialog and it's triggering element
	 * @type {number}
	 * @memberof DialogDirective
	 */
	@Input() gap = 10;
	/**
	 * Value `true` sets Dialog be appened to the body (to break out of containers)
	 * @type {boolean}
	 * @memberof DialogDirective
	 */
	@Input() appendToBody = false;
	/**
	 * Determines if the Dialog will attempt to place itself for maximum visibility.
	 * @type {boolean}
	 * @memberof DialogDirective
	 */
	@Input() autoPosition = false;
	/**
	 * Optional data for templates
	 * @memberof DialogDirective
	 */
	@Input() data = {};
	/**
	 * Config object passed to the rendered component
	 * @type {DialogConfig}
	 * @memberof DialogDirective
	 */
	@Output() onClose: EventEmitter<any> = new EventEmitter<any>();
	dialogConfig: DialogConfig;

	/**
	 * Creates an instance of DialogDirective.
	 * @param {ElementRef} elementRef
	 * @param {ViewContainerRef} viewContainerRef
	 * @param {DialogService} dialogService
	 * @memberof DialogDirective
	 */
	constructor(
		protected elementRef: ElementRef,
		protected viewContainerRef: ViewContainerRef,
		protected dialogService: DialogService) {}

	/**
	 * Overrides 'touchstart' event to trigger a toggle on the Dialog.
	 * @param {any} evt
	 * @memberof DialogDirective
	 */
	@HostListener("touchstart", ["$event"])
	onTouchStart(evt) {
		evt.stopImmediatePropagation();
		evt.preventDefault();
		this.toggle();
	}
	/**
	 * Sets the config object and binds events for hovering or clicking before
	 * running code from child class.
	 * @memberof DialogDirective
	 */
	ngOnInit() {
		// fix for safari highjacking clicks
		document.body.firstElementChild.addEventListener("click", () => null, true);

		// set the config object (this can [and should!] be added to in child classes depending on what they need)
		this.dialogConfig = {
			title: this.title,
			content: this.nDialog,
			placement: this.placement,
			parentRef: this.elementRef,
			gap: this.gap,
			trigger: this.trigger,
			appendToBody: this.appendToBody,
			autoPosition: this.autoPosition,
			wrapperClass: this.wrapperClass,
			data: this.data
		};

		// bind events for hovering or clicking the host
		if (this.trigger === "hover" || this.trigger === "mouseenter") {
			Observable.fromEvent(this.elementRef.nativeElement, "mouseenter").subscribe(() => this.toggle());
			Observable.fromEvent(this.elementRef.nativeElement, "mouseout").subscribe(() => this.close());
			Observable.fromEvent(this.elementRef.nativeElement, "focus").subscribe(() => this.open());
			Observable.fromEvent(this.elementRef.nativeElement, "blur").subscribe(() => this.close());
		} else {
			Observable.fromEvent(this.elementRef.nativeElement, "click").subscribe(() => this.toggle());
		}

		// call onClose when the dialog is closed
		this.dialogService.isClosed.subscribe(value => {
			if (value) {
				this.onClose.emit();
				this.elementRef.nativeElement.setAttribute("aria-expanded", "false");
			}
		});

		// run any code a child class may need
		this.onDialogInit();
	}

	/*
	 * when the host dies, kill the popover
	 * useful for use in a modal or similar
	 * @memberof DialogDirective
	 */
	ngOnDestroy() {
		this.close();
	}

	/**
	 * Helper method to call dialogService 'open'
	 * @memberof DialogDirective
	 */
	open() {
		this.dialogService.open(this.viewContainerRef, this.dialogConfig);
		this.elementRef.nativeElement.setAttribute("aria-expanded", "true");
	}

	/**
	 * Helper method to call dialogService 'toggle'.
	 * @memberof DialogDirective
	 */
	toggle() {
		this.dialogService.toggle(this.viewContainerRef, this.dialogConfig);
		this.elementRef.nativeElement.setAttribute("aria-expanded", this.dialogService.isOpen);
	}

	/**
	 * Helper method to call dialogService 'close'.
	 * @memberof DialogDirective
	 */
	close() {
		this.dialogService.close(this.viewContainerRef);
		this.elementRef.nativeElement.setAttribute("aria-expanded", "false");
	}

	/**
	 * Empty method for child classes to override and specify additional init steps.
	 * Run after DialogDirective completes it's ngOnInit.
	 * @protected
	 * @memberof DialogDirective
	 */
	protected onDialogInit() {}
}
