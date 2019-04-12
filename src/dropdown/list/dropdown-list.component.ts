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

import { I18n } from "../../i18n/i18n.module";
import { AbstractDropdownView } from "./../abstract-dropdown-view.class";
import { ListItem } from "./../list-item.interface";
import { watchFocusJump } from "./../dropdowntools";
import { ScrollableList } from "./../scrollable-list.directive";


/**
 * ```html
 * <ibm-dropdown-list [items]="listItems"></ibm-dropdown-list>
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
 */
@Component({
	selector: "ibm-dropdown-list",
	template: `
		<ul
			#list
			role="listbox"
			class="bx--list-box__menu"
			[attr.aria-label]="ariaLabel">
			<li tabindex="-1"
				role="option"
				*ngFor="let item of displayItems; let i = index"
				(click)="doClick($event, item)"
				(keydown)="doKeyDown($event, item)"
				(focus)="onItemFocus(i)"
				(blur)="onItemBlur(i)"
				class="bx--list-box__menu-item"
				[ngClass]="{
					selected: item.selected,
					disabled: item.disabled
				}">
				<div
					*ngIf="!listTpl && type === 'multi'"
					class="bx--form-item">
					<input
						class="bx--checkbox"
						type="checkbox"
						[checked]="item.selected"
						[disabled]="item.disabled"
						(click)="doClick($event, item)"
						tabindex="-1">
						<label class="bx--checkbox-label">
							<span>{{item.content}}</span>
						</label>
				</div>
				<ng-container *ngIf="!listTpl && type === 'single'">{{item.content}}</ng-container>
				<ng-template
					*ngIf="listTpl"
					[ngTemplateOutletContext]="{$implicit: item}"
					[ngTemplateOutlet]="listTpl">
				</ng-template>
			</li>
		</ul>`,
	providers: [
		{
			provide: AbstractDropdownView,
			useExisting: DropdownList
		}
	]
}) // conceptually this extends list-group, but we dont have to
export class DropdownList implements AbstractDropdownView, AfterViewInit, OnChanges, OnDestroy {
	@Input() ariaLabel = this.i18n.get().DROPDOWN_LIST.LABEL;
	/**
	 * The list items belonging to the `DropdownList`.
	 */
	@Input() items: Array<ListItem> = [];
	/**
	 * Template to bind to items in the `DropdownList` (optional).
	 */
	@Input() listTpl: string | TemplateRef<any> = null;
	/**
	 * Event to emit selection of a list item within the `DropdownList`.
	 */
	@Output() select: EventEmitter<Object> = new EventEmitter<Object>();
	/**
	 * Maintains a reference to the view DOM element for the unordered list of items within the `DropdownList`.
	 */
	@ViewChild("list") list: ElementRef;
	/**
	 * Keeps a reference to the "clear selection" element
	 */
	@ViewChild("clearSelected") clearSelected: ElementRef;
	/**
	 * Defines whether or not the `DropdownList` supports selecting multiple items as opposed to single
	 * item selection.
	 */
	@Input() type: "single" | "multi" = "single";
	/**
	 * Defines the rendering size of the `DropdownList` input component.
	 */
	public size: "sm" | "md" | "lg" = "md";
	/**
	 * Holds the list of items that will be displayed in the `DropdownList`.
	 * It differs from the the complete set of items when filtering is used (but
	 * it is always a subset of the total items in `DropdownList`).
	 */
	public displayItems: Array<ListItem> = [];
	/**
	 * Maintains the index for the selected item within the `DropdownList`.
	 */
	protected index = -1;
	/**
	 * An array holding the HTML list elements in the view.
	 */
	protected listElementList: HTMLElement[];
	/**
	 * Observable bound to keydown events to control filtering.
	 */
	protected focusJump;

	/**
	 * Creates an instance of `DropdownList`.
	 */
	constructor(public elementRef: ElementRef, protected i18n: I18n) {}

	/**
	 * Updates list when changes occur within the items belonging to the `DropdownList`.
	 */
	ngOnChanges(changes) {
		if (changes.items) {
			this.updateList(changes.items.currentValue);
		}
	}

