import { EventEmitter, ElementRef, OnInit, AfterViewInit, OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { AbsolutePosition, Positions } from "@carbon/utils-position";
import { DialogConfig } from "./dialog-config.interface";
/**
 * Implements a `Dialog` that can be positioned anywhere on the page.
 * Used to implement a popover or tooltip.
 */
export declare class Dialog implements OnInit, AfterViewInit, OnDestroy {
    protected elementRef: ElementRef;
    /**
     * One static event observable to handle window resizing.
     */
    protected static resizeObservable: Observable<any>;
    /**
     * Emits event that handles the closing of a `Dialog` object.
     */
    close: EventEmitter<any>;
    /**
     * Receives `DialogConfig` interface object with properties of `Dialog`
     * explicitly defined.
     */
    dialogConfig: DialogConfig;
    /**
     * Maintains a reference to the view DOM element of the `Dialog`.
     */
    dialog: ElementRef;
    /**
     * Stores the data received from `dialogConfig`.
     */
    data: {};
    /**
     * The placement of the `Dialog` is received from the `Position` service.
     */
    placement: string;
    /**
     * `Subscription` used to update placement in the event of a window resize.
     */
    protected resizeSubscription: Subscription;
    /**
     * Subscription to all the scrollable parents `scroll` event
     */
    protected scrollSubscription: Subscription;
    /**
     * Handles offsetting the `Dialog` item based on the defined position
     * to not obscure the content beneath.
     */
    protected addGap: {
        "left": (pos: any) => AbsolutePosition;
        "right": (pos: any) => AbsolutePosition;
        "top": (pos: any) => AbsolutePosition;
        "bottom": (pos: any) => AbsolutePosition;
        "left-bottom": (pos: any) => AbsolutePosition;
        "right-bottom": (pos: any) => AbsolutePosition;
    };
    /**
     * Extra placements. Child classes can add to this for use in `placeDialog`.
     */
    protected placements: Positions;
    /**
     * Creates an instance of `Dialog`.
     * @param elementRef
     */
    constructor(elementRef: ElementRef);
    /**
     * Initialize the `Dialog`, set the placement and gap, and add a `Subscription` to resize events.
     */
    ngOnInit(): void;
    /**
     * After the DOM is ready, focus is set and dialog is placed
     * in respect to the parent element.
     */
    ngAfterViewInit(): void;
    /**
     * Empty method to be overridden by consuming classes to run any additional initialization code.
     */
    onDialogInit(): void;
    /**
     * Empty method to be overridden by consuming classes to run any additional initialization code after the view is available.
     * NOTE: this does _not_ guarantee the dialog will be positioned, simply that it will exist in the DOM
     */
    afterDialogViewInit(): void;
    /**
     * Uses the position service to position the `Dialog` in screen space
     */
    placeDialog(): void;
    /**
     * Sets up a KeyboardEvent to close `Dialog` with Escape key.
     * @param event
     */
    escapeClose(event: KeyboardEvent): void;
    /**
     * Sets up a event Listener to close `Dialog` if click event occurs outside
     * `Dialog` object.
     * @param event
     */
    clickClose(event: any): void;
    /**
     * Closes `Dialog` object by emitting the close event upwards to parents.
     */
    doClose(): void;
    /**
     * At destruction of component, `Dialog` unsubscribes from handling window resizing changes.
     */
    ngOnDestroy(): void;
}
