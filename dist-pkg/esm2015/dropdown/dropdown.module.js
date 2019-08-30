/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Dropdown } from "./dropdown.component";
import { DropdownList } from "./list/dropdown-list.component";
import { ScrollableList } from "./scrollable-list.directive";
import { I18nModule } from "./../i18n/i18n.module";
import { PlaceholderModule } from "./../placeholder/placeholder.module";
import { DropdownService } from "./dropdown.service";
import { ChevronDown16Module } from "@carbon/icons-angular/lib/chevron--down/16";
export { Dropdown } from "./dropdown.component";
export { DropdownList } from "./list/dropdown-list.component";
export { ScrollableList } from "./scrollable-list.directive";
export { AbstractDropdownView } from "./abstract-dropdown-view.class";
export { DropdownService } from "./dropdown.service";
export class DropdownModule {
}
DropdownModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    Dropdown,
                    DropdownList,
                    ScrollableList
                ],
                exports: [
                    Dropdown,
                    DropdownList,
                    ScrollableList
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    I18nModule,
                    PlaceholderModule,
                    ChevronDown16Module
                ],
                providers: [DropdownService]
            },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FyYm9uLWNvbXBvbmVudHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbImRyb3Bkb3duL2Ryb3Bkb3duLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFakYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU5RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBc0JyRCxNQUFNOzs7WUFwQkwsUUFBUSxTQUFDO2dCQUNULFlBQVksRUFBRTtvQkFDYixRQUFRO29CQUNSLFlBQVk7b0JBQ1osY0FBYztpQkFDZDtnQkFDRCxPQUFPLEVBQUU7b0JBQ1IsUUFBUTtvQkFDUixZQUFZO29CQUNaLGNBQWM7aUJBQ2Q7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxVQUFVO29CQUNWLGlCQUFpQjtvQkFDakIsbUJBQW1CO2lCQUNuQjtnQkFDRCxTQUFTLEVBQUUsQ0FBRSxlQUFlLENBQUU7YUFDOUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuXG5pbXBvcnQgeyBEcm9wZG93biB9IGZyb20gXCIuL2Ryb3Bkb3duLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRHJvcGRvd25MaXN0IH0gZnJvbSBcIi4vbGlzdC9kcm9wZG93bi1saXN0LmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBTY3JvbGxhYmxlTGlzdCB9IGZyb20gXCIuL3Njcm9sbGFibGUtbGlzdC5kaXJlY3RpdmVcIjtcbmltcG9ydCB7IEkxOG5Nb2R1bGUgfSBmcm9tIFwiLi8uLi9pMThuL2kxOG4ubW9kdWxlXCI7XG5pbXBvcnQgeyBQbGFjZWhvbGRlck1vZHVsZSB9IGZyb20gXCIuLy4uL3BsYWNlaG9sZGVyL3BsYWNlaG9sZGVyLm1vZHVsZVwiO1xuaW1wb3J0IHsgRHJvcGRvd25TZXJ2aWNlIH0gZnJvbSBcIi4vZHJvcGRvd24uc2VydmljZVwiO1xuaW1wb3J0IHsgQ2hldnJvbkRvd24xNk1vZHVsZSB9IGZyb20gXCJAY2FyYm9uL2ljb25zLWFuZ3VsYXIvbGliL2NoZXZyb24tLWRvd24vMTZcIjtcblxuZXhwb3J0IHsgRHJvcGRvd24gfSBmcm9tIFwiLi9kcm9wZG93bi5jb21wb25lbnRcIjtcbmV4cG9ydCB7IERyb3Bkb3duTGlzdCB9IGZyb20gXCIuL2xpc3QvZHJvcGRvd24tbGlzdC5jb21wb25lbnRcIjtcblxuZXhwb3J0IHsgU2Nyb2xsYWJsZUxpc3QgfSBmcm9tIFwiLi9zY3JvbGxhYmxlLWxpc3QuZGlyZWN0aXZlXCI7XG5leHBvcnQgeyBBYnN0cmFjdERyb3Bkb3duVmlldyB9IGZyb20gXCIuL2Fic3RyYWN0LWRyb3Bkb3duLXZpZXcuY2xhc3NcIjtcbmV4cG9ydCB7IExpc3RJdGVtIH0gZnJvbSBcIi4vbGlzdC1pdGVtLmludGVyZmFjZVwiO1xuZXhwb3J0IHsgRHJvcGRvd25TZXJ2aWNlIH0gZnJvbSBcIi4vZHJvcGRvd24uc2VydmljZVwiO1xuXG5ATmdNb2R1bGUoe1xuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHREcm9wZG93bixcblx0XHREcm9wZG93bkxpc3QsXG5cdFx0U2Nyb2xsYWJsZUxpc3Rcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdERyb3Bkb3duLFxuXHRcdERyb3Bkb3duTGlzdCxcblx0XHRTY3JvbGxhYmxlTGlzdFxuXHRdLFxuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZvcm1zTW9kdWxlLFxuXHRcdEkxOG5Nb2R1bGUsXG5cdFx0UGxhY2Vob2xkZXJNb2R1bGUsXG5cdFx0Q2hldnJvbkRvd24xNk1vZHVsZVxuXHRdLFxuXHRwcm92aWRlcnM6IFsgRHJvcGRvd25TZXJ2aWNlIF1cbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd25Nb2R1bGUge31cbiJdfQ==