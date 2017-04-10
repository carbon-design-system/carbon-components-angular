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
import { AbstractDropdownView } from "./../AbstractDropdownView.class";
import { ListView } from "./../../list-view/list-view.component";

interface ListItem {
	content: string;
	disabled: boolean;
	selected: boolean;
}

@Component({
	selector: "cdl-dropdown-list",
	template: `
		<ul #listView class="list-view">
			<li tabindex="{{item.disabled?-1:0}}"
				[attr.role]="listView.attributes.role?'option':null"
				*ngFor="let item of items"
				(click)="doClick($event, item)"
				(keydown)="doKeyDown($event, item)"
				[ngClass]="{
					selected: item.selected,
					disabled: item.disabled
				}">
				<span
					*ngIf="checkMark && item.selected"
					class="checked" aria-hidden="true">
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
	@Input() checkMark: Boolean = false;
	@Output() select: EventEmitter<Object> = new EventEmitter<Object>();
	@ViewChild("listView") list: ElementRef;
	private index = -1;
	private currentElement: HTMLElement;
	private listList: HTMLElement[];

	ngAfterViewInit() {
		this.listList = this.list.nativeElement.querySelectorAll("li");
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
		return this.items.filter(item => item.selected);
	}

	doKeyDown(ev, item) {
		if (ev.which && (ev.which === KeyCodes.ENTER_KEY || ev.which === KeyCodes.SPACE_BAR)) {
			ev.preventDefault();
			this.doClick(ev, item);
		} else if (ev.which === KeyCodes.DOWN_ARROW || ev.which === KeyCodes.UP_ARROW) {
			if (ev.which === KeyCodes.DOWN_ARROW && findNextElem(ev.target)) {
				ev.preventDefault();
				findNextElem(ev.target).focus();
			} else if (ev.which === KeyCodes.UP_ARROW && findPrevElem(ev.target)) {
				ev.preventDefault();
				findPrevElem(ev.target).focus();
			}
			if (ev.shiftKey) {
				ev.target.click();
			}
		}
	}

	doClick(ev, item) {
		if (!item.disabled) {
			this.select.emit({item});
		}
	}
}
