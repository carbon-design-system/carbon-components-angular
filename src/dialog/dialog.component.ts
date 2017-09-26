import {
	Component,
	Input,
	Output,
	EventEmitter,
	ElementRef,
	ViewChild,
	OnInit,
	AfterViewInit,
	OnDestroy,
	HostListener
} from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import "rxjs/add/operator/throttleTime";
import "rxjs/add/observable/fromEvent";
import position, { Positions, AbsolutePosition } from "../common/position.service";
import { cycleTabs } from "./../common/tab.service";

/**
 * Implements a dialog that can be positioned anywhere on the page
 * could be used to implement a popover or tooltip
 */
@Component({
	selector: "n-dialog",
	template: ""
})
export class Dialog implements OnInit, AfterViewInit, OnDestroy {
	/** One static resize observable to make sure we arent registering hundreds of event listeners */
	protected static resizeObservable: Observable<any> = Observable.fromEvent(window, "resize").throttleTime(100);
	@Output() close: EventEmitter<any> = new EventEmitter();
	@Input() dialogConfig;
	@ViewChild("dialog") dialog: ElementRef;
	protected placement = Positions.auto;
	protected resizeSubscription: Subscription;

	constructor(protected _elementRef: ElementRef) {}

	/** Initilize the dialog, set the placement and gap, and add a subscription to resize events */
	ngOnInit() {
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

		this.resizeSubscription = Dialog.resizeObservable.subscribe(() => {
			this.placeDialog();
		});

		// run any additional initlization code that consuming classes may have
		this.onDialogInit();
	}

	/** do things after the DOM is ready */
	ngAfterViewInit() {
		this.dialog.nativeElement.focus();
		this.placeDialog();
	}

	// overridden by consuming classes to hook into onInit functionality
	onDialogInit() {}

	// reset/overridden based on what placement is set in the config
	protected addGap = (pos) => position.addOffset(pos, 0, 0);

	/** uses the position service to position the dialog in screen space */
	placeDialog(): void {
		let parentEl = this.dialogConfig.parentRef.nativeElement;
		let el = this.dialog.nativeElement;
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
				cycleTabs(event, this._elementRef.nativeElement);
				break;
			}
		}
	}

	@HostListener("document:click", ["$event"])
	clickClose(event: MouseEvent) {
		if (!this._elementRef.nativeElement.contains(event.target)
			&& !this.dialogConfig.parentRef.nativeElement.contains(event.target) ) {
			this.onClose();
		}
	}

	public onClose() {
		this.close.emit();
	}

	ngOnDestroy() {
		this.resizeSubscription.unsubscribe();
	}
}
