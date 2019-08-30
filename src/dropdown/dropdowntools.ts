import { Observable, fromEvent } from "rxjs";
import { debounceTime, map, filter } from "rxjs/operators";

/**
 * returns an observable bound to keydown events that
 * filters to a single element where the first letter of
 * it's textContent matches the key pressed
 *
 * @param target element to watch
 * @param elements elements to search
 */
export function watchFocusJump(target: HTMLElement, elements): Observable<HTMLElement> {
	return fromEvent(target, "keydown")
		.pipe(
			debounceTime(150),
			map((ev: KeyboardEvent) => {
				let el = elements.find((itemEl) =>
					itemEl.textContent.trim().toLowerCase().startsWith(ev.key));
				if (el) { return el; }
			}),
			filter(el => !!el)
		);
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
