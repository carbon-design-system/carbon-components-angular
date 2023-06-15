import {
	ComponentRef,
	Injector,
	Injectable
} from "@angular/core";
import { PlaceholderService } from "carbon-components-angular/placeholder";
import { tap, delay } from "rxjs/operators";


/**
 * Modal service handles instantiating and destroying modal instances.
 * Uses PlaceholderService to track open instances, and for it's placeholder view reference.
 */
@Injectable()
export class BaseModalService {
	// track all our open modals
	protected static modalList: Array<ComponentRef<any>> = [];

	/**
	 * Creates an instance of `ModalService`.
	 */
	constructor(public placeholderService: PlaceholderService) {}

	/**
	 * Creates and renders the modal component that is passed in.
	 * `inputs` is an optional parameter of `data` that can be passed to the `Modal` component.
	 */
	create<T>(data: { component: any, inputs?: any }): ComponentRef<any> {
		let defaults = { inputs: {} };
		data = Object.assign({}, defaults, data);

		const inputProviders = Object.keys(data.inputs).map(inputName => ({
			provide: inputName,
			useValue: data.inputs[inputName]
		}));
		const injector = Injector.create({ providers: inputProviders });
		const component = this.placeholderService.createComponent(data.component, injector);
		let focusedElement = document.activeElement as HTMLElement;
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
			delay(240)
		).subscribe(() => {
			this.placeholderService.destroyComponent(component);
			// filter out our component
			BaseModalService.modalList = BaseModalService.modalList.filter(c => c !== component);
		});

		component.onDestroy(() => {
			focusedElement.focus();
		});

		BaseModalService.modalList.push(component);

		return component;
	}

	/**
	 * Destroys the modal on the supplied index.
	 * When called without parameters it destroys the most recently created/top most modal.
	 */
	destroy(index = -1) {
		// return if nothing to destroy because it's already destroyed
		if (index >= BaseModalService.modalList.length || BaseModalService.modalList.length === 0) {
			return;
		}
		// on negative index destroy the last on the list (top modal)
		if (index < 0) {
			index = BaseModalService.modalList.length - 1;
		}

		// Let animation finish before component is removed
		setTimeout(() => {
			if (BaseModalService.modalList[index]) {
				this.placeholderService.destroyComponent(BaseModalService.modalList[index]);
				BaseModalService.modalList.splice(index, 1);
			}
		}, 240);
	}
}
