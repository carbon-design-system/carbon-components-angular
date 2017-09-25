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
	ViewChild
} from "@angular/core";
import { Dialog } from "./../dialog.component";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/throttleTime";
import "rxjs/add/observable/fromEvent";

import position, { Positions, AbsolutePosition } from "../../common/position.service";
import { cycleTabs, getFocusElementList } from "./../../common/tab.service";

@Component({
	selector: "n-tooltip",
	template: `
		<div
			class="tooltip--{{dialogConfig.placement}}"
			role="tooltip"
			id="{{dialogConfig.compID}}"
			tabindex="0"
			#tooltip>
			<div
				*ngIf="isTpl"
				role="tooltip">
				<ng-template
					[ngTemplateOutlet]="dialogConfig.content"
					[ngOutletContext]="{popover: this, filter: dialogConfig.filter}">
				</ng-template>
			</div>
			<p
				*ngIf="!isTpl"
				class="tooltip_text"
				role="tooltip">
				{{dialogConfig.content}}
			</p>
			<button
				*ngIf="dialogConfig.trigger==='click'"
				class="close--xs"
				(click)="onClose()"
				aria-label="Close Tooltip">
				<svg class="close_icon" width="10" height="10" viewBox="0 0 16 16">
					<path d="M14.5 2.6l-1.1-1.1L8 6.9 2.6 1.5 1.5 2.6 6.9 8l-5.4 5.4 1.1 1.1L8 9.1l5.4 5.4 1.1-1.1L9.1 8z"/>
				</svg>
			</button>
			<div class="arrow" aria-hidden="true"></div>
		</div>
		`,
	host: {
		style: "display: inline-block;"
	},
})
export class Tooltip extends Dialog implements OnInit, AfterViewInit {
	public isTpl: boolean;
	@ViewChild("tooltip") tooltip: ElementRef;

	@HostListener("keydown", ["$event"])
	escapeClose(event: KeyboardEvent) {
		switch (event.key) {
			case "Escape": {
				event.stopImmediatePropagation();
				this.onClose();
				break;
			}

			case "Tab": {
				cycleTabs(event, this.elementRef.nativeElement);
				break;
			}
		}
	}

	@HostListener("document:click", ["$event"])
	clickClose(event: MouseEvent) {
		if (!this.elementRef.nativeElement.contains(event.target) && !this.dialogConfig.parentRef.nativeElement.contains(event.target) ) {
			this.onClose();
		}
	}

	constructor(public elementRef: ElementRef) {
		super();
	}

	ngOnInit() {
		this.isTpl = this.dialogConfig.content instanceof TemplateRef;

		switch (this.dialogConfig.placement) {
			case "left":
				this.placement = Positions.left;
				this.addGap = (pos) => position.addOffset(pos, 0, -this.dialogConfig.gap);
				break;
			case "right":
				this.placement = Positions.right;
				this.addGap = (pos) => position.addOffset(pos, 0, this.dialogConfig.gap);
				break;
			case "top":
				this.placement = Positions.top;
				this.addGap = (pos) => position.addOffset(pos, -this.dialogConfig.gap);
				break;
			case "bottom":
				this.placement = Positions.bottom;
				this.addGap = (pos) => position.addOffset(pos, this.dialogConfig.gap);
				break;
		}

		Observable.fromEvent(window, "resize")
		.throttleTime(100)
		.subscribe(() => {
			// this.placeTooltip();
			this.placeDialog(this.tooltip.nativeElement);
		});

		this.tooltip.nativeElement.focus();
	}

	ngAfterViewInit() {
		// this.placeTooltip();
		this.placeDialog(this.tooltip.nativeElement);
	}

	isRoleDialog() {
		return getFocusElementList(this.elementRef.nativeElement).length > 1;
	}
}
