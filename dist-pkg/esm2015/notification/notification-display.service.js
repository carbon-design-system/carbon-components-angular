/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, ApplicationRef } from "@angular/core";
export class NotificationDisplayService {
    /**
     * @param {?} applicationRef
     */
    constructor(applicationRef) {
        this.applicationRef = applicationRef;
    }
    /**
     * Programatically closes notification based on `notificationRef`.	 *
     * @param {?} notificationRef
     * @return {?}
     */
    close(notificationRef) {
        if (notificationRef.hostView) {
            setTimeout(() => {
                this.applicationRef.detachView(notificationRef.hostView);
                notificationRef.destroy();
            }, 200);
        }
    }
}
NotificationDisplayService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NotificationDisplayService.ctorParameters = () => [
    { type: ApplicationRef }
];
function NotificationDisplayService_tsickle_Closure_declarations() {
    /** @type {?} */
    NotificationDisplayService.prototype.applicationRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLWRpc3BsYXkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLWRpc3BsYXkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFVBQVUsRUFDVixjQUFjLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFHdkIsTUFBTTs7OztJQUNMLFlBQXNCLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtLQUFJOzs7Ozs7SUFLeEQsS0FBSyxDQUFDLGVBQW9CO1FBQ3pCLElBQUksZUFBZSxDQUFDLFFBQVEsRUFBRTtZQUM3QixVQUFVLENBQUUsR0FBRyxFQUFFO2dCQUNoQixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3pELGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUMxQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ1I7S0FDRDs7O1lBZEQsVUFBVTs7OztZQUhWLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRJbmplY3RhYmxlLFxuXHRBcHBsaWNhdGlvblJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uRGlzcGxheVNlcnZpY2Uge1xuXHRjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYXBwbGljYXRpb25SZWY6IEFwcGxpY2F0aW9uUmVmKSB7fVxuXG5cdC8qKlxuXHQgKiBQcm9ncmFtYXRpY2FsbHkgY2xvc2VzIG5vdGlmaWNhdGlvbiBiYXNlZCBvbiBgbm90aWZpY2F0aW9uUmVmYC5cdCAqXG5cdCAqL1xuXHRjbG9zZShub3RpZmljYXRpb25SZWY6IGFueSkge1xuXHRcdGlmIChub3RpZmljYXRpb25SZWYuaG9zdFZpZXcpIHtcblx0XHRcdHNldFRpbWVvdXQoICgpID0+IHtcblx0XHRcdFx0dGhpcy5hcHBsaWNhdGlvblJlZi5kZXRhY2hWaWV3KG5vdGlmaWNhdGlvblJlZi5ob3N0Vmlldyk7XG5cdFx0XHRcdG5vdGlmaWNhdGlvblJlZi5kZXN0cm95KCk7XG5cdFx0XHR9LCAyMDApO1xuXHRcdH1cblx0fVxufVxuIl19