import {
	Component,
	Input,
	Output,
	OnChanges,
	OnDestroy,
	EventEmitter,
	forwardRef,
	TemplateRef,
	AfterViewInit,
	ViewChild,
	ElementRef
} from "@angular/core";

import { findNextElem, findPrevElem } from "./../../common/a11y.service";
import { AbstractDropdownView } from "./../abstract-dropdown-view.class";
import { dropdownConfig } from "./../dropdown.const";
import { ListItem } from "./../list-item.interface";
import { ListGroup } from "./../../list-group/list-group.component";
import { watchFocusJump } from "./../dropdowntools";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";


/**
 * ```html
 * <n-dropdown-list [items]="listItems"></n-dropdown-list>
 * ```
 * ```typescript
 * listItems = [
 * 	{
 * 		content: "item one",
 * 		selected: false
 * 	},
 * 	{
 * 		content: "item two",
 * 		selected: false,
 * 	},
 * 	{
 * 		content: "item three",
 * 		selected: false
 * 	},
 * 	{
 * 		content: "item four",
 * 		selected: false
 * 	}
 * ];
 * ```
 *
 * @export
 * @class DropdownList
 * @implements {AbstractDropdownView}
 * @implements {AfterViewInit}
 * @implements {OnChanges}
 * @implements {OnDestroy}
 */
