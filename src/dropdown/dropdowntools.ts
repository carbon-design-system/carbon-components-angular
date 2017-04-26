import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/fromEvent";
import "rxjs/add/operator/debounceTime";

export function focusJump(target: HTMLElement, elements): void {
	Observable.fromEvent(target, "keydown")
		.debounceTime(150)
		.subscribe((ev: KeyboardEvent) => {
			let el = elements.find((itemEl) =>
				itemEl.textContent.trim().toLowerCase().startsWith(ev.key));
			if (el) { el.focus(); }
		});
}