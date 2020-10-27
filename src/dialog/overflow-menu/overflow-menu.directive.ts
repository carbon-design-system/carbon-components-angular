import {
	Directive,
	ElementRef,
	ViewContainerRef,
	Input,
	TemplateRef,
	HostListener,
	AfterContentInit
} from "@angular/core";
import { DialogDirective } from "../dialog.directive";
import { DialogService } from "../dialog.service";
import { OverflowMenuPane } from "./overflow-menu-pane.component";
import { OverflowMenuCustomPane } from './overflow-menu-custom-pane.component';
import { EventService } from "carbon-components-angular/utils";


/**
 * Directive for extending `Dialog` to create overflow menus.
 *
 * class: OverflowMenuDirective (extends DialogDirective)
 *
 *
 * selector: `ibmOverflowMenu`
 *
 *
 * ```html
 * <div [ibmOverflowMenu]="templateRef"></div>
 * <ng-template #templateRef>
 * 	<!-- overflow menu options here -->
 * </ng-template>
 * ```
 *
 * ```html
 * <div [ibmOverflowMenu]="templateRef" [customPane]="true"></div>
 * <ng-template #templateRef>
 *  <!-- custom content goes here -->
 * </ng-template>
 * ```
 */
@Directive({
	selector: "[ibmOverflowMenu]",
	exportAs: "ibmOverflowMenu",
	providers: [
		DialogService
	]
})
export class OverflowMenuDirective extends DialogDirective implements AfterContentInit {
	/**
	 * Takes a template ref of `OverflowMenuOptions`s
	 */
	@Input() ibmOverflowMenu: TemplateRef<any>;
	/**
	 * Controls wether the overflow menu is flipped
	 */
	@Input() flip = false;
	/**
	 * This specifies any vertical and horizontal offset for the position of the dialog
	 */
	@Input() offset: { x: number, y: number };
	/**
	 * Classes to add to the dialog container
	 */
	@Input() wrapperClass = "";
	/**
	 * Set to true to for custom content
	 */
	@Input() customPane = false;

	/**
	 * Creates an instance of `OverflowMenuDirective`.
	 */
	constructor(
		protected elementRef: ElementRef,
		protected viewContainerRef: ViewContainerRef,
		protected dialogService: DialogService,
		protected eventService: EventService
	) {
		super(elementRef, viewContainerRef, dialogService, eventService);
	}

	ngAfterContentInit() {
		this.dialogService.setContext({ component: this.customPane ? OverflowMenuCustomPane : OverflowMenuPane });
	}

	updateConfig() {
		this.dialogConfig.content = this.ibmOverflowMenu;
		this.dialogConfig.flip = this.flip;
		this.dialogConfig.offset = this.offset;
		this.dialogConfig.wrapperClass = this.wrapperClass;
	}

	@HostListener("keydown", ["$event"])
	hostkeys(event: KeyboardEvent) {
		switch (event.key) {
			case "Enter":
			case " ":
				event.preventDefault();
				break;
		}
	}
}
