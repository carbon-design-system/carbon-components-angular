import { NgModule } from "@angular/core";
import {
	AnimationFrameService,
	AnimationFrameServiceSingleton,
	ANIMATION_FRAME_SERVICE_SINGLETON_PROVIDER,
	ANIMATION_FRAME_SERVICE_SINGLETON_PROVIDER_FACTORY
} from "./animation-frame.service";
import { ElementService } from "./element.service";
import { EventService } from "./event.service";
import { DocumentService } from "./document.service";

@NgModule({
	providers: [
		ANIMATION_FRAME_SERVICE_SINGLETON_PROVIDER,
		AnimationFrameServiceSingleton,
		AnimationFrameService,
		ElementService,
		EventService
	]
})
export class UtilsModule { }

export {
	AnimationFrameService,
	AnimationFrameServiceSingleton,
	ANIMATION_FRAME_SERVICE_SINGLETON_PROVIDER,
	ANIMATION_FRAME_SERVICE_SINGLETON_PROVIDER_FACTORY,
	ElementService,
	DocumentService,
	EventService
};
