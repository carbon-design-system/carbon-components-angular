import { Output, EventEmitter } from "@angular/core";

/**
 * Extend `BaseModal` in your custom modal implementations to ensure consistent close behavior.
 *
 * `ModalService` depends on the `close` event to correctly clean up the component.
 */
export class BaseModal {
	@Output() close = new EventEmitter();
	closeModal(): void {
		this.close.emit();
	}
}
