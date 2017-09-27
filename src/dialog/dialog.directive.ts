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

@Directive({
	selector: "[nDialog]",
	exportAs: "nDialog",
	providers: [
		DialogService
	]
})
export class DialogDirective implements OnInit {
	@Input() title: string;
	@Input() nDialog: string | TemplateRef<any>;
	@Input() trigger: "click" | "hover" | "mouseenter" = "click";
	@Input() placement: "top" | "top-left" | "top-right" | "bottom" | "bottom-left" | "bottom-right" | "left" | "right" = "left";
	@Input() waitTime = 0;
	@Input() wrapperClass: string;
	@Input() gap = 10;
	@Input() appendToBody = false;
	@Input() type: "warning" | "danger" | "" = "";
	@Input() autoPosition = false;
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
			type: this.type,
			autoPosition: this.autoPosition,
			wrapperClass: this.wrapperClass
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

	// overriden by child classes to do things on init
	protected onDialogInit() {}

	open() {
		this._dialogService.open(this._viewContainerRef, this.dialogConfig);
	}

	toggle() {
		this._dialogService.toggle(this._viewContainerRef, this.dialogConfig);
	}

	close() {
		this._dialogService.close(this._viewContainerRef);
	}
}
