import { QueryList, AfterContentInit } from "@angular/core";
import { BreadcrumbItem } from "./breadcrumb-item.interface";
import { BreadcrumbItemComponent } from "./breadcrumb-item.component";
/**
 *  [See demo](../../?path=/story/breadcrumb--basic)
 *
 * <example-url>../../iframe.html?id=breadcrumb--basic</example-url>
 */
export declare class Breadcrumb implements AfterContentInit {
    children: QueryList<BreadcrumbItemComponent>;
    items: Array<BreadcrumbItem>;
    noTrailingSlash: boolean;
    ariaLabel: string;
    protected _threshold: number;
    protected _skeleton: boolean;
    skeleton: any;
    threshold: number;
    ngAfterContentInit(): void;
    readonly shouldShowContent: boolean;
    readonly shouldShowOverflow: boolean;
    readonly first: BreadcrumbItem;
    readonly overflowItems: Array<BreadcrumbItem>;
    readonly secondLast: BreadcrumbItem;
    readonly last: BreadcrumbItem;
    protected updateChildren(): void;
}
