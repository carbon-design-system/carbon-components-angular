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
			<cdl-nested-view-item
				*ngFor="let item of items"
				[listTpl]="listTpl"
				[listItem]="item"
				[hasSubMenu]="!!item.subMenu"
				[parentRef]="parent"
				(select)="onClick($event)"
				[indent]="indent">
			</cdl-nested-view-item>
		</ul>
	`,
	providers: [{provide: View, useExisting: forwardRef(() => NestedView)}]
})
export class NestedView implements View {
	@Input() items: Array<Object> = [];
	@Input() isOpen: Boolean = false;
	@Input() parent: any = null;
	@Input() listTpl: string | TemplateRef<any>;
	@Input() indent: number = 1;

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
