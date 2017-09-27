import { ModalService } from "./modal.service";
import {
	Component,
	EventEmitter,
	HostListener,
	Input,
	OnInit,
	Output,
	ElementRef,
	ViewChild
} from "@angular/core";
import {
	trigger,
	state,
	style,
	transition,
	animate
} from "@angular/animations";
import { cycleTabs } from "./../common/tab.service";

@Component({
	selector: "n-modal",
	template: `
		<n-overlay (overlaySelect)="overlaySelected.emit()">
			<div [ngClass]="{
					'modal--sm': size === 'sm',
					'modal': size === 'default',
					'modal--lg': size === 'lg',
					'modal--xl': size === 'xl',
					'modal--xxl': size === 'xxl',
					'modal--warning': modalType === 'warning',
					'modal--error': modalType === 'error'
				}"
				[@modalState]="modalState"
				role="main"
				aria-modal="true"
				tabindex="0"
				style="z-index:1;"
				#modal>
				<ng-content></ng-content>
			</div>
		</n-overlay>
	`,
	animations: [
		trigger("modalState", [
			// state("in", style({opacity: 1, transform: "translate(0, 0)"})),
			state("void", style({transform: "translate(0, 5%)", opacity: 0})),
			transition(":enter", [
				animate("200ms ease-in"),
			]),
			transition(":leave", [
				// style({opacity: 1, transform: "translate(0, 0"}),
				animate(200, style({transform: "translate(0, 5%)", opacity: 0}))
			])
		])
	]
})
export class ModalComponent implements OnInit {
	@Input() size = "xl";
	@Input() modalType = "default";
	@Output() overlaySelected = new EventEmitter();
	@Output() close = new EventEmitter();
	@ViewChild("modal") modal: ElementRef;

	modalState = "out";

	constructor(public modalService: ModalService) { }

	ngOnInit() {
		this.modalState = "in";
		this.modal.nativeElement.focus();
	}

	ngOnDestroy() {
		this.modalState = "out";
		this.close.emit();
	}

	@HostListener("keydown", ["$event"])
	handleKeyboardEvent(event: KeyboardEvent) {
		switch (event.key) {
			case "Escape": {
				event.stopImmediatePropagation();  // prevents events being fired for multiple modals if more than 2 open
				this.modalService.destroy();  // destroy top (latest) modal
				break;
			}

			case "Tab": {
				cycleTabs(event, this.modal.nativeElement);
				break;
			}
		}
	}
}
