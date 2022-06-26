import {
	AfterViewInit,
	Component,
	ContentChild,
	ElementRef,
	HostBinding,
	HostListener,
	Input,
	Renderer2
} from "@angular/core";
import { fromEvent } from "rxjs";
import { PopoverContainer } from "carbon-components-angular/popover";
import { ToggletipButton } from "./toggletip-button.directive";

@Component({
	selector: "ibm-toggletip",
	template: `
		<ng-content select="[ibmToggletipButton]"></ng-content>
		<ibm-popover-content>
			<ng-content select="[ibmToggletipContent]"></ng-content>
		</ibm-popover-content>
	`
})
export class Toggletip extends PopoverContainer implements AfterViewInit {
	static toggletipCounter = 0;

	@Input() id = `tooltip-${Toggletip.toggletipCounter++}`;

	@HostBinding("class.cds--toggletip") toggletipClass = true;
	@HostBinding("class.cds--toggletip--open") @Input() isOpen = false;

	@ContentChild(ToggletipButton, { read: ElementRef, static: false }) btn!: ElementRef;

	constructor(private hostElement: ElementRef, private renderer: Renderer2) {
		super();
		this.highContrast = true;
		this.dropShadow = false;
	}

	ngAfterViewInit(): void {
		// Listen for click events on trigger
		fromEvent(this.btn.nativeElement, "click")
			.subscribe((event: Event) => this.handleExpansion(!this.isOpen, event));

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

	@HostListener("document:click", ["$event"])
	handleFocusOut(event) {
		if (!this.hostElement.nativeElement.contains(event.target)) {
			this.handleExpansion(false, event);
		}
	}

	private handleExpansion(state = false, event: Event) {
		this.handleChange(state, event);
		if (this.btn) {
			this.renderer.setAttribute(this.btn.nativeElement, "aria-expanded", this.isOpen.toString());
		}
	}
}
