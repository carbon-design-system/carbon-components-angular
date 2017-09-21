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
	right,
	top,
	bottom
}

export namespace position {
	// finds the position relative to the `reference` element
	export function findRelative(reference: HTMLElement, toPosition: HTMLElement, position: Positions = Positions.auto): AbsolutePosition {
		let referenceRect = reference.getBoundingClientRect();
		// calculate offsets for a given position
		switch (position) {
			case Positions.left:
				return {
					top: referenceRect.top - Math.round(toPosition.offsetHeight / 2) + Math.round(referenceRect.height / 2),
					left: referenceRect.left - toPosition.offsetWidth
				};
			case Positions.right:
				return {
					top: referenceRect.top - Math.round(toPosition.offsetHeight / 2) + Math.round(referenceRect.height / 2),
					left: referenceRect.left  + referenceRect.width
				};
			case Positions.top:
				return {
					top: referenceRect.top - toPosition.offsetHeight,
					left: referenceRect.left - Math.round(toPosition.offsetWidth / 2) + Math.round(referenceRect.width / 2),
				};
			case Positions.bottom:
				return {
					top: referenceRect.top + referenceRect.height,
					left: referenceRect.left - Math.round(toPosition.offsetWidth / 2) + Math.round(referenceRect.width / 2),
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
