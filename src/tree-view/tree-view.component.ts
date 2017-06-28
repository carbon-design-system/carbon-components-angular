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
	selector: "n-tree-view",
	template: `
		<n-tree-view-wrapper
			[items]="items"
			[listTpl]="template"
			[label]="label"
			[role]="role"
			[outerPadding]="outerPadding"
			[iconWidth]="iconWidth"
			[innerPadding]="innerPadding"
			(select)="onClick($event)">
		</n-tree-view-wrapper>
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
		let visibleItems = Array.from(this._elementRef.nativeElement.querySelectorAll(".item-wrapper[tabindex='0']"));
		let eli = visibleItems.indexOf(document.activeElement);
		if (ev.key === "ArrowUp" && visibleItems[eli - 1]) {
			(visibleItems[eli - 1] as HTMLElement).focus();
		} else if (ev.key === "ArrowDown" && visibleItems[eli + 1]) {
			(visibleItems[eli + 1] as HTMLElement).focus();
		}
	}

	onClick({item}) {
		if (!item.disabled ) {
			this.select.emit({item});
		}
	}
}
