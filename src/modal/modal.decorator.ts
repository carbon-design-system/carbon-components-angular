import { Output, EventEmitter } from "@angular/core";

/**
 * # Deprecated - extend `BaseModal` instead
 *
 * Decorator used to apply metadata on `Modal` class.
 *
 * class: ModalContainer
 *
 * decorator: @Modal
 * @deprecated
 */
class ModalContainer {
	@Output() close = new EventEmitter();
	closeModal(): void {
		this.close.emit();
	}
}

/**
 * Applying the decorator metadata to the target class (`Modal`).
 * @export
 * @returns {Object}
 */
export default function Modal() {
	return function(target) {
		Object.assign(target.prototype, ModalContainer.prototype);
	};
}
