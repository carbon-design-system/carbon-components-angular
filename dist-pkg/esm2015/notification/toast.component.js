/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, HostBinding } from "@angular/core";
import { Notification } from "./notification.component";
import { ExperimentalService } from "./../experimental.module";
import { NotificationDisplayService } from "./notification-display.service";
import { I18n } from "./../i18n/i18n.module";
/**
 * Toast messages are displayed toward the top of the UI and do not interrupt user’s work.
 *
 * [See demo](../../?path=/story/notification--toast)
 *
 * <example-url>../../iframe.html?id=notification--toast</example-url>
 */
export class Toast extends Notification {
    /**
     * @param {?} notificationDisplayService
     * @param {?} i18n
     * @param {?} experimental
     */
    constructor(notificationDisplayService, i18n, experimental) {
        super(notificationDisplayService, i18n);
        this.notificationDisplayService = notificationDisplayService;
        this.i18n = i18n;
        this.experimental = experimental;
        this.toastID = "notification";
        this.toastClass = true;
        this.role = "alert";
    }
    /**
     * @return {?}
     */
    get isError() { return this.notificationObj["type"] === "error"; }
    /**
     * @return {?}
     */
    get isInfo() { return this.notificationObj["type"] === "info"; }
    /**
     * @return {?}
     */
    get isSuccess() { return this.notificationObj["type"] === "success"; }
    /**
     * @return {?}
     */
    get isWarning() { return this.notificationObj["type"] === "warning"; }
    /**
     * @return {?}
     */
    get isExperimental() {
        return this.experimental.isExperimental;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.notificationObj.closeLabel) {
            this.notificationObj.closeLabel = this.i18n.get().NOTIFICATION.CLOSE_BUTTON;
        }
    }
}
Toast.decorators = [
    { type: Component, args: [{
                selector: "ibm-toast",
                template: `
		<ibm-icon-error-filled16
				*ngIf="notificationObj.type === 'error'"
				class="bx--toast-notification__icon">
			</ibm-icon-error-filled16>
			<ibm-icon-warning-filled16
				*ngIf="notificationObj.type === 'warning'"
				class="bx--toast-notification__icon">
			</ibm-icon-warning-filled16>
			<ibm-icon-checkmark-filled16
				*ngIf="notificationObj.type === 'success'"
				class="bx--toast-notification__icon">
			</ibm-icon-checkmark-filled16>
		<div class="bx--toast-notification__details">
			<h3 class="bx--toast-notification__title" [innerHTML]="notificationObj.title"></h3>
			<p class="bx--toast-notification__subtitle" [innerHTML]="notificationObj.subtitle"></p>
			<p class="bx--toast-notification__caption" [innerHTML]="notificationObj.caption"></p>
		</div>
		<button
			class="bx--toast-notification__close-button"
			type="button"
			[attr.aria-label]="notificationObj.closeLabel"
			(click)="onClose()">
			<ibm-icon-close16 class="bx--toast-notification__close-icon"></ibm-icon-close16>
		</button>
	`
            }] }
];
/** @nocollapse */
Toast.ctorParameters = () => [
    { type: NotificationDisplayService },
    { type: I18n },
    { type: ExperimentalService }
];
Toast.propDecorators = {
    notificationObj: [{ type: Input }],
    toastID: [{ type: HostBinding, args: ["attr.id",] }],
    toastClass: [{ type: HostBinding, args: ["class.bx--toast-notification",] }],
    role: [{ type: HostBinding, args: ["attr.role",] }],
    isError: [{ type: HostBinding, args: ["class.bx--toast-notification--error",] }],
    isInfo: [{ type: HostBinding, args: ["class.bx--toast-notification--info",] }],
    isSuccess: [{ type: HostBinding, args: ["class.bx--toast-notification--success",] }],
    isWarning: [{ type: HostBinding, args: ["class.bx--toast-notification--warning",] }]
};
function Toast_tsickle_Closure_declarations() {
    /**
     * Can have `type`, `title`, `subtitle`, and `caption` members.
     *
     * `type` can be one of `"error"`, `"info"`, `"warning"`, or `"success"`
     * @type {?}
     */
    Toast.prototype.notificationObj;
    /** @type {?} */
    Toast.prototype.toastID;
    /** @type {?} */
    Toast.prototype.toastClass;
    /** @type {?} */
    Toast.prototype.role;
    /** @type {?} */
    Toast.prototype.notificationDisplayService;
    /** @type {?} */
    Toast.prototype.i18n;
    /** @type {?} */
    Toast.prototype.experimental;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FyYm9uLWNvbXBvbmVudHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi90b2FzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBQ1QsS0FBSyxFQUVMLFdBQVcsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDNUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7OztBQXNDN0MsTUFBTSxZQUFhLFNBQVEsWUFBWTs7Ozs7O0lBcUJ0QyxZQUNXLDBCQUFzRCxFQUN0RCxJQUFVLEVBQ1YsWUFBaUM7UUFDM0MsS0FBSyxDQUFDLDBCQUEwQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBSDlCLCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBNEI7UUFDdEQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLGlCQUFZLEdBQVosWUFBWSxDQUFxQjt1QkFoQlYsY0FBYzswQkFDVSxJQUFJO29CQUM3QixPQUFPO0tBZ0J2Qzs7OztJQWRELElBQXdELE9BQU8sS0FBSyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEtBQUssT0FBTyxDQUFDLEVBQUU7Ozs7SUFDdEgsSUFBdUQsTUFBTSxLQUFLLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsS0FBSyxNQUFNLENBQUMsRUFBRTs7OztJQUNuSCxJQUEwRCxTQUFTLEtBQUssT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFNBQVMsQ0FBQyxFQUFFOzs7O0lBQzVILElBQTBELFNBQVMsS0FBSyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEtBQUssU0FBUyxDQUFDLEVBQUU7Ozs7SUFFNUgsSUFBSSxjQUFjO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUM7S0FDeEM7Ozs7SUFTRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQztTQUM1RTtLQUNEOzs7WUE3REQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF5QlQ7YUFDRDs7OztZQXRDUSwwQkFBMEI7WUFDMUIsSUFBSTtZQUZKLG1CQUFtQjs7OzhCQThDMUIsS0FBSztzQkFFTCxXQUFXLFNBQUMsU0FBUzt5QkFDckIsV0FBVyxTQUFDLDhCQUE4QjttQkFDMUMsV0FBVyxTQUFDLFdBQVc7c0JBRXZCLFdBQVcsU0FBQyxxQ0FBcUM7cUJBQ2pELFdBQVcsU0FBQyxvQ0FBb0M7d0JBQ2hELFdBQVcsU0FBQyx1Q0FBdUM7d0JBQ25ELFdBQVcsU0FBQyx1Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdElucHV0LFxuXHRPbkluaXQsXG5cdEhvc3RCaW5kaW5nXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFRvYXN0Q29udGVudCB9IGZyb20gXCIuL25vdGlmaWNhdGlvbi1jb250ZW50LmludGVyZmFjZVwiO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uIH0gZnJvbSBcIi4vbm90aWZpY2F0aW9uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRXhwZXJpbWVudGFsU2VydmljZSB9IGZyb20gXCIuLy4uL2V4cGVyaW1lbnRhbC5tb2R1bGVcIjtcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkRpc3BsYXlTZXJ2aWNlIH0gZnJvbSBcIi4vbm90aWZpY2F0aW9uLWRpc3BsYXkuc2VydmljZVwiO1xuaW1wb3J0IHsgSTE4biB9IGZyb20gXCIuLy4uL2kxOG4vaTE4bi5tb2R1bGVcIjtcblxuLyoqXG4gKiBUb2FzdCBtZXNzYWdlcyBhcmUgZGlzcGxheWVkIHRvd2FyZCB0aGUgdG9wIG9mIHRoZSBVSSBhbmQgZG8gbm90IGludGVycnVwdCB1c2Vy4oCZcyB3b3JrLlxuICpcbiAqIFtTZWUgZGVtb10oLi4vLi4vP3BhdGg9L3N0b3J5L25vdGlmaWNhdGlvbi0tdG9hc3QpXG4gKlxuICogPGV4YW1wbGUtdXJsPi4uLy4uL2lmcmFtZS5odG1sP2lkPW5vdGlmaWNhdGlvbi0tdG9hc3Q8L2V4YW1wbGUtdXJsPlxuICovXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiaWJtLXRvYXN0XCIsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGlibS1pY29uLWVycm9yLWZpbGxlZDE2XG5cdFx0XHRcdCpuZ0lmPVwibm90aWZpY2F0aW9uT2JqLnR5cGUgPT09ICdlcnJvcidcIlxuXHRcdFx0XHRjbGFzcz1cImJ4LS10b2FzdC1ub3RpZmljYXRpb25fX2ljb25cIj5cblx0XHRcdDwvaWJtLWljb24tZXJyb3ItZmlsbGVkMTY+XG5cdFx0XHQ8aWJtLWljb24td2FybmluZy1maWxsZWQxNlxuXHRcdFx0XHQqbmdJZj1cIm5vdGlmaWNhdGlvbk9iai50eXBlID09PSAnd2FybmluZydcIlxuXHRcdFx0XHRjbGFzcz1cImJ4LS10b2FzdC1ub3RpZmljYXRpb25fX2ljb25cIj5cblx0XHRcdDwvaWJtLWljb24td2FybmluZy1maWxsZWQxNj5cblx0XHRcdDxpYm0taWNvbi1jaGVja21hcmstZmlsbGVkMTZcblx0XHRcdFx0Km5nSWY9XCJub3RpZmljYXRpb25PYmoudHlwZSA9PT0gJ3N1Y2Nlc3MnXCJcblx0XHRcdFx0Y2xhc3M9XCJieC0tdG9hc3Qtbm90aWZpY2F0aW9uX19pY29uXCI+XG5cdFx0XHQ8L2libS1pY29uLWNoZWNrbWFyay1maWxsZWQxNj5cblx0XHQ8ZGl2IGNsYXNzPVwiYngtLXRvYXN0LW5vdGlmaWNhdGlvbl9fZGV0YWlsc1wiPlxuXHRcdFx0PGgzIGNsYXNzPVwiYngtLXRvYXN0LW5vdGlmaWNhdGlvbl9fdGl0bGVcIiBbaW5uZXJIVE1MXT1cIm5vdGlmaWNhdGlvbk9iai50aXRsZVwiPjwvaDM+XG5cdFx0XHQ8cCBjbGFzcz1cImJ4LS10b2FzdC1ub3RpZmljYXRpb25fX3N1YnRpdGxlXCIgW2lubmVySFRNTF09XCJub3RpZmljYXRpb25PYmouc3VidGl0bGVcIj48L3A+XG5cdFx0XHQ8cCBjbGFzcz1cImJ4LS10b2FzdC1ub3RpZmljYXRpb25fX2NhcHRpb25cIiBbaW5uZXJIVE1MXT1cIm5vdGlmaWNhdGlvbk9iai5jYXB0aW9uXCI+PC9wPlxuXHRcdDwvZGl2PlxuXHRcdDxidXR0b25cblx0XHRcdGNsYXNzPVwiYngtLXRvYXN0LW5vdGlmaWNhdGlvbl9fY2xvc2UtYnV0dG9uXCJcblx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0W2F0dHIuYXJpYS1sYWJlbF09XCJub3RpZmljYXRpb25PYmouY2xvc2VMYWJlbFwiXG5cdFx0XHQoY2xpY2spPVwib25DbG9zZSgpXCI+XG5cdFx0XHQ8aWJtLWljb24tY2xvc2UxNiBjbGFzcz1cImJ4LS10b2FzdC1ub3RpZmljYXRpb25fX2Nsb3NlLWljb25cIj48L2libS1pY29uLWNsb3NlMTY+XG5cdFx0PC9idXR0b24+XG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgVG9hc3QgZXh0ZW5kcyBOb3RpZmljYXRpb24gaW1wbGVtZW50cyBPbkluaXQge1xuXHQvKipcblx0ICogQ2FuIGhhdmUgYHR5cGVgLCBgdGl0bGVgLCBgc3VidGl0bGVgLCBhbmQgYGNhcHRpb25gIG1lbWJlcnMuXG5cdCAqXG5cdCAqIGB0eXBlYCBjYW4gYmUgb25lIG9mIGBcImVycm9yXCJgLCBgXCJpbmZvXCJgLCBgXCJ3YXJuaW5nXCJgLCBvciBgXCJzdWNjZXNzXCJgXG5cdCAqL1xuXHRASW5wdXQoKSBub3RpZmljYXRpb25PYmo6IFRvYXN0Q29udGVudDtcblxuXHRASG9zdEJpbmRpbmcoXCJhdHRyLmlkXCIpIHRvYXN0SUQgPSBcIm5vdGlmaWNhdGlvblwiO1xuXHRASG9zdEJpbmRpbmcoXCJjbGFzcy5ieC0tdG9hc3Qtbm90aWZpY2F0aW9uXCIpIHRvYXN0Q2xhc3MgPSB0cnVlO1xuXHRASG9zdEJpbmRpbmcoXCJhdHRyLnJvbGVcIikgcm9sZSA9IFwiYWxlcnRcIjtcblxuXHRASG9zdEJpbmRpbmcoXCJjbGFzcy5ieC0tdG9hc3Qtbm90aWZpY2F0aW9uLS1lcnJvclwiKSBnZXQgaXNFcnJvcigpIHsgcmV0dXJuIHRoaXMubm90aWZpY2F0aW9uT2JqW1widHlwZVwiXSA9PT0gXCJlcnJvclwiOyB9XG5cdEBIb3N0QmluZGluZyhcImNsYXNzLmJ4LS10b2FzdC1ub3RpZmljYXRpb24tLWluZm9cIikgZ2V0IGlzSW5mbygpIHsgcmV0dXJuIHRoaXMubm90aWZpY2F0aW9uT2JqW1widHlwZVwiXSA9PT0gXCJpbmZvXCI7IH1cblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MuYngtLXRvYXN0LW5vdGlmaWNhdGlvbi0tc3VjY2Vzc1wiKSBnZXQgaXNTdWNjZXNzKCkgeyByZXR1cm4gdGhpcy5ub3RpZmljYXRpb25PYmpbXCJ0eXBlXCJdID09PSBcInN1Y2Nlc3NcIjsgfVxuXHRASG9zdEJpbmRpbmcoXCJjbGFzcy5ieC0tdG9hc3Qtbm90aWZpY2F0aW9uLS13YXJuaW5nXCIpIGdldCBpc1dhcm5pbmcoKSB7IHJldHVybiB0aGlzLm5vdGlmaWNhdGlvbk9ialtcInR5cGVcIl0gPT09IFwid2FybmluZ1wiOyB9XG5cblx0Z2V0IGlzRXhwZXJpbWVudGFsKCkge1xuXHRcdHJldHVybiB0aGlzLmV4cGVyaW1lbnRhbC5pc0V4cGVyaW1lbnRhbDtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByb3RlY3RlZCBub3RpZmljYXRpb25EaXNwbGF5U2VydmljZTogTm90aWZpY2F0aW9uRGlzcGxheVNlcnZpY2UsXG5cdFx0cHJvdGVjdGVkIGkxOG46IEkxOG4sXG5cdFx0cHJvdGVjdGVkIGV4cGVyaW1lbnRhbDogRXhwZXJpbWVudGFsU2VydmljZSkge1xuXHRcdHN1cGVyKG5vdGlmaWNhdGlvbkRpc3BsYXlTZXJ2aWNlLCBpMThuKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdGlmICghdGhpcy5ub3RpZmljYXRpb25PYmouY2xvc2VMYWJlbCkge1xuXHRcdFx0dGhpcy5ub3RpZmljYXRpb25PYmouY2xvc2VMYWJlbCA9IHRoaXMuaTE4bi5nZXQoKS5OT1RJRklDQVRJT04uQ0xPU0VfQlVUVE9OO1xuXHRcdH1cblx0fVxufVxuIl19