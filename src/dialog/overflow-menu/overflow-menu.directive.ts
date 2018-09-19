import {
	Directive,
	ElementRef,
	ViewContainerRef,
	Input,
	TemplateRef,
	HostListener
} from "@angular/core";
import { DialogDirective } from "./../dialog.directive";
import { DialogService } from "./../dialog.service";
import { OverflowMenuPane } from "./overflow-menu-pane.component";


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
 */
@Directive({
	selector: "[ibmOverflowMenu]",
	exportAs: "ibmOverflowMenu",
	providers: [
		DialogService
	]
})
export class OverflowMenuDirective extends DialogDirective {
	@Input() ibmOverflowMenu: TemplateRef<any>;

	/**
	 * Creates an instance of `OverflowMenuDirective`.
	 */
	constructor(
		protected elementRef: ElementRef,
		protected viewContainerRef: ViewContainerRef,
		protected dialogService: DialogService
	) {
		super(elementRef, viewContainerRef, dialogService);
		dialogService.create(OverflowMenuPane);
	}

	onDialogInit() {
		this.dialogConfig.content = this.ibmOverflowMenu;
	}

	@HostListener("keydown", ["$event"])
	hostkeys(event: KeyboardEvent) {
		switch (event.key) {
			case "Enter":
			case " ": {
				this.toggle();
				break;
			}
		}
	}
}
