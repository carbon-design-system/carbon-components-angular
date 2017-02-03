import {
	EventEmitter,
	Injector,
	ComponentRef,
	ComponentFactory,
	ComponentFactoryResolver,
	Injectable,
	ApplicationRef,
	ViewContainerRef
} from "@angular/core";


@Injectable()
export class PopoverService {

	private isOpen: boolean = false;
	private componentFactory: ComponentFactory<any>;
	private onClose: EventEmitter<any> = new EventEmitter();
	private popoverRef: ComponentRef<any>;

	private viewContainerRef: ViewContainerRef;
	private injector: Injector;

	isClosed: EventEmitter<any> = new EventEmitter();

	constructor(comp, viewContainerRef, componentFactoryResolver, injector) {
		this.viewContainerRef = viewContainerRef;
		this.injector = injector;
		this.componentFactory = componentFactoryResolver.resolveComponentFactory(comp);
	}

	toggle(popOverConfig) {
		if (this.isOpen) {
			this.close();
		} else {
			this.open(popOverConfig);
		}
	}

	open(popOverConfig) {
		if (!this.popoverRef) {
			this.popoverRef = this.viewContainerRef.createComponent(this.componentFactory, 0, this.injector);
			this.popoverRef.instance.content = popOverConfig.content;
			this.popoverRef.instance.title = popOverConfig.title;
			this.popoverRef.instance.placement = popOverConfig.placement;
			this.popoverRef.instance.parentRef = popOverConfig.elementRef;
			this.popoverRef.instance.isTooltip = popOverConfig.isTooltip;
			this.popoverRef.instance.gap = popOverConfig.gap;
			this.popoverRef.instance.type = popOverConfig.type;
			this.popoverRef.instance.trigger = popOverConfig.trigger;
			this.popoverRef.instance.appendToBody = popOverConfig.appendToBody;
			this.onClose = this.popoverRef.instance.close;
			this.isOpen = true;

			if (popOverConfig.appendToBody) {
				window.document.querySelector("body").appendChild(this.popoverRef.location.nativeElement);
			}

			this.onClose.subscribe((evt) => {
				this.close(evt);
			});
		}
	}

	close(evt = null) {
		if (evt) {
			this.isClosed.emit(evt);
		}

		if (this.popoverRef) {
			this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.popoverRef.hostView));
			this.popoverRef = null;
			this.isOpen = false;
		}
	}
}
