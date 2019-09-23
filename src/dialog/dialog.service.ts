import {
	EventEmitter,
	Injector,
	ComponentRef,
	ComponentFactory,
	ComponentFactoryResolver,
	Injectable,
	ViewContainerRef
} from "@angular/core";
import { Subscription } from "rxjs";
import { DialogConfig } from "./dialog-config.interface";
import { PlaceholderService } from "./../placeholder/placeholder.module";

/**
 * `Dialog` object to be injected into other components.
 */
@Injectable()
export class DialogService {
	/**
	 * Used in `singletonClickListen`, don't count on its existence and values.
	 */
	protected static listeningForBodyClicks = false;

	/**
	 * Reflects the open or closed state of the `Dialog`.
	 */
	public isOpen = false;
	/**
	 * To be used to create the component using metadata.
	 */
	public componentFactory: ComponentFactory<any>;
	/**
	 * To emit the `Dialog` closing event.
	 */
	public onClose: EventEmitter<any> = new EventEmitter();
	/**
	 * Holds reference to the created `Dialog` component after creation.
	 */
	public dialogRef: ComponentRef<any>;

	/**
	 * Emits the state `true` if the Dialog is closed, false if `Dialog`
	 * is opened/viewable.
	 */
	isClosed: EventEmitter<any> = new EventEmitter();

	/**
	 * To watch the event that closes the `Dialog`.
	 */
	protected dialogSubscription: Subscription;

	/**
	 * Creates an instance of `DialogService`.
	 */
	constructor(
		protected componentFactoryResolver: ComponentFactoryResolver,
		protected injector: Injector,
		protected placeholderService: PlaceholderService
	) {}

	/**
	 * Uses module `componentFactory` to create the `Dialog` component.
	 */
	create(component) {
		this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
	}

	/**
	 * Toggles between `Dialog` open/close states.
	 */
	toggle(viewContainer: ViewContainerRef, dialogConfig: DialogConfig) {
		if (this.isOpen) {
			this.close(viewContainer);
		} else {
			this.open(viewContainer, dialogConfig);
		}
	}

	/**
	 * If `dialogRef` is defined, the Dialog is already open. If
	 * `dialogRef` is undefined, we create the `Dialog` component and reference to it.
	 * A subscription is created to track if the `Dialog` should close.
	 */
	open(viewContainer: ViewContainerRef, dialogConfig: DialogConfig) {
		if (!this.dialogRef) {
			if (dialogConfig.appendInline) {
				// add our component to the view
				this.dialogRef = viewContainer.createComponent(this.componentFactory, 0, this.injector);
			} else if (!this.placeholderService.hasPlaceholderRef()) {
				this.dialogRef = viewContainer.createComponent(this.componentFactory, 0, this.injector);
				setTimeout(() => {
					window.document.querySelector("body").appendChild(this.dialogRef.location.nativeElement);
				});
			} else {
				this.dialogRef = this.placeholderService.createComponent(this.componentFactory, this.injector);
			}

			// initialize some extra options
			let focusedElement = document.activeElement;
			dialogConfig["previouslyFocusedElement"] = focusedElement;
			this.dialogRef.instance.dialogConfig = dialogConfig;
			this.onClose = this.dialogRef.instance.close;
			this.isOpen = true;

			this.dialogSubscription = this.onClose.subscribe(() => {
				this.close(viewContainer);
			});

			this.dialogRef.instance.elementRef.nativeElement.focus();
		}
		return this;
	}

	/**
	 * On close of `Dialog` item, sets focus back to previous item, unsets
	 * the current `dialogRef` item. Unsubscribes to the event of `Dialog` close.
	 */
	close(viewContainer: ViewContainerRef) {
		this.isClosed.emit(true);

		if (this.dialogRef) {
			let elementToFocus = this.dialogRef.instance.dialogConfig["previouslyFocusedElement"];
			if (this.placeholderService.hasPlaceholderRef() && !this.dialogRef.instance.dialogConfig.appendInline) {
				this.placeholderService.destroyComponent(this.dialogRef);
			} else {
				viewContainer.remove(viewContainer.indexOf(this.dialogRef.hostView));
			}
			this.dialogRef = null;
			this.isOpen = false;
			elementToFocus.focus();

			if (this.dialogSubscription) {
				this.dialogSubscription.unsubscribe();
			}
		}
	}

	/**
	 * Fix for safari hijacking clicks.
	 *
	 * Runs on `ngOnInit` of every dialog. Ensures we don't have multiple listeners
	 * because having many of them could degrade performance in certain cases (and is
	 * not necessary for our use case)
	 *
	 * This is an internally used function, can change at any point (even get removed)
	 * and changes to it won't be considered a breaking change. Use at your own risk.
	 */
	singletonClickListen() {
		if (!DialogService.listeningForBodyClicks) {
			document.body.firstElementChild.addEventListener("click", () => null, true);
			DialogService.listeningForBodyClicks = true;
		}
	}
}
