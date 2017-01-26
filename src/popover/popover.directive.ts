import {
	Component,
	Directive,
	Input,
	EventEmitter,
	OnInit,
	Injector,
	Renderer,
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
	private triggerListenFn: Function;
	private mouseoutListenFn: Function;
	private isOpen: boolean = false;
	private popoverRef: ComponentRef<Popover>;
	private componentFactory: ComponentFactory<Popover>;
	private onClose: EventEmitter<any> = new EventEmitter();

	@Input() title: string;
	@Input() cdlPopover: string | TemplateRef<any>;
	@Input() trigger: "click" | "mouseenter" = "click";
	@Input() placement: "top" | "bottom" = "top";
	@Input() waitTime: number = 0;
	@Input() showTitle: boolean = true;
	@Input() gap: number = 10;
	@Input() appendToBody: boolean = false;

	@HostListener("touchstart", ["$event"])
	onTouchStart(evt) {
		evt.stopImmediatePropagation();
		evt.preventDefault();

		this.toggle();
	}

	constructor(private elementRef: ElementRef, private renderer: Renderer, private injector: Injector,
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
			this.popoverRef.instance.showTitle = this.showTitle;
			this.popoverRef.instance.gap = this.gap;
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