@Component({
	selector: "n-dropdown-list",
	template: `
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
			(click)="clearSelection()"
			(keydown)="onClearSelectionKeyDown($event)">
			{{ 'DROPDOWN.CLEAR' | translate}}
		</div>
		<!-- scroll up arrow-->
		<div
			[ngStyle]="{display: canScrollUp ? 'flex' : 'none'}"
			class="scroll-arrow--up"
			style="justify-content: center;"
			(mouseover)="onHoverUp(true)"
			(mouseout)="onHoverUp(false)">
			<n-static-icon icon="carat_up" size="sm"></n-static-icon>
		</div>
		<!-- default is deprecated -->
		<ul
			#list
			role="listbox"
			[ngClass]="{
				'listbox--sm': size === 'sm',
				'listbox': size === 'md' || size === 'default',
				'listbox--lg': size === 'lg'
			}"
			(wheel)="onWheel($event)"
			(touchstart)="onTouchStart($event)"
			(touchmove)="onTouchMove($event)">
			<li tabindex="{{item.disabled? -1 : 0}}"
				role="option"
				*ngFor="let item of displayItems"
				(click)="doClick($event, item)"
				(keydown)="doKeyDown($event, item)"
				[ngClass]="{
					selected: item.selected,
					disabled: item.disabled
				}">
				<!-- default is deprecated -->
				<label
					style="margin: 0;"
					[ngClass]="{
						'checkbox--sm': size === 'sm',
						'checkbox': size === 'md' || size === 'default' || size === 'lg'
					}"
					*ngIf="type === 'multi'">
					<input
						tabindex="-1"
						type="checkbox"
						[attr.disabled]="(item.disabled ? true : null)"
						[checked]="item.selected"
						(click)="doClick($event, item)">
					<span class="checkbox_label"></span>
				</label>
				<span *ngIf="!listTpl">{{item.content}}</span>
				<ng-template
					*ngIf="listTpl"
					[ngTemplateOutletContext]="{item: item}"
					[ngTemplateOutlet]="listTpl">
				</ng-template>
			</li>
		</ul>
		<!-- scroll down arrow-->
		<div
			[ngStyle]="{display: canScrollDown ? 'flex' : 'none'}"
			class="scroll-arrow--down"
			style="justify-content: center;"
			(mouseover)="onHoverDown(true)"
			(mouseout)="onHoverDown(false)">
			<n-static-icon icon="carat_up" size="sm" style="transform: rotateX(180deg);"></n-static-icon>
		</div>`,
		providers: [
			{
				provide: AbstractDropdownView,
				useExisting: DropdownList
			}
		]
}) // conceptually this extends list-group, but we dont have to
export class DropdownList implements AbstractDropdownView, AfterViewInit, OnChanges, OnDestroy {
	/**
	 * The list items belonging to the `DropdownList`.
	 * @type {Array<ListItem>}
	 * @memberof DropdownList
	 */
	@Input() items: Array<ListItem> = [];
	/**
	 * Template to bind to items in the `DropdownList` (optional).
	 * @type {(string | TemplateRef<any>)}
	 * @memberof DropdownList
	 */
	@Input() listTpl: string | TemplateRef<any> = null;
	/**
	 * Event to emit selection of a list item within the `DropdownList`.
	 * @type {EventEmitter<Object>}
	 * @memberof DropdownList
	 */
	@Output() select: EventEmitter<Object> = new EventEmitter<Object>();
	/**
	 * Maintains a reference to the view DOM element for the unordered list of items within the `DropdownList`.
	 * @type {ElementRef}
	 * @memberof DropdownList
	 */
	@ViewChild("list") list: ElementRef;
	/**
	 * Keeps a reference to the "clear selection" element
	 */
	@ViewChild("clearSelected") clearSelected: ElementRef;
	/**
	 * Defines whether or not the `DropdownList` supports selecting multiple items as opposed to single
	 * item selection.
	 * @type {("single" | "multi")}
	 * @memberof DropdownList
	 */
	@Input() type: "single" | "multi" = "single";
	/**
	 * Defines the rendering size of the `DropdownList` input component.
	 * (size `"default"` is being deprecated as of neutrino v1.2.0, please use `"md"` instead)
	 * @type {("sm" | "md" | "default" | "lg")}
	 * @memberof DropdownList
	 */
	public size: "sm" | "md" | "default" | "lg" = "md";
	/**
	 * Holds the list of items that will be displayed in the `DropdownList`.
	 * It differs from the the complete set of items when filtering is used (but
	 * it is always a subset of the total items in `DropdownList`).
	 * @type {Array<ListItem>}
	 * @memberof DropdownList
	 */
	public displayItems: Array<ListItem> = [];
	/**
	 * controls wether the scroll up/down arrows are shown
	 */
	public canScrollUp = false;
	public canScrollDown = false;
	/**
	 * Maintains the index for the selected item within the `DropdownList`.
	 * @protected
	 * @type {number}
	 * @memberof DropdownList
	 */
	protected index = -1;
	/**
	 * An array holding the HTML list elements in the view.
	 * @protected
	 * @type {HTMLElement[]}
	 * @memberof DropdownList
	 */
	protected listElementList: HTMLElement[];
	/**
	 * Observable bound to keydown events to control filtering.
	 * @protected
	 * @memberof DropdownList
	 */
	protected focusJump;

	/**
	 * holds on to the last touch position (used for scrolling)
	 */
	protected lastTouch = 0;

	/**
	 * reference to the hover scrolling setInterval
	 */
	protected hoverScrollInterval = null;

	/**
	 * Creates an instance of `DropdownList`.
	 * @param {ElementRef} elementRef
	 * @memberof DropdownList
	 */
	constructor(public elementRef: ElementRef) {}

	/**
	 * Updates list when changes occur within the items belonging to the `DropdownList`.
	 * @param {any} changes
	 * @memberof DropdownList
	 */
	ngOnChanges(changes) {
		if (changes.items) {
			this.updateList(changes.items.currentValue);
		}
	}

	/**
	 * Retrieves array of list items and index of the selected item after view has rendered.
	 * Additionally, any Observables for the `DropdownList` are initialized.
	 * @memberof DropdownList
	 */
	ngAfterViewInit() {
		this.listElementList = Array.from(this.list.nativeElement.querySelectorAll("li")) as HTMLElement[];
		this.index = this.items.findIndex(item => item.selected);
		this.setupFocusObservable();
	}

