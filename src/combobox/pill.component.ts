import {
	Component,
	EventEmitter,
	Output,
	Input,
	HostBinding
} from "@angular/core";

/**
 * Internal component that represents a single pill/selected item
 */
@Component({
	selector: "n-pill",
	template: `
		<span><ng-content></ng-content></span>
		<button class="pill_close" (click)="doRemove($event)" type="button">
			<svg
				class="close_icon"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 16 16">
				<polygon
					points="14.5,2.6 13.4,1.5 8,6.9 2.6,1.5
					1.5,2.6 6.9,8 1.5,13.4 2.6,14.5
					8,9.1 13.4,14.5 14.5,13.4 9.1,8"/>
			</svg>
		</button>`
})
export class Pill {
	/** ListItem to render */
	@Input() item;
	/** emits an empty event when the close button is clicked */
	@Output() remove = new EventEmitter();
	@HostBinding("attr.class") attrClass = "pill";
	/** close button handler */
	public doRemove(ev) {
		this.item.selected = false;
		ev.stopPropagation();
		this.remove.emit(this.item);
	}
}
