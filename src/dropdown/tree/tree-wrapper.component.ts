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

@Component({
	selector: "n-tree-wrapper",
	template: `
		<ul
			class="menu_tree"
			[attr.role]="role"
			[attr.aria-hidden]="(role == 'group') ? !isOpen : null "
			[attr.aria-label]="label">
			<li
				*ngFor="let item of items; index as i"
				class="treeitem"
				role="treeitem"
				[attr.aria-level]="indent + 1"
				[attr.aria-posinset]="i"
				[attr.aria-setsize]="3"
				[attr.aria-expanded]="!!item.items?item.selected:null"
				[attr.aria-selected]="(item.selected && !item.items)?true:null"
				[style.text-indent.px]="calculateIndent()">
				<n-tree-item
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
				</n-tree-item>
			</li>
		</ul>
	`
})
export class TreeWrapper {
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
	@Input() innerPadding = 10; // padding between icon and content

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

	calculateIndent() {
		if (this.isBase(this.items)) {
			// same calc, we just drop the icon width from the last item
			return ((this.outerPadding + this.iconWidth + this.innerPadding)
				+ ((this.iconWidth + this.innerPadding) * this.indent)) - this.iconWidth;
		}
		// we add innerPadding twice to account for the padding from the previous level
		return (this.outerPadding + this.iconWidth + this.innerPadding)
			+ ((this.iconWidth + this.innerPadding) * this.indent);
	}
}
