/**
 * Checks if a given element is scrollable.
 * If the element has an overflow set as part of its computed style it can scroll.
 * @param element the element to check scrollability
 */
export declare const isScrollableElement: (element: HTMLElement) => boolean;
/**
 * Checks if an element is visible within a container
 * @param element the element to check
 * @param container the container to check
 */
export declare const isVisibleInContainer: (element: HTMLElement, container: HTMLElement) => boolean;
/**
 * Returns an observable that emits whenever any scrollable parent element scrolls
 *
 * @param node root element to start finding scrolling parents from
 */
export declare const scrollableParentsObservable: (node: HTMLElement) => import("../../../../../../../Users/cal/Sites/carbon/carbon-components-angular/node_modules/rxjs/internal/Observable").Observable<Event>;
