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
import { AbstractDialog } from "./abstract-dialog.component";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/throttleTime";
import "rxjs/add/observable/fromEvent";

import { position, Positions } from "../common/position.service";
import { cycleTabs } from "./../common/tab.service";

@Component({
	selector: "n-popover",
	template: `
		<div
			class="popover--{{popoverConfig.placement}}"
			[class.popover-menu]="popoverConfig.popoverMenu"
			[class.popover-filter]="popoverConfig.popoverFilter"
			role="dialog"
			id="{{popoverConfig.compID}}"
			tabindex="0"
			#popover>
			<header
				class="popover_header"
				aria-labelledby="Title"
				role="banner">
				<h3 class="header_title">{{popoverConfig.title}}</h3>
				<button
					*ngIf="popoverConfig.trigger==='click' || popoverConfig.trigger==='mouseenter'"
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
			<div
				class="popover_content"
				role="main">
				<ng-template
					*ngIf="isTpl"
					[ngTemplateOutlet]="popoverConfig.content"
					[ngOutletContext]="{popover: this, filter: popoverConfig.filter}">
				</ng-template>
				<div *ngIf="!isTpl">{{popoverConfig.content}}</div>
			</div>
			<div class="arrow" aria-hidden="true"></div>
		</div>
	`,
	host: {
		style: "display: inline-block;"
	}
})
export class Popover extends AbstractDialog implements OnInit, AfterViewInit {
	public isTpl: boolean;
	@ViewChild("popover") popover: ElementRef;
	@Input() popoverConfig;

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
			&& !this.popoverConfig.parentRef.nativeElement.contains(event.target) ) {
			this.onClose();
		}
	}

	constructor(public elementRef: ElementRef) {
		super();
	}

	ngOnInit() {
		this.isTpl = this.popoverConfig.content instanceof TemplateRef;

		Observable.fromEvent(window, "resize")
		.throttleTime(10)
		.subscribe(() => {

		});

		this.popover.nativeElement.focus();
	}

	ngAfterViewInit() {
		let parentEl = this.popoverConfig.parentRef.nativeElement;
		let el = this.popover.nativeElement;
		let pos = position.findRelative(parentEl, el, Positions.top);
		// top
		position.setElement(el, position.addOffset(pos, -(this.popoverConfig.gap)));
		// bottom
		// position.setElement(el, position.addOffset(pos, this.popoverConfig.gap));
		// left
		// position.setElement(el, position.addOffset(pos, 0, -(this.popoverConfig.gap)));
		// right
		// position.setElement(el, position.addOffset(pos, 0, this.popoverConfig.gap));
	}
}
