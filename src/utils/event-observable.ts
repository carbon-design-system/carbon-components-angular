import { Observable, fromEvent } from "rxjs";

export const getEventObservable = (targetElement: HTMLElement | Element, eventType: string): Observable<Event> => {
	switch (eventType) {
		case "scroll":
		case "resize":
		case "touchstart":
		case "touchmove":
		case "touchend":
			return fromEvent(targetElement, eventType, { passive: true });
		default:
			return fromEvent(targetElement, eventType);
	}
};
