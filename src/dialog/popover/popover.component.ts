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
import position from "../../utils/position";


/**
 * Extend the neutrino `Dialog` component to create a popover styled element for exposing content.
 * @export
 * @class Popover
 * @extends {Dialog}
 */
@Component({
	selector: "n-popover",
	template: `
		<div
			class="popover--{{placement}}"
			role="dialog"
			[id]="dialogConfig.compID"
			tabindex="0"
			#dialog>
			<header
				class="popover_header"
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
				class="popover_content"
				role="main">
				<ng-template
					*ngIf="hasContentTemplate"
					[ngTemplateOutlet]="dialogConfig.content"
					[ngTemplateOutletContext]="{popover: this}">
				</ng-template>
				<div *ngIf="!hasContentTemplate">{{dialogConfig.content}}</div>
			</section>
			<footer *ngIf="hasFooterTemplate" class="popover_footer">
				<ng-template
					[ngTemplateOutlet]="dialogConfig.footer"
					[ngTemplateOutletContext]="{popover: this, data: dialogConfig.data}">
				</ng-template>
			</footer>
			<div class="arrow" aria-hidden="true"></div>
		</div>
	`
})
export class Popover extends Dialog {
	/**
	 * Binds display property to the `Popover` style attribute.
	 * @memberof Popover
	 */
	@HostBinding("style.display") style = "inline-block";
	/**
	 * Set to `true` if `Popover` has a template for the body content.
	 * @type {boolean}
	 * @memberof Popover
	 */
	public hasContentTemplate = false;
	/**
	 * Set to `true` if `Popover` has a template for a footer.
	 * @type boolean
	 * @memberof Popover
	 */
	public hasFooterTemplate = false;

	/**
	 * Checks whether the `Popover` has templates for content and footer.
	 * @memberof Popover
	 */
	onDialogInit() {
		this.hasContentTemplate = this.dialogConfig.content instanceof TemplateRef;
		this.hasFooterTemplate = this.dialogConfig.footer instanceof TemplateRef;

		this.addGap["top-left"] = pos => position.addOffset(pos);
		this.addGap["top-right"] = pos => position.addOffset(pos);
	}
}
