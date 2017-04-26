import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/fromEvent";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";

export function watchFocusJump(target: HTMLElement, elements): Observable<HTMLElement> {
	return Observable.fromEvent(target, "keydown")
		.debounceTime(150)
		.map((ev: KeyboardEvent) => {
			let el = elements.find((itemEl) =>
				itemEl.textContent.trim().toLowerCase().startsWith(ev.key));
			if (el) { return el; }
		})
		.filter(el => !!el);
}

export const treetools = {
	find: function(items, itemToFind, path = []) {
		let found;
		for (let i of items) {
			if (i === itemToFind) {
				path.push(i);
				found = i;
			}
			if (i.items && !found) {
				path.push(i);
				found = this.find(i.items, itemToFind, path).found;
				if (!found) { path = []; }
			}
		}
		return {found, path};
	}
};