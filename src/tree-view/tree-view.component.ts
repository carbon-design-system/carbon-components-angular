import {
	Component,
	Input,
	Output,
	EventEmitter,
	forwardRef,
	TemplateRef
} from "@angular/core";
import { View } from "../common/view.class";
import { TreeViewItem } from "./tree-view-item.component";

@Component({
	selector: "cdl-tree-view",
	template: `
		<ul class="tree-view"
			[class.open]="isOpen"
			[attr.role]="role"
			[attr.aria-hidden]="(role == 'group') ? !isOpen : null "
			[attr.aria-label]="treeViewLabel">
			<li *ngFor="let item of items">
				<cdl-tree-view-item
					[listTpl]="listTpl"
					[listItem]="item"
					[hasSubMenu]="!!item.subMenu"
					[parentRef]="parent"
					[rootElem]="rootElem"
					[selectedIcon]="selectedIcon"
					(select)="onClick($event)"
					[indent]="indent">
				</cdl-tree-view-item>
			</li>
		</ul>
	`,
	providers: [{provide: View, useExisting: forwardRef(() => TreeView)}]
})
export class TreeView implements View {
	@Input() items: Array<Object> = [];
	@Input() isOpen: boolean = false;
	@Input() parent: any = null;
	@Input() listTpl: string | TemplateRef<any> = "";
	@Input() indent: number = 1;
	@Input() rootElem: any = null;
	@Input() selectedIcon: boolean = true;
	@Input() role: "tree" | "group" = "tree" ;
	@Input() treeViewLabel: string;

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
