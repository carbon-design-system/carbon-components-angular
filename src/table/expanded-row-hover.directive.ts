import {
	Directive,
	HostListener
} from "@angular/core";

@Directive({
	selector: "[cdsExpandedRowHover], [ibmExpandedRowHover]"
})
export class ExpandedRowHover {
	@HostListener("mouseenter", ["$event"])
	addHoverClass(event) {
		event.target.previousElementSibling.classList.add("cds--expandable-row--hover");
	}

	@HostListener("mouseleave", ["$event"])
	removeHoverClass(event) {
		event.target.previousElementSibling.classList.remove("cds--expandable-row--hover");
	}
}
