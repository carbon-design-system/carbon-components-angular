import {
	Directive,
	ElementRef,
	ViewContainerRef,
	Input,
	TemplateRef,
	HostListener
} from "@angular/core";
import { DialogDirective } from "../dialog.directive";
import { DialogService } from "../dialog.service";
import { OverflowMenuPane } from "./overflow-menu-pane.component";
import { OverflowMenuCustomPane } from "./overflow-menu-custom-pane.component";
import { EventService } from "carbon-components-angular/utils";


/**
 * Directive for extending `Dialog` to create overflow menus.
 *
 * class: OverflowMenuDirective (extends DialogDirective)
 *
 *
 * selector: `cdsOverflowMenu`
 *
 *
 * ```html
 * <div [cdsOverflowMenu]="templateRef"></div>
 * <ng-template #templateRef>
 * 	<!-- overflow menu options here -->
 * </ng-template>
 * ```
 *
 * ```html
 * <div [cdsOverflowMenu]="templateRef" [customPane]="true"></div>
 * <ng-template #templateRef>
 *  <!-- custom content goes here -->
 * </ng-template>
 * ```
 */
@Directive({
	selector: "[cdsOverflowMenu], [ibmOverflowMenu]",
	exportAs: "overflowMenu",
	providers: [
		DialogService
	]
})
export class OverflowMenuDirective extends DialogDirective {
	/**
	 * @deprecated as of v5
	 * Takes a template ref of `OverflowMenuOptions`s
	 */
	@Input() set ibmOverflowMenu(template: TemplateRef<any>) {
		this.cdsOverflowMenu = template;
	}

	@Input() cdsOverflowMenu: TemplateRef<any>;
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

	updateConfig() {
		this.dialogConfig.content = this.cdsOverflowMenu;
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

	open() {
		return super.open(this.customPane ? OverflowMenuCustomPane : OverflowMenuPane);
	}
}
