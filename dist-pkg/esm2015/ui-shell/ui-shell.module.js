/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { I18nModule } from "./../i18n/i18n.module";
import { HeaderModule } from "./header/header.module";
import { SideNavModule } from "./sidenav/sidenav.module";
import { PanelModule } from "./panel/panel.module";
export { Header, HeaderItem, HeaderMenu, HeaderNavigation, HeaderGlobal, HeaderAction, Hamburger, HeaderModule } from "./header/header.module";
export { SideNav, SideNavHeader, SideNavItem, SideNavMenu, SideNavModule } from "./sidenav/sidenav.module";
export { Panel, ProductSwitcher, SwitcherList, SwitcherListItem, PanelModule } from "./panel/panel.module";
export class UIShellModule {
}
UIShellModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    I18nModule,
                    HeaderModule,
                    SideNavModule,
                    PanelModule
                ],
                exports: [
                    HeaderModule,
                    SideNavModule,
                    PanelModule
                ]
            },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktc2hlbGwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FyYm9uLWNvbXBvbmVudHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbInVpLXNoZWxsL3VpLXNoZWxsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRW5ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRW5ELHNIQUFjLHdCQUF3QixDQUFDO0FBQ3ZDLGdGQUFjLDBCQUEwQixDQUFDO0FBQ3pDLG9GQUFjLHNCQUFzQixDQUFDO0FBZ0JyQyxNQUFNOzs7WUFkTCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osVUFBVTtvQkFDVixZQUFZO29CQUNaLGFBQWE7b0JBQ2IsV0FBVztpQkFDWDtnQkFDRCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixhQUFhO29CQUNiLFdBQVc7aUJBQ1g7YUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcblxuaW1wb3J0IHsgSTE4bk1vZHVsZSB9IGZyb20gXCIuLy4uL2kxOG4vaTE4bi5tb2R1bGVcIjtcblxuaW1wb3J0IHsgSGVhZGVyTW9kdWxlIH0gZnJvbSBcIi4vaGVhZGVyL2hlYWRlci5tb2R1bGVcIjtcbmltcG9ydCB7IFNpZGVOYXZNb2R1bGUgfSBmcm9tIFwiLi9zaWRlbmF2L3NpZGVuYXYubW9kdWxlXCI7XG5pbXBvcnQgeyBQYW5lbE1vZHVsZSB9IGZyb20gXCIuL3BhbmVsL3BhbmVsLm1vZHVsZVwiO1xuXG5leHBvcnQgKiBmcm9tIFwiLi9oZWFkZXIvaGVhZGVyLm1vZHVsZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vc2lkZW5hdi9zaWRlbmF2Lm1vZHVsZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vcGFuZWwvcGFuZWwubW9kdWxlXCI7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0STE4bk1vZHVsZSxcblx0XHRIZWFkZXJNb2R1bGUsXG5cdFx0U2lkZU5hdk1vZHVsZSxcblx0XHRQYW5lbE1vZHVsZVxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0SGVhZGVyTW9kdWxlLFxuXHRcdFNpZGVOYXZNb2R1bGUsXG5cdFx0UGFuZWxNb2R1bGVcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBVSVNoZWxsTW9kdWxlIHsgfVxuIl19