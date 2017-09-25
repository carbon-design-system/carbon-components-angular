import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModalPlaceholderComponent } from "./modal-placeholder.component";
import { ModalService } from "./modal.service";
import { ModalComponent } from "./modal.component";
import { ModalFooterComponent }  from "./modal-footer.component";
import { OverlayComponent } from "./overlay.component";
import { ModalHeaderComponent } from "./modal-header.component";

export { default as Modal } from "./modal.decorator";
export { ModalService } from "./modal.service";

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		ModalPlaceholderComponent,
		ModalComponent,
		ModalHeaderComponent,
		ModalFooterComponent,
		OverlayComponent
	],
	providers: [
		ModalService
	],
	entryComponents: [
		ModalComponent,
		ModalFooterComponent,
		ModalHeaderComponent
	],
	exports: [
		ModalPlaceholderComponent,
		ModalComponent,
		ModalHeaderComponent,
		ModalFooterComponent
	]
})
export class ModalModule { }
