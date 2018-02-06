import {
	Component,
	Input,
	OnInit,
	AfterViewInit,
	ElementRef,
	TemplateRef,
	HostListener,
	ViewChild,
	HostBinding
} from "@angular/core";
import { Dialog } from "./../dialog.component";
import position from "../../common/position.service";


/**
 * Extend the `Dialog` Component to create a popover styled element
 * that displays a menu or list.
 * @export
 * @class PopoverMenu
 * @extends {Dialog}
 */
@Component({
	selector: "n-popover-menu",
	template: `
		<div
			class="popover--menu-{{dialogConfig.placement}}"
			role="dialog"
			[id]="dialogConfig.compID"
			tabindex="0"
			#dialog>
			<header
				class="popover_header--menu"
				aria-labelledby="Title"
				role="banner">
				<h3 class="header_title">{{dialogConfig.title}}</h3>
				<button
					*ngIf="dialogConfig.trigger==='click' || dialogConfig.trigger==='mouseenter'"
					class="close--white-md"
					(click)="doClose()"
					attr.aria-label="{{'DIALOG.POPOVER.CLOSE' | translate}}">
					<n-static-icon icon="x" size="sm" classList="close_icon"></n-static-icon>
				</button>
			</header>
			<section
				class="popover_content--menu"
				role="main">
				<ng-template
					*ngIf="hasContentTemplate"
					[ngTemplateOutlet]="dialogConfig.content"
					[ngTemplateOutletContext]="{popover: this, filter: dialogConfig.filter}">
				</ng-template>
				<div *ngIf="!hasContentTemplate">{{dialogConfig.content}}</div>
			</section>
			<footer *ngIf="hasFooterTemplate">
				<ng-template
					[ngTemplateOutlet]="dialogConfig.footer"
					[ngTemplateOutletContext]="{popover: this}">
				</ng-template>
			</footer>
			<div class="arrow" aria-hidden="true"></div>
		</div>
	`
})
export class PopoverMenu extends Dialog {
	/**
	 * Binds display property to the `PopoverMenu` style attribute.
	 * @memberof PopoverMenu
	 */
	@HostBinding("attr.style") style = "display: inline-block;";

	/**
	 * Set to `true` if `PopoverMenu` has a template for the body content.
	 * @type {boolean}
	 * @memberof PopoverMenu
	 */
	public hasContentTemplate = false;
	/**
	 * Set to `true` if `PopoverMenu` has a template for a footer.
	 * @type {boolean}
	 * @memberof PopoverMenu
	 */
	public hasFooterTemplate = false;

	/**
	 * Checks for existing content and footer templates and
	 * handles offset for the `PopoverMenu`.
	 * @memberof PopoverMenu
	 */
	onDialogInit() {
		this.hasContentTemplate = this.dialogConfig.content instanceof TemplateRef;
		this.hasFooterTemplate = this.dialogConfig.footer instanceof TemplateRef;

		// gap will always be the same: + on the y
		this.addGap["bottom-left"] = pos => position.addOffset(pos, this.dialogConfig.gap);
		this.addGap["bottom-right"] = pos => position.addOffset(pos, this.dialogConfig.gap);
	}
}
