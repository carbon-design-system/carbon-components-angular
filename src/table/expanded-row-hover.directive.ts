import {
	Directive,
	HostListener
} from "@angular/core";

@Directive({
	selector: "[ibmExpandedRowHover]"
})
export class ExpandedRowHover {
	@HostListener("mouseenter", ["$event"])
	addHoverClass(event) {
		event.target.previousElementSibling.classList.add("bx--expandable-row--hover-v2");
	}

	@HostListener("mouseleave", ["$event"])
	removeHoverClass(event) {
		event.target.previousElementSibling.classList.remove("bx--expandable-row--hover-v2");
	}
}
