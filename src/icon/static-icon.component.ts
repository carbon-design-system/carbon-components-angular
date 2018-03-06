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
	/** classlist for the SVG */
	@Input() classList: String = "";

	/** map size strings to numeric values */
	protected sizeMap = {
		"xs": 14,
		"sm": 16,
		"md": 20,
		"default": 20, // (size `"default"` is being deprecated as of neutrino v1.2.0, please use `"md"` instead)
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
		"chevron_left_16": classList => `<svg
			class="${classList}"
			width="16"
			height="16"
			viewBox="0 0 16 16">
			<path d="M10 11.5L6.4 8 10 4.5l-1-1L4.6 8 9 12.5z"/>
			<path d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM8
			1.2c3.7 0 6.8 3.1 6.8 6.8 0 3.7-3.1 6.8-6.8 6.8S1.2 11.7 1.2 8c0-3.7 3.1-6.8 6.8-6.8z"/>
		</svg>`,
		"chevron_right_16": classList => `<svg
			class="${classList}"
			width="16"
			height="16"
			viewBox="0 0 16 16">
			<path d="M6 4.5L9.6 8 6 11.5l1 1L11.4 8 7 3.5z"/>
			<path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14.8c-3.7 0-6.8-3.1-6.8-6.8 0-3.7
			3.1-6.8 6.8-6.8s6.8 3.1 6.8 6.8c0 3.7-3.1 6.8-6.8 6.8z"/>
		</svg>`,
		"chevron_left_disabled_16": classList => `<svg
			class="${classList}"
			width="16px"
			height="16px"
			viewBox="0 0 16 16">
			<path d="M0.1,7h1c0.2-1.2,0.6-2.3,1.3-3.2L1.7,3.1C0.8,4.2,0.3,5.5,0.1,7z"/>
			<path d="M0.1,9c0.2,1.5,0.8,2.8,1.6,3.9l0.7-0.7c-0.7-0.9-1.2-2-1.3-3.2H0.1z"/>
			<path d="M7,1.1v-1C5.5,0.3,4.2,0.8,3.1,1.7l0.7,0.7C4.7,1.7,5.8,1.3,7,1.1z"/>
			<path d="M9,1.1c1.2,0.2,2.3,0.6,3.2,1.3l0.7-0.7C11.8,0.8,10.5,0.3,9,0.1V1.1z"/>
			<path d="M13.6,12.2l0.7,0.7c0.9-1.1,1.4-2.4,1.6-3.9h-1C14.7,10.2,14.3,11.3,13.6,12.2z"/>
			<path d="M15.9,7c-0.2-1.5-0.8-2.8-1.6-3.9l-0.7,0.7c0.7,0.9,1.2,2,1.3,3.2H15.9z"/>
			<path d="M9,14.9v1c1.5-0.2,2.8-0.8,3.9-1.6l-0.7-0.7C11.3,14.3,10.2,14.7,9,14.9z"/>
			<path d="M3.1,14.3c1.1,0.9,2.4,1.4,3.9,1.6v-1c-1.2-0.2-2.3-0.6-3.2-1.3L3.1,14.3z"/>
			<polygon points="5.5,7.1 4.6,8 5.5,8.9 6.4,8 6.4,8 6.4,8 "/>
			<polygon points="7.3,7.1 8.2,6.2 7.2,5.3 6.4,6.2 "/>
			<polygon points="10,4.5 9,3.5 8.1,4.4 9.1,5.4 "/>
			<polygon points="10,11.5 9.1,10.6 8.1,11.6 9,12.5 "/>
			<polygon points="7.3,8.9 6.4,9.8 7.2,10.7 8.2,9.8 "/>
		</svg>`,
		"chevron_right_disabled_16": classList => `<svg
			class="${classList}"
			width="16px"
			height="16px"
			viewBox="0 0 16 16">
			<path d="M15.9,9h-1c-0.2,1.2-0.6,2.3-1.3,3.2l0.7,0.7C15.2,11.8,15.7,10.5,15.9,9z"/>
			<path d="M15.9,7c-0.2-1.5-0.8-2.8-1.6-3.9l-0.7,0.7c0.7,0.9,1.2,2,1.3,3.2H15.9z"/>
			<path d="M9,14.9v1c1.5-0.2,2.8-0.8,3.9-1.6l-0.7-0.7C11.3,14.3,10.2,14.7,9,14.9z"/>
			<path d="M7,14.9c-1.2-0.2-2.3-0.6-3.2-1.3l-0.7,0.7c1.1,0.9,2.4,1.4,3.9,1.6V14.9z"/>
			<path d="M2.4,3.8L1.7,3.1C0.8,4.2,0.3,5.5,0.1,7h1C1.3,5.8,1.7,4.7,2.4,3.8z"/>
			<path d="M0.1,9c0.2,1.5,0.8,2.8,1.6,3.9l0.7-0.7c-0.7-0.9-1.2-2-1.3-3.2H0.1z"/>
			<path d="M7,1.1v-1C5.5,0.3,4.2,0.8,3.1,1.7l0.7,0.7C4.7,1.7,5.8,1.3,7,1.1z"/>
			<path d="M12.9,1.7C11.8,0.8,10.5,0.3,9,0.1v1c1.2,0.2,2.3,0.6,3.2,1.3L12.9,1.7z"/>
			<polygon points="10.5,8.9 11.4,8 10.5,7.1 9.6,8 9.6,8 9.6,8 "/>
			<polygon points="8.7,8.9 7.8,9.8 8.8,10.7 9.6,9.8 "/>
			<polygon points="6,11.5 7,12.5 7.9,11.6 6.9,10.6 "/>
			<polygon points="6,4.5 6.9,5.4 7.9,4.4 7,3.5 "/>
			<polygon points="8.7,7.1 9.6,6.2 8.8,5.3 7.8,6.2 "/>
		</svg>`,
		"x_16": classList => `<svg
			class="${classList}"
			width="16"
			height="16"
			viewBox="0 0 16 16">
			<polygon
				points="14.5,2.6 13.4,1.5 8,6.9 2.6,1.5
				1.5,2.6 6.9,8 1.5,13.4 2.6,14.5
				8,9.1 13.4,14.5 14.5,13.4 9.1,8"/>
		</svg>`,
		"info_20": classList => `<svg
			class="${classList}"
			width="20px"
			height="20px"
			viewBox="0 0 30 30">
			<polygon points="17,13 12,13 12,15 14,15 14,21 12,21 12,23 19,23 19,21 17,21 "/>
			<circle cx="15" cy="9" r="2"/>
			<path d="M15,1C7.3,1,1,7.3,1,15s6.3,14,14,14s14-6.3,14-14S22.7,1,15,1z M15,27C8.4,27,3,21.6,3,15S8.4,3,15,3
			s12,5.4,12,12S21.6,27,15,27z"/>
		</svg>`,
		"warning_20": classList => `<svg
			class="${classList}"
			width="20"
			height="20"
			viewBox="0 0 30 30">
			<path d="M15.9 18l.8-7.8V7h-3.4v3.2l.8 7.8z"/>
			<circle cx="15" cy="21.7" r="1.8"/>
			<path d="M15 1C7.3 1 1 7.3 1 15s6.3 14 14 14 14-6.3 14-14S22.7 1 15 1zm0
			26C8.4 27 3 21.6 3 15S8.4 3 15 3s12 5.4 12 12-5.4 12-12 12z"/>
		</svg>`,
		"warning_16": classList => `<svg
			class="${classList}"
			height="16"
			width="16"
			viewBox="0 0 16 16">
			<g>
				<path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0
				14.8c-3.7 0-6.8-3.1-6.8-6.8S4.3 1.2 8 1.2s6.8 3.1 6.8 6.8-3.1 6.8-6.8 6.8z"></path>
				<path d="M6.9 5.5l.6 4.5h1l.6-4.5V3H6.9z"></path>
				<circle cx="8" cy="12" r="1"></circle>
			</g>
		</svg>`,
		"danger_20": classList => `<svg
			class="${classList}"
			width="20"
			height="20"
			viewBox="0 0 30 30">
			<path d="M13.3 13.2l.8 7.8h1.8l.8-7.8V10h-3.4z"/>
			<circle cx="15" cy="24.2" r="1.8"/>
			<path d="M29.9 27.5l-14-25.9c-.2-.4-.5-.6-.9-.6s-.7.2-.9.5L.1 27.4c-.3.8.2
			1.6.9 1.6h28c.7 0 1.2-.8.9-1.5zM2.6 27L15 4.1 27.4 27H2.6z"/>
		</svg>`,
		"success_20": classList => `<svg
			class="${classList}"
			width="20"
			height="20"
			viewBox="0 0 30 30">
			<path d="M13 17.6l-3.3-3.3-1.4 1.4 4.7 4.7 8.7-8.7-1.4-1.4z"/>
			<path d="M15 3c6.6 0 12 5.4 12 12s-5.4 12-12 12S3 21.6 3 15 8.4 3 15
			3m0-2C7.3 1 1 7.3 1 15s6.3 14 14 14 14-6.3 14-14S22.7 1 15 1z"/>
		</svg>`,
		"success_16": classList => `<svg
			class="${classList}"
			height="16"
			width="16"
			viewBox="0 0 16 16">
			<path d="M8 1.2c3.7 0 6.8 3.1 6.8 6.8s-3.1 6.8-6.8
				6.8S1.2 11.7 1.2 8 4.3 1.2 8 1.2M8
				0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z"/>
				<path d="M6.7 9.6L4.6 7.5l-.9.9 3 3 5.6-5.5-.9-.9z"/>
		</svg>`,
		"error_16": classList => `<svg
			class="${classList}"
			height="16"
			width="16"
			viewBox="0 0 16 16">
			<path d="M6.9 7.5l.6 3.5h1l.6-3.5V5H6.9z"/>
			<circle cx="8" cy="13" r="1"/>
			<path d="M15.9 15.2L8.5 1.3C8.4 1.1 8.2 1 8
				1s-.4.1-.5.3L.1 15.2c-.2.4 0 .8.5.8h14.9c.4 0 .6-.4.4-.8zm-14.3-.4L8
				2.9l6.4 11.9H1.6z"/>
		</svg>`,
		"search_16": classList => `<svg
			class="${classList}"
			height="16"
			width="16"
			viewBox="0 0 16 16">
			<g>
				<path
					d="M6,0C2.7,0,0,2.7,0,6s2.7,6,6,6s6-2.7,6-6S9.3,0,6,0z
					M6,11c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5
					S8.8,11,6,11z"/>
				<rect
					x="12"
					y="10.2"
					transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 31.4698 13.0355)"
					width="2"
					height="5.7"/>
			</g>
		</svg>`,
		"loading_rows_30": classList => `<svg
			class="${classList}"
			height="30"
			width="30"
			viewBox="0 0 32 30">
            <circle cx="4" cy="16" r="4"  fill="#eee">
            	<animate id="one" attributeName="fill"
            	dur="1s"
            	values="#eee;#999;#eee"
            	begin="0;two.end"/>
            </circle>
            <circle cx="16" cy="16" r="4" fill="#eee">
            	<animate  id="two" attributeName="fill"
            	begin="one.end-0.5s"
            	dur="1s"
            	values="#eee;#999;#eee"/>
            </circle>
            <circle  cx="28" cy="16" r="4" fill="#eee">
            	<animate attributeName="fill"
            	begin="two.end-0.5s"
           		dur="1s"
            	values="#eee;#999;#eee"/>
            </circle>
		</svg>
		`
	};

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
