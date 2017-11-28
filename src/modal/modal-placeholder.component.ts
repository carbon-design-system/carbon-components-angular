import { Component, OnInit, Injector, ViewContainerRef, ViewChild } from "@angular/core";
import { ModalService } from "./modal.service";


/**
 * class: ModalPlaceholderComponent
 *
 * selector: `n-modal-placeholder`
 *
 * source: `src/modal/modal-placeholder.component.ts`
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
