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
 * Implements a `Dialog` that can be positioned anywhere on the page.
 * Used to implement a popover or tooltip.
 *
 * @export
 * @class Dialog
 * @implements {OnInit}
 * @implements {AfterViewInit}
 * @implements {OnDestroy}
 */
@Component({
	selector: "n-dialog",
	template: ""
})
export class Dialog implements OnInit, AfterViewInit, OnDestroy {
	/**
	 * One static event observable to handle window resizing.
	 * @protected
	 * @static
	 * @type {Observable<any>}
	 * @memberof Dialog
	 */
	protected static resizeObservable: Observable<any> = Observable.fromEvent(window, "resize").throttleTime(100);
	/**
	 * Emits event that handles the closing of a `Dialog` object.
	 * @type {EventEmitter<any>}
	 * @memberof Dialog
	 */
	@Output() close: EventEmitter<any> = new EventEmitter();
	/**
	 * Receives `DialogConfig` interface object with properties of `Dialog`
	 * explictly defined.
	 * @type {DialogConfig}
	 * @memberof Dialog
	 */
	@Input() dialogConfig: DialogConfig;
	/**
	 * Maintains a reference to the view DOM element of the `Dialog`.
	 * @type {ElementRef}
	 * @memberof Dialog
	 */
	@ViewChild("dialog") dialog: ElementRef;

	/**
	 * Stores the data received from `dialogConfig`.
	 * @memberof Dialog
	 */
	public data = {};

	/**
	 * The placement of the `Dialog` is recieved from the `Position` service.
	 * @type {Position}
	 * @memberof Dialog
	 */
	public placement: Position;

	/**
	 * `Subscription` used to update placement in the event of a window resize.
	 * @protected
	 * @type {Subscription}
	 * @memberof Dialog
	 */
	protected resizeSubscription: Subscription;
	/**
	 * Handles offsetting the `Dialog` item based on the defined position
	 * to not obscure the content beneath.
	 * @protected
	 * @memberof Dialog
	 */
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

	/**
	 * Creates an instance of `Dialog`.
	 * @param {ElementRef} _elementRef
	 * @memberof Dialog
	 */
	constructor(protected _elementRef: ElementRef) {}

	/**
	 * Initilize the `Dialog`, set the placement and gap, and add a `Subscription` to resize events.
	 * @memberof Dialog
	 */
	ngOnInit() {
		this.placement = this.dialogConfig.placement;
		this.data = this.dialogConfig.data;

		this.resizeSubscription = Dialog.resizeObservable.subscribe(() => {
			this.placeDialog();
		});

		// run any additional initlization code that consuming classes may have
		this.onDialogInit();
	}

	/**
	 * After the DOM is ready, focus is set and dialog is placed
	 * in respect to the parent element.
	 * @memberof Dialog
	 */
	ngAfterViewInit() {
		this.dialog.nativeElement.focus();
		this.placeDialog();
	}

	/**
	 * Empty method to be overridden by consuming classes to run any additional initialization code.
	 * @memberof Dialog
	 */
	onDialogInit() {}

	// reset/overridden based on what placement is set in the config
	// protected addGap = (pos) => position.addOffset(pos, 0, 0);

	/**
	 * Uses the position service to position the `Dialog` in screen space
	 * @memberof Dialog
	 */
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

	/**
	 * Sets up a KeyboardEvent to close `Dialog` with Escape key.
	 * @param {KeyboardEvent} event
	 * @memberof Dialog
	 */
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

	/**
	 * Sets up a event Listener to close `Dialog` if click event occurs outside
	 * `Dialog` object.
	 * @param {any} event
	 * @memberof Dialog
	 */
	@HostListener("document:click", ["$event"])
	clickClose(event) {
		if (!this._elementRef.nativeElement.contains(event.target)
			&& !this.dialogConfig.parentRef.nativeElement.contains(event.target) ) {
			this.doClose();
		}
	}

	/**
	 * Closes `Dialog` object by emitting the close event upwards to parents.
	 * @memberof Dialog
	 */
	public doClose() {
		this.close.emit();
	}

	/**
	 * At destruction of component, `Dialog` unsubscribes from handling window resizing changes.
	 * @memberof Dialog
	 */
	ngOnDestroy() {
		this.resizeSubscription.unsubscribe();
	}
}