	/**
	 * Removes any Observables on destruction of the component.
	 * @memberof DropdownList
	 */
	ngOnDestroy() {
		if (this.focusJump) {
			this.focusJump.unsubscribe();
		}
	}

	/**
	 * Updates the displayed list of items and then retrieves the most current properties for the `DropdownList` from the DOM.
	 * @param {any} items
	 * @memberof DropdownList
	 */
	updateList(items) {
		this.items = items.map(item => Object.assign({}, item));
		this.displayItems = this.items;
		setTimeout(() => {
			this.listElementList = Array.from(this.list.nativeElement.querySelectorAll("li")) as HTMLElement[];
		}, 0);
		this.index = this.items.findIndex(item => item.selected);
		this.setupFocusObservable();
	}

	/**
	 * Filters the items being displayed in the DOM list.
	 * @param {string}
	 * @memberof DropdownList
	 */
	filterBy(query = "") {
		if (query) {
			this.displayItems = this.items.filter(item => item.content.toLowerCase().includes(query.toLowerCase()));
		} else {
			this.displayItems = this.items;
		}
	}

	/**
	 * Initializes (or re-initializes) the Observable that handles switching focus to an element based on
	 * key input matching the first letter of the item in the list.
	 * @memberof DropdownList
	 */
	setupFocusObservable() {
		if (this.focusJump) {
			this.focusJump.unsubscribe();
		}
		let elList = Array.from(this.list.nativeElement.querySelectorAll("li"));
		this.focusJump = watchFocusJump(this.list.nativeElement, elList)
			.subscribe(el => {
				el.focus();
			});
	}

	/**
	 * Returns the `ListItem` that is subsequent to the selected item in the `DropdownList`.
	 * @returns {ListItem}
	 * @memberof DropdownList
	 */
	getNextItem(): ListItem {
		if (this.index < this.items.length - 1) {
			this.index++;
		}
		return this.items[this.index];
	}

	/**
	 * Returns `true` if the selected item is not the last item in the `DropdownList`.
	 * @returns {boolean}
	 * @memberof DropdownList
	 */
	hasNextElement(): boolean {
		if (this.index < this.items.length - 1) {
			return true;
		}
		return false;
	}

	/**
	 * Returns the `HTMLElement` for the item that is subsequent to the selected item.
	 * @returns {HTMLElement}
	 * @memberof DropdownList
	 */
	getNextElement(): HTMLElement {
		if (this.index < this.items.length - 1) {
			this.index++;
		}
		let elem = this.listElementList[this.index];
		let item = this.items[this.index];
		if (item.disabled) {
			return this.getNextElement();
		}
		return elem;
	}

	/**
	 * Returns the `ListItem` that precedes the selected item within `DropdownList`.
	 * @returns {ListItem}
	 * @memberof DropdownList
	 */
	getPrevItem(): ListItem {
		if (this.index > 0) {
			this.index--;
		}
		return this.items[this.index];
	}

	/**
	 * Returns `true` if the selected item is not the first in the list.
	 * @returns {boolean}
	 * @memberof DropdownList
	 */
	hasPrevElement(): boolean {
		if (this.index > 0) {
			return true;
		}
		return false;
	}

	/**
	 * Returns the `HTMLElement` for the item that precedes the selected item.
	 * @returns {HTMLElement}
	 * @memberof DropdownList
	 */
	getPrevElement(): HTMLElement {
		if (this.index > 0) {
			this.index--;
		}
		let elem = this.listElementList[this.index];
		let item = this.items[this.index];
		if (item.disabled) {
			return this.getPrevElement();
		}
		return elem;
	}

	/**
	 * Returns the `ListItem` that is selected within `DropdownList`.
	 * @returns {ListItem}
	 * @memberof DropdownList
	 */
	getCurrentItem(): ListItem {
		if (this.index < 0) {
			return this.items[0];
		}
		return this.items[this.index];
	}

	/**
	 * Returns the `HTMLElement` for the item that is selected within the `DropdownList`.
	 * @returns {HTMLElement}
	 * @memberof DropdownList
	 */
	getCurrentElement(): HTMLElement {
		if (this.index < 0) {
			return this.listElementList[0];
		}
		return this.listElementList[this.index];
	}

	/**
	 * Returns a list containing the selected item(s) in the `DropdownList`.
	 * @returns {ListItem[]}
	 * @memberof DropdownList
	 */
	getSelected(): ListItem[] {
		let selected = this.items.filter(item => item.selected);
		if (selected.length === 0) {
			return null;
		}
		return selected;
	}

	/**
	 * Transforms array input list of items to the correct state by updating the selected item(s).
	 * @param {Array<ListItem>} value
	 * @memberof DropdownList
	 */
	propagateSelected(value: Array<ListItem>): void {
		for (let newItem of value) {
			// copy the item
			let tempNewItem: string | ListItem = Object.assign({}, newItem);
			// deleted selected because it's what we _want_ to change
			delete tempNewItem.selected;
			// stringify for compare
			tempNewItem = JSON.stringify(tempNewItem);
			for (let oldItem of this.items) {
				let tempOldItem: string | ListItem = Object.assign({}, oldItem);
				delete tempOldItem.selected;
				tempOldItem = JSON.stringify(tempOldItem);
				// do the compare
				if (tempOldItem.includes(tempNewItem)) {
					// oldItem = Object.assign(oldItem, newItem);
					oldItem.selected = newItem.selected;
				} else {
					oldItem.selected = false;
				}
			}
		}
	}

	/**
	 * Initalizes focus in the list, effectivly a wrapper for `getCurrentElement().focus()`
	 */
	initFocus() {
		this.getCurrentElement().focus();
	}

	// scrolling methods here
	checkScrollArrows() {
		const list = this.list.nativeElement;
		if (list.scrollTop === 0) {
			if (this.canScrollUp) {
				list.style.height = `${parseInt(list.style.height, 10) + 16}px`;
			}
			this.canScrollUp = false;
		} else if (list.scrollTop === list.scrollTopMax) {
			if (this.canScrollDown) {
				list.style.height = `${parseInt(list.style.height, 10) + 16}px`;
			}
			this.canScrollDown = false;
		} else {
			if (!this.canScrollUp) {
				list.style.height = `${parseInt(list.style.height, 10) - 16}px`;
			}
			if (!this.canScrollDown) {
				list.style.height = `${parseInt(list.style.height, 10) - 16}px`;
			}
			this.canScrollUp = true;
			this.canScrollDown = true;
		}
	}

	onWheel(event) {
		const list = this.list.nativeElement;
		if (event.deltaY < 0) {
			list.scrollTop -= 10;
		} else {
			list.scrollTop += 10;
		}
		// only prevent the parent/window from scrolling if we can scroll
		if (!(list.scrollTop === list.scrollTopMax || list.scrollTop === 0)) {
			event.preventDefault();
			event.stopPropagation();
		}
		this.checkScrollArrows();
	}

	onTouchStart(event) {
		if (event.touches[0]) {
			this.lastTouch = event.touches[0].clientY;
		}
	}

	onTouchMove(event) {
		event.preventDefault();
		event.stopPropagation();
		const list = this.list.nativeElement;
		if (event.touches[0]) {
			const touch = event.touches[0];
			list.scrollTop += this.lastTouch - touch.clientY;
			this.lastTouch = touch.clientY;
			this.checkScrollArrows();
		}
	}

	hoverScrollBy(hovering, amount) {
		const list = this.list.nativeElement;
		if (hovering) {
			this.hoverScrollInterval = setInterval(() => {
				list.scrollTop += amount;
				this.checkScrollArrows();
			}, 1);
		} else {
			clearInterval(this.hoverScrollInterval);
		}
	}

