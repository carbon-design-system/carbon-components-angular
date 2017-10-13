import {
	Component,
	Input,
	Output,
	EventEmitter,
	forwardRef,
	TemplateRef,
	ElementRef,
	ViewChild,
	AfterViewInit
} from "@angular/core";
import { ListItem } from "./../dropdown/list-item.interface";

@Component({
	selector: "n-tree-view-wrapper",
	template: `
		<ul [class.tree-view]="role == 'tree'"
		[attr.role]="role"
		[attr.aria-hidden]="(role == 'group') ? !isOpen : null "
		[attr.aria-label]="label">
			<li *ngFor="let item of items; let index = index"
			role="treeitem"
			[attr.aria-level]="indent + 1"
			[attr.aria-setsize]="items.length"
			[attr.aria-posinset]="index + 1"
			[attr.aria-hidden]="item.disabled"
			[attr.aria-expanded]="item.items ? (item.opened ? true : false) : null"
			[attr.aria-selected]="item.selected">
				<n-tree-view-item
					[listTpl]="listTpl"
					[listItem]="item"
					[parentRef]="parent"
					[rootElem]="rootElem"
					[indent]="indent"
					[isBase]="isBase(items)"
					[outerPadding]="outerPadding"
					[iconWidth]="iconWidth"
					[innerPadding]="innerPadding"
					(select)="bubbleSelect($event)">
				</n-tree-view-item>
			</li>
		</ul>
	`
})
export class TreeViewWrapper {
	@Input() items: Array<ListItem> = [];
	@Input() isOpen = false;
	@Input() parent: any = null;
	@Input() listTpl: string | TemplateRef<any> = "";
	@Input() indent = 0;
	@Input() rootElem: any = null;
	@Input() role: "tree" | "group" = "group" ;
	@Input() label: string;
	@Input() outerPadding = 20; // padding from left edge
	@Input() iconWidth = 16;
	@Input() innerPadding = 5; // padding between icon and content

	@Output() select: EventEmitter<Object> = new EventEmitter<Object>();

	public isBase(items) {
		if (items.find(item => item.items)) {
			return false;
		}
		return true;
	}

	public bubbleSelect(evt) {
		this.select.emit(evt);
	}
}
