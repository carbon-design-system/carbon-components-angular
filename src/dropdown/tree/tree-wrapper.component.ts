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
import { AbstractDropdownView } from "./../abstract-dropdown-view.class";
import { ListItem } from "./../list-item.interface";
import { TreeItem } from "./tree-item.component";

@Component({
	selector: "cdl-tree-wrapper",
	template: `
		<ul class="tree"
			[class.open]="isOpen"
			[attr.role]="role"
			[attr.aria-hidden]="(role == 'group') ? !isOpen : null "
			[attr.aria-label]="label">
			<li *ngFor="let item of items">
				<cdl-tree-item
					[listTpl]="listTpl"
					[listItem]="item"
					[hasSubMenu]="!!item.items"
					[parentRef]="parent"
					[rootElem]="rootElem"
					[selectedIcon]="selectedIcon"
					[indent]="indent"
					[indentStart]="indentStart"
					[elemSpacing]="elemSpacing"
					(select)="bubbleSelect($event)">
				</cdl-tree-item>
			</li>
		</ul>
	`
})
export class TreeWrapper {
	@Input() items: Array<ListItem> = [];
	@Input() isOpen = false;
	@Input() parent: any = null;
	@Input() listTpl: string | TemplateRef<any> = "";
	@Input() indent = 1;
	@Input() indentStart = 0;
	@Input() rootElem: any = null;
	@Input() selectedIcon = true;
	@Input() role: "tree" | "group" = "tree" ;
	@Input() label: string;
	@Input() elemSpacing = 40;

	@Output() select: EventEmitter<Object> = new EventEmitter<Object>();

	bubbleSelect(evt) {
		this.select.emit(evt);
	}
}
