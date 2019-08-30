import { EventEmitter } from "@angular/core";
export declare class ContentSwitcherOption {
    /**
     * Used to activate the option. Only one option may be `active` at a time
     */
    active: boolean;
    /**
     * Internal name for the option.
     * Should be something that identifies the option to the application.
     * Accessible from the `ContentSwitcher` `selected` emitter
     */
    name: string;
    /**
     * Emits when the option is selected.
     */
    selected: EventEmitter<{}>;
    switcherClass: string;
    selectedClass: boolean;
    role: string;
    ariaSelected: boolean;
    tabindex: string;
    protected _active: boolean;
    hostClick(): void;
    onFocus(): void;
}
