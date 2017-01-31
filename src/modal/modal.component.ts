import {
	Component,
	OnInit,
	Input,
	Output,
	EventEmitter,
	trigger,
	state,
	style,
	transition,
	animate
} from "@angular/core";

@Component({
	selector: "cdl-modal",
	template: `
		<cdl-overlay (overlaySelect)="overlaySelected.emit()"></cdl-overlay>
		<section [@modalState]="modalState" class="modal size-{{size}}">
			<ng-content></ng-content>
		</section>
	`,
	animations: [
		trigger("modalState", [
			state("in", style({opacity: 1, transform: "translate(-50%, 50%)"})),
			state("void", style({transform: "translate(-50%, 55%)", opacity: 0})),
			transition(":enter", [
				animate("200ms ease-in"),
			]),
			transition(":leave", [
				style({opacity: 1, transform: "translate(-50%, 50%"}),
				animate(200, style({transform: "translate(-50%, 55%)", opacity: 0}))
			])
		])
	],
	styleUrls: ["./modal.component.scss"]
})

export class ModalComponent implements OnInit {
	@Input() size = "xl";
	@Output() overlaySelected = new EventEmitter();
	modalState = "out";
	constructor() { }

	ngOnInit() {
		this.modalState = "in";
	}

	ngOnDestroy() {
		this.modalState = "out";
	}

}
