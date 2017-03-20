import {
	Component,
	Input,
	Output,
	EventEmitter,
	forwardRef,
	TemplateRef
} from "@angular/core";
import { View } from "../common/view.class";
import { SubMenuViewItem } from "./sub-menu-view-item.component";

@Component({
	selector: "cdl-sub-menu-view",
	template: `
		<ul class="sub-menu-view"
			[class.open]="isOpen"
			[attr.role]="role"
			[attr.aria-hidden]="(role == 'group') ? !isOpen : null "
			[attr.aria-label]="subViewLabel" >
			<li *ngFor="let item of items">
				<cdl-sub-menu-view-item
					[listTpl]="listTpl"
					[listItem]="item"
					[hasSubMenu]="!!item.subMenu"
					[parentRef]="parent"
					[selectedIcon]="selectedIcon"
					[rootElem]="rootElem"
					(select)="onClick($event)">
				</cdl-sub-menu-view-item>
			</li>
		</ul>
	`,
	providers: [{provide: View, useExisting: forwardRef(() => SubMenuView)}]
})
export class SubMenuView implements View {
	@Input() items: Array<Object> = [];
	@Input() isOpen = false;
	@Input() parent: any = null;
	@Input() listTpl: string | TemplateRef<any> = "";
	@Input() rootElem: any = null;
	@Input() role: "tree" | "group" = "tree" ;
	@Input() label: string;
	@Input() selectedIcon = true;

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
