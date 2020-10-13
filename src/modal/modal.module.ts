// modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CloseModule } from "@carbon/icons-angular";

// imports
import { ModalService } from "./modal.service";
import { Modal } from "./modal.component";
import { ModalFooter } from "./modal-footer.component";
import { Overlay } from "./overlay.component";
import { ModalHeader } from "./modal-header.component";
import { AlertModal } from "./alert-modal.component";
import { ButtonModule } from "carbon-components-angular/forms";
import { I18nModule } from "carbon-components-angular/i18n";
import { PlaceholderModule } from "carbon-components-angular/placeholder";
import { ExperimentalModule } from "carbon-components-angular/experimental";
import { ModalContent } from "./modal-content.directive";
import { ModalContentText } from "./modal-content-text.directive";
import { ModalHeaderHeading } from "./modal-header-heading.directive";
import { ModalHeaderLabel } from "./modal-header-label.directive";
import { BaseModal } from "./base-modal.class";

@NgModule({
	declarations: [
		AlertModal,
		Modal,
		ModalHeader,
		ModalFooter,
		Overlay,
		ModalContent,
		ModalContentText,
		ModalHeaderHeading,
		ModalHeaderLabel,
		BaseModal
	],
	exports: [
		AlertModal,
		Modal,
		ModalHeader,
		ModalFooter,
		ModalContent,
		ModalContentText,
		ModalHeaderHeading,
		ModalHeaderLabel,
		BaseModal
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
		CloseModule
	]
})
export class ModalModule { }
