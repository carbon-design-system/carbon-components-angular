import {
	AfterViewInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ContentChild,
	ElementRef,
	HostBinding,
	HostListener,
	Input,
	NgZone,
	Renderer2
} from "@angular/core";
import { fromEvent } from "rxjs";
import { PopoverContainer } from "carbon-components-angular/popover";
import { ToggletipButton } from "./toggletip-button.directive";

/**
 * Get started with importing the module:
 *
 * ```typescript
 * import { ToggletipModule } from 'carbon-components-angular';
 * ```
 *
 * [See demo](../../?path=/story/components-toggletip--basic)
 */
@Component({
	selector: "cds-toggletip, ibm-toggletip",
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<ng-content select="[cdsToggletipButton]"></ng-content>
		<cds-popover-content>
			<ng-content select="[cdsToggletipContent]"></ng-content>
		</cds-popover-content>
	`
})
export class Toggletip extends PopoverContainer implements AfterViewInit {
	static toggletipCounter = 0;

	@Input() id = `tooltip-${Toggletip.toggletipCounter++}`;

	@HostBinding("class.cds--toggletip") toggletipClass = true;
	@HostBinding("class.cds--toggletip--open") @Input() _open = false;

	@ContentChild(ToggletipButton, { read: ElementRef }) btn!: ElementRef;

	documentClick = this.handleFocusOut.bind(this);

	constructor(
		protected hostElement: ElementRef,
		protected ngZone: NgZone,
		protected renderer: Renderer2,
		protected changeDetectorRef: ChangeDetectorRef
	) {
		super(hostElement, ngZone, renderer, changeDetectorRef);
		this.highContrast = true;
		this.dropShadow = false;
	}

	ngAfterViewInit(): void {

		this.initialzeReferences();

		// Listen for click events on trigger
		fromEvent(this.btn.nativeElement, "click")
			.subscribe((event: Event) => {
				// Add/Remove event listener based on _open to improve performance when there
				// are a lot of toggletips
				if (this._open) {
					document.removeEventListener("click", this.documentClick);
				} else {
					document.addEventListener("click", this.documentClick);
				}

				this.handleExpansion(!this._open, event);
			});

		// Toggletip is open on initial render, add 'click' event listener to document so users can close
		if (this._open) {
			document.addEventListener("click", this.documentClick);
		}

		if (this.btn) {
			this.renderer.setAttribute(this.btn.nativeElement, "aria-controls", this.id);
		}
	}

	@HostListener("keyup", ["$event"])
	hostkeys(event: KeyboardEvent) {
		if (open && event.key === "Escape") {
			event.stopPropagation();
			this.handleExpansion(false, event);
		}
	}

	handleFocusOut(event) {
		if (!this.hostElement.nativeElement.contains(event.target)) {
			this.handleExpansion(false, event);
		}
	}

	private handleExpansion(state = false, event: Event) {
		this.handleChange(state, event);
		if (this.btn) {
			this.renderer.setAttribute(this.btn.nativeElement, "aria-expanded", this._open.toString());
		}
	}
}