	onHoverUp(hovering) {
		this.hoverScrollBy(hovering, -dropdownConfig.hoverScrollSpeed);
	}

	onHoverDown(hovering) {
		this.hoverScrollBy(hovering, dropdownConfig.hoverScrollSpeed);
	}

	updateScrollHeight() {
		if (this.canScrollUp || this.canScrollDown) {
			const container = this.elementRef.nativeElement;
			const list = this.list.nativeElement;
			const containerRect = container.getBoundingClientRect();
			const innerHeightDiff = list.getBoundingClientRect().top - containerRect.top;
			const outerHeightDiff = containerRect.height - (containerRect.bottom - window.innerHeight);
			// 40 gives us some padding between the bottom of the list,
			// the bottom of the window, and the scroll down button
			const height = outerHeightDiff - innerHeightDiff - 40;
			list.style.height = `${height}px`;
		}
	}

	enableScroll() {
		this.canScrollUp = true;
		this.canScrollDown = true;
		const list = this.list.nativeElement;
		list.style.overflow = "hidden";
		this.updateScrollHeight();
		// we run the check twice, the first time to try and avoid flashing the arrows in/out of existence
		// and the second to make sure the arrows are hidden if they should be (due to how angular chage
		// detection/browser measurment works)
		this.checkScrollArrows();
		setTimeout(() => {
			this.checkScrollArrows();
		});
	}

	disableScroll() {
		this.canScrollUp = false;
		this.canScrollDown = false;
		const list = this.list.nativeElement;
		list.style.height = null;
		list.style.overflow = null;
		clearInterval(this.hoverScrollInterval);
	}

	clearSelection() {
		if (this.type === "single") {
			const selectedItem = this.items.find(item => item.selected);
			selectedItem.selected = false;
			this.select.emit({item: selectedItem});
		} else {
			for (const item of this.items) {
				item.selected = false;
			}
			this.select.emit([]);
		}
		// wait a tick to let changes take effect on the DOM
		setTimeout(() => {
			// to prevent arrows from being hidden
			this.updateScrollHeight();
		});
	}

	/**
	 * Manages the keyboard accessiblity for navigation and selection within a `DropdownList`.
	 * @param {any} event
	 * @param {any} item
	 * @memberof DropdownList
	 */
	doKeyDown(event: KeyboardEvent, item: ListItem) {
		if (event.key && (event.key === "Enter" || event.key === " ")) {
			event.preventDefault();
			this.doClick(event, item);
		} else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
			event.preventDefault();
			this.checkScrollArrows();
			if (event.key === "ArrowDown" && this.hasNextElement()) {
				this.getNextElement().focus();
			} else if (event.key === "ArrowUp") {
				if (this.hasPrevElement()) {
					this.getPrevElement().focus();
				} else if (this.getSelected()) {
					this.clearSelected.nativeElement.focus();
				}
			}
			if (event.shiftKey) {
				(event.target as HTMLElement).click();
			}
		}
	}

	onClearSelectionKeyDown(event: KeyboardEvent) {
		if (event.key === "ArrowDown") {
			event.preventDefault();
			this.listElementList[0].focus();
		}
	}

	/**
	 * Emits the selected item or items after a mouse click event has occurred.
	 * @param {any} event
	 * @param {any} item
	 * @memberof DropdownList
	 */
	doClick(event, item) {
		if (!item.disabled) {
			item.selected = !item.selected;
			if (this.type === "single") {
				// reset the selection
				for (let otherItem of this.items) {
					if (item !== otherItem) { otherItem.selected = false; }
				}

				this.select.emit({item});
			} else {
				// emit an array of selected items
				this.select.emit(this.getSelected());
			}
			this.index = this.items.indexOf(item);
			// wait a tick to let changes take effect on the DOM
			setTimeout(() => {
				// to prevent arrows from being hidden
				this.updateScrollHeight();
			});
		}
	}
}
