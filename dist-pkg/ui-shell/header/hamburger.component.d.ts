import { EventEmitter } from "@angular/core";
import { I18n } from "../../i18n/i18n.module";
/**
 * A toggle for the side navigation
 */
export declare class Hamburger {
    i18n: I18n;
    /**
     * Controls the active/selected state for the `Hamburger` menu.
     */
    active: boolean;
    /**
     * `EventEmitter` to notify parent components of menu click events.
     */
    selected: EventEmitter<Object>;
    constructor(i18n: I18n);
    /**
     * Emit the Hamburger click event upwards.
     */
    doClick(): void;
}
