/**
 * Utilites to manipulate the position of elements relative to other elements
 *
 * @export
 */

export interface AbsolutePosition {
	top: number;
	left: number;
}

export enum Positions {
	auto,
	left,
	leftBottom,
	right,
	rightBottom,
	top,
	topLeft,
	topRight,
	bottom,
	bottomLeft,
	bottomRight
}

function getAbsoluteOffset(target) {
	let offsets = {
		left: 0,
		top: 0
	};
	while (target.offsetParent) {
		offsets.left += target.offsetLeft;
		offsets.top += target.offsetTop;
		target = target.offsetParent;
	}
	return offsets;
}

export namespace position {
	// finds the position relative to the `reference` element
	export function findRelative(reference: HTMLElement, toPosition: HTMLElement, position: Positions = Positions.auto): AbsolutePosition {
		let referenceRect = reference.getBoundingClientRect();
		let referenceOffset = getAbsoluteOffset(reference);
		// calculate offsets for a given position
		switch (position) {
			case Positions.left:
				return {
					top: referenceOffset.top - Math.round(toPosition.offsetHeight / 2) + Math.round(reference.offsetHeight / 2),
					left: Math.round(referenceOffset.left - toPosition.offsetWidth)
				};
			case Positions.right:
				return {
					top: referenceOffset.top - Math.round(toPosition.offsetHeight / 2) + Math.round(reference.offsetHeight / 2),
					left: Math.round(referenceOffset.left  + reference.offsetWidth)
				};
			case Positions.top:
				return {
					top: Math.round(referenceOffset.top - toPosition.offsetHeight),
					left: referenceOffset.left - Math.round(toPosition.offsetWidth / 2) + Math.round(reference.offsetWidth / 2),
				};
			case Positions.bottom:
				return {
					top: Math.round(referenceOffset.top + reference.offsetHeight),
					left: referenceOffset.left - Math.round(toPosition.offsetWidth / 2) + Math.round(reference.offsetWidth / 2),
				};
		}
		// default to auto position
		/**
		* if (top > windowTop || containerTop) - position to the bottom
		* if (top > windowBottom || containerBottom) - position to the top
		* if (left > windowLeft || containerLeft) - position to the right
		* if (left > windowRight || containerRight) - position to the left
		*/
		return {top: 0, left: 0};
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
