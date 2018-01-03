import {
	Component,
	ElementRef,
	AfterViewInit,
	Input,
} from "@angular/core";

/**
 * `n-icon` pulls the icon from the loaded sprite, and renders it at the specified size.
 * Under the hood, `n-icon` generates code similar to the following:
 * ```
 * <svg class="icon" width="30" height="30"><use href="#alert_30"></use></svg>
 * ```
 */
@Component({
	selector: "n-static-icon",
	template: ""
})
export class StaticIcon implements AfterViewInit {
	/** follows the naming convention found in the icon listing on the demo page */
	@Input() icon: string;
	/** accepts color strings */
	@Input() color: "blue" | "light" | "dark" | "white" = "dark";
	/** accepts abbreviated size strings */
	@Input() size: "xs" | "sm" | "md" | "lg" = "md";

	/** map size strings to numeric values */
	protected sizeMap = {
		"xs": 14,
		"sm": 16,
		"md": 20,
		"default": 20, // remove in the next major version (when default is removed everywhere)
		"lg": 30
	};

	protected iconMap = {
		"chevron_down_16": classList => `<svg
			class="${classList}"
			width = "16"
			height = "16"
			viewBox = "0 0 16 16">
			<path d="M14.6 4L8 10.6 1.4 4l-.8.8L8 12.3l7.4-7.5z"/>
		</svg>`,
		"chevron_down_20": classList => `<svg
			class="${classList}"
			width="20px"
			height="20px"
			viewBox="0 0 20 20">
			<g>
				<polygon class="st0" points="18.6,4.2 10,12.7 1.4,4.2 0.6,5 10,14.4 19.4,5"/>
			</g>
		</svg>`,
		"chevron_down_30": classList => `<svg
			class="${classList}"
			width="30px"
			height="30px"
			viewBox="0 0 30 30">
			<polygon class="st0" points="27.3,7 15,19.3 2.7,7 1.3,8.4 15,22.1 28.7,8.4 "/>
		</svg>`,
		"x_16": classList => `<svg
			class="${classList}"
			viewBox="0 0 16 16">
			<polygon
				points="14.5,2.6 13.4,1.5 8,6.9 2.6,1.5
				1.5,2.6 6.9,8 1.5,13.4 2.6,14.5
				8,9.1 13.4,14.5 14.5,13.4 9.1,8"/>
		</svg>`
	};

	/**
	 * Pass down `classList` from host element.
	 * @return {object}
	 */
	get classList() {
		return this.elementRef.nativeElement.classList;
	}

	/**
	 * Initialize the component
	 *
	 * @param {ElementRef} elementRef
	 */
	constructor(private elementRef: ElementRef) { }

	public ngAfterViewInit() {
		const el = this.elementRef.nativeElement;
		el.style.display = "flex";
		const icon = this.iconMap[`${this.icon}_${this.sizeMap[this.size]}`];
		if (icon) {
			el.innerHTML = icon(this.buildMatterClass() + " " + this.classList);
			el.classList = this.buildMatterClass() + " " + this.classList;
		} else {
			console.error(`${this.icon} at size ${this.size}(${this.sizeMap[this.size]}) needs to be added to StaticIcon's iconMap`);
		}
	}

	/**
	 * Create a class name based on @Input() `color` and `size`.
	 * @return {string}
	 */
	public buildMatterClass() {
		if (this.color === "dark" && this.size !== "md") {
			return `icon--${this.size}`;
		} else {
			return `icon${this.color !== "dark" ? `--${this.color}` : ""}${this.color !== "dark" && this.size !== "md" ? `-${this.size}` : ""}`;
		}
	}
}
