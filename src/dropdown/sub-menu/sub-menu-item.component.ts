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
		<div class="sub-menu-item-wrapper"
			tabindex="{{listItem.disabled?-1:0}}"
			[ngClass]="{
				selected: listItem.selected,
				disabled: listItem.disabled,
				'has-items': !!listItem.items
			}"
			(click)="doClick(listItem)"
			(keydown)="onKeyDown($event, listItem)"
			role="treeitem"
			[attr.aria-hidden]="listItem.disabled"
			[attr.aria-expanded]="(!!listItem.items) ? ((listItem.selected) ? true : false) : null"
			[attr.aria-selected]="listItem.selected"
			>
			<div class="sub-menu-item">
				<svg
					*ngIf="!!listItem.items"
					class="arrow icon"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 16 16">
					<path d="M4 14.7l6.6-6.6L4 1.6l.8-.9 7.5 7.4-7.5 7.5z"/>
				</svg>
				<span *ngIf="!listTpl">{{listItem.content}}</span>
				<ng-template
					*ngIf="isTpl"
					[ngOutletContext]="{item: listItem}"
					[ngTemplateOutlet]="listTpl">
				</ng-template>
				<span
					*ngIf="selectedIcon && listItem.selected && !listItem.items"
					class="checked" aria-hidden="true">
				</span>
			</div>
		</div>
		<n-sub-menu-wrapper
			*ngIf="!!listItem.items"
			[isOpen]="listItem.selected"
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