	/**
	 * Retrieves array of list items and index of the selected item after view has rendered.
	 * Additionally, any Observables for the `DropdownList` are initialized.
	 */
	ngAfterViewInit() {
		this.listElementList = Array.from(this.list.nativeElement.querySelectorAll("li")) as HTMLElement[];
		this.index = this.items.findIndex(item => item.selected);
		this.setupFocusObservable();
	}

	/**
	 * Removes any Observables on destruction of the component.
	 */
	ngOnDestroy() {
		if (this.focusJump) {
			this.focusJump.unsubscribe();
		}
	}

	/**
	 * Updates the displayed list of items and then retrieves the most current properties for the `DropdownList` from the DOM.
	 */
	updateList(items) {
		this.items = items.map(item => Object.assign({}, item));
		this.displayItems = this.items;
		setTimeout(() => {
			this.listElementList = Array.from(this.list.nativeElement.querySelectorAll("li")) as HTMLElement[];
		}, 0);
		this.index = this.items.findIndex(item => item.selected);
		this.setupFocusObservable();
		setTimeout(() => {
			if (this.type === "single") {
				this.select.emit({ item: this.items.find(item => item.selected) });
			} else {
				this.select.emit(this.getSelected() || []);
			}
		});
	}

	/**
	 * Filters the items being displayed in the DOM list.
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
	 */
	getNextItem(): ListItem {
		if (this.index < this.items.length - 1) {
			this.index++;
		}
		return this.items[this.index];
	}

	/**
	 * Returns `true` if the selected item is not the last item in the `DropdownList`.
	 */
	hasNextElement(): boolean {
		if (this.index < this.items.length - 1) {
			return true;
		}
		return false;
	}

	/**
	 * Returns the `HTMLElement` for the item that is subsequent to the selected item.
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
	 */
	getPrevItem(): ListItem {
		if (this.index > 0) {
			this.index--;
		}
		return this.items[this.index];
	}

	/**
	 * Returns `true` if the selected item is not the first in the list.
	 */
	hasPrevElement(): boolean {
		if (this.index > 0) {
			return true;
		}
		return false;
	}

	/**
	 * Returns the `HTMLElement` for the item that precedes the selected item.
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
	 */
	getCurrentItem(): ListItem {
		if (this.index < 0) {
			return this.items[0];
		}
		return this.items[this.index];
	}

	/**
	 * Returns the `HTMLElement` for the item that is selected within the `DropdownList`.
	 */
	getCurrentElement(): HTMLElement {
		if (this.index < 0) {
			return this.listElementList[0];
		}
		return this.listElementList[this.index];
	}

	/**
	 * Returns a list containing the selected item(s) in the `DropdownList`.
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

	/**
	 * Manages the keyboard accessiblity for navigation and selection within a `DropdownList`.
	 */
	doKeyDown(event: KeyboardEvent, item: ListItem) {
		// "Spacebar", "Down", and "Up" are IE specific values
		if (event.key === "Enter" || event.key === " " || event.key === "Spacebar") {
			event.preventDefault();
			if (event.key === "Enter") {
				this.doClick(event, item);
			}
		} else if (event.key === "ArrowDown" || event.key === "ArrowUp" || event.key === "Down" || event.key === "Up") {
			event.preventDefault();
			// this.checkScrollArrows();
			if ((event.key === "ArrowDown" || event.key === "Down") && this.hasNextElement()) {
				this.getNextElement().focus();
			} else if (event.key === "ArrowUp" || event.key === "Up") {
				if (this.hasPrevElement()) {
					this.getPrevElement().focus();
				} else if (this.getSelected()) {
					this.clearSelected.nativeElement.focus();
				}
			}
		}
	}

	/**
	 * Emits the selected item or items after a mouse click event has occurred.
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
		}
	}

	onItemFocus(index) {
		this.listElementList[index].classList.add("bx--list-box__menu-item--highlighted");
		this.listElementList[index].tabIndex = 0;
	}

	onItemBlur(index) {
		this.listElementList[index].classList.remove("bx--list-box__menu-item--highlighted");
		this.listElementList[index].tabIndex = -1;
	}

	resetSelected() {
		this.items = this.items.map((item) => {
			return Object.assign(item, {selected: false});
		});
	}
}
