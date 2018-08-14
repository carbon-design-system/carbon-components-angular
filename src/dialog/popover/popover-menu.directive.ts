import {
	Component,
	Directive,
	Input,
	EventEmitter,
	OnInit,
	Injector,
	ComponentRef,
	ElementRef,
	TemplateRef,
	ViewContainerRef,
	ComponentFactory,
	ComponentFactoryResolver,
	HostListener
} from "@angular/core";
import { DialogDirective } from "./../dialog.directive";
import { PopoverMenu } from "./popover-menu.component";
import { DialogService } from "./../dialog.service";


/**
 * Directive for extending `Dialog` to create popovers containing menus.
 *
 *
 * ## Popover Menu
 *
 *
 * ```html
 * <ng-template #list>
 * 	<div>
 * 		<ibm-list-group [items]="demoItems" (select)="onSelect($event)"></ibm-list-group>
 * 	</div>
 * </ng-template>
 * <button class="popover-menu-button"
 * 	[ibmPopover]="list"
 * 	placement="bottom-right"
 * 	wrapperClass="popover-content-fullwidth"
 * 	popoverMenu="true"
 * 	[gap]="13">
 * 	<ibm-glyphicon icon="dotdotdot_vert" size="16"></ibm-glyphicon>Menu
 * </button>
 * ```
 *
 * ## Popover Filter
 *
 * ```html
 * <h3>Popover Filter</h3>
 * <ng-template #filter>
 * 	<div class="filter-options">
 * 		<ibm-checkbox>High</ibm-checkbox>
 * 		<ibm-checkbox>Medium</ibm-checkbox>
 * 		<ibm-checkbox>Low</ibm-checkbox>
 * 		<ibm-checkbox>Danger</ibm-checkbox>
 * 	</div>
 * 	<div class="filter-options-buttons">
 * 		<button class="btn">Apply</button>
 * 		<button class="btn btn-secondary">Cancel</button>
 * 	</div>
 * </ng-template>
 * <button class="btn"
 * 	[ibmPopover]="filter"
 * 	placement="right"
 * 	wrapperClass="popover-content-filter"
 * 	popoverFilter="true">
 * 	Filter
 * </button>
 * ```
 *
 *
 * @export
 * @class PopoverMenuDirective
 * @extends {DialogDirective}
 */
@Directive({
	selector: "[ibmPopoverMenu]",
	exportAs: "ibmPopoverMenu",
	providers: [
		DialogService
	]
})
export class PopoverMenuDirective extends DialogDirective {
	/**
	 * Footer template for the `PopoverMenu` component.
	 * @type {TemplateRef<any>}
	 * @memberof PopoverMenuDirective
	 */
	@Input() footer: TemplateRef<any>;
	/**
	 * The content for the body of the `PopoverMenu`.
	 * @type {(string | TemplateRef<any>)}
	 * @memberof PopoverMenuDirective
	 */
	@Input() ibmPopoverMenu: string | TemplateRef<any>;

	/**
	 * Creates an instance of PopoverMenuDirective.
	 * @param {ElementRef} elementRef
	 * @param {ViewContainerRef} viewContainerRef
	 * @param {DialogService} dialogService
	 * @memberof PopoverMenuDirective
	 */
	constructor(
		protected elementRef: ElementRef,
		protected viewContainerRef: ViewContainerRef,
		protected dialogService: DialogService
	) {
		super(elementRef, viewContainerRef, dialogService);
		dialogService.create(PopoverMenu);
	}

	/**
	 * Extends the `Dialog` component's data structure to hold `PopoverMenu` content.
	 * @memberof PopoverMenuDirective
	 */
	onDialogInit() {
		this.dialogConfig.content = this.ibmPopoverMenu;
	}
}
