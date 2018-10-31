import {
	Component,
	Output,
	EventEmitter,
	ViewChild,
	ElementRef,
	Input
} from "@angular/core";


/**
 * Component for the overlay object that acts as a backdrop to the `Modal` component.
 *
 * The main purpose for this component is to be able to handle click events that fall outside
 * the bounds of the `Modal` component.
 * @export
 * @class Overlay
 */
@Component({
	selector: "ibm-overlay",
	template: `
		<section
			class="bx--modal bx--modal-tall is-visible"
			[ngClass]="{'bx--modal--danger': modalType === 'danger'}"
			(click)="overlayClick($event)"
			#overlay>
			<ng-content></ng-content>
		</section>
	`
})
export class Overlay {
	/**
	 * Classification of the modal.
	 * @type {"default" | "danger"}
	 * @memberof Modal
	 */
	@Input() modalType: "default" | "danger" = "default";
	/**
	 * To emit the event where the user selects the overlay behind the `Modal`.
	 * @memberof Overlay
	 */
	@Output() overlaySelect = new EventEmitter();
	/**
	 * Maintains a reference to the view DOM element of the `Overlay`.
	 * @type {ElementRef}
	 * @memberof Overlay
	 */
	@ViewChild("overlay") overlay: ElementRef;

	/**
	 * Handles the user clicking on the `Overlay` which resides outside the `Modal` object.
	 * @param {any} event
	 * @returns null
	 * @memberof Overlay
	 */
	overlayClick(event) {
		if (event.target !== this.overlay.nativeElement) { return; }
		event.stopPropagation();
		this.overlaySelect.emit(event);
	}

}
