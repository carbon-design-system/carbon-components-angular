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
 * 		<n-list-group [items]="demoItems" (select)="onSelect($event)"></n-list-group>
 * 	</div>
 * </ng-template>
 * <button class="popover-menu-button"
 * 	[nPopover]="list"
 * 	placement="bottom-right"
 * 	wrapperClass="popover-content-fullwidth"
 * 	popoverMenu="true"
 * 	[gap]="13">
 * 	<n-glyphicon icon="dotdotdot_vert" size="16"></n-glyphicon>Menu
 * </button>
 * ```
 *
 * ## Popover Filter
 *
 * ```html
 * <h3>Popover Filter</h3>
 * <ng-template #filter>
 * 	<div class="filter-options">
 * 		<n-checkbox>High</n-checkbox>
 * 		<n-checkbox>Medium</n-checkbox>
 * 		<n-checkbox>Low</n-checkbox>
 * 		<n-checkbox>Danger</n-checkbox>
 * 	</div>
 * 	<div class="filter-options-buttons">
 * 		<button class="btn">Apply</button>
 * 		<button class="btn btn-secondary">Cancel</button>
 * 	</div>
 * </ng-template>
 * <button class="btn"
 * 	[nPopover]="filter"
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
	selector: "[nPopoverMenu]",
	exportAs: "nPopoverMenu",
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
	@Input() nPopoverMenu: string | TemplateRef<any>;

	/**
	 * Creates an instance of PopoverMenuDirective.
	 * @param {ElementRef} _elementRef
	 * @param {ViewContainerRef} _viewContainerRef
	 * @param {DialogService} _dialogService
	 * @memberof PopoverMenuDirective
	 */
	constructor(
		protected _elementRef: ElementRef,
		protected _viewContainerRef: ViewContainerRef,
		protected _dialogService: DialogService
	) {
		super(_elementRef, _viewContainerRef, _dialogService);
		_dialogService.create(PopoverMenu);
	}

	/**
	 * Extends the `Dialog` component's data structure to hold `PopoverMenu` content.
	 * @memberof PopoverMenuDirective
	 */
	onDialogInit() {
		this.dialogConfig.content = this.nPopoverMenu;
	}
}
