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
	selector: "cdl-tree-view-wrapper",
	template: `
		<ul class="tree-view"
			[class.open]="isOpen"
			[attr.role]="role"
			[attr.aria-hidden]="(role == 'group') ? !isOpen : null "
			[attr.aria-label]="label">
			<li *ngFor="let item of items">
				<cdl-tree-view-item
					[listTpl]="listTpl"
					[listItem]="item"
					[hasSubMenu]="!!item.items"
					[parentRef]="parent"
					[rootElem]="rootElem"
					[selectedIcon]="selectedIcon"
					[indent]="indent"
					[isBase]="isBase(items)"
					[outerPadding]="outerPadding"
					[iconWidth]="iconWidth"
					[innerPadding]="innerPadding"
					(select)="bubbleSelect($event)">
				</cdl-tree-view-item>
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
	@Input() selectedIcon = true;
	@Input() role: "tree" | "group" = "tree" ;
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
