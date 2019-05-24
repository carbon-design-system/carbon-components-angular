import {
	ComponentFactoryResolver,
	ComponentRef,
	Injector
} from "@angular/core";
import { Modal } from "./modal.component";
import { ReplaySubject } from "rxjs";
import { Injectable } from "@angular/core";
import { AlertModal } from "./alert-modal.component";
import { AlertModalData } from "./alert-modal.interface";
import { PlaceholderService } from "./../placeholder/placeholder.module";


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
 */
@Injectable()
export class ModalService {
	// track all our open modals
	protected static modalList: Array<ComponentRef<any>> = [];

	/**
	 * Creates an instance of `ModalService`.
	 */
	constructor(public resolver: ComponentFactoryResolver, public placeholderService: PlaceholderService) {}

	/**
	 * Creates and renders the modal component that is passed in.
	 * `inputs` is an optional parameter of `data` that can be passed to the `Modal` component.
	 */
	create<T>(data: {component: any, inputs?: any}): ComponentRef<any> {
		let defaults = {inputs: {}};
		data = Object.assign({}, defaults, data);

		const inputProviders = Object.keys(data.inputs).map(inputName => ({provide: inputName, useValue: data.inputs[inputName]}));
		const injector = Injector.create(inputProviders);
		const factory = this.resolver.resolveComponentFactory(data.component);
		let focusedElement = document.activeElement as HTMLElement;

		let component = this.placeholderService.createComponent(factory, injector);

		component["previouslyFocusedElement"] = focusedElement;  // used to return focus to previously focused element

		component.instance.close.subscribe(_ => {
			this.placeholderService.destroyComponent(component);
			// filter out our component
			ModalService.modalList = ModalService.modalList.filter(c => c === component);
		});

		component.onDestroy(() => {
			focusedElement.focus();
		});

		ModalService.modalList.push(component);

		return component;
	}

	/**
	 * Creates and renders a new alert modal component.
	 * @param data You can pass in:
	 * `modalType` - "default" | "danger" = "default",
	 * `modalLabel` - a label shown over the title,
	 * `modalTitle` - modal's title,
	 * `modalContent` - modal's content, could include HTML tags.
	 * `buttons` is an array of objects
	 * ```
	 * {
	 * 		text: "Button text",
	 * 		type: "primary" | "secondary" | "tertiary" | "ghost" | "danger" | "danger--primary" = "primary",
	 * 		click: clickFunction,
	 * }
	 * ```
	 */
	show(data: AlertModalData) {
		for (let key of Object.keys(data)) {
			if (["modalType", "modalLabel", "modalTitle", "modalContent"].includes(key)) {
				try {
					throw new Error(`${key} is deprecated, use ${key.replace("modal", "").toLowerCase()} instead`);
				} catch (error) {
					console.warn(error);
				}
			}
		}
		return this.create({
			component: AlertModal,
			inputs: {
				modalType: data.type || data.modalType,
				modalLabel: data.label || data.modalLabel,
				modalTitle: data.title || data.modalTitle,
				modalContent: data.content || data.modalContent,
				buttons: data.buttons || [],
				close: data.close || (() => {})
			}
		});
	}

	/**
	 * Destroys the modal on the supplied index.
	 * When called without parameters it destroys the most recently created/top most modal.
	 */
	destroy(index = -1) {
		// return if nothing to destroy because it's already destroyed
		if (index >= ModalService.modalList.length || ModalService.modalList.length === 0) {
			return;
		}
		// on negative index destroy the last on the list (top modal)
		if (index < 0) {
			index = ModalService.modalList.length - 1;
		}

		this.placeholderService.destroyComponent(ModalService.modalList[index]);
		ModalService.modalList.splice(index, 1);
	}
}


