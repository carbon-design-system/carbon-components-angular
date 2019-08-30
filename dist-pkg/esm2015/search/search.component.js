/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, EventEmitter, Output, HostBinding, ElementRef, HostListener, ViewChild } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { I18n } from "../i18n/i18n.module";
/**
 * @deprecated in favor of `valueChange`, to be removed in the next major carbon-components-angular version
 * Used to emit changes performed on search components.
 */
export class SearchChange {
}
function SearchChange_tsickle_Closure_declarations() {
    /**
     * Contains the `Search` that has been changed.
     * @type {?}
     */
    SearchChange.prototype.source;
    /**
     * The value of the `Search` field encompassed in the `SearchChange` class.
     * @type {?}
     */
    SearchChange.prototype.value;
}
/**
 * [See demo](../../?path=/story/search--basic)
 *
 * <example-url>../../iframe.html?id=search--basic</example-url>
 */
export class Search {
    /**
     * Creates an instance of `Search`.
     * @param {?} elementRef
     * @param {?} i18n The i18n translations.
     */
    constructor(elementRef, i18n) {
        this.elementRef = elementRef;
        this.i18n = i18n;
        /**
         * `light` or `dark` search theme.
         */
        this.theme = "dark";
        /**
         * Set to `true` for a disabled search input.
         */
        this.disabled = false;
        /**
         * Set to `true` for a toolbar search component.
         */
        this.toolbar = false;
        /**
         * Set to `true` for a loading search component.
         */
        this.skeleton = false;
        /**
         * Set to `true` to expand the toolbar search component.
         */
        this.active = false;
        /**
         * Specifies whether the search component is used in the table toolbar.
         */
        this.tableSearch = false;
        /**
         * The unique id for the search component.
         */
        this.id = `search-${Search.searchCount}`;
        /**
         * Sets the value attribute on the `input` element.
         */
        this.value = "";
        /**
         * Sets the autocomplete attribute on the `input` element.
         * For refernece: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#Values
         */
        this.autocomplete = "on";
        /**
         * Sets the text inside the `label` tag.
         */
        this.label = this.i18n.get().SEARCH.LABEL;
        /**
         * Sets the placeholder attribute on the `input` element.
         */
        this.placeholder = this.i18n.get().SEARCH.PLACEHOLDER;
        /**
         * Used to set the `title` attribute of the clear button.
         */
        this.clearButtonTitle = this.i18n.get().SEARCH.CLEAR_BUTTON;
        /**
         * @deprecated in favor of `valueChange`, to be removed in the next major carbon-components-angular version
         * Emits event notifying other classes when a change in state occurs in the input.
         */
        this.change = new EventEmitter();
        /**
         * Emits an event when value is changed.
         */
        this.valueChange = new EventEmitter();
        /**
         * Emits an event when the clear button is clicked.
         */
        this.clear = new EventEmitter();
        this._size = "xl";
        /**
         * Called when search input is blurred. Needed to properly implement `ControlValueAccessor`.
         */
        this.onTouched = () => { };
        /**
         * Method set in `registerOnChange` to propagate changes back to the form.
         */
        this.propagateChange = (_) => { };
        Search.searchCount++;
    }
    /**
     * @return {?}
     */
    get containerClass() { return !this.toolbar; }
    /**
     * Size of the search field.
     * @param {?} value
     * @return {?}
     */
    set size(value) {
        if (value === "lg") {
            console.warn("size `lg` has been deprecated and replaced by `xl`");
            value = "xl";
        }
        this._size = value;
    }
    /**
     * @return {?}
     */
    get size() {
        return this._size;
    }
    /**
     * This is the initial value set to the component
     * @param {?} value The input value.
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
    }
    /**
     * Sets a method in order to propagate changes back to the form.
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * Registers a callback to be triggered when the control has been touched.
     * @param {?} fn Callback to be triggered when the search input is touched.
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Called when text is written in the input.
     * @param {?} search The input text.
     * @return {?}
     */
    onSearch(search) {
        this.value = search;
        this.doValueChange();
    }
    /**
     * Called when clear button is clicked.
     * @return {?}
     */
    clearSearch() {
        this.value = "";
        this.clear.emit();
        this.propagateChange(this.value);
    }
    /**
     * @return {?}
     */
    doValueChange() {
        /** @type {?} */
        let event = new SearchChange();
        event.source = this;
        event.value = this.value;
        this.change.emit(event);
        this.valueChange.emit(this.value);
        this.propagateChange(this.value);
    }
    /**
     * @return {?}
     */
    openSearch() {
        this.active = true;
        setTimeout(() => this.inputRef.nativeElement.focus());
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyDown(event) {
        if (this.toolbar) {
            if (event.key === "Escape") {
                this.active = false;
            }
            else if (event.key === "Enter") {
                this.openSearch();
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    focusOut(event) {
        if (this.toolbar &&
            this.inputRef.nativeElement.value === "" &&
            event.relatedTarget === null) {
            this.active = false;
        }
    }
}
/**
 * Variable used for creating unique ids for search components.
 */
Search.searchCount = 0;
Search.decorators = [
    { type: Component, args: [{
                selector: "ibm-search",
                template: "<div\n\tclass=\"bx--search\"\n\t[ngClass]=\"{\n\t\t'bx--search--sm': size === 'sm',\n\t\t'bx--search--xl': size === 'xl',\n\t\t'bx--search--light': theme === 'light',\n\t\t'bx--skeleton': skeleton,\n\t\t'bx--toolbar-search': toolbar,\n\t\t'bx--toolbar-search--active': toolbar && active\n\t}\"\n\trole=\"search\">\n\t<label class=\"bx--label\" [for]=\"id\">{{label}}</label>\n\n\t<div *ngIf=\"skeleton; else enableInput\" class=\"bx--search-input\"></div>\n\t<ng-template #enableInput>\n\t\t<input\n\t\t\t#input\n\t\t\t*ngIf=\"!toolbar || active || value !== ''\"\n\t\t\tclass=\"bx--search-input\"\n\t\t\t[type]=\"tableSearch || !toolbar ? 'text' : 'search'\"\n\t\t\trole=\"search\"\n\t\t\t[id]=\"id\"\n\t\t\t[value]=\"value\"\n\t\t\t[autocomplete]=\"autocomplete\"\n\t\t\t[placeholder]=\"placeholder\"\n\t\t\t[disabled]=\"disabled\"\n\t\t\t[required]=\"required\"\n\t\t\t(input)=\"onSearch($event.target.value)\"/>\n\t\t<button *ngIf=\"!tableSearch && toolbar\" class=\"bx--toolbar-search__btn\" (click)=\"openSearch()\">\n\t\t\t<ibm-icon-search16 class=\"bx--search-magnifier\"></ibm-icon-search16>\n\t\t</button>\n\t\t<ibm-icon-search16 *ngIf=\"tableSearch || !toolbar\" (click)=\"openSearch()\" class=\"bx--search-magnifier\"></ibm-icon-search16>\n\t</ng-template>\n\n\t<button\n\t\t*ngIf=\"tableSearch || !toolbar\"\n\t\tclass=\"bx--search-close\"\n\t\t[ngClass]=\"{\n\t\t\t'bx--search-close--hidden': !value || value.length === 0\n\t\t}\"\n\t\t[title]=\"clearButtonTitle\"\n\t\t[attr.aria-label]=\"clearButtonTitle\"\n\t\t(click)=\"clearSearch()\">\n\t\t<ibm-icon-close16></ibm-icon-close16>\n\t</button>\n</div>\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: Search,
                        multi: true
                    }
                ]
            }] }
];
/** @nocollapse */
Search.ctorParameters = () => [
    { type: ElementRef },
    { type: I18n }
];
Search.propDecorators = {
    containerClass: [{ type: HostBinding, args: ["class.bx--form-item",] }],
    theme: [{ type: Input }],
    size: [{ type: Input }],
    disabled: [{ type: Input }],
    toolbar: [{ type: Input }],
    skeleton: [{ type: Input }],
    active: [{ type: Input }],
    tableSearch: [{ type: Input }],
    name: [{ type: Input }],
    id: [{ type: Input }],
    required: [{ type: Input }],
    value: [{ type: Input }],
    autocomplete: [{ type: Input }],
    label: [{ type: Input }],
    placeholder: [{ type: Input }],
    clearButtonTitle: [{ type: Input }],
    change: [{ type: Output }],
    valueChange: [{ type: Output }],
    clear: [{ type: Output }],
    inputRef: [{ type: ViewChild, args: ["input",] }],
    keyDown: [{ type: HostListener, args: ["keydown", ["$event"],] }],
    focusOut: [{ type: HostListener, args: ["focusout", ["$event"],] }]
};
function Search_tsickle_Closure_declarations() {
    /**
     * Variable used for creating unique ids for search components.
     * @type {?}
     */
    Search.searchCount;
    /**
     * `light` or `dark` search theme.
     * @type {?}
     */
    Search.prototype.theme;
    /**
     * Set to `true` for a disabled search input.
     * @type {?}
     */
    Search.prototype.disabled;
    /**
     * Set to `true` for a toolbar search component.
     * @type {?}
     */
    Search.prototype.toolbar;
    /**
     * Set to `true` for a loading search component.
     * @type {?}
     */
    Search.prototype.skeleton;
    /**
     * Set to `true` to expand the toolbar search component.
     * @type {?}
     */
    Search.prototype.active;
    /**
     * Specifies whether the search component is used in the table toolbar.
     * @type {?}
     */
    Search.prototype.tableSearch;
    /**
     * Sets the name attribute on the `input` element.
     * @type {?}
     */
    Search.prototype.name;
    /**
     * The unique id for the search component.
     * @type {?}
     */
    Search.prototype.id;
    /**
     * Reflects the required attribute of the `input` element.
     * @type {?}
     */
    Search.prototype.required;
    /**
     * Sets the value attribute on the `input` element.
     * @type {?}
     */
    Search.prototype.value;
    /**
     * Sets the autocomplete attribute on the `input` element.
     * For refernece: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#Values
     * @type {?}
     */
    Search.prototype.autocomplete;
    /**
     * Sets the text inside the `label` tag.
     * @type {?}
     */
    Search.prototype.label;
    /**
     * Sets the placeholder attribute on the `input` element.
     * @type {?}
     */
    Search.prototype.placeholder;
    /**
     * Used to set the `title` attribute of the clear button.
     * @type {?}
     */
    Search.prototype.clearButtonTitle;
    /**
     * @deprecated in favor of `valueChange`, to be removed in the next major carbon-components-angular version
     * Emits event notifying other classes when a change in state occurs in the input.
     * @type {?}
     */
    Search.prototype.change;
    /**
     * Emits an event when value is changed.
     * @type {?}
     */
    Search.prototype.valueChange;
    /**
     * Emits an event when the clear button is clicked.
     * @type {?}
     */
    Search.prototype.clear;
    /** @type {?} */
    Search.prototype.inputRef;
    /** @type {?} */
    Search.prototype._size;
    /**
     * Called when search input is blurred. Needed to properly implement `ControlValueAccessor`.
     * @type {?}
     */
    Search.prototype.onTouched;
    /**
     * Method set in `registerOnChange` to propagate changes back to the form.
     * @type {?}
     */
    Search.prototype.propagateChange;
    /** @type {?} */
    Search.prototype.elementRef;
    /** @type {?} */
    Search.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJzZWFyY2gvc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsWUFBWSxFQUNaLE1BQU0sRUFDTixXQUFXLEVBQ1gsVUFBVSxFQUNWLFlBQVksRUFDWixTQUFTLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7QUFNM0MsTUFBTTtDQVNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkQsTUFBTTs7Ozs7O0lBcUdMLFlBQXNCLFVBQXNCLEVBQVksSUFBVTtRQUE1QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVksU0FBSSxHQUFKLElBQUksQ0FBTTs7OztxQkExRi9CLE1BQU07Ozs7d0JBa0JyQixLQUFLOzs7O3VCQUlOLEtBQUs7Ozs7d0JBSUosS0FBSzs7OztzQkFJUCxLQUFLOzs7OzJCQUlBLEtBQUs7Ozs7a0JBUWQsVUFBVSxNQUFNLENBQUMsV0FBVyxFQUFFOzs7O3FCQVEzQixFQUFFOzs7Ozs0QkFLSyxJQUFJOzs7O3FCQUlYLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUs7Ozs7MkJBSXRCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFdBQVc7Ozs7Z0NBSTdCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVk7Ozs7O3NCQUs1QyxJQUFJLFlBQVksRUFBZ0I7Ozs7MkJBSTNCLElBQUksWUFBWSxFQUFVOzs7O3FCQUloQyxJQUFJLFlBQVksRUFBRTtxQkFJ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Qjt3QkFDMUIsV0FBVyxFQUFFLE1BQU07d0JBQ25CLEtBQUssRUFBRSxJQUFJO3FCQUNYO2lCQUNEO2FBQ0Q7Ozs7WUFyQ0EsVUFBVTtZQUtGLElBQUk7Ozs2QkF1Q1gsV0FBVyxTQUFDLHFCQUFxQjtvQkFLakMsS0FBSzttQkFJTCxLQUFLO3VCQWNMLEtBQUs7c0JBSUwsS0FBSzt1QkFJTCxLQUFLO3FCQUlMLEtBQUs7MEJBSUwsS0FBSzttQkFJTCxLQUFLO2lCQUlMLEtBQUs7dUJBSUwsS0FBSztvQkFJTCxLQUFLOzJCQUtMLEtBQUs7b0JBSUwsS0FBSzswQkFJTCxLQUFLOytCQUlMLEtBQUs7cUJBS0wsTUFBTTswQkFJTixNQUFNO29CQUlOLE1BQU07dUJBRU4sU0FBUyxTQUFDLE9BQU87c0JBNkVqQixZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDO3VCQVdsQyxZQUFZLFNBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbnB1dCxcblx0RXZlbnRFbWl0dGVyLFxuXHRPdXRwdXQsXG5cdEhvc3RCaW5kaW5nLFxuXHRFbGVtZW50UmVmLFxuXHRIb3N0TGlzdGVuZXIsXG5cdFZpZXdDaGlsZFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBJMThuIH0gZnJvbSBcIi4uL2kxOG4vaTE4bi5tb2R1bGVcIjtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBpbiBmYXZvciBvZiBgdmFsdWVDaGFuZ2VgLCB0byBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIGNhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIgdmVyc2lvblxuICogVXNlZCB0byBlbWl0IGNoYW5nZXMgcGVyZm9ybWVkIG9uIHNlYXJjaCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgY2xhc3MgU2VhcmNoQ2hhbmdlIHtcblx0LyoqXG5cdCAqIENvbnRhaW5zIHRoZSBgU2VhcmNoYCB0aGF0IGhhcyBiZWVuIGNoYW5nZWQuXG5cdCAqL1xuXHRzb3VyY2U6IFNlYXJjaDtcblx0LyoqXG5cdCAqIFRoZSB2YWx1ZSBvZiB0aGUgYFNlYXJjaGAgZmllbGQgZW5jb21wYXNzZWQgaW4gdGhlIGBTZWFyY2hDaGFuZ2VgIGNsYXNzLlxuXHQgKi9cblx0dmFsdWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBbU2VlIGRlbW9dKC4uLy4uLz9wYXRoPS9zdG9yeS9zZWFyY2gtLWJhc2ljKVxuICpcbiAqIDxleGFtcGxlLXVybD4uLi8uLi9pZnJhbWUuaHRtbD9pZD1zZWFyY2gtLWJhc2ljPC9leGFtcGxlLXVybD5cbiAqL1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImlibS1zZWFyY2hcIixcblx0dGVtcGxhdGVVcmw6IFwic2VhcmNoLmNvbXBvbmVudC5odG1sXCIsXG5cdHByb3ZpZGVyczogW1xuXHRcdHtcblx0XHRcdHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuXHRcdFx0dXNlRXhpc3Rpbmc6IFNlYXJjaCxcblx0XHRcdG11bHRpOiB0cnVlXG5cdFx0fVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblx0LyoqXG5cdCAqIFZhcmlhYmxlIHVzZWQgZm9yIGNyZWF0aW5nIHVuaXF1ZSBpZHMgZm9yIHNlYXJjaCBjb21wb25lbnRzLlxuXHQgKi9cblx0c3RhdGljIHNlYXJjaENvdW50ID0gMDtcblxuXHRASG9zdEJpbmRpbmcoXCJjbGFzcy5ieC0tZm9ybS1pdGVtXCIpIGdldCBjb250YWluZXJDbGFzcygpIHsgcmV0dXJuICF0aGlzLnRvb2xiYXI7IH1cblxuXHQvKipcblx0ICogYGxpZ2h0YCBvciBgZGFya2Agc2VhcmNoIHRoZW1lLlxuXHQgKi9cblx0QElucHV0KCkgdGhlbWU6IFwibGlnaHRcIiB8IFwiZGFya1wiID0gXCJkYXJrXCI7XG5cdC8qKlxuXHQgKiBTaXplIG9mIHRoZSBzZWFyY2ggZmllbGQuXG5cdCAqL1xuXHRASW5wdXQoKSBzZXQgc2l6ZSh2YWx1ZTogXCJzbVwiIHwgXCJsZ1wiIHwgXCJ4bFwiKSB7XG5cdFx0aWYgKHZhbHVlID09PSBcImxnXCIpIHtcblx0XHRcdGNvbnNvbGUud2FybihcInNpemUgYGxnYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCByZXBsYWNlZCBieSBgeGxgXCIpO1xuXHRcdFx0dmFsdWUgPSBcInhsXCI7XG5cdFx0fVxuXHRcdHRoaXMuX3NpemUgPSB2YWx1ZTtcblx0fVxuXG5cdGdldCBzaXplKCk6IFwic21cIiB8IFwibGdcIiB8IFwieGxcIiB7XG5cdFx0cmV0dXJuIHRoaXMuX3NpemU7XG5cdH1cblx0LyoqXG5cdCAqIFNldCB0byBgdHJ1ZWAgZm9yIGEgZGlzYWJsZWQgc2VhcmNoIGlucHV0LlxuXHQgKi9cblx0QElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcblx0LyoqXG5cdCAqIFNldCB0byBgdHJ1ZWAgZm9yIGEgdG9vbGJhciBzZWFyY2ggY29tcG9uZW50LlxuXHQgKi9cblx0QElucHV0KCkgdG9vbGJhciA9IGZhbHNlO1xuXHQvKipcblx0ICogU2V0IHRvIGB0cnVlYCBmb3IgYSBsb2FkaW5nIHNlYXJjaCBjb21wb25lbnQuXG5cdCAqL1xuXHRASW5wdXQoKSBza2VsZXRvbiA9IGZhbHNlO1xuXHQvKipcblx0ICogU2V0IHRvIGB0cnVlYCB0byBleHBhbmQgdGhlIHRvb2xiYXIgc2VhcmNoIGNvbXBvbmVudC5cblx0ICovXG5cdEBJbnB1dCgpIGFjdGl2ZSA9IGZhbHNlO1xuXHQvKipcblx0ICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHNlYXJjaCBjb21wb25lbnQgaXMgdXNlZCBpbiB0aGUgdGFibGUgdG9vbGJhci5cblx0ICovXG5cdEBJbnB1dCgpIHRhYmxlU2VhcmNoID0gZmFsc2U7XG5cdC8qKlxuXHQgKiBTZXRzIHRoZSBuYW1lIGF0dHJpYnV0ZSBvbiB0aGUgYGlucHV0YCBlbGVtZW50LlxuXHQgKi9cblx0QElucHV0KCkgbmFtZTogc3RyaW5nO1xuXHQvKipcblx0ICogVGhlIHVuaXF1ZSBpZCBmb3IgdGhlIHNlYXJjaCBjb21wb25lbnQuXG5cdCAqL1xuXHRASW5wdXQoKSBpZCA9IGBzZWFyY2gtJHtTZWFyY2guc2VhcmNoQ291bnR9YDtcblx0LyoqXG5cdCAqIFJlZmxlY3RzIHRoZSByZXF1aXJlZCBhdHRyaWJ1dGUgb2YgdGhlIGBpbnB1dGAgZWxlbWVudC5cblx0ICovXG5cdEBJbnB1dCgpIHJlcXVpcmVkOiBib29sZWFuO1xuXHQvKipcblx0ICogU2V0cyB0aGUgdmFsdWUgYXR0cmlidXRlIG9uIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG5cdCAqL1xuXHRASW5wdXQoKSB2YWx1ZSA9IFwiXCI7XG5cdC8qKlxuXHQgKiBTZXRzIHRoZSBhdXRvY29tcGxldGUgYXR0cmlidXRlIG9uIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG5cdCAqIEZvciByZWZlcm5lY2U6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvQXR0cmlidXRlcy9hdXRvY29tcGxldGUjVmFsdWVzXG5cdCAqL1xuXHRASW5wdXQoKSBhdXRvY29tcGxldGUgPSBcIm9uXCI7XG5cdC8qKlxuXHQgKiBTZXRzIHRoZSB0ZXh0IGluc2lkZSB0aGUgYGxhYmVsYCB0YWcuXG5cdCAqL1xuXHRASW5wdXQoKSBsYWJlbCA9IHRoaXMuaTE4bi5nZXQoKS5TRUFSQ0guTEFCRUw7XG5cdC8qKlxuXHQgKiBTZXRzIHRoZSBwbGFjZWhvbGRlciBhdHRyaWJ1dGUgb24gdGhlIGBpbnB1dGAgZWxlbWVudC5cblx0ICovXG5cdEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gdGhpcy5pMThuLmdldCgpLlNFQVJDSC5QTEFDRUhPTERFUjtcblx0LyoqXG5cdCAqIFVzZWQgdG8gc2V0IHRoZSBgdGl0bGVgIGF0dHJpYnV0ZSBvZiB0aGUgY2xlYXIgYnV0dG9uLlxuXHQgKi9cblx0QElucHV0KCkgY2xlYXJCdXR0b25UaXRsZSA9IHRoaXMuaTE4bi5nZXQoKS5TRUFSQ0guQ0xFQVJfQlVUVE9OO1xuXHQvKipcblx0ICogQGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgYHZhbHVlQ2hhbmdlYCwgdG8gYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciBjYXJib24tY29tcG9uZW50cy1hbmd1bGFyIHZlcnNpb25cblx0ICogRW1pdHMgZXZlbnQgbm90aWZ5aW5nIG90aGVyIGNsYXNzZXMgd2hlbiBhIGNoYW5nZSBpbiBzdGF0ZSBvY2N1cnMgaW4gdGhlIGlucHV0LlxuXHQgKi9cblx0QE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8U2VhcmNoQ2hhbmdlPigpO1xuXHQvKipcblx0ICogRW1pdHMgYW4gZXZlbnQgd2hlbiB2YWx1ZSBpcyBjaGFuZ2VkLlxuXHQgKi9cblx0QE91dHB1dCgpIHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cdC8qKlxuXHQgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSBjbGVhciBidXR0b24gaXMgY2xpY2tlZC5cblx0ICovXG5cdEBPdXRwdXQoKSBjbGVhciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAVmlld0NoaWxkKFwiaW5wdXRcIikgaW5wdXRSZWY6IEVsZW1lbnRSZWY7XG5cblx0cHJvdGVjdGVkIF9zaXplOiBcInNtXCIgfCBcInhsXCIgPSBcInhsXCI7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgYFNlYXJjaGAuXG5cdCAqIEBwYXJhbSBpMThuIFRoZSBpMThuIHRyYW5zbGF0aW9ucy5cblx0ICovXG5cdGNvbnN0cnVjdG9yKHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgaTE4bjogSTE4bikge1xuXHRcdFNlYXJjaC5zZWFyY2hDb3VudCsrO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoaXMgaXMgdGhlIGluaXRpYWwgdmFsdWUgc2V0IHRvIHRoZSBjb21wb25lbnRcblx0ICogQHBhcmFtIHZhbHVlIFRoZSBpbnB1dCB2YWx1ZS5cblx0ICovXG5cdHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdH1cblxuXHQvKipcblx0ICogU2V0cyBhIG1ldGhvZCBpbiBvcmRlciB0byBwcm9wYWdhdGUgY2hhbmdlcyBiYWNrIHRvIHRoZSBmb3JtLlxuXHQgKi9cblx0cHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xuXHRcdHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XG5cdH1cblxuXHQvKipcblx0ICogUmVnaXN0ZXJzIGEgY2FsbGJhY2sgdG8gYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbnRyb2wgaGFzIGJlZW4gdG91Y2hlZC5cblx0ICogQHBhcmFtIGZuIENhbGxiYWNrIHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSBzZWFyY2ggaW5wdXQgaXMgdG91Y2hlZC5cblx0ICovXG5cdHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG5cdFx0dGhpcy5vblRvdWNoZWQgPSBmbjtcblx0fVxuXG5cdC8qKlxuXHQgKiBDYWxsZWQgd2hlbiBzZWFyY2ggaW5wdXQgaXMgYmx1cnJlZC4gTmVlZGVkIHRvIHByb3Blcmx5IGltcGxlbWVudCBgQ29udHJvbFZhbHVlQWNjZXNzb3JgLlxuXHQgKi9cblx0b25Ub3VjaGVkOiAoKSA9PiBhbnkgPSAoKSA9PiB7fTtcblxuXHQvKipcblx0ICogTWV0aG9kIHNldCBpbiBgcmVnaXN0ZXJPbkNoYW5nZWAgdG8gcHJvcGFnYXRlIGNoYW5nZXMgYmFjayB0byB0aGUgZm9ybS5cblx0ICovXG5cdHByb3BhZ2F0ZUNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuXG5cdC8qKlxuXHQgKiBDYWxsZWQgd2hlbiB0ZXh0IGlzIHdyaXR0ZW4gaW4gdGhlIGlucHV0LlxuXHQgKiBAcGFyYW0gc2VhcmNoIFRoZSBpbnB1dCB0ZXh0LlxuXHQgKi9cblx0b25TZWFyY2goc2VhcmNoOiBzdHJpbmcpIHtcblx0XHR0aGlzLnZhbHVlID0gc2VhcmNoO1xuXHRcdHRoaXMuZG9WYWx1ZUNoYW5nZSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENhbGxlZCB3aGVuIGNsZWFyIGJ1dHRvbiBpcyBjbGlja2VkLlxuXHQgKi9cblx0Y2xlYXJTZWFyY2goKTogdm9pZCB7XG5cdFx0dGhpcy52YWx1ZSA9IFwiXCI7XG5cdFx0dGhpcy5jbGVhci5lbWl0KCk7XG5cdFx0dGhpcy5wcm9wYWdhdGVDaGFuZ2UodGhpcy52YWx1ZSk7XG5cdH1cblxuXHRkb1ZhbHVlQ2hhbmdlKCkge1xuXHRcdGxldCBldmVudCA9IG5ldyBTZWFyY2hDaGFuZ2UoKTtcblx0XHRldmVudC5zb3VyY2UgPSB0aGlzO1xuXHRcdGV2ZW50LnZhbHVlID0gdGhpcy52YWx1ZTtcblx0XHR0aGlzLmNoYW5nZS5lbWl0KGV2ZW50KTtcblx0XHR0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG5cdFx0dGhpcy5wcm9wYWdhdGVDaGFuZ2UodGhpcy52YWx1ZSk7XG5cdH1cblxuXHRvcGVuU2VhcmNoKCkge1xuXHRcdHRoaXMuYWN0aXZlID0gdHJ1ZTtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpKTtcblx0fVxuXG5cdEBIb3N0TGlzdGVuZXIoXCJrZXlkb3duXCIsIFtcIiRldmVudFwiXSlcblx0a2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuXHRcdGlmICh0aGlzLnRvb2xiYXIpIHtcblx0XHRcdGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcblx0XHRcdFx0dGhpcy5hY3RpdmUgPSBmYWxzZTtcblx0XHRcdH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcblx0XHRcdFx0dGhpcy5vcGVuU2VhcmNoKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0QEhvc3RMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIFtcIiRldmVudFwiXSlcblx0Zm9jdXNPdXQoZXZlbnQpIHtcblx0XHRpZiAodGhpcy50b29sYmFyICYmXG5cdFx0XHR0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUgPT09IFwiXCIgJiZcblx0XHRcdGV2ZW50LnJlbGF0ZWRUYXJnZXQgPT09IG51bGwpIHtcblx0XHRcdHRoaXMuYWN0aXZlID0gZmFsc2U7XG5cdFx0fVxuXHR9XG59XG4iXX0=