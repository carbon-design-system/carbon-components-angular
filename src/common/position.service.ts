/**
 * Used (mostly) internally to position things to places.
 *
 * @export
 * @class Positioning
 */
export class Positioning {
	/**
	 * Gets computed style of element's prop
	 *
	 * @param {HTMLElement} element
	 * @param {string} prop
	 * @returns {string}
	 * @memberof Positioning
	 */
	public getStyle(element: HTMLElement, prop: string): string { return window.getComputedStyle(element)[prop]; }

	/**
	 * Checks if element is statically positioned
	 *
	 * @param {HTMLElement} element
	 * @returns {boolean}
	 * @memberof Positioning
	 */
	public isStaticPositioned(element: HTMLElement): boolean {
		return (this.getStyle(element, "position") || "static") === "static";
	}

	/**
	 * Gets the `offsetParent` of an element.
	 *
	 * @param {HTMLElement} element
	 * @returns {HTMLElement}
	 * @memberof Positioning
	 */
	public offsetParent(element: HTMLElement): HTMLElement {
		let offsetParentEl = <HTMLElement>element.offsetParent || document.documentElement;

		while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
			offsetParentEl = <HTMLElement>offsetParentEl.offsetParent;
		}

		return offsetParentEl || document.documentElement;
	}

	/**
	 * Calculates and returns element's position
	 *
	 * @param {HTMLElement} element
	 * @param {boolean} [round=true]
	 * @returns {ClientRect}
	 * @memberof Positioning
	 */
	position(element: HTMLElement, round = true): ClientRect {
		let elPosition: ClientRect;
		let parentOffset: ClientRect = {width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0};

		if (this.getStyle(element, "position") === "fixed") {
			elPosition = element.getBoundingClientRect();
		} else {
			const offsetParentEl = this.offsetParent(element);

			elPosition = this.offset(element, false);

			if (offsetParentEl !== document.documentElement) {
				parentOffset = this.offset(offsetParentEl, false);
			}

			parentOffset.top += offsetParentEl.clientTop;
			parentOffset.left += offsetParentEl.clientLeft;
		}

		elPosition.top -= parentOffset.top;
		elPosition.bottom -= parentOffset.top;
		elPosition.left -= parentOffset.left;
		elPosition.right -= parentOffset.left;

		if (round) {
			elPosition.top = Math.round(elPosition.top);
			elPosition.bottom = Math.round(elPosition.bottom);
			elPosition.left = Math.round(elPosition.left);
			elPosition.right = Math.round(elPosition.right);
		}

		return elPosition;
	}

	/**
	 * Calculates and returns element's offset
	 *
	 * @param {HTMLElement} element
	 * @param {boolean} [round=true]
	 * @returns {ClientRect}
	 * @memberof Positioning
	 */
	offset(element: HTMLElement, round = true): ClientRect {
		let bodyOffsetLeft = 0;

		const elBcr = element.getBoundingClientRect();
		const body = window.document.querySelector("body");
		const viewportOffset = {
			top: window.pageYOffset - document.documentElement.clientTop,
			left: window.pageXOffset - document.documentElement.clientLeft
		};

		if (this.getStyle(body, "position") === "relative") {
			bodyOffsetLeft = body.getBoundingClientRect().left;
		}

		let elOffset = {
			height: elBcr.height || element.offsetHeight,
			width: elBcr.width || element.offsetWidth,
			top: elBcr.top + viewportOffset.top,
			bottom: elBcr.bottom + viewportOffset.top,
			left: elBcr.left + viewportOffset.left - bodyOffsetLeft,
			right: elBcr.right + viewportOffset.left
		};

		if (round) {
			elOffset.height = Math.round(elOffset.height);
			elOffset.width = Math.round(elOffset.width);
			elOffset.top = Math.round(elOffset.top);
			elOffset.bottom = Math.round(elOffset.bottom);
			elOffset.left = Math.round(elOffset.left - bodyOffsetLeft);
			elOffset.right = Math.round(elOffset.right);
		}

		return elOffset;
	}

	/**
	 * Calculates and returns element's target position
	 *
	 * @param {HTMLElement} hostElement
	 * @param {HTMLElement} targetElement
	 * @param {string} placement
	 * `"auto"` | `"top"` | `"bottom"` | `"left"` | `"right"` | `"center"` |
	 * `"top-left"` | `"top-right"` | `"bottom-left"` | `"bottom-right"`
	 * @param {boolean} [appendToBody]
	 * Optional.
	 *
	 * Set to `true` if you're calculating a position of an element you're
	 * appending to body.
	 * @param {number} [gap]
	 * *Optional.*
	 *
	 * Adds this amount of pixels to the position to create a gap.
	 * @param {number} [offsetTop]
	 * *Optional.*
	 *
	 * Manually set the top offset in pixels.
	 * @param {boolean} [isPopover]
	 * *Optional.*
	 *
	 * Set to `true` in case of popover.
	 * @param {boolean} [isPopoverFilter]
	 * *Optional.*
	 *
	 * Set to `true` in case of popover filter.
	 * @returns {ClientRect}
	 * @memberof Positioning
	 */
	positionElements(hostElement: HTMLElement, targetElement: HTMLElement, placement: string,
		appendToBody?: boolean, gap?: number, offsetTop?: number, isPopover?: boolean, isPopoverFilter?: boolean):
	ClientRect {
		const hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
		let shiftWidth: any = {
			left: hostElPosition.left - targetElement.clientWidth,
			center: hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2,
			right: hostElPosition.left + hostElPosition.width
		};
		if (isPopover) {
			// popover requires slightly different positioning diagonally
			shiftWidth["left"] = hostElPosition.left + 10;
			if (placement !== "right") {
				shiftWidth["right"] = hostElPosition.left + hostElPosition.width - targetElement.clientWidth - 10;
			}
		}

		const shiftHeight: any = {
			top: hostElPosition.top,
			center: hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2,
			bottom: hostElPosition.top + hostElPosition.height
		};

		const targetElBCR = targetElement.getBoundingClientRect();
		const placementPrimary = placement.split("-")[0] || "top";
		const placementSecondary = placement.split("-")[1] || "center";

		let targetElPosition: ClientRect = {
			height: targetElBCR.height || targetElement.offsetHeight,
			width: targetElBCR.width || targetElement.offsetWidth,
			top: 0,
			bottom: targetElBCR.height || targetElement.offsetHeight,
			left: 0,
			right: targetElBCR.width || targetElement.offsetWidth
		};

		let placeToPosition: Function = function(position) {
			switch (position) {
				case "top":
					targetElPosition.top = hostElPosition.top - targetElement.offsetHeight - gap;
					targetElPosition.bottom += hostElPosition.top - targetElement.offsetHeight + gap;
					targetElPosition.left = shiftWidth[placementSecondary];
					targetElPosition.right += shiftWidth[placementSecondary];
					break;
				case "bottom":
					targetElPosition.top = shiftHeight[position] + gap;
					targetElPosition.bottom += shiftHeight[position] - gap;
					targetElPosition.left = shiftWidth[placementSecondary];
					targetElPosition.right += shiftWidth[placementSecondary];
					break;
				case "left":
					if (offsetTop) {
						targetElPosition.top = hostElPosition.top - offsetTop;
					} else {
						targetElPosition.top = shiftHeight[placementSecondary];
						targetElPosition.bottom += shiftHeight[placementSecondary];
					}

					if (isPopoverFilter) {
						// needs to be position so title is in line with element that requested it
						targetElPosition.top = hostElPosition.top - hostElPosition.height / 2 - 3;  // it's magic
					}

					targetElPosition.left = hostElPosition.left - targetElement.offsetWidth - gap;
					targetElPosition.right += hostElPosition.left - targetElement.offsetWidth + gap;

					break;
				case "right":
					if (offsetTop) {
						targetElPosition.top = hostElPosition.top - offsetTop;
					} else {
						targetElPosition.top = shiftHeight[placementSecondary];
						targetElPosition.bottom += shiftHeight[placementSecondary];
					}

					if (isPopoverFilter) {
						// needs to be positioned so title is in line with element that requested it
						targetElPosition.top = hostElPosition.top - hostElPosition.height / 2 - 3;  // it's magic
					}

					targetElPosition.left = shiftWidth[position] + gap;
					targetElPosition.right += shiftWidth[position] - gap;
					break;
				case "auto":
					let place = "top";
					if ( targetElPosition.height + gap < hostElPosition.top &&
						( targetElPosition.width / 2 - hostElPosition.left - hostElPosition.width / 2 ) < 0 ) {
						place = "top";
					} else if ( targetElPosition.height + gap + hostElPosition.top + hostElPosition.height > window.innerHeight &&
						( targetElPosition.width / 2 - hostElPosition.left - hostElPosition.width / 2 ) < 0 ) {
						place = "bottom";
					} else if (hostElPosition.left - (targetElPosition.width + gap) > 0) {
						place = "left";
					} else if (hostElPosition.left + hostElPosition.width + targetElPosition.width + gap < window.innerWidth) {
						place = "right";
					}

					placeToPosition(place);
					targetElement.querySelector(".popover").classList.add(place);
					break;
			}
		};

		placeToPosition(placementPrimary);

		targetElPosition.top = Math.round(targetElPosition.top);
		targetElPosition.bottom = Math.round(targetElPosition.bottom);
		targetElPosition.left = Math.round(targetElPosition.left);
		targetElPosition.right = Math.round(targetElPosition.right);

		return targetElPosition;
	}
}

const positionService = new Positioning();
export function positionElements(
		hostElement: HTMLElement,
		targetElement: HTMLElement,
		placement: string,
		appendToBody?: boolean,
		gap?: number,
		offsetTop?: number,
		isPopover?: boolean,
		isPopoverFilter?: boolean): void {
	const pos = positionService.positionElements(
		hostElement,
		targetElement,
		placement,
		appendToBody,
		gap,
		offsetTop,
		isPopover,
		isPopoverFilter
	);

	targetElement.style.top = `${pos.top}px`;
	targetElement.style.left = `${pos.left}px`;
}
