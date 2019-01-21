/**
 * Utilites to manipulate the position of elements relative to other elements
 *
 */

import { getScrollbarWidth } from "./window-tools";

// possible positions ... this should probably be moved (along with some other types) to some central location
export type Placement =
	"left" | "right" | "top" | "bottom" | "top-left" | "top-right" | "bottom-left" | "bottom-right" | "left-bottom" | "right-bottom";

export interface AbsolutePosition {
	top: number;
	left: number;
	position?: AbsolutePosition;
}

export type Offset = { left: number, top: number };

function calculatePosition(referenceOffset: Offset, reference: HTMLElement, target: HTMLElement, placement: Placement): AbsolutePosition {
	// calculate offsets for a given position
	const referenceRect = reference.getBoundingClientRect();
	switch (placement) {
		case "left":
			return {
				top: referenceOffset.top - Math.round(target.offsetHeight / 2) + Math.round(referenceRect.height / 2),
				left: Math.round(referenceOffset.left - target.offsetWidth)
			};
		case "right":
			return {
				top: referenceOffset.top - Math.round(target.offsetHeight / 2) + Math.round(referenceRect.height / 2),
				left: Math.round(referenceOffset.left + referenceRect.width)
			};
		case "top":
			return {
				top: Math.round(referenceOffset.top - target.offsetHeight),
				left: referenceOffset.left - Math.round(target.offsetWidth / 2) + Math.round(referenceRect.width / 2)
			};
		case "bottom":
			return {
				top: Math.round(referenceOffset.top + referenceRect.height),
				left: referenceOffset.left - Math.round(target.offsetWidth / 2) + Math.round(referenceRect.width / 2)
			};
		case "left-bottom":
			return {
				// 22 == half of popover header height
				top: referenceOffset.top - 22 + Math.round(referenceRect.height / 2),
				left: Math.round(referenceOffset.left - target.offsetWidth)
			};
		case "right-bottom":
			return {
				top: referenceOffset.top - 22 + Math.round(referenceRect.height / 2),
				left: Math.round(referenceOffset.left + referenceRect.width)
			};
		// matter currently doesn't support these, so the popover is broken anyway
		case "top-left":
			return {
				top: 0,
				left: 0
			};
		case "top-right":
			return {
				top: 0,
				left: 0
			};
		case "bottom-left":
			return {
				top: referenceOffset.top + referenceRect.height,
				left: referenceOffset.left + referenceRect.width - target.offsetWidth
			};
		case "bottom-right":
			return {
				top: referenceOffset.top + referenceRect.height,
				left: referenceOffset.left
			};
	}
}

export namespace position {
	export function getRelativeOffset(target: HTMLElement): Offset {
		// start with the initial element offsets
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
		let positionedElement;
		let currentNode = target;
		let margins = {
			top: 0,
			left: 0
		};

		// searches either for a parent `positionedElement` or for
		// containing elements with additional margins
		// once we have a `positionedElement` we can stop searching
		// since we use offsetParent we end up skipping most elements
		while (currentNode.offsetParent && !positionedElement) {
			const computed = getComputedStyle(currentNode.offsetParent);
			if (computed.position !== "static") {
				positionedElement = currentNode.offsetParent;
			}

			// find static elements with additional margins
			// since they tend to throw off our positioning
			// (usually this is just the body)
			if (
				computed.position === "static" &&
				computed.marginLeft &&
				computed.marginTop
			) {
				if (parseInt(computed.marginTop, 10)) {
					margins.top += parseInt(computed.marginTop, 10);
				}
				if (parseInt(computed.marginLeft, 10)) {
					margins.left += parseInt(computed.marginLeft, 10);
				}
			}

			currentNode = currentNode.offsetParent as HTMLElement;
		}

		// if we don't find any `relativeElement` on our walk
		// default to the body
		if (!positionedElement) {
			positionedElement = document.body;
		}

		const targetRect = target.getBoundingClientRect();
		const relativeRect = positionedElement.getBoundingClientRect();
		return {
			top: targetRect.top - relativeRect.top + margins.top,
			left: targetRect.left - relativeRect.left + margins.left
		};
	}

	// finds the position relative to the `reference` element
	export function findRelative(reference: HTMLElement, target: HTMLElement, placement: Placement): AbsolutePosition {
		const referenceOffset = getRelativeOffset(reference);
		return calculatePosition(referenceOffset, reference, target, placement);
	}

	export function findAbsolute(reference: HTMLElement, target: HTMLElement, placement: Placement): AbsolutePosition {
		const referenceOffset = getAbsoluteOffset(reference);
		return calculatePosition(referenceOffset, reference, target, placement);
	}

	export function findPosition(reference: HTMLElement,
		target: HTMLElement,
		placement: Placement,
		offsetFunction = getRelativeOffset): AbsolutePosition {
		const referenceOffset = offsetFunction(reference);
		return calculatePosition(referenceOffset, reference, target, placement);
	}

	/**
	 * Get the dimensions of the dialog from an AbsolutePosition and a reference element
	 */
	export function getPlacementBox(target: HTMLElement, position: AbsolutePosition) {
		const targetBottom = target.offsetHeight + position.top;
		const targetRight = target.offsetWidth + position.left;

		return {
			top: position.top,
			bottom: targetBottom,
			left: position.left,
			right: targetRight
		};
	}

	export function addOffset(position: AbsolutePosition, top = 0, left = 0): AbsolutePosition {
		return Object.assign({}, position, {
			top: position.top + top,
			left: position.left + left
		});
	}

	export function setElement(element: HTMLElement, position: AbsolutePosition): void {
		element.style.top = `${position.top}px`;
		element.style.left = `${position.left}px`;
	}
}

export default position;
