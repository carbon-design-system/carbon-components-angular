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
	}

	doClick(ev, item) {
		this.select.emit({item});
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
		if (ev.key === "Enter"
			|| ev.key === " "
			|| ev.key === "ArrowRight"
			|| ev.key === "ArrowLeft") {
			ev.preventDefault();
			this.select.emit({item});
		}
	}
}
