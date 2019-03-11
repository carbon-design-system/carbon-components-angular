import {
	Directive,
	HostListener
} from "@angular/core";

@Directive({
	selector: "[ibmHoverToggle]"
})
export class HoverToggle {
	@HostListener("mouseenter", ["$event"])
	addHoverClass(event) {
		console.log(event.target);
		event.target.previousElementSibling.classList.add("bx--expandable-row--hover-v2");
	}

	@HostListener("mouseleave", ["$event"])
	removeHoverClass(event) {
		event.target.previousElementSibling.classList.remove("bx--expandable-row--hover-v2");
	}
}
