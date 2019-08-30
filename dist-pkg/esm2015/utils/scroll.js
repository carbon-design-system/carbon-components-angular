/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { map } from "rxjs/operators";
import { fromEvent, merge } from "rxjs";
/** *
 * Checks if a given element is scrollable.
 * If the element has an overflow set as part of its computed style it can scroll.
 * \@param element the element to check scrollability
  @type {?} */
export const isScrollableElement = (element) => {
    /** @type {?} */
    const computedStyle = getComputedStyle(element);
    return (computedStyle.overflow === "auto" ||
        computedStyle.overflow === "scroll" ||
        computedStyle["overflow-y"] === "auto" ||
        computedStyle["overflow-y"] === "scroll" ||
        computedStyle["overflow-x"] === "auto" ||
        computedStyle["overflow-x"] === "scroll");
};
/** *
 * Checks if an element is visible within a container
 * \@param element the element to check
 * \@param container the container to check
  @type {?} */
export const isVisibleInContainer = (element, container) => {
    /** @type {?} */
    const elementRect = element.getBoundingClientRect();
    /** @type {?} */
    const containerRect = container.getBoundingClientRect();
    return elementRect.bottom <= containerRect.bottom && elementRect.top >= containerRect.top;
};
/** *
 * Returns an observable that emits whenever any scrollable parent element scrolls
 *
 * \@param node root element to start finding scrolling parents from
  @type {?} */
