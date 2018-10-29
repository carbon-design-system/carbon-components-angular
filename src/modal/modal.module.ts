// modules
import {
	NgModule,
	Optional,
	SkipSelf
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { StaticIconModule } from "./../icon/static-icon.module";

// imports
import { ModalPlaceholder } from "./modal-placeholder.component";
import { ModalService } from "./modal.service";
import { ModalPlaceholderService } from "./modal-placeholder.service";
import { Modal } from "./modal.component";
import { ModalFooter } from "./modal-footer.component";
import { Overlay } from "./overlay.component";
import { ModalHeader } from "./modal-header.component";
import { AlertModal } from "./alert-modal.component";
import { ButtonModule } from "../forms/forms.module";
import { I18nModule } from "./../i18n/i18n.module";

// exports
export { default as Modal } from "./modal.decorator";
export { ModalService } from "./modal.service";
export * from "./alert-modal.interface";

// either provides a new instance of ModalPlaceholderService, or returns the parent
export function MODAL_PLACEHOLDER_SERVICE_PROVIDER_FACTORY(parentService: ModalPlaceholderService) {
	return parentService || new ModalPlaceholderService();
}

// placholder service *must* be a singleton to ensure the placeholder viewref is accessible globally
export const MODAL_PLACEHOLDER_SERVICE_PROVIDER = {
	provide: ModalPlaceholderService,
	deps: [[new Optional(), new SkipSelf(), ModalPlaceholderService]],
	useFactory: MODAL_PLACEHOLDER_SERVICE_PROVIDER_FACTORY
};

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
	providers: [
		// a new modal service should be instantiated each time since in (for example) lazy loaded
		// modules a new ComponentFactoryResolver is required to resolve any newly loaded modules
		ModalService,
		MODAL_PLACEHOLDER_SERVICE_PROVIDER
	],
	imports: [
		CommonModule,
		ButtonModule,
		StaticIconModule,
		I18nModule
	]
})
export class ModalModule { }
