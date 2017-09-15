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

@Component({
	selector: "n-dropdown-list",
	template: `
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
				<label
					style="margin: 0;"
					[ngClass]="{
						'checkbox': size === 'default',
						'checkbox--sm': size === 'sm'
					}"
					*ngIf="type === 'multi'">
					<input
						tabindex="-1"
						type="checkbox"
						[checked]="item.selected"
						(click)="doClick($event, item)">
					<span class="checkbox_label"></span>
				</label>
				<span *ngIf="!listTpl">{{item.content}}</span>
				<ng-template
					*ngIf="listTpl"
					[ngOutletContext]="{item: item}"
					[ngTemplateOutlet]="listTpl">
				</ng-template>
			</li>
		</ul>`,
		providers: [{provide: AbstractDropdownView, useExisting: forwardRef(() => DropdownList)}]
}) // conceptually this extends list-view, but we dont have to
export class DropdownList implements AbstractDropdownView, AfterViewInit {
	@Input() items: Array<ListItem> = [];
	@Input() listTpl: string | TemplateRef<any> = null;
	@Output() select: EventEmitter<Object> = new EventEmitter<Object>();
	@ViewChild("list") list: ElementRef;
	@Input() type: "single" | "multi" = "single";
	public size: "sm" | "default" | "lg" = "default";
	public displayItems: Array<ListItem> = [];
	protected index = -1;
	protected listList: HTMLElement[];
	protected focusJump;

	constructor(public _elementRef: ElementRef) {}

	ngOnChanges(changes) {
		if (changes.items) {
			this.updateList(changes.items.currentValue);
		}
	}

	ngAfterViewInit() {
		this.listList = Array.from(this.list.nativeElement.querySelectorAll("li")) as HTMLElement[];
		this.index = this.items.findIndex(item => item.selected);
		this.setupFocusObservable();
	}

	ngOnDestroy() {
		if (this.focusJump) {
			this.focusJump.unsubscribe();
		}
	}

	updateList(items) {
		this.items = items.map(item => Object.assign({}, item));
		this.displayItems = this.items;
		setTimeout(() => {
			this.listList = Array.from(this.list.nativeElement.querySelectorAll("li")) as HTMLElement[];
		}, 0);
		this.index = this.items.findIndex(item => item.selected);
		this.setupFocusObservable();
	}

	filterBy(query = "") {
		if (query) {
			this.displayItems = this.items.filter(item => item.content.toLowerCase().includes(query.toLowerCase()));
		} else {
			this.displayItems = this.items;
		}
	}

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

	getNextItem(): ListItem {
		if (this.index < this.items.length - 1) {
			this.index++;
		}
		return this.items[this.index];
	}

	hasNextElement(): boolean {
		if (this.index < this.items.length - 1) {
			return true;
		}
		return false;
	}

	getNextElement(): HTMLElement {
		if (this.index < this.items.length - 1) {
			this.index++;
		}
		let elem = this.listList[this.index];
		let item = this.items[this.index];
		if (item.disabled) {
			return this.getNextElement();
		}
		return elem;
	}

	getPrevItem(): ListItem {
		if (this.index > 0) {
			this.index--;
		}
		return this.items[this.index];
	}

	hasPrevElement(): boolean {
		if (this.index >= 0) {
			return true;
		}
		return false;
	}

	getPrevElement(): HTMLElement {
		if (this.index > 0) {
			this.index--;
		}
		let elem = this.listList[this.index];
		let item = this.items[this.index];
		if (item.disabled) {
			return this.getPrevElement();
		}
		return elem;
	}

	getCurrentItem() {
		if (this.index < 0) {
			return this.items[0];
		}
		return this.items[this.index];
	}

	getCurrentElement(): HTMLElement {
		if (this.index < 0) {
			return this.listList[0];
		}
		return this.listList[this.index];
	}

	getSelected(): ListItem[] {
		let selected = this.items.filter(item => item.selected);
		if (selected.length === 0) {
			return null;
		}
		return selected;
	}

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

	doKeyDown(ev, item) {
		if (ev.key && (ev.key === "Enter" || ev.key === " ")) {
			ev.preventDefault();
			this.doClick(ev, item);
		} else if (ev.key === "ArrowDown" || ev.key === "ArrowUp") {
			ev.preventDefault();
			// if (ev.key === "ArrowDown" && findNextElem(ev.target)) {
			// 	findNextElem(ev.target).focus();
			// } else if (ev.key === "ArrowUp" && findPrevElem(ev.target)) {
			// 	findPrevElem(ev.target).focus();
			// }
			if (ev.key === "ArrowDown" && this.hasNextElement()) {
				this.getNextElement().focus();
			} else if (ev.key === "ArrowUp" && this.hasPrevElement()) {
				this.getPrevElement().focus();
			}
			if (ev.shiftKey) {
				ev.target.click();
			}
		}
	}

	doClick(ev, item) {
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
}
