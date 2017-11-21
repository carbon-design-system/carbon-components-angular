/**
 * Utilites to manipulate the position of elements relative to other elements
 *
 * @export
 */

// possible positions ... this should probably be moved (along with some other types) to some central location
export type Position =
	"left" | "right" | "top" | "bottom" | "top-left" | "top-right" | "bottom-left" | "bottom-right"  | "left-bottom" | "right-bottom";

export interface AbsolutePosition {
	top: number;
	left: number;
	position?: AbsolutePosition;
}

export type Offset = { left: number, top: number };

function calculatePosition(referenceOffset: Offset, reference: HTMLElement, toPosition: HTMLElement, position: Position): AbsolutePosition {
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
				left: Math.round(referenceOffset.left + reference.offsetWidth)
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
				left: Math.round(referenceOffset.left + reference.offsetWidth)
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
}

export namespace position {
	export function getRelativeOffset(target: HTMLElement): Offset {
		// start with the inital element offsets
		let offsets = {
			left: target.offsetLeft,
			top: target.offsetTop
		};
		// get each static (i.e. not absolute or relative) offsetParent and sum the left/right offsets
		while (target.offsetParent && getComputedStyle(target.offsetParent).position === "static") {
			offsets.left += target.offsetLeft;
			offsets.top += target.offsetTop;
			target = target.offsetParent as HTMLElement;
		}
		return offsets;
	}

	export function getAbsoluteOffset(target: HTMLElement): Offset {
		return {
			top: target.getBoundingClientRect().top,
			left: target.getBoundingClientRect().left
		};
	}

	// finds the position relative to the `reference` element
	export function findRelative(reference: HTMLElement, toPosition: HTMLElement, position: Position): AbsolutePosition {
		const referenceOffset = getRelativeOffset(reference);
		return calculatePosition(referenceOffset, reference, toPosition, position);
	}

	export function findAbsolute(reference: HTMLElement, toPosition: HTMLElement, position: Position): AbsolutePosition {
		const referenceOffset = getAbsoluteOffset(reference);
		return calculatePosition(referenceOffset, reference, toPosition, position);
	}

	export function findPosition(reference: HTMLElement,
		toPosition: HTMLElement,
		position: Position,
		offsetFunction = getRelativeOffset): AbsolutePosition {
		const referenceOffset = offsetFunction(reference);
		return calculatePosition(referenceOffset, reference, toPosition, position);
	}

	/** check if the placement is within the window. right now only handles top/left/bottom/right */
	export function checkPlacement(reference: HTMLElement, toPosition: HTMLElement, position: Position): {newPlacement: Position} {
		/**
		* if (top > windowTop || containerTop) - position to the bottom
		* if (top > windowBottom || containerBottom) - position to the top
		* if (left > windowLeft || containerLeft) - position to the right
		* if (left > windowRight || containerRight) - position to the left
		*/
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
