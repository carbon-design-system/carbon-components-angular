import {
	Directive,
	Input,
	Output,
	EventEmitter,
	OnInit,
	OnDestroy,
	ElementRef,
	TemplateRef,
	ViewContainerRef,
	HostListener,
	OnChanges,
	HostBinding
} from "@angular/core";
import { fromEvent } from "rxjs";
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
	selector: "[ibmDialog]",
	exportAs: "ibmDialog",
	providers: [
		DialogService
	]
})
export class DialogDirective implements OnInit, OnDestroy, OnChanges {
	/**
	 * Title for the dialog
	 * @type {string}
	 */
	@Input() title = "";
	/**
	 * Dialog body content.
	 * @type {(string | TemplateRef<any>)}
	 */
	@Input() ibmDialog: string | TemplateRef<any>;
	/**
	 * Defines how the Dialog is triggered.(Hover and click behave the same on mobile - both respond to a single tap)
	 * @type {("click" | "hover" | "mouseenter")}
	 */
	@Input() trigger: "click" | "hover" | "mouseenter" = "click";
	/**
	 * Placement of the dialog, usually relative to the element the directive is on.
	 */
	@Input() placement = "left";
	/**
	 * Class to add to the dialog container
	 * @type {string}
	 */
	@Input() wrapperClass: string;
	/**
	 * Spacing between the dialog and it's triggering element
	 * @type {number}
	 */
	@Input() gap = 0;
	/**
	 * Deprecated. Defaults to true. Use appendInline to keep dialogs within page flow
	 * Value `true` sets Dialog be appened to the body (to break out of containers)
	 */
	@Input() set appendToBody(v: boolean) {
		console.log("`appendToBody` has been deprecated. Dialogs now append to the body by default.");
		console.log("Ensure you have an `ibm-placeholder` in your app.");
		console.log("Use `appendInline` if you need to position your dialogs within the normal page flow.");
		this.appendInline = !v;
	}
	get appendToBody() {
		return !this.appendInline;
	}
	/**
	 * Set to `true` to open the dialog next to the triggering component
	 */
	@Input() appendInline = false;
	/**
	 * Optional data for templates
	 */
	@Input() data = {};
	/**
	 * Config object passed to the rendered component
	 */
	@Output() onClose: EventEmitter<any> = new EventEmitter<any>();
	dialogConfig: DialogConfig;

	@HostBinding("attr.role") role = "button";
	@HostBinding("attr.aria-expanded") expanded = false;

	/**
	 * Creates an instance of DialogDirective.
	 * @param {ElementRef} elementRef
	 * @param {ViewContainerRef} viewContainerRef
	 * @param {DialogService} dialogService
	 */
	constructor(
		protected elementRef: ElementRef,
		protected viewContainerRef: ViewContainerRef,
		protected dialogService: DialogService) {}

	/**
	 * Overrides 'touchstart' event to trigger a toggle on the Dialog.
	 * @param {any} evt
	 */
	@HostListener("touchstart", ["$event"])
	onTouchStart(evt) {
		evt.stopImmediatePropagation();
		evt.preventDefault();
		this.toggle();
	}

	ngOnChanges() {
		// set the config object (this can [and should!] be added to in child classes depending on what they need)
		this.dialogConfig = {
			title: this.title,
			content: this.ibmDialog,
			placement: this.placement,
			parentRef: this.elementRef,
			gap: this.gap,
			trigger: this.trigger,
			appendInline: this.appendInline,
			wrapperClass: this.wrapperClass,
			data: this.data
		};
	}

	/**
	 * Sets the config object and binds events for hovering or clicking before
	 * running code from child class.
	 */
	ngOnInit() {
		// fix for safari hijacking clicks
		this.dialogService.singletonClickListen();

		// bind events for hovering or clicking the host
		if (this.trigger === "hover" || this.trigger === "mouseenter") {
			fromEvent(this.elementRef.nativeElement, "mouseenter").subscribe(() => this.toggle());
			fromEvent(this.elementRef.nativeElement, "mouseout").subscribe(() => this.close());
			fromEvent(this.elementRef.nativeElement, "focus").subscribe(() => this.open());
			fromEvent(this.elementRef.nativeElement, "blur").subscribe(() => this.close());
		} else {
			fromEvent(this.elementRef.nativeElement, "click").subscribe(() => this.toggle());
		}

		// call onClose when the dialog is closed
		// - Enforce accessibility by updating an aria attr for nativeElement.
		this.dialogService.isClosed.subscribe(value => {
			if (value) {
				this.onClose.emit();
				this.expanded = false;
			}
		});

		// run any code a child class may need
		this.onDialogInit();
	}

	/**
	 * When the host dies, kill the popover.
	 * - Useful for use in a modal or similar.
	 */
	ngOnDestroy() {
		this.close();
	}

	/**
	 * Helper method to call dialogService 'open'.
	 * - Enforce accessibility by updating an aria attr for nativeElement.
	 */
	open() {
		this.dialogService.open(this.viewContainerRef, this.dialogConfig);
		this.expanded = true;
	}

	/**
	 * Helper method to call dialogService 'toggle'.
	 * - Enforce accessibility by updating an aria attr for nativeElement.
	 */
	toggle() {
		this.dialogService.toggle(this.viewContainerRef, this.dialogConfig);
		this.expanded = this.dialogService.isOpen;
	}

	/**
	 * Helper method to call dialogService 'close'.
	 * - Enforce accessibility by updating an aria attr for nativeElement.
	 */
	close() {
		this.dialogService.close(this.viewContainerRef);
		this.expanded = false;
	}

	/**
	 * Empty method for child classes to override and specify additional init steps.
	 * Run after DialogDirective completes it's ngOnInit.
	 * @protected
	 */
	protected onDialogInit() {}
}
