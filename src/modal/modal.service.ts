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
import { PlaceholderService } from "./../placeholder/index";
import { tap, delay } from "rxjs/operators";


/**
 * Modal service handles instantiating and destroying modal instances.
 * Uses PlaceholderService to track open instances, and for it's placeholder view reference.
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

		const inputProviders = Object.keys(data.inputs).map(inputName => ({
			provide: inputName,
			useValue: data.inputs[inputName]
		}));
		const injector = Injector.create(inputProviders);
		const factory = this.resolver.resolveComponentFactory(data.component);
		let focusedElement = document.activeElement as HTMLElement;

		let component = this.placeholderService.createComponent(factory, injector);

		setTimeout(() => {
			component.instance.open = true;
		});

		component["previouslyFocusedElement"] = focusedElement;  // used to return focus to previously focused element

		component.instance.close.pipe(
			// trigger the close animation
			tap(() => {
				component.instance.open = false;
			}),
			// delay closing by an arbitrary amount to allow the animation to finish
			delay(150)
		).subscribe(() => {
			this.placeholderService.destroyComponent(component);
			// filter out our component
			ModalService.modalList = ModalService.modalList.filter(c => c !== component);
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
	 * `type` - "default" | "danger" = "default",
	 * `label` - a label shown over the title,
	 * `title` - modal's title,
	 * `content` - modal's content, could include HTML tags.
	 * `buttons` is an array of objects
	 * `close` custom close function
	 * ```
	 * {
	 * 		text: "Button text",
	 * 		type: "primary" | "secondary" | "tertiary" | "ghost" | "danger" | "danger--primary" = "primary",
	 * 		click: clickFunction,
	 * }
	 * ```
	 */
	show(data: AlertModalData) {
		return this.create({
			component: AlertModal,
			inputs: {
				type: data.type,
				label: data.label,
				title: data.title,
				content: data.content,
				hasScrollingContent: data.hasScrollingContent || null,
				size: data.size,
				buttons: data.buttons || [],
				hasForm: data.hasForm,
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

