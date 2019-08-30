/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ChevronRight16Module } from "@carbon/icons-angular/lib/chevron--right/16";
import { Search16Module } from "@carbon/icons-angular/lib/search/16";
import { Close16Module } from "@carbon/icons-angular/lib/close/16";
import { DialogModule } from "./../dialog/dialog.module";
import { NFormsModule } from "./../forms/forms.module";
import { ButtonModule, SearchModule } from "../";
import { Table } from "./table.component";
import { TableToolbar } from "./toolbar/table-toolbar.component";
import { TableContainer } from "./table-container.component";
import { TableHeader } from "./header/table-header.component";
import { TableHeaderTitle } from "./header/table-header-title.directive";
import { TableHeaderDescription } from "./header/table-header-description.directive";
import { TableToolbarActions } from "./toolbar/table-toolbar-actions.component";
import { TableToolbarSearch } from "./toolbar/table-toolbar-search.component";
import { TableToolbarContent } from "./toolbar/table-toolbar-content.component";
import { DataGridFocus } from "./data-grid-focus.directive";
import { ExpandedRowHover } from "./expanded-row-hover.directive";
import { I18nModule } from "./../i18n/i18n.module";
export { Table } from "./table.component";
export { TableModel } from "./table-model.class";
export { TableItem } from "./table-item.class";
export { TableHeaderItem } from "./table-header-item.class";
export { TableToolbar } from "./toolbar/table-toolbar.component";
export { TableContainer } from "./table-container.component";
export { TableHeader } from "./header/table-header.component";
export { TableHeaderTitle } from "./header/table-header-title.directive";
export { TableHeaderDescription } from "./header/table-header-description.directive";
export { TableToolbarActions } from "./toolbar/table-toolbar-actions.component";
export { TableToolbarSearch } from "./toolbar/table-toolbar-search.component";
export { TableToolbarContent } from "./toolbar/table-toolbar-content.component";
export { DataGridFocus } from "./data-grid-focus.directive";
export { ExpandedRowHover } from "./expanded-row-hover.directive";
export class TableModule {
}
TableModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    Table,
                    TableToolbar,
                    TableContainer,
                    TableHeader,
                    TableHeaderTitle,
                    TableHeaderDescription,
                    TableToolbarActions,
                    TableToolbarSearch,
                    TableToolbarContent,
                    DataGridFocus,
                    ExpandedRowHover
                ],
                exports: [
                    Table,
                    TableToolbar,
                    TableContainer,
                    TableHeader,
                    TableHeaderTitle,
                    TableHeaderDescription,
                    TableToolbarActions,
                    TableToolbarSearch,
                    TableToolbarContent,
                    DataGridFocus,
                    ExpandedRowHover
                ],
                imports: [
                    CommonModule,
                    NFormsModule,
                    FormsModule,
                    DialogModule,
                    ButtonModule,
                    SearchModule,
                    I18nModule,
                    ChevronRight16Module,
                    Search16Module,
                    Close16Module
                ]
            },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FyYm9uLWNvbXBvbmVudHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbInRhYmxlL3RhYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFbkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLEtBQUssQ0FBQztBQUVqRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDekUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDckYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDOUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRWxFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVuRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDMUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDekUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDckYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDOUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBMENsRSxNQUFNOzs7WUF4Q0wsUUFBUSxTQUFDO2dCQUNULFlBQVksRUFBRTtvQkFDYixLQUFLO29CQUNMLFlBQVk7b0JBQ1osY0FBYztvQkFDZCxXQUFXO29CQUNYLGdCQUFnQjtvQkFDaEIsc0JBQXNCO29CQUN0QixtQkFBbUI7b0JBQ25CLGtCQUFrQjtvQkFDbEIsbUJBQW1CO29CQUNuQixhQUFhO29CQUNiLGdCQUFnQjtpQkFDaEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLEtBQUs7b0JBQ0wsWUFBWTtvQkFDWixjQUFjO29CQUNkLFdBQVc7b0JBQ1gsZ0JBQWdCO29CQUNoQixzQkFBc0I7b0JBQ3RCLG1CQUFtQjtvQkFDbkIsa0JBQWtCO29CQUNsQixtQkFBbUI7b0JBQ25CLGFBQWE7b0JBQ2IsZ0JBQWdCO2lCQUNoQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixZQUFZO29CQUNaLFdBQVc7b0JBQ1gsWUFBWTtvQkFDWixZQUFZO29CQUNaLFlBQVk7b0JBQ1osVUFBVTtvQkFDVixvQkFBb0I7b0JBQ3BCLGNBQWM7b0JBQ2QsYUFBYTtpQkFDYjthQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IENoZXZyb25SaWdodDE2TW9kdWxlIH0gZnJvbSBcIkBjYXJib24vaWNvbnMtYW5ndWxhci9saWIvY2hldnJvbi0tcmlnaHQvMTZcIjtcbmltcG9ydCB7IFNlYXJjaDE2TW9kdWxlIH0gZnJvbSBcIkBjYXJib24vaWNvbnMtYW5ndWxhci9saWIvc2VhcmNoLzE2XCI7XG5pbXBvcnQgeyBDbG9zZTE2TW9kdWxlIH0gZnJvbSBcIkBjYXJib24vaWNvbnMtYW5ndWxhci9saWIvY2xvc2UvMTZcIjtcblxuaW1wb3J0IHsgRGlhbG9nTW9kdWxlIH0gZnJvbSBcIi4vLi4vZGlhbG9nL2RpYWxvZy5tb2R1bGVcIjtcbmltcG9ydCB7IE5Gb3Jtc01vZHVsZSB9IGZyb20gXCIuLy4uL2Zvcm1zL2Zvcm1zLm1vZHVsZVwiO1xuaW1wb3J0IHsgQnV0dG9uTW9kdWxlLCBTZWFyY2hNb2R1bGUgfSBmcm9tIFwiLi4vXCI7XG5cbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIi4vdGFibGUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUYWJsZVRvb2xiYXIgfSBmcm9tIFwiLi90b29sYmFyL3RhYmxlLXRvb2xiYXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUYWJsZUNvbnRhaW5lciB9IGZyb20gXCIuL3RhYmxlLWNvbnRhaW5lci5jb21wb25lbnRcIjtcbmltcG9ydCB7IFRhYmxlSGVhZGVyIH0gZnJvbSBcIi4vaGVhZGVyL3RhYmxlLWhlYWRlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IFRhYmxlSGVhZGVyVGl0bGUgfSBmcm9tIFwiLi9oZWFkZXIvdGFibGUtaGVhZGVyLXRpdGxlLmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHsgVGFibGVIZWFkZXJEZXNjcmlwdGlvbiB9IGZyb20gXCIuL2hlYWRlci90YWJsZS1oZWFkZXItZGVzY3JpcHRpb24uZGlyZWN0aXZlXCI7XG5pbXBvcnQgeyBUYWJsZVRvb2xiYXJBY3Rpb25zIH0gZnJvbSBcIi4vdG9vbGJhci90YWJsZS10b29sYmFyLWFjdGlvbnMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUYWJsZVRvb2xiYXJTZWFyY2ggfSBmcm9tIFwiLi90b29sYmFyL3RhYmxlLXRvb2xiYXItc2VhcmNoLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVGFibGVUb29sYmFyQ29udGVudCB9IGZyb20gXCIuL3Rvb2xiYXIvdGFibGUtdG9vbGJhci1jb250ZW50LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRGF0YUdyaWRGb2N1cyB9IGZyb20gXCIuL2RhdGEtZ3JpZC1mb2N1cy5kaXJlY3RpdmVcIjtcbmltcG9ydCB7IEV4cGFuZGVkUm93SG92ZXIgfSBmcm9tIFwiLi9leHBhbmRlZC1yb3ctaG92ZXIuZGlyZWN0aXZlXCI7XG5cbmltcG9ydCB7IEkxOG5Nb2R1bGUgfSBmcm9tIFwiLi8uLi9pMThuL2kxOG4ubW9kdWxlXCI7XG5cbmV4cG9ydCB7IFRhYmxlIH0gZnJvbSBcIi4vdGFibGUuY29tcG9uZW50XCI7XG5leHBvcnQgeyBUYWJsZU1vZGVsIH0gZnJvbSBcIi4vdGFibGUtbW9kZWwuY2xhc3NcIjtcbmV4cG9ydCB7IFRhYmxlSXRlbSB9IGZyb20gXCIuL3RhYmxlLWl0ZW0uY2xhc3NcIjtcbmV4cG9ydCB7IFRhYmxlSGVhZGVySXRlbSB9IGZyb20gXCIuL3RhYmxlLWhlYWRlci1pdGVtLmNsYXNzXCI7XG5cbmV4cG9ydCB7IFRhYmxlVG9vbGJhciB9IGZyb20gXCIuL3Rvb2xiYXIvdGFibGUtdG9vbGJhci5jb21wb25lbnRcIjtcbmV4cG9ydCB7IFRhYmxlQ29udGFpbmVyIH0gZnJvbSBcIi4vdGFibGUtY29udGFpbmVyLmNvbXBvbmVudFwiO1xuZXhwb3J0IHsgVGFibGVIZWFkZXIgfSBmcm9tIFwiLi9oZWFkZXIvdGFibGUtaGVhZGVyLmNvbXBvbmVudFwiO1xuZXhwb3J0IHsgVGFibGVIZWFkZXJUaXRsZSB9IGZyb20gXCIuL2hlYWRlci90YWJsZS1oZWFkZXItdGl0bGUuZGlyZWN0aXZlXCI7XG5leHBvcnQgeyBUYWJsZUhlYWRlckRlc2NyaXB0aW9uIH0gZnJvbSBcIi4vaGVhZGVyL3RhYmxlLWhlYWRlci1kZXNjcmlwdGlvbi5kaXJlY3RpdmVcIjtcbmV4cG9ydCB7IFRhYmxlVG9vbGJhckFjdGlvbnMgfSBmcm9tIFwiLi90b29sYmFyL3RhYmxlLXRvb2xiYXItYWN0aW9ucy5jb21wb25lbnRcIjtcbmV4cG9ydCB7IFRhYmxlVG9vbGJhclNlYXJjaCB9IGZyb20gXCIuL3Rvb2xiYXIvdGFibGUtdG9vbGJhci1zZWFyY2guY29tcG9uZW50XCI7XG5leHBvcnQgeyBUYWJsZVRvb2xiYXJDb250ZW50IH0gZnJvbSBcIi4vdG9vbGJhci90YWJsZS10b29sYmFyLWNvbnRlbnQuY29tcG9uZW50XCI7XG5leHBvcnQgeyBEYXRhR3JpZEZvY3VzIH0gZnJvbSBcIi4vZGF0YS1ncmlkLWZvY3VzLmRpcmVjdGl2ZVwiO1xuZXhwb3J0IHsgRXhwYW5kZWRSb3dIb3ZlciB9IGZyb20gXCIuL2V4cGFuZGVkLXJvdy1ob3Zlci5kaXJlY3RpdmVcIjtcblxuQE5nTW9kdWxlKHtcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0VGFibGUsXG5cdFx0VGFibGVUb29sYmFyLFxuXHRcdFRhYmxlQ29udGFpbmVyLFxuXHRcdFRhYmxlSGVhZGVyLFxuXHRcdFRhYmxlSGVhZGVyVGl0bGUsXG5cdFx0VGFibGVIZWFkZXJEZXNjcmlwdGlvbixcblx0XHRUYWJsZVRvb2xiYXJBY3Rpb25zLFxuXHRcdFRhYmxlVG9vbGJhclNlYXJjaCxcblx0XHRUYWJsZVRvb2xiYXJDb250ZW50LFxuXHRcdERhdGFHcmlkRm9jdXMsXG5cdFx0RXhwYW5kZWRSb3dIb3ZlclxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0VGFibGUsXG5cdFx0VGFibGVUb29sYmFyLFxuXHRcdFRhYmxlQ29udGFpbmVyLFxuXHRcdFRhYmxlSGVhZGVyLFxuXHRcdFRhYmxlSGVhZGVyVGl0bGUsXG5cdFx0VGFibGVIZWFkZXJEZXNjcmlwdGlvbixcblx0XHRUYWJsZVRvb2xiYXJBY3Rpb25zLFxuXHRcdFRhYmxlVG9vbGJhclNlYXJjaCxcblx0XHRUYWJsZVRvb2xiYXJDb250ZW50LFxuXHRcdERhdGFHcmlkRm9jdXMsXG5cdFx0RXhwYW5kZWRSb3dIb3ZlclxuXHRdLFxuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdE5Gb3Jtc01vZHVsZSxcblx0XHRGb3Jtc01vZHVsZSxcblx0XHREaWFsb2dNb2R1bGUsXG5cdFx0QnV0dG9uTW9kdWxlLFxuXHRcdFNlYXJjaE1vZHVsZSxcblx0XHRJMThuTW9kdWxlLFxuXHRcdENoZXZyb25SaWdodDE2TW9kdWxlLFxuXHRcdFNlYXJjaDE2TW9kdWxlLFxuXHRcdENsb3NlMTZNb2R1bGVcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZU1vZHVsZSB7fVxuIl19