function findSiblingElem(target, direction: "nextElementSibling" | "previousElementSibling") {
	if (target[direction]) {
		if (target[direction].classList.contains("disabled")) {
			return findSiblingElem(target[direction], direction);
		}
		return target[direction];
	}
}

export function findNextElem(target) {
	return findSiblingElem(target, "nextElementSibling");
}

export function findPrevElem(target) {
	return findSiblingElem(target, "previousElementSibling");
}

// check for Hight contrast mode
export function HcModeChecker() {
	let colorTest = "rgb(255, 0, 0)";
	let htmlChecker = document.createElement("div");

	htmlChecker.classList.add("hc-checker");
	document.body.appendChild(htmlChecker);

	if (window.getComputedStyle(htmlChecker).backgroundColor.toString() !== colorTest) {
		document.body.classList.add("a11y");
	}
	document.body.removeChild(htmlChecker);
}

export function focusNextTree(elem, rootElem = null) {
	if (elem) {
		let focusable = elem.querySelector("[tabindex='0']");

		if (focusable) {
			focusable.focus();
		} else {
			focusNextElem(elem, rootElem);
		}
	}
}

export function focusNextElem(elem, rootElem = null) {
	if (elem) {
		let nextElem = elem.nextElementSibling;

		if (nextElem) {
			let focusableElem = nextElem.querySelector("[tabindex='0']");

			if (focusableElem) {
				focusableElem.focus();
			} else {
				focusNextElem(nextElem, rootElem);
			}
		} else {
			if (rootElem) {
				let nextRootElem = rootElem.nextElementSibling;

				if (nextRootElem) {
					focusNextTree(nextRootElem, rootElem);
				}
			}
		}
	}
}

export function focusPrevElem(elem, parentRef = null) {
	if (elem) {
		let prevElem = elem.previousElementSibling;

		if (prevElem) {
			let focusableElem = prevElem.querySelector("[tabindex='0']");
			if (focusableElem) {

				if (focusableElem.getAttribute("aria-expanded") === "true") {
					let lastFocElms = prevElem.querySelectorAll("[tabindex='0']");
					let arrLen = lastFocElms.length - 1;
					for (let i = arrLen; i >= 0; i--) {
						if (!!(lastFocElms[i].offsetWidth || lastFocElms[i].offsetHeight ||
							lastFocElms[i].getClientRects().length)) {
							focusableElem = lastFocElms[i];
							break;
						}
					}
				}
				focusableElem.focus();
			} else {
				focusPrevElem(prevElem, parentRef);
			}
		} else {
			if (parentRef) {
				parentRef.querySelector("[tabindex='0']").focus();
			}
		}
	}
}
