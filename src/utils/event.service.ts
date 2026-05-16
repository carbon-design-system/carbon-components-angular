import { Injectable, OnDestroy, inject } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { DocumentService } from "./document.service";
import { EventHandler } from "./types";
import { getEventObservable } from "./event-observable";

@Injectable()
export class EventService implements OnDestroy {
	protected documentService = inject(DocumentService);

	protected subscriptions = new Subscription();

	protected targets = new WeakMap<HTMLElement | Element | Document, Map<string, Observable<Event>>>();

	/** Inserted by Angular inject() migration for backwards compatibility */
	// eslint-disable-next-line @angular-eslint/prefer-inject -- backwards-compatible DI overload until next major
	constructor(...args: unknown[]);

	constructor() {}

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
