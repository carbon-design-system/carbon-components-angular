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
import {
	Observable,
	Subscription,
	fromEvent,
	merge
} from "rxjs";
import { throttleTime } from "rxjs/operators";
// the AbsolutePosition is required to import the declaration correctly
import Position, { position, AbsolutePosition, Positions } from "@carbon/utils-position";
import { cycleTabs, getFocusElementList } from "./../common/tab.service";
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
	selector: "ibm-dialog",
	template: ""
})
export class Dialog implements OnInit, AfterViewInit, OnDestroy {
	/**
	 * One static event observable to handle window resizing.
	 */
	protected static resizeObservable: Observable<any> = fromEvent(window, "resize").pipe(throttleTime(100));
	/**
	 * Emits event that handles the closing of a `Dialog` object.
	 */
	@Output() close: EventEmitter<any> = new EventEmitter();
	/**
	 * Receives `DialogConfig` interface object with properties of `Dialog`
	 * explicitly defined.
	 */
	@Input() dialogConfig: DialogConfig;
	/**
	 * Maintains a reference to the view DOM element of the `Dialog`.
	 */
	@ViewChild("dialog") dialog: ElementRef;

	/**
	 * Stores the data received from `dialogConfig`.
	 */
	public data = {};

	/**
	 * The placement of the `Dialog` is received from the `Position` service.
	 */
	public placement: string;

	/**
	 * `Subscription` used to update placement in the event of a window resize.
	 */
	protected resizeSubscription: Subscription;
	/**
	 * Subscription to all the scrollable parents `scroll` event
	 */
	// add a new subscription temporarily so that contexts (such as tests)
	// that don't run ngAfterViewInit have something to unsubscribe in ngOnDestroy
	protected scrollSubscription: Subscription = new Subscription();
	/**
	 * Handles offsetting the `Dialog` item based on the defined position
	 * to not obscure the content beneath.
	 */
	protected addGap = {
		"left": pos => position.addOffset(pos, 0, -this.dialogConfig.gap),
		"right": pos => position.addOffset(pos, 0, this.dialogConfig.gap),
		"top": pos => position.addOffset(pos, -this.dialogConfig.gap),
		"bottom": pos => position.addOffset(pos, this.dialogConfig.gap),
		"left-bottom": pos => position.addOffset(pos, 0, -this.dialogConfig.gap),
		"right-bottom": pos => position.addOffset(pos, 0, this.dialogConfig.gap)
	};

	/**
	 * Extra placements. Child classes can add to this for use in `placeDialog`.
	 */
	protected placements: Positions = {};

	/**
	 * Creates an instance of `Dialog`.
	 * @param {ElementRef} elementRef
	 */
	constructor(protected elementRef: ElementRef) {	}

	/**
	 * Initialize the `Dialog`, set the placement and gap, and add a `Subscription` to resize events.
	 */
	ngOnInit() {
		this.placement = this.dialogConfig.placement.split(",")[0];
		this.data = this.dialogConfig.data;

		this.resizeSubscription = Dialog.resizeObservable.subscribe(() => {
			this.placeDialog();
		});

		// run any additional initialization code that consuming classes may have
		this.onDialogInit();
	}

	/**
	 * After the DOM is ready, focus is set and dialog is placed
	 * in respect to the parent element.
	 */
	ngAfterViewInit() {
		const dialogElement = this.dialog.nativeElement;
		// split the wrapper class list and apply separately to avoid IE from
		// 1. throwing an error due to assigning a readonly property (classList)
		// 2. throwing a SyntaxError due to passing an empty string to `add`
		if (this.dialogConfig.wrapperClass) {
			for (const extraClass of this.dialogConfig.wrapperClass.split(" ")) {
				dialogElement.classList.add(extraClass);
			}
		}
		this.placeDialog();
		if (getFocusElementList(this.dialog.nativeElement).length > 0) {
			dialogElement.focus();
		}
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
			// or skip this work if we're inline
			if (!this.dialogConfig.appendInline) {
				// walk the parents and subscribe to all the scroll events we can
				while (node.parentElement && node !== document.body) {
					if (isScrollableElement(node)) {
						observables.push(fromEvent(node, "scroll"));
					}
					node = node.parentElement;
				}
				// subscribe to the observable, and update the position and visibility
				const scrollObservable = merge(...observables);
				this.scrollSubscription = scrollObservable.subscribe((event: any) => {
					this.placeDialog();
					if (!isVisibleInContainer(this.dialogConfig.parentRef.nativeElement, event.target)) {
						this.doClose();
					}
				});
			}
		};

		// settimeout to let the DOM settle before attempting to place the dialog
		// and before notifying components that the DOM is ready
		setTimeout(() => {
			placeDialogInContainer();
			this.afterDialogViewInit();
		});
	}

	/**
	 * Empty method to be overridden by consuming classes to run any additional initialization code.
	 */
	onDialogInit() {}

	/**
	 * Empty method to be overridden by consuming classes to run any additional initialization code after the view is available.
	 * NOTE: this does _not_ guarantee the dialog will be positioned, simply that it will exist in the DOM
	 */
	afterDialogViewInit() {}

	/**
	 * Uses the position service to position the `Dialog` in screen space
	 */
	placeDialog(): void {
		const positionService = new Position(this.placements);
		// helper to find the position based on the current/given environment
		const findPosition = (reference, target, placement) => {
			let pos;
			if (this.dialogConfig.appendInline) {
				pos = this.addGap[placement](positionService.findRelative(reference, target, placement));
			} else {
				pos = this.addGap[placement](positionService.findAbsolute(reference, target, placement));
			}
			return pos;
		};

		let parentEl = this.dialogConfig.parentRef.nativeElement;
		let el = this.dialog.nativeElement;
		let dialogPlacement = this.placement;

		// split always returns an array, so we can just use the auto position logic
		// for single positions too
		const placements = this.dialogConfig.placement.split(",");

		// find the best placement
		dialogPlacement = positionService.findBestPlacement(parentEl, el, placements);

		// calculate the final position
		const pos = findPosition(parentEl, el, dialogPlacement);

		// update the element
		positionService.setElement(el, pos);
		setTimeout(() => { this.placement = dialogPlacement; });
	}

	/**
	 * Sets up a KeyboardEvent to close `Dialog` with Escape key.
	 * @param {KeyboardEvent} event
	 */
	@HostListener("keydown", ["$event"])
	escapeClose(event: KeyboardEvent) {
		switch (event.key) {
			case "Esc": // IE specific value
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
	 */
	public doClose() {
		this.close.emit();
	}

	/**
	 * At destruction of component, `Dialog` unsubscribes from handling window resizing changes.
	 */
	ngOnDestroy() {
		this.resizeSubscription.unsubscribe();
		this.scrollSubscription.unsubscribe();
	}
}
