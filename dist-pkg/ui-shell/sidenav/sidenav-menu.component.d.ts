import { AfterContentInit, QueryList } from "@angular/core";
import { SideNavItem } from "./sidenav-item.component";
/**
 * `SideNavMenu` provides a method to group `SideNavItem`s under a common heading.
 */
export declare class SideNavMenu implements AfterContentInit {
    /**
     * Heading for the gorup
     */
    title: string;
    /**
     * Controls the visibility of the child `SideNavItem`s
     */
    expanded: boolean;
    sidenavItems: QueryList<SideNavItem>;
    ngAfterContentInit(): void;
    toggle(): void;
}
