import { NgModule, Optional, SkipSelf, NgZone } from "@angular/core";
import {
	AnimationFrameService,
	AnimationFrameServiceSingleton
} from "./animation-frame.service";
import { ElementService } from "./element.service";
import { EventService } from "./event.service";
import { DocumentService } from "./document.service";

// either provides a new instance of DocumentService, or returns the parent
export function DOCUMENT_SERVICE_PROVIDER_FACTORY(parentService: DocumentService) {
	return parentService || new DocumentService();
}

// DocumentService *must* be a singleton to ensure that we handle events and other document level settings once (and only once)
export const DOCUMENT_SERVICE_PROVIDER = {
	provide: DocumentService,
	deps: [[new Optional(), new SkipSelf(), DocumentService]],
	useFactory: DOCUMENT_SERVICE_PROVIDER_FACTORY
};

// either provides a new instance of AnimationFrameServiceSingleton, or returns the parent
export function ANIMATION_FRAME_SERVICE_SINGLETON_PROVIDER_FACTORY(parentService: AnimationFrameServiceSingleton, ngZone: NgZone) {
	return parentService || new AnimationFrameServiceSingleton(ngZone);
}

// AnimationFrameServiceSingleton is a singleton so we don't have a ton of duplicate RAFs firing (better for scheduling)
export const ANIMATION_FRAME_SERVICE_SINGLETON_PROVIDER = {
	provide: AnimationFrameServiceSingleton,
	deps: [[new Optional(), new SkipSelf(), AnimationFrameServiceSingleton], NgZone],
	useFactory: ANIMATION_FRAME_SERVICE_SINGLETON_PROVIDER_FACTORY
};

@NgModule({
	providers: [
		DOCUMENT_SERVICE_PROVIDER,
		ANIMATION_FRAME_SERVICE_SINGLETON_PROVIDER,
		AnimationFrameServiceSingleton,
		DocumentService,
		AnimationFrameService,
		ElementService,
		EventService
	]
})
export class UtilsModule { }
