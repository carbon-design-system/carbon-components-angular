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

import { KeyCodes } from "./../../constant/keys";
import { findNextElem, findPrevElem } from "./../../common/a11y.service";
import { AbstractDropdownView } from "./../abstract-dropdown-view.class";
import { ListItem } from "./../list-item.interface";
import { ListView } from "./../../list-view/list-view.component";

@Component({
	selector: "cdl-dropdown-list",
	template: `
		<ul #list class="list" role="listbox">
			<li tabindex="{{item.disabled?-1:0}}"
				role="option"
				*ngFor="let item of items"
				(click)="doClick($event, item)"
				(keydown)="doKeyDown($event, item)"
				[ngClass]="{
					selected: item.selected,
					disabled: item.disabled
				}"
				class="option">
				<span 
					class="checkbox" 
					*ngIf="type === 'multi'">
					<label>
						<input 
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
		</ul>`,
		providers: [{provide: AbstractDropdownView, useExisting: forwardRef(() => DropdownList)}]
}) // conceptually this extends list-view, but we dont have to
export class DropdownList implements AbstractDropdownView, AfterViewInit {
	@Input() items: Array<ListItem> = [];
	@Input() listTpl: string | TemplateRef<any> = null;
	@Output() select: EventEmitter<Object> = new EventEmitter<Object>();
	@ViewChild("list") list: ElementRef;
	public type: "single" | "multi" = "single";
	private index = -1;
	private listList: HTMLElement[];

	ngOnChanges(changes) {
		if (changes.items) {
			this.items = changes.items.currentValue.map(item => Object.assign({}, item));
		}
	}

	ngAfterViewInit() {
		this.listList = this.list.nativeElement.querySelectorAll("li");
		this.index = this.items.findIndex(item => item.selected);
	}

	getNextItem(): ListItem {
		if (this.index < this.items.length - 1) {
			this.index++;
		}
		let item = this.items[this.index];
		return item;
	}

	getNextElement(): HTMLElement {
		if (this.index < this.items.length - 1) {
			this.index++;
		} else {
			return null;
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
		let item = this.items[this.index];
		return item;
	}

	getPrevElement(): HTMLElement {
		if (this.index > 0) {
			this.index--;
		} else {
			return null;
		}
		let elem = this.listList[this.index];
		let item = this.items[this.index];
		if (item.disabled) {
			return this.getPrevElement();
		}
		return elem;
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
		if (ev.which && (ev.which === KeyCodes.ENTER_KEY || ev.which === KeyCodes.SPACE_BAR)) {
			ev.preventDefault();
			this.doClick(ev, item);
		} else if (ev.which === KeyCodes.DOWN_ARROW || ev.which === KeyCodes.UP_ARROW) {
			ev.preventDefault();
			if (ev.which === KeyCodes.DOWN_ARROW && findNextElem(ev.target)) {
				findNextElem(ev.target).focus();
			} else if (ev.which === KeyCodes.UP_ARROW && findPrevElem(ev.target)) {
				findPrevElem(ev.target).focus();
			}
			if (ev.shiftKey) {
				ev.target.click();
			}
		}
	}

	doClick(ev, item) {
		item.selected = !item.selected;
		if (this.type === "single") {
			// reset the selection
			for (let otherItem of this.items) {
				if (item !== otherItem) { otherItem.selected = false; }
			}
		}
		this.index = this.items.indexOf(item);
		if (!item.disabled) {
			this.select.emit({item});
		}
	}
}
