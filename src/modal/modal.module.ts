// modules
import {
	NgModule,
	ComponentFactoryResolver,
	Optional,
	SkipSelf
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { StaticIcon, StaticIconModule } from "./../icon/static-icon.module";

// imports
import { ModalPlaceholderComponent } from "./modal-placeholder.component";
import { ModalService } from "./modal.service";
import { ModalPlaceholderService } from "./modal-placeholder.service";
import { ModalComponent } from "./modal.component";
import { ModalFooterComponent } from "./modal-footer.component";
import { OverlayComponent } from "./overlay.component";
import { ModalHeaderComponent } from "./modal-header.component";
import { AlertModalComponent } from "./alert-modal.component";
import { ButtonModule } from "../forms/forms.module";

// exports
export { default as Modal } from "./modal.decorator";
export { ModalService } from "./modal.service";

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
		AlertModalComponent,
		ModalPlaceholderComponent,
		ModalComponent,
		ModalHeaderComponent,
		ModalFooterComponent,
		OverlayComponent
	],
	exports: [
		AlertModalComponent,
		ModalPlaceholderComponent,
		ModalComponent,
		ModalHeaderComponent,
		ModalFooterComponent
	],
	entryComponents: [
		AlertModalComponent,
		ModalComponent,
		ModalFooterComponent,
		ModalHeaderComponent
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
		TranslateModule,
		StaticIconModule
	]
})
export class ModalModule { }
