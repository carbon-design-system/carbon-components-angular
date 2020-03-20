import { Output, EventEmitter } from "@angular/core";

/**
 * Extend `BaseModal` in your custom modal implementations to ensure consistent close behavior.
 *
 * `ModalService` depends on the `close` event to correctly clean up the component.
 */
export class BaseModal {
	/**
	 * Base event emitter to propagate close events
	 */
	@Output() close = new EventEmitter();

	/**
	 * Controls the open state of the modal
	 */
	open = false;

	/**
	 * Default method to handle closing the modal
	 */
	closeModal(): void {
		this.close.emit();
	}
}
