import {
	Component,
	Input,
	Output,
	EventEmitter,
	ElementRef,
	TemplateRef
} from "@angular/core";
import { focusNextTree, focusNextElem, focusPrevElem } from "../common/a11y.service";

@Component({
	selector: "cdl-tree-view-item",
	template: `
		<div
			class="item-wrapper item-level-{{indent}}"
			tabindex="{{listItem.disabled?-1:0}}"
			[ngClass]="{
				selected: listItem.selected,
				disabled: listItem.disabled,
				'has-items': !!listItem.items
			}"
			(click)="doClick(listItem)"
			(keydown)="onKeyDown($event, listItem)"
			role="treeitem"
			[attr.aria-level]="indent"
			[attr.aria-hidden]="listItem.disabled"
			[attr.aria-expanded]="(!!listItem.items) ? ((listItem.selected) ? true : false) : null"
			[attr.aria-selected]="listItem.selected">
			<div
				class="item"
				[style.margin-left.px]="calculateIndent()">
				<svg
					*ngIf="!!listItem.items"
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
			*ngIf="!!listItem.items"
			[isOpen]="listItem.selected"
			[items]="listItem.items"
			(select)="onClick($event)"
			[listTpl]="listTpl"
			[parent]="parent"
			[selectedIcon]="selectedIcon"
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
	@Input() selectedIcon = true;
	@Input() isBase = false;
	@Input() outerPadding = 20; // padding from left edge
	@Input() iconWidth = 16;
	@Input() innerPadding = 5; // padding between icon and content
	@Output() select: EventEmitter<Object> = new EventEmitter<Object>();

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
		if (ev.key === "ArrowUp") {
			ev.preventDefault();

			focusPrevElem(this._elementRef.nativeElement.parentNode, this.parentRef);
		} else if (ev.key === "ArrowDown") {
			ev.preventDefault();

			if (!item.subMenu || !item.selected) {
				focusNextElem(this._elementRef.nativeElement.parentNode, this.rootElem);
			} else if (item.subMenu && item.selected) {
				focusNextTree(this._elementRef.nativeElement.querySelector("ul li"), this.rootElem);
			}
		} else if (ev.key === "Enter" || ev.key === " "
					|| ev.key === "ArrowRight" || ev.key === "ArrowLeft") {
			ev.preventDefault();

			this.select.emit({
				item
			});
		}
	}
}
