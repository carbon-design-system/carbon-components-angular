import {
	Component,
	Input,
	Output,
	EventEmitter,
	ElementRef,
	TemplateRef,
	ViewChild
} from "@angular/core";
import { focusNextTree, focusNextElem, focusPrevElem, findNextElem } from "../common/a11y.service";

@Component({
	selector: "cdl-tree-view-item",
	template: `
		<div
			class="item-wrapper item-level-{{indent}}"
			tabindex="{{listItem.disabled?-1:0}}"
			[ngClass]="{
				selected: selected,
				opened: listItem.opened,
				disabled: listItem.disabled,
				'has-items': listItem.items
			}"
			(click)="doClick($event, listItem)"
			(keydown)="onKeyDown($event, listItem)"
			role="treeitem"
			[attr.aria-level]="indent"
			[attr.aria-hidden]="listItem.disabled"
			[attr.aria-expanded]="listItem.items ? (listItem.opened ? true : false) : null"
			[attr.aria-selected]="selected">
			<div
				class="item"
				[style.margin-left.px]="calculateIndent()">
				<svg
					*ngIf="listItem.items"
					class="arrow icon"
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 16 16">
					<path d="M4 14.7l6.6-6.6L4 1.6l.8-.9 7.5 7.4-7.5 7.5z"/>
				</svg>
				<span *ngIf="!listTpl">{{listItem.content}}</span>
				<ng-template
					*ngIf="isTpl"
					[ngOutletContext]="{item: listItem}"
					[ngTemplateOutlet]="listTpl">
				</ng-template>
			</div>
		</div>
		<cdl-tree-view-wrapper
			*ngIf="listItem.items && listItem.opened"
			[isOpen]="listItem.opened"
			[items]="listItem.items"
			(select)="bubble($event)"
			[listTpl]="listTpl"
			[parent]="parent"
			[rootElem]="rootElem"
			[indent]="indent+1"
			[role]="'group'"
			[label]="listItem">
		</cdl-tree-view-wrapper>
	`
})
export class TreeViewItem {
	public parent;
	public isTpl = false;

	@Input() hasSubMenu = false;
	@Input() parentRef = null;
	@Input() listItem;
	@Input() listTpl: string | TemplateRef<any> = "";
	@Input() indent = 0;
	@Input() rootElem = null;
	@Input() selected = false;
	@Input() isBase = false;
	@Input() outerPadding = 20; // padding from left edge
	@Input() iconWidth = 16;
	@Input() innerPadding = 5; // padding between icon and content
	@Output() select: EventEmitter<Object> = new EventEmitter<Object>();

	// @ViewChild("checkbox") checkbox;

	constructor(public _elementRef: ElementRef) {}

	ngOnInit() {
		this.parent = this._elementRef.nativeElement;

		if (!this.rootElem) {
			this.rootElem = this._elementRef.nativeElement.parentNode;
		}

		this.isTpl = this.listTpl instanceof TemplateRef;
	}

	calculateIndent() {
		if (this.isBase) {
			// same calc, we just drop the icon width from the last item
			return (this.outerPadding + this.iconWidth + this.innerPadding)
					+ ((this.iconWidth + this.innerPadding) * this.indent) - this.iconWidth;
		}
		return (this.outerPadding + this.iconWidth + this.innerPadding)
					+ ((this.iconWidth + this.innerPadding) * this.indent);
	}

	bubble(ev) {
		this.select.emit(ev);
		// let selected = this.listItem.items.filter(item => item.selected);
		// if (selected.length < this.listItem.items.length && selected.length > 0) {
		// 	this.checkbox.nativeElement.indeterminate = true;
		// } else {
		// 	this.checkbox.nativeElement.indeterminate = false;
		// 	if (selected.length === this.listItem.items.length) {
		// 		this.listItem.selected = true;
		// 	} else {
		// 		this.listItem.selected = false;
		// 	}
		// }
	}

	doClick(ev, item) {
		// ev.stopPropagation();
		// if (item.items) {
		// 	item.opened = !item.opened;
		// } else {
			this.select.emit({item});
		// }
	}

	// Keyboard accessibility
	onKeyDown(ev, item) {
		// checks for existance, and either calls cb with the object, or returns false
		let exists = (obj: any, cb: Function) => {
			if (obj === undefined || obj === null) {
				return null;
			}
			return cb(obj);
		};
		if (ev.key === "ArrowUp") {
			ev.preventDefault();
			exists(
				exists(
					exists(ev.target.closest("li"), el => el.previousElementSibling),
				el => el.querySelector(".item-wrapper"),
				),
			prev => prev.focus());
		} else if (ev.key === "ArrowDown") {
			ev.preventDefault();
			// if we have items and are open step into the tree
			if (item.items && item.selected) {
				let next = ev.target.nextElementSibling.querySelector(".item-wrapper");
				if (next) { next.focus(); }
			} else { // otherwise try to move to the next sibling
				let next = exists(exists(ev.target.closest("li"), el => el.nextElementSibling),el => el.querySelector(".item-wrapper"));
				if (next) {
					next.focus();
				} else {
					next = ev.target.parentElement;
					while (!next.nextElementSibling.querySelector(".item-wrapper")) {

					}
				}
			}
			// otherwise the event _should_ be picked up by the parent?
		} else
		if (ev.key === "Enter"
			|| ev.key === " "
			|| ev.key === "ArrowRight"
			|| ev.key === "ArrowLeft") {
			ev.preventDefault();
			this.select.emit({item});
		}
	}
}
