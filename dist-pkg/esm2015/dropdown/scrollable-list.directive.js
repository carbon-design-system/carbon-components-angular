/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Input, Directive, ElementRef, HostListener } from "@angular/core";
export class ScrollableList {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        /**
         * Optional target list to scroll
         */
        this.nScrollableList = null;
        /**
         * Enables or disables scrolling for the whole directive
         */
        this.scrollEnabled = true;
        /**
         * How many lines to scroll by each time `wheel` fires
         * Defaults to 10 - based on testing this isn't too fast or slow on any platform
         */
        this.scrollBy = 10;
        this.canScrollUp = false;
        this.canScrollDown = false;
        this.list = this.elementRef.nativeElement;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["scrollEnabled"]) {
            if (changes["scrollEnabled"].currentValue) {
                this.list.style.overflow = "hidden";
                this.scrollUpTarget.style.display = "flex";
                this.scrollDownTarget.style.display = "flex";
                this.canScrollUp = true;
                this.canScrollDown = true;
                this.updateScrollHeight();
                this.checkScrollArrows();
                setTimeout(() => {
                    this.checkScrollArrows();
                });
            }
            else {
                this.scrollUpTarget.style.display = "none";
                this.scrollDownTarget.style.display = "none";
                this.canScrollUp = false;
                this.canScrollDown = false;
                this.list.style.height = null;
                this.list.style.overflow = null;
                clearInterval(this.hoverScrollInterval);
            }
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.nScrollableList) {
            this.list = this.elementRef.nativeElement.querySelector(this.nScrollableList);
        }
        this.scrollUpTarget.addEventListener("mouseover", () => this.onHoverUp(true));
        this.scrollUpTarget.addEventListener("mouseout", () => this.onHoverUp(false));
        this.scrollDownTarget.addEventListener("mouseover", () => this.onHoverDown(true));
        this.scrollDownTarget.addEventListener("mouseout", () => this.onHoverDown(false));
    }
    /**
     * @return {?}
     */
    updateScrollHeight() {
        if (this.scrollEnabled) {
            /** @type {?} */
            const container = this.elementRef.nativeElement.parentElement;
            /** @type {?} */
            const containerRect = container.getBoundingClientRect();
            /** @type {?} */
            const innerHeightDiff = this.list.getBoundingClientRect().top - containerRect.top;
            /** @type {?} */
            const outerHeightDiff = containerRect.height - (containerRect.bottom - window.innerHeight);
            /** @type {?} */
            const height = outerHeightDiff - innerHeightDiff - 40;
            this.list.style.height = `${height}px`;
        }
    }
    /**
     * @return {?}
     */
    checkScrollArrows() {
        /** @type {?} */
        const scrollUpHeight = this.scrollUpTarget.offsetHeight;
        /** @type {?} */
        const scrollDownHeight = this.scrollDownTarget.offsetHeight;
        if (this.list.scrollTop === 0) {
            if (this.canScrollUp) {
                this.list.style.height = `${parseInt(this.list.style.height, 10) + scrollUpHeight}px`;
            }
            this.scrollUpTarget.style.display = "none";
            this.canScrollUp = false;
        }
        else if (this.list.scrollTop === this.list.scrollTopMax) {
            if (this.canScrollDown) {
                this.list.style.height = `${parseInt(this.list.style.height, 10) + scrollDownHeight}px`;
            }
            this.scrollDownTarget.style.display = "none";
            this.canScrollDown = false;
        }
        else {
            if (!this.canScrollUp) {
                this.list.style.height = `${parseInt(this.list.style.height, 10) - scrollUpHeight}px`;
            }
            if (!this.canScrollDown) {
                this.list.style.height = `${parseInt(this.list.style.height, 10) - scrollDownHeight}px`;
            }
            this.scrollUpTarget.style.display = "flex";
            this.scrollDownTarget.style.display = "flex";
            this.canScrollUp = true;
            this.canScrollDown = true;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onWheel(event) {
        if (event.deltaY < 0) {
            this.list.scrollTop -= this.scrollBy;
        }
        else {
            this.list.scrollTop += this.scrollBy;
        }
        // only prevent the parent/window from scrolling if we can scroll
        if (!(this.list.scrollTop === this.list.scrollTopMax || this.list.scrollTop === 0)) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.checkScrollArrows();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onTouchStart(event) {
        if (event.touches[0]) {
            this.lastTouch = event.touches[0].clientY;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onTouchMove(event) {
        event.preventDefault();
        event.stopPropagation();
        if (event.touches[0]) {
            /** @type {?} */
            const touch = event.touches[0];
            this.list.scrollTop += this.lastTouch - touch.clientY;
            this.lastTouch = touch.clientY;
            this.checkScrollArrows();
        }
    }
    /**
     * @param {?} hovering
     * @param {?} amount
     * @return {?}
     */
    hoverScrollBy(hovering, amount) {
        if (hovering) {
            this.hoverScrollInterval = setInterval(() => {
                this.list.scrollTop += amount;
                this.checkScrollArrows();
            }, 1);
        }
        else {
            clearInterval(this.hoverScrollInterval);
        }
    }
    /**
     * @param {?} hovering
     * @return {?}
     */
    onHoverUp(hovering) {
        // how many px/lines to scroll by on hover
        // 3 is just a random number that felt good
        // 1 and 2 are too slow, 4 works but it might be a tad fast
        this.hoverScrollBy(hovering, -3);
    }
    /**
     * @param {?} hovering
     * @return {?}
     */
    onHoverDown(hovering) {
        this.hoverScrollBy(hovering, 3);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            this.checkScrollArrows();
        }
    }
}
ScrollableList.decorators = [
    { type: Directive, args: [{
                selector: "[ibmScrollableList]",
                exportAs: "scrollable-list"
            },] }
];
/** @nocollapse */
ScrollableList.ctorParameters = () => [
    { type: ElementRef }
];
ScrollableList.propDecorators = {
    nScrollableList: [{ type: Input }],
    scrollEnabled: [{ type: Input }],
    scrollUpTarget: [{ type: Input }],
    scrollDownTarget: [{ type: Input }],
    scrollBy: [{ type: Input }],
    onWheel: [{ type: HostListener, args: ["wheel", ["$event"],] }],
    onTouchStart: [{ type: HostListener, args: ["touchstart", ["$event"],] }],
    onTouchMove: [{ type: HostListener, args: ["touchmove", ["$event"],] }],
    onKeyDown: [{ type: HostListener, args: ["keydown", ["$event"],] }]
};
function ScrollableList_tsickle_Closure_declarations() {
    /**
     * Optional target list to scroll
     * @type {?}
     */
    ScrollableList.prototype.nScrollableList;
    /**
     * Enables or disables scrolling for the whole directive
     * @type {?}
     */
    ScrollableList.prototype.scrollEnabled;
    /**
     * Sets the target used for hover scrolling up
     * @type {?}
     */
    ScrollableList.prototype.scrollUpTarget;
    /**
     * Sets the target used for hover scrolling down
     * @type {?}
     */
    ScrollableList.prototype.scrollDownTarget;
    /**
     * How many lines to scroll by each time `wheel` fires
     * Defaults to 10 - based on testing this isn't too fast or slow on any platform
     * @type {?}
     */
    ScrollableList.prototype.scrollBy;
    /** @type {?} */
    ScrollableList.prototype.hoverScrollInterval;
    /** @type {?} */
    ScrollableList.prototype.lastTouch;
    /** @type {?} */
    ScrollableList.prototype.canScrollUp;
    /** @type {?} */
    ScrollableList.prototype.canScrollDown;
    /** @type {?} */
    ScrollableList.prototype.list;
    /** @type {?} */
    ScrollableList.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsYWJsZS1saXN0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJkcm9wZG93bi9zY3JvbGxhYmxlLWxpc3QuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04sS0FBSyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUlaLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE1BQU07Ozs7SUErQkwsWUFBc0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTs7OzsrQkEzQlQsSUFBSTs7Ozs2QkFJZCxJQUFJOzs7Ozt3QkFhVCxFQUFFOzJCQU1FLEtBQUs7NkJBQ0gsS0FBSztvQkFDZCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWE7S0FFRTs7Ozs7SUFFaEQsV0FBVyxDQUFDLE9BQXNCO1FBQ2pDLElBQUksT0FBTyxtQkFBZ0I7WUFDMUIsSUFBSSxPQUFPLGtCQUFlLFlBQVksRUFBRTtnQkFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztnQkFDM0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO2dCQUM3QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2dCQUMxQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztnQkFDekIsVUFBVSxDQUFDLEdBQUcsRUFBRTtvQkFDZixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztpQkFDekIsQ0FBQyxDQUFDO2FBQ0g7aUJBQU07Z0JBQ04sSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztnQkFDM0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO2dCQUM3QyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztnQkFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ2hDLGFBQWEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQzthQUN4QztTQUNEO0tBQ0Q7Ozs7SUFFRCxlQUFlO1FBQ2QsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUM5RTtRQUNELElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDOUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDbEY7Ozs7SUFFTSxrQkFBa0I7UUFDeEIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFOztZQUN2QixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUM7O1lBQzlELE1BQU0sYUFBYSxHQUFHLFNBQVMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDOztZQUN4RCxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUM7O1lBQ2xGLE1BQU0sZUFBZSxHQUFHLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQzs7WUFHM0YsTUFBTSxNQUFNLEdBQUcsZUFBZSxHQUFHLGVBQWUsR0FBRyxFQUFFLENBQUM7WUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUM7U0FDdkM7Ozs7O0lBR1EsaUJBQWlCOztRQUMxQixNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQzs7UUFDeEQsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDO1FBQzVELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssQ0FBQyxFQUFFO1lBQzlCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsR0FBRyxjQUFjLElBQUksQ0FBQzthQUN0RjtZQUNELElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7U0FDekI7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzFELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsR0FBRyxnQkFBZ0IsSUFBSSxDQUFDO2FBQ3hGO1lBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQzdDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1NBQzNCO2FBQU07WUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsR0FBRyxjQUFjLElBQUksQ0FBQzthQUN0RjtZQUNELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixJQUFJLENBQUM7YUFDeEY7WUFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQzNDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUM3QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztTQUMxQjtLQUNEOzs7OztJQUdTLE9BQU8sQ0FBQyxLQUFLO1FBQ3RCLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUNyQzthQUFNO1lBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUNyQzs7UUFFRCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNuRixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7S0FDekI7Ozs7O0lBR1MsWUFBWSxDQUFDLEtBQUs7UUFDM0IsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7U0FDMUM7S0FDRDs7Ozs7SUFHUyxXQUFXLENBQUMsS0FBSztRQUMxQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTs7WUFDckIsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDdEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQy9CLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQ3pCO0tBQ0Q7Ozs7OztJQUVTLGFBQWEsQ0FBQyxRQUFRLEVBQUUsTUFBTTtRQUN2QyxJQUFJLFFBQVEsRUFBRTtZQUNiLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFO2dCQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxNQUFNLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2FBQ3pCLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDTjthQUFNO1lBQ04sYUFBYSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQ3hDO0tBQ0Q7Ozs7O0lBRVMsU0FBUyxDQUFDLFFBQVE7Ozs7UUFJM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNqQzs7Ozs7SUFFUyxXQUFXLENBQUMsUUFBUTtRQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUNoQzs7Ozs7SUFHUyxTQUFTLENBQUMsS0FBSztRQUN4QixJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssV0FBVyxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ3pELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQ3pCO0tBQ0Q7OztZQS9LRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFLGlCQUFpQjthQUMzQjs7OztZQVZBLFVBQVU7Ozs4QkFlVCxLQUFLOzRCQUlMLEtBQUs7NkJBSUwsS0FBSzsrQkFJTCxLQUFLO3VCQUtMLEtBQUs7c0JBeUZMLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7MkJBZWhDLFlBQVksU0FBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUM7MEJBT3JDLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7d0JBa0NwQyxZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0SW5wdXQsXG5cdERpcmVjdGl2ZSxcblx0RWxlbWVudFJlZixcblx0SG9zdExpc3RlbmVyLFxuXHRPbkNoYW5nZXMsXG5cdFNpbXBsZUNoYW5nZXMsXG5cdEFmdGVyVmlld0luaXRcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiBcIltpYm1TY3JvbGxhYmxlTGlzdF1cIixcblx0ZXhwb3J0QXM6IFwic2Nyb2xsYWJsZS1saXN0XCJcbn0pXG5leHBvcnQgY2xhc3MgU2Nyb2xsYWJsZUxpc3QgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQge1xuXHQvKipcblx0ICogT3B0aW9uYWwgdGFyZ2V0IGxpc3QgdG8gc2Nyb2xsXG5cdCAqL1xuXHRASW5wdXQoKSBuU2Nyb2xsYWJsZUxpc3Q6IHN0cmluZyA9IG51bGw7XG5cdC8qKlxuXHQgKiBFbmFibGVzIG9yIGRpc2FibGVzIHNjcm9sbGluZyBmb3IgdGhlIHdob2xlIGRpcmVjdGl2ZVxuXHQgKi9cblx0QElucHV0KCkgc2Nyb2xsRW5hYmxlZCA9IHRydWU7XG5cdC8qKlxuXHQgKiBTZXRzIHRoZSB0YXJnZXQgdXNlZCBmb3IgaG92ZXIgc2Nyb2xsaW5nIHVwXG5cdCAqL1xuXHRASW5wdXQoKSBzY3JvbGxVcFRhcmdldDogSFRNTEVsZW1lbnQ7XG5cdC8qKlxuXHQgKiBTZXRzIHRoZSB0YXJnZXQgdXNlZCBmb3IgaG92ZXIgc2Nyb2xsaW5nIGRvd25cblx0ICovXG5cdEBJbnB1dCgpIHNjcm9sbERvd25UYXJnZXQ6IEhUTUxFbGVtZW50O1xuXHQvKipcblx0ICogSG93IG1hbnkgbGluZXMgdG8gc2Nyb2xsIGJ5IGVhY2ggdGltZSBgd2hlZWxgIGZpcmVzXG5cdCAqIERlZmF1bHRzIHRvIDEwIC0gYmFzZWQgb24gdGVzdGluZyB0aGlzIGlzbid0IHRvbyBmYXN0IG9yIHNsb3cgb24gYW55IHBsYXRmb3JtXG5cdCAqL1xuXHRASW5wdXQoKSBzY3JvbGxCeSA9IDEwO1xuXG5cdC8vIGtlZXBzIHRyYWNrIG9mIHRoZSBzZXRJbnRlcnZhbCBmb3IgaG92ZXIgc2Nyb2xsaW5nXG5cdHByb3RlY3RlZCBob3ZlclNjcm9sbEludGVydmFsO1xuXHQvLyB0cmFja3MgdGhlIGxhc3QgdG91Y2ggZXZlbnRcblx0cHJvdGVjdGVkIGxhc3RUb3VjaDtcblx0cHJvdGVjdGVkIGNhblNjcm9sbFVwID0gZmFsc2U7XG5cdHByb3RlY3RlZCBjYW5TY3JvbGxEb3duID0gZmFsc2U7XG5cdHByb3RlY3RlZCBsaXN0ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cblx0Y29uc3RydWN0b3IocHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmIChjaGFuZ2VzLnNjcm9sbEVuYWJsZWQpIHtcblx0XHRcdGlmIChjaGFuZ2VzLnNjcm9sbEVuYWJsZWQuY3VycmVudFZhbHVlKSB7XG5cdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG5cdFx0XHRcdHRoaXMuc2Nyb2xsVXBUYXJnZXQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXHRcdFx0XHR0aGlzLnNjcm9sbERvd25UYXJnZXQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXHRcdFx0XHR0aGlzLmNhblNjcm9sbFVwID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5jYW5TY3JvbGxEb3duID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy51cGRhdGVTY3JvbGxIZWlnaHQoKTtcblx0XHRcdFx0dGhpcy5jaGVja1Njcm9sbEFycm93cygpO1xuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLmNoZWNrU2Nyb2xsQXJyb3dzKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zY3JvbGxVcFRhcmdldC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdHRoaXMuc2Nyb2xsRG93blRhcmdldC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdHRoaXMuY2FuU2Nyb2xsVXAgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5jYW5TY3JvbGxEb3duID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5oZWlnaHQgPSBudWxsO1xuXHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUub3ZlcmZsb3cgPSBudWxsO1xuXHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMuaG92ZXJTY3JvbGxJbnRlcnZhbCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdGlmICh0aGlzLm5TY3JvbGxhYmxlTGlzdCkge1xuXHRcdFx0dGhpcy5saXN0ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLm5TY3JvbGxhYmxlTGlzdCk7XG5cdFx0fVxuXHRcdHRoaXMuc2Nyb2xsVXBUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB0aGlzLm9uSG92ZXJVcCh0cnVlKSk7XG5cdFx0dGhpcy5zY3JvbGxVcFRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4gdGhpcy5vbkhvdmVyVXAoZmFsc2UpKTtcblx0XHR0aGlzLnNjcm9sbERvd25UYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB0aGlzLm9uSG92ZXJEb3duKHRydWUpKTtcblx0XHR0aGlzLnNjcm9sbERvd25UYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHRoaXMub25Ib3ZlckRvd24oZmFsc2UpKTtcblx0fVxuXG5cdHB1YmxpYyB1cGRhdGVTY3JvbGxIZWlnaHQoKSB7XG5cdFx0aWYgKHRoaXMuc2Nyb2xsRW5hYmxlZCkge1xuXHRcdFx0Y29uc3QgY29udGFpbmVyID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudDtcblx0XHRcdGNvbnN0IGNvbnRhaW5lclJlY3QgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRjb25zdCBpbm5lckhlaWdodERpZmYgPSB0aGlzLmxpc3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gY29udGFpbmVyUmVjdC50b3A7XG5cdFx0XHRjb25zdCBvdXRlckhlaWdodERpZmYgPSBjb250YWluZXJSZWN0LmhlaWdodCAtIChjb250YWluZXJSZWN0LmJvdHRvbSAtIHdpbmRvdy5pbm5lckhlaWdodCk7XG5cdFx0XHQvLyA0MCBnaXZlcyB1cyBzb21lIHBhZGRpbmcgYmV0d2VlbiB0aGUgYm90dG9tIG9mIHRoZSBsaXN0LFxuXHRcdFx0Ly8gdGhlIGJvdHRvbSBvZiB0aGUgd2luZG93LCBhbmQgdGhlIHNjcm9sbCBkb3duIGJ1dHRvblxuXHRcdFx0Y29uc3QgaGVpZ2h0ID0gb3V0ZXJIZWlnaHREaWZmIC0gaW5uZXJIZWlnaHREaWZmIC0gNDA7XG5cdFx0XHR0aGlzLmxpc3Quc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcblx0XHR9XG5cdH1cblxuXHRwcm90ZWN0ZWQgY2hlY2tTY3JvbGxBcnJvd3MoKSB7XG5cdFx0Y29uc3Qgc2Nyb2xsVXBIZWlnaHQgPSB0aGlzLnNjcm9sbFVwVGFyZ2V0Lm9mZnNldEhlaWdodDtcblx0XHRjb25zdCBzY3JvbGxEb3duSGVpZ2h0ID0gdGhpcy5zY3JvbGxEb3duVGFyZ2V0Lm9mZnNldEhlaWdodDtcblx0XHRpZiAodGhpcy5saXN0LnNjcm9sbFRvcCA9PT0gMCkge1xuXHRcdFx0aWYgKHRoaXMuY2FuU2Nyb2xsVXApIHtcblx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmhlaWdodCA9IGAke3BhcnNlSW50KHRoaXMubGlzdC5zdHlsZS5oZWlnaHQsIDEwKSArIHNjcm9sbFVwSGVpZ2h0fXB4YDtcblx0XHRcdH1cblx0XHRcdHRoaXMuc2Nyb2xsVXBUYXJnZXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0dGhpcy5jYW5TY3JvbGxVcCA9IGZhbHNlO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5saXN0LnNjcm9sbFRvcCA9PT0gdGhpcy5saXN0LnNjcm9sbFRvcE1heCkge1xuXHRcdFx0aWYgKHRoaXMuY2FuU2Nyb2xsRG93bikge1xuXHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuaGVpZ2h0ID0gYCR7cGFyc2VJbnQodGhpcy5saXN0LnN0eWxlLmhlaWdodCwgMTApICsgc2Nyb2xsRG93bkhlaWdodH1weGA7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnNjcm9sbERvd25UYXJnZXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0dGhpcy5jYW5TY3JvbGxEb3duID0gZmFsc2U7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICghdGhpcy5jYW5TY3JvbGxVcCkge1xuXHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuaGVpZ2h0ID0gYCR7cGFyc2VJbnQodGhpcy5saXN0LnN0eWxlLmhlaWdodCwgMTApIC0gc2Nyb2xsVXBIZWlnaHR9cHhgO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCF0aGlzLmNhblNjcm9sbERvd24pIHtcblx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmhlaWdodCA9IGAke3BhcnNlSW50KHRoaXMubGlzdC5zdHlsZS5oZWlnaHQsIDEwKSAtIHNjcm9sbERvd25IZWlnaHR9cHhgO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zY3JvbGxVcFRhcmdldC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cdFx0XHR0aGlzLnNjcm9sbERvd25UYXJnZXQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXHRcdFx0dGhpcy5jYW5TY3JvbGxVcCA9IHRydWU7XG5cdFx0XHR0aGlzLmNhblNjcm9sbERvd24gPSB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdEBIb3N0TGlzdGVuZXIoXCJ3aGVlbFwiLCBbXCIkZXZlbnRcIl0pXG5cdHByb3RlY3RlZCBvbldoZWVsKGV2ZW50KSB7XG5cdFx0aWYgKGV2ZW50LmRlbHRhWSA8IDApIHtcblx0XHRcdHRoaXMubGlzdC5zY3JvbGxUb3AgLT0gdGhpcy5zY3JvbGxCeTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5saXN0LnNjcm9sbFRvcCArPSB0aGlzLnNjcm9sbEJ5O1xuXHRcdH1cblx0XHQvLyBvbmx5IHByZXZlbnQgdGhlIHBhcmVudC93aW5kb3cgZnJvbSBzY3JvbGxpbmcgaWYgd2UgY2FuIHNjcm9sbFxuXHRcdGlmICghKHRoaXMubGlzdC5zY3JvbGxUb3AgPT09IHRoaXMubGlzdC5zY3JvbGxUb3BNYXggfHwgdGhpcy5saXN0LnNjcm9sbFRvcCA9PT0gMCkpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9XG5cdFx0dGhpcy5jaGVja1Njcm9sbEFycm93cygpO1xuXHR9XG5cblx0QEhvc3RMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgW1wiJGV2ZW50XCJdKVxuXHRwcm90ZWN0ZWQgb25Ub3VjaFN0YXJ0KGV2ZW50KSB7XG5cdFx0aWYgKGV2ZW50LnRvdWNoZXNbMF0pIHtcblx0XHRcdHRoaXMubGFzdFRvdWNoID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xuXHRcdH1cblx0fVxuXG5cdEBIb3N0TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgW1wiJGV2ZW50XCJdKVxuXHRwcm90ZWN0ZWQgb25Ub3VjaE1vdmUoZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGlmIChldmVudC50b3VjaGVzWzBdKSB7XG5cdFx0XHRjb25zdCB0b3VjaCA9IGV2ZW50LnRvdWNoZXNbMF07XG5cdFx0XHR0aGlzLmxpc3Quc2Nyb2xsVG9wICs9IHRoaXMubGFzdFRvdWNoIC0gdG91Y2guY2xpZW50WTtcblx0XHRcdHRoaXMubGFzdFRvdWNoID0gdG91Y2guY2xpZW50WTtcblx0XHRcdHRoaXMuY2hlY2tTY3JvbGxBcnJvd3MoKTtcblx0XHR9XG5cdH1cblxuXHRwcm90ZWN0ZWQgaG92ZXJTY3JvbGxCeShob3ZlcmluZywgYW1vdW50KSB7XG5cdFx0aWYgKGhvdmVyaW5nKSB7XG5cdFx0XHR0aGlzLmhvdmVyU2Nyb2xsSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMubGlzdC5zY3JvbGxUb3AgKz0gYW1vdW50O1xuXHRcdFx0XHR0aGlzLmNoZWNrU2Nyb2xsQXJyb3dzKCk7XG5cdFx0XHR9LCAxKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLmhvdmVyU2Nyb2xsSW50ZXJ2YWwpO1xuXHRcdH1cblx0fVxuXG5cdHByb3RlY3RlZCBvbkhvdmVyVXAoaG92ZXJpbmcpIHtcblx0XHQvLyBob3cgbWFueSBweC9saW5lcyB0byBzY3JvbGwgYnkgb24gaG92ZXJcblx0XHQvLyAzIGlzIGp1c3QgYSByYW5kb20gbnVtYmVyIHRoYXQgZmVsdCBnb29kXG5cdFx0Ly8gMSBhbmQgMiBhcmUgdG9vIHNsb3csIDQgd29ya3MgYnV0IGl0IG1pZ2h0IGJlIGEgdGFkIGZhc3Rcblx0XHR0aGlzLmhvdmVyU2Nyb2xsQnkoaG92ZXJpbmcsIC0zKTtcblx0fVxuXG5cdHByb3RlY3RlZCBvbkhvdmVyRG93bihob3ZlcmluZykge1xuXHRcdHRoaXMuaG92ZXJTY3JvbGxCeShob3ZlcmluZywgMyk7XG5cdH1cblxuXHRASG9zdExpc3RlbmVyKFwia2V5ZG93blwiLCBbXCIkZXZlbnRcIl0pXG5cdHByb3RlY3RlZCBvbktleURvd24oZXZlbnQpIHtcblx0XHRpZiAoZXZlbnQua2V5ID09PSBcIkFycm93RG93blwiIHx8IGV2ZW50LmtleSA9PT0gXCJBcnJvd1VwXCIpIHtcblx0XHRcdHRoaXMuY2hlY2tTY3JvbGxBcnJvd3MoKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==