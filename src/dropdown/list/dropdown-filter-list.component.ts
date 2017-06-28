import {
	Component,
	Input,
	Output,
	EventEmitter,
	forwardRef,
	TemplateRef,
	AfterViewInit,
	ViewChild,
	ElementRef
} from "@angular/core";

import { findNextElem, findPrevElem } from "./../../common/a11y.service";
import { AbstractDropdownView } from "./../abstract-dropdown-view.class";
import { ListItem } from "./../list-item.interface";
import { ListView } from "./../../list-view/list-view.component";
import { watchFocusJump } from "./../dropdowntools";
import { DropdownList } from "./dropdown-list.component";

@Component({
	selector: "n-dropdown-filter",
	template: `
		<div
			*ngIf="type === 'multi'"
			class="dropdown-selected-only">
			<span class="checkbox" style="margin-bottom: 0px;">
				<label>
					<input
						#selectedOnly
						type="checkbox"
						[attr.disabled]="disableSelectedOnly"
						(click)="filterItems()">
					<span class="label">{{ 'DROPDOWN.FILTER.SELECTED_ONLY' | translate }}</span>
				</label>
			</span>
		</div>
		<div class="dropdown-filter-search size-md">
			<div class="search-icon">
				<svg
					class="icon"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 16 16">
					<g>
						<path
							d="M6,0C2.7,0,0,2.7,0,6s2.7,6,6,6s6-2.7,6-6S9.3,0,6,0z
							M6,11c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5
							S8.8,11,6,11z"/>
						<rect
							x="12"
							y="10.2"
							transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 31.4698 13.0355)"
							width="2"
							height="5.7"/>
					</g>
				</svg>
			</div>
			<input
				#filter
				(keyup)="filterItems()"
				type="text"
				class="input-field"
				tabindex="0"
				[ngClass]="{
					placeholder: !filter.value
				}"
				placeholder="{{ 'DROPDOWN.FILTER.SEARCH' | translate }}"/>
			<button
				class="search-cancel"
				type="button"
				aria-label="cancel"
				(click)="clearFilter()">
				<svg
					class="icon"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 16 16">
					<polygon
						points="14.5,2.6 13.4,1.5
						8,6.9 2.6,1.5
						1.5,2.6 6.9,8
						1.5,13.4
						2.6,14.5
						8,9.1
						13.4,14.5
						14.5,13.4
						9.1,8"/>
				</svg>
			</button>
		</div>
		<ul #list class="list" role="listbox">
			<li tabindex="{{item.disabled?-1:0}}"
				role="option"
				*ngFor="let item of displayItems"
				(click)="doClick($event, item)"
				(keydown)="doKeyDown($event, item)"
				[ngClass]="{
					selected: item.selected,
					disabled: item.disabled
				}"
				class="option">
				<span class="checkbox"
					*ngIf="type === 'multi'">
					<label>
						<input
							tabindex="-1"
							type="checkbox"
							[checked]="item.selected"
							(click)="doClick($event, item)">
						<span class="label"></span>
					</label>
				</span>
				<span *ngIf="!listTpl">{{item.content}}</span>
				<ng-template
					*ngIf="listTpl"
					[ngOutletContext]="{item: item}"
					[ngTemplateOutlet]="listTpl">
				</ng-template>
			</li>
			<li
				class="no-results"
				*ngIf="displayItems.length === 0">
				<span>{{ 'DROPDOWN.FILTER.NO_RESULTS' | translate }}</span>
			</li>
		</ul>`,
		providers: [{provide: AbstractDropdownView, useExisting: forwardRef(() => DropdownFilter)}]
}) // conceptually this extends list-view, but we dont have to
export class DropdownFilter extends DropdownList implements AbstractDropdownView, AfterViewInit {
	@ViewChild("selectedOnly") selectedOnly;
	@ViewChild("list") list;
	@ViewChild("filter") filter;
	public size: "sm" | "default" | "lg" = "default";
	public filterNative;
	public selectedOnlyNative;
	public disableSelectedOnly = true;
	public displayItems: Array<ListItem> = [];

	constructor(public _elementRef: ElementRef) {
		super(_elementRef);
	}

	ngOnChanges(changes) {
		if (changes.items) {
			this.items = changes.items.currentValue.map(item => Object.assign({}, item));
			this.displayItems = this.items;
			// the rest of this depends on the view being instantiated ...
			if (!this.filterNative) { return; }
			// reset everything
			if (this.type === "multi") {
				this.selectedOnlyNative.checked = null;
				this.disableSelectedOnly = true;
			}
			this.filterNative.value = "";
			setTimeout(() => {
				this.listList = Array.from(this.list.nativeElement.querySelectorAll("li")) as HTMLElement[];
			}, 0);
			this.index = this.items.findIndex(item => item.selected);
			this.setupFocusObservable();
		}
	}

	ngAfterViewInit() {
		this.listList = Array.from(this.list.nativeElement.querySelectorAll("li")) as HTMLElement[];
		this.index = this.items.findIndex(item => item.selected);
		this.setupFocusObservable();
		// just makes dealing with the nativeElement slightly less verbose
		this.filterNative = this.filter.nativeElement;
		this.selectedOnlyNative = this.selectedOnly ? this.selectedOnly.nativeElement : null;
		// we've got to highjack a few key events so we don't close the dropdown early
		this._elementRef.nativeElement.addEventListener("keydown", (ev) => {
			if (ev.key === "Tab" && !this.list.nativeElement.contains(ev.target) && this.displayItems.length !== 0) {
				ev.stopPropagation();
			} else if (ev.key === "Tab" && ev.shiftKey && this.list.nativeElement.contains(ev.target)) {
				ev.stopPropagation();
				ev.preventDefault();
				this.filterNative.focus();
			} else if (ev.key === "Enter" || (ev.key === "ArrowDown" && !this.list.nativeElement.contains(ev.target))) {
				this.listList[0].focus();
			}
		});
	}

	getDisplayItems(items: ListItem[], query = "", selectedOnly = false): ListItem[] {
		if (selectedOnly) {
			return items.filter(item => item.content.toLowerCase().includes(query.toLowerCase()) && item.selected);
		} else if (query) {
			return items.filter(item => item.content.toLowerCase().includes(query.toLowerCase()));
		}
		return items;
	}

	filterItems() {
		let selected = this.type === "multi" ? this.selectedOnlyNative.checked : false;
		this.displayItems = this.getDisplayItems(this.items, this.filterNative.value, selected);
		// we still want to jump, so we just have to reset this
		// wait a tick to let the view update
		setTimeout(() => this.setupFocusObservable());
	}

	clearFilter() {
		this.filter.nativeElement.value = "";
		this.displayItems = this.items;
		// wait a tick to let the view update
		setTimeout(() => this.setupFocusObservable());
	}

	doClick(ev, item) {
		item.selected = !item.selected;
		if (this.type === "single") {
			// reset the selection
			for (let otherItem of this.items) {
				if (item !== otherItem) { otherItem.selected = false; }
			}
			this.displayItems = this.getDisplayItems(this.items, this.filterNative.value);
			if (!item.disabled) {
				this.select.emit({item});
			}
		} else {
			if (this.getSelected()) {
				this.disableSelectedOnly = null;
			} else {
				this.disableSelectedOnly = true;
				this.selectedOnlyNative.checked = false;
				this.displayItems = this.getDisplayItems(this.items,
					this.filterNative.value,
					this.selectedOnlyNative.checked);
			}
			this.select.emit(this.getSelected());
		}
		this.index = this.items.indexOf(item);
	}
}
