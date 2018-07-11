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
		"addnew_circle_16": classList => `<svg
			class="${classList}"
			width = "16"
			height = "16"
			viewBox = "0 0 16 16">
			<path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14.8c-3.7 0-6.8-3.1-6.8-6.8 0-3.7
			3.1-6.8 6.8-6.8s6.8 3.1 6.8 6.8c0 3.7-3.1 6.8-6.8 6.8z"/>
			<path d="M9 4H7v3H4v2h3v3h2V9h3V7H9z"/>
		</svg>`,
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
				<polygon points="18.6,4.2 10,12.7 1.4,4.2 0.6,5 10,14.4 19.4,5"/>
			</g>
		</svg>`,
		"chevron_down_30": classList => `<svg
			class="${classList}"
			width="30px"
			height="30px"
			viewBox="0 0 30 30">
			<polygon points="27.3,7 15,19.3 2.7,7 1.3,8.4 15,22.1 28.7,8.4 "/>
		</svg>`,
		"chevron_up_circle_16": classList => `<svg
			class="${classList}"
			xmlns="http://www.w3.org/2000/svg"
			height="16" viewBox="0 0 16 16">
			<path d="M4.5 10L8 6.4l3.5 3.6 1-1L8 4.6 3.5 9z"></path>
			<path d="M0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8zm14.8 0c0 3.7-3.1 6.8-6.8 6.8-3.7
			0-6.8-3.1-6.8-6.8S4.3 1.2 8 1.2c3.7 0 6.8 3.1 6.8 6.8z"></path>
		</svg>`,
		"chevron_up_circle_disabled_16": classList => `<svg
			class="${classList}"
			xmlns="http://www.w3.org/2000/svg"
			height="16"
			viewBox="0 0 16 16">
			<path d="M9 .1v1c1.2.2 2.3.6 3.2 1.3l.7-.7C11.8.8 10.5.3 9 .1zM7 .1C5.5.3 4.2.8 3.1 1.7l.7.7c.9-.7 2-1.2 3.2-1.3v-1zM14.9
			7h1c-.2-1.5-.8-2.8-1.6-3.9l-.7.7c.7.9 1.1 2 1.3 3.2zM14.9 9c-.2 1.2-.6 2.3-1.3 3.2l.7.7c.9-1.1 1.4-2.4
			1.6-3.9h-1zM3.8 13.6l-.7.7c1.1.9 2.4 1.4 3.9 1.6v-1c-1.2-.2-2.3-.6-3.2-1.3zM9 15.9c1.5-.2 2.8-.8
			3.9-1.6l-.7-.7c-.9.7-2 1.2-3.2 1.3v1zM1.1 9h-1c.2 1.5.8 2.8 1.6 3.9l.7-.7c-.7-.9-1.1-2-1.3-3.2zM1.7
			3.1C.8 4.2.3 5.5.1 7h1c.2-1.2.6-2.3 1.3-3.2l-.7-.7zM8.9 5.5L8 4.6l-.9.9.9.9zM8.9 7.3l.9.9.9-1-.9-.8zM11.5
			10l1-1-.9-.9-1 1zM4.5 10l.9-.9-1-1-.9.9zM7.1 7.3l-.9-.9-.9.8.9 1z"/>
		</svg>`,
		"chevron_down_circle_16": classList => `<svg
			class="${classList}"
			xmlns="http://www.w3.org/2000/svg"
			height="16" viewBox="0 0 16 16">
			<path d="M11.5 6L8 9.6 4.5 6l-1 1L8 11.4 12.5 7z"/>
			<path d="M16 8c0-4.4-3.6-8-8-8S0 3.6 0 8s3.6 8 8 8 8-3.6 8-8zM1.2 8c0-3.7 3.1-6.8 6.8-6.8 3.7 0
			6.8 3.1 6.8 6.8s-3.1 6.8-6.8 6.8c-3.7 0-6.8-3.1-6.8-6.8z"/>
		</svg>`,
		"chevron_down_circle_disabled_16": classList => `<svg
			class="${classList}"
			xmlns="http://www.w3.org/2000/svg"
			height="16"
			viewBox="0 0 16 16">
			<path d="M7 15.9v-1c-1.2-.2-2.3-.6-3.2-1.3l-.7.7c1.1.9 2.4 1.4 3.9 1.6zM9 15.9c1.5-.2 2.8-.8 3.9-1.6l-.7-.7c-.9.7-2
			1.2-3.2 1.3v1zM1.1 9h-1c.2 1.5.8 2.8 1.6 3.9l.7-.7c-.7-.9-1.1-2-1.3-3.2zM1.1 7c.2-1.2.6-2.3 1.3-3.2l-.7-.7C.8 4.2.3
			5.5.1 7h1zM12.2 2.4l.7-.7C11.8.8 10.5.3 9 .1v1c1.2.2 2.3.6 3.2 1.3zM7 .1C5.5.3 4.2.8 3.1 1.7l.7.7c.9-.7 2-1.2
			3.2-1.3v-1zM14.9 7h1c-.2-1.5-.8-2.8-1.6-3.9l-.7.7c.7.9 1.1 2 1.3 3.2zM14.3 12.9c.9-1.1 1.4-2.4 1.6-3.9h-1c-.2 1.2-.6
			2.3-1.3 3.2l.7.7zM7.1 10.5l.9.9.9-.9-.9-.9zM7.1 8.7l-.9-.9-.9 1 .9.8zM4.5 6l-1 1 .9.9 1-1zM11.5 6l-.9.9 1 1
			.9-.9zM8.9 8.7l.9.9.9-.8-.9-1z"/>
		</svg>`,
		"chevron_right_circle_16": classList => `<svg
			class="${classList}"
			width="16"
			height="16"
			viewBox="0 0 16 16">
			<path d="M6 4.5L9.6 8 6 11.5l1 1L11.4 8 7 3.5z"/>
			<path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14.8c-3.7 0-6.8-3.1-6.8-6.8 0-3.7
			3.1-6.8 6.8-6.8s6.8 3.1 6.8 6.8c0 3.7-3.1 6.8-6.8 6.8z"/>
		</svg>`,
		"chevron_right_circle_disabled_16": classList => `<svg
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
		"chevron_right_16": classList => `<svg
			class="${classList}"
			width="16"
			height="16"
			viewBox="0 0 16 16">
				<g>
				<polygon points="4,14.7 10.6,8.1 4,1.6 4.8,0.7 12.3,8.1 4.8,15.6">
				</polygon>
				</g>
		</svg>`,
		"chevron_right_14": classList => `<svg
			class="${classList}"
			width="14"
			height="14"
			viewBox="0 0 16 16">
				<g>
				<polygon points="4,14.7 10.6,8.1 4,1.6 4.8,0.7 12.3,8.1 4.8,15.6">
				</polygon>
				</g>
		</svg>`,
		"chevron_left_16": classList => `<svg
			class="${classList}"
			height="16"
			width="16"
			viewBox="0 0 16 16">
			<g>
			<polygon points="12.3,14.7 5.7,8.1 12.3,1.6 11.4,0.7 4,8.1 11.4,15.6">
			</polygon>
			</g>
		</svg>
		`,
		"chevron_left_14": classList => `<svg
			class="${classList}"
			height="14"
			width="14"
			viewBox="0 0 16 16">
			<g>
			<polygon points="12.3,14.7 5.7,8.1 12.3,1.6 11.4,0.7 4,8.1 11.4,15.6">
			</polygon>
			</g>
		</svg>
		`,
		"chevron_left_circle_16": classList => `<svg
			class="${classList}"
			width="16"
			height="16"
			viewBox="0 0 16 16">
			<path d="M10 11.5L6.4 8 10 4.5l-1-1L4.6 8 9 12.5z"/>
			<path d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM8
			1.2c3.7 0 6.8 3.1 6.8 6.8 0 3.7-3.1 6.8-6.8 6.8S1.2 11.7 1.2 8c0-3.7 3.1-6.8 6.8-6.8z"/>
		</svg>`,
		"chevron_left_circle_disabled_16": classList => `<svg
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
		"info_fill_20": classList => `<svg
			class="${classList}"
			width="20px"
			height="20px"
			viewBox="0 0 20 20">
			<g>
				<path d="M10,0C4.5,0,0,4.5,0,10s4.5,10,10,10s10-4.5,10-10S15.5,0,10,0z M8.5,14.1l-3.6-3.6l1.1-1.1L8.5,12l5.6-5.6
					l1.1,1.1L8.5,14.1z"/>
			</g>
			</svg>
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
		"warning_fill_20": classList => `<svg
			class="${classList}"
			width="20px" height="20px" viewBox="0 0 20 20">
			<g>
				<path d="M10,19.4c-5.2,0-9.4-4.2-9.4-9.4c0-5.2,4.2-9.4,9.4-9.4c5.2,0,9.4,4.2,9.4,9.4C19.4,15.2,15.2,19.4,10,19.4z
					 M10,13.4c-1.2,0-2.1,0.9-2.1,2.1c0,1.2,0.9,2.1,2.1,2.1c1.2,0,2.1-0.9,2.1-2.1C12.1,14.3,11.2,13.4,10,13.4z M7.9,7l0.9,6.1h2.5
					l0.9-6l0-3.7H7.9V7z"/>
				<path d="M10,1.2c4.9,0,8.8,3.9,8.8,8.8s-3.9,8.8-8.8,8.8S1.2,14.9,1.2,10S5.1,1.2,10,1.2 M8.2,13.5
					c-0.6,0.5-0.9,1.2-0.9,2c0,1.5,1.2,2.7,2.7,2.7c1.5,0,2.7-1.2,2.7-2.7c0-0.8-0.4-1.5-0.9-2l0.1-0.8l0.8-5.5l0-0.1V7V4V2.8h-1.2H8.4
					H7.2V4v3v0.1l0,0.1l0.8,5.5L8.2,13.5 M10,0C4.5,0,0,4.5,0,10s4.5,10,10,10s10-4.5,10-10S15.5,0,10,0L10,0z M9.3,12.5L8.4,7V4h3.1v3
					l-0.8,5.5H9.3L9.3,12.5z M10,17c-0.8,0-1.5-0.7-1.5-1.5c0-0.8,0.7-1.5,1.5-1.5c0.8,0,1.5,0.7,1.5,1.5C11.5,16.3,10.8,17,10,17
					L10,17z"/>
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
		"failure_fill_20": classList => `<svg
			class="${classList}"
			width="20px" height="20px" viewBox="0 0 20 20">
			<g>
				<path d="M19.9,19L10.6,1.4c-0.3-0.5-1-0.5-1.2,0L0.1,19c-0.2,0.5,0.1,1,0.6,1h18.6C19.8,20,20.2,19.4,19.9,19z M10,18
					c-0.8,0-1.5-0.7-1.5-1.5c0-0.8,0.7-1.5,1.5-1.5c0.8,0,1.5,0.7,1.5,1.5C11.5,17.3,10.8,18,10,18z M11.5,9l-0.8,5H9.3L8.4,9V6h3.1V9z
					"/>
			</g>
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
		"success_fill_20": classList => `<svg
			class="${classList}"
			width="20px"
			height="20px"
			viewBox="0 0 20 20">
			<g>
				<path  d="M10,0C4.5,0,0,4.5,0,10s4.5,10,10,10s10-4.5,10-10S15.5,0,10,0z M8.5,14.1l-3.6-3.6l1.1-1.1L8.5,12l5.6-5.6
					l1.1,1.1L8.5,14.1z"/>
			</g>
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
		`,
		"help_16": classList => `<svg
			class="${classList}"
			height="16"
			viewBox="0 0 16 16">
				<path
					d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0
					14.8c-3.7 0-6.8-3.1-6.8-6.8 0-3.7 3.1-6.8 6.8-6.8s6.8 3.1 6.8 6.8c0 3.7-3 6.8-6.8 6.8z" />
				<path
					d="M8 2.9c-.9 0-1.7.2-2.3.7-.6.5-.9
					1.2-1.1 2.1v.2l1.6.1v-.1c.1-.6.3-1.1.6-1.4.4-.3.7-.4 1.2-.4s.9.2 1.3.5c.3.3.5.7.5 1.1 0
					.2-.1.4-.2.6-.1.2-.4.4-.8.8-.4.3-.7.6-.9.8-.2.3-.4.5-.5.8v.2c-.1.2-.2.3-.2.6v.6h1.5V10c0-.4
					0-.5.1-.6v-.1c.1-.2.1-.3.2-.5.1-.1.3-.3.8-.7.6-.5 1-.9 1.2-1.3.2-.4.3-.8.3-1.2
					0-.8-.3-1.4-.9-1.9-.6-.6-1.4-.8-2.4-.8zM7.3 11.5h1.5V13H7.3z" />
		</svg>`,
		"carat_up_16": classList => `<svg
			class="${classList}"
			width="16"
			height="16"
			viewBox="0 0 16 16">
			<polygon points="15,12 1,12 8,5 "/>
		</svg>
		`,
		"grip_vertical_16": classList => `<svg
			class="${classList}"
			width="16"
			height="16"
			viewBox="0 0 16 16">
			<circle cx="6.5" cy="14.5" r="1.5"/>
			<circle cx="6.5" cy="10.5" r="1.5"/>
			<circle cx="6.5" cy="6.5" r="1.5"/>
			<circle cx="10.5" cy="14.5" r="1.5"/>
			<circle cx="10.5" cy="10.5" r="1.5"/>
			<circle cx="10.5" cy="6.5" r="1.5"/>
			<circle cx="6.5" cy="2.5" r="1.5"/>
			<circle cx="10.5" cy="2.5" r="1.5"/>
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
		el.style.display = el.style.display || "flex";
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
