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


@Component({
	selector: "cdl-modal",
	template: `
		<div class="modal-wrapper">
			<cdl-overlay (overlaySelect)="overlaySelected.emit()"></cdl-overlay>
			<div class="valign-wrapper">
				<div class="valign-element">
					<section [@modalState]="modalState" class="modal modal-size-{{size}}" role="main" aria-modal="true" tabindex="0" #modal>
							<ng-content></ng-content>
					</section>
				</div>
			</div>
		</div>
	`,
	animations: [
		trigger("modalState", [
			state("in", style({opacity: 1, transform: "translate(0, 0)"})),
			state("void", style({transform: "translate(0, 5%)", opacity: 0})),
			transition(":enter", [
				animate("200ms ease-in"),
			]),
			transition(":leave", [
				style({opacity: 1, transform: "translate(0, 0"}),
				animate(200, style({transform: "translate(0, 5%)", opacity: 0}))
			])
		])
	]
})
export class ModalComponent implements OnInit {
	@Input() size = "xl";
	@Output() overlaySelected = new EventEmitter();
	@ViewChild("modal") modal: ElementRef;

	modalState = "out";
	tabbableSelector = "a[href], area[href], input:not([disabled]):not([tabindex=\'-1\']), " +
		"button:not([disabled]):not([tabindex=\'-1\']),select:not([disabled]):not([tabindex=\'-1\']), " +
		"textarea:not([disabled]):not([tabindex=\'-1\']), " +
		"iframe, object, embed, *[tabindex]:not([tabindex=\'-1\']), *[contenteditable=true]";

	constructor(public modalService: ModalService) { }

	ngOnInit() {
		this.modalState = "in";
		this.modal.nativeElement.focus();
	}

	ngOnDestroy() {
		this.modalState = "out";
	}

	@HostListener("document:keydown", ["$event"])
	handleKeyboardEvent(event: KeyboardEvent) {
		event.stopImmediatePropagation();  // prevents events being fired for multiple modals if more than 2 open

		switch (event.key) {
			case "Escape": {
				this.modalService.destroy();  // destroy top (latest) modal
				break;
			}

			case "Tab": {
				let list = this.getFocusElementList();
				let focusChanged = false;

				if (event.shiftKey) {
					if (this.isFocusInFirstItem(event, list) || this.isModalFocused(event)) {
						focusChanged = this.focusLastFocusableElement(list);
					}
				} else {
					if (this.isFocusInLastItem(event, list)) {
						focusChanged = this.focusFirstFocusableElement(list);
					}
				}

				if (focusChanged) {
					event.preventDefault();
					event.stopPropagation();
				}
				break;
			}
		}
	}

	private getFocusElementList() {
		let elements = this.modal.nativeElement.querySelectorAll(this.tabbableSelector);
		return elements ? Array.prototype.filter.call(elements, element => this.isVisible(element)) : elements;
	}

	private isFocusInFirstItem(event, list) {
		if (list.length > 0) {
			return (event.target || event.srcElement) === list[0];
		}
		return false;
	}

	private isFocusInLastItem(event, list) {
		if (list.length > 0) {
			return (event.target || event.srcElement) === list[list.length - 1];
		}
		return false;
	}

	private isModalFocused(event) {
		return (event.target || event.srcElement) === this.modal.nativeElement;
	}

	private focusFirstFocusableElement(list) {
		if (list.length > 0) {
			list[0].focus();
			return true;
		}
		return false;
	}

	private focusLastFocusableElement(list) {
		if (list.length > 0) {
			list[list.length - 1].focus();
			return true;
		}
		return false;
	}

	private isVisible(element) {
		return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
	}
}
