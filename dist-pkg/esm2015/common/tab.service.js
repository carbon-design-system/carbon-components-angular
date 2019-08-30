/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @type {?} */
export let tabbableSelector = "a[href], area[href], input:not([disabled]):not([tabindex=\'-1\']), " +
    "button:not([disabled]):not([tabindex=\'-1\']),select:not([disabled]):not([tabindex=\'-1\']), " +
    "textarea:not([disabled]):not([tabindex=\'-1\']), " +
    "iframe, object, embed, *[tabindex]:not([tabindex=\'-1\']), *[contenteditable=true]";
/** @type {?} */
export let tabbableSelectorIgnoreTabIndex = "a[href], area[href], input:not([disabled]), " +
    "button:not([disabled]),select:not([disabled]), " +
    "textarea:not([disabled]), " +
    "iframe, object, embed, *[tabindex], *[contenteditable=true]";
/**
 * @param {?} element
 * @param {?=} selector
 * @return {?}
 */
export function getFocusElementList(element, selector = tabbableSelector) {
    /** @type {?} */
    let elements = element.querySelectorAll(selector);
    return elements ? Array.prototype.filter.call(elements, el => isVisible(el)) : elements;
}
/**
 * @param {?} event
 * @param {?} list
 * @return {?}
 */
export function isFocusInFirstItem(event, list) {
    if (list.length > 0) {
        return (event.target || event.srcElement) === list[0];
    }
    return false;
}
/**
 * @param {?} event
 * @param {?} list
 * @return {?}
 */
export function isFocusInLastItem(event, list) {
    if (list.length > 0) {
        return (event.target || event.srcElement) === list[list.length - 1];
    }
    return false;
}
/**
 * @param {?} event
 * @param {?} element
 * @return {?}
 */
export function isElementFocused(event, element) {
    return (event.target || event.srcElement) === element;
}
/**
 * @param {?} list
 * @return {?}
 */
export function focusFirstFocusableElement(list) {
    if (list.length > 0) {
        list[0].focus();
        return true;
    }
    return false;
}
/**
 * @param {?} list
 * @return {?}
 */
export function focusLastFocusableElement(list) {
    if (list.length > 0) {
        list[list.length - 1].focus();
        return true;
    }
    return false;
}
/**
 * @param {?} element
 * @return {?}
 */
export function isVisible(element) {
    return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
}
/**
 * @param {?} event
 * @param {?} element
 * @return {?}
 */
