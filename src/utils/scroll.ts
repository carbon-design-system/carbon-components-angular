import { map } from "rxjs/operators";
import { fromEvent, merge, Observable } from "rxjs";


/**
 * Checks if a given element is scrollable.
 * If the element has an overflow set as part of its computed style it can scroll.
 * @param element the element to check scrollability
 */
export const isScrollableElement = (element: HTMLElement) => {
	const computedStyle = getComputedStyle(element);
	return (
		computedStyle.overflow === "auto" ||
		computedStyle.overflow === "scroll" ||
		computedStyle["overflow-y"] === "auto" ||
		computedStyle["overflow-y"] === "scroll" ||
		computedStyle["overflow-x"] === "auto" ||
		computedStyle["overflow-x"] === "scroll"
	);
};

/**
 * Checks if an element is visible within a container
 * @param element the element to check
 * @param container the container to check
 */
export const isVisibleInContainer = (element: HTMLElement, container: HTMLElement) => {
	const elementRect = element.getBoundingClientRect();
	const containerRect = container.getBoundingClientRect();
	return elementRect.bottom <= containerRect.bottom && elementRect.top >= containerRect.top;
};

export const getScrollableParents = (node: HTMLElement) => {
	const elements = [document.body];
	while (node.parentElement && node !== document.body) {
		if (isScrollableElement(node)) {
			elements.push(node);
		}
		node = node.parentElement;
	}
	return elements;
};

/**
 * Returns an observable that emits whenever any scrollable parent element scrolls
 *
 * @param node root element to start finding scrolling parents from
 */
export const scrollableParentsObservable = (node: HTMLElement): Observable<Event> => {
	const windowScroll = fromEvent(window, "scroll", { passive: true }).pipe(map(event => (
		// update the event target to be something useful. In this case `body` is a sensible replacement
		Object.assign({}, event, { target: document.body }) as Event
	)));
	let observables = [windowScroll];
	// walk the parents and subscribe to all the scroll events we can
	while (node.parentElement && node !== document.body) {
		if (isScrollableElement(node)) {
			observables.push(fromEvent(node, "scroll", { passive: true }));
		}
		node = node.parentElement;
	}

	return merge(...observables);
};
