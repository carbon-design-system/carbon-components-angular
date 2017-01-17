import {
	Component,
	OnInit,
	Input,
	Output,
	EventEmitter,
	ElementRef,
	TemplateRef
} from "@angular/core";
import { NestedView } from "./nested-view.component";
import { KeyCodes } from "../constant/keys";

@Component({
	selector: "cdl-nested-view-item",
	template: `
		<div
			tabindex="0"
			[class.selected]="listItem.selected"
			(click)="doClick(listItem)"
			(keyup)="onKeyUp($event, listItem)">

			<svg
				*ngIf="!!listItem.subMenu"
				id="Layer_1" class="arrow"
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 16 16">
				<path class="st0" d="M4 14.7l6.6-6.6L4 1.6l.8-.9 7.5 7.4-7.5 7.5z"/>
			</svg>
			<span *ngIf="!listTpl">{{listItem.content}}</span>
			<template
				*ngIf="isTpl"
				[ngOutletContext]="{item: listItem}"
				[ngTemplateOutlet]="listTpl">
			</template>
			<span
				*ngIf="listItem.selected && !listItem.subMenu"
				class="selected-check">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 16 16">
						<path d="M8 1.2c3.7 0 6.8 3.1 6.8 6.8s-3.1 6.8-6.8
						6.8S1.2 11.7 1.2 8 4.3 1.2 8 1.2M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z"/>
						<path d="M6.7 9.6L4.6 7.5l-.9.9 3 3 5.6-5.5-.9-.9z"/>
				</svg>
			</span>
		</div>
		<cdl-nested-view
			*ngIf="!!listItem.subMenu"
			[isOpen]="listItem.selected"
			[items]="listItem.subMenu"
			(select)="onClick($event)"
			[listTpl]="listTpl"
			[parent]="parent">
		</cdl-nested-view>
	`
})
export class NestedViewItem {
	private parent;
	private isTpl: Boolean = false;

	@Input() hasSubMenu: boolean = false;
	@Input() parentRef = null;
	@Input() listItem: Object;
	@Input() listTpl: string | TemplateRef<any>;

	@Output() select: EventEmitter<Object> = new EventEmitter<Object>();

	constructor(private _elementRef: ElementRef) {}

	ngOnInit() {
		if (this.parentRef) {
			this.parent = this.parentRef;
		} else {
			this.parent = this._elementRef.nativeElement;
		}

		this.isTpl = this.listTpl instanceof TemplateRef;
	}

	onClick(evt) {
		let item = evt.item;
		this.select.emit({
			item
		});
	}

	doClick(item) {
		this.select.emit({
			item
		});
	}

	// Keyboard accessibility
	onKeyUp(ev, item) {
		if (ev.keyCode === KeyCodes.UP_ARROW) {
			if (this._elementRef.nativeElement.previousElementSibling) {
				this._elementRef.nativeElement.previousElementSibling.querySelector("div").focus();
			} else if (this._elementRef.nativeElement) {
				let parent = this._elementRef.nativeElement.parentNode;

				if (parent && parent.parentNode
					&& parent.parentNode.parentNode
					&& parent.parentNode.parentNode.parentNode.tagName === "CDL-NESTED-VIEW-ITEM") {
					parent.parentNode.parentNode.parentNode.querySelector("div").focus();
				}
			}
		}

		if (ev.keyCode === KeyCodes.DOWN_ARROW) {
			if (!item.subMenu || !item.selected) {
				if (this._elementRef.nativeElement.nextElementSibling) {
					this._elementRef.nativeElement.nextElementSibling.querySelector("div").focus();
				} else {
					if (this.parentRef.nextElementSibling) {
						this.parentRef.nextElementSibling.querySelector("div").focus();
					}
				}
			} else if (item.subMenu && item.selected) {
				this._elementRef.nativeElement.querySelector("ul cdl-nested-view-item").querySelector("div").focus();
			}
		}

		if (ev.keyCode === KeyCodes.ENTER_KEY || ev.keyCode === KeyCodes.SPACE_BAR) {
			this.select.emit({
				item
			});
		}
	}
}
