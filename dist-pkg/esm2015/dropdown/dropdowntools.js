/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { fromEvent } from "rxjs";
import { debounceTime, map, filter } from "rxjs/operators";
/**
 * returns an observable bound to keydown events that
 * filters to a single element where the first letter of
 * it's textContent matches the key pressed
 *
 * @param {?} target element to watch
 * @param {?} elements elements to search
 * @return {?}
 */
export function watchFocusJump(target, elements) {
    return fromEvent(target, "keydown")
        .pipe(debounceTime(150), map((ev) => {
        /** @type {?} */
        let el = elements.find((itemEl) => itemEl.textContent.trim().toLowerCase().startsWith(ev.key));
        if (el) {
            return el;
        }
    }), filter(el => !!el));
}
/** *
 * bundle of functions to aid in manipulating tree structures
  @type {?} */
export const treetools = {
    /** finds an item in a set of items and returns the item and path to the item as an array */
    find: function (items, itemToFind, path = []) {
        /** @type {?} */
        let found;
        for (let i of items) {
            if (i === itemToFind) {
                path.push(i);
                found = i;
            }
            if (i.items && !found) {
                path.push(i);
                found = this.find(i.items, itemToFind, path).found;
                if (!found) {
                    path = [];
                }
            }
        }
        return { found, path };
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd250b29scy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJkcm9wZG93bi9kcm9wZG93bnRvb2xzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWMsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7O0FBVTNELE1BQU0seUJBQXlCLE1BQW1CLEVBQUUsUUFBUTtJQUMzRCxPQUFPLFNBQVMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDO1NBQ2pDLElBQUksQ0FDSixZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLEdBQUcsQ0FBQyxDQUFDLEVBQWlCLEVBQUUsRUFBRTs7UUFDekIsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQ2pDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksRUFBRSxFQUFFO1lBQUUsT0FBTyxFQUFFLENBQUM7U0FBRTtLQUN0QixDQUFDLEVBQ0YsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUNsQixDQUFDO0NBQ0g7Ozs7QUFHRCxhQUFhLFNBQVMsR0FBRzs7SUFFeEIsSUFBSSxFQUFFLFVBQVMsS0FBSyxFQUFFLFVBQVUsRUFBRSxJQUFJLEdBQUcsRUFBRTs7UUFDMUMsSUFBSSxLQUFLLENBQUM7UUFDVixLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRTtZQUNwQixJQUFJLENBQUMsS0FBSyxVQUFVLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsS0FBSyxHQUFHLENBQUMsQ0FBQzthQUNWO1lBQ0QsSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNiLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDbkQsSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFBRSxJQUFJLEdBQUcsRUFBRSxDQUFDO2lCQUFFO2FBQzFCO1NBQ0Q7UUFDRCxPQUFPLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBQyxDQUFDO0tBQ3JCO0NBQ0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIGZyb21FdmVudCB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIG1hcCwgZmlsdGVyIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5cbi8qKlxuICogcmV0dXJucyBhbiBvYnNlcnZhYmxlIGJvdW5kIHRvIGtleWRvd24gZXZlbnRzIHRoYXRcbiAqIGZpbHRlcnMgdG8gYSBzaW5nbGUgZWxlbWVudCB3aGVyZSB0aGUgZmlyc3QgbGV0dGVyIG9mXG4gKiBpdCdzIHRleHRDb250ZW50IG1hdGNoZXMgdGhlIGtleSBwcmVzc2VkXG4gKlxuICogQHBhcmFtIHRhcmdldCBlbGVtZW50IHRvIHdhdGNoXG4gKiBAcGFyYW0gZWxlbWVudHMgZWxlbWVudHMgdG8gc2VhcmNoXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3YXRjaEZvY3VzSnVtcCh0YXJnZXQ6IEhUTUxFbGVtZW50LCBlbGVtZW50cyk6IE9ic2VydmFibGU8SFRNTEVsZW1lbnQ+IHtcblx0cmV0dXJuIGZyb21FdmVudCh0YXJnZXQsIFwia2V5ZG93blwiKVxuXHRcdC5waXBlKFxuXHRcdFx0ZGVib3VuY2VUaW1lKDE1MCksXG5cdFx0XHRtYXAoKGV2OiBLZXlib2FyZEV2ZW50KSA9PiB7XG5cdFx0XHRcdGxldCBlbCA9IGVsZW1lbnRzLmZpbmQoKGl0ZW1FbCkgPT5cblx0XHRcdFx0XHRpdGVtRWwudGV4dENvbnRlbnQudHJpbSgpLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aChldi5rZXkpKTtcblx0XHRcdFx0aWYgKGVsKSB7IHJldHVybiBlbDsgfVxuXHRcdFx0fSksXG5cdFx0XHRmaWx0ZXIoZWwgPT4gISFlbClcblx0XHQpO1xufVxuXG4vKiogYnVuZGxlIG9mIGZ1bmN0aW9ucyB0byBhaWQgaW4gbWFuaXB1bGF0aW5nIHRyZWUgc3RydWN0dXJlcyAqL1xuZXhwb3J0IGNvbnN0IHRyZWV0b29scyA9IHtcblx0LyoqIGZpbmRzIGFuIGl0ZW0gaW4gYSBzZXQgb2YgaXRlbXMgYW5kIHJldHVybnMgdGhlIGl0ZW0gYW5kIHBhdGggdG8gdGhlIGl0ZW0gYXMgYW4gYXJyYXkgKi9cblx0ZmluZDogZnVuY3Rpb24oaXRlbXMsIGl0ZW1Ub0ZpbmQsIHBhdGggPSBbXSkge1xuXHRcdGxldCBmb3VuZDtcblx0XHRmb3IgKGxldCBpIG9mIGl0ZW1zKSB7XG5cdFx0XHRpZiAoaSA9PT0gaXRlbVRvRmluZCkge1xuXHRcdFx0XHRwYXRoLnB1c2goaSk7XG5cdFx0XHRcdGZvdW5kID0gaTtcblx0XHRcdH1cblx0XHRcdGlmIChpLml0ZW1zICYmICFmb3VuZCkge1xuXHRcdFx0XHRwYXRoLnB1c2goaSk7XG5cdFx0XHRcdGZvdW5kID0gdGhpcy5maW5kKGkuaXRlbXMsIGl0ZW1Ub0ZpbmQsIHBhdGgpLmZvdW5kO1xuXHRcdFx0XHRpZiAoIWZvdW5kKSB7IHBhdGggPSBbXTsgfVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4ge2ZvdW5kLCBwYXRofTtcblx0fVxufTtcbiJdfQ==