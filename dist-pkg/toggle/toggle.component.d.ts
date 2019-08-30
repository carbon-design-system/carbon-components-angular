import { Checkbox } from "../checkbox/checkbox.component";
import { ChangeDetectorRef, EventEmitter, TemplateRef } from "@angular/core";
import { I18n, Overridable } from "../i18n/i18n.module";
import { Observable } from "rxjs";
/**
 * Defines the set of states for a toggle component.
 */
export declare enum ToggleState {
    Init = 0,
    Indeterminate = 1,
    Checked = 2,
    Unchecked = 3
}
/**
 * Used to emit changes performed on toggle components.
 */
export declare class ToggleChange {
    /**
     * Contains the `Toggle` that has been changed.
     */
    source: Toggle;
    /**
     * The state of the `Toggle` encompassed in the `ToggleChange` class.
     */
    checked: boolean;
}
/**
 * [See demo](../../?path=/story/toggle--basic)
 *
 * ```html
 * <ibm-toggle [(ngModel)]="toggleState">Toggle</ibm-toggle>
 * ```
 *
 * <example-url>../../iframe.html?id=toggle--basic</example-url>
 */
export declare class Toggle extends Checkbox {
    protected changeDetectorRef: ChangeDetectorRef;
    protected i18n: I18n;
    /**
     * Variable used for creating unique ids for toggle components.
     */
    static toggleCount: number;
    /**
     * Text that is set on the left side of the toggle.
     */
    offText: string | Observable<string>;
    /**
     * Text that is set on the right side of the toggle.
     */
    onText: string | Observable<string>;
    /**
     * Text that is set as the label of the toggle.
     */
    label: string | TemplateRef<any>;
    /**
     * Size of the toggle component.
     */
    size: "sm" | "md";
    /**
     * Set to `true` for a loading toggle.
     */
    skeleton: boolean;
    /**
     * The unique id allocated to the `Toggle`.
     */
    id: string;
    /**
     * Emits event notifying other classes when a change in state occurs on a toggle after a
     * click.
     */
    change: EventEmitter<ToggleChange>;
    protected _offValues: Overridable;
    protected _onValues: Overridable;
    /**
     * Creates an instance of Toggle.
     */
    constructor(changeDetectorRef: ChangeDetectorRef, i18n: I18n);
    getOffText(): Observable<string>;
    getOnText(): Observable<string>;
    /**
     * Creates instance of `ToggleChange` used to propagate the change event.
     */
    emitChangeEvent(): void;
    isTemplate(value: any): boolean;
}
