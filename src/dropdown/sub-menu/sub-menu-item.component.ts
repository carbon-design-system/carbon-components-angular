import {
	Component,
	Input,
	Output,
	EventEmitter,
	ElementRef,
	TemplateRef,
	OnInit
} from "@angular/core";
import { DropdownSubMenu } from "./sub-menu.component";
import { focusNextTree, focusNextElem, focusPrevElem } from "./../../common/a11y.service";

@Component({
	selector: "n-sub-menu-item",
	template: `
		<span
			(click)="doClick(listItem)"
			(keydown)="onKeyDown($event, listItem)"
			[class.active]="listItem.selected"
			role="option">
			{{listItem.content}}
		</span>
		<n-sub-menu-wrapper
			*ngIf="!!listItem.items"
			[isOpen]="listItem.selected"
			[level]="level"
			[items]="listItem.items"
			(select)="onClick($event)"
			[listTpl]="listTpl"
			[rootElem]="rootElem"
			[selectedIcon]="selectedIcon"
			[role]="'group'"
			[parent]="parent">
		</n-sub-menu-wrapper>
	`
})
export class SubMenuItem implements OnInit {
	public parent;
	public isTpl = false;

	@Input() hasSubMenu = false;
	@Input() level = 1;
	@Input() parentRef = null;
	@Input() listItem: any;
	@Input() listTpl: string | TemplateRef<any> = "";
	@Input() rootElem = null;
	@Input() selectedIcon = true;

	@Output() select: EventEmitter<Object> = new EventEmitter<Object>();

	constructor(public _elementRef: ElementRef) {}

	ngOnInit() {
		this.parent = this._elementRef.nativeElement;

		if (!this.rootElem) {
			this.rootElem = this._elementRef.nativeElement.parentNode;
		}

		this.isTpl = this.listTpl instanceof TemplateRef;
	}

	onClick(evt) {
		let item = evt.item;
		this.select.emit({item});
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
		} else if (ev.key === "Enter" || ev.key === " "
					|| ev.key === "ArrowRight" || ev.key === "ArrowLeft") {
			ev.preventDefault();

			this.select.emit({item});
		}
	}
}
