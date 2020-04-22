import { NgModule } from "@angular/core";
import {
	AnimationFrameService,
	AnimationFrameServiceSingleton
} from "./animation-frame.service";
import { ElementService } from "./element.service";
import { EventService } from "./event.service";
import { DocumentService } from "./document.service";

@NgModule({
	providers: [
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
	ElementService,
	DocumentService,
	EventService
};
