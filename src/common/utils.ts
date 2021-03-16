/**
 * Does what python's `range` function does, with a slightly different
 * signature because of Typescript limitations.
 *
 * Useful for numbered loops in angular templates, since we can do
 * a normal for loop.
 *
 * @export
 * @param stop Generate numbers up to, but not including this number
 * @param [start=0] Starting number of the sequence
 * @param [step=1] Difference between each number in the sequence
 * @returns an array with resulting numbers
 */
export function range(stop: number, start = 0, step = 1) {
	return Array(Math.ceil((stop - start) / step)).fill(0).map((x, i) => i * step + start);
}
