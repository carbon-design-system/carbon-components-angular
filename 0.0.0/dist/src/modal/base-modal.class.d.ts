import { EventEmitter } from "@angular/core";
/**
 * Extend `BaseModal` in your custom modal implementations to ensure consistent close behaviour.
 *
 * `ModalService` depends on the `close` event to correctly clean up the component.
 */
export declare class BaseModal {
    close: EventEmitter<{}>;
    closeModal(): void;
}
