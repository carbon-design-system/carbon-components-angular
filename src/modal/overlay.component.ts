import {
	Component,
	Output,
	EventEmitter,
	ViewChild,
	ElementRef
} from "@angular/core";

@Component({
	selector: "n-overlay",
	template: `
		<section
			class="modal-backdrop"
			(click)="overlayClick($event)"
			style="display:block;"
			#overlay>
			<ng-content></ng-content>
		</section>
	`
})
export class OverlayComponent {
	@Output() overlaySelect = new EventEmitter();
	@ViewChild("overlay") overlay: ElementRef;

	overlayClick(event) {
		if (event.target !== this.overlay.nativeElement) { return; }
		event.stopPropagation();
		this.overlaySelect.emit(event);
	}

}
