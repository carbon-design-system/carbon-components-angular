import {
	ComponentRef,
	ViewContainerRef,
	ComponentFactory,
	Injector
} from "@angular/core";
import { Injectable } from "@angular/core";

/**
 * Singleton service used to register the container for out-of-flow components to insert into.
 * Also used to insert/remove components from that view.
 */
@Injectable()
export class PlaceholderService {
	/**
	 * Maintain a `ViewContainerRef` to an instance of the component.
	 */
	protected viewContainerRef: ViewContainerRef = null;
	/**
	 * Used by `Placeholder` to register view-container reference.
	 */
	registerViewContainerRef(vcRef: ViewContainerRef): void {
		this.viewContainerRef = vcRef;
	}

	/**
	 * Creates and returns component in the view.
	 */
	createComponent(componentFactory: ComponentFactory<any>, injector: Injector): ComponentRef<any> {
		if (!this.viewContainerRef) {
			console.error("No view container defined! Likely due to a missing `ibm-placeholder`");
		}
		return this.viewContainerRef.createComponent(componentFactory, null, injector);
	}

	destroyComponent(component: ComponentRef<any>) {
		const index = this.viewContainerRef.indexOf(component.hostView);
		if (index < 0) {
			return;
		}

		// destroy the view
		this.viewContainerRef.remove(index);
	}

	hasComponentRef(component: ComponentRef<any>) {
		if (this.viewContainerRef.indexOf(component.hostView) < 0) {
			return false;
		}
		return true;
	}

	hasPlaceholderRef() {
		return !!this.viewContainerRef;
	}

	appendElement(element: HTMLElement): HTMLElement {
		return this.viewContainerRef.element.nativeElement.appendChild(element);
	}

	removeElement(element: HTMLElement): HTMLElement {
		return this.viewContainerRef.element.nativeElement.removeChild(element);
	}

	hasElement(element: HTMLElement): boolean {
		return this.viewContainerRef.element.nativeElement.contains(element);
	}
}
