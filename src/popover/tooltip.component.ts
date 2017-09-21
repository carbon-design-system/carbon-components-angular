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
import { AbstractDialog } from "./abstract-dialog.component";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/throttleTime";
import "rxjs/add/observable/fromEvent";

import { position, Positions } from "../common/position.service";
import { cycleTabs, getFocusElementList } from "./../common/tab.service";

@Component({
	selector: "n-tooltip",
	template: `
		<div
			class="tooltip--{{tooltipConfig.placement}}"
			role="tooltip"
			id="{{tooltipConfig.compID}}"
			tabindex="0"
			style="position: initial;"
			#tooltip>
			<div
				class="tooltip_text"
				role="tooltip">
				<ng-template
					*ngIf="isTpl"
					[ngTemplateOutlet]="tooltipConfig.content"
					[ngOutletContext]="{popover: this, filter: tooltipConfig.filter}">
				</ng-template>
				<div *ngIf="!isTpl">{{tooltipConfig.content}}</div>
			</div>
			<button
				*ngIf="tooltipConfig.trigger==='click'"
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
		class: "popover-wrapper",
		style: "position: absolute; z-index: 1000;"
	},
})
export class Tooltip extends AbstractDialog implements OnInit, AfterViewInit {
	public isTpl: boolean;
	@ViewChild("tooltip") tooltip: ElementRef;
	@Input() tooltipConfig;

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
		if (!this.elementRef.nativeElement.contains(event.target) && !this.tooltipConfig.parentRef.nativeElement.contains(event.target) ) {
			this.onClose();
		}
	}

	constructor(public elementRef: ElementRef) {
		super();
	}

	ngOnInit() {
		this.isTpl = this.tooltipConfig.content instanceof TemplateRef;

		Observable.fromEvent(window, "resize")
		.throttleTime(10)
		.subscribe(() => {

		});

		this.tooltip.nativeElement.focus();
	}

	ngAfterViewInit() {
		let parentEl = this.tooltipConfig.parentRef.nativeElement;
		let el = this.tooltip.nativeElement;
		let pos = position.findRelative(parentEl, el, Positions.right);
		// top
		position.setElement(this.elementRef.nativeElement, position.addOffset(pos, -10));
		// bottom
		// position.setElement(this.elementRef.nativeElement, position.addOffset(pos, 10));
		// left
		// position.setElement(this.elementRef.nativeElement, position.addOffset(pos, 0, -10));
		// right
		// position.setElement(this.elementRef.nativeElement, position.addOffset(pos, 0, 10));
	}

	isRoleDialog() {
		return getFocusElementList(this.elementRef.nativeElement).length > 1;
	}
}
