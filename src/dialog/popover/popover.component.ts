import {
	Component,
	Input,
	OnInit,
	AfterViewInit,
	ElementRef,
	TemplateRef,
	HostListener,
	ViewChild
} from "@angular/core";
import { Dialog } from "./../dialog.component";
import position, { Positions, AbsolutePosition } from "../../common/position.service";

@Component({
	selector: "n-popover",
	template: `
		<div
			class="popover--{{dialogConfig.placement}}"
			[class.popover-menu]="dialogConfig.popoverMenu"
			[class.popover-filter]="dialogConfig.popoverFilter"
			role="dialog"
			id="{{dialogConfig.compID}}"
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
					(click)="onClose()"
					aria-label="Close popover">
					<svg
						class="close_icon"
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 16 16">
						<path d="M14.5 2.6l-1.1-1.1L8 6.9 2.6 1.5 1.5 2.6 6.9 8l-5.4 5.4 1.1 1.1L8 9.1l5.4 5.4 1.1-1.1L9.1 8z"/>
					</svg>
				</button>
			</header>
			<section
				class="popover_content"
				role="main">
				<ng-template
					*ngIf="hasContentTemplate"
					[ngTemplateOutlet]="dialogConfig.content"
					[ngOutletContext]="{popover: this, filter: dialogConfig.filter}">
				</ng-template>
				<div *ngIf="!hasContentTemplate">{{dialogConfig.content}}</div>
			</section>
			<footer *ngIf="hasFooterTemplate">
				<ng-template
					[ngTemplateOutlet]="dialogConfig.footer"
					[ngOutletContext]="{popover: this}">
				</ng-template>
			</footer>
			<div class="arrow" aria-hidden="true"></div>
		</div>
	`,
	host: {
		style: "display: inline-block;"
	}
})
export class Popover extends Dialog {
	public hasContentTemplate = false;
	public hasFooterTemplate = false;

	onDialogInit() {
		this.hasContentTemplate = this.dialogConfig.content instanceof TemplateRef;
		this.hasFooterTemplate = this.dialogConfig.footer instanceof TemplateRef;

		switch (this.dialogConfig.placement) {
			case "left-bottom":
				this.placement = Positions.leftBottom;
				this.addGap = (pos) => position.addOffset(pos, 0, -this.dialogConfig.gap);
				break;
			case "right-bottom":
				this.placement = Positions.rightBottom;
				this.addGap = (pos) => position.addOffset(pos, 0, this.dialogConfig.gap);
				break;
		}
	}
}
