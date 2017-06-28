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
import { SubMenuItem } from "./sub-menu-item.component";

@Component({
	selector: "n-sub-menu-wrapper",
	template: `
		<ul #list class="sub-menu-view"
			[class.open]="isOpen"
			[attr.role]="role"
			[attr.aria-hidden]="(role == 'group') ? !isOpen : null "
			[attr.aria-label]="label" >
			<li *ngFor="let item of items">
				<n-sub-menu-item
					[listTpl]="listTpl"
					[listItem]="item"
					[hasSubMenu]="!!item.items"
					[parentRef]="parent"
					[selectedIcon]="selectedIcon"
					[rootElem]="rootElem"
					(select)="bubbleSelect($event)">
				</n-sub-menu-item>
			</li>
		</ul>
	`
})
export class SubMenuWrapper {
	@Input() items: Array<ListItem> = [];
	@Input() isOpen = false;
	@Input() parent: any = null;
	@Input() listTpl: string | TemplateRef<any> = "";
	@Input() rootElem: any = null;
	@Input() role: "tree" | "group" = "tree" ;
	@Input() label: string;
	@Input() selectedIcon = true;
	@Input() type: "single" | "multi" = "single";

	@Output() select: EventEmitter<Object> = new EventEmitter<Object>();


	bubbleSelect(evt) {
		this.select.emit(evt);
	}
}
