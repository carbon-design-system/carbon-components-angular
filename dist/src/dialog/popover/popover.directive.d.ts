import { ElementRef, TemplateRef, ViewContainerRef } from "@angular/core";
import { DialogDirective } from "./../dialog.directive";
import { DialogService } from "./../dialog.service";
/**
 * Directive for extending the neutrino `Dialog` Component to render a popover element.
 *
 * demo: [https://pages.github.ibm.com/peretz/neutrino/#/popover](https://pages.github.ibm.com/peretz/neutrino/#/popover)
 *
 * class: PopoverDirective (implements OnInit)
 *
 * selector: `nPopover`
 *
 *
 *
 * ```html
 * <button nPopover="Hello There" placement="bottom" trigger="mouseenter">Pop over</button>
 * ```
 *
 * ## Popover on hover
 *
 * ```html
 * <button class="btn" nPopover="Hello There" placement="top-left" trigger="mouseenter">Pop over</button>
 * ```
 *
 * ## Programatically open or close popover
 *
 * ```html
 * <button class="btn" nPopover="Hello There" placement="right" #popOver="nPopover">Pop over right</button>
 * <br>
 * <button class="btn" (click)="popOver.close()">Close above popover</button>
 * <button class="btn" (click)="this.open()">Open above popover</button>
 * ```
 *
 * ```ts
 * export class PopoverDemo {
 * 	private open() {
 * 		setTimeout( () => {this.popOver.open(); }, 1);
 * 	}
 * }
 * ```
 *
 * @export
 * @class PopoverDirective
 * @extends {DialogDirective}
 */
export declare class PopoverDirective extends DialogDirective {
    protected elementRef: ElementRef;
    protected viewContainerRef: ViewContainerRef;
    protected dialogService: DialogService;
    static popoverCounter: number;
    /**
     * To contain the footer template for the `Popover`.
     * @type {TemplateRef<any>}
     * @memberof PopoverDirective
     */
    footer: TemplateRef<any>;
    /**
     * The content for the `Popover`.
     * @type {(string | TemplateRef<any>)}
     * @memberof PopoverDirective
     */
    ibmPopover: string | TemplateRef<any>;
    /**
     * Creates an instance of PopoverDirective.
     * @param {ElementRef} elementRef
     * @param {ViewContainerRef} viewContainerRef
     * @param {DialogService} dialogService
     * @memberof PopoverDirective
     */
    constructor(elementRef: ElementRef, viewContainerRef: ViewContainerRef, dialogService: DialogService);
    /**
     * Extends the `Dialog` component's data structure with popover content.
     * @memberof PopoverDirective
     */
    onDialogInit(): void;
}
