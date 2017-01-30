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

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/throttleTime";
import "rxjs/add/observable/fromEvent";

@Directive({
	selector: "[cdlPopover]",
	exportAs: "cdlPopover"
})
export class PopoverDirective implements OnInit {
	private isOpen: boolean = false;
	private componentFactory: ComponentFactory<Popover>;
	private onClose: EventEmitter<any> = new EventEmitter();
	private popoverRef: ComponentRef<Popover>;

	@Input() title: string;
	@Input() cdlPopover: string | TemplateRef<any>;
	@Input() trigger: "click" | "mouseenter" = "click";
	@Input() placement: "top" | "bottom" | "left" | "right" | "auto" = "auto";
	@Input() waitTime: number = 0;
	@Input() gap: number = 10;
	@Input() appendToBody: boolean = false;
	@Input() type: "warning" | "danger" | "" = "";

	isTooltip: boolean = false;

	@HostListener("touchstart", ["$event"])
	onTouchStart(evt) {
		evt.stopImmediatePropagation();
		evt.preventDefault();

		this.toggle();
	}

	constructor(private elementRef: ElementRef, private injector: Injector,
			componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) {
		this.componentFactory = componentFactoryResolver.resolveComponentFactory(Popover);
	}

	ngOnInit() {
		Observable.fromEvent(this.elementRef.nativeElement, this.trigger).subscribe(evt => {
			this.toggle();
		});

		if (this.trigger === "mouseenter") {
			Observable.fromEvent(this.elementRef.nativeElement, "mouseout").subscribe(() => this.close());
		}
	}

	toggle() {
		if (this.isOpen) {
			this.close();
		} else {
			this.open();
		}
	}

	open() {
		if (!this.popoverRef) {
			this.popoverRef = this.viewContainerRef.createComponent(this.componentFactory, 0, this.injector);
			this.popoverRef.instance.content = this.cdlPopover;
			this.popoverRef.instance.title = this.title;
			this.popoverRef.instance.placement = this.placement;
			this.popoverRef.instance.parentRef = this.elementRef;
			this.popoverRef.instance.isTooltip = this.isTooltip;
			this.popoverRef.instance.gap = this.gap;
			this.popoverRef.instance.type = this.type;
			this.popoverRef.instance.trigger = this.trigger;
			this.popoverRef.instance.appendToBody = this.appendToBody;
			this.onClose = this.popoverRef.instance.close;
			this.isOpen = true;

			if (this.appendToBody) {
				window.document.querySelector("body").appendChild(this.popoverRef.location.nativeElement);
			}

			this.onClose.subscribe(() => {
				this.close();
			});
		}
	}

	close() {
		if (this.popoverRef) {
			this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.popoverRef.hostView));
			this.popoverRef = null;
			this.isOpen = false;
		}
	}
}

@Directive({
	selector: "[cdlTooltip]",
	exportAs: "cdlTooltip"
})
export class TooltipDirective extends PopoverDirective {
	@Input() cdlTooltip: string | TemplateRef<any>;

	open() {
		this.cdlPopover = this.cdlTooltip;
		this.isTooltip = true;
		super.open();
	}
}

@Directive({
	selector: "[cdlEllipsisTooltip]"
})
export class EllipsisTooltipDirective extends PopoverDirective {
	constructor(private _elementRef: ElementRef, private _injector: Injector,
			_componentFactoryResolver: ComponentFactoryResolver, private _viewContainerRef: ViewContainerRef) {
		super(_elementRef, _injector, _componentFactoryResolver, _viewContainerRef);
		this.trigger = "mouseenter";
		this.isTooltip = true;
	}

	open() {
		if (this._elementRef.nativeElement.scrollWidth <= this._elementRef.nativeElement.offsetWidth) {
			return;
		}

		this.cdlPopover = this._elementRef.nativeElement.innerText;
		super.open();
	}
}
