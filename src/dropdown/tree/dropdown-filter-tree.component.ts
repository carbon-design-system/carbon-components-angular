import {
	Component,
	Input,
	Output,
	EventEmitter,
	forwardRef,
	TemplateRef,
	AfterViewInit,
	ViewChild,
	ElementRef,
	OnDestroy,
	OnChanges
} from "@angular/core";

import { findNextElem, findPrevElem } from "./../../common/a11y.service";
import { AbstractDropdownView } from "./../abstract-dropdown-view.class";
import { ListItem } from "./../list-item.interface";
import { ListGroup } from "./../../list-group/list-group.component";
import { watchFocusJump } from "./../dropdowntools";
import { DropdownTree } from "./tree.component";


/**
 * ```html
 * <n-dropdown-filter [items]="listItems"></n-dropdown-filter>
 * ```
 *
 * @export
 * @class DropdownFilterTree
 * @extends {DropdownList}
 * @implements {AbstractDropdownView}
 * @implements {AfterViewInit}
 * @implements {OnDestroy}
 * @implements {OnChanges}
 */
@Component({
	selector: "n-dropdown-filter-tree",
	template: `
		<div class="menu_filter-options">
			<label
				class="checkbox"
				*ngIf="type === 'multi'">
				<input
					#selectedOnly
					type="checkbox"
					[attr.disabled]="disableSelectedOnly"
					(click)="search()">
				<span class="checkbox_label">{{ 'DROPDOWN.FILTER.SELECTED_ONLY' | translate }}</span>
			</label>
			<label class="search_group">
				<n-static-icon
					class="search_icon"
					aria-hidden="true"
					icon="search"
					size="sm">
				</n-static-icon>
				<input
					#filter
					(keyup)="search()"
					type="search"
					tabindex="0"/>
				<button
					class="close"
					type="reset"
					attr.aria-label="{{ 'DROPDOWN.FILTER.RESET_SEARCH' | translate }}"
					[ngClass]="{
						visible: filter.value.trim()
					}"
					(click)="clearFilter()">
					<n-static-icon icon="x" size="sm" classList="close_icon"></n-static-icon>
				</button>
			</label>
		</div>
		<!-- clear selection -->
		<div
			#clearSelected
			tabindex="0"
			*ngIf="getSelected()"
			[ngClass]="{
				'clear-selection--sm': size === 'sm',
				'clear-selection': size === 'md' || size === 'default',
				'clear-selection--lg': size === 'lg'
			}"
			(click)="clearSelection()">
			{{ 'DROPDOWN.CLEAR' | translate}}
		</div>
		<!-- scroll up -->
		<div
			#upArrow
			class="scroll-arrow--up">
			<n-static-icon icon="carat_up" size="sm"></n-static-icon>
		</div>
		<n-tree-wrapper
			nScrollableList=".menu_tree"
			[scrollUpTarget]="upArrow"
			[scrollDownTarget]="downArrow"
			[scrollEnabled]="canScroll"
			[items]="displayItems"
			[listTpl]="listTpl"
			[selectedIcon]="selectedIcon"
			[label]="label"
			[role]="role"
			[outerPadding]="outerPadding"
			[iconWidth]="iconWidth"
			[innerPadding]="innerPadding"
			[size]="size"
			(select)="onClick($event)">
		</n-tree-wrapper>
		<div
			#downArrow
			class="scroll-arrow--down">
			<n-static-icon icon="carat_up" size="sm" style="transform: rotateX(180deg);"></n-static-icon>
		</div>
		<em *ngIf="displayItems.length === 0" class="empty">No search results</em>
		`,
		providers: [
			{
				provide: AbstractDropdownView,
				useExisting: DropdownFilterTree
			}
		]
}) // conceptually this extends list-group, but we dont have to
export class DropdownFilterTree extends DropdownTree implements AbstractDropdownView, AfterViewInit, OnChanges {
	public orderedItems: Array<ListItem> = [];

