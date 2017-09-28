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
export class DialogDirective implements OnInit {
	/** string title for the dialog */
	@Input() title = "";
	/** dialog body, can be a string or template */
	@Input() nDialog: string | TemplateRef<any>;
	/** how to trigger the dialog, can be "click" or "hover" (hover and click behave the same on mobile - both respond to a single tap) */
	@Input() trigger: "click" | "hover" | "mouseenter" = "click";
	/** placement of the dialog, usually relative to the element the directive is on */
	@Input() placement: "top" | "top-left" | "top-right" | "bottom" | "bottom-left" | "bottom-right" | "left" | "right" = "left";
	/** class to add to the dialog container */
	@Input() wrapperClass: string;
	/** spacing between the dialog and it's triggering element */
	@Input() gap = 10;
	/** should the dialog be appened to the body (to break out of containers) */
	@Input() appendToBody = false;
	/** should the dialog attempt to place itself for maximum visibility? */
	@Input() autoPosition = false;
	/** optional data for templates */
	@Input() data = {};
	/** config object passed to the rendered component */
	dialogConfig: DialogConfig;

	constructor(
		protected _elementRef: ElementRef,
		protected _viewContainerRef: ViewContainerRef,
		protected _dialogService: DialogService) {}

	@HostListener("touchstart", ["$event"])
	onTouchStart(evt) {
		evt.stopImmediatePropagation();
		evt.preventDefault();
		this.toggle();
	}

	ngOnInit() {
		// fix for safari highjacking clicks
		document.body.firstElementChild.addEventListener("click", () => null, true);

		// set the config object (this can [and should!] be added to in chld classes depending on what they need)
		this.dialogConfig = {
			title: this.title,
			content: this.nDialog,
			placement: this.placement,
			parentRef: this._elementRef,
			gap: this.gap,
			trigger: this.trigger,
			appendToBody: this.appendToBody,
			autoPosition: this.autoPosition,
			wrapperClass: this.wrapperClass,
			data: this.data
		};

		// bind events for hovering or clicking the host
		if (this.trigger === "hover" || this.trigger === "mouseenter") {
			Observable.fromEvent(this._elementRef.nativeElement, "mouseenter").subscribe(() => this.toggle());
			Observable.fromEvent(this._elementRef.nativeElement, "mouseout").subscribe(() => this.close());
			Observable.fromEvent(this._elementRef.nativeElement, "focus").subscribe(() => this.open());
			Observable.fromEvent(this._elementRef.nativeElement, "blur").subscribe(() => this.close());
		} else {
			Observable.fromEvent(this._elementRef.nativeElement, "click").subscribe(() => this.toggle());
		}

		// run any code a child class may need
		this.onDialogInit();
	}

	/**
	 * empty method for child classes to override and specify additional init steps.
	 * run after DialogDirective completes it's ngOnInit.
	 */
	protected onDialogInit() {}

	/**
	 * helper method to call dialogService#open
	 */
	open() {
		this._dialogService.open(this._viewContainerRef, this.dialogConfig);
	}

	/**
	 * helper method to call dialogService#toggle
	 */
	toggle() {
		this._dialogService.toggle(this._viewContainerRef, this.dialogConfig);
	}

	/**
	 * helper method to call dialogService#close
	 */
	close() {
		this._dialogService.close(this._viewContainerRef);
	}
}
