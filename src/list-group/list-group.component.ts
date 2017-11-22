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
	selector: "n-list-group",
	template: `
		<ul
		#listGroup
		class="list-group"
		role="listbox"
		[attr.aria-multiselectable]="checkMark ? true : false">
			<li
			*ngFor="let item of items"
			(click)="doClick($event, item)"
			(keydown)="doKeyDown($event, item)"
			[tabindex]="item.disabled ? -1 : 0"
			role="option"
			[attr.aria-selected]="item.selected ? true : false"
			[attr.aria-disabled]="item.disabled ? 'true' : null">
				<ng-container *ngIf="!listTpl">{{item.content}}</ng-container>
				<ng-template
					*ngIf="listTpl"
					[ngTemplateOutletContext]="{item: item}"
					[ngTemplateOutlet]="listTpl">
				</ng-template>
				</li>
		</ul>
		`,
})
export class ListGroup {
	@Input() items: Array<Object> = [];
	@Input() listTpl: string | TemplateRef<any> = null;
	@Input() checkMark: Boolean = true;
	@Output() selected: EventEmitter<Object> = new EventEmitter<Object>();

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
			this.selected.emit({
				item
			});
		}
	}
}
