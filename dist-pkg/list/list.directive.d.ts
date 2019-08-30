import { ElementRef } from "@angular/core";
/**
 * Applies either ordered or unordered styling to the list container it is applied to.
 *
 * [See demo](../../?path=/story/list--basic)
 *
 * For `ul`s it will apply unordered list styles, and for `ol`s it will apply ordered list styles.
 *
 * If a `ul` or `ol` is nested within a `li` the directive will apply nested list styling.
 *
 * <example-url>../../iframe.html?id=list--basic</example-url>
 */
export declare class List {
    protected elementRef: ElementRef;
    readonly ordered: boolean;
    readonly unordered: boolean;
    readonly nested: boolean;
    constructor(elementRef: ElementRef);
}
