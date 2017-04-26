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
import { Popover } from "./popover.component";
import { PopoverService } from "./popover.service";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/throttleTime";
import "rxjs/add/observable/fromEvent";

@Directive({
	selector: "[cdlPopover]",
	exportAs: "cdlPopover"
})
export class PopoverDirective implements OnInit {
	popoverService: PopoverService;
	popoverConfig: any;

	@Input() title: string;
	@Input() cdlPopover: string | TemplateRef<any>;
	@Input() trigger: "click" | "mouseenter" = "click";
	@Input() placement: "top" | "bottom" | "left" | "right" | "auto" = "auto";
	@Input() waitTime = 0;
	@Input() wrapperClass: string;
	@Input() gap = 10;
	@Input() appendToBody = false;
	@Input() type: "warning" | "danger" | "" = "";

	isTooltip = false;

	@HostListener("touchstart", ["$event"])
	onTouchStart(evt) {
		evt.stopImmediatePropagation();
		evt.preventDefault();

		this.toggle();
	}

	constructor(public elementRef: ElementRef, public injector: Injector,
			componentFactoryResolver: ComponentFactoryResolver, public viewContainerRef: ViewContainerRef) {

		this.popoverService = new PopoverService(Popover, viewContainerRef, componentFactoryResolver, injector);
	}

	ngOnInit() {
		document.body.firstElementChild.addEventListener("click", () => null, true);
		this.popoverConfig = {
			title: this.title,
			content: this.cdlPopover,
			placement: this.placement,
			parentRef: this.elementRef,
			gap: this.gap,
			wrapperClass: this.wrapperClass,
			trigger: this.trigger,
			appendToBody: this.appendToBody,
			type: this.type,
			isTooltip: this.isTooltip
		};

		Observable.fromEvent(this.elementRef.nativeElement, this.trigger).subscribe(evt => {
			this.toggle();
		});

		if (this.trigger === "mouseenter") {
			Observable.fromEvent(this.elementRef.nativeElement, "mouseout").subscribe(() => this.popoverService.close());
			Observable.fromEvent(this.elementRef.nativeElement, "focus").subscribe(() => this.popoverService.open(this.popoverConfig) );
			Observable.fromEvent(this.elementRef.nativeElement, "blur").subscribe(() => this.popoverService.close() );
		}
	}

	toggle() {
		this.popoverService.toggle(this.popoverConfig);
	}

	close() {
		this.popoverService.close();
	}
}
