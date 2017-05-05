import {
	Component,
	Input,
	Output,
	EventEmitter,
	forwardRef,
	TemplateRef
} from "@angular/core";

import { findNextElem, findPrevElem } from "../common/a11y.service";

@Component({
	selector: "cdl-list-view",
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
})
export class ListView {
	@Input() items: Array<Object> = [];
	@Input() listTpl: string | TemplateRef<any> = null;
	@Input() checkMark: Boolean = true;
	@Output() select: EventEmitter<Object> = new EventEmitter<Object>();

	doKeyDown(ev, item) {
		if (ev.key && (ev.key === "Enter" || ev.key === " ")) {
			ev.preventDefault();
			this.doClick(ev, item);
		} else if (ev.key === "ArrowDown" || ev.key === "ArrowUp") {
			if (ev.key === "ArrowDown" && findNextElem(ev.target)) {
				ev.preventDefault();
				findNextElem(ev.target).focus();
			} else if (ev.key === "ArrowUp" && findPrevElem(ev.target)) {
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
			this.select.emit({
				item
			});
		}
	}
}
