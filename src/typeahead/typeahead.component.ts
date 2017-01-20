import {
	Component,
	Output,
	Input,
	AfterContentInit,
	EventEmitter,
	ElementRef
} from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/debounceTime";

@Component({
	selector: "cdl-typeahead",
	template: `
		<div class="typeahead">
			<input type="text" [(ngModel)]="input"/>
			<ul class="list-view" *ngIf="!selectedItem && input && list && list.length">
				<li tabindex="0"
				*ngFor="let item of list | slice:0:limit;"
				(click)="select(item)">
					<span *ngIf="!displayKey">{{item}}</span>
					<span *ngIf="displayKey">{{item[displayKey]}}</span>
				</li>
			</ul>
		</div>
	`,
	styleUrls: ["./typeahead.component.scss"]
})
export class Typeahead implements AfterContentInit {
	private input: string;
	private selectedItem;

	@Input() list = [];
	@Input() limit: number = 5;
	@Input() waitTime: number = 0;
	@Input() search: Function;
	@Input() displayKey: string;
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
}
