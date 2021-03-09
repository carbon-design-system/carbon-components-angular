import {
	Component,
	Input,
	EventEmitter,
	Output,
	HostBinding,
	ElementRef,
	HostListener,
	ViewChild
} from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";
import { I18n } from "carbon-components-angular/i18n";

/**
 * [See demo](../../?path=/story/search--basic)
 *
 * <example-url>../../iframe.html?id=search--basic</example-url>
 */
@Component({
	selector: "ibm-search",
	templateUrl: "search.component.html",
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: Search,
			multi: true
		}
	]
})
export class Search implements ControlValueAccessor {
	/**
	 * Variable used for creating unique ids for search components.
	 */
	static searchCount = 0;

	@HostBinding("class.bx--form-item") get containerClass() { return !this.toolbar; }

	/**
	 * `light` or `dark` search theme.
	 */
	@Input() theme: "light" | "dark" = "dark";
	/**
	 * Size of the search field.
	 */

	@Input() set size(value: "sm" | "md" | "xl") {
		this._size = value;
	}

	get size(): "sm" | "md" | "xl" {
		return this._size;
	}
	/**
	 * Set to `true` for a disabled search input.
	 */
	@Input() disabled = false;
	/**
	 * Set to `true` for a toolbar search component.
	 */
	@Input() toolbar = false;
	/**
	 * Set to `true` for a loading search component.
	 */
	@Input() skeleton = false;
	/**
	 * Set to `true` to expand the toolbar search component.
	 */
	@Input() active = false;
	/**
	 * Specifies whether the search component is used in the table toolbar.
	 */
	@Input() tableSearch = false;
	/**
	 * Sets the name attribute on the `input` element.
	 */
	@Input() name: string;
	/**
	 * The unique id for the search component.
	 */
	@Input() id = `search-${Search.searchCount}`;
	/**
	 * Reflects the required attribute of the `input` element.
	 */
	@Input() required: boolean;
	/**
	 * Sets the value attribute on the `input` element.
	 */
	@Input() value = "";
	/**
	 * Sets the autocomplete attribute on the `input` element.
	 * For reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#Values
	 */
	@Input() autocomplete = "on";
	/**
	 * Sets the text inside the `label` tag.
	 */
	@Input() label = this.i18n.get().SEARCH.LABEL;
	/**
	 * Sets the placeholder attribute on the `input` element.
	 */
	@Input() placeholder = this.i18n.get().SEARCH.PLACEHOLDER;
	/**
	 * Used to set the `title` attribute of the clear button.
	 */
	@Input() clearButtonTitle = this.i18n.get().SEARCH.CLEAR_BUTTON;
	/**
	 * Title for the search trigger
	 */
	@Input() searchTitle = "";
	/**
	 * Sets the aria label on the `div` element with the `search` role.
	 */
	@Input() ariaLabel: string;
	/**
	 * Emits an event when value is changed.
	 */
	@Output() valueChange = new EventEmitter<string>();
	@Output() open = new EventEmitter<boolean>();
	/**
	 * Emits an event when the clear button is clicked.
	 */
	@Output() clear = new EventEmitter();
	/**
	 * Emits an event on enter.
	 */
	@Output() search = new EventEmitter<string>();

	// @ts-ignore
	@ViewChild("input", { static: false }) inputRef: ElementRef;

	protected _size: "sm" | "md" | "xl" = "md";

	/**
	 * Creates an instance of `Search`.
	 * @param i18n The i18n translations.
	 */
	constructor(protected elementRef: ElementRef, protected i18n: I18n) {
		Search.searchCount++;
	}

	/**
	 * This is the initial value set to the component
	 * @param value The input value.
	 */
	public writeValue(value: any) {
		this.value = value;
	}

	/**
	 * Sets a method in order to propagate changes back to the form.
	 */
	public registerOnChange(fn: any) {
		this.propagateChange = fn;
	}

	/**
	 * Registers a callback to be triggered when the control has been touched.
	 * @param fn Callback to be triggered when the search input is touched.
	 */
	public registerOnTouched(fn: any) {
		this.onTouched = fn;
	}

	/**
	 * Called when search input is blurred. Needed to properly implement `ControlValueAccessor`.
	 */
	onTouched: () => any = () => {};

	/**
	 * Method set in `registerOnChange` to propagate changes back to the form.
	 */
	propagateChange = (_: any) => {};

	/**
	 * Called when text is written in the input.
	 * @param search The input text.
	 */
	onSearch(search: string) {
		this.value = search;
		this.doValueChange();
	}

	/**
	 * Called on enter.
	 */
	onEnter() {
		this.search.emit(this.value);
	}

	/**
	 * Called when clear button is clicked.
	 */
	clearSearch(): void {
		this.value = "";
		this.clear.emit();
		this.propagateChange(this.value);
	}

	doValueChange() {
		this.valueChange.emit(this.value);
		this.propagateChange(this.value);
	}

	openSearch() {
		this.active = true;
		this.open.emit(this.active);
		setTimeout(() => this.inputRef.nativeElement.focus());
	}

	@HostListener("keydown", ["$event"])
	keyDown(event: KeyboardEvent) {
		if (this.toolbar) {
			if (event.key === "Escape") {
				this.active = false;
			} else if (event.key === "Enter") {
				this.openSearch();
			}
		}
	}

	@HostListener("focusout", ["$event"])
	focusOut(event) {
		this.onTouched();
		if (this.toolbar &&
			this.inputRef &&
			this.inputRef.nativeElement.value === "" &&
			event.relatedTarget === null) {
			this.active = false;
			this.open.emit(this.active);
		}
	}
}
