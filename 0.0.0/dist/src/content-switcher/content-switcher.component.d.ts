import { QueryList, EventEmitter, AfterViewInit, ElementRef } from "@angular/core";
import { ContentSwitcherOption } from "./content-switcher-option.directive";
/**
 *
 *
 */
export declare class ContentSwitcher implements AfterViewInit {
    protected elementRef: ElementRef;
    label: string;
    selected: EventEmitter<{}>;
    options: QueryList<ContentSwitcherOption>;
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
    hostkeys(event: KeyboardEvent): void;
}
