import {
	Component,
	EventEmitter,
	Output,
	OnInit,
	Input,
	HostBinding
} from "@angular/core";


/**
 * Internal component that represents a single pill/selected item
 * @export
 * @class Pill
 */
@Component({
	selector: "ibm-pill, ibm-tag",
	template: `
		<span><ng-content></ng-content></span>
		<button *ngIf="showCloseIcon" class="pill_close" (click)="doRemove($event)" type="button">
			<ibm-static-icon icon="x" size="sm" classList="close_icon"></ibm-static-icon>
		</button>`
})
export class Pill implements OnInit {
	/** ListItem to render */
	@Input() item;
	/** type of the tag determines the styling */
	@Input()
	type: "beta" | "community" | "custom" | "dedicated" | "experimental" | "ibm" | "local" | "private" | "third-party" = "ibm";
	/** show or hide close icon */
	@Input()
	showCloseIcon = true;
	/** emits an empty event when the close button is clicked */
	@Output() remove = new EventEmitter();
	@HostBinding("attr.class") attrClass;

	ngOnInit() {
		this.attrClass = `pill bx--tag bx--tag--${this.type}`;
	}

	/** close button handler */
	public doRemove(ev) {
		this.item.selected = false;
		ev.stopPropagation();
		this.remove.emit(this.item);
	}
}
