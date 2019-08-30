/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ChevronDown16Module } from "@carbon/icons-angular/lib/chevron--down/16";
import { CaretLeft16Module } from "@carbon/icons-angular/lib/caret--left/16";
import { CaretRight16Module } from "@carbon/icons-angular/lib/caret--right/16";
import { Pagination } from "./pagination.component";
import { I18nModule } from "./../i18n/i18n.module";
import { ExperimentalModule } from "./../experimental.module";
export { PaginationModel } from "./pagination-model.class";
export { Pagination } from "./pagination.component";
export class PaginationModule {
}
PaginationModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    Pagination
                ],
                exports: [
                    Pagination
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    I18nModule,
                    ExperimentalModule,
                    ChevronDown16Module,
                    CaretLeft16Module,
                    CaretRight16Module
                ]
            },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJib24tY29tcG9uZW50cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsicGFnaW5hdGlvbi9wYWdpbmF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRS9FLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQW1CcEQsTUFBTTs7O1lBakJMLFFBQVEsU0FBQztnQkFDVCxZQUFZLEVBQUU7b0JBQ2IsVUFBVTtpQkFDVjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1IsVUFBVTtpQkFDVjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixXQUFXO29CQUNYLFVBQVU7b0JBQ1Ysa0JBQWtCO29CQUNsQixtQkFBbUI7b0JBQ25CLGlCQUFpQjtvQkFDakIsa0JBQWtCO2lCQUNsQjthQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IENoZXZyb25Eb3duMTZNb2R1bGUgfSBmcm9tIFwiQGNhcmJvbi9pY29ucy1hbmd1bGFyL2xpYi9jaGV2cm9uLS1kb3duLzE2XCI7XG5pbXBvcnQgeyBDYXJldExlZnQxNk1vZHVsZSB9IGZyb20gXCJAY2FyYm9uL2ljb25zLWFuZ3VsYXIvbGliL2NhcmV0LS1sZWZ0LzE2XCI7XG5pbXBvcnQgeyBDYXJldFJpZ2h0MTZNb2R1bGUgfSBmcm9tIFwiQGNhcmJvbi9pY29ucy1hbmd1bGFyL2xpYi9jYXJldC0tcmlnaHQvMTZcIjtcblxuaW1wb3J0IHsgUGFnaW5hdGlvbiB9IGZyb20gXCIuL3BhZ2luYXRpb24uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJMThuTW9kdWxlIH0gZnJvbSBcIi4vLi4vaTE4bi9pMThuLm1vZHVsZVwiO1xuaW1wb3J0IHsgRXhwZXJpbWVudGFsTW9kdWxlIH0gZnJvbSBcIi4vLi4vZXhwZXJpbWVudGFsLm1vZHVsZVwiO1xuXG5leHBvcnQgeyBQYWdpbmF0aW9uTW9kZWwgfSBmcm9tIFwiLi9wYWdpbmF0aW9uLW1vZGVsLmNsYXNzXCI7XG5leHBvcnQgeyBQYWdpbmF0aW9uIH0gZnJvbSBcIi4vcGFnaW5hdGlvbi5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0UGFnaW5hdGlvblxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0UGFnaW5hdGlvblxuXHRdLFxuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZvcm1zTW9kdWxlLFxuXHRcdEkxOG5Nb2R1bGUsXG5cdFx0RXhwZXJpbWVudGFsTW9kdWxlLFxuXHRcdENoZXZyb25Eb3duMTZNb2R1bGUsXG5cdFx0Q2FyZXRMZWZ0MTZNb2R1bGUsXG5cdFx0Q2FyZXRSaWdodDE2TW9kdWxlXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbk1vZHVsZSB7fVxuIl19