/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, HostListener } from "@angular/core";
export class ExpandedRowHover {
    /**
     * @param {?} event
     * @return {?}
     */
    addHoverClass(event) {
        event.target.previousElementSibling.classList.add("bx--expandable-row--hover");
    }
    /**
     * @param {?} event
     * @return {?}
     */
    removeHoverClass(event) {
        event.target.previousElementSibling.classList.remove("bx--expandable-row--hover");
    }
}
ExpandedRowHover.decorators = [
    { type: Directive, args: [{
                selector: "[ibmExpandedRowHover]"
            },] }
];
ExpandedRowHover.propDecorators = {
    addHoverClass: [{ type: HostListener, args: ["mouseenter", ["$event"],] }],
    removeHoverClass: [{ type: HostListener, args: ["mouseleave", ["$event"],] }]
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5kZWQtcm93LWhvdmVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ0YWJsZS9leHBhbmRlZC1yb3ctaG92ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLGVBQWUsQ0FBQztBQUt2QixNQUFNOzs7OztJQUVMLGFBQWEsQ0FBQyxLQUFLO1FBQ2xCLEtBQUssQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0tBQy9FOzs7OztJQUdELGdCQUFnQixDQUFDLEtBQUs7UUFDckIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLDJCQUEyQixDQUFDLENBQUM7S0FDbEY7OztZQVpELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsdUJBQXVCO2FBQ2pDOzs7NEJBRUMsWUFBWSxTQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQzsrQkFLckMsWUFBWSxTQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdERpcmVjdGl2ZSxcblx0SG9zdExpc3RlbmVyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogXCJbaWJtRXhwYW5kZWRSb3dIb3Zlcl1cIlxufSlcbmV4cG9ydCBjbGFzcyBFeHBhbmRlZFJvd0hvdmVyIHtcblx0QEhvc3RMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgW1wiJGV2ZW50XCJdKVxuXHRhZGRIb3ZlckNsYXNzKGV2ZW50KSB7XG5cdFx0ZXZlbnQudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZChcImJ4LS1leHBhbmRhYmxlLXJvdy0taG92ZXJcIik7XG5cdH1cblxuXHRASG9zdExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBbXCIkZXZlbnRcIl0pXG5cdHJlbW92ZUhvdmVyQ2xhc3MoZXZlbnQpIHtcblx0XHRldmVudC50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKFwiYngtLWV4cGFuZGFibGUtcm93LS1ob3ZlclwiKTtcblx0fVxufVxuIl19