import {
	Component,
	Input,
	Output,
	EventEmitter,
	forwardRef,
	TemplateRef
} from "@angular/core";

import { findNextElem, findPrevElem } from "../utils/a11y";


/**
 * `listTpl` binds `item` to the template context
 *
 * `items` expects an array of objects where the objects follow the format:
 * ```javascript
 * {
 * 	content: "string",
 * 	selected: false,
 * 	disabled: false //optional
 * }
 * ```
 *
 * @export
 * @class ListGroup
 */
@Component({
	selector: "ibm-list-group",
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
	/**
	 * The list items belonging to the `ListGroup`.
	 * @type {Array<Object>}
	 * @memberof ListGroup
	 */
	@Input() items: Array<Object> = [];
	/**
	 * Template to bind to items in the `ListGroup` (optional).
	 * @type {(string | TemplateRef<any>)}
	 * @memberof ListGroup
	 */
	@Input() listTpl: string | TemplateRef<any> = null;
	/**
	 * Set to `true` for the `ListGroup` to have checkmark selection.
	 * @type {boolean}
	 * @memberof ListGroup
	 */
	@Input() checkMark: Boolean = true;
	/**
	 * Event to emit selection of a list item within the `ListGroup`.
	 * @type {EventEmitter<Object>}
	 * @memberof ListGroup
	 */
	@Output() selected: EventEmitter<Object> = new EventEmitter<Object>();

	/**
	 * Controls keyboard navigation and selection within the `ListGroup`.
	 * @param {any} ev
	 * @param {any} item
	 * @memberof ListGroup
	 */
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

	/**
	 * Selects the `item` parameter from the `ListGroup` if it is not disabled and emits the selection event.
	 * @param {any} ev
	 * @param {any} item
	 * @memberof ListGroup
	 */
	doClick(ev, item) {
		if (!item.disabled) {
			this.selected.emit({
				item
			});
		}
	}
}
