let _scrollbarWidth = -1;

export function getScrollbarWidth() {
	// lets not recreate this whole thing every time
	if (_scrollbarWidth >= 0) {
		return _scrollbarWidth;
	}

	// do the calculations the first time
	const outer = document.createElement("div");
	outer.style.visibility = "hidden";
	outer.style.width = "100px";
	outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

	document.body.appendChild(outer);

	const widthNoScroll = outer.offsetWidth;
	// force scrollbars
	outer.style.overflow = "scroll";

	// add innerdiv
	const inner = document.createElement("div");
	inner.style.width = "100%";
	outer.appendChild(inner);

	const widthWithScroll = inner.offsetWidth;

	// remove divs
	outer.parentNode.removeChild(outer);

	_scrollbarWidth = widthNoScroll - widthWithScroll;
	return _scrollbarWidth;
}

/**
 * Does what python's `range` function does, with a slightly different
 * signature because of Typescript limitations.
 *
 * Useful for numbered loops in angular templates, since we can do
 * a normal for loop.
 *
 * @export
 * @param {number} stop Generate numbers up to, but not including this number
 * @param {number} [start=0] Starting number of the sequence
 * @param {number} [step=1] Difference between each number in the sequence
 * @returns and array with resulting numbers
 */
export function range(stop: number, start = 0, step = 1) {
	return Array(Math.ceil((stop - start) / step)).fill(0).map((x, i) => i * step + start);
}
