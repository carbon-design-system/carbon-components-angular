import { Injectable, OnDestroy } from "@angular/core";
import { Observable, fromEvent, Subscription } from "rxjs";
import { DocumentService } from "./document.service";

export type EventHandler = (event: Event) => void;

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

@Injectable()
export class EventService implements OnDestroy {
	protected subscriptions = new Subscription();

	protected targets = new WeakMap<HTMLElement | Element | Document, Map<string, Observable<Event>>>();

	constructor(protected documentService: DocumentService) {}

	on(targetElement: HTMLElement | Element, eventType: string, callback: EventHandler) {
		if (!this.targets.has(targetElement)) {
			this.targets.set(targetElement, new Map());
		}

		const eventMap = this.targets.get(targetElement);

		if (!eventMap.has(eventType)) {
			eventMap.set(eventType, getEventObservable(targetElement, eventType));
		}

		const subscription = eventMap.get(eventType).subscribe(callback);
		this.subscriptions.add(subscription);
	}

	onDocument(eventType: string, callback: EventHandler) {
		this.documentService.handleEvent(eventType, callback);
	}

	ngOnDestroy() {
		this.subscriptions.unsubscribe();
	}
}
