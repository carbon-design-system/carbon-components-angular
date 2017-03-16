import {
	Component,
	Input,
	Output,
	EventEmitter,
	ElementRef,
	TemplateRef
} from "@angular/core";
import { SubMenuView } from "./sub-menu-view.component";
import { KeyCodes } from "../constant/keys";
import { focusNextTree, focusNextElem, focusPrevElem } from "../common/a11y.service";

@Component({
	selector: "cdl-sub-menu-view-item",
	template: `
		<div class="sub-menu-item-wrapper"
			tabindex="{{listItem.disabled?-1:0}}"
			[ngClass]="{
				selected: listItem.selected,
				disabled: listItem.disabled
			}"
			(click)="doClick(listItem)"
			(keydown)="onKeyDown($event, listItem)"
			role="treeitem"
			[attr.aria-level]="indent"
			[attr.aria-hidden]="listItem.disabled"
			[attr.aria-expanded]="(!!listItem.subMenu) ? ((listItem.selected) ? true : false) : null"
			[attr.aria-selected]="listItem.selected"
			>
			<div class="sub-menu-item">
				<svg
					*ngIf="!!listItem.subMenu"
					class="arrow"
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 16 16">
					<path class="st0" d="M4 14.7l6.6-6.6L4 1.6l.8-.9 7.5 7.4-7.5 7.5z"/>
				</svg>
				<span *ngIf="!listTpl">{{listItem.content}}</span>
				<template
					*ngIf="isTpl"
					[ngOutletContext]="{item: listItem}"
					[ngTemplateOutlet]="listTpl">
				</template>
				<span
					*ngIf="selectedIcon && listItem.selected && !listItem.subMenu"
					class="checked" aria-hidden="true">
				</span>
			</div>
		</div>
		<cdl-sub-menu-view
			*ngIf="!!listItem.subMenu"
			[isOpen]="listItem.selected"
			[items]="listItem.subMenu"
			(select)="onClick($event)"
			[listTpl]="listTpl"
			[rootElem]="rootElem"
			[selectedIcon]="selectedIcon"
			[role]="'group'"
			[parent]="parent">
		</cdl-sub-menu-view>
	`
})
export class SubMenuViewItem {
	private parent;
	private isTpl: boolean = false;

	@Input() hasSubMenu: boolean = false;
	@Input() parentRef = null;
	@Input() listItem: any;
	@Input() listTpl: string | TemplateRef<any> = "";
	@Input() rootElem = null;
	@Input() selectedIcon: boolean = true;

	@Output() select: EventEmitter<Object> = new EventEmitter<Object>();

	constructor(private _elementRef: ElementRef) {}

	ngOnInit() {
		this.parent = this._elementRef.nativeElement;

		if (!this.rootElem) {
			this.rootElem = this._elementRef.nativeElement.parentNode;
		}

		this.isTpl = this.listTpl instanceof TemplateRef;
	}

	onClick(evt) {
		let item = evt.item;
		this.select.emit({
			item
		});
	}

	doClick(item) {
		this.select.emit({
			item
		});
	}

	// Keyboard accessibility
	onKeyDown(ev, item) {
		if (ev.keyCode === KeyCodes.UP_ARROW) {
			ev.preventDefault();

			focusPrevElem(this._elementRef.nativeElement.parentNode, this.parentRef);
		} else if (ev.keyCode === KeyCodes.DOWN_ARROW) {
			ev.preventDefault();

			if (!item.subMenu || !item.selected) {
				focusNextElem(this._elementRef.nativeElement.parentNode, this.rootElem);
			} else if (item.subMenu && item.selected) {
				focusNextTree(this._elementRef.nativeElement.querySelector("ul li"), this.rootElem);
			}
		} else if (ev.keyCode === KeyCodes.ENTER_KEY || ev.keyCode === KeyCodes.SPACE_BAR
					|| ev.keyCode === KeyCodes.RIGHT_ARROW || ev.keyCode === KeyCodes.LEFT_ARROW) {
			ev.preventDefault();

			this.select.emit({
				item
			});
		}
	}
}
