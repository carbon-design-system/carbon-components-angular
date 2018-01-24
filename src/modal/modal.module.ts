// modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StaticIcon, StaticIconModule } from "./../icon/static-icon.module";

// imports
import { ModalPlaceholderComponent } from "./modal-placeholder.component";
import { ModalService } from "./modal.service";
import { ModalComponent } from "./modal.component";
import { ModalFooterComponent } from "./modal-footer.component";
import { OverlayComponent } from "./overlay.component";
import { ModalHeaderComponent } from "./modal-header.component";

// exports
export { default as Modal } from "./modal.decorator";
export { ModalService } from "./modal.service";

@NgModule({
	declarations: [
		ModalPlaceholderComponent,
		ModalComponent,
		ModalHeaderComponent,
		ModalFooterComponent,
		OverlayComponent
	],
	exports: [
		ModalPlaceholderComponent,
		ModalComponent,
		ModalHeaderComponent,
		ModalFooterComponent
	],
	entryComponents: [
		ModalComponent,
		ModalFooterComponent,
		ModalHeaderComponent
	],
	providers: [
		ModalService
	],
	imports: [
		CommonModule,
		StaticIconModule
	]
})
export class ModalModule { }
