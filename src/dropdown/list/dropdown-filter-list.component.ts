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
import { DropdownList } from "./dropdown-list.component";

@Component({
	selector: "n-dropdown-filter",
	template: `
		<div class="menu_filter-options">
			<label
				class="checkbox"
				*ngIf="type === 'multi'">
				<input
					#selectedOnly
					type="checkbox"
					[attr.disabled]="disableSelectedOnly"
					(click)="filterItems()">
				<span class="checkbox_label">{{ 'DROPDOWN.FILTER.SELECTED_ONLY' | translate }}</span>
			</label>
			<label class="search_group">
				<svg
					aria-hidden="true"
					class="search_icon"
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
				<input
					#filter
					(keyup)="filterItems()"
					type="search"
					tabindex="0"
					(focus)="filterFocus = true"
					(blur)="filterFocus = (filter.value?true:false)"/>
				<button
					class="close"
					type="reset"
					aria-label="Reset search"
					[ngClass]="{
						visible: filter.value.trim()
					}"
					(click)="clearFilter()">
					<svg
						class="close_icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16">
						<polygon
							points="14.5,2.6 13.4,1.5 8,6.9 2.6,1.5
							1.5,2.6 6.9,8 1.5,13.4 2.6,14.5
							8,9.1 13.4,14.5 14.5,13.4 9.1,8"/>
					</svg>
				</button>
			</label>
		</div>
		<ul
			#list
			[ngClass]="{
				'listbox--sm': size === 'sm',
				'listbox': size === 'default',
				'listbox--lg': size === 'lg'
			}"
			role="listbox">
			<li tabindex="{{item.disabled?-1:0}}"
				role="option"
				*ngFor="let item of displayItems"
				(click)="doClick($event, item)"
				(keydown)="doKeyDown($event, item)"
				[ngClass]="{
					selected: item.selected,
					disabled: item.disabled
				}">
				<label
					[ngClass]="{
						'checkbox--sm': size === 'sm',
						'checkbox': size === 'default' || size === 'lg'
					}"
					*ngIf="type === 'multi'"
					style="margin: 0;">
					<input
						tabindex="-1"
						type="checkbox"
						[checked]="item.selected"
						(click)="doClick($event, item)">
					<label class="checkbox_label" style="margin: 0;"></label>
				</label>
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
		providers: [{provide: AbstractDropdownView, useExisting: DropdownFilter}]
}) // conceptually this extends list-group, but we dont have to
export class DropdownFilter extends DropdownList implements AbstractDropdownView, AfterViewInit, OnDestroy, OnChanges {
	@ViewChild("selectedOnly") selectedOnly;
	@ViewChild("list") list;
	@ViewChild("filter") filter;
	public size: "sm" | "default" | "lg" = "default";
	public filterNative;
	public selectedOnlyNative;
	public disableSelectedOnly = true;
	public displayItems: Array<ListItem> = [];
	public filterFocus = false;
	protected overrideKeydown = this._overrideKeydown.bind(this);

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
		this._elementRef.nativeElement.addEventListener("keydown", this.overrideKeydown);
	}

	ngOnDestroy() {
		this._elementRef.nativeElement.removeEventListener("keydown", this.overrideKeydown);
		if (this.focusJump) {
			this.focusJump.unsubscribe();
		}
	}

	// we've got to hijack a few key events so we don't close the dropdown early
	_overrideKeydown(ev) {
		if (ev.key === "Tab" && !this.list.nativeElement.contains(ev.target) && this.displayItems.length !== 0) {
			ev.stopPropagation();
		} else if (ev.key === "Tab" && ev.shiftKey && this.list.nativeElement.contains(ev.target)) {
			ev.stopPropagation();
			ev.preventDefault();
			this.filterNative.focus();
		} else if (ev.key === "Enter" || (ev.key === "ArrowDown" && !this.list.nativeElement.contains(ev.target))) {
			this.listList[0].focus();
		}
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
		this.filterFocus = false;
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
			}
			this.displayItems = this.getDisplayItems(this.items,
					this.filterNative.value,
					this.selectedOnlyNative.checked);
			this.select.emit(this.getSelected());
		}
		this.index = this.items.indexOf(item);
	}
}
