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
import position, { Position, AbsolutePosition } from "../common/position.service";
import { cycleTabs } from "./../common/tab.service";
import { DialogConfig } from "./dialog-config.interface";
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
	@Input() dialogConfig: DialogConfig;
	@ViewChild("dialog") dialog: ElementRef;

	public data = {};

	protected placement: Position;
	protected resizeSubscription: Subscription;
	protected addGap = {
		"left": pos => position.addOffset(pos, 0, -this.dialogConfig.gap),
		"right": pos => position.addOffset(pos, 0, this.dialogConfig.gap),
		"top": pos => position.addOffset(pos, -this.dialogConfig.gap),
		"bottom": pos => position.addOffset(pos, this.dialogConfig.gap),
		"top-left": pos => position.addOffset(pos, 0, -this.dialogConfig.gap),
		"top-right": pos => position.addOffset(pos, 0, -this.dialogConfig.gap),
		"left-bottom": pos => position.addOffset(pos, 0, -this.dialogConfig.gap),
		"right-bottom": pos => position.addOffset(pos, 0, this.dialogConfig.gap),
	};

	constructor(protected _elementRef: ElementRef) {}

	/** Initilize the dialog, set the placement and gap, and add a subscription to resize events */
	ngOnInit() {
		this.placement = this.dialogConfig.placement;
		this.data = this.dialogConfig.data;

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
	// protected addGap = (pos) => position.addOffset(pos, 0, 0);

	/** uses the position service to position the dialog in screen space */
	placeDialog(): void {
		let parentEl = this.dialogConfig.parentRef.nativeElement;
		let el = this.dialog.nativeElement;
		let pos = this.addGap[this.placement](position.findRelative(parentEl, el, this.placement));
		// let pos = this.addGap(position.findRelative(parentEl, el, this.placement));
		if (this.dialogConfig.appendToBody) {
			pos = position.addOffset(pos, window.scrollY, window.scrollX);
		}
		position.setElement(el, pos);
		if (this.dialogConfig.autoPosition) {
			// find new position
			let { newPlacement } = position.checkPlacement(parentEl, el, this.placement);
			if (newPlacement !== this.placement) {
				// timeout to wait a tick before finalizing position
				setTimeout(() => {
					this.placement = newPlacement;
					this.placeDialog();
				});
			}
		}
	}

	@HostListener("keydown", ["$event"])
	escapeClose(event: KeyboardEvent) {
		switch (event.key) {
			case "Escape": {
				event.stopImmediatePropagation();
				this.doClose();
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
			this.doClose();
		}
	}

	public doClose() {
		this.close.emit();
	}

	ngOnDestroy() {
		this.resizeSubscription.unsubscribe();
	}
}
