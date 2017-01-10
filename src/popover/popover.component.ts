import { Component, OnChanges, OnInit, Input } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { PopoverService } from "./popover.service";

@Component({
	selector: "cdl-popover",
	template: `<span>
                popover
				</span>`,
	styleUrls: ["./popover.component.css"],
	providers: [PopoverService]
})
export class Popover implements Component {
	// deps
	private icons: PopoverService;
	private sanitizer: DomSanitizer;
	// props
	@Input() icon: string = "";
	@Input() size: string = "sm";

	// internal structures etc
	private iconSize: string;
	private iconSVG: SafeHtml;
	constructor(icons: PopoverService, sanitizer: DomSanitizer) {
		this.icons = icons;
		this.sanitizer = sanitizer;
	}

}
