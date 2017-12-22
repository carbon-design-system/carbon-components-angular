import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/fromEvent";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";

/**
 * returns an observable bound to keydown events that
 * filters to a single element where the first letter of
 * it's textContent matches the key pressed
 *
 * @param {HTMLElement} target element to watch
 * @param {Array<HTMLElement>} elements elements to search
 * @returns {Observable<HTMLElement>}
 */
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

/** bundle of functions to aid in manipulating tree structures */
export const treetools = {
	/** finds an item in a set of items and returns the item and path to the item as an array */
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
