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
				<span *ngIf="!listTpl">{{item.content}}</span>
				<template
					*ngIf="listTpl"
					[ngOutletContext]="{item: item}"
					[ngTemplateOutlet]="listTpl">
				</template>
				<span
					*ngIf="checkMark && item.selected"
					class="selected-check">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 16 16">
							<path
								d="M8 1.2c3.7 0 6.8 3.1 6.8 6.8s-3.1 6.8-6.8 6.8S1.2 11.7 1.2 8 4.3 1.2 8 1.2M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z"/>
							<path d="M6.7 9.6L4.6 7.5l-.9.9 3 3 5.6-5.5-.9-.9z"/>
						</svg>
				</span>
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
