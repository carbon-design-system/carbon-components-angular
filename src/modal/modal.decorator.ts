/**
 * Decorator used to apply metadata on `Modal` class.
 *
 * class: ModalContainer
 *
 * decorator: @Modal
 * @class ModalContainer
 */
class ModalContainer {
	destroy: Function;
	closeModal(): void {
		this.destroy();
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
