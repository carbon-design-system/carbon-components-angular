import {
	Directive,
	Input,
	Output,
	EventEmitter,
	OnInit,
	OnDestroy,
	ElementRef,
	TemplateRef,
	ViewContainerRef,
	HostListener,
	OnChanges,
	HostBinding,
	Optional
} from "@angular/core";
import { fromEvent } from "rxjs";
import { DialogService } from "./dialog.service";
import { DialogConfig } from "./dialog-config.interface";
import { EventService } from "../utils/utils.module";

/**
 * A generic directive that can be inherited from to create dialogs (for example, a tooltip or popover)
 *
 * This class contains the relevant initialization code, specific templates, options, and additional inputs
 * should be specified in the derived class.
 *
 * NOTE: All child classes should add `DialogService` as a provider, otherwise they will lose context that
 * the service relies on.
 */
@Directive({
	selector: "[ibmDialog]",
	exportAs: "ibmDialog",
	providers: [
		DialogService
	]
})
export class DialogDirective implements OnInit, OnDestroy, OnChanges {
	static dialogCounter = 0;
	/**
	 * Title for the dialog
	 */
	@Input() title = "";
	/**
	 * Dialog body content.
	 */
	@Input() ibmDialog: string | TemplateRef<any>;
	/**
	 * Defines how the Dialog is triggered.(Hover and click behave the same on mobile - both respond to a single tap).
	 * Do not add focusable elements if trigger is `hover` or `mouseenter`.
	 */
	@Input() trigger: "click" | "hover" | "mouseenter" = "click";
	/**
	 * Defines how the Dialog close event is triggered.
	 *
	 * [See here](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event)
	 * for more on the difference between `mouseleave` and `mouseout`.
	 *
	 * Defaults to `click` when `trigger` is set to `click`.
	 */
	@Input() closeTrigger: "mouseout" | "mouseleave" = "mouseleave";
	/**
	 * Placement of the dialog, usually relative to the element the directive is on.
	 */
	@Input() placement = "left";
	/**
	 * Class to add to the dialog container
	 */
	@Input() wrapperClass: string;
	/**
	 * Spacing between the dialog and it's triggering element
	 */
	@Input() gap = 0;
	/**
	 * Deprecated. Defaults to true. Use appendInline to keep dialogs within page flow
	 * Value `true` appends Dialog to the body (to break out of containers)
	 */
	@Input() set appendToBody(v: boolean) {
		console.log("`appendToBody` has been deprecated. Dialogs now append to the body by default.");
		console.log("Ensure you have an `ibm-placeholder` in your app.");
		console.log("Use `appendInline` if you need to position your dialogs within the normal page flow.");
		this.appendInline = !v;
	}
	get appendToBody() {
		return !this.appendInline;
	}
	/**
	 * Set to `true` to open the dialog next to the triggering component
	 */
	@Input() appendInline = false;
	/**
	 * Optional data for templates
	 */
	@Input() data = {};
	/**
	 * Config object passed to the rendered component
	 */
	dialogConfig: DialogConfig;
	/**
	 * Emits an event when the dialog is closed
	 */
	@Output() onClose: EventEmitter<any> = new EventEmitter();
	/**
	 * Emits an event when the dialog is opened
	 */
	@Output() onOpen: EventEmitter<any> = new EventEmitter();

	@HostBinding("attr.role") role = "button";
	@HostBinding("attr.aria-expanded") expanded = false;
	@HostBinding("attr.aria-haspopup") hasPopup = true;
	@HostBinding("attr.aria-owns") get ariaOwns(): string {
		return this.expanded ? this.dialogConfig.compID : null;
	}

	/**
	 * Creates an instance of DialogDirective.
	 * @param elementRef
	 * @param viewContainerRef
	 * @param dialogService
	 */
	constructor(
		protected elementRef: ElementRef,
		protected viewContainerRef: ViewContainerRef,
		protected dialogService: DialogService,
		// mark `eventService` as optional since making it mandatory would be a breaking change
		@Optional() protected eventService: EventService = null
	) {}

	/**
	 * Overrides 'touchstart' event to trigger a toggle on the Dialog.
	 */
	onTouchStart(event) {
		event.stopImmediatePropagation();
		event.preventDefault();
		this.toggle();
	}

	ngOnChanges() {
		// set the config object (this can [and should!] be added to in child classes depending on what they need)
		this.dialogConfig = {
			title: this.title,
			content: this.ibmDialog,
			placement: this.placement,
			parentRef: this.elementRef,
			gap: this.gap,
			trigger: this.trigger,
			closeTrigger: this.closeTrigger,
			shouldClose: () => true,
			appendInline: this.appendInline,
			wrapperClass: this.wrapperClass,
			data: this.data
		};

		// Run any code a child class may need.
		this.onDialogChanges();
	}

