import {
	NgModule,
	NgZone,
	Optional,
	SkipSelf
} from "@angular/core";
import { AnimationFrameService, AnimationFrameServiceSingleton } from "./animation-frame.service";
import { ElementService } from "./element.service";
import { EventService } from "./event.service";
import { DocumentService } from "./document.service";

/**
 * Returns the parent `DocumentService` instance if one exists, otherwise creates a new one.
 *
 * @deprecated as of v6 - `DocumentService` is `providedIn: "root"` and no longer needs to be provided manually.
 */
export function DOCUMENT_SERVICE_PROVIDER_FACTORY(parentService: DocumentService) {
	return parentService || new DocumentService();
}

/**
 * Ensures a single `DocumentService` instance so document level events are handled once.
 *
 * @deprecated as of v6 - `DocumentService` is `providedIn: "root"` and no longer needs to be provided manually.
 */
export const DOCUMENT_SERVICE_PROVIDER = {
	provide: DocumentService,
	deps: [[new Optional(), new SkipSelf(), DocumentService]],
	useFactory: DOCUMENT_SERVICE_PROVIDER_FACTORY
};

/**
 * Returns the parent `AnimationFrameServiceSingleton` instance if one exists, otherwise creates a new one.
 *
 * `ngZone` is kept for backwards compatibility; the service injects `NgZone` itself.
 *
 * @deprecated as of v6 - `AnimationFrameServiceSingleton` is `providedIn: "root"` and no longer needs to be provided manually.
 */
export function ANIMATION_FRAME_SERVICE_SINGLETON_PROVIDER_FACTORY(parentService: AnimationFrameServiceSingleton, ngZone?: NgZone) {
	return parentService || new AnimationFrameServiceSingleton();
}

/**
 * Ensures a single `AnimationFrameServiceSingleton` so there is only one `requestAnimationFrame` loop.
 *
 * @deprecated as of v6 - `AnimationFrameServiceSingleton` is `providedIn: "root"` and no longer needs to be provided manually.
 */
export const ANIMATION_FRAME_SERVICE_SINGLETON_PROVIDER = {
	provide: AnimationFrameServiceSingleton,
	deps: [[new Optional(), new SkipSelf(), AnimationFrameServiceSingleton], NgZone],
	useFactory: ANIMATION_FRAME_SERVICE_SINGLETON_PROVIDER_FACTORY
};

@NgModule({
	providers: [
		AnimationFrameService,
		ElementService,
		EventService
	]
})
export class UtilsModule {}
