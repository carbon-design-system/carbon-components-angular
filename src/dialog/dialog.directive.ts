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
import { DialogService } from "./dialog.service";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/throttleTime";
import "rxjs/add/observable/fromEvent";

@Directive({
	selector: "[nDialog]",
	exportAs: "nDialog"
})
export class DialogDirective implements OnInit {
	popoverService: DialogService;
	dialogConfig: any;

	@Input() title: string;
	@Input() nDialog: string | TemplateRef<any>;
	@Input() trigger: "click" | "hover" | "mouseenter" = "click";
	@Input() placement: "top" | "top-left" | "top-right" | "bottom" | "bottom-left" | "bottom-right" | "left" | "right" | "auto" = "auto";
	@Input() waitTime = 0;
	@Input() wrapperClass: string;
	@Input() gap = 10;
	@Input() appendToBody = false;
	@Input() type: "warning" | "danger" | "" = "";
	/**
	 * Set by filter popover by you.
	 *
	 * @type {*}
	 * @memberof PopoverDirective
	 */
	@Input() filter: any;

	@HostListener("touchstart", ["$event"])
	onTouchStart(evt) {
		evt.stopImmediatePropagation();
		evt.preventDefault();
		this.toggle();
	}

	constructor(
		protected _elementRef: ElementRef,
		protected _injector: Injector,
		protected _componentFactoryResolver: ComponentFactoryResolver,
		protected _viewContainerRef: ViewContainerRef) {}

	ngOnInit() {
		document.body.firstElementChild.addEventListener("click", () => null, true);
		this.dialogConfig = {
			title: this.title,
			content: this.nDialog,
			placement: this.placement,
			parentRef: this._elementRef,
			gap: this.gap,
			wrapperClass: this.wrapperClass,
			trigger: this.trigger,
			appendToBody: this.appendToBody,
			type: this.type,
			filter: this.filter
		};
		this.dialogInit();

		Observable.fromEvent(this._elementRef.nativeElement, this.trigger).subscribe(evt => {
			this.toggle();
		});

		if (this.trigger === "hover" || this.trigger === "mouseenter") {
			Observable.fromEvent(this._elementRef.nativeElement, "mouseout").subscribe(() => this.popoverService.close());
			Observable.fromEvent(this._elementRef.nativeElement, "focus").subscribe(() => this.popoverService.open(this.dialogConfig) );
			Observable.fromEvent(this._elementRef.nativeElement, "blur").subscribe(() => this.popoverService.close() );
		}
	}

	// overriden by child classes to do things on init
	protected dialogInit() {}

	open() {
		this.popoverService.open(this.dialogConfig);
	}

	toggle() {
		this.popoverService.toggle(this.dialogConfig);
	}

	close() {
		this.popoverService.close();
	}
}
