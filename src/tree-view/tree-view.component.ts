import {
	Component,
	Input,
	Output,
	EventEmitter,
	forwardRef,
	TemplateRef,
	HostListener,
	ElementRef
} from "@angular/core";
import { ListItem } from "./../dropdown/list-item.interface";
import { treetools } from "./../dropdown/dropdowntools";

@Component({
	selector: "cdl-tree-view",
	template: `
		<cdl-tree-view-wrapper
			[items]="items"
			[listTpl]="template"
			[label]="label"
			[role]="role"
			[outerPadding]="outerPadding"
			[iconWidth]="iconWidth"
			[innerPadding]="innerPadding"
			(select)="onClick($event)">
		</cdl-tree-view-wrapper>
	`,
})
export class TreeView {
	@Input() items: Array<ListItem> = [];
	@Input() template: string | TemplateRef<any> = "";
	@Input() role: "tree" | "group" = "tree";
	@Input() label: string;
	@Input() type: "single" | "multi" = "single";

	@Output() select: EventEmitter<Object> = new EventEmitter<Object>();

	public outerPadding = 20; // padding from left edge
	public iconWidth = 16;
	public innerPadding = 5; // padding between icon and content
	public selectedIcon = false;

	private flatList: Array<ListItem> = [];
	private index = -1;

	constructor(private _elementRef: ElementRef) {}

	ngOnChanges(changes) {
		if (changes.items) {
			// this.items = JSON.parse(JSON.stringify(changes.items.currentValue));
			this.flatList = [];
			this.flattenTree(this.items);
			this.index = this.flatList.findIndex(item => item.selected && !item.items);
		}
	}

	flattenTree(items) {
		for (let item of items) {
			this.flatList.push(item);
			if (item.items) {
				this.flattenTree(item.items);
			}
		}
	}

	getSelected(): ListItem[] {
		let selected = this.flatList.filter(item => item.selected && !item.items);
		if (selected.length === 0) {
			return null;
		}
		return selected;
	}

	@HostListener("keydown", ["$event"])
	onKeyDown(ev) {
		let visibleItems = this._elementRef.nativeElement.querySelectorAll(".item-wrapper[tabindex='0']");
		// console.log(ev, visibleItems);
	}

	onClick({item}) {
		if (!item.disabled ) {
		// 	item.selected = !item.selected;
		// 	this.index = this.flatList.indexOf(item);
		// 	if (this.type === "single") {
		// 		let {path} = treetools.find(this.items, item);
		// 		// reset the selection taking care not to touch our selected item or items with sub items
		// 		for (let i = 0; i < this.flatList.length; i++) {
		// 			if (path.indexOf(this.flatList[i]) !== -1 && this.flatList[i] !== item && !this.flatList[i].items) {
		// 				this.flatList[i].selected = true;
		// 			} else if (this.flatList[i] !== item && !this.flatList[i].items) {
		// 				this.flatList[i].selected = false;
		// 			}
		// 		}
		// 		if (!item.items) {
		// 			this.select.emit({item});
		// 		}
		// 	} else {
		// 		this.select.emit(this.getSelected());
		// 	}
		// }
			this.select.emit({item});
		}
	}
}
