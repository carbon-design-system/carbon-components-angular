import { QueryList, EventEmitter, AfterViewInit } from "@angular/core";
import { ContentSwitcherOption } from "./content-switcher-option.directive";
/**
 *
 *
 */
export declare class ContentSwitcher implements AfterViewInit {
    label: string;
    selected: EventEmitter<{}>;
    options: QueryList<ContentSwitcherOption>;
    ngAfterViewInit(): void;
}
