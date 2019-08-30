import { QueryList, EventEmitter, AfterViewInit, ElementRef } from "@angular/core";
import { ContentSwitcherOption } from "./content-switcher-option.directive";
/**
 * The content switcher can be used for toggling between distinct options.
 * Similar to tabs, but without an associated content panel
 *
 * [See demo](../../?path=/story/content-switcher--basic)
 *
 * ```html
 * <ibm-content-switcher (selected)="selected($event)">
 *		<button ibmContentOption>First section</button>
 *		<button ibmContentOption>Second section</button>
 *		<button ibmContentOption>Third section</button>
 *	</ibm-content-switcher>
 *	```
 *
 * <example-url>../../iframe.html?id=content-switcher--basic</example-url>
 */
export declare class ContentSwitcher implements AfterViewInit {
    protected elementRef: ElementRef;
    /**
     * aria-label for the content switcher. Should be set to something descriptive
     */
    label: string;
    ariaLabel: string;
    /**
     * Emits the activated `ContentSwitcherOption`
     */
    selected: EventEmitter<{}>;
    options: QueryList<ContentSwitcherOption>;
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
    hostkeys(event: KeyboardEvent): void;
}
