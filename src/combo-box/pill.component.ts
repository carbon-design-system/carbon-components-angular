import {
	Component,
	EventEmitter,
	Output,
	Input
} from "@angular/core";

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
	@Input() item;
	@Output() remove = new EventEmitter();

	doRemove(ev) {
		this.item.selected = false;
		ev.stopPropagation();
		this.remove.emit(this.item);
	}
}
