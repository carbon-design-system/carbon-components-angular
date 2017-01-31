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
export function HcModeChecker(){
	let colorTest = "rgb(255, 0, 0)";

	var htmlChecker = document.createElement("div");
	htmlChecker.classList.add('hc-checker');
	document.body.appendChild(htmlChecker);

	if(window.getComputedStyle(htmlChecker).backgroundColor.toString() !== colorTest){
		document.body.classList.add('a11y');
	}
	document.body.removeChild(htmlChecker);

}
