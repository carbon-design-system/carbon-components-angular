/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, HostBinding, Input } from "@angular/core";
/**
 * A convinence directive for applying styling to a button.
 *
 * [See demo](../../?path=/story/button--basic)
 *
 * Example:
 *
 * ```html
 * <button ibmButton>A button</button>
 * <button ibmButton="secondary">A secondary button</button>
 * ```
 *
 * See the [vanilla carbon docs](http://www.carbondesignsystem.com/components/button/code) for more detail.
 *
 * <example-url>../../iframe.html?id=button--basic</example-url>
 */
export class Button {
    constructor() {
        /**
         * sets the button type
         */
        this.ibmButton = "primary";
        /**
         * Specify the size of the button
         */
        this.size = "normal";
        this.primary = true;
        this.secondary = false;
        this.tertiary = false;
        this.ghost = false;
        this.danger = false;
        this.dangerPrimary = false;
        this.skeleton = false;
        this.smallSize = false;
        this.toolbarAction = false;
        this.overflowMenu = false;
    }
    /**
     * @return {?}
     */
    get baseClass() {
        return !this.toolbarAction;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.size === "sm") {
            this.smallSize = true;
        }
        this.primary = false;
        switch (this.ibmButton) {
            case "primary":
                this.primary = true;
                break;
            case "secondary":
                this.secondary = true;
                break;
            case "tertiary":
                this.tertiary = true;
                break;
            case "ghost":
                this.ghost = true;
                break;
            case "danger":
                this.danger = true;
                break;
            case "danger--primary":
                this.dangerPrimary = true;
                break;
            case "toolbar-action":
                this.toolbarAction = true;
                this.overflowMenu = true;
                break;
            default:
                this.primary = true;
                break;
        }
    }
}
Button.decorators = [
    { type: Directive, args: [{
                selector: "[ibmButton]"
            },] }
];
Button.propDecorators = {
    ibmButton: [{ type: Input }],
    size: [{ type: Input }],
    baseClass: [{ type: HostBinding, args: ["class.bx--btn",] }],
    primary: [{ type: HostBinding, args: ["class.bx--btn--primary",] }],
    secondary: [{ type: HostBinding, args: ["class.bx--btn--secondary",] }],
    tertiary: [{ type: HostBinding, args: ["class.bx--btn--tertiary",] }],
    ghost: [{ type: HostBinding, args: ["class.bx--btn--ghost",] }],
    danger: [{ type: HostBinding, args: ["class.bx--btn--danger",] }],
    dangerPrimary: [{ type: HostBinding, args: ["class.bx--btn--danger--primary",] }],
    skeleton: [{ type: HostBinding, args: ["class.bx--skeleton",] }, { type: Input }],
    smallSize: [{ type: HostBinding, args: ["class.bx--btn--sm",] }],
    toolbarAction: [{ type: HostBinding, args: ["class.bx--toolbar-action",] }],
    overflowMenu: [{ type: HostBinding, args: ["class.bx--overflow-menu",] }]
};
function Button_tsickle_Closure_declarations() {
    /**
     * sets the button type
     * @type {?}
     */
    Button.prototype.ibmButton;
    /**
     * Specify the size of the button
     * @type {?}
     */
    Button.prototype.size;
    /** @type {?} */
    Button.prototype.primary;
    /** @type {?} */
    Button.prototype.secondary;
    /** @type {?} */
    Button.prototype.tertiary;
    /** @type {?} */
    Button.prototype.ghost;
    /** @type {?} */
    Button.prototype.danger;
    /** @type {?} */
    Button.prototype.dangerPrimary;
    /** @type {?} */
    Button.prototype.skeleton;
    /** @type {?} */
    Button.prototype.smallSize;
    /** @type {?} */
    Button.prototype.toolbarAction;
    /** @type {?} */
    Button.prototype.overflowMenu;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJidXR0b24vYnV0dG9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsS0FBSyxFQUVMLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQXFCdkIsTUFBTTs7Ozs7eUJBSWtILFNBQVM7Ozs7b0JBSS9GLFFBQVE7dUJBS1EsSUFBSTt5QkFDQSxLQUFLO3dCQUNQLEtBQUs7cUJBQ1gsS0FBSztzQkFDSCxLQUFLOzZCQUNXLEtBQUs7d0JBQ2IsS0FBSzt5QkFDZCxLQUFLOzZCQUNNLEtBQUs7NEJBQ1AsS0FBSzs7Ozs7SUFaNUQsSUFBa0MsU0FBUztRQUMxQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztLQUMzQjs7OztJQVlELFFBQVE7UUFDUCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsUUFBUSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3ZCLEtBQUssU0FBUztnQkFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFBQyxNQUFNO1lBQzNDLEtBQUssV0FBVztnQkFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFBQyxNQUFNO1lBQy9DLEtBQUssVUFBVTtnQkFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFBQyxNQUFNO1lBQzdDLEtBQUssT0FBTztnQkFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFBQyxNQUFNO1lBQ3ZDLEtBQUssUUFBUTtnQkFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFBQyxNQUFNO1lBQ3pDLEtBQUssaUJBQWlCO2dCQUFFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO2dCQUFDLE1BQU07WUFDekQsS0FBSyxnQkFBZ0I7Z0JBQ3BCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDekIsTUFBTTtZQUNQO2dCQUFTLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUFDLE1BQU07U0FDcEM7S0FDRDs7O1lBN0NELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsYUFBYTthQUN2Qjs7O3dCQUtDLEtBQUs7bUJBSUwsS0FBSzt3QkFFTCxXQUFXLFNBQUMsZUFBZTtzQkFHM0IsV0FBVyxTQUFDLHdCQUF3Qjt3QkFDcEMsV0FBVyxTQUFDLDBCQUEwQjt1QkFDdEMsV0FBVyxTQUFDLHlCQUF5QjtvQkFDckMsV0FBVyxTQUFDLHNCQUFzQjtxQkFDbEMsV0FBVyxTQUFDLHVCQUF1Qjs0QkFDbkMsV0FBVyxTQUFDLGdDQUFnQzt1QkFDNUMsV0FBVyxTQUFDLG9CQUFvQixjQUFHLEtBQUs7d0JBQ3hDLFdBQVcsU0FBQyxtQkFBbUI7NEJBQy9CLFdBQVcsU0FBQywwQkFBMEI7MkJBQ3RDLFdBQVcsU0FBQyx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHREaXJlY3RpdmUsXG5cdEhvc3RCaW5kaW5nLFxuXHRJbnB1dCxcblx0T25Jbml0XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbi8qKlxuICogQSBjb252aW5lbmNlIGRpcmVjdGl2ZSBmb3IgYXBwbHlpbmcgc3R5bGluZyB0byBhIGJ1dHRvbi5cbiAqXG4gKiBbU2VlIGRlbW9dKC4uLy4uLz9wYXRoPS9zdG9yeS9idXR0b24tLWJhc2ljKVxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBgaHRtbFxuICogPGJ1dHRvbiBpYm1CdXR0b24+QSBidXR0b248L2J1dHRvbj5cbiAqIDxidXR0b24gaWJtQnV0dG9uPVwic2Vjb25kYXJ5XCI+QSBzZWNvbmRhcnkgYnV0dG9uPC9idXR0b24+XG4gKiBgYGBcbiAqXG4gKiBTZWUgdGhlIFt2YW5pbGxhIGNhcmJvbiBkb2NzXShodHRwOi8vd3d3LmNhcmJvbmRlc2lnbnN5c3RlbS5jb20vY29tcG9uZW50cy9idXR0b24vY29kZSkgZm9yIG1vcmUgZGV0YWlsLlxuICpcbiAqIDxleGFtcGxlLXVybD4uLi8uLi9pZnJhbWUuaHRtbD9pZD1idXR0b24tLWJhc2ljPC9leGFtcGxlLXVybD5cbiAqL1xuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiBcIltpYm1CdXR0b25dXCJcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uIGltcGxlbWVudHMgT25Jbml0IHtcblx0LyoqXG5cdCAqIHNldHMgdGhlIGJ1dHRvbiB0eXBlXG5cdCAqL1xuXHRASW5wdXQoKSBpYm1CdXR0b246IFwicHJpbWFyeVwiIHwgXCJzZWNvbmRhcnlcIiB8IFwidGVydGlhcnlcIiB8IFwiZ2hvc3RcIiB8IFwiZGFuZ2VyXCIgfCBcImRhbmdlci0tcHJpbWFyeVwiIHwgXCJ0b29sYmFyLWFjdGlvblwiID0gXCJwcmltYXJ5XCI7XG5cdC8qKlxuXHQgKiBTcGVjaWZ5IHRoZSBzaXplIG9mIHRoZSBidXR0b25cblx0ICovXG5cdEBJbnB1dCgpIHNpemU6IFwibm9ybWFsXCIgfCBcInNtXCIgPSBcIm5vcm1hbFwiO1xuXHQvLyBhIHdob2xlIGxvdCBvZiBIb3N0QmluZGluZ3MgLi4uIHRoaXMgd2F5IHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGVsZW1lbnRSZWYgZGlyZWN0bHlcblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MuYngtLWJ0blwiKSBnZXQgYmFzZUNsYXNzKCkge1xuXHRcdHJldHVybiAhdGhpcy50b29sYmFyQWN0aW9uO1xuXHR9XG5cdEBIb3N0QmluZGluZyhcImNsYXNzLmJ4LS1idG4tLXByaW1hcnlcIikgcHJpbWFyeSA9IHRydWU7XG5cdEBIb3N0QmluZGluZyhcImNsYXNzLmJ4LS1idG4tLXNlY29uZGFyeVwiKSBzZWNvbmRhcnkgPSBmYWxzZTtcblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MuYngtLWJ0bi0tdGVydGlhcnlcIikgdGVydGlhcnkgPSBmYWxzZTtcblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MuYngtLWJ0bi0tZ2hvc3RcIikgZ2hvc3QgPSBmYWxzZTtcblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MuYngtLWJ0bi0tZGFuZ2VyXCIpIGRhbmdlciA9IGZhbHNlO1xuXHRASG9zdEJpbmRpbmcoXCJjbGFzcy5ieC0tYnRuLS1kYW5nZXItLXByaW1hcnlcIikgZGFuZ2VyUHJpbWFyeSA9IGZhbHNlO1xuXHRASG9zdEJpbmRpbmcoXCJjbGFzcy5ieC0tc2tlbGV0b25cIikgQElucHV0KCkgc2tlbGV0b24gPSBmYWxzZTtcblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MuYngtLWJ0bi0tc21cIikgc21hbGxTaXplID0gZmFsc2U7XG5cdEBIb3N0QmluZGluZyhcImNsYXNzLmJ4LS10b29sYmFyLWFjdGlvblwiKSB0b29sYmFyQWN0aW9uID0gZmFsc2U7XG5cdEBIb3N0QmluZGluZyhcImNsYXNzLmJ4LS1vdmVyZmxvdy1tZW51XCIpIG92ZXJmbG93TWVudSA9IGZhbHNlO1xuXG5cdG5nT25Jbml0KCkge1xuXHRcdGlmICh0aGlzLnNpemUgPT09IFwic21cIikge1xuXHRcdFx0dGhpcy5zbWFsbFNpemUgPSB0cnVlO1xuXHRcdH1cblx0XHR0aGlzLnByaW1hcnkgPSBmYWxzZTtcblx0XHRzd2l0Y2ggKHRoaXMuaWJtQnV0dG9uKSB7XG5cdFx0XHRjYXNlIFwicHJpbWFyeVwiOiB0aGlzLnByaW1hcnkgPSB0cnVlOyBicmVhaztcblx0XHRcdGNhc2UgXCJzZWNvbmRhcnlcIjogdGhpcy5zZWNvbmRhcnkgPSB0cnVlOyBicmVhaztcblx0XHRcdGNhc2UgXCJ0ZXJ0aWFyeVwiOiB0aGlzLnRlcnRpYXJ5ID0gdHJ1ZTsgYnJlYWs7XG5cdFx0XHRjYXNlIFwiZ2hvc3RcIjogdGhpcy5naG9zdCA9IHRydWU7IGJyZWFrO1xuXHRcdFx0Y2FzZSBcImRhbmdlclwiOiB0aGlzLmRhbmdlciA9IHRydWU7IGJyZWFrO1xuXHRcdFx0Y2FzZSBcImRhbmdlci0tcHJpbWFyeVwiOiB0aGlzLmRhbmdlclByaW1hcnkgPSB0cnVlOyBicmVhaztcblx0XHRcdGNhc2UgXCJ0b29sYmFyLWFjdGlvblwiOlxuXHRcdFx0XHR0aGlzLnRvb2xiYXJBY3Rpb24gPSB0cnVlO1xuXHRcdFx0XHR0aGlzLm92ZXJmbG93TWVudSA9IHRydWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDogdGhpcy5wcmltYXJ5ID0gdHJ1ZTsgYnJlYWs7XG5cdFx0fVxuXHR9XG59XG4iXX0=