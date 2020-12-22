export function clone(obj) {
	return JSON.parse(JSON.stringify(obj));
}

function matchesAttr(el, attr, val) {
	const styles = window.getComputedStyle(el);
	return val.includes(styles[attr]);
}

export function closestAttr(s, t, element) {
	let el = element;

	if (!element) {
		return null;
	}

	do {
		if (matchesAttr(el, s, t)) {
			return el;
		}
		el = el.parentElement || el.parentNode;
	} while (el !== null && el.nodeType === 1);
	return null;
}