	/**
	 * Maintains a reference to the view DOM element for the unordered list of items.
	 * @type {ElementRef}
	 * @memberof DropdownFilterTree
	 */
	@ViewChild("list") list;
	/**
	 * Maintains a reference to the view DOM input element that allows filtering of values.
	 * @type {ElementRef}
	 * @memberof DropdownFilterTree
	 */
	@ViewChild("filter") filter;
	/**
	 * Keeps a reference to the "clear selection" element
	 */
	@ViewChild("clearSelected") clearSelected: ElementRef;
	/**
	 * Defines the rendering size of the `DropdownFilterList` input component.
	 * @type {("sm" | "md" | "lg")}
	 * @memberof DropdownFilterTree
	 */
	public size: "sm" | "md" | "lg" = "md";
	/**
	 * To maintain a local copy of the filter input element from the DOM.
	 * @memberof DropdownFilterTree
	 */
	public filterNative;
	public selectedOnlyNative;
	/**
	 * Set to `true` when there are no items selected and user should not have option to view only selected items.
	 * @memberof DropdownFilterTree
	 */
	public disableSelectedOnly = true;
	/**
	 * Holds the list of items that will be displayed in the `DropdownList`.
	 * It differs from the the complete set of items when filtering is used (but
	 * it is always a subset of the total items in `DropdownList`).
	 * @type {Array<ListItem>}
	 * @memberof DropdownFilterTree
	 */
	public displayItems: Array<ListItem> = [];

	/**
	 * Creates an instance of DropdownFilterTree.
	 * @param {ElementRef} elementRef
	 * @memberof DropdownFilterTree
	 */
	constructor(public elementRef: ElementRef) {
		super(elementRef);
	}

	/**
	 * Updates list when changes occur within the items belonging to the `DropdownList`.
	 * Additionally, the active filter string gets reset.
	 * @param {any} changes
	 * @returns null
	 * @memberof DropdownFilterTree
	 */
	ngOnChanges(changes) {
		if (changes.items) {
			this.items = JSON.parse(JSON.stringify(changes.items.currentValue));
			this.displayItems = this.items;
			this.flatList = [];
			this.flattenTree(this.items);
			this.index = this.flatList.findIndex(item => item.selected && !item.items);
			// the rest of this depends on the view being instantiated ...
			if (!this.filterNative) { return; }

			this.filterNative.value = "";
			setTimeout(() => {
				this.listElementList = Array.from(this.elementRef.nativeElement.querySelectorAll("[role=option]")) as HTMLElement[];
			}, 0);
			this.setupFocusObservable();
		}
	}

	/**
	 * Retrieves array of list items and index of the selected item after view has rendered.
	 * Additionally, any Observables and EventListeners for the `DropdownFilterList` are initialized.
	 * @memberof DropdownFilterTree
	 */
	ngAfterViewInit() {
		this.listElementList = Array.from(this.elementRef.nativeElement.querySelectorAll("[role=option]")) as HTMLElement[];
		this.index = this.items.findIndex(item => item.selected  && !item.items);
		this.setupFocusObservable();
		// just makes dealing with the nativeElement slightly less verbose
		this.filterNative = this.filter.nativeElement;
	}

	/**
	 * Focuses the filter input first, instead of just calling `getCurrentElement()`
	 */
	initFocus() {
		this.filterNative.focus();
	}

	filterHelper(items, cb) {
		let filteredList = [];
		for (let item of items) {
			if (!item.items && cb(item)) {
				filteredList.push(item);
			}
			if (item.items) {
				let filteredItems = this.filterHelper(item.items, cb);
				if (filteredItems.length > 0) {
					let filteredItem = Object.assign({}, item, {
						items: filteredItems,
						selected: true
					});
					filteredList.push(filteredItem);
				}
			}
		}
		return filteredList;
	}

	/**
	 * Refactors the display items for the `DropdownList`. The items displayed are contingent on the filter string.
	 * @memberof DropdownFilterTree
	 */
	search() {
		this.displayItems = this.filterHelper(
			this.items,
			item => item.content.toLowerCase().includes(this.filterNative.value.toLowerCase())
		);

		// we still want to jump, so we just have to reset this
		// wait a tick to let the view update
		setTimeout(() => this.setupFocusObservable());
	}

	/**
	 * Clears the filtering of the list items for the `DropdownFilterList` input component.
	 * @memberof DropdownFilterTree
	 */
	clearFilter() {
		this.filterNative.value = "";
		this.displayItems = this.items;
		// wait a tick to let the view update
		setTimeout(() => this.setupFocusObservable());
	}
}
