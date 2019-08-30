/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Output, EventEmitter } from "@angular/core";
/**
 * Extend `BaseModal` in your custom modal implementations to ensure consistent close behavior.
 *
 * `ModalService` depends on the `close` event to correctly clean up the component.
 */
export class BaseModal {
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
BaseModal.propDecorators = {
    close: [{ type: Output }]
};
function BaseModal_tsickle_Closure_declarations() {
    /** @type {?} */
    BaseModal.prototype.close;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1tb2RhbC5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJtb2RhbC9iYXNlLW1vZGFsLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBT3JELE1BQU07O3FCQUNhLElBQUksWUFBWSxFQUFFOzs7OztJQUNwQyxVQUFVO1FBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNsQjs7O29CQUhBLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbi8qKlxuICogRXh0ZW5kIGBCYXNlTW9kYWxgIGluIHlvdXIgY3VzdG9tIG1vZGFsIGltcGxlbWVudGF0aW9ucyB0byBlbnN1cmUgY29uc2lzdGVudCBjbG9zZSBiZWhhdmlvci5cbiAqXG4gKiBgTW9kYWxTZXJ2aWNlYCBkZXBlbmRzIG9uIHRoZSBgY2xvc2VgIGV2ZW50IHRvIGNvcnJlY3RseSBjbGVhbiB1cCB0aGUgY29tcG9uZW50LlxuICovXG5leHBvcnQgY2xhc3MgQmFzZU1vZGFsIHtcblx0QE91dHB1dCgpIGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRjbG9zZU1vZGFsKCk6IHZvaWQge1xuXHRcdHRoaXMuY2xvc2UuZW1pdCgpO1xuXHR9XG59XG4iXX0=