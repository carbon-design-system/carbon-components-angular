// modules
import {
	NgModule,
	Optional,
	SkipSelf
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { StaticIconModule } from "./../icon/static-icon.module";

// imports
import { ModalPlaceholderComponent } from "./modal-placeholder.component";
import { ModalService } from "./modal.service";
import { ModalComponent } from "./modal.component";
import { ModalFooterComponent } from "./modal-footer.component";
import { OverlayComponent } from "./overlay.component";
import { ModalHeaderComponent } from "./modal-header.component";
import { AlertModalComponent } from "./alert-modal.component";
import { ButtonModule } from "../forms/forms.module";
import { I18nModule } from "./../i18n/i18n.module";
import { PlaceholderModule } from "./../placeholder/placeholder.module";

// exports
export { default as Modal } from "./modal.decorator";
export { ModalService } from "./modal.service";
export * from "./alert-modal.interface";
export * from "./base-modal.class";

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
	providers: [ ModalService ],
	imports: [
		CommonModule,
		ButtonModule,
		StaticIconModule,
		I18nModule,
		PlaceholderModule
	]
})
export class ModalModule { }
