/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { I18nModule } from "./../../i18n/i18n.module";
import { SideNav } from "./sidenav.component";
import { SideNavHeader } from "./sidenav-header.component";
import { SideNavItem } from "./sidenav-item.component";
import { SideNavMenu } from "./sidenav-menu.component";
export { SideNav, SideNavHeader, SideNavItem, SideNavMenu };
export class SideNavModule {
}
SideNavModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SideNav,
                    SideNavHeader,
                    SideNavItem,
                    SideNavMenu
                ],
                imports: [CommonModule, I18nModule],
                exports: [
                    SideNav,
                    SideNavHeader,
                    SideNavItem,
                    SideNavMenu
                ]
            },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJib24tY29tcG9uZW50cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsidWktc2hlbGwvc2lkZW5hdi9zaWRlbmF2Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXRELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV2RCxPQUFPLEVBQ04sT0FBTyxFQUNQLGFBQWEsRUFDYixXQUFXLEVBQ1gsV0FBVyxFQUNYLENBQUM7QUFpQkYsTUFBTTs7O1lBZkwsUUFBUSxTQUFDO2dCQUNULFlBQVksRUFBRTtvQkFDYixPQUFPO29CQUNQLGFBQWE7b0JBQ2IsV0FBVztvQkFDWCxXQUFXO2lCQUNYO2dCQUNELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUM7Z0JBQ25DLE9BQU8sRUFBRTtvQkFDUixPQUFPO29CQUNQLGFBQWE7b0JBQ2IsV0FBVztvQkFDWCxXQUFXO2lCQUNYO2FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5cbmltcG9ydCB7IEkxOG5Nb2R1bGUgfSBmcm9tIFwiLi8uLi8uLi9pMThuL2kxOG4ubW9kdWxlXCI7XG5cbmltcG9ydCB7IFNpZGVOYXYgfSBmcm9tIFwiLi9zaWRlbmF2LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2lkZU5hdkhlYWRlciB9IGZyb20gXCIuL3NpZGVuYXYtaGVhZGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2lkZU5hdkl0ZW0gfSBmcm9tIFwiLi9zaWRlbmF2LWl0ZW0uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTaWRlTmF2TWVudSB9IGZyb20gXCIuL3NpZGVuYXYtbWVudS5jb21wb25lbnRcIjtcblxuZXhwb3J0IHtcblx0U2lkZU5hdixcblx0U2lkZU5hdkhlYWRlcixcblx0U2lkZU5hdkl0ZW0sXG5cdFNpZGVOYXZNZW51XG59O1xuXG5ATmdNb2R1bGUoe1xuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRTaWRlTmF2LFxuXHRcdFNpZGVOYXZIZWFkZXIsXG5cdFx0U2lkZU5hdkl0ZW0sXG5cdFx0U2lkZU5hdk1lbnVcblx0XSxcblx0aW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSTE4bk1vZHVsZV0sXG5cdGV4cG9ydHM6IFtcblx0XHRTaWRlTmF2LFxuXHRcdFNpZGVOYXZIZWFkZXIsXG5cdFx0U2lkZU5hdkl0ZW0sXG5cdFx0U2lkZU5hdk1lbnVcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTaWRlTmF2TW9kdWxlIHsgfVxuIl19