import { EventEmitter } from "@angular/core";
/**
 * Contained by `HeaderGlobal`. Generally used to trigger `Panel`s
 */
export declare class HeaderAction {
    /**
     * Title. Populates the aria-label as well as the browser `title` tooltip
     */
    title: string;
    /**
     * Toggles the active state. May be used to toggle a `Panel`s active state.
     */
    active: boolean;
    /**
     * "Change" emitter to allow double binding to the `active` Input.
     */
    activeChange: EventEmitter<boolean>;
    /**
     * Emits when the action has been clicked.
     */
    selected: EventEmitter<boolean>;
    onClick(): void;
}
