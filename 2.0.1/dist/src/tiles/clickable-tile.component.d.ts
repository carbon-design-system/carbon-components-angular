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
export declare class ClickableTile {
    /**
     * Sets the `href` attribute on the `ibm-clickable-tile` element.
     * @type {string}
     * @memberof ClickableTile
     */
    href: string;
    /**
     * Set to `true` to disable the clickable tile.
     * @type {boolean}
     * @memberof ClickableTile
     */
    disabled: boolean;
    clicked: boolean;
    onClick(event: any): void;
    onKeyDown(event: any): void;
}
