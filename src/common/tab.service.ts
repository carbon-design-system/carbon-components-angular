export let tabbableSelector = "a[href], area[href], input:not([disabled]):not([tabindex=\'-1\']), " +
		"button:not([disabled]):not([tabindex=\'-1\']),select:not([disabled]):not([tabindex=\'-1\']), " +
		"textarea:not([disabled]):not([tabindex=\'-1\']), " +
		"iframe, object, embed, *[tabindex]:not([tabindex=\'-1\']), *[contenteditable=true]";

export let tabbableSelectorIgnoreTabIndex = "a[href], area[href], input:not([disabled]), " +
		"button:not([disabled]),select:not([disabled]), " +
		"textarea:not([disabled]), " +
		"iframe, object, embed, *[tabindex], *[contenteditable=true]";

export function getFocusElementList(element, selector = tabbableSelector) {
	let elements = element.querySelectorAll(selector);
	return elements ? Array.prototype.filter.call(elements, el => isVisible(el)) : elements;
}

export function isFocusInFirstItem(event, list) {
	if (list.length > 0) {
		return (event.target || event.srcElement) === list[0];
	}
	return false;
}

export function isFocusInLastItem(event, list) {
	if (list.length > 0) {
		return (event.target || event.srcElement) === list[list.length - 1];
	}
	return false;
}

export function isElementFocused(event, element) {
	return (event.target || event.srcElement) === element;
}

export function focusFirstFocusableElement(list) {
	if (list.length > 0) {
		list[0].focus();
		return true;
	}
	return false;
}

export function focusLastFocusableElement(list) {
	if (list.length > 0) {
		list[list.length - 1].focus();
		return true;
	}
	return false;
}

export function isVisible(element) {
	return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
}

export function cycleTabs(event, element) {
	if (event.key === "Tab") {
		let list = getFocusElementList(element);
		let focusChanged = false;

		if (event.shiftKey) {
			if (isFocusInFirstItem(event, list) || isElementFocused(event, element)) {
				focusChanged = focusLastFocusableElement(list);
			}
		} else {
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
