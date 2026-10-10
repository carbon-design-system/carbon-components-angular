import {
	Output,
	EventEmitter,
	Input,
	Directive
} from "@angular/core";

/**
 * Extend `BaseModal` in your custom modal implementations to ensure consistent close behavior.
 *
 * `ModalService` depends on the `close` event to correctly clean up the component.
 */
@Directive({
	selector: "[cdsBaseModal], [ibmBaseModal]"
})
export class BaseModal<R = any> {
	/**
	 * Base event emitter to propagate close events
	 */
	@Output() close = new EventEmitter<R>();

	/**
	 * Controls the open state of the modal
	 */
	@Input() open = false;

	/**
	 * Default method to handle closing the modal
	 */
	closeModal(value?: R): void {
		this.close.emit(value);
	}
}
