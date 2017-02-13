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
		<ul class="tree-view" [class.open]="isOpen" [attr.role]="role">
			<cdl-tree-view-item
				*ngFor="let item of items"
				[listTpl]="listTpl"
				[listItem]="item"
				[hasSubMenu]="!!item.subMenu"
				[parentRef]="parent"
				[rootElem]="rootElem"
				[selectedIcon]="selectedIcon"
				(select)="onClick($event)"
				[indent]="indent">
			</cdl-tree-view-item>
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
	@Input() role: string ;

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
