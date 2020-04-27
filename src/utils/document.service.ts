import { Injectable, OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { EventHandler } from "./types";
import { getEventObservable } from "./event-observable";

@Injectable()
export class DocumentService implements OnDestroy {
	protected globalEvents = new Map<string, Observable<Event>>();

	protected documentRef = document;

	protected subscriptions = new Subscription();

	handleEvent(eventType: string, callback: EventHandler) {
		if (!this.globalEvents.has(eventType)) {
			if (this.documentRef) {
				this.globalEvents.set(eventType, getEventObservable(this.documentRef as any, eventType));
			} else {
				this.globalEvents.set(eventType, new Observable());
			}
		}
		const observable = this.globalEvents.get(eventType);
		this.subscriptions.add(observable.subscribe(callback));
	}

	handleClick(callback: EventHandler) {
		this.handleEvent("click", callback);
	}

	ngOnDestroy() {
		this.subscriptions.unsubscribe();
		this.globalEvents = null;
	}
}
