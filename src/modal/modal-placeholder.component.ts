import { Component, OnInit, Injector, ViewContainerRef, ViewChild } from "@angular/core";
import { ModalService } from "./modal.service";


/**
 * Using a modal in your application requires *this* component: `n-modal-placeholder` which would generally be placed near the end of your app component template (app.component.ts or app.component.html) as
 * ...
 * <n-modal-placeholder></n-modal-placeholder>
 *
 *
 * ```html
 * <n-modal size="xl" (overlaySelected)="closeModal()">
 * 	<n-modal-header (closeSelect)="closeModal()">Header text</n-modal-header>
 * 	<section class="modal-body">
 * 		<h1>It Works!</h1>
 * 		{{modalText}}
 * 	</section>
 * 	<n-modal-footer><button class="btn cancel-button" (click)="closeModal()">Cancel</button></n-modal-footer>
 * </n-modal>
 * ...
 * <n-modal-placeholder></n-modal-placeholder>
 * ```
 *
 * @export
 * @class ModalPlaceholderComponent
 * @implements {OnInit}
 */
@Component({
	selector: "n-modal-placeholder",
	template: `<div #modalplaceholder></div>`
})
export class ModalPlaceholderComponent implements OnInit {
	/**
	 * Maintains a reference to the view DOM element of the `ModalPlaceholderComponent`.
	 * @type {ViewContainerRef}
	 * @memberof ModalPlaceholderComponent
	 */
	@ViewChild("modalplaceholder", {read: ViewContainerRef }) viewContainerRef: ViewContainerRef;

	/**
	 * Creates an instance of `ModalPlaceholderComponent`.
	 * @param {ModalService} modalService
	 * @memberof ModalPlaceholderComponent
	 */
	constructor(public modalService: ModalService) {}

	/**
	 * Initializes the component using `ModalService`.
	 * @memberof ModalPlaceholderComponent
	 */
	ngOnInit(): void {
		this.modalService.registerViewContainerRef(this.viewContainerRef);
	}
}
