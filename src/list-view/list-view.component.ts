import {
	Component,
	OnInit,
	Input,
	Output,
	EventEmitter
} from "@angular/core";

@Component({
	selector: "cdl-list-view",
	template: `
		<ul class="list-view">
			<li 
				*ngFor="let item of items"
				(click)="doClick($event, item)"
				[ngClass]="{
					selected: item.selected
				}">{{item.content}}</li>
		</ul>`
})
export class ListView {
	@Input() items: Array<Object> = [];
	@Output() select: EventEmitter<Object> = new EventEmitter<Object>();

	doClick(ev, item) {
		this.select.emit({
			item
		});
	}
}
