import {
	EventEmitter,
	Injector,
	ComponentRef,
	ComponentFactory,
	ComponentFactoryResolver,
	Injectable,
	ViewContainerRef,
	OnDestroy
} from "@angular/core";
import { Subscription } from "rxjs";
import { DialogConfig } from "./dialog-config.interface";
import { PlaceholderService } from "./../placeholder/placeholder.module";
import { Dialog } from "./dialog.component";
import { tabbableSelector } from "../common/tab.service";

/**
 * `Dialog` object to be injected into other components.
 */
@Injectable()
export class DialogService implements OnDestroy {
	/**
	 * Used in `singletonClickListen`, don't count on its existence and values.
	 */
	protected static listeningForBodyClicks = false;

	/**
	 * A set of all known dialog components
	 */
	protected static dialogRefs = new Set<ComponentRef<Dialog>>();

	/**
	 * A `Subscription` that contains all `onClose` subscriptions
	 */
	protected static dialogCloseSubscription = new Subscription();

	/**
	 * Reflects the open or closed state of the `Dialog`.
	 *
	 * @deprecated the open state of the dialog should be tracked by the component that creates it
	 */
	public isOpen = false;
	/**
	 * To be used to create the component using metadata.
	 *
	 * @deprecated
	 */
	public componentFactory: ComponentFactory<any>;
	/**
	 * To emit the `Dialog` closing event.
	 */
	public onClose: EventEmitter<any> = new EventEmitter();
	/**
	 * Holds reference to the created `Dialog` component after creation.
	 *
	 * @deprecated components should track local `dialogRefs` themselves
	 */
	public dialogRef: ComponentRef<any>;

	/**
	 * Emits the state `true` if the Dialog is closed, false if `Dialog`
	 * is opened/viewable.
	 *
	 * @deprecated components should simply bind to the dialogRefs `close` emitter
	 */
	isClosed: EventEmitter<any> = new EventEmitter();

	/**
	 * To watch the event that closes the `Dialog`.
	 *
	 * @deprecated in favor of `DialogService.dialogCloseSubscription`
	 */
	protected dialogSubscription = new Subscription();

	/**
	 * Creates an instance of `DialogService`.
	 */
	constructor(
		protected componentFactoryResolver: ComponentFactoryResolver,
		protected injector: Injector,
		protected placeholderService: PlaceholderService
	) {
		// keep track of all dialog subscriptions globally.
		DialogService.dialogCloseSubscription.add(this.dialogSubscription);
	}

	/**
	 * Uses module `componentFactory` to create the `Dialog` component.
	 *
	 * Useful for components that extend `Dialog` and don't want to re-implement `open`
	 *
	 * @deprecated TODO: a better way for individual instances to hook into `DialogService#open`
	 */
	create(component) {
		this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
	}

	/**
	 * Toggles between `Dialog` open/close states.
	 *
	 * @deprecated components should implement their own `toggle` with the `close` and `open` methods
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
	 *
	 * @param viewContainer a `ViewContainerRef` to instantiate the component against.
	 * May be `null` if an `ibm-placeholder` exists and `dialogConfig.appendInline` is false
	 * @param dialogConfig the `DialogConfig` for the component
	 */
	open(viewContainer: ViewContainerRef, dialogConfig: DialogConfig, component?: any) {
		let componentFactory = this.componentFactory;
		if (component) {
			componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
		}

		let dialogRef;
		if (dialogConfig.appendInline) {
			// add our component to the view
			dialogRef = viewContainer.createComponent(componentFactory, 0, this.injector);
		} else if (!this.placeholderService.hasPlaceholderRef()) {
			dialogRef = viewContainer.createComponent(componentFactory, 0, this.injector);
			setTimeout(() => {
				window.document.querySelector("body").appendChild(this.dialogRef.location.nativeElement);
			});
		} else {
			dialogRef = this.placeholderService.createComponent(componentFactory, this.injector);
		}

		// keep track of all initialized dialogs
		DialogService.dialogRefs.add(dialogRef);

		// initialize some extra options
		dialogConfig["previouslyFocusedElement"] = document.activeElement;
		dialogRef.instance.dialogConfig = dialogConfig;
		this.onClose = dialogRef.instance.close;
		this.isOpen = true;

		const closeSubscription = this.onClose.subscribe(() => {
			if (dialogConfig.shouldClose && dialogConfig.shouldClose()) {
				this.close(viewContainer, dialogRef);
			}
		});

		// Adds current close subscription to the reference of all close subscriptions for
		// local dialog service.
		this.dialogSubscription.add(closeSubscription);

		dialogRef.instance.elementRef.nativeElement.focus();

		// deprecated - kept for API compatibility
		this.dialogRef = dialogRef;

		// return `this` for easy method chaining
		// TODO v11: return `dialogRef` instead
		return this;
	}

	/**
	 * On close of `Dialog` item, sets focus back to previous item, unsets
	 * the current `dialogRef` item. Unsubscribes to the event of `Dialog` close.
	 *
	 * @param viewContainer deprecated - does nothing. null may safely be passed
	 * @param dialogRef the dialogRef to close
	 */
	close(viewContainer: ViewContainerRef, dialogRef: ComponentRef<Dialog> = this.dialogRef) {
		this.isClosed.emit(true);

		// to handle the case where we have a null `this.dialogRef`
		if (!dialogRef) { return; }

		const elementToFocus = dialogRef.instance.dialogConfig["previouslyFocusedElement"];

		dialogRef.destroy();

		if (DialogService.dialogRefs.has(dialogRef)) {
			DialogService.dialogRefs.delete(dialogRef);
		}

		this.dialogRef = null;
		this.isOpen = false;

		// Keeps the focus on the dialog trigger if there are no focusable elements. Change focus to previously focused element
		// if there are focusable elements in the dialog or if trigger is set to `hover` or `mouseenter`.
		if (
			!dialogRef.location.nativeElement.querySelectorAll(tabbableSelector) ||
			dialogRef.instance.dialogConfig.trigger === "hover" ||
			dialogRef.instance.dialogConfig.trigger === "mouseenter") {
			elementToFocus.focus();
		}
	}

	// Unsubscribes from all the close subscriptions associated with the destroyed dialog
	// service and removes the subscriptions from the global `dialogCloseSubscription`.
	ngOnDestroy() {
		DialogService.dialogCloseSubscription.remove(this.dialogSubscription);
		this.dialogSubscription.unsubscribe();
	}

	/**
	 * Closes all known `Dialog`s. Does not focus any previous elements, since we can't know which would be correct
	 */
	closeAll() {
		DialogService.dialogRefs.forEach(ref => ref.destroy());
		DialogService.dialogRefs.clear();
		DialogService.dialogCloseSubscription.unsubscribe();
		this.isClosed.emit(true);

		// kept for API compat
		this.dialogRef = null;
		this.isOpen = false;
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
