/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from "@angular/core";
import { PlaceholderService } from "./../placeholder/placeholder.module";
import { fromEvent } from "rxjs";
import { throttleTime } from "rxjs/operators";
import { position } from "@carbon/utils-position";
/** @type {?} */
const defaultOffset = { top: 0, left: 0 };
export class DropdownService {
    /**
     * @param {?} placeholderService
     */
    constructor(placeholderService) {
        this.placeholderService = placeholderService;
        this._offset = defaultOffset;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set offset(value) {
        this._offset = Object.assign({}, defaultOffset, value);
    }
    /**
     * @return {?}
     */
    get offset() {
        return this._offset;
    }
    /**
     * Appends the menu to the body, or a `ibm-placeholder` (if defined)
     *
     * @param {?} parentRef container to position relative to
     * @param {?} menuRef menu to be appended to body
     * @param {?} classList any extra classes we should wrap the container with
     * @return {?}
     */
    appendToBody(parentRef, menuRef, classList) {
        // build the dropdown list container
        menuRef.style.display = "block";
        /** @type {?} */
        const dropdownWrapper = document.createElement("div");
        dropdownWrapper.className = `dropdown ${classList}`;
        dropdownWrapper.style.width = parentRef.offsetWidth + "px";
        dropdownWrapper.style.position = "absolute";
        dropdownWrapper.appendChild(menuRef);
        // append it to the placeholder
        if (this.placeholderService.hasPlaceholderRef()) {
            this.placeholderService.appendElement(dropdownWrapper);
            // or append it directly to the body
        }
        else {
            document.body.appendChild(dropdownWrapper);
        }
        this.menuInstance = dropdownWrapper;
        this.positionDropdown(parentRef, dropdownWrapper);
        this.resize = fromEvent(window, "resize")
            .pipe(throttleTime(100))
            .subscribe(() => this.positionDropdown(parentRef, dropdownWrapper));
        return dropdownWrapper;
    }
    /**
     * Reattach the dropdown menu to the parent container
     * @param {?} hostRef container to append to
     * @return {?}
     */
    appendToDropdown(hostRef) {
        // if the instance is already removed don't try and remove it again
        if (!this.menuInstance) {
            return;
        }
        /** @type {?} */
        const instance = this.menuInstance;
        /** @type {?} */
        const menu = /** @type {?} */ (instance.firstElementChild);
        // clean up the instance
        this.menuInstance = null;
        menu.style.display = "none";
        hostRef.appendChild(menu);
        this.resize.unsubscribe();
        if (this.placeholderService.hasPlaceholderRef() && this.placeholderService.hasElement(instance)) {
            this.placeholderService.removeElement(instance);
        }
        else if (document.body.contains(instance)) {
            document.body.removeChild(instance);
        }
        return instance;
    }
    /**
     * position an open dropdown relative to the given parentRef
     * @param {?} parentRef
     * @return {?}
     */
    updatePosition(parentRef) {
        this.positionDropdown(parentRef, this.menuInstance);
    }
    /**
     * @param {?} parentRef
     * @param {?} menuRef
     * @return {?}
     */
    positionDropdown(parentRef, menuRef) {
        /** @type {?} */
        let pos = position.findAbsolute(parentRef, menuRef, "bottom");
        pos = position.addOffset(pos, this.offset.top, this.offset.left);
        position.setElement(menuRef, pos);
    }
}
DropdownService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DropdownService.ctorParameters = () => [
    { type: PlaceholderService }
];
function DropdownService_tsickle_Closure_declarations() {
    /**
     * reference to the body appended menu
     * @type {?}
     */
    DropdownService.prototype.menuInstance;
    /**
     * Maintains an Event Observable Subscription for tracking window resizes.
     * Window resizing is tracked if the `Dropdown` is appended to the body, otherwise it does not need to be supported.
     * @type {?}
     */
    DropdownService.prototype.resize;
    /** @type {?} */
    DropdownService.prototype._offset;
    /** @type {?} */
    DropdownService.prototype.placeholderService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJkcm9wZG93bi9kcm9wZG93bi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFjLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRWxELE1BQU0sYUFBYSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUM7QUFHMUMsTUFBTTs7OztJQXFCTCxZQUFzQixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjt1QkFGeEMsYUFBYTtLQUUrQjs7Ozs7UUFwQnJELE1BQU0sQ0FBQyxLQUFzQztRQUN2RCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQzs7Ozs7UUFHN0MsTUFBTTtRQUNoQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7Ozs7Ozs7Ozs7SUF3QnJCLFlBQVksQ0FBQyxTQUFzQixFQUFFLE9BQW9CLEVBQUUsU0FBUzs7UUFFbkUsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOztRQUNoQyxNQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RELGVBQWUsQ0FBQyxTQUFTLEdBQUcsWUFBWSxTQUFTLEVBQUUsQ0FBQztRQUNwRCxlQUFlLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUMzRCxlQUFlLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDNUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7UUFHckMsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLEVBQUUsRUFBRTtZQUNoRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDOztTQUV2RDthQUFNO1lBQ04sUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDM0M7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLGVBQWUsQ0FBQztRQUVwQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7YUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN2QixTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBRXJFLE9BQU8sZUFBZSxDQUFDO0tBQ3ZCOzs7Ozs7SUFNRCxnQkFBZ0IsQ0FBQyxPQUFvQjs7UUFFcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFBRSxPQUFPO1NBQUU7O1FBQ25DLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7O1FBQ25DLE1BQU0sSUFBSSxxQkFBRyxRQUFRLENBQUMsaUJBQWdDLEVBQUM7O1FBRXZELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUM1QixPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDMUIsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2hHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDaEQ7YUFBTSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzVDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3BDO1FBQ0QsT0FBTyxRQUFRLENBQUM7S0FDaEI7Ozs7OztJQUtELGNBQWMsQ0FBQyxTQUFTO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ3BEOzs7Ozs7SUFFUyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsT0FBTzs7UUFDNUMsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzlELEdBQUcsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pFLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ2xDOzs7WUEzRkQsVUFBVTs7OztZQVBGLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGxhY2Vob2xkZXJTZXJ2aWNlIH0gZnJvbSBcIi4vLi4vcGxhY2Vob2xkZXIvcGxhY2Vob2xkZXIubW9kdWxlXCI7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyB0aHJvdHRsZVRpbWUgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7IHBvc2l0aW9uIH0gZnJvbSBcIkBjYXJib24vdXRpbHMtcG9zaXRpb25cIjtcblxuY29uc3QgZGVmYXVsdE9mZnNldCA9IHsgdG9wOiAwLCBsZWZ0OiAwIH07XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEcm9wZG93blNlcnZpY2Uge1xuXHRwdWJsaWMgc2V0IG9mZnNldCh2YWx1ZTogeyB0b3A/OiBudW1iZXIsIGxlZnQ/OiBudW1iZXIgfSkge1xuXHRcdHRoaXMuX29mZnNldCA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPZmZzZXQsIHZhbHVlKTtcblx0fVxuXG5cdHB1YmxpYyBnZXQgb2Zmc2V0KCkge1xuXHRcdHJldHVybiB0aGlzLl9vZmZzZXQ7XG5cdH1cblx0LyoqXG5cdCAqIHJlZmVyZW5jZSB0byB0aGUgYm9keSBhcHBlbmRlZCBtZW51XG5cdCAqL1xuXHRwcm90ZWN0ZWQgbWVudUluc3RhbmNlOiBIVE1MRWxlbWVudDtcblxuXHQvKipcblx0ICogTWFpbnRhaW5zIGFuIEV2ZW50IE9ic2VydmFibGUgU3Vic2NyaXB0aW9uIGZvciB0cmFja2luZyB3aW5kb3cgcmVzaXplcy5cblx0ICogV2luZG93IHJlc2l6aW5nIGlzIHRyYWNrZWQgaWYgdGhlIGBEcm9wZG93bmAgaXMgYXBwZW5kZWQgdG8gdGhlIGJvZHksIG90aGVyd2lzZSBpdCBkb2VzIG5vdCBuZWVkIHRvIGJlIHN1cHBvcnRlZC5cblx0ICovXG5cdHByb3RlY3RlZCByZXNpemU6IFN1YnNjcmlwdGlvbjtcblxuXHRwcm90ZWN0ZWQgX29mZnNldCA9IGRlZmF1bHRPZmZzZXQ7XG5cblx0Y29uc3RydWN0b3IocHJvdGVjdGVkIHBsYWNlaG9sZGVyU2VydmljZTogUGxhY2Vob2xkZXJTZXJ2aWNlKSB7fVxuXG5cdC8qKlxuXHQgKiBBcHBlbmRzIHRoZSBtZW51IHRvIHRoZSBib2R5LCBvciBhIGBpYm0tcGxhY2Vob2xkZXJgIChpZiBkZWZpbmVkKVxuXHQgKlxuXHQgKiBAcGFyYW0gcGFyZW50UmVmIGNvbnRhaW5lciB0byBwb3NpdGlvbiByZWxhdGl2ZSB0b1xuXHQgKiBAcGFyYW0gbWVudVJlZiBtZW51IHRvIGJlIGFwcGVuZGVkIHRvIGJvZHlcblx0ICogQHBhcmFtIGNsYXNzTGlzdCBhbnkgZXh0cmEgY2xhc3NlcyB3ZSBzaG91bGQgd3JhcCB0aGUgY29udGFpbmVyIHdpdGhcblx0ICovXG5cdGFwcGVuZFRvQm9keShwYXJlbnRSZWY6IEhUTUxFbGVtZW50LCBtZW51UmVmOiBIVE1MRWxlbWVudCwgY2xhc3NMaXN0KTogSFRNTEVsZW1lbnQge1xuXHRcdC8vIGJ1aWxkIHRoZSBkcm9wZG93biBsaXN0IGNvbnRhaW5lclxuXHRcdG1lbnVSZWYuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRjb25zdCBkcm9wZG93bldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdGRyb3Bkb3duV3JhcHBlci5jbGFzc05hbWUgPSBgZHJvcGRvd24gJHtjbGFzc0xpc3R9YDtcblx0XHRkcm9wZG93bldyYXBwZXIuc3R5bGUud2lkdGggPSBwYXJlbnRSZWYub2Zmc2V0V2lkdGggKyBcInB4XCI7XG5cdFx0ZHJvcGRvd25XcmFwcGVyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuXHRcdGRyb3Bkb3duV3JhcHBlci5hcHBlbmRDaGlsZChtZW51UmVmKTtcblxuXHRcdC8vIGFwcGVuZCBpdCB0byB0aGUgcGxhY2Vob2xkZXJcblx0XHRpZiAodGhpcy5wbGFjZWhvbGRlclNlcnZpY2UuaGFzUGxhY2Vob2xkZXJSZWYoKSkge1xuXHRcdFx0dGhpcy5wbGFjZWhvbGRlclNlcnZpY2UuYXBwZW5kRWxlbWVudChkcm9wZG93bldyYXBwZXIpO1xuXHRcdFx0Ly8gb3IgYXBwZW5kIGl0IGRpcmVjdGx5IHRvIHRoZSBib2R5XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZHJvcGRvd25XcmFwcGVyKTtcblx0XHR9XG5cblx0XHR0aGlzLm1lbnVJbnN0YW5jZSA9IGRyb3Bkb3duV3JhcHBlcjtcblxuXHRcdHRoaXMucG9zaXRpb25Ecm9wZG93bihwYXJlbnRSZWYsIGRyb3Bkb3duV3JhcHBlcik7XG5cdFx0dGhpcy5yZXNpemUgPSBmcm9tRXZlbnQod2luZG93LCBcInJlc2l6ZVwiKVxuXHRcdFx0LnBpcGUodGhyb3R0bGVUaW1lKDEwMCkpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHRoaXMucG9zaXRpb25Ecm9wZG93bihwYXJlbnRSZWYsIGRyb3Bkb3duV3JhcHBlcikpO1xuXG5cdFx0cmV0dXJuIGRyb3Bkb3duV3JhcHBlcjtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZWF0dGFjaCB0aGUgZHJvcGRvd24gbWVudSB0byB0aGUgcGFyZW50IGNvbnRhaW5lclxuXHQgKiBAcGFyYW0gaG9zdFJlZiBjb250YWluZXIgdG8gYXBwZW5kIHRvXG5cdCAqL1xuXHRhcHBlbmRUb0Ryb3Bkb3duKGhvc3RSZWY6IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnQge1xuXHRcdC8vIGlmIHRoZSBpbnN0YW5jZSBpcyBhbHJlYWR5IHJlbW92ZWQgZG9uJ3QgdHJ5IGFuZCByZW1vdmUgaXQgYWdhaW5cblx0XHRpZiAoIXRoaXMubWVudUluc3RhbmNlKSB7IHJldHVybjsgfVxuXHRcdGNvbnN0IGluc3RhbmNlID0gdGhpcy5tZW51SW5zdGFuY2U7XG5cdFx0Y29uc3QgbWVudSA9IGluc3RhbmNlLmZpcnN0RWxlbWVudENoaWxkIGFzIEhUTUxFbGVtZW50O1xuXHRcdC8vIGNsZWFuIHVwIHRoZSBpbnN0YW5jZVxuXHRcdHRoaXMubWVudUluc3RhbmNlID0gbnVsbDtcblx0XHRtZW51LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRob3N0UmVmLmFwcGVuZENoaWxkKG1lbnUpO1xuXHRcdHRoaXMucmVzaXplLnVuc3Vic2NyaWJlKCk7XG5cdFx0aWYgKHRoaXMucGxhY2Vob2xkZXJTZXJ2aWNlLmhhc1BsYWNlaG9sZGVyUmVmKCkgJiYgdGhpcy5wbGFjZWhvbGRlclNlcnZpY2UuaGFzRWxlbWVudChpbnN0YW5jZSkpIHtcblx0XHRcdHRoaXMucGxhY2Vob2xkZXJTZXJ2aWNlLnJlbW92ZUVsZW1lbnQoaW5zdGFuY2UpO1xuXHRcdH0gZWxzZSBpZiAoZG9jdW1lbnQuYm9keS5jb250YWlucyhpbnN0YW5jZSkpIHtcblx0XHRcdGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoaW5zdGFuY2UpO1xuXHRcdH1cblx0XHRyZXR1cm4gaW5zdGFuY2U7XG5cdH1cblxuXHQvKipcblx0ICogcG9zaXRpb24gYW4gb3BlbiBkcm9wZG93biByZWxhdGl2ZSB0byB0aGUgZ2l2ZW4gcGFyZW50UmVmXG5cdCAqL1xuXHR1cGRhdGVQb3NpdGlvbihwYXJlbnRSZWYpIHtcblx0XHR0aGlzLnBvc2l0aW9uRHJvcGRvd24ocGFyZW50UmVmLCB0aGlzLm1lbnVJbnN0YW5jZSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgcG9zaXRpb25Ecm9wZG93bihwYXJlbnRSZWYsIG1lbnVSZWYpIHtcblx0XHRsZXQgcG9zID0gcG9zaXRpb24uZmluZEFic29sdXRlKHBhcmVudFJlZiwgbWVudVJlZiwgXCJib3R0b21cIik7XG5cdFx0cG9zID0gcG9zaXRpb24uYWRkT2Zmc2V0KHBvcywgdGhpcy5vZmZzZXQudG9wLCB0aGlzLm9mZnNldC5sZWZ0KTtcblx0XHRwb3NpdGlvbi5zZXRFbGVtZW50KG1lbnVSZWYsIHBvcyk7XG5cdH1cbn1cbiJdfQ==