/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Output, EventEmitter } from "@angular/core";
/**
 * # Deprecated - extend `BaseModal` instead
 *
 * Decorator used to apply metadata on `Modal` class.
 *
 * class: ModalContainer
 *
 * decorator: \@Modal
 * @deprecated
 */
class ModalContainer {
    constructor() {
        this.close = new EventEmitter();
    }
    /**
     * @return {?}
     */
    closeModal() {
        this.close.emit();
    }
}
ModalContainer.propDecorators = {
    close: [{ type: Output }]
};
function ModalContainer_tsickle_Closure_declarations() {
    /** @type {?} */
    ModalContainer.prototype.close;
}
/**
 * Applying the decorator metadata to the target class (`Modal`).
 * @return {?}
 */
export default function Modal() {
    return function (target) {
        Object.assign(target.prototype, ModalContainer.prototype);
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuZGVjb3JhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FyYm9uLWNvbXBvbmVudHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbIm1vZGFsL21vZGFsLmRlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7O0FBWXJEOztxQkFDbUIsSUFBSSxZQUFZLEVBQUU7Ozs7O0lBQ3BDLFVBQVU7UUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ2xCOzs7b0JBSEEsTUFBTTs7Ozs7Ozs7OztBQVNSLE1BQU0sQ0FBQyxPQUFPO0lBQ2IsT0FBTyxVQUFTLE1BQU07UUFDckIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUMxRCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbi8qKlxuICogIyBEZXByZWNhdGVkIC0gZXh0ZW5kIGBCYXNlTW9kYWxgIGluc3RlYWRcbiAqXG4gKiBEZWNvcmF0b3IgdXNlZCB0byBhcHBseSBtZXRhZGF0YSBvbiBgTW9kYWxgIGNsYXNzLlxuICpcbiAqIGNsYXNzOiBNb2RhbENvbnRhaW5lclxuICpcbiAqIGRlY29yYXRvcjogQE1vZGFsXG4gKiBAZGVwcmVjYXRlZFxuICovXG5jbGFzcyBNb2RhbENvbnRhaW5lciB7XG5cdEBPdXRwdXQoKSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0Y2xvc2VNb2RhbCgpOiB2b2lkIHtcblx0XHR0aGlzLmNsb3NlLmVtaXQoKTtcblx0fVxufVxuXG4vKipcbiAqIEFwcGx5aW5nIHRoZSBkZWNvcmF0b3IgbWV0YWRhdGEgdG8gdGhlIHRhcmdldCBjbGFzcyAoYE1vZGFsYCkuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGFsKCkge1xuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0KSB7XG5cdFx0T2JqZWN0LmFzc2lnbih0YXJnZXQucHJvdG90eXBlLCBNb2RhbENvbnRhaW5lci5wcm90b3R5cGUpO1xuXHR9O1xufVxuIl19