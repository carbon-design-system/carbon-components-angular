/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @type {?} */
let _scrollbarWidth = -1;
/**
 * @return {?}
 */
export function getScrollbarWidth() {
    // lets not recreate this whole thing every time
    if (_scrollbarWidth >= 0) {
        return _scrollbarWidth;
    }
    /** @type {?} */
    const outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
    document.body.appendChild(outer);
    /** @type {?} */
    const widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = "scroll";
    /** @type {?} */
    const inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);
    /** @type {?} */
    const widthWithScroll = inner.offsetWidth;
    // remove divs
    outer.parentNode.removeChild(outer);
    _scrollbarWidth = widthNoScroll - widthWithScroll;
    return _scrollbarWidth;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LXRvb2xzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FyYm9uLWNvbXBvbmVudHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbInV0aWxzL3dpbmRvdy10b29scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQUksZUFBZSxHQUFHLENBQUMsQ0FBQyxDQUFDOzs7O0FBRXpCLE1BQU07O0lBRUwsSUFBSSxlQUFlLElBQUksQ0FBQyxFQUFFO1FBQ3pCLE9BQU8sZUFBZSxDQUFDO0tBQ3ZCOztJQUdELE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO0lBQ2xDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztJQUM1QixLQUFLLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxXQUFXLENBQUM7SUFFMUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7O0lBRWpDLE1BQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7O0lBRXhDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQzs7SUFHaEMsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7SUFDM0IsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7SUFFekIsTUFBTSxlQUFlLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7SUFHMUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFcEMsZUFBZSxHQUFHLGFBQWEsR0FBRyxlQUFlLENBQUM7SUFDbEQsT0FBTyxlQUFlLENBQUM7Q0FDdkIiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgX3Njcm9sbGJhcldpZHRoID0gLTE7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JvbGxiYXJXaWR0aCgpIHtcblx0Ly8gbGV0cyBub3QgcmVjcmVhdGUgdGhpcyB3aG9sZSB0aGluZyBldmVyeSB0aW1lXG5cdGlmIChfc2Nyb2xsYmFyV2lkdGggPj0gMCkge1xuXHRcdHJldHVybiBfc2Nyb2xsYmFyV2lkdGg7XG5cdH1cblxuXHQvLyBkbyB0aGUgY2FsY3VsYXRpb25zIHRoZSBmaXJzdCB0aW1lXG5cdGNvbnN0IG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0b3V0ZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG5cdG91dGVyLnN0eWxlLndpZHRoID0gXCIxMDBweFwiO1xuXHRvdXRlci5zdHlsZS5tc092ZXJmbG93U3R5bGUgPSBcInNjcm9sbGJhclwiOyAvLyBuZWVkZWQgZm9yIFdpbkpTIGFwcHNcblxuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG91dGVyKTtcblxuXHRjb25zdCB3aWR0aE5vU2Nyb2xsID0gb3V0ZXIub2Zmc2V0V2lkdGg7XG5cdC8vIGZvcmNlIHNjcm9sbGJhcnNcblx0b3V0ZXIuc3R5bGUub3ZlcmZsb3cgPSBcInNjcm9sbFwiO1xuXG5cdC8vIGFkZCBpbm5lcmRpdlxuXHRjb25zdCBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGlubmVyLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG5cdG91dGVyLmFwcGVuZENoaWxkKGlubmVyKTtcblxuXHRjb25zdCB3aWR0aFdpdGhTY3JvbGwgPSBpbm5lci5vZmZzZXRXaWR0aDtcblxuXHQvLyByZW1vdmUgZGl2c1xuXHRvdXRlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG91dGVyKTtcblxuXHRfc2Nyb2xsYmFyV2lkdGggPSB3aWR0aE5vU2Nyb2xsIC0gd2lkdGhXaXRoU2Nyb2xsO1xuXHRyZXR1cm4gX3Njcm9sbGJhcldpZHRoO1xufVxuIl19