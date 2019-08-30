/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, HostBinding, Input, HostListener, Output, EventEmitter } from "@angular/core";
export class ContentSwitcherOption {
    constructor() {
        /**
         * Internal name for the option.
         * Should be something that identifies the option to the application.
         * Accessible from the `ContentSwitcher` `selected` emitter
         */
        this.name = "option";
        /**
         * Emits when the option is selected.
         */
        this.selected = new EventEmitter();
        this.switcherClass = "bx--content-switcher-btn";
        this.selectedClass = false;
        this.role = "tab";
        this.ariaSelected = false;
        this.tabindex = "-1";
        this._active = false;
    }
    /**
     * Used to activate the option. Only one option may be `active` at a time
     * @param {?} value
     * @return {?}
     */
    set active(value) {
        this._active = value;
        this.selectedClass = value;
        this.ariaSelected = value;
        this.tabindex = value ? "0" : "-1";
    }
    /**
     * @return {?}
     */
    get active() {
        return this._active;
    }
    /**
     * @return {?}
     */
    hostClick() {
        this.active = true;
        this.selected.emit(true);
    }
    /**
     * @return {?}
     */
    onFocus() {
        this.active = true;
        this.selected.emit(true);
    }
}
ContentSwitcherOption.decorators = [
    { type: Directive, args: [{
                selector: "[ibmContentOption]"
            },] }
];
ContentSwitcherOption.propDecorators = {
    active: [{ type: Input }],
    name: [{ type: Input }],
    selected: [{ type: Output }],
    switcherClass: [{ type: HostBinding, args: ["class",] }],
    selectedClass: [{ type: HostBinding, args: ["class.bx--content-switcher--selected",] }],
    role: [{ type: HostBinding, args: ["attr.role",] }],
    ariaSelected: [{ type: HostBinding, args: ["attr.aria-selected",] }],
    tabindex: [{ type: HostBinding, args: ["attr.tabIndex",] }],
    hostClick: [{ type: HostListener, args: ["click",] }],
    onFocus: [{ type: HostListener, args: ["focus",] }]
};
function ContentSwitcherOption_tsickle_Closure_declarations() {
    /**
     * Internal name for the option.
     * Should be something that identifies the option to the application.
     * Accessible from the `ContentSwitcher` `selected` emitter
     * @type {?}
     */
    ContentSwitcherOption.prototype.name;
    /**
     * Emits when the option is selected.
     * @type {?}
     */
    ContentSwitcherOption.prototype.selected;
    /** @type {?} */
    ContentSwitcherOption.prototype.switcherClass;
    /** @type {?} */
    ContentSwitcherOption.prototype.selectedClass;
    /** @type {?} */
    ContentSwitcherOption.prototype.role;
    /** @type {?} */
    ContentSwitcherOption.prototype.ariaSelected;
    /** @type {?} */
    ContentSwitcherOption.prototype.tabindex;
    /** @type {?} */
    ContentSwitcherOption.prototype._active;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1zd2l0Y2hlci1vcHRpb24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FyYm9uLWNvbXBvbmVudHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbImNvbnRlbnQtc3dpdGNoZXIvY29udGVudC1zd2l0Y2hlci1vcHRpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEVBQ0wsWUFBWSxFQUNaLE1BQU0sRUFDTixZQUFZLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFLdkIsTUFBTTs7Ozs7OztvQkFvQlcsUUFBUTs7Ozt3QkFLSCxJQUFJLFlBQVksRUFBRTs2QkFFRCwwQkFBMEI7NkJBQ0ssS0FBSztvQkFDekMsS0FBSzs0QkFDWSxLQUFLO3dCQUNkLElBQUk7dUJBRXpCLEtBQUs7Ozs7Ozs7SUE3QnpCLElBQWEsTUFBTSxDQUFFLEtBQWM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0tBQ25DOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQ3BCOzs7O0lBdUJELFNBQVM7UUFDUixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN6Qjs7OztJQUdELE9BQU87UUFDTixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN6Qjs7O1lBaERELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsb0JBQW9CO2FBQzlCOzs7cUJBS0MsS0FBSzttQkFnQkwsS0FBSzt1QkFLTCxNQUFNOzRCQUVOLFdBQVcsU0FBQyxPQUFPOzRCQUNuQixXQUFXLFNBQUMsc0NBQXNDO21CQUNsRCxXQUFXLFNBQUMsV0FBVzsyQkFDdkIsV0FBVyxTQUFDLG9CQUFvQjt1QkFDaEMsV0FBVyxTQUFDLGVBQWU7d0JBSTNCLFlBQVksU0FBQyxPQUFPO3NCQU1wQixZQUFZLFNBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdERpcmVjdGl2ZSxcblx0SG9zdEJpbmRpbmcsXG5cdElucHV0LFxuXHRIb3N0TGlzdGVuZXIsXG5cdE91dHB1dCxcblx0RXZlbnRFbWl0dGVyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogXCJbaWJtQ29udGVudE9wdGlvbl1cIlxufSlcbmV4cG9ydCBjbGFzcyBDb250ZW50U3dpdGNoZXJPcHRpb24ge1xuXHQvKipcblx0ICogVXNlZCB0byBhY3RpdmF0ZSB0aGUgb3B0aW9uLiBPbmx5IG9uZSBvcHRpb24gbWF5IGJlIGBhY3RpdmVgIGF0IGEgdGltZVxuXHQgKi9cblx0QElucHV0KCkgc2V0IGFjdGl2ZSAodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLl9hY3RpdmUgPSB2YWx1ZTtcblx0XHR0aGlzLnNlbGVjdGVkQ2xhc3MgPSB2YWx1ZTtcblx0XHR0aGlzLmFyaWFTZWxlY3RlZCA9IHZhbHVlO1xuXHRcdHRoaXMudGFiaW5kZXggPSB2YWx1ZSA/IFwiMFwiIDogXCItMVwiO1xuXHR9XG5cblx0Z2V0IGFjdGl2ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fYWN0aXZlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEludGVybmFsIG5hbWUgZm9yIHRoZSBvcHRpb24uXG5cdCAqIFNob3VsZCBiZSBzb21ldGhpbmcgdGhhdCBpZGVudGlmaWVzIHRoZSBvcHRpb24gdG8gdGhlIGFwcGxpY2F0aW9uLlxuXHQgKiBBY2Nlc3NpYmxlIGZyb20gdGhlIGBDb250ZW50U3dpdGNoZXJgIGBzZWxlY3RlZGAgZW1pdHRlclxuXHQgKi9cblx0QElucHV0KCkgbmFtZSA9IFwib3B0aW9uXCI7XG5cblx0LyoqXG5cdCAqIEVtaXRzIHdoZW4gdGhlIG9wdGlvbiBpcyBzZWxlY3RlZC5cblx0ICovXG5cdEBPdXRwdXQoKSBzZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRASG9zdEJpbmRpbmcoXCJjbGFzc1wiKSBzd2l0Y2hlckNsYXNzID0gXCJieC0tY29udGVudC1zd2l0Y2hlci1idG5cIjtcblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MuYngtLWNvbnRlbnQtc3dpdGNoZXItLXNlbGVjdGVkXCIpIHNlbGVjdGVkQ2xhc3MgPSBmYWxzZTtcblx0QEhvc3RCaW5kaW5nKFwiYXR0ci5yb2xlXCIpIHJvbGUgPSBcInRhYlwiO1xuXHRASG9zdEJpbmRpbmcoXCJhdHRyLmFyaWEtc2VsZWN0ZWRcIikgYXJpYVNlbGVjdGVkID0gZmFsc2U7XG5cdEBIb3N0QmluZGluZyhcImF0dHIudGFiSW5kZXhcIikgdGFiaW5kZXggPSBcIi0xXCI7XG5cblx0cHJvdGVjdGVkIF9hY3RpdmUgPSBmYWxzZTtcblxuXHRASG9zdExpc3RlbmVyKFwiY2xpY2tcIilcblx0aG9zdENsaWNrKCkge1xuXHRcdHRoaXMuYWN0aXZlID0gdHJ1ZTtcblx0XHR0aGlzLnNlbGVjdGVkLmVtaXQodHJ1ZSk7XG5cdH1cblxuXHRASG9zdExpc3RlbmVyKFwiZm9jdXNcIilcblx0b25Gb2N1cygpIHtcblx0XHR0aGlzLmFjdGl2ZSA9IHRydWU7XG5cdFx0dGhpcy5zZWxlY3RlZC5lbWl0KHRydWUpO1xuXHR9XG59XG4iXX0=