import { Injectable, ViewContainerRef } from "@angular/core";
import { AlertModal } from "./alert-modal.component";
import { AlertModalData } from "./alert-modal.interface";
import { PlaceholderService } from "carbon-components-angular/placeholder";
import { BaseModalService } from "./base-modal.service";

/**
 * Extends Base Modal Service to create Alert Modal with a function call. Placed in a seperate service
 * to prevent remote scoping (NG3003) which has side effects. Hence, import cycles are not allowed when
 * compilationMode is set to `partial`.
 *
 *
 * Modal service handles instantiating and destroying modal instances.
 * Uses PlaceholderService to track open instances, and for it's placeholder view reference.
 */
@Injectable()
export class ModalService extends BaseModalService {
	/**
	 * Creates an instance of `ModalService`.
	 */
	constructor(public placeholderService: PlaceholderService) {
		super(placeholderService);
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
				hasScrollingContent: data.hasScrollingContent !== undefined ? data.hasScrollingContent : null,
				size: data.size,
				buttons: data.buttons || [],
				close: data.close || (() => { }),
				showCloseButton: data.showCloseButton
			}
		});
	}
}

