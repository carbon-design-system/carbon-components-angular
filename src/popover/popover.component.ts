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
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/throttleTime";
import "rxjs/add/observable/fromEvent";

import { positionElements } from "../common/position.service";
import { cycleTabs, getFocusElementList } from "./../common/tab.service";

@Component({
	selector: "cdl-popover",
	template: `
		<div class="popover {{popoverConfig.wrapperClass}} {{popoverConfig.placement}} {{popoverConfig.type}}
		{{popoverConfig.trigger}}"
		[class.tooltip]="popoverConfig.isTooltip"
		[class.popover-menu]="popoverConfig.popoverMenu"
		[class.popover-filter]="popoverConfig.popoverFilter"
		[attr.role]="popoverConfig.isTooltip && !isRoleDialog() ? 'tooltip':'dialog'"
		id="{{popoverConfig.compID}}" tabindex="0" #popover>
			<header *ngIf="!popoverConfig.isTooltip" class="popover-header" aria-labelledby="Title" role="banner">
				<h4 class="popover-title">{{popoverConfig.title}}</h4>
				<button *ngIf="popoverConfig.trigger==='click' || popoverConfig.trigger==='mouseenter'"
				class="close-icon"  (click)="onClose()" aria-label="Close popover">
					<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 16 16">
					<path d="M14.5 2.6l-1.1-1.1L8 6.9 2.6 1.5 1.5 2.6 6.9 8l-5.4 5.4 1.1 1.1L8 9.1l5.4 5.4 1.1-1.1L9.1 8z"/>
					</svg>
				</button>
			</header>
			<div class="popover-content" role="main">
				<ng-template
					*ngIf="isTpl"
					[ngTemplateOutlet]="popoverConfig.content">
				</ng-template>
				<div *ngIf="!isTpl">{{popoverConfig.content}}</div>

				<button
				*ngIf="popoverConfig.isTooltip && popoverConfig.trigger==='click'"
				class="close-icon"
				(click)="onClose()"
				aria-label="Close Tooltip">
					<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 16 16">
					<path d="M14.5 2.6l-1.1-1.1L8 6.9 2.6 1.5 1.5 2.6 6.9 8l-5.4 5.4 1.1 1.1L8 9.1l5.4 5.4 1.1-1.1L9.1 8z"/>
					</svg>
				</button>

			</div>
			<div class="arrow" aria-hidden="true"></div>
		</div>
		`,
	host: {"class": "popover-wrapper"},
})
export class Popover implements OnInit, AfterViewInit {
	public offsetTop = 48; // 40px heading + 8px triangle
	public isTpl: boolean;
	@ViewChild("popover") popover: ElementRef;

	@Input() popoverConfig;

	@Output() close: EventEmitter<any> = new EventEmitter();

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
		if (!this.elementRef.nativeElement.contains(event.target) && !this.popoverConfig.parentRef.nativeElement.contains(event.target) ) {
			this.onClose();
		}
	}

	constructor(public elementRef: ElementRef) {}

	ngOnInit() {
		this.isTpl = this.popoverConfig.content instanceof TemplateRef;

		if (this.popoverConfig.isTooltip) {
			this.offsetTop = undefined;
		}

		Observable.fromEvent(window, "resize")
		.throttleTime(10)
		.subscribe(() => {
			positionElements(
				this.popoverConfig.parentRef.nativeElement,
				this.elementRef.nativeElement,
				this.popoverConfig.placement,
				this.popoverConfig.appendToBody,
				this.popoverConfig.gap,
				this.offsetTop,
				true,
				this.popoverConfig.popoverFilter
			);
		});

		this.popover.nativeElement.focus();
	}

	ngAfterViewInit() {
		positionElements(
			this.popoverConfig.parentRef.nativeElement,
			this.elementRef.nativeElement,
			this.popoverConfig.placement,
			this.popoverConfig.appendToBody,
			this.popoverConfig.gap,
			this.offsetTop,
			true,
			this.popoverConfig.popoverFilter
		);
	}

	public onClose() {
		this.close.emit();
	}

	isRoleDialog() {
		return getFocusElementList(this.elementRef.nativeElement).length > 1;
	}
}
