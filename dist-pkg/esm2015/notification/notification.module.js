/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Close16Module } from "@carbon/icons-angular/lib/close/16";
import { ErrorFilled16Module } from "@carbon/icons-angular/lib/error--filled/16";
import { CheckmarkFilled16Module } from "@carbon/icons-angular/lib/checkmark--filled/16";
import { WarningFilled16Module } from "@carbon/icons-angular/lib/warning--filled/16";
import { Toast } from "./toast.component";
import { Notification } from "./notification.component";
import { NotificationService } from "./notification.service";
import { NotificationDisplayService } from "./notification-display.service";
import { I18nModule } from "./../i18n/i18n.module";
import { ExperimentalModule } from "./../experimental.module";
export { NotificationService } from "./notification.service";
export { NotificationDisplayService } from "./notification-display.service";
export { Notification } from "./notification.component";
export { Toast } from "./toast.component";
export class NotificationModule {
}
NotificationModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    Notification,
                    Toast
                ],
                exports: [
                    Notification,
                    Toast
                ],
                entryComponents: [Notification, Toast],
                imports: [
                    CommonModule,
                    I18nModule,
                    ExperimentalModule,
                    Close16Module,
                    ErrorFilled16Module,
                    CheckmarkFilled16Module,
                    WarningFilled16Module
                ],
                providers: [NotificationService, NotificationDisplayService]
            },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBRXJGLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDNUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRTlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzdELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUF1QjFDLE1BQU07OztZQXJCTCxRQUFRLFNBQUM7Z0JBQ1QsWUFBWSxFQUFFO29CQUNiLFlBQVk7b0JBQ1osS0FBSztpQkFDTDtnQkFDRCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixLQUFLO2lCQUNMO2dCQUNELGVBQWUsRUFBRSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUM7Z0JBQ3RDLE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLFVBQVU7b0JBQ1Ysa0JBQWtCO29CQUNsQixhQUFhO29CQUNiLG1CQUFtQjtvQkFDbkIsdUJBQXVCO29CQUN2QixxQkFBcUI7aUJBQ3JCO2dCQUNELFNBQVMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLDBCQUEwQixDQUFDO2FBQzVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgQ2xvc2UxNk1vZHVsZSB9IGZyb20gXCJAY2FyYm9uL2ljb25zLWFuZ3VsYXIvbGliL2Nsb3NlLzE2XCI7XG5pbXBvcnQgeyBFcnJvckZpbGxlZDE2TW9kdWxlIH0gZnJvbSBcIkBjYXJib24vaWNvbnMtYW5ndWxhci9saWIvZXJyb3ItLWZpbGxlZC8xNlwiO1xuaW1wb3J0IHsgQ2hlY2ttYXJrRmlsbGVkMTZNb2R1bGUgfSBmcm9tIFwiQGNhcmJvbi9pY29ucy1hbmd1bGFyL2xpYi9jaGVja21hcmstLWZpbGxlZC8xNlwiO1xuaW1wb3J0IHsgV2FybmluZ0ZpbGxlZDE2TW9kdWxlIH0gZnJvbSBcIkBjYXJib24vaWNvbnMtYW5ndWxhci9saWIvd2FybmluZy0tZmlsbGVkLzE2XCI7XG5cbmltcG9ydCB7IFRvYXN0IH0gZnJvbSBcIi4vdG9hc3QuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBOb3RpZmljYXRpb24gfSBmcm9tIFwiLi9ub3RpZmljYXRpb24uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vbm90aWZpY2F0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkRpc3BsYXlTZXJ2aWNlIH0gZnJvbSBcIi4vbm90aWZpY2F0aW9uLWRpc3BsYXkuc2VydmljZVwiO1xuaW1wb3J0IHsgSTE4bk1vZHVsZSB9IGZyb20gXCIuLy4uL2kxOG4vaTE4bi5tb2R1bGVcIjtcbmltcG9ydCB7IEV4cGVyaW1lbnRhbE1vZHVsZSB9IGZyb20gXCIuLy4uL2V4cGVyaW1lbnRhbC5tb2R1bGVcIjtcblxuZXhwb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gXCIuL25vdGlmaWNhdGlvbi5zZXJ2aWNlXCI7XG5leHBvcnQgeyBOb3RpZmljYXRpb25EaXNwbGF5U2VydmljZSB9IGZyb20gXCIuL25vdGlmaWNhdGlvbi1kaXNwbGF5LnNlcnZpY2VcIjtcbmV4cG9ydCB7IE5vdGlmaWNhdGlvbiB9IGZyb20gXCIuL25vdGlmaWNhdGlvbi5jb21wb25lbnRcIjtcbmV4cG9ydCB7IFRvYXN0IH0gZnJvbSBcIi4vdG9hc3QuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdE5vdGlmaWNhdGlvbixcblx0XHRUb2FzdFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Tm90aWZpY2F0aW9uLFxuXHRcdFRvYXN0XG5cdF0sXG5cdGVudHJ5Q29tcG9uZW50czogW05vdGlmaWNhdGlvbiwgVG9hc3RdLFxuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEkxOG5Nb2R1bGUsXG5cdFx0RXhwZXJpbWVudGFsTW9kdWxlLFxuXHRcdENsb3NlMTZNb2R1bGUsXG5cdFx0RXJyb3JGaWxsZWQxNk1vZHVsZSxcblx0XHRDaGVja21hcmtGaWxsZWQxNk1vZHVsZSxcblx0XHRXYXJuaW5nRmlsbGVkMTZNb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBbTm90aWZpY2F0aW9uU2VydmljZSwgTm90aWZpY2F0aW9uRGlzcGxheVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbk1vZHVsZSB7fVxuIl19