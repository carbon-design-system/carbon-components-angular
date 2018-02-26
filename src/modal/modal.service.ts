import {
	ComponentFactoryResolver,
	ComponentRef,
	ReflectiveInjector,
	ViewContainerRef
} from "@angular/core";
import { ModalComponent } from "./modal.component";
import { ModalPlaceholderService } from "./modal-placeholder.service";
import { Observable } from "rxjs/Rx";
import { ReplaySubject } from "rxjs/ReplaySubject";
import { Injectable } from "@angular/core";


/**
 * Modal service handles instantiating and destroying modal instances.
 * Uses ModalPlaceholderService to track open instances, and for it's placeholder view reference.
 *
 * ```typescript
 * export class ModalService {
 * 	registerViewContainerRef(vcRef: ViewContainerRef): void {}
 * 	create<T>(data: {component: any, inputs?: any}): void {}
 * 	destroy(index: number = -1): void {}
 * }
 * ```
 * @export
 * @class ModalService
 */
@Injectable()
export class ModalService {
	/**
	 * Creates an instance of `ModalService`.
	 * @param {ComponentFactoryResolver} resolver
	 * @memberof ModalService
	 */
	constructor(public resolver: ComponentFactoryResolver, public placeholder: ModalPlaceholderService) {}

	/**
	 * Creates and renders the modal component that is passed in.
	 * `inputs` is an optional parameter of `data` that can be passed to the `Modal` component.
	 * @template T
	 * @param {{component: any, inputs?: any}} data
	 * @returns {ComponentRef<any>}
	 * @memberof ModalService
	 */
	create<T>(data: {component: any, inputs?: any}): ComponentRef<any> {
		console.log(this.resolver);
		let defaults = {inputs: {}};
		data = Object.assign({}, defaults, data);

		const inputProviders = Object.keys(data.inputs).map(inputName => ({provide: inputName, useValue: data.inputs[inputName]}));
		const resolvedInputs = ReflectiveInjector.resolve(inputProviders);
		const injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.placeholder.vcRef.parentInjector);
		const factory = this.resolver.resolveComponentFactory(data.component);
		let focusedElement = document.activeElement;
		let component = factory.create(injector);
		component["previouslyFocusedElement"] = focusedElement;  // used to return focus to previously focused element
		this.placeholder.componentRefs.push(component);
		this.placeholder.vcRef.insert(component.hostView);

		component.instance["destroy"] = () => {
			// find the component in the list and call distroy on it
			// this is necessary to keep componentRefs up to date
			let index = this.placeholder.componentRefs.indexOf(component);
			// if found
			if (index >= 0) {
				this.destroy(index);
			}
		};
		return component;
	}

	/**
	 * Destroys the modal on the supplied index.
	 * When called without parameters it destroys the most recently created/top most modal.
	 *
	 * @param {any} [index=-1]
	 * @returns
	 * @memberof ModalService
	 */
	destroy(index = -1) {
		// return if nothing to destroy because it's already destroyed
		if (index >= this.placeholder.componentRefs.length || this.placeholder.componentRefs.length === 0) {
			return;
		}
		// on negative index destroy the last on the list (top modal)
		if (index < 0) {
			index = this.placeholder.componentRefs.length - 1;
		}

		this.placeholder.componentRefs[index]["previouslyFocusedElement"].focus();  // return focus
		this.placeholder.componentRefs[index].destroy();
		this.placeholder.componentRefs.splice(index, 1);
	}
}


