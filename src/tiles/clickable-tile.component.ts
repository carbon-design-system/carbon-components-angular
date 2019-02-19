import {
	Component,
	Input
} from "@angular/core";

/**
 * Build application's clickable tiles using this component.
 *
 * ## Basic usage
 *
 * ```html
 * <ibm-clickable-tile>
 * 		tile content
 * </ibm-clickable-tile>
 * ```
 *
 * @export
 * @class ClickableTile
 * @implements {OnInit}
 */
@Component({
	selector: "ibm-clickable-tile",
	template: `
	<a
		class="bx--tile bx--tile--clickable"
		[ngClass]="{
			'bx--tile--is-clicked': clicked
		}"
		tabindex="0"
		(click)="onClick($event)"
		(keydown)="onKeyDown($event)"
		[href]="href"
		[target]="target"
		[attr.aria-disabled]="disabled">
		<ng-content></ng-content>
	</a>`
})
export class ClickableTile {
	/**
	 * Sets the `href` attribute on the `ibm-clickable-tile` element.
	 * @type {string}
	 * @memberof ClickableTile
	 */
	@Input() href: string;

	/**
	 * Sets the `target` attribute on the `ibm-clickable-tile` element.
	 * @type {string}
	 * @memberof ClickableTile
	 */
	@Input() target: string;

	/**
	 * Set to `true` to disable the clickable tile.
	 * @type {boolean}
	 * @memberof ClickableTile
	 */
	@Input() disabled = false;

	clicked = false;

	onClick(event) {
		this.clicked = !this.clicked;
	}

	onKeyDown(event) {
		if (event.key === "Enter" || event.key === " ") {
			this.clicked = !this.clicked;
		}
	}
}
