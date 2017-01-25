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
