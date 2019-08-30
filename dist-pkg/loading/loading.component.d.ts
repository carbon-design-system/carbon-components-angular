import { I18n } from "./../i18n/i18n.module";
/**
 * [See demo](../../?path=/story/loading--basic)
 *
 * <example-url>../../iframe.html?id=loading--basic</example-url>
 */
export declare class Loading {
    protected i18n: I18n;
    /**
     * Accessible title for the loading circle.
     * Defaults to the `LOADING.TITLE` value from the i18n service.
     */
    title: any;
    /**
     * set to `false` to stop the loading animation
     */
    isActive: boolean;
    /**
     * Specify the size of the button
     */
    size: "normal" | "sm";
    /**
     * Set to `true` to make loader with an overlay.
     */
    overlay: boolean;
    constructor(i18n: I18n);
}