export const scrollableParentsObservable = (node) => {
    /** @type {?} */
    const windowScroll = fromEvent(window, "scroll").pipe(map(event => (/** @type {?} */ ((
    // update the event target to be something useful. In this case `body` is a sensible replacement
    Object.assign({}, event, { target: document.body }))))));
    /** @type {?} */
    let observables = [windowScroll];
    // walk the parents and subscribe to all the scroll events we can
    while (node.parentElement && node !== document.body) {
        if (isScrollableElement(node)) {
            observables.push(fromEvent(node, "scroll"));
        }
        node = node.parentElement;
    }
    return merge(...observables);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FyYm9uLWNvbXBvbmVudHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbInV0aWxzL3Njcm9sbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7Ozs7QUFReEMsYUFBYSxtQkFBbUIsR0FBRyxDQUFDLE9BQW9CLEVBQUUsRUFBRTs7SUFDM0QsTUFBTSxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEQsT0FBTyxDQUNOLGFBQWEsQ0FBQyxRQUFRLEtBQUssTUFBTTtRQUNqQyxhQUFhLENBQUMsUUFBUSxLQUFLLFFBQVE7UUFDbkMsYUFBYSxDQUFDLFlBQVksQ0FBQyxLQUFLLE1BQU07UUFDdEMsYUFBYSxDQUFDLFlBQVksQ0FBQyxLQUFLLFFBQVE7UUFDeEMsYUFBYSxDQUFDLFlBQVksQ0FBQyxLQUFLLE1BQU07UUFDdEMsYUFBYSxDQUFDLFlBQVksQ0FBQyxLQUFLLFFBQVEsQ0FDeEMsQ0FBQztDQUNGLENBQUM7Ozs7OztBQU9GLGFBQWEsb0JBQW9CLEdBQUcsQ0FBQyxPQUFvQixFQUFFLFNBQXNCLEVBQUUsRUFBRTs7SUFDcEYsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixFQUFFLENBQUM7O0lBQ3BELE1BQU0sYUFBYSxHQUFHLFNBQVMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ3hELE9BQU8sV0FBVyxDQUFDLE1BQU0sSUFBSSxhQUFhLENBQUMsTUFBTSxJQUFJLFdBQVcsQ0FBQyxHQUFHLElBQUksYUFBYSxDQUFDLEdBQUcsQ0FBQztDQUMxRixDQUFDOzs7Ozs7QUFPRixhQUFhLDJCQUEyQixHQUFHLENBQUMsSUFBaUIsRUFBRSxFQUFFOztJQUNoRSxNQUFNLFlBQVksR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztJQUNsRSxnR0FBZ0c7SUFDaEcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBVSxHQUM1RCxDQUFDLENBQUMsQ0FBQzs7SUFDSixJQUFJLFdBQVcsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDOztJQUVqQyxPQUFPLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxLQUFLLFFBQVEsQ0FBQyxJQUFJLEVBQUU7UUFDcEQsSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM5QixXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUM1QztRQUNELElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO0tBQzFCO0lBRUQsT0FBTyxLQUFLLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQztDQUM3QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlIH0gZnJvbSBcInJ4anNcIjtcblxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGdpdmVuIGVsZW1lbnQgaXMgc2Nyb2xsYWJsZS5cbiAqIElmIHRoZSBlbGVtZW50IGhhcyBhbiBvdmVyZmxvdyBzZXQgYXMgcGFydCBvZiBpdHMgY29tcHV0ZWQgc3R5bGUgaXQgY2FuIHNjcm9sbC5cbiAqIEBwYXJhbSBlbGVtZW50IHRoZSBlbGVtZW50IHRvIGNoZWNrIHNjcm9sbGFiaWxpdHlcbiAqL1xuZXhwb3J0IGNvbnN0IGlzU2Nyb2xsYWJsZUVsZW1lbnQgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcblx0Y29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG5cdHJldHVybiAoXG5cdFx0Y29tcHV0ZWRTdHlsZS5vdmVyZmxvdyA9PT0gXCJhdXRvXCIgfHxcblx0XHRjb21wdXRlZFN0eWxlLm92ZXJmbG93ID09PSBcInNjcm9sbFwiIHx8XG5cdFx0Y29tcHV0ZWRTdHlsZVtcIm92ZXJmbG93LXlcIl0gPT09IFwiYXV0b1wiIHx8XG5cdFx0Y29tcHV0ZWRTdHlsZVtcIm92ZXJmbG93LXlcIl0gPT09IFwic2Nyb2xsXCIgfHxcblx0XHRjb21wdXRlZFN0eWxlW1wib3ZlcmZsb3cteFwiXSA9PT0gXCJhdXRvXCIgfHxcblx0XHRjb21wdXRlZFN0eWxlW1wib3ZlcmZsb3cteFwiXSA9PT0gXCJzY3JvbGxcIlxuXHQpO1xufTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYW4gZWxlbWVudCBpcyB2aXNpYmxlIHdpdGhpbiBhIGNvbnRhaW5lclxuICogQHBhcmFtIGVsZW1lbnQgdGhlIGVsZW1lbnQgdG8gY2hlY2tcbiAqIEBwYXJhbSBjb250YWluZXIgdGhlIGNvbnRhaW5lciB0byBjaGVja1xuICovXG5leHBvcnQgY29uc3QgaXNWaXNpYmxlSW5Db250YWluZXIgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQsIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpID0+IHtcblx0Y29uc3QgZWxlbWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRjb25zdCBjb250YWluZXJSZWN0ID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRyZXR1cm4gZWxlbWVudFJlY3QuYm90dG9tIDw9IGNvbnRhaW5lclJlY3QuYm90dG9tICYmIGVsZW1lbnRSZWN0LnRvcCA+PSBjb250YWluZXJSZWN0LnRvcDtcbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIHRoYXQgZW1pdHMgd2hlbmV2ZXIgYW55IHNjcm9sbGFibGUgcGFyZW50IGVsZW1lbnQgc2Nyb2xsc1xuICpcbiAqIEBwYXJhbSBub2RlIHJvb3QgZWxlbWVudCB0byBzdGFydCBmaW5kaW5nIHNjcm9sbGluZyBwYXJlbnRzIGZyb21cbiAqL1xuZXhwb3J0IGNvbnN0IHNjcm9sbGFibGVQYXJlbnRzT2JzZXJ2YWJsZSA9IChub2RlOiBIVE1MRWxlbWVudCkgPT4ge1xuXHRjb25zdCB3aW5kb3dTY3JvbGwgPSBmcm9tRXZlbnQod2luZG93LCBcInNjcm9sbFwiKS5waXBlKG1hcChldmVudCA9PiAoXG5cdFx0Ly8gdXBkYXRlIHRoZSBldmVudCB0YXJnZXQgdG8gYmUgc29tZXRoaW5nIHVzZWZ1bC4gSW4gdGhpcyBjYXNlIGBib2R5YCBpcyBhIHNlbnNpYmxlIHJlcGxhY2VtZW50XG5cdFx0T2JqZWN0LmFzc2lnbih7fSwgZXZlbnQsIHsgdGFyZ2V0OiBkb2N1bWVudC5ib2R5IH0pIGFzIEV2ZW50XG5cdCkpKTtcblx0bGV0IG9ic2VydmFibGVzID0gW3dpbmRvd1Njcm9sbF07XG5cdC8vIHdhbGsgdGhlIHBhcmVudHMgYW5kIHN1YnNjcmliZSB0byBhbGwgdGhlIHNjcm9sbCBldmVudHMgd2UgY2FuXG5cdHdoaWxlIChub2RlLnBhcmVudEVsZW1lbnQgJiYgbm9kZSAhPT0gZG9jdW1lbnQuYm9keSkge1xuXHRcdGlmIChpc1Njcm9sbGFibGVFbGVtZW50KG5vZGUpKSB7XG5cdFx0XHRvYnNlcnZhYmxlcy5wdXNoKGZyb21FdmVudChub2RlLCBcInNjcm9sbFwiKSk7XG5cdFx0fVxuXHRcdG5vZGUgPSBub2RlLnBhcmVudEVsZW1lbnQ7XG5cdH1cblxuXHRyZXR1cm4gbWVyZ2UoLi4ub2JzZXJ2YWJsZXMpO1xufTtcbiJdfQ==