import {
	ComponentFactoryResolver,
	ComponentRef,
	ReflectiveInjector,
	ViewContainerRef
} from "@angular/core";
import { ModalComponent } from "./modal.component";
import { Observable } from "rxjs/Rx";
import { ReplaySubject } from "rxjs/ReplaySubject";
import { Injectable } from "@angular/core";


/**
 * Modal service to be injected into the different catagories of modals.
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
	 * Maintain a `ViewContainerRef` to an instance of the component.
	 * @type {ViewContainerRef}
	 * @memberof ModalService
	 */
	public vcRef: ViewContainerRef;
	/**
	 * List of `Modal` components that are in existance.
	 * @type {Array<ComponentRef<any>>}
	 * @memberof ModalService
	 */
	public componentRefs = new Array<ComponentRef<any>>();

	/**
	 * Creates an instance of `ModalService`.
	 * @param {ComponentFactoryResolver} resolver
	 * @memberof ModalService
	 */
	constructor(public resolver: ComponentFactoryResolver) {}

	/**
	 * Used by `ModalPlaceholderComponent` to register view-container reference.
	 * @param {ViewContainerRef} vcRef
	 * @memberof ModalService
	 */
	registerViewContainerRef(vcRef: ViewContainerRef): void {
		this.vcRef = vcRef;
	}


	/**
	 * Creates and renders the modal component that is passed in.
	 * `inputs` is an optional parameter of `data` that can be passed to the `Modal` component.
	 * @template T
	 * @param {{component: any, inputs?: any}} data
	 * @returns {ComponentRef<any>}
	 * @memberof ModalService
	 */
	create<T>(data: {component: any, inputs?: any}): ComponentRef<any> {
		let defaults = {inputs: {}};
		data = Object.assign({}, defaults, data);

		const inputProviders = Object.keys(data.inputs).map(inputName => ({provide: inputName, useValue: data.inputs[inputName]}));
		const resolvedInputs = ReflectiveInjector.resolve(inputProviders);
		const injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.vcRef.parentInjector);
		const factory = this.resolver.resolveComponentFactory(data.component);
		let focusedElement = document.activeElement;
		let component = factory.create(injector);
		component["previouslyFocusedElement"] = focusedElement;  // used to return focus to previously focused element
		this.componentRefs.push(component);
		this.vcRef.insert(component.hostView);

		component.instance["destroy"] = () => {
			// find the component in the list and call distroy on it
			// this is necessary to keep componentRefs up to date
			let index = this.componentRefs.indexOf(component);
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
		if (index >= this.componentRefs.length || this.componentRefs.length === 0) {
			return;
		}
		// on negative index destroy the last on the list (top modal)
		if (index < 0) {
			index = this.componentRefs.length - 1;
		}

		this.componentRefs[index]["previouslyFocusedElement"].focus();  // return focus
		this.componentRefs[index].destroy();
		this.componentRefs.splice(index, 1);
	}
}


