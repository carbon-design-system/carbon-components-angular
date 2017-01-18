import {
	Component,
	Input,
	Output,
	EventEmitter,
	forwardRef,
	TemplateRef
} from "@angular/core";
import { View } from "../common/view.class";
import { NestedViewItem } from "./nested-view-item.component";

@Component({
	selector: "cdl-nested-view",
	template: `
		<ul class="nested-view" [class.open]="isOpen">
			<li>
				<cdl-nested-view-item
					*ngFor="let item of items"
					[listTpl]="listTpl"
					[listItem]="item"
					[hasSubMenu]="!!item.subMenu"
					[parentRef]="parent"
					(select)="onClick($event)">
					</cdl-nested-view-item>
			</li>
		</ul>
	`,
	providers: [{provide: View, useExisting: forwardRef(() => NestedView)}]
})
export class NestedView implements View {
	@Input() items: Array<Object> = [];
	@Input() isOpen: Boolean = false;
	@Input() parent: any = null;
	@Input() listTpl: string | TemplateRef<any>;

	@Output() select: EventEmitter<Object> = new EventEmitter<Object>();

	onClick(evt) {
		let item = evt.item;
		if (item.subMenu) {
			item.selected = !item.selected;
		} else {
			this.select.emit({
				item
			});
		}
	}
}
