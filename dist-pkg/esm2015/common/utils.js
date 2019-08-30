/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export { getScrollbarWidth } from "./../utils/window-tools";
/**
 * Does what python's `range` function does, with a slightly different
 * signature because of Typescript limitations.
 *
 * Useful for numbered loops in angular templates, since we can do
 * a normal for loop.
 *
 * @export
 * @param {?} stop Generate numbers up to, but not including this number
 * @param {?=} start
 * @param {?=} step
 * @return {?} an array with resulting numbers
 */
export function range(stop, start = 0, step = 1) {
    return Array(Math.ceil((stop - start) / step)).fill(0).map((x, i) => i * step + start);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJib24tY29tcG9uZW50cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsiY29tbW9uL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxrQ0FBYyx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFleEMsTUFBTSxnQkFBZ0IsSUFBWSxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUM7SUFDdEQsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDO0NBQ3ZGIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4vLi4vdXRpbHMvd2luZG93LXRvb2xzXCI7XG5cbi8qKlxuICogRG9lcyB3aGF0IHB5dGhvbidzIGByYW5nZWAgZnVuY3Rpb24gZG9lcywgd2l0aCBhIHNsaWdodGx5IGRpZmZlcmVudFxuICogc2lnbmF0dXJlIGJlY2F1c2Ugb2YgVHlwZXNjcmlwdCBsaW1pdGF0aW9ucy5cbiAqXG4gKiBVc2VmdWwgZm9yIG51bWJlcmVkIGxvb3BzIGluIGFuZ3VsYXIgdGVtcGxhdGVzLCBzaW5jZSB3ZSBjYW4gZG9cbiAqIGEgbm9ybWFsIGZvciBsb29wLlxuICpcbiAqIEBleHBvcnRcbiAqIEBwYXJhbSBzdG9wIEdlbmVyYXRlIG51bWJlcnMgdXAgdG8sIGJ1dCBub3QgaW5jbHVkaW5nIHRoaXMgbnVtYmVyXG4gKiBAcGFyYW0gW3N0YXJ0PTBdIFN0YXJ0aW5nIG51bWJlciBvZiB0aGUgc2VxdWVuY2VcbiAqIEBwYXJhbSBbc3RlcD0xXSBEaWZmZXJlbmNlIGJldHdlZW4gZWFjaCBudW1iZXIgaW4gdGhlIHNlcXVlbmNlXG4gKiBAcmV0dXJucyBhbiBhcnJheSB3aXRoIHJlc3VsdGluZyBudW1iZXJzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByYW5nZShzdG9wOiBudW1iZXIsIHN0YXJ0ID0gMCwgc3RlcCA9IDEpIHtcblx0cmV0dXJuIEFycmF5KE1hdGguY2VpbCgoc3RvcCAtIHN0YXJ0KSAvIHN0ZXApKS5maWxsKDApLm1hcCgoeCwgaSkgPT4gaSAqIHN0ZXAgKyBzdGFydCk7XG59XG4iXX0=