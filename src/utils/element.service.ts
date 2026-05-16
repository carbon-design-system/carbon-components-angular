import { Injectable, inject } from "@angular/core";
import { Observable, from } from "rxjs";
import { map } from "rxjs/operators";
import { getScrollableParents, isVisibleInContainer } from "./scroll";
import { AnimationFrameServiceSingleton } from "./animation-frame.service";
import { ElementVisibilityEvent } from "./element.types";

@Injectable()
export class ElementService {
	protected singleton = inject(AnimationFrameServiceSingleton);

	protected tick: Observable<number>;

	/** Inserted by Angular inject() migration for backwards compatibility */
	// eslint-disable-next-line @angular-eslint/prefer-inject -- backwards-compatible DI overload until next major
	constructor(...args: unknown[]);

	constructor() {
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