	/**
	 * Sets the config object and binds events for hovering or clicking before
	 * running code from child class.
	 */
	ngOnInit() {
		// fix for safari hijacking clicks
		this.dialogService.singletonClickListen();

		const element = this.elementRef.nativeElement;

		if (this.eventService) {
			this.eventService.on(element, "touchstart", this.onTouchStart.bind(this));

			this.eventService.on(element, "keydown", (event: KeyboardEvent) => {
				// "Esc" is an IE specific value
				if (event.target === this.dialogConfig.parentRef.nativeElement &&
					(event.key === "Tab" || event.key === "Tab" && event.shiftKey) ||
					event.key === "Escape" || event.key === "Esc") {
					this.close();
				}
			});

			// bind events for hovering or clicking the host
			if (this.trigger === "hover" || this.trigger === "mouseenter") {
				this.eventService.on(element, "mouseenter", this.open.bind(this));
				this.eventService.on(element, this.closeTrigger, this.close.bind(this));
				this.eventService.on(element, "focus", this.open.bind(this));
				this.eventService.on(element, "blur", this.close.bind(this));
			} else {
				this.eventService.on(element, "click", this.toggle.bind(this));
				this.eventService.on(element, "keydown", (event: KeyboardEvent) => {
					// "Spacebar" is an IE specific value
					if (event.key === "Enter" || event.key === " " || event.key === "Spacebar") {
						setTimeout(() => {
							this.open();
						});
					}
				});
			}
		} else {
			fromEvent(element, "touchstart", { passive: true }).subscribe(this.onTouchStart.bind(this));

			fromEvent(element, "keydown").subscribe((event: KeyboardEvent) => {
				// "Esc" is an IE specific value
				if (event.target === this.dialogConfig.parentRef.nativeElement &&
					(event.key === "Tab" || event.key === "Tab" && event.shiftKey) ||
					event.key === "Escape" || event.key === "Esc") {
					this.close();
				}
			});

			// bind events for hovering or clicking the host
			if (this.trigger === "hover" || this.trigger === "mouseenter") {
				fromEvent(element, "mouseenter").subscribe(() => this.open());
				fromEvent(element, this.closeTrigger).subscribe(() => this.close());
				fromEvent(element, "focus").subscribe(() => this.open());
				fromEvent(element, "blur").subscribe(() => this.close());
			} else {
				fromEvent(element, "click").subscribe(() => this.toggle());
				fromEvent(element, "keydown").subscribe((event: KeyboardEvent) => {
					// "Spacebar" is an IE specific value
					if (event.key === "Enter" || event.key === " " || event.key === "Spacebar") {
						setTimeout(() => {
							this.open();
						});
					}
				});
			}
		}

		// call onClose when the dialog is closed
		// - Enforce accessibility by updating an aria attr for nativeElement.
		this.dialogService.isClosed.subscribe(value => {
			if (value) {
				this.onClose.emit();
				this.expanded = false;
			}
		});

		DialogDirective.dialogCounter++;
		this.dialogConfig.compID = "dialog-" + DialogDirective.dialogCounter;

		// run any code a child class may need
		this.onDialogInit();
	}

	/**
	 * When the host dies, kill the popover.
	 * - Useful for use in a modal or similar.
	 */
	ngOnDestroy() {
		this.close();
	}

	/**
	 * Helper method to call dialogService 'open'.
	 * - Enforce accessibility by updating an aria attr for nativeElement.
	 */
	open() {
		this.dialogService.open(this.viewContainerRef, this.dialogConfig);
		this.expanded = true;
		this.onOpen.emit();
	}

	/**
	 * Helper method to call dialogService 'toggle'.
	 * - Enforce accessibility by updating an aria attr for nativeElement.
	 */
	toggle() {
		this.expanded = !this.expanded;
		if (this.expanded) {
			this.onOpen.emit();
			this.open();
		} else {
			this.close();
		}
	}

	/**
	 * Helper method to call dialogService 'close'.
	 * - Enforce accessibility by updating an aria attr for nativeElement.
	 */
	close() {
		this.dialogService.close(this.viewContainerRef);
		this.expanded = false;
	}

	/**
	 * Empty method for child classes to override and specify additional init steps.
	 * Run after DialogDirective completes it's ngOnInit.
	 */
	protected onDialogInit() {}

	/**
	 * Empty method for child to override and specify additional on changes steps.
	 * run after DialogDirective completes it's ngOnChanges.
	 */
	protected onDialogChanges() {}
}
