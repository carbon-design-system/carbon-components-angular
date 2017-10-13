import {
	Component,
	Input,
	Output,
	EventEmitter,
	ElementRef,
	TemplateRef,
	OnInit
} from "@angular/core";
import { DropdownTree } from "./tree.component";
import {  } from "./../../constant/keys";
import { focusNextTree, focusNextElem, focusPrevElem } from "./../../common/a11y.service";

@Component({
	selector: "n-tree-item",
	template: `
		<span
			(click)="doClick(listItem)"
			(keydown)="onKeyDown($event, listItem)"
			role="option"
			tabindex="{{listItem.disabled?-1:0}}">
			{{listItem.content}}
		</span>
		<n-tree-wrapper
			*ngIf="!!listItem.items"
			[isOpen]="listItem.selected"
			[items]="listItem.items"
			(select)="bubbleSelect($event)"
			[listTpl]="listTpl"
			[parent]="parent"
			[selectedIcon]="selectedIcon"
			[rootElem]="rootElem"
			[indent]="indent+1"
			[role]="'group'"
			[label]="listItem"
			[outerPadding]="outerPadding"
			[iconWidth]="iconWidth"
			[size]="size"
			[innerPadding]="innerPadding">
		</n-tree-wrapper>
	`
})
export class TreeItem implements OnInit {
	public parent;
	public isTpl = false;

	@Input() hasSubMenu = false;
	@Input() parentRef = null;
	@Input() listItem;
	@Input() listTpl: string | TemplateRef<any> = "";
	@Input() indent = 0;
	@Input() rootElem = null;
	@Input() selectedIcon = true;
	@Input() isBase = false;
	@Input() outerPadding = 10; // padding from left edge
	@Input() iconWidth = 16;
	@Input() innerPadding = 10; // padding between icon and content
	@Input() size: "sm" | "default" | "lg" = "default";
	@Output() select: EventEmitter<Object> = new EventEmitter<Object>();

	constructor(public _elementRef: ElementRef) {}

	ngOnInit() {
		this.parent = this._elementRef.nativeElement;

		if (!this.rootElem) {
			this.rootElem = this._elementRef.nativeElement.parentNode;
		}

		this.isTpl = this.listTpl instanceof TemplateRef;
	}

	calculateIndent() {
		if (this.isBase) {
			// same calc, we just drop the icon width from the last item
			return ((this.outerPadding + this.iconWidth + this.innerPadding)
				+ ((this.iconWidth + this.innerPadding) * this.indent)) - this.iconWidth;
		}
		// we add innerPadding twice to account for the padding from the previous level
		return (this.outerPadding + this.iconWidth + this.innerPadding)
			+ ((this.iconWidth + this.innerPadding) * this.indent);
	}

	bubbleSelect(evt) {
		this.select.emit(evt);
	}

	doClick(item) {
		this.select.emit({item});
	}

	// Keyboard accessibility
	onKeyDown(ev, item) {
		if (ev.key === "ArrowUp") {
			ev.preventDefault();
			focusPrevElem(this._elementRef.nativeElement.parentNode, this.parentRef);
		} else if (ev.key === "ArrowDown") {
			ev.preventDefault();
			if (!item.items || !item.selected) {
				focusNextElem(this._elementRef.nativeElement.parentNode, this.rootElem);
			} else if (item.items && item.selected) {
				focusNextTree(this._elementRef.nativeElement.querySelector("ul li"), this.rootElem);
			}
		} else if (ev.key === "Enter"
			|| ev.key === " "
			|| ev.key === "ArrowRight"
			|| ev.key === "ArrowLeft") {
			ev.preventDefault();
			this.select.emit({item});
		}
	}
}
