import { Component, OnInit, Injector, ViewContainerRef, ViewChild } from "@angular/core";
import { ModalService } from "./modal.service";

@Component({
	selector: "cdl-modal-placeholder",
	template: `<div #modalplaceholder></div>`
})

export class ModalPlaceholderComponent implements OnInit {
	@ViewChild("modalplaceholder", {read: ViewContainerRef }) viewContainerRef: ViewContainerRef;

	constructor(
		public modalService: ModalService,
	) {}

	ngOnInit(): void {
		this.modalService.registerViewContainerRef(this.viewContainerRef);
	}
}
