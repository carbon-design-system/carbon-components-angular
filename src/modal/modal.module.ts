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
import { ButtonModule } from "carbon-components-angular/forms/index";
import { I18nModule } from "carbon-components-angular/i18n/index";
import { PlaceholderModule } from "carbon-components-angular/placeholder/index";
import { ExperimentalModule } from "carbon-components-angular/experimental/experimental.module";
import { ModalContent } from "./modal-content.directive";
import { ModalContentText } from "./modal-content-text.directive";
import { ModalHeaderHeading } from "./modal-header-heading.directive";
import { ModalHeaderLabel } from "./modal-header-label.directive";

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
		ModalHeaderLabel
	],
	exports: [
		AlertModal,
		Modal,
		ModalHeader,
		ModalFooter,
		ModalContent,
		ModalContentText,
		ModalHeaderHeading,
		ModalHeaderLabel
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
