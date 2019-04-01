import {
	Component,
	Input,
	EventEmitter,
	Output,
	HostBinding,
	ElementRef,
	HostListener
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
				'bx--search--xl': size === 'xl',
				'bx--search--light': theme === 'light',
				'bx--skeleton': skeleton,
				'bx--toolbar-search': toolbar,
				'bx--toolbar-search--active': toolbar && active
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
				<button
					*ngIf="toolbar; else svg"
					class="bx--toolbar-search__btn"
					[attr.aria-label]="i18n.get('SEARCH.TOOLBAR_SEARCH') | async"
					tabindex="0"
					(click)="openSearch($event)">
					<ng-template [ngTemplateOutlet]="svg"></ng-template>
				</button>
				<ng-template #svg>
					<ibm-icon-search16 class="bx--search-magnifier"></ibm-icon-search16>
				</ng-template>
			</ng-template>

			<button
				class="bx--search-close"
				[ngClass]="{
					'bx--search-close--hidden': !value || value.length === 0
				}"
				[title]="clearButtonTitle"
				[attr.aria-label]="clearButtonTitle"
				(click)="clearSearch()">
				<ibm-icon-close16></ibm-icon-close16>
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
	@Input() set size(value: "sm" | "lg" | "xl") {
		if (value === "lg") {
			value = "xl";
		}
		this._size = value;
	}

	get size(): "sm" | "lg" | "xl" {
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

	protected _size: "sm" | "xl" = "xl";

	/**
	 * Creates an instance of `Search`.
	 * @param i18n The i18n translations.
	 * @memberof Search
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

	openSearch(event) {
		this.active = true;
		this.elementRef.nativeElement.querySelector(".bx--search-input").focus();
	}

	@HostListener("keydown", ["$event"])
	keyDown(event: KeyboardEvent) {
		if (this.toolbar) {
			if (event.key === "Escape") {
				this.active = false;
			} else if (event.key === "Enter") {
				this.openSearch(event);
			}
		}
	}

	@HostListener("focusout", ["$event"])
	focusOut(event) {
		if (this.toolbar && event.relatedTarget === null) {
			this.active = false;
		}
	}
}
