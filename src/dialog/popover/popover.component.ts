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
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/throttleTime";
import "rxjs/add/observable/fromEvent";

import position, { Positions, AbsolutePosition } from "../../common/position.service";
import { cycleTabs } from "./../../common/tab.service";

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
			#popover>
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
export class Popover extends Dialog implements OnInit, AfterViewInit {
	public hasContentTemplate = false;
	public hasFooterTemplate = false;
	protected placement = Positions.auto;
	@ViewChild("popover") popover: ElementRef;
	@Input() dialogConfig;

	constructor(public elementRef: ElementRef) {
		super();
	}

	ngOnInit() {
		this.hasContentTemplate = this.dialogConfig.content instanceof TemplateRef;
		this.hasFooterTemplate = this.dialogConfig.footer instanceof TemplateRef;

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
			this.placePopover();
		});

		this.popover.nativeElement.focus();
	}

	ngAfterViewInit() {
		this.placePopover();
	}

	protected addGap = (pos) => position.addOffset(pos, 0, 0);

	placePopover(): void {
		let parentEl = this.dialogConfig.parentRef.nativeElement;
		let el = this.popover.nativeElement;
		let pos = this.addGap(position.findRelative(parentEl, el, this.placement));
		if (this.dialogConfig.appendToBody) {
			pos = position.addOffset(pos, window.scrollY, window.scrollX);
		}
		position.setElement(el, pos);
		// top
		// position.setElement(el, position.addOffset(pos, -(this.dialogConfig.gap)));
		// bottom
		// position.setElement(el, position.addOffset(pos, this.dialogConfig.gap));
		// left
		// position.setElement(el, position.addOffset(pos, 0, -(this.dialogConfig.gap)));
		// right
		// position.setElement(el, position.addOffset(pos, 0, this.dialogConfig.gap));
	}

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
		if (!this.elementRef.nativeElement.contains(event.target)
			&& !this.dialogConfig.parentRef.nativeElement.contains(event.target) ) {
			this.onClose();
		}
	}
}
