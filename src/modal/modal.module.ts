// modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Close16Module } from "@carbon/icons-angular/lib/close/16";

// imports
import { ModalPlaceholder } from "./modal-placeholder.component";
import { ModalService } from "./modal.service";
import { Modal } from "./modal.component";
import { ModalFooter } from "./modal-footer.component";
import { Overlay } from "./overlay.component";
import { ModalHeader } from "./modal-header.component";
import { AlertModal } from "./alert-modal.component";
import { ButtonModule } from "../forms/index";
import { I18nModule } from "./../i18n/index";
import { PlaceholderModule } from "./../placeholder/index";
import { ExperimentalModule } from "./../experimental.module";

@NgModule({
	declarations: [
		AlertModal,
		ModalPlaceholder,
		Modal,
		ModalHeader,
		ModalFooter,
		Overlay
	],
	exports: [
		AlertModal,
		ModalPlaceholder,
		Modal,
		ModalHeader,
		ModalFooter
	],
	entryComponents: [
		AlertModal,
		Modal,
		ModalFooter,
		ModalHeader
	],
	providers: [ ModalService ],
	imports: [
		CommonModule,
		ButtonModule,
		I18nModule,
		PlaceholderModule,
		ExperimentalModule,
		Close16Module
	]
})
export class ModalModule { }
