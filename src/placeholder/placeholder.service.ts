import {
	ComponentRef,
	ViewContainerRef
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
	public viewContainerRef: ViewContainerRef = null;
	/**
	 * Used by `PlaceholderComponent` to register view-container reference.
	 */
	registerViewContainerRef(vcRef: ViewContainerRef): void {
		this.viewContainerRef = vcRef;
	}

	addComponentRef(component: ComponentRef) {
		if (!this.viewContainerRef) {
			console.error("No view container defined! Likely due to a missing `ibm-placeholder`");
		}
		this.viewContainerRef.insert(component.hostView);
	}

	removeComponentRef(component: ComponentRef) {
		const index = this.viewContainerRef.indexOf(component);
		if (index < 0) {
			return;
		}
		// focus any defined `previouslyFocusedElement`
		if (this.viewContainerRef.get(index)["previouslyFocusedElement"]) {
			this.viewContainerRef.get(index)["previouslyFocusedElement"].focus();  // return focus
		}
		// destroy the view
		this.viewContainerRef.remove(index);
	}

	hasComponentRef(component: ComponentRef) {
		if (this.viewContainerRef.indexOf(component) < 0) {
			return false;
		}
		return true;
	}
}
