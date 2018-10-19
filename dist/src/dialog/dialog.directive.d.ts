import { EventEmitter, OnInit, OnDestroy, ElementRef, TemplateRef, ViewContainerRef, OnChanges } from "@angular/core";
import { DialogService } from "./dialog.service";
import { DialogConfig } from "./dialog-config.interface";
/**
 * A generic directive that can be inherited from to create dialogs (for example, a tooltip or popover)
 *
 * This class contains the relevant intilization code, specific templates, options, and additional inputs
 * should be specified in the derived class.
 *
 * NOTE: All child classes should add `DialogService` as a provider, otherwise they will lose context that
 * the service relies on.
 */
export declare class DialogDirective implements OnInit, OnDestroy, OnChanges {
    protected elementRef: ElementRef;
    protected viewContainerRef: ViewContainerRef;
    protected dialogService: DialogService;
    /**
     * Title for the dialog
     * @type {string}
     * @memberof DialogDirective
     */
    title: string;
    /**
     * Dialog body content.
     * @type {(string | TemplateRef<any>)}
     * @memberof DialogDirective
     */
    ibmDialog: string | TemplateRef<any>;
    /**
     * Defines how the Dialog is triggered.(Hover and click behave the same on mobile - both respond to a single tap)
     * @type {("click" | "hover" | "mouseenter")}
     * @memberof DialogDirective
     */
    trigger: "click" | "hover" | "mouseenter";
    /**
     * Placement of the dialog, usually relative to the element the directive is on.
     * @memberof DialogDirective
     */
    placement: string;
    /**
     * Class to add to the dialog container
     * @type {string}
     * @memberof DialogDirective
     */
    wrapperClass: string;
    /**
     * Spacing between the dialog and it's triggering element
     * @type {number}
     * @memberof DialogDirective
     */
    gap: number;
    /**
     * Value `true` sets Dialog be appened to the body (to break out of containers)
     * @type {boolean}
     * @memberof DialogDirective
     */
    appendToBody: boolean;
    /**
     * Determines if the Dialog will attempt to place itself for maximum visibility.
     * TODO: remove - this doesn't actually do anything
     * @type {boolean}
     * @memberof DialogDirective
     * @deprecated
     */
    autoPosition: boolean;
    /**
     * Optional data for templates
     * @memberof DialogDirective
     */
    data: {};
    /**
     * Config object passed to the rendered component
     * @type {DialogConfig}
     * @memberof DialogDirective
     */
    onClose: EventEmitter<any>;
    dialogConfig: DialogConfig;
    role: string;
    expanded: boolean;
    /**
     * Creates an instance of DialogDirective.
     * @param {ElementRef} elementRef
     * @param {ViewContainerRef} viewContainerRef
     * @param {DialogService} dialogService
     * @memberof DialogDirective
     */
    constructor(elementRef: ElementRef, viewContainerRef: ViewContainerRef, dialogService: DialogService);
    /**
     * Overrides 'touchstart' event to trigger a toggle on the Dialog.
     * @param {any} evt
     * @memberof DialogDirective
     */
    onTouchStart(evt: any): void;
    ngOnChanges(): void;
    /**
     * Sets the config object and binds events for hovering or clicking before
     * running code from child class.
     * @memberof DialogDirective
     */
    ngOnInit(): void;
    /**
     * When the host dies, kill the popover.
     * - Useful for use in a modal or similar.
     * @memberof DialogDirective
     */
    ngOnDestroy(): void;
    /**
     * Helper method to call dialogService 'open'.
     * - Enforce accessibility by updating an aria attr for nativeElement.
     * @memberof DialogDirective
     */
    open(): void;
    /**
     * Helper method to call dialogService 'toggle'.
     * - Enforce accessibility by updating an aria attr for nativeElement.
     * @memberof DialogDirective
     */
    toggle(): void;
    /**
     * Helper method to call dialogService 'close'.
     * - Enforce accessibility by updating an aria attr for nativeElement.
     * @memberof DialogDirective
     */
    close(): void;
    /**
     * Empty method for child classes to override and specify additional init steps.
     * Run after DialogDirective completes it's ngOnInit.
     * @protected
     * @memberof DialogDirective
     */
    protected onDialogInit(): void;
}
