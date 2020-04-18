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
	// If there exists `height: 100%` on the `html` or `body` tag of an application,
	// it causes the calculation to return true if you need to scroll before the element is seen.
	// In that case we calculate its visibility based on the window viewport.
	if (container.tagName === "BODY" || container.tagName === "HTML") {
		// This checks if element is within the top, bottom, left and right of viewport, ie. if the element is visible in
		// the screen. This also takes into account partial visibility of an element.
		const isAboveViewport = elementRect.top < 0 && (elementRect.top + element.clientHeight) < 0;
		const isLeftOfViewport = elementRect.left < 0;
		const isBelowViewport =
			(elementRect.bottom - element.clientHeight) > (window.innerHeight || document.documentElement.clientHeight);
		const isRightOfViewport = elementRect.right > (window.innerWidth || document.documentElement.clientWidth);

		const isVisibleInViewport = !(isAboveViewport || isBelowViewport || isLeftOfViewport || isRightOfViewport);

		return isVisibleInViewport;
	}
	return (
		// This also accounts for partial visibility. It will still return true if the element is partially visible inside the container.
		(elementRect.bottom - element.clientHeight) <= (containerRect.bottom + (container.offsetHeight - container.clientHeight) / 2) &&
		elementRect.top >= (- element.clientHeight)
	);
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

export const hasScrollableParents = (node: HTMLElement) => {
	while (node.parentElement && node !== document.body) {
		if (isScrollableElement(node)) {
			return true;
		}
		node = node.parentElement;
	}
	return false;
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
