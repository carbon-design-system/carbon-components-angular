import { I18n } from "./../i18n/i18n.module";
export declare class Loading {
    protected i18n: I18n;
    /**
     * Accessible title for the loading circle.
     * Defaults to the `LOADING.TITLE` value from the i18n service.
     */
    title: any;
    /**
     * Specify the size of the button
     * @type {("normal" | "sm")}
     * @memberof Loading
     */
    size: "normal" | "sm";
    /**
     * Set to `true` to make loader with an overlay.
     * @type {boolean}
     * @memberof Loading
     */
    overlay: boolean;
    constructor(i18n: I18n);
}