export function cycleTabs(event, element) {
    if (event.key === "Tab") {
        /** @type {?} */
        let list = getFocusElementList(element);
        /** @type {?} */
        let focusChanged = false;
        if (event.shiftKey) {
            if (isFocusInFirstItem(event, list) || isElementFocused(event, element)) {
                focusChanged = focusLastFocusableElement(list);
            }
        }
        else {
            if (isFocusInLastItem(event, list)) {
                focusChanged = focusFirstFocusableElement(list);
            }
        }
        if (focusChanged) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJib24tY29tcG9uZW50cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsiY29tbW9uL3RhYi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsV0FBVyxnQkFBZ0IsR0FBRyxxRUFBcUU7SUFDakcsK0ZBQStGO0lBQy9GLG1EQUFtRDtJQUNuRCxvRkFBb0YsQ0FBQzs7QUFFdkYsV0FBVyw4QkFBOEIsR0FBRyw4Q0FBOEM7SUFDeEYsaURBQWlEO0lBQ2pELDRCQUE0QjtJQUM1Qiw2REFBNkQsQ0FBQzs7Ozs7O0FBRWhFLE1BQU0sOEJBQThCLE9BQU8sRUFBRSxRQUFRLEdBQUcsZ0JBQWdCOztJQUN2RSxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0NBQ3hGOzs7Ozs7QUFFRCxNQUFNLDZCQUE2QixLQUFLLEVBQUUsSUFBSTtJQUM3QyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ3BCLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDdEQ7SUFDRCxPQUFPLEtBQUssQ0FBQztDQUNiOzs7Ozs7QUFFRCxNQUFNLDRCQUE0QixLQUFLLEVBQUUsSUFBSTtJQUM1QyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ3BCLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztLQUNwRTtJQUNELE9BQU8sS0FBSyxDQUFDO0NBQ2I7Ozs7OztBQUVELE1BQU0sMkJBQTJCLEtBQUssRUFBRSxPQUFPO0lBQzlDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxPQUFPLENBQUM7Q0FDdEQ7Ozs7O0FBRUQsTUFBTSxxQ0FBcUMsSUFBSTtJQUM5QyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ3BCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNoQixPQUFPLElBQUksQ0FBQztLQUNaO0lBQ0QsT0FBTyxLQUFLLENBQUM7Q0FDYjs7Ozs7QUFFRCxNQUFNLG9DQUFvQyxJQUFJO0lBQzdDLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUIsT0FBTyxJQUFJLENBQUM7S0FDWjtJQUNELE9BQU8sS0FBSyxDQUFDO0NBQ2I7Ozs7O0FBRUQsTUFBTSxvQkFBb0IsT0FBTztJQUNoQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLElBQUksT0FBTyxDQUFDLFlBQVksSUFBSSxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7Q0FDMUY7Ozs7OztBQUVELE1BQU0sb0JBQW9CLEtBQUssRUFBRSxPQUFPO0lBQ3ZDLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxLQUFLLEVBQUU7O1FBQ3hCLElBQUksSUFBSSxHQUFHLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDOztRQUN4QyxJQUFJLFlBQVksR0FBRyxLQUFLLENBQUM7UUFFekIsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ25CLElBQUksa0JBQWtCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLGdCQUFnQixDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsRUFBRTtnQkFDeEUsWUFBWSxHQUFHLHlCQUF5QixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQy9DO1NBQ0Q7YUFBTTtZQUNOLElBQUksaUJBQWlCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFO2dCQUNuQyxZQUFZLEdBQUcsMEJBQTBCLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDaEQ7U0FDRDtRQUVELElBQUksWUFBWSxFQUFFO1lBQ2pCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDeEI7S0FDRDtDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGxldCB0YWJiYWJsZVNlbGVjdG9yID0gXCJhW2hyZWZdLCBhcmVhW2hyZWZdLCBpbnB1dDpub3QoW2Rpc2FibGVkXSk6bm90KFt0YWJpbmRleD1cXCctMVxcJ10pLCBcIiArXG5cdFx0XCJidXR0b246bm90KFtkaXNhYmxlZF0pOm5vdChbdGFiaW5kZXg9XFwnLTFcXCddKSxzZWxlY3Q6bm90KFtkaXNhYmxlZF0pOm5vdChbdGFiaW5kZXg9XFwnLTFcXCddKSwgXCIgK1xuXHRcdFwidGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pOm5vdChbdGFiaW5kZXg9XFwnLTFcXCddKSwgXCIgK1xuXHRcdFwiaWZyYW1lLCBvYmplY3QsIGVtYmVkLCAqW3RhYmluZGV4XTpub3QoW3RhYmluZGV4PVxcJy0xXFwnXSksICpbY29udGVudGVkaXRhYmxlPXRydWVdXCI7XG5cbmV4cG9ydCBsZXQgdGFiYmFibGVTZWxlY3Rvcklnbm9yZVRhYkluZGV4ID0gXCJhW2hyZWZdLCBhcmVhW2hyZWZdLCBpbnB1dDpub3QoW2Rpc2FibGVkXSksIFwiICtcblx0XHRcImJ1dHRvbjpub3QoW2Rpc2FibGVkXSksc2VsZWN0Om5vdChbZGlzYWJsZWRdKSwgXCIgK1xuXHRcdFwidGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pLCBcIiArXG5cdFx0XCJpZnJhbWUsIG9iamVjdCwgZW1iZWQsICpbdGFiaW5kZXhdLCAqW2NvbnRlbnRlZGl0YWJsZT10cnVlXVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9jdXNFbGVtZW50TGlzdChlbGVtZW50LCBzZWxlY3RvciA9IHRhYmJhYmxlU2VsZWN0b3IpIHtcblx0bGV0IGVsZW1lbnRzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblx0cmV0dXJuIGVsZW1lbnRzID8gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKGVsZW1lbnRzLCBlbCA9PiBpc1Zpc2libGUoZWwpKSA6IGVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNGb2N1c0luRmlyc3RJdGVtKGV2ZW50LCBsaXN0KSB7XG5cdGlmIChsaXN0Lmxlbmd0aCA+IDApIHtcblx0XHRyZXR1cm4gKGV2ZW50LnRhcmdldCB8fCBldmVudC5zcmNFbGVtZW50KSA9PT0gbGlzdFswXTtcblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0ZvY3VzSW5MYXN0SXRlbShldmVudCwgbGlzdCkge1xuXHRpZiAobGlzdC5sZW5ndGggPiAwKSB7XG5cdFx0cmV0dXJuIChldmVudC50YXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudCkgPT09IGxpc3RbbGlzdC5sZW5ndGggLSAxXTtcblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VsZW1lbnRGb2N1c2VkKGV2ZW50LCBlbGVtZW50KSB7XG5cdHJldHVybiAoZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnQpID09PSBlbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9jdXNGaXJzdEZvY3VzYWJsZUVsZW1lbnQobGlzdCkge1xuXHRpZiAobGlzdC5sZW5ndGggPiAwKSB7XG5cdFx0bGlzdFswXS5mb2N1cygpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvY3VzTGFzdEZvY3VzYWJsZUVsZW1lbnQobGlzdCkge1xuXHRpZiAobGlzdC5sZW5ndGggPiAwKSB7XG5cdFx0bGlzdFtsaXN0Lmxlbmd0aCAtIDFdLmZvY3VzKCk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNWaXNpYmxlKGVsZW1lbnQpIHtcblx0cmV0dXJuICEhKGVsZW1lbnQub2Zmc2V0V2lkdGggfHwgZWxlbWVudC5vZmZzZXRIZWlnaHQgfHwgZWxlbWVudC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjeWNsZVRhYnMoZXZlbnQsIGVsZW1lbnQpIHtcblx0aWYgKGV2ZW50LmtleSA9PT0gXCJUYWJcIikge1xuXHRcdGxldCBsaXN0ID0gZ2V0Rm9jdXNFbGVtZW50TGlzdChlbGVtZW50KTtcblx0XHRsZXQgZm9jdXNDaGFuZ2VkID0gZmFsc2U7XG5cblx0XHRpZiAoZXZlbnQuc2hpZnRLZXkpIHtcblx0XHRcdGlmIChpc0ZvY3VzSW5GaXJzdEl0ZW0oZXZlbnQsIGxpc3QpIHx8IGlzRWxlbWVudEZvY3VzZWQoZXZlbnQsIGVsZW1lbnQpKSB7XG5cdFx0XHRcdGZvY3VzQ2hhbmdlZCA9IGZvY3VzTGFzdEZvY3VzYWJsZUVsZW1lbnQobGlzdCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChpc0ZvY3VzSW5MYXN0SXRlbShldmVudCwgbGlzdCkpIHtcblx0XHRcdFx0Zm9jdXNDaGFuZ2VkID0gZm9jdXNGaXJzdEZvY3VzYWJsZUVsZW1lbnQobGlzdCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGZvY3VzQ2hhbmdlZCkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH1cblx0fVxufVxuIl19