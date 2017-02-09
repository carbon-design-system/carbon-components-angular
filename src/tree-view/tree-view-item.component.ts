import {
	Component,
	Input,
	Output,
	EventEmitter,
	ElementRef,
	TemplateRef
} from "@angular/core";
import { TreeView } from "./tree-view.component";
import { KeyCodes } from "../constant/keys";
import { focusNextTree, focusNextElem, focusPrevElem } from "../common/a11y.service";

@Component({
	selector: "cdl-tree-view-item",
	template: `
	<li>
		<div
			class="item-wrapper"
			tabindex="{{listItem.disabled?-1:0}}"
			[ngClass]="{
				selected: listItem.selected,
				disabled: listItem.disabled
			}"
			(click)="doClick(listItem)"
			(keydown)="onKeyDown($event, listItem)">
			<div
				class="item"
				[style.margin-left.px]="40*indent">
				<svg
					*ngIf="!!listItem.subMenu"
					id="Layer_1" class="arrow"
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
					class="selected-check">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 16 16">
							<path d="M8 1.2c3.7 0 6.8 3.1 6.8 6.8s-3.1 6.8-6.8
							6.8S1.2 11.7 1.2 8 4.3 1.2 8 1.2M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z"/>
							<path d="M6.7 9.6L4.6 7.5l-.9.9 3 3 5.6-5.5-.9-.9z"/>
					</svg>
				</span>
			</div>
		</div>
		<cdl-tree-view
			*ngIf="!!listItem.subMenu"
			[isOpen]="listItem.selected"
			[items]="listItem.subMenu"
			(select)="onClick($event)"
			[listTpl]="listTpl"
			[parent]="parent"
			[selectedIcon]="selectedIcon"
			[rootElem]="rootElem"
			[indent]="indent+1">
		</cdl-tree-view>
	</li>
	`
})
export class TreeViewItem {
	private parent;
	private isTpl: boolean = false;

	@Input() hasSubMenu: boolean = false;
	@Input() parentRef = null;
	@Input() listItem: Object;
	@Input() listTpl: string | TemplateRef<any> = "";
	@Input() indent: number = 1;
	@Input() rootElem = null;
	@Input() selectedIcon: boolean = true;

	@Output() select: EventEmitter<Object> = new EventEmitter<Object>();

	constructor(private _elementRef: ElementRef) {}

	ngOnInit() {
		this.parent = this._elementRef.nativeElement;

		if (!this.rootElem) {
			this.rootElem = this._elementRef.nativeElement;
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

			focusPrevElem(this._elementRef.nativeElement, this.parentRef);
		} else if (ev.keyCode === KeyCodes.DOWN_ARROW) {
			ev.preventDefault();

			if (!item.subMenu || !item.selected) {
				focusNextElem(this._elementRef.nativeElement, this.rootElem);
			} else if (item.subMenu && item.selected) {
				focusNextTree(this._elementRef.nativeElement.querySelector("ul cdl-tree-view-item"), this.rootElem);
			}
		} else if (ev.keyCode === KeyCodes.ENTER_KEY || ev.keyCode === KeyCodes.SPACE_BAR) {
			ev.preventDefault();

			this.select.emit({
				item
			});
		}
	}
}
