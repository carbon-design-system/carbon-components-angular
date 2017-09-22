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
import { Subscription } from "rxjs/Subscription";

@Injectable()
export class DialogService {
	private dialogSubscription: Subscription;

	public isOpen = false;
	public componentFactory: ComponentFactory<any>;
	public onClose: EventEmitter<any> = new EventEmitter();
	public dialogRef: ComponentRef<any>;
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

	toggle(dialogConfig) {
		if (this.isOpen) {
			this.close();
		} else {
			this.open(dialogConfig);
		}
	}

	open(dialogConfig) {
		if (!this.dialogRef) {
			this.dialogRef = this.viewContainerRef.createComponent(this.componentFactory, 0, this.injector);
			let focusedElement = document.activeElement;
			dialogConfig["previouslyFocusedElement"] = focusedElement;
			this.dialogRef.instance.dialogConfig = dialogConfig;
			this.onClose = this.dialogRef.instance.close;
			this.isOpen = true;
			if (dialogConfig.appendToBody) {
				setTimeout(() => {
					window.document.querySelector("body").appendChild(this.dialogRef.location.nativeElement);
				});
			}

			this.dialogSubscription = this.onClose.subscribe((evt) => {
				this.close(evt);
			});

			this.dialogRef.instance.elementRef.nativeElement.focus();

			this.dialogRef.instance.dialogConfig.parentRef.nativeElement.classList.add("dialog-selected");
		}
	}

	close(evt?) {
		if (evt !== undefined) {
			this.isClosed.emit(evt);
		}

		if (this.dialogRef) {
			this.dialogRef.instance.dialogConfig.parentRef.nativeElement.classList.remove("dialog-selected");
			let elementToFocus = this.dialogRef.instance.dialogConfig["previouslyFocusedElement"];
			this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.dialogRef.hostView));
			this.dialogRef = null;
			this.isOpen = false;
			elementToFocus.focus();

			if (this.dialogSubscription) {
				this.dialogSubscription.unsubscribe();
			}
		}
	}
}
