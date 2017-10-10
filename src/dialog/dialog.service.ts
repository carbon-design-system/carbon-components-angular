import {
	EventEmitter,
	Injector,
	Component,
	ComponentRef,
	ComponentFactory,
	ComponentFactoryResolver,
	Injectable,
	ApplicationRef,
	ViewContainerRef,
	Host
} from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { DialogConfig } from "./dialog-config.interface";

@Injectable()
export class DialogService {
	public isOpen = false;
	public componentFactory: ComponentFactory<any>;
	public onClose: EventEmitter<any> = new EventEmitter();
	public dialogRef: ComponentRef<any>;

	isClosed: EventEmitter<any> = new EventEmitter();

	private dialogSubscription: Subscription;

	constructor(
		protected _componentFactoryResolver: ComponentFactoryResolver,
		protected _injector: Injector
	) {}

	create(component) {
		this.componentFactory = this._componentFactoryResolver.resolveComponentFactory(component);
	}

	toggle(viewContainer: ViewContainerRef, dialogConfig: DialogConfig) {
		if (this.isOpen) {
			this.close(viewContainer);
		} else {
			this.open(viewContainer, dialogConfig);
		}
	}

	open(viewContainer: ViewContainerRef, dialogConfig: DialogConfig) {
		if (!this.dialogRef) {
			this.dialogRef = viewContainer.createComponent(this.componentFactory, 0, this._injector);
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
				this.close(viewContainer, evt);
			});

			this.dialogRef.instance._elementRef.nativeElement.focus();
		}
	}

	close(viewContainer: ViewContainerRef, evt?) {
		if (evt !== undefined) {
			this.isClosed.emit(evt);
		}

		if (this.dialogRef) {
			let elementToFocus = this.dialogRef.instance.dialogConfig["previouslyFocusedElement"];
			viewContainer.remove(viewContainer.indexOf(this.dialogRef.hostView));
			this.dialogRef = null;
			this.isOpen = false;
			elementToFocus.focus();

			if (this.dialogSubscription) {
				this.dialogSubscription.unsubscribe();
			}
		}
	}
}
