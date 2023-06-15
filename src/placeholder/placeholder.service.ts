import {
	ComponentRef,
	ViewContainerRef,
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
	 * Main `ViewContainerRef` to insert components into
	 */
	protected viewContainerRef: ViewContainerRef = null;
	/**
	 * Map of id's to secondary `ViewContainerRef`s
	 */
	protected viewContainerMap: Map<any, ViewContainerRef> = new Map();
	/**
	 * Used by `Placeholder` to register view-container reference.
	 */
	registerViewContainerRef(vcRef: ViewContainerRef, id?: any): void {
		if (id) {
			this.viewContainerMap.set(id, vcRef);
		} else {
			this.viewContainerRef = vcRef;
		}
	}

	/**
	 * Creates and returns component in the view.
	 */
	createComponent(component: ComponentRef<any>, injector: Injector, id?: any): ComponentRef<any> {
		if (id) {
			if (!this.viewContainerMap.has(id)) {
				console.error(`No view container with id ${id} found`);
				return;
			}
			return this.viewContainerMap.get(id).createComponent(component as any, { index: this.viewContainerMap.size, injector });
		}
		if (!this.viewContainerRef) {
			console.error("No view container defined! Likely due to a missing `cds-placeholder`");
			return;
		}
		return this.viewContainerRef.createComponent(component as any, { index: this.viewContainerRef.length, injector });
	}

	destroyComponent(component: ComponentRef<any>) {
		component.destroy();
	}

	hasComponentRef(component: ComponentRef<any>, id?: any) {
		if (id) {
			return !(this.viewContainerMap.get(id).indexOf(component.hostView) < 0);
		}

		return !(this.viewContainerRef.indexOf(component.hostView) < 0);
	}

	hasPlaceholderRef(id?: any) {
		if (id) {
			return this.viewContainerMap.has(id);
		}
		return !!this.viewContainerRef;
	}

	appendElement(element: HTMLElement, id?: any): HTMLElement {
		if (id) {
			return this.viewContainerMap.get(id).element.nativeElement.appendChild(element);
		}
		return this.viewContainerRef.element.nativeElement.appendChild(element);
	}

	removeElement(element: HTMLElement, id?: any): HTMLElement {
		if (id) {
			return this.viewContainerMap.get(id).element.nativeElement.removeChild(element);
		}
		return this.viewContainerRef.element.nativeElement.removeChild(element);
	}

	hasElement(element: HTMLElement, id?: any): boolean {
		if (id) {
			return this.viewContainerMap.get(id).element.nativeElement.contains(element);
		}
		return this.viewContainerRef.element.nativeElement.contains(element);
	}
}
