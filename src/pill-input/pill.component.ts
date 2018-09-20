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
		<div class="bx--list-box__selection bx--list-box__selection--multi">
			<ng-content></ng-content>
			<div (click)="doRemove($event)"
				role="button"
				class="close_icon bx--list-box__selection--multi"
				tabindex="0"
				title="Clear all selected items">
				<svg
					width="10"
					height="10"
					viewBox="0 0 10 10">
					<path d="M6.32 5L10 8.68 8.68 10 5 6.32 1.32 10 0 8.68 3.68 5 0 1.32 1.32 0 5 3.68 8.68 0 10 1.32 6.32 5z"></path>
				</svg>
			</div>
	  	</div>`
})
export class Pill {
	/** ListItem to render */
	@Input() item;
	/** emits an empty event when the close button is clicked */
	@Output() remove = new EventEmitter();
	@HostBinding("attr.class") attrClass = "pill";
	@HostBinding("style.display") style = "inline-flex";

	/** close button handler */
	public doRemove(ev) {
		this.item.selected = false;
		ev.stopPropagation();
		this.remove.emit(this.item);
	}
}
