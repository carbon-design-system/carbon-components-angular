/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewChild, HostBinding } from "@angular/core";
import { I18n } from "./../i18n/i18n.module";
import { NotificationDisplayService } from "./notification-display.service";
import { of } from "rxjs";
/**
 * Notification messages are displayed toward the top of the UI and do not interrupt user’s work.
 *
 * [See demo](../../?path=/story/notification--basic)
 *
 * <example-url>../../iframe.html?id=notification--basic</example-url>
 */
export class Notification {
    /**
     * @param {?} notificationDisplayService
     * @param {?} i18n
     */
    constructor(notificationDisplayService, i18n) {
        this.notificationDisplayService = notificationDisplayService;
        this.i18n = i18n;
        /**
         * Emits on close.
         */
        this.close = new EventEmitter();
        this.notificationID = "notification";
        this.notificationClass = true;
        this.role = "alert";
        this.defaultNotificationObj = {
            title: "",
            message: "",
            type: "info",
            closeLabel: this.i18n.get("NOTIFICATION.CLOSE_BUTTON")
        };
        this._notificationObj = Object.assign({}, this.defaultNotificationObj);
    }
    /**
     * Can have `type`, `title`, and `message` members.
     *
     * `type` can be one of `"info"`, `"warning"`, `"error"`, `"success"`
     *
     * `message` is the message to display
     * @return {?}
     */
    get notificationObj() {
        return this._notificationObj;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    set notificationObj(obj) {
        if (obj.closeLabel) {
            obj.closeLabel = of(obj.closeLabel);
        }
        this._notificationObj = Object.assign({}, this.defaultNotificationObj, obj);
    }
    /**
     * @return {?}
     */
    get isError() { return this.notificationObj.type === "error"; }
    /**
     * @return {?}
     */
    get isInfo() { return this.notificationObj.type === "info"; }
    /**
     * @return {?}
     */
    get isSuccess() { return this.notificationObj.type === "success"; }
    /**
     * @return {?}
     */
    get isWarning() { return this.notificationObj.type === "warning"; }
    /**
     * Emits close event.
     * @return {?}
     */
    onClose() {
        this.close.emit();
    }
    /**
     * @return {?}
     */
    destroy() {
        this.notificationDisplayService.close(this);
    }
}
Notification.decorators = [
    { type: Component, args: [{
                selector: "ibm-notification",
                template: `
		<div class="bx--inline-notification__details">
			<ibm-icon-error-filled16
				*ngIf="notificationObj.type === 'error'"
				class="bx--inline-notification__icon">
			</ibm-icon-error-filled16>
			<ibm-icon-warning-filled16
				*ngIf="notificationObj.type === 'warning'"
				class="bx--inline-notification__icon">
			</ibm-icon-warning-filled16>
			<ibm-icon-checkmark-filled16
				*ngIf="notificationObj.type === 'success'"
				class="bx--inline-notification__icon">
			</ibm-icon-checkmark-filled16>
			<div class="bx--inline-notification__text-wrapper">
				<p [innerHTML]="notificationObj.title" class="bx--inline-notification__title"></p>
				<p [innerHTML]="notificationObj.message" class="bx--inline-notification__subtitle"></p>
			</div>
		</div>
		<button
			(click)="onClose()"
			class="bx--inline-notification__close-button"
			[attr.aria-label]="notificationObj.closeLabel | async"
			type="button">
			<ibm-icon-close16 class="bx--inline-notification__close-icon"></ibm-icon-close16>
		</button>
	`
            }] }
];
/** @nocollapse */
Notification.ctorParameters = () => [
    { type: NotificationDisplayService },
    { type: I18n }
];
Notification.propDecorators = {
    notificationObj: [{ type: Input }],
    close: [{ type: Output }],
    notification: [{ type: ViewChild, args: ["notification",] }],
    notificationID: [{ type: HostBinding, args: ["attr.id",] }],
    notificationClass: [{ type: HostBinding, args: ["class.bx--inline-notification",] }],
    role: [{ type: HostBinding, args: ["attr.role",] }],
    isError: [{ type: HostBinding, args: ["class.bx--inline-notification--error",] }],
    isInfo: [{ type: HostBinding, args: ["class.bx--inline-notification--info",] }],
    isSuccess: [{ type: HostBinding, args: ["class.bx--inline-notification--success",] }],
    isWarning: [{ type: HostBinding, args: ["class.bx--inline-notification--warning",] }]
};
function Notification_tsickle_Closure_declarations() {
    /**
     * Emits on close.
     * @type {?}
     */
    Notification.prototype.close;
    /** @type {?} */
    Notification.prototype.componentRef;
    /** @type {?} */
    Notification.prototype.notification;
    /** @type {?} */
    Notification.prototype.notificationID;
    /** @type {?} */
    Notification.prototype.notificationClass;
    /** @type {?} */
    Notification.prototype.role;
    /** @type {?} */
    Notification.prototype.defaultNotificationObj;
    /** @type {?} */
    Notification.prototype._notificationObj;
    /** @type {?} */
    Notification.prototype.notificationDisplayService;
    /** @type {?} */
    Notification.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFFWixTQUFTLEVBQ1QsV0FBVyxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7Ozs7OztBQXVDMUIsTUFBTTs7Ozs7SUE0Q0wsWUFBc0IsMEJBQXNELEVBQVksSUFBVTtRQUE1RSwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQTRCO1FBQVksU0FBSSxHQUFKLElBQUksQ0FBTTs7OztxQkF2QjdELElBQUksWUFBWSxFQUFFOzhCQU1kLGNBQWM7aUNBQ1csSUFBSTtvQkFDckMsT0FBTztzQ0FPTDtZQUNsQyxLQUFLLEVBQUUsRUFBRTtZQUNULE9BQU8sRUFBRSxFQUFFO1lBQ1gsSUFBSSxFQUFFLE1BQU07WUFDWixVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUM7U0FDdEQ7Z0NBQ2lELE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztLQUVNOzs7Ozs7Ozs7SUFwQ3RHLElBQWEsZUFBZTtRQUMzQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztLQUM3Qjs7Ozs7SUFDRCxJQUFJLGVBQWUsQ0FBQyxHQUF3QjtRQUMzQyxJQUFJLEdBQUcsQ0FBQyxVQUFVLEVBQUU7WUFDbkIsR0FBRyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3BDO1FBQ0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUM1RTs7OztJQWVELElBQXlELE9BQU8sS0FBSyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxFQUFFOzs7O0lBQ3BILElBQXdELE1BQU0sS0FBSyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxFQUFFOzs7O0lBQ2pILElBQTJELFNBQVMsS0FBSyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxFQUFFOzs7O0lBQzFILElBQTJELFNBQVMsS0FBSyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxFQUFFOzs7OztJQWUxSCxPQUFPO1FBQ04sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNsQjs7OztJQUVELE9BQU87UUFDTixJQUFJLENBQUMsMEJBQTBCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzVDOzs7WUFyRkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEwQlQ7YUFDRDs7OztZQXZDUSwwQkFBMEI7WUFEMUIsSUFBSTs7OzhCQWlEWCxLQUFLO29CQWFMLE1BQU07MkJBSU4sU0FBUyxTQUFDLGNBQWM7NkJBRXhCLFdBQVcsU0FBQyxTQUFTO2dDQUNyQixXQUFXLFNBQUMsK0JBQStCO21CQUMzQyxXQUFXLFNBQUMsV0FBVztzQkFFdkIsV0FBVyxTQUFDLHNDQUFzQztxQkFDbEQsV0FBVyxTQUFDLHFDQUFxQzt3QkFDakQsV0FBVyxTQUFDLHdDQUF3Qzt3QkFDcEQsV0FBVyxTQUFDLHdDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0RXZlbnRFbWl0dGVyLFxuXHRDb21wb25lbnRSZWYsXG5cdFZpZXdDaGlsZCxcblx0SG9zdEJpbmRpbmdcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgTm90aWZpY2F0aW9uQ29udGVudCB9IGZyb20gXCIuL25vdGlmaWNhdGlvbi1jb250ZW50LmludGVyZmFjZVwiO1xuaW1wb3J0IHsgSTE4biB9IGZyb20gXCIuLy4uL2kxOG4vaTE4bi5tb2R1bGVcIjtcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkRpc3BsYXlTZXJ2aWNlIH0gZnJvbSBcIi4vbm90aWZpY2F0aW9uLWRpc3BsYXkuc2VydmljZVwiO1xuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xuXG4vKipcbiAqIE5vdGlmaWNhdGlvbiBtZXNzYWdlcyBhcmUgZGlzcGxheWVkIHRvd2FyZCB0aGUgdG9wIG9mIHRoZSBVSSBhbmQgZG8gbm90IGludGVycnVwdCB1c2Vy4oCZcyB3b3JrLlxuICpcbiAqIFtTZWUgZGVtb10oLi4vLi4vP3BhdGg9L3N0b3J5L25vdGlmaWNhdGlvbi0tYmFzaWMpXG4gKlxuICogPGV4YW1wbGUtdXJsPi4uLy4uL2lmcmFtZS5odG1sP2lkPW5vdGlmaWNhdGlvbi0tYmFzaWM8L2V4YW1wbGUtdXJsPlxuICovXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiaWJtLW5vdGlmaWNhdGlvblwiLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgY2xhc3M9XCJieC0taW5saW5lLW5vdGlmaWNhdGlvbl9fZGV0YWlsc1wiPlxuXHRcdFx0PGlibS1pY29uLWVycm9yLWZpbGxlZDE2XG5cdFx0XHRcdCpuZ0lmPVwibm90aWZpY2F0aW9uT2JqLnR5cGUgPT09ICdlcnJvcidcIlxuXHRcdFx0XHRjbGFzcz1cImJ4LS1pbmxpbmUtbm90aWZpY2F0aW9uX19pY29uXCI+XG5cdFx0XHQ8L2libS1pY29uLWVycm9yLWZpbGxlZDE2PlxuXHRcdFx0PGlibS1pY29uLXdhcm5pbmctZmlsbGVkMTZcblx0XHRcdFx0Km5nSWY9XCJub3RpZmljYXRpb25PYmoudHlwZSA9PT0gJ3dhcm5pbmcnXCJcblx0XHRcdFx0Y2xhc3M9XCJieC0taW5saW5lLW5vdGlmaWNhdGlvbl9faWNvblwiPlxuXHRcdFx0PC9pYm0taWNvbi13YXJuaW5nLWZpbGxlZDE2PlxuXHRcdFx0PGlibS1pY29uLWNoZWNrbWFyay1maWxsZWQxNlxuXHRcdFx0XHQqbmdJZj1cIm5vdGlmaWNhdGlvbk9iai50eXBlID09PSAnc3VjY2VzcydcIlxuXHRcdFx0XHRjbGFzcz1cImJ4LS1pbmxpbmUtbm90aWZpY2F0aW9uX19pY29uXCI+XG5cdFx0XHQ8L2libS1pY29uLWNoZWNrbWFyay1maWxsZWQxNj5cblx0XHRcdDxkaXYgY2xhc3M9XCJieC0taW5saW5lLW5vdGlmaWNhdGlvbl9fdGV4dC13cmFwcGVyXCI+XG5cdFx0XHRcdDxwIFtpbm5lckhUTUxdPVwibm90aWZpY2F0aW9uT2JqLnRpdGxlXCIgY2xhc3M9XCJieC0taW5saW5lLW5vdGlmaWNhdGlvbl9fdGl0bGVcIj48L3A+XG5cdFx0XHRcdDxwIFtpbm5lckhUTUxdPVwibm90aWZpY2F0aW9uT2JqLm1lc3NhZ2VcIiBjbGFzcz1cImJ4LS1pbmxpbmUtbm90aWZpY2F0aW9uX19zdWJ0aXRsZVwiPjwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdDxidXR0b25cblx0XHRcdChjbGljayk9XCJvbkNsb3NlKClcIlxuXHRcdFx0Y2xhc3M9XCJieC0taW5saW5lLW5vdGlmaWNhdGlvbl9fY2xvc2UtYnV0dG9uXCJcblx0XHRcdFthdHRyLmFyaWEtbGFiZWxdPVwibm90aWZpY2F0aW9uT2JqLmNsb3NlTGFiZWwgfCBhc3luY1wiXG5cdFx0XHR0eXBlPVwiYnV0dG9uXCI+XG5cdFx0XHQ8aWJtLWljb24tY2xvc2UxNiBjbGFzcz1cImJ4LS1pbmxpbmUtbm90aWZpY2F0aW9uX19jbG9zZS1pY29uXCI+PC9pYm0taWNvbi1jbG9zZTE2PlxuXHRcdDwvYnV0dG9uPlxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbiB7XG5cdC8qKlxuXHQgKiBDYW4gaGF2ZSBgdHlwZWAsIGB0aXRsZWAsIGFuZCBgbWVzc2FnZWAgbWVtYmVycy5cblx0ICpcblx0ICogYHR5cGVgIGNhbiBiZSBvbmUgb2YgYFwiaW5mb1wiYCwgYFwid2FybmluZ1wiYCwgYFwiZXJyb3JcImAsIGBcInN1Y2Nlc3NcImBcblx0ICpcblx0ICogYG1lc3NhZ2VgIGlzIHRoZSBtZXNzYWdlIHRvIGRpc3BsYXlcblx0ICovXG5cdEBJbnB1dCgpIGdldCBub3RpZmljYXRpb25PYmooKTogTm90aWZpY2F0aW9uQ29udGVudCB7XG5cdFx0cmV0dXJuIHRoaXMuX25vdGlmaWNhdGlvbk9iajtcblx0fVxuXHRzZXQgbm90aWZpY2F0aW9uT2JqKG9iajogTm90aWZpY2F0aW9uQ29udGVudCkge1xuXHRcdGlmIChvYmouY2xvc2VMYWJlbCkge1xuXHRcdFx0b2JqLmNsb3NlTGFiZWwgPSBvZihvYmouY2xvc2VMYWJlbCk7XG5cdFx0fVxuXHRcdHRoaXMuX25vdGlmaWNhdGlvbk9iaiA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdE5vdGlmaWNhdGlvbk9iaiwgb2JqKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBFbWl0cyBvbiBjbG9zZS5cblx0ICovXG5cdEBPdXRwdXQoKSBjbG9zZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8Tm90aWZpY2F0aW9uPjtcblxuXHRAVmlld0NoaWxkKFwibm90aWZpY2F0aW9uXCIpIG5vdGlmaWNhdGlvbjtcblxuXHRASG9zdEJpbmRpbmcoXCJhdHRyLmlkXCIpIG5vdGlmaWNhdGlvbklEID0gXCJub3RpZmljYXRpb25cIjtcblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MuYngtLWlubGluZS1ub3RpZmljYXRpb25cIikgbm90aWZpY2F0aW9uQ2xhc3MgPSB0cnVlO1xuXHRASG9zdEJpbmRpbmcoXCJhdHRyLnJvbGVcIikgcm9sZSA9IFwiYWxlcnRcIjtcblxuXHRASG9zdEJpbmRpbmcoXCJjbGFzcy5ieC0taW5saW5lLW5vdGlmaWNhdGlvbi0tZXJyb3JcIikgZ2V0IGlzRXJyb3IoKSB7IHJldHVybiB0aGlzLm5vdGlmaWNhdGlvbk9iai50eXBlID09PSBcImVycm9yXCI7IH1cblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MuYngtLWlubGluZS1ub3RpZmljYXRpb24tLWluZm9cIikgZ2V0IGlzSW5mbygpIHsgcmV0dXJuIHRoaXMubm90aWZpY2F0aW9uT2JqLnR5cGUgPT09IFwiaW5mb1wiOyB9XG5cdEBIb3N0QmluZGluZyhcImNsYXNzLmJ4LS1pbmxpbmUtbm90aWZpY2F0aW9uLS1zdWNjZXNzXCIpIGdldCBpc1N1Y2Nlc3MoKSB7IHJldHVybiB0aGlzLm5vdGlmaWNhdGlvbk9iai50eXBlID09PSBcInN1Y2Nlc3NcIjsgfVxuXHRASG9zdEJpbmRpbmcoXCJjbGFzcy5ieC0taW5saW5lLW5vdGlmaWNhdGlvbi0td2FybmluZ1wiKSBnZXQgaXNXYXJuaW5nKCkgeyByZXR1cm4gdGhpcy5ub3RpZmljYXRpb25PYmoudHlwZSA9PT0gXCJ3YXJuaW5nXCI7IH1cblxuXHRwcm90ZWN0ZWQgZGVmYXVsdE5vdGlmaWNhdGlvbk9iaiA9IHtcblx0XHR0aXRsZTogXCJcIixcblx0XHRtZXNzYWdlOiBcIlwiLFxuXHRcdHR5cGU6IFwiaW5mb1wiLFxuXHRcdGNsb3NlTGFiZWw6IHRoaXMuaTE4bi5nZXQoXCJOT1RJRklDQVRJT04uQ0xPU0VfQlVUVE9OXCIpXG5cdH07XG5cdHByb3RlY3RlZCBfbm90aWZpY2F0aW9uT2JqOiBOb3RpZmljYXRpb25Db250ZW50ID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0Tm90aWZpY2F0aW9uT2JqKTtcblxuXHRjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbm90aWZpY2F0aW9uRGlzcGxheVNlcnZpY2U6IE5vdGlmaWNhdGlvbkRpc3BsYXlTZXJ2aWNlLCBwcm90ZWN0ZWQgaTE4bjogSTE4bikge31cblxuXHQvKipcblx0ICogRW1pdHMgY2xvc2UgZXZlbnQuXG5cdCAqL1xuXHRvbkNsb3NlKCkge1xuXHRcdHRoaXMuY2xvc2UuZW1pdCgpO1xuXHR9XG5cblx0ZGVzdHJveSgpIHtcblx0XHR0aGlzLm5vdGlmaWNhdGlvbkRpc3BsYXlTZXJ2aWNlLmNsb3NlKHRoaXMpO1xuXHR9XG59XG4iXX0=