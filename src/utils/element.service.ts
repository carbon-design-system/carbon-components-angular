import { Injectable } from "@angular/core";
import { Observable, from } from "rxjs";
import { map } from "rxjs/operators";
import { getScrollableParents, isVisibleInContainer } from "./scroll";
import { AnimationFrameServiceSingleton } from "./animation-frame.service";

export interface ElementVisibilityEvent {
	visible: boolean;
}

@Injectable()
export class ElementService {
	protected tick: Observable<number>;

	constructor(protected singleton: AnimationFrameServiceSingleton) {
		this.tick = from(this.singleton.tick);
	}

	visibility(target: HTMLElement, parentElement: HTMLElement = target): Observable<ElementVisibilityEvent> {
		const scrollableParents = getScrollableParents(parentElement);
		return this.tick.pipe(map(() => {
			for (const parent of scrollableParents) {
				if (!isVisibleInContainer(target, parent)) {
					return {
						visible: false
					};
				}
			}
			return {
				visible: true
			};
		}));
	}
}
