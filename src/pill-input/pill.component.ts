import {
	Component,
	EventEmitter,
	Output,
	Input,
	HostBinding
} from "@angular/core";


/**
 * Internal component that represents a single pill/selected item
 * @export
 * @class Pill
 */
@Component({
	selector: "ibm-pill",
	template: `
		<span><ng-content></ng-content></span>
		<button class="pill_close" (click)="doRemove($event)" type="button">
			<ibm-static-icon icon="x" size="sm" classList="close_icon"></ibm-static-icon>
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
