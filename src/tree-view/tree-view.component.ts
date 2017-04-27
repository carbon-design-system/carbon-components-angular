import {
	Component,
	Input,
	Output,
	EventEmitter,
	forwardRef,
	TemplateRef
} from "@angular/core";
import { TreeViewItem } from "./tree-view-item.component";

@Component({
	selector: "cdl-tree-view",
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
					[hasSubMenu]="!!item.subMenu"
					[parentRef]="parent"
					[rootElem]="rootElem"
					[selectedIcon]="selectedIcon"
					(select)="onClick($event)"
					[indent]="indent"
					[indentStart]="indentStart"
					[elemSpacing]="elemSpacing">
				</cdl-tree-view-item>
			</li>
		</ul>
	`,
})
export class TreeView {
	@Input() items: Array<Object> = [];
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

	onClick(evt) {
		let item = evt.item;

		if (!item.disabled) {
			if (item.subMenu) {
				item.selected = !item.selected;
			} else {
				this.select.emit({
					item
				});
			}
		}
	}
}
