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
				}">
				{{item.content}}
				<span 
					*ngIf="item.selected"
					class="selected-check">
					<svg 
						xmlns="http://www.w3.org/2000/svg" 
						width="16" 
						height="16" 
						viewBox="0 0 16 16">
							<path 
								d="M8 1.2c3.7 0 6.8 3.1 6.8 6.8s-3.1 6.8-6.8 6.8S1.2 11.7 1.2 8 4.3 1.2 8 1.2M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z"/>
							<path d="M6.7 9.6L4.6 7.5l-.9.9 3 3 5.6-5.5-.9-.9z"/>
						</svg>
				</span>
			</li>
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
