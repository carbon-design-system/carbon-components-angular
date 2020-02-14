import { NgModule, Optional, SkipSelf, NgZone } from "@angular/core";
import {
	AnimationFrameService,
	AnimationFrameServiceSingleton
} from "./animation-frame.service";
import { ElementService } from "./element.service";

// either provides a new instance of AnimationFrameServiceSingleton, or returns the parent
export function ANIMATION_FRAME_SERVICE_SINGLETON_PROVIDER_FACTORY(parentService: AnimationFrameServiceSingleton, ngZone: NgZone) {
	return parentService || new AnimationFrameServiceSingleton(ngZone);
}

export const ANIMATION_FRAME_SERVICE_SINGLETON_PROVIDER = {
	provide: AnimationFrameServiceSingleton,
	deps: [[new Optional(), new SkipSelf(), AnimationFrameServiceSingleton], NgZone],
	useFactory: ANIMATION_FRAME_SERVICE_SINGLETON_PROVIDER_FACTORY
};

@NgModule({
	providers: [
		ANIMATION_FRAME_SERVICE_SINGLETON_PROVIDER,
		AnimationFrameServiceSingleton,
		AnimationFrameService,
		ElementService
	]
}) class UtilsModule { }

export {
	UtilsModule,
	AnimationFrameService,
	AnimationFrameServiceSingleton,
	ElementService
};
