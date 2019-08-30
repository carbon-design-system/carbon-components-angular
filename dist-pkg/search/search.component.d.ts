import { EventEmitter, ElementRef } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";
import { I18n } from "../i18n/i18n.module";
/**
 * @deprecated in favor of `valueChange`, to be removed in the next major carbon-components-angular version
 * Used to emit changes performed on search components.
 */
export declare class SearchChange {
    /**
     * Contains the `Search` that has been changed.
     */
    source: Search;
    /**
     * The value of the `Search` field encompassed in the `SearchChange` class.
     */
    value: string;
}
/**
 * [See demo](../../?path=/story/search--basic)
 *
 * <example-url>../../iframe.html?id=search--basic</example-url>
 */
export declare class Search implements ControlValueAccessor {
    protected elementRef: ElementRef;
    protected i18n: I18n;
    /**
     * Variable used for creating unique ids for search components.
     */
    static searchCount: number;
    readonly containerClass: boolean;
    /**
     * `light` or `dark` search theme.
     */
    theme: "light" | "dark";
    /**
     * Size of the search field.
     */
    size: "sm" | "lg" | "xl";
    /**
     * Set to `true` for a disabled search input.
     */
    disabled: boolean;
    /**
     * Set to `true` for a toolbar search component.
     */
    toolbar: boolean;
    /**
     * Set to `true` for a loading search component.
     */
    skeleton: boolean;
    /**
     * Set to `true` to expand the toolbar search component.
     */
    active: boolean;
    /**
     * Specifies whether the search component is used in the table toolbar.
     */
    tableSearch: boolean;
    /**
     * Sets the name attribute on the `input` element.
     */
    name: string;
    /**
     * The unique id for the search component.
     */
    id: string;
    /**
     * Reflects the required attribute of the `input` element.
     */
    required: boolean;
    /**
     * Sets the value attribute on the `input` element.
     */
    value: string;
    /**
     * Sets the autocomplete attribute on the `input` element.
     * For refernece: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#Values
     */
    autocomplete: string;
    /**
     * Sets the text inside the `label` tag.
     */
    label: any;
    /**
     * Sets the placeholder attribute on the `input` element.
     */
    placeholder: any;
    /**
     * Used to set the `title` attribute of the clear button.
     */
    clearButtonTitle: any;
    /**
     * @deprecated in favor of `valueChange`, to be removed in the next major carbon-components-angular version
     * Emits event notifying other classes when a change in state occurs in the input.
     */
    change: EventEmitter<SearchChange>;
    /**
     * Emits an event when value is changed.
     */
    valueChange: EventEmitter<string>;
    /**
     * Emits an event when the clear button is clicked.
     */
    clear: EventEmitter<{}>;
    inputRef: ElementRef;
    protected _size: "sm" | "xl";
    /**
     * Creates an instance of `Search`.
     * @param i18n The i18n translations.
     */
    constructor(elementRef: ElementRef, i18n: I18n);
    /**
     * This is the initial value set to the component
     * @param value The input value.
     */
    writeValue(value: any): void;
    /**
     * Sets a method in order to propagate changes back to the form.
     */
    registerOnChange(fn: any): void;
    /**
     * Registers a callback to be triggered when the control has been touched.
     * @param fn Callback to be triggered when the search input is touched.
     */
    registerOnTouched(fn: any): void;
    /**
     * Called when search input is blurred. Needed to properly implement `ControlValueAccessor`.
     */
    onTouched: () => any;
    /**
     * Method set in `registerOnChange` to propagate changes back to the form.
     */
    propagateChange: (_: any) => void;
    /**
     * Called when text is written in the input.
     * @param search The input text.
     */
    onSearch(search: string): void;
    /**
     * Called when clear button is clicked.
     */
    clearSearch(): void;
    doValueChange(): void;
    openSearch(): void;
    keyDown(event: KeyboardEvent): void;
    focusOut(event: any): void;
}
