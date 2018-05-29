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
import "rxjs/add/observable/merge";
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
	 * Subscription to all the scrollable parents `scroll` event
	 */
	// add a new subscription temprarily so that contexts (such as tests)
	// that don't run ngAfterViewInit have something to unsubscribe in ngOnDestroy
	protected scrollSubscription: Subscription = new Subscription();
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
		"left-bottom": pos => position.addOffset(pos, 0, -this.dialogConfig.gap),
		"right-bottom": pos => position.addOffset(pos, 0, this.dialogConfig.gap),
	};

	/**
	 * Creates an instance of `Dialog`.
	 * @param {ElementRef} elementRef
	 * @memberof Dialog
	 */
	constructor(protected elementRef: ElementRef) {}

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
		const dialogElement = this.dialog.nativeElement;
		dialogElement.focus();
		dialogElement.classList = `${dialogElement.classList} ${this.dialogConfig.wrapperClass}`;
		this.placeDialog();
		const parentEl: HTMLElement = this.dialogConfig.parentRef.nativeElement;
		let node = parentEl;
		let observables = [];

		// if the element has an overflow set as part of
		// its computed style it can scroll
		const isScrollableElement = (element: HTMLElement) => {
			const computedStyle = getComputedStyle(element);
			return (
				computedStyle.overflow === "auto" ||
				computedStyle.overflow === "scroll" ||
				computedStyle["overflow-y"] === "auto" ||
				computedStyle["overflow-y"] === "scroll" ||
				computedStyle["overflow-x"] === "auto" ||
				computedStyle["overflow-x"] === "scroll"
			);
		};

		const isVisibleInContainer = (element, container) => {
			const elementRect = element.getBoundingClientRect();
			const containerRect = container.getBoundingClientRect();
			return elementRect.bottom <= containerRect.bottom && elementRect.top >= containerRect.top;
		};

		const placeDialogInContainer = () => {
			// only do the work to find the scroll containers if we're appended to body
			if (this.dialogConfig.appendToBody) {
				// walk the parents and subscribe to all the scroll events we can
				while (node.parentElement && node !== document.body) {
					if (isScrollableElement(node)) {
						observables.push(Observable.fromEvent(node, "scroll"));
					}
					node = node.parentElement;
				}
				// subscribe to the observable, and update the position and visibility
				const scrollObservable = Observable.merge(...observables);
				this.scrollSubscription = scrollObservable.subscribe((event: any) => {
					this.placeDialog();
					if (!isVisibleInContainer(this.dialogConfig.parentRef.nativeElement, event.target)) {
						this.doClose();
					}
				});
			}
		};

		// settimeout to let the DOM settle before attempting to place the dialog
		setTimeout(placeDialogInContainer);
	}

	/**
	 * Empty method to be overridden by consuming classes to run any additional initialization code.
	 * @memberof Dialog
	 */
	onDialogInit() {}

	/**
	 * Uses the position service to position the `Dialog` in screen space
	 * @memberof Dialog
	 */
	placeDialog(): void {
		let parentEl = this.dialogConfig.parentRef.nativeElement;
		let el = this.dialog.nativeElement;
		let pos;
		if (this.dialogConfig.appendToBody) {
			pos = this.addGap[this.placement](position.findAbsolute(parentEl, el, this.placement));
			pos = position.addOffset(pos, window.scrollY, window.scrollX);
			// add extra setTimeout and position calculation for cases where the container is position
			// relative or absolute since browsers return getBoundingClientRect _before_ the reflow is complete
			setTimeout(() => {
				let pos = this.addGap[this.placement](position.findAbsolute(parentEl, el, this.placement));
				pos = position.addOffset(pos, window.scrollY, window.scrollX);
				position.setElement(el, pos);
			});
		} else {
			pos = this.addGap[this.placement](position.findRelative(parentEl, el, this.placement));
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
				cycleTabs(event, this.elementRef.nativeElement);
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
		if (!this.elementRef.nativeElement.contains(event.target)
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
		this.scrollSubscription.unsubscribe();
	}
}
