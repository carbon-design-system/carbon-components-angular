import { ElementRef, OnChanges, SimpleChanges, AfterViewInit } from "@angular/core";
export declare class ScrollableList implements OnChanges, AfterViewInit {
    protected elementRef: ElementRef;
    /**
     * Optional target list to scroll
     */
    nScrollableList: string;
    /**
     * Enables or disables scrolling for the whole directive
     */
    scrollEnabled: boolean;
    /**
     * Sets the target used for hover scrolling up
     */
    scrollUpTarget: HTMLElement;
    /**
     * Sets the target used for hover scrolling down
     */
    scrollDownTarget: HTMLElement;
    /**
     * How many lines to scroll by each time `wheel` fires
     * Defaults to 10 - based on testing this isn't too fast or slow on any platform
     */
    scrollBy: number;
    private hoverScrollInterval;
    private lastTouch;
    private canScrollUp;
    private canScrollDown;
    private list;
    constructor(elementRef: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    updateScrollHeight(): void;
    protected checkScrollArrows(): void;
    protected onWheel(event: any): void;
    protected onTouchStart(event: any): void;
    protected onTouchMove(event: any): void;
    protected hoverScrollBy(hovering: any, amount: any): void;
    protected onHoverUp(hovering: any): void;
    protected onHoverDown(hovering: any): void;
    protected onKeyDown(event: any): void;
}
