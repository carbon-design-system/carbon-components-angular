import {
	Component,
	Input,
	Output,
	OnInit,
	EventEmitter,
	ElementRef,
	TemplateRef,
	ViewChild
} from "@angular/core";
import { ListItem } from "./../dropdown/list-item.interface";
import { focusNextTree, focusNextElem, focusPrevElem, findNextElem } from "../common/a11y.service";

@Component({
	selector: "n-tree-view-item",
	template: `
	<span
	class="tree-view_label"
	[style.margin-left.px]="calculateIndent()"
	tabindex="{{listItem.disabled?-1:0}}"
	[ngClass]="{
		opened: listItem.opened,
		disabled: listItem.disabled,
		'has-items': listItem.items
	}"
	(click)="doClick($event, listItem)"
	(keydown)="onKeyDown($event, listItem)">
		<ng-container *ngIf="!listTpl">{{listItem.content}}</ng-container>
		<ng-template
			*ngIf="isTpl"
			[ngTemplateOutletContext]="{item: listItem}"
			[ngTemplateOutlet]="listTpl">
		</ng-template>
	</span>
	<n-tree-view-wrapper
		*ngIf="listItem.items && listItem.opened"
		[isOpen]="listItem.opened"
		[items]="listItem.items"
		[listTpl]="listTpl"
		[parent]="parent"
		[rootElem]="rootElem"
		[indent]="indent+1"
		[role]="'group'"
		[outerPadding]="outerPadding"
		[iconWidth]="iconWidth"
		[innerPadding]="innerPadding"
		[label]="listItem"
		(select)="bubble($event)">
	</n-tree-view-wrapper>
	`
})
export class TreeViewItem implements OnInit {
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
					+ ((this.innerPadding + this.iconWidth + this.innerPadding) * this.indent) - this.iconWidth;
		}
		// we add innerPadding twice to account for the padding from the previous level
		return (this.outerPadding + this.iconWidth + this.innerPadding)
					+ ((this.innerPadding + this.iconWidth + this.innerPadding) * this.indent);
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
