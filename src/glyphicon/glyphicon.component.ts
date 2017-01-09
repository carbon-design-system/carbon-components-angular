import { Component, OnChanges, OnInit, Input } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { IconService } from "./glyphicon.service";

@Component({
	selector: "cdl-glyphicon",
	template: `<span 
					class="cdl-glyphicon" 
					[ngStyle]="{width: iconSize + 'px', height: iconSize + 'px'}" 
					[innerHTML]="iconSVG">
				</span>`,
	styleUrls: ["./glyphicon.component.css"],
	providers: [IconService]
})
export class Glyphicon implements OnChanges, OnInit {
	// deps
	private icons: IconService;
	private sanitizer: DomSanitizer;
	// props
	@Input() icon: string = "";
	@Input() size: string = "sm";

	// internal structures etc
	private iconSize: string;
	private iconSVG: SafeHtml;
	constructor(icons: IconService, sanitizer: DomSanitizer) {
		this.icons = icons;
		this.sanitizer = sanitizer;
	}

	getIcon() {
		if (!this.size) {
			this.size = "sm";
		} else if (parseFloat(this.size)) {
			this.size = "lg";
		}
		return this.icons.getIcon(this.icon, this.size).then(icon => {
			// forcebly set the height/width of the svg
			let tmp: HTMLElement = document.createElement("div");
			tmp.innerHTML = icon;
			// TypeScript doesn"t realize this is an HTMLElement, 
			//  and so complains unless we do this
			let fc: HTMLElement = <HTMLElement>tmp.firstChild;
			fc.setAttribute("height", this.icons.size2px(this.size));
			fc.setAttribute("width", this.icons.size2px(this.size));
			return this.sanitizer.bypassSecurityTrustHtml(tmp.innerHTML);
		});
	}

	ngOnInit() {
		this.getIcon().then(icon => {
			this.iconSVG = icon;
		});
	}

	ngOnChanges(changes) {
		// init icon and watch for changes
		if (changes.size) {
			this.iconSize = this.icons.size2px(changes.size.currentValue);
		}

		if (changes.icon) {
			this.getIcon().then(icon => {
				this.iconSVG = icon;
			});
		}
	}
}
