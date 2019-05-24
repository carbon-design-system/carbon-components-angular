import { ModalService } from "./modal.service";
import {
	AfterViewInit,
	Component,
	EventEmitter,
	HostListener,
	Input,
	OnDestroy,
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
import { cycleTabs, getFocusElementList } from "./../common/tab.service";

/**
 * Component to create modals for presenting content.
 *
 * [See demo](../../?path=/story/modal--basic)
 *
 * Using a modal in your application requires `ibm-placeholder` which would generally be
 * placed near the end of your app component template (app.component.ts or app.component.html) as:
 *
```html
<ibm-modal-placeholder></ibm-modal-placeholder>
```
 *
 * A more complete example for `Modal` is given as follows:
 *
 * Example modal definition:
 *
```typescript
@Component({
	selector: "app-sample-modal",
	template: `
				<ibm-modal size="xl" (overlaySelected)="closeModal()">
					<ibm-modal-header (closeSelect)="closeModal()">Header text</ibm-modal-header>
						<section class="modal-body">
							<h1>Sample modal works.</h1>
							<button class="btn--icon-link" nPopover="Hello there" title="Popover title" placement="right" appendInline="true">
								<ibm-icon icon="info" size="sm"></ibm-icon>
							</button>
							{{modalText}}
						</section>
					<ibm-modal-footer><button ibmButton="primary" (click)="closeModal()">Close</button></ibm-modal-footer>
				</ibm-modal>`,
	styleUrls: ["./sample-modal.component.scss"]
})
export class SampleModal extends BaseModal {
	modalText: string;
	constructor(protected injector: Injector) {
		super();
		this.modalText = this.injector.get("modalText");
	}
}
```
 *
 * Example of opening the modal:
 *
```typescript
@Component({
	selector: "app-modal-demo",
	template: `
				<button ibmButton="primary" (click)="openModal('drill')">Drill-down modal</button>
				<ibm-placeholder></ibm-placeholder>`
})
export class ModalDemo {
	openModal() {
		this.modalService.create({component: SampleModal, inputs: {modalText: "Hello universe."}});
	}
}
```
 *
 * <example-url>../../iframe.html?id=modal--basic</example-url>
 *
 * @export
 * @class Modal
 * @implements {AfterViewInit}
 * @implements {OnInit}
 * @implements {OnDestroy}
 */
@Component({
	selector: "ibm-modal",
	template: `
		<ibm-overlay [theme]="theme" (overlaySelect)="overlaySelected.emit()">
			<div
				class="bx--modal-container"
				[@modalState]="modalState"
				role="dialog"
				aria-modal="true"
				tabindex="0"
				style="z-index:1;"
				[attr.aria-label]="modalLabel"
				#modal>
				<ng-content></ng-content>
			</div>
		</ibm-overlay>
	`,
	animations: [
		trigger("modalState", [
			state("void", style({transform: "translate(0, 5%)", opacity: 0})),
			transition(":enter", [
				animate("200ms ease-in")
			]),
			transition(":leave", [
				animate(200, style({transform: "translate(0, 5%)", opacity: 0}))
			])
		])
	]
})
export class Modal implements AfterViewInit, OnInit, OnDestroy {
	/**
	 * Size of the modal to display.
	 */
	@Input() size: "sm" | "md" | "lg" | "xl" | "xxl" = "md";
	/**
	 * Classification of the modal.
	 */
	@Input() theme: "default" | "danger" = "default";

	/**
	 * Label for the modal.
	 */
	@Input() modalLabel = "default";

	/**
	 * Emits event when click occurs within `n-overlay` element. This is to track click events occurring outside bounds of the `Modal` object.
	 */
	@Output() overlaySelected = new EventEmitter();
	/**
	 * To emit the closing event of the modal window.
	 */
	@Output() close = new EventEmitter();
	/**
	 * Maintains a reference to the view DOM element of the `Modal`.
	 */
	@ViewChild("modal") modal: ElementRef;

	/**
	 * Controls the transitions of the `Modal` component.
	 */
	modalState: "in" | "out" = "out";

	/**
	 * An element should have 'modal-primary-focus' as an attribute to receive initial focus within the `Modal` component.
	 */
	selectorPrimaryFocus = "[modal-primary-focus]";

	/**
	 * Creates an instance of `Modal`.
	 */
	constructor(public modalService: ModalService) {}

	/**
	 * Set modalState on the modal component when it is initialized.
	 */
	ngOnInit() {
		this.modalState = "in";
	}

	/**
	 * Set document focus to be on the modal component after it is initialized.
	 */
	ngAfterViewInit() {
		const primaryFocusElement = this.modal.nativeElement.querySelector(this.selectorPrimaryFocus);
		if (primaryFocusElement && primaryFocusElement.focus) {
			primaryFocusElement.focus();
			return;
		}
		if (getFocusElementList(this.modal.nativeElement).length > 0) {
			getFocusElementList(this.modal.nativeElement)[0].focus();
		} else {
			this.modal.nativeElement.focus();
		}
	}

	/**
	 * Emit the close event when the modal component is destroyed.
	 */
	ngOnDestroy() {
		this.modalState = "out";
	}

	/**
	 * Handle keyboard events to close modal and tab through the content within the modal.
	 */
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
