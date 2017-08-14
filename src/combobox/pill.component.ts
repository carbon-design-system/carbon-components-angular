import {
	Component,
	EventEmitter,
	Output,
	Input
} from "@angular/core";

/**
 * Internal component that represents a single pill/selected item
 */
@Component({
	selector: "n-pill",
	template: `
		<span><ng-content></ng-content></span>
		<button class="pill-close" (click)="doRemove($event)">
			<svg class="icon" width="16" height="16"><use xlink:href="#x_16"></use></svg>
		</button>`,
	host: {
		class: "pill"
	}
})
export class Pill {
	/** ListItem to render */
	@Input() item;
	/** emits an empty event when the close button is clicked */
	@Output() remove = new EventEmitter();

	/** close button handler */
	public doRemove(ev) {
		this.item.selected = false;
		ev.stopPropagation();
		this.remove.emit(this.item);
	}
}
