/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, ContentChildren, QueryList, Output, EventEmitter, HostListener, ElementRef } from "@angular/core";
import { ContentSwitcherOption } from "./content-switcher-option.directive";
import { isFocusInLastItem, isFocusInFirstItem } from "./../common/tab.service";
/**
 * The content switcher can be used for toggling between distinct options.
 * Similar to tabs, but without an associated content panel
 *
 * [See demo](../../?path=/story/content-switcher--basic)
 *
 * ```html
 * <ibm-content-switcher (selected)="selected($event)">
 * 		<button ibmContentOption>First section</button>
 * 		<button ibmContentOption>Second section</button>
 * 		<button ibmContentOption>Third section</button>
 * 	</ibm-content-switcher>
 * 	```
 *
 * <example-url>../../iframe.html?id=content-switcher--basic</example-url>
 */
export class ContentSwitcher {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.ariaLabel = "content switcher";
        /**
         * Emits the activated `ContentSwitcherOption`
         */
        this.selected = new EventEmitter();
    }
    /**
     * aria-label for the content switcher. Should be set to something descriptive
     * @param {?} value
     * @return {?}
     */
    set label(value) {
        console.warn("`label` is deprecated (to be removed in next major version). Use `ariaLabel` instead.");
        this.ariaLabel = value;
    }
    /**
     * @return {?}
     */
    get label() {
        console.warn("`label` is deprecated (to be removed in next major version). Use `ariaLabel` instead.");
        return this.ariaLabel;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const firstActive = this.options.find(option => option.active);
        // delay setting active until the DOM has settled
        if (!firstActive) {
            setTimeout(() => this.options.first.active = true);
        }
        // subscribe to each item, emit when one is selected, and reset the active states
        this.options.forEach(option => {
            option.selected.subscribe(_ => {
                /** @type {?} */
                const active = option;
                this.options.forEach(option => {
                    if (option !== active) {
                        option.active = false;
                    }
                });
                this.selected.emit(active);
            });
        });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    hostkeys(event) {
        /** @type {?} */
        const buttonList = Array.from(this.elementRef.nativeElement.querySelectorAll("[ibmContentOption]"));
        switch (event.key) {
            case "Right": // IE specific value
            case "ArrowRight":
                event.preventDefault();
                if (!isFocusInLastItem(event, buttonList)) {
                    /** @type {?} */
                    const index = buttonList.findIndex(item => item === event.target);
                    buttonList[index + 1].focus();
                }
                else {
                    buttonList[0].focus();
                }
                break;
            case "Left": // IE specific value
            case "ArrowLeft":
                event.preventDefault();
                if (!isFocusInFirstItem(event, buttonList)) {
                    /** @type {?} */
                    const index = buttonList.findIndex(item => item === event.target);
                    buttonList[index - 1].focus();
                }
                else {
                    buttonList[buttonList.length - 1].focus();
                }
                break;
            case "Home":
                event.preventDefault();
                buttonList[0].focus();
                break;
            case "End":
                event.preventDefault();
                buttonList[buttonList.length - 1].focus();
                break;
        }
    }
}
ContentSwitcher.decorators = [
    { type: Component, args: [{
                selector: "ibm-content-switcher",
                template: `
		<div
			[attr.aria-label]="ariaLabel"
			class="bx--content-switcher"
			role="tablist">
			<ng-content></ng-content>
		</div>
	`
            }] }
];
/** @nocollapse */
ContentSwitcher.ctorParameters = () => [
    { type: ElementRef }
];
ContentSwitcher.propDecorators = {
    label: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    selected: [{ type: Output }],
    options: [{ type: ContentChildren, args: [ContentSwitcherOption,] }],
    hostkeys: [{ type: HostListener, args: ["keydown", ["$event"],] }]
};
function ContentSwitcher_tsickle_Closure_declarations() {
    /** @type {?} */
    ContentSwitcher.prototype.ariaLabel;
    /**
     * Emits the activated `ContentSwitcherOption`
     * @type {?}
     */
    ContentSwitcher.prototype.selected;
    /** @type {?} */
    ContentSwitcher.prototype.options;
    /** @type {?} */
    ContentSwitcher.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1zd2l0Y2hlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJib24tY29tcG9uZW50cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsiY29udGVudC1zd2l0Y2hlci9jb250ZW50LXN3aXRjaGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsZUFBZSxFQUNmLFNBQVMsRUFDVCxNQUFNLEVBQ04sWUFBWSxFQUVaLFlBQVksRUFDWixVQUFVLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkJoRixNQUFNOzs7O0lBdUJMLFlBQXNCLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7eUJBVHZCLGtCQUFrQjs7Ozt3QkFLbEIsSUFBSSxZQUFZLEVBQUU7S0FJUzs7Ozs7O0lBbkJoRCxJQUFhLEtBQUssQ0FBQyxLQUFhO1FBQy9CLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUZBQXVGLENBQUMsQ0FBQztRQUN0RyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztLQUN2Qjs7OztJQUVELElBQUksS0FBSztRQUNSLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUZBQXVGLENBQUMsQ0FBQztRQUN0RyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdEI7Ozs7SUFhRCxlQUFlOztRQUNkLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztRQUUvRCxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2pCLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJ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Q29udGVudENoaWxkcmVuLFxuXHRRdWVyeUxpc3QsXG5cdE91dHB1dCxcblx0RXZlbnRFbWl0dGVyLFxuXHRBZnRlclZpZXdJbml0LFxuXHRIb3N0TGlzdGVuZXIsXG5cdEVsZW1lbnRSZWZcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbnRlbnRTd2l0Y2hlck9wdGlvbiB9IGZyb20gXCIuL2NvbnRlbnQtc3dpdGNoZXItb3B0aW9uLmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHsgaXNGb2N1c0luTGFzdEl0ZW0sIGlzRm9jdXNJbkZpcnN0SXRlbSB9IGZyb20gXCIuLy4uL2NvbW1vbi90YWIuc2VydmljZVwiO1xuXG4vKipcbiAqIFRoZSBjb250ZW50IHN3aXRjaGVyIGNhbiBiZSB1c2VkIGZvciB0b2dnbGluZyBiZXR3ZWVuIGRpc3RpbmN0IG9wdGlvbnMuXG4gKiBTaW1pbGFyIHRvIHRhYnMsIGJ1dCB3aXRob3V0IGFuIGFzc29jaWF0ZWQgY29udGVudCBwYW5lbFxuICpcbiAqIFtTZWUgZGVtb10oLi4vLi4vP3BhdGg9L3N0b3J5L2NvbnRlbnQtc3dpdGNoZXItLWJhc2ljKVxuICpcbiAqIGBgYGh0bWxcbiAqIDxpYm0tY29udGVudC1zd2l0Y2hlciAoc2VsZWN0ZWQpPVwic2VsZWN0ZWQoJGV2ZW50KVwiPlxuICpcdFx0PGJ1dHRvbiBpYm1Db250ZW50T3B0aW9uPkZpcnN0IHNlY3Rpb248L2J1dHRvbj5cbiAqXHRcdDxidXR0b24gaWJtQ29udGVudE9wdGlvbj5TZWNvbmQgc2VjdGlvbjwvYnV0dG9uPlxuICpcdFx0PGJ1dHRvbiBpYm1Db250ZW50T3B0aW9uPlRoaXJkIHNlY3Rpb248L2J1dHRvbj5cbiAqXHQ8L2libS1jb250ZW50LXN3aXRjaGVyPlxuICpcdGBgYFxuICpcbiAqIDxleGFtcGxlLXVybD4uLi8uLi9pZnJhbWUuaHRtbD9pZD1jb250ZW50LXN3aXRjaGVyLS1iYXNpYzwvZXhhbXBsZS11cmw+XG4gKi9cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJpYm0tY29udGVudC1zd2l0Y2hlclwiLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXZcblx0XHRcdFthdHRyLmFyaWEtbGFiZWxdPVwiYXJpYUxhYmVsXCJcblx0XHRcdGNsYXNzPVwiYngtLWNvbnRlbnQtc3dpdGNoZXJcIlxuXHRcdFx0cm9sZT1cInRhYmxpc3RcIj5cblx0XHRcdDxuZy1jb250ZW50PjwvbmctY29udGVudD5cblx0XHQ8L2Rpdj5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBDb250ZW50U3dpdGNoZXIgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblx0LyoqXG5cdCAqIGFyaWEtbGFiZWwgZm9yIHRoZSBjb250ZW50IHN3aXRjaGVyLiBTaG91bGQgYmUgc2V0IHRvIHNvbWV0aGluZyBkZXNjcmlwdGl2ZVxuXHQgKi9cblx0QElucHV0KCkgc2V0IGxhYmVsKHZhbHVlOiBzdHJpbmcpIHtcblx0XHRjb25zb2xlLndhcm4oXCJgbGFiZWxgIGlzIGRlcHJlY2F0ZWQgKHRvIGJlIHJlbW92ZWQgaW4gbmV4dCBtYWpvciB2ZXJzaW9uKS4gVXNlIGBhcmlhTGFiZWxgIGluc3RlYWQuXCIpO1xuXHRcdHRoaXMuYXJpYUxhYmVsID0gdmFsdWU7XG5cdH1cblxuXHRnZXQgbGFiZWwoKTogc3RyaW5nIHtcblx0XHRjb25zb2xlLndhcm4oXCJgbGFiZWxgIGlzIGRlcHJlY2F0ZWQgKHRvIGJlIHJlbW92ZWQgaW4gbmV4dCBtYWpvciB2ZXJzaW9uKS4gVXNlIGBhcmlhTGFiZWxgIGluc3RlYWQuXCIpO1xuXHRcdHJldHVybiB0aGlzLmFyaWFMYWJlbDtcblx0fVxuXG5cdEBJbnB1dCgpIGFyaWFMYWJlbCA9IFwiY29udGVudCBzd2l0Y2hlclwiO1xuXG5cdC8qKlxuXHQgKiBFbWl0cyB0aGUgYWN0aXZhdGVkIGBDb250ZW50U3dpdGNoZXJPcHRpb25gXG5cdCAqL1xuXHRAT3V0cHV0KCkgc2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QENvbnRlbnRDaGlsZHJlbihDb250ZW50U3dpdGNoZXJPcHRpb24pIG9wdGlvbnM6IFF1ZXJ5TGlzdDxDb250ZW50U3dpdGNoZXJPcHRpb24+O1xuXG5cdGNvbnN0cnVjdG9yKHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRjb25zdCBmaXJzdEFjdGl2ZSA9IHRoaXMub3B0aW9ucy5maW5kKG9wdGlvbiA9PiBvcHRpb24uYWN0aXZlKTtcblx0XHQvLyBkZWxheSBzZXR0aW5nIGFjdGl2ZSB1bnRpbCB0aGUgRE9NIGhhcyBzZXR0bGVkXG5cdFx0aWYgKCFmaXJzdEFjdGl2ZSkge1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB0aGlzLm9wdGlvbnMuZmlyc3QuYWN0aXZlID0gdHJ1ZSk7XG5cdFx0fVxuXHRcdC8vIHN1YnNjcmliZSB0byBlYWNoIGl0ZW0sIGVtaXQgd2hlbiBvbmUgaXMgc2VsZWN0ZWQsIGFuZCByZXNldCB0aGUgYWN0aXZlIHN0YXRlc1xuXHRcdHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XG5cdFx0XHRvcHRpb24uc2VsZWN0ZWQuc3Vic2NyaWJlKF8gPT4ge1xuXHRcdFx0XHRjb25zdCBhY3RpdmUgPSBvcHRpb247XG5cdFx0XHRcdHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XG5cdFx0XHRcdFx0aWYgKG9wdGlvbiAhPT0gYWN0aXZlKSB7XG5cdFx0XHRcdFx0XHRvcHRpb24uYWN0aXZlID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy5zZWxlY3RlZC5lbWl0KGFjdGl2ZSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdEBIb3N0TGlzdGVuZXIoXCJrZXlkb3duXCIsIFtcIiRldmVudFwiXSlcblx0aG9zdGtleXMoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcblx0XHRjb25zdCBidXR0b25MaXN0ID0gQXJyYXkuZnJvbTxhbnk+KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaWJtQ29udGVudE9wdGlvbl1cIikpO1xuXG5cdFx0c3dpdGNoIChldmVudC5rZXkpIHtcblx0XHRcdGNhc2UgXCJSaWdodFwiOiAvLyBJRSBzcGVjaWZpYyB2YWx1ZVxuXHRcdFx0Y2FzZSBcIkFycm93UmlnaHRcIjpcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0aWYgKCFpc0ZvY3VzSW5MYXN0SXRlbShldmVudCwgYnV0dG9uTGlzdCkpICB7XG5cdFx0XHRcdFx0Y29uc3QgaW5kZXggPSBidXR0b25MaXN0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0gPT09IGV2ZW50LnRhcmdldCk7XG5cdFx0XHRcdFx0YnV0dG9uTGlzdFtpbmRleCArIDFdLmZvY3VzKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YnV0dG9uTGlzdFswXS5mb2N1cygpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIFwiTGVmdFwiOiAvLyBJRSBzcGVjaWZpYyB2YWx1ZVxuXHRcdFx0Y2FzZSBcIkFycm93TGVmdFwiOlxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRpZiAoIWlzRm9jdXNJbkZpcnN0SXRlbShldmVudCwgYnV0dG9uTGlzdCkpICB7XG5cdFx0XHRcdFx0Y29uc3QgaW5kZXggPSBidXR0b25MaXN0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0gPT09IGV2ZW50LnRhcmdldCk7XG5cdFx0XHRcdFx0YnV0dG9uTGlzdFtpbmRleCAtIDFdLmZvY3VzKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YnV0dG9uTGlzdFtidXR0b25MaXN0Lmxlbmd0aCAtIDFdLmZvY3VzKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgXCJIb21lXCI6XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGJ1dHRvbkxpc3RbMF0uZm9jdXMoKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgXCJFbmRcIjpcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0YnV0dG9uTGlzdFtidXR0b25MaXN0Lmxlbmd0aCAtIDFdLmZvY3VzKCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxufVxuIl19