import {
	Component,
	Input,
	Output,
	EventEmitter,
	forwardRef,
	TemplateRef
} from "@angular/core";

import { KeyCodes } from "../constant/keys";
import { View } from "../common/view.class";
import { findNextElem, findPrevElem } from "../common/a11y.service";

@Component({
	selector: "cdl-list-view",
	template: `
		<ul class="list-view">
			<li tabindex="{{item.disabled?-1:0}}"
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
		providers: [{provide: View, useExisting: forwardRef(() => ListView)}]
})
export class ListView implements View {
	@Input() items: Array<Object> = [];
	@Input() listTpl: string | TemplateRef<any> = null;
	@Input() checkMark: Boolean = true;
	@Output() select: EventEmitter<Object> = new EventEmitter<Object>();

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
			this.select.emit({
				item
			});
		}
	}
}
