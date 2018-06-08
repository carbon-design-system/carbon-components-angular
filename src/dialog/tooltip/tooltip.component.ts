import {
	Component,
	Input,
	Output,
	EventEmitter,
	OnInit,
	AfterViewInit,
	Injector,
	ElementRef,
	TemplateRef,
	HostListener,
	ViewChild,
	HostBinding
} from "@angular/core";
import { Dialog } from "./../dialog.component";
import { Observable } from "rxjs/Observable";
import position from "../../utils/position";


/**
 * Extend the `Dialog` component to create a tooltip for exposing content.
 * @export
 * @class Tooltip
 * @extends {Dialog}
 */
@Component({
	selector: "n-tooltip",
	template: `
		<div
			[class]="getClass()"
			role="tooltip"
			[id]="dialogConfig.compID"
			tabindex="0"
			#dialog>
			<div
				*ngIf="contentTemplate"
				role="tooltip">
				<ng-template
					[ngTemplateOutlet]="dialogConfig.content"
					[ngTemplateOutletContext]="{popover: this, filter: dialogConfig.filter}">
				</ng-template>
			</div>
			<p
				*ngIf="!contentTemplate"
				class="tooltip_text"
				role="tooltip">
				{{dialogConfig.content}}
			</p>
			<button
				*ngIf="dialogConfig.trigger==='click'"
				class="close--xs"
				(click)="doClose()"
				attr.aria-label="{{'DIALOG.TOOLTIP.CLOSE' | translate}}">
				<n-static-icon icon="x" size="sm" classList="close_icon"></n-static-icon>
			</button>
			<div class="arrow" aria-hidden="true"></div>
		</div>
		`
})
export class Tooltip extends Dialog {
	/**
	 * Binds display property to `Tooltop` style attribute.
	 * @memberof Tooltip
	 */
	@HostBinding("style.display") style = "inline-block";
	/**
	 * Value is set to `true` if the `Tooltip` is to display a `TemplateRef` instead of a string.
	 * @type {boolean}
	 * @memberof Tooltip
	 */
	public contentTemplate: boolean;

	/**
	 * Check whether there is a template for the `Tooltip` content.
	 * @memberof Tooltip
	 */
	onDialogInit() {
		this.contentTemplate = this.dialogConfig.content instanceof TemplateRef;
	}

	/**
	 * Set the class of the `Tooltip`.
	 * @returns null
	 * @memberof Tooltip
	 */
	public getClass() {
		if (this.dialogConfig.type) {
			return `tooltip--${this.dialogConfig.type}-${this.placement}`;
		}
		return `tooltip--${this.placement}`;
	}
}
