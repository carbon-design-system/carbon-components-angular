/**
 * A convinence directive for applying styling to a link.
 *
 * Example:
 *
 * ```hmtl
 * <a href="#" ibmLink>A link</a>
 * ```
 *
 * See the [vanilla carbon docs](http://www.carbondesignsystem.com/components/link/code) for more detail.
 */
export declare class Link {
    baseClass: boolean;
    /**
     * Automatically set to `-1` when link is disabled.
     * @memberof Link
     */
    tabindex: any;
    /**
     * Set to true to disable link.
     * @memberof Link
     */
    disabled: boolean;
    private _disabled;
}
