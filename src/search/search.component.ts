import {
	Component,
	Input,
	EventEmitter,
	Output,
	HostBinding
} from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";
import { I18n } from "../i18n/i18n.module";

/**
 * Used to emit changes performed on search components.
 * @export
 * @class SearchChange
 */
export class SearchChange {
	/**
	 * Contains the `Search` that has been changed.
	 * @type {Search}
	 * @memberof SearchChange
	 */
	source: Search;
	/**
	 * The value of the `Search` field encompassed in the `SearchChange` class.
	 * @type {string}
	 * @memberof SearchChange
	 */
	value: string;
}

/**
 * @export
 * @class Search
 * @implements {ControlValueAccessor}
 */
@Component({
	selector: "ibm-search",
	template: `
		<div
			class="bx--search"
			[ngClass]="{
				'bx--search--sm': size === 'sm',
				'bx--search--lg': size === 'lg',
				'bx--search--light': theme === 'light',
				'bx--skeleton': skeleton
			}"
			role="search">
			<label class="bx--label" [for]="id">{{label}}</label>

			<div *ngIf="skeleton; else enableInput" class="bx--search-input"></div>
			<ng-template #enableInput>
				<input
					class="bx--search-input"
					type="text"
					role="search"
					[id]="id"
					[value]="value"
					[placeholder]="placeholder"
					[disabled]="disabled"
					[required]="required"
					(input)="onSearch($event.target.value)"/>
				<svg
					class="bx--search-magnifier"
					width="16"
					height="16"
					viewBox="0 0 16 16">
					<path
						d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm4.936-1.27l4.563 4.557-.707.708-4.563-4.558a6.5 6.5 0 1 1 .707-.707z"
						fill-rule="nonzero"/>
				</svg>
			</ng-template>

			<button
				class="bx--search-close"
				[ngClass]="{
					'bx--search-close--hidden': !value || value.length === 0
				}"
				[title]="clearButtonTitle"
				[attr.aria-label]="clearButtonTitle"
				(click)="clearSearch()">
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M8 6.586L5.879 4.464 4.464 5.88 6.586 8l-2.122 2.121 1.415 1.415L8 9.414l2.121 2.122 1.415-1.415L9.414
							8l2.122-2.121-1.415-1.415L8 6.586zM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"
						fill-rule="evenodd"/>
				</svg>
			</button>
		</div>
	`,
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

	@HostBinding("class.bx--form-item") containerClass = true;

	/**
	 * `light` or `dark` search theme.
	 */
	@Input() theme: "light" | "dark" = "dark";
	/**
	 * Size of the search field.
	 */
	@Input() size: "sm" | "lg" = "lg";
	/**
	 * Set to `true` for a disabled search input.
	 */
	@Input() disabled = false;
	/**
	 * Set to `true` for a loading search component.
	 */
	@Input() skeleton = false;
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
	 * Emits event notifying other classes when a change in state occurs in the input.
	 */
	@Output() change = new EventEmitter<SearchChange>();

	/**
	 * Creates an instance of `Search`.
	 * @param i18n The i18n translations.
	 * @memberof Search
	 */
	constructor(protected i18n: I18n) {
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
	 * @param {any} fn
	 * @memberof Search
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
	 * @memberof Search
	 */
	onTouched: () => any = () => {};

	/**
	 * Method set in `registerOnChange` to propagate changes back to the form.
	 * @memberof Search
	 */
	propagateChange = (_: any) => {};

	/**
	 * Called when text is written in the input.
	 * @param {string} search The input text.
	 */
	onSearch(search: string) {
		this.value = search;
		this.emitChangeEvent();
	}

	/**
	 * Called when clear button is clicked.
	 * @memberof Search
	 */
	clearSearch(): void {
		this.value = "";
		this.emitChangeEvent();
	}

	/**
	 * Creates a class of `RadioChange` to emit the change in the `RadioGroup`.
	 */
	emitChangeEvent() {
		let event = new SearchChange();
		event.source = this;
		event.value = this.value;
		this.change.emit(event);
		this.propagateChange(this.value);
	}
}
