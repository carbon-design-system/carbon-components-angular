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
	OnChanges,
	HostBinding,
	SimpleChanges,
	ComponentRef
} from "@angular/core";
import { DialogService } from "./dialog.service";
import { CloseMeta, CloseReasons, DialogConfig } from "./dialog-config.interface";
import { EventService } from "carbon-components-angular/utils";
import { Dialog } from "./dialog.component";

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
	selector: "[cdsDialog], [ibmDialog]",
	exportAs: "dialog",
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
	 * @deprecated as of v5, use `cdsDialog` instead
	 * Dialog body content.
	 */
	@Input() set ibmDialog(body: string | TemplateRef<any>) {
		this.cdsDialog = body;
	}

	@Input() cdsDialog: string | TemplateRef<any>;
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
	 * This specifies any vertical and horizontal offset for the position of the dialog
	 */
	@Input() offset: { x: number, y: number };
	/**
	 * Classes to add to the dialog container
	 */
	@Input() wrapperClass: string;
	/**
	 * Spacing between the dialog and it's triggering element
	 */
	@Input() gap = 0;
	/**
	 * Set to `true` to open the dialog next to the triggering component
	 */
	@Input() appendInline = false;
	/**
	 * Optional data for templates
	 */
	@Input() data = {};

	@Input() @HostBinding("attr.aria-expanded") isOpen = false;
	/**
	 * This prevents the dialog from being toggled
	 */
	@Input() disabled = false;
	/**
	 * This input allows explicit control over how the dialog should close
	 */
	@Input() shouldClose: (meta: CloseMeta) => boolean;
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
	/**
	 * Emits an event when the state of `isOpen` changes. Allows `isOpen` to be double bound
	 */
	@Output() isOpenChange = new EventEmitter<boolean>();

	@HostBinding("attr.role") role = "button";
	@HostBinding("attr.aria-haspopup") hasPopup = true;
	@HostBinding("attr.aria-owns") get ariaOwns(): string {
		return this.isOpen ? this.dialogConfig.compID : null;
	}

	/**
	 * Keeps a reference to the currently opened dialog
	 */
	protected dialogRef: ComponentRef<Dialog>;

	/**
	 * Creates an instance of DialogDirective.
	 * @param elementRef
	 * @param viewContainerRef
	 * @param dialogService
	 * @param eventService
	 */
	constructor(
		protected elementRef: ElementRef,
		protected viewContainerRef: ViewContainerRef,
		protected dialogService: DialogService,
		protected eventService: EventService
	) {}

	ngOnChanges(changes: SimpleChanges) {
		// set the config object (this can [and should!] be added to in child classes depending on what they need)
		this.dialogConfig = {
			title: this.title,
			content: this.cdsDialog,
			placement: this.placement,
			parentRef: this.elementRef,
			gap: this.gap,
			trigger: this.trigger,
			closeTrigger: this.closeTrigger,
			shouldClose: this.shouldClose || (() => true),
			appendInline: this.appendInline,
			wrapperClass: this.wrapperClass,
			data: this.data,
			offset: this.offset,
			disabled: this.disabled
		};

		if (changes.isOpen) {
			if (changes.isOpen.currentValue) {
				this.open();
			} else if (!changes.isOpen.firstChange) {
				this.close({
					reason: CloseReasons.programmatic
				});
			}
		}

		// Run any code a child class may need.
		this.onDialogChanges(changes);
		this.updateConfig();
	}

	/**
	 * Sets the config object and binds events for hovering or clicking before
	 * running code from child class.
	 */
	ngOnInit() {
		// fix for safari hijacking clicks
		this.dialogService.singletonClickListen();

		const element = this.elementRef.nativeElement;

		this.eventService.on(element, "keydown", (event: KeyboardEvent) => {
			if (event.target === this.dialogConfig.parentRef.nativeElement &&
				(event.key === "Tab" || event.key === "Tab" && event.shiftKey) ||
				event.key === "Escape") {
				this.close({
					reason: CloseReasons.interaction,
					target: event.target
				});
			}
		});

		// bind events for hovering or clicking the host
		if (this.trigger === "hover" || this.trigger === "mouseenter") {
			this.eventService.on(element, "mouseenter", this.open.bind(this));
			this.eventService.on(element, this.closeTrigger, (event) => {
				this.close({
					reason: CloseReasons.interaction,
					target: event.target
				});
			});
			this.eventService.on(element, "focus", this.open.bind(this));
			this.eventService.on(element, "blur", (event) => {
				this.close({
					reason: CloseReasons.interaction,
					target: event.target
				});
			});
		} else {
			this.eventService.on(element, "click", (event) => {
				this.toggle({
					reason: CloseReasons.interaction,
					target: event.target
				});
			});
			this.eventService.on(element, "keydown", (event: KeyboardEvent) => {
				if (event.key === "Enter" || event.key === " ") {
					setTimeout(() => {
						this.open();
					});
				}
			});
		}

		DialogDirective.dialogCounter++;
		this.dialogConfig.compID = "dialog-" + DialogDirective.dialogCounter;

		// run any code a child class may need
		this.onDialogInit();
		this.updateConfig();
	}

	/**
	 * When the host dies, kill the popover.
	 * - Useful for use in a modal or similar.
	 */
	ngOnDestroy() {
		this.close({
			reason: CloseReasons.destroyed
		});
	}

	/**
	 * Helper method to call dialogService 'open'.
	 * - Enforce accessibility by updating an aria attr for nativeElement.
	 */
	open(component?) {
		// don't allow dialogs to be opened if they're already open
		if (this.dialogRef || this.disabled) { return; }

		// actually open the dialog, emit events, and set the open state
		this.dialogRef = this.dialogService.open(this.viewContainerRef, this.dialogConfig, component);
		this.isOpen = true;
		this.onOpen.emit();
		this.isOpenChange.emit(true);

		// Handles emitting all the close events to clean everything up
		// Also enforce accessibility on close by updating an aria attr on the nativeElement.
		this.dialogRef.instance.close.subscribe((meta: CloseMeta) => {
			if (!this.dialogRef) { return; }
			if (this.dialogConfig.shouldClose && this.dialogConfig.shouldClose(meta)) {
				// close the dialog, emit events, and clear out the open states
				this.dialogService.close(this.dialogRef);
				this.dialogRef = null;
				this.isOpen = false;
				this.onClose.emit();
				this.isOpenChange.emit(false);
			}
		});

		return this.dialogRef;
	}

	/**
	 * Helper method to toggle the open state of the dialog
	 */
	toggle(meta: CloseMeta = { reason: CloseReasons.interaction }) {
		if (!this.isOpen) {
			this.open();
		} else {
			this.close(meta);
		}
	}

	/**
	 * Helper method to close the dialogRef.
	 */
	close(meta: CloseMeta = { reason: CloseReasons.interaction }) {
		if (this.dialogRef) {
			this.dialogRef.instance.doClose(meta);
		}
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
	protected onDialogChanges(_changes: SimpleChanges) {}

	protected updateConfig() {}
}
