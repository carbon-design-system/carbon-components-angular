export {
	HcModeChecker,
	findNextElem,
	findPrevElem,
	focusNextElem,
	focusNextTree,
	focusPrevElem
} from "./a11y";
export { AnimationFrameService, AnimationFrameServiceSingleton } from "./animation-frame.service";
export { merge } from "./object";
export {
	PLACEMENTS,
	Position,
	defaultPositions,
	position
} from "./position";
export {
	getScrollableParents,
	hasScrollableParents,
	isScrollableElement,
	isVisibleInContainer,
	scrollableParentsObservable
} from "./scroll";
export {
	clone,
	closestAttr
} from "./utils";
export {
	ANIMATION_FRAME_SERVICE_SINGLETON_PROVIDER,
	ANIMATION_FRAME_SERVICE_SINGLETON_PROVIDER_FACTORY,
	DOCUMENT_SERVICE_PROVIDER,
	DOCUMENT_SERVICE_PROVIDER_FACTORY,
	UtilsModule
} from "./utils.module";
export { getScrollbarWidth } from "./window-tools";
export { ElementService } from "./element.service";
export { ElementVisibilityEvent } from "./element.types";
export { EventService } from "./event.service";
export { getEventObservable } from "./event-observable";
export { EventHandler } from "./types";
export { DocumentService } from "./document.service";
