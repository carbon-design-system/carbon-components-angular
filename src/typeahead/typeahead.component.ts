import {
	Component,
	Output,
	Input,
	AfterContentInit,
	EventEmitter,
	ElementRef,
	TemplateRef,
	ViewEncapsulation
} from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/debounceTime";
import { KeyCodes } from "../constant/keys";
import { findNextElem, findPrevElem } from "../common/a11y.service";

@Component({
	selector: "cdl-typeahead",
	template: `
		<div class="typeahead">
			<input type="text" [(ngModel)]="input" (keydown)="inputKeydown($event)"/>
			<ul class="list-view" *ngIf="!selectedItem && input && list && list.length">
				<li tabindex="0"
				*ngFor="let item of list | slice:0:limit;"
				(keydown)="keydownNav($event, item)"
				(click)="select(item)">
					<template
						*ngIf="listTpl"
						[ngOutletContext]="{item: {item: item, searchText: input} }"
						[ngTemplateOutlet]="listTpl">
					</template>
					<typeahead-highlight *ngIf="!displayKey && !listTpl" [fullText]="item" [searchText]="input"></typeahead-highlight>
					<typeahead-highlight *ngIf="displayKey && !listTpl" [fullText]="item[displayKey]" [searchText]="input"></typeahead-highlight>
				</li>
			</ul>
		</div>
	`,
	encapsulation: ViewEncapsulation.None,
	styleUrls: ["./typeahead.component.scss"]
})
export class Typeahead implements AfterContentInit {
	private input: string;
	private selectedItem;

	@Input() list = [];
	@Input() limit: number = 5;
	@Input() waitTime: number = 0;
	@Input() displayKey: string;
	@Input() listTpl: TemplateRef<any> = null;

	@Output() onSearch: EventEmitter<string> = new EventEmitter<string>();
	@Output() onSelect: EventEmitter<any> = new EventEmitter<any>();

	constructor(private _elementRef: ElementRef) {}

	ngAfterContentInit() {
		Observable.fromEvent(this._elementRef.nativeElement.querySelector("input"), "input")
		.debounceTime(this.waitTime)
		.subscribe(evt => {
			this.onInputChage();
		});
	}

	select(item) {
		this.selectedItem = item;

		if (this.displayKey) {
			this.input = item[this.displayKey];
		} else {
			this.input = item;
		}

		this._elementRef.nativeElement.querySelector("input").focus();

		this.onSelect.emit(item);
	}

	onInputChage() {
		this.selectedItem = null;

		if (this.input) {
			this.onSearch.emit(this.input);
		} else {
			this.list = [];
		}
	}

	inputKeydown(evt) {
		if (evt.keyCode === KeyCodes.DOWN_ARROW && !this.selectedItem && this.input && this.list && this.list.length) {
			this._elementRef.nativeElement.querySelector("li").focus();
		}
	}

	keydownNav(evt, item) {
		if (evt.which && (evt.which === KeyCodes.ENTER_KEY || evt.which === KeyCodes.SPACE_BAR)) {
			evt.preventDefault();
			this.select(item);
		}
		if (evt.which === KeyCodes.DOWN_ARROW && findNextElem(evt.target)) {
			evt.preventDefault();
			findNextElem(evt.target).focus();
		} else if (evt.which === KeyCodes.UP_ARROW && findPrevElem(evt.target)) {
			evt.preventDefault();
			findPrevElem(evt.target).focus();
		}
	}
}
