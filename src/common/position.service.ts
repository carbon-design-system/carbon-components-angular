/**
 * Utilites to manipulate the position of elements relative to other elements
 *
 * @export
 */

export type Position =
	"left" | "right" | "top" | "bottom" | "top-left" | "top-right" | "bottom-left" | "bottom-right"  | "left-bottom" | "right-bottom";

export interface AbsolutePosition {
	top: number;
	left: number;
	position?: AbsolutePosition;
}

function getAbsoluteOffset(target) {
	let offsets = {
		left: 0,
		top: 0
	};
	// get each static (i.e. not absolute or relative) offsetParent and sum the left/right offsets
	while (target.offsetParent && getComputedStyle(target).position === "static") {
		offsets.left += target.offsetLeft;
		offsets.top += target.offsetTop;
		target = target.offsetParent;
	}
	console.log(offsets);
	return offsets;
}

export namespace position {
	// finds the position relative to the `reference` element
	export function findRelative(reference: HTMLElement, toPosition: HTMLElement, position: Position): AbsolutePosition {
		let referenceOffset = getAbsoluteOffset(reference);
		// calculate offsets for a given position
		switch (position) {
			case "left":
				return {
					top: referenceOffset.top - Math.round(toPosition.offsetHeight / 2) + Math.round(reference.offsetHeight / 2),
					left: Math.round(referenceOffset.left - toPosition.offsetWidth)
				};
			case "right":
				return {
					top: referenceOffset.top - Math.round(toPosition.offsetHeight / 2) + Math.round(reference.offsetHeight / 2),
					left: Math.round(referenceOffset.left  + reference.offsetWidth)
				};
			case "top":
				return {
					top: Math.round(referenceOffset.top - toPosition.offsetHeight),
					left: referenceOffset.left - Math.round(toPosition.offsetWidth / 2) + Math.round(reference.offsetWidth / 2),
				};
			case "bottom":
				return {
					top: Math.round(referenceOffset.top + reference.offsetHeight),
					left: referenceOffset.left - Math.round(toPosition.offsetWidth / 2) + Math.round(reference.offsetWidth / 2),
				};
			case "left-bottom":
				return {
					// 22 == half of popover header height
					top: referenceOffset.top - 22 + Math.round(reference.offsetHeight / 2),
					left: Math.round(referenceOffset.left - toPosition.offsetWidth)
				};
			case "right-bottom":
				return {
					top: referenceOffset.top - 22 + Math.round(reference.offsetHeight / 2),
					left: Math.round(referenceOffset.left  + reference.offsetWidth)
				};
			case "bottom-left":
				return {
					top: referenceOffset.top + reference.offsetHeight,
					left: referenceOffset.left + reference.offsetWidth - toPosition.offsetWidth
				};
			case "bottom-right":
				return {
					top: referenceOffset.top + reference.offsetHeight,
					left: referenceOffset.left
				};
		}
		// default to auto position
		/**
		* if (top > windowTop || containerTop) - position to the bottom
		* if (top > windowBottom || containerBottom) - position to the top
		* if (left > windowLeft || containerLeft) - position to the right
		* if (left > windowRight || containerRight) - position to the left
		*/
		if (reference.offsetTop - toPosition.offsetHeight < 0) {
			findRelative(reference, toPosition, "bottom");
		} else if (reference.offsetHeight + reference.offsetTop + toPosition.offsetHeight > window.innerHeight) {
			findRelative(reference, toPosition, "top");
		} else if (reference.offsetLeft - toPosition.offsetWidth < 0) {
			findRelative(reference, toPosition, "right");
		} else if (reference.offsetLeft + reference.offsetWidth + toPosition.offsetWidth > window.innerWidth) {
			findRelative(reference, toPosition, "left");
		}
		return findRelative(reference, toPosition, "left");
	}

	/** check if the placement is within the window. right now only handles top/left/bottom/right */
	export function checkPlacement(reference: HTMLElement, toPosition: HTMLElement, position: Position): {newPlacement: Position} {
		if (reference.offsetTop - toPosition.offsetHeight < 0) {
			return { newPlacement: "bottom" };
		} else if (reference.offsetHeight + reference.offsetTop + toPosition.offsetHeight > window.innerHeight) {
			return { newPlacement: "top" };
		} else if (reference.offsetLeft - toPosition.offsetWidth < 0) {
			return { newPlacement: "right" };
		} else if (reference.offsetLeft + reference.offsetWidth + toPosition.offsetWidth > window.innerWidth) {
			return { newPlacement: "left" };
		}
		return { newPlacement: position };
	}

	export function addOffset(position: AbsolutePosition, top = 0, left = 0): AbsolutePosition {
		return Object.assign({}, position, {
			top: position.top + top,
			left: position.left + left,
		});
	}

	export function setElement(element: HTMLElement, position: AbsolutePosition): void {
		element.style.top = `${position.top}px`;
		element.style.left = `${position.left}px`;
	}
}

export default position;
