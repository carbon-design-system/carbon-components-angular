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

	public isOpen = false;
	public componentFactory: ComponentFactory<any>;
	public onClose: EventEmitter<any> = new EventEmitter();
	public popoverRef: ComponentRef<any>;

	public viewContainerRef: ViewContainerRef;
	public injector: Injector;

	isClosed: EventEmitter<any> = new EventEmitter();

	constructor(
		comp,
		viewContainerRef: ViewContainerRef,
		componentFactoryResolver: ComponentFactoryResolver,
		injector: Injector
	) {
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
			this.popoverRef.instance.popoverConfig = popOverConfig;
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

	close(evt?) {
		if (evt !== undefined) {
			this.isClosed.emit(evt);
		}

		if (this.popoverRef) {
			this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.popoverRef.hostView));
			this.popoverRef = null;
			this.isOpen = false;
		}
	}
}
