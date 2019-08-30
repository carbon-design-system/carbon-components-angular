/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Data structure for definig properties of a `Dialog` component.
 *
 * @record
 */
export function DialogConfig() { }
function DialogConfig_tsickle_Closure_declarations() {
    /**
     * Title for the `Dialog` header.
     * @type {?|undefined}
     */
    DialogConfig.prototype.title;
    /**
     * Body content for the `Dialog`.
     * @type {?}
     */
    DialogConfig.prototype.content;
    /**
     * Parameter for triggering `Dialog` display.
     * @type {?|undefined}
     */
    DialogConfig.prototype.trigger;
    /**
     * Parameter for triggering the `Dialog` close event.
     * @type {?}
     */
    DialogConfig.prototype.closeTrigger;
    /**
     * Parameter defining the placement in which the `Dialog` appears.
     * @type {?|undefined}
     */
    DialogConfig.prototype.placement;
    /**
     * Used to set the offset of the `Dialog` relative to the content it
     * is associated to.
     * @type {?|undefined}
     */
    DialogConfig.prototype.gap;
    /**
     * Reference to the Parent element that links the `Dialog`.
     * @type {?|undefined}
     */
    DialogConfig.prototype.parentRef;
    /**
     * Set to `true` to open the dialog next to the triggering component
     * @type {?|undefined}
     */
    DialogConfig.prototype.appendInline;
    /**
     * Config object passed to the rendered component. (Optional)
     * @type {?|undefined}
     */
    DialogConfig.prototype.data;
    /* TODO: handle strange member:
    [propName: string]: any;
    */
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbmZpZy5pbnRlcmZhY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJib24tY29tcG9uZW50cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGlhbG9nL2RpYWxvZy1jb25maWcuaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBUZW1wbGF0ZVJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbi8qKlxuICogRGF0YSBzdHJ1Y3R1cmUgZm9yIGRlZmluaWcgcHJvcGVydGllcyBvZiBhIGBEaWFsb2dgIGNvbXBvbmVudC5cbiAqKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nQ29uZmlnIHtcblx0LyoqXG5cdCAqIFRpdGxlIGZvciB0aGUgYERpYWxvZ2AgaGVhZGVyLlxuXHQgKi9cblx0dGl0bGU/OiBzdHJpbmc7XG5cdC8qKlxuXHQgKiBCb2R5IGNvbnRlbnQgZm9yIHRoZSBgRGlhbG9nYC5cblx0ICovXG5cdGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG5cdC8qKlxuXHQgKiBQYXJhbWV0ZXIgZm9yIHRyaWdnZXJpbmcgYERpYWxvZ2AgZGlzcGxheS5cblx0ICovXG5cdHRyaWdnZXI/OiBcImNsaWNrXCIgfCBcImhvdmVyXCIgfCBcIm1vdXNlZW50ZXJcIjtcblx0LyoqXG5cdCAqIFBhcmFtZXRlciBmb3IgdHJpZ2dlcmluZyB0aGUgYERpYWxvZ2AgY2xvc2UgZXZlbnQuXG5cdCAqL1xuXHRjbG9zZVRyaWdnZXI6IFwibW91c2VvdXRcIiB8IFwibW91c2VsZWF2ZVwiO1xuXHQvKipcblx0ICogUGFyYW1ldGVyIGRlZmluaW5nIHRoZSBwbGFjZW1lbnQgaW4gd2hpY2ggdGhlIGBEaWFsb2dgIGFwcGVhcnMuXG5cdCAqL1xuXHRwbGFjZW1lbnQ/OiBzdHJpbmc7XG5cdC8qKlxuXHQgKiBVc2VkIHRvIHNldCB0aGUgb2Zmc2V0IG9mIHRoZSBgRGlhbG9nYCByZWxhdGl2ZSB0byB0aGUgY29udGVudCBpdFxuXHQgKiBpcyBhc3NvY2lhdGVkIHRvLlxuXHQgKi9cblx0Z2FwPzogbnVtYmVyO1xuXHQvKipcblx0ICogUmVmZXJlbmNlIHRvIHRoZSBQYXJlbnQgZWxlbWVudCB0aGF0IGxpbmtzIHRoZSBgRGlhbG9nYC5cblx0ICovXG5cdHBhcmVudFJlZj86IEVsZW1lbnRSZWY7XG5cdC8qKlxuXHQgKiBTZXQgdG8gYHRydWVgIHRvIG9wZW4gdGhlIGRpYWxvZyBuZXh0IHRvIHRoZSB0cmlnZ2VyaW5nIGNvbXBvbmVudFxuXHQgKi9cblx0YXBwZW5kSW5saW5lPzogYm9vbGVhbjtcblx0LyoqXG5cdCAqIENvbmZpZyBvYmplY3QgcGFzc2VkIHRvIHRoZSByZW5kZXJlZCBjb21wb25lbnQuIChPcHRpb25hbClcblx0ICovXG5cdGRhdGE/OiBPYmplY3Q7XG5cdFtwcm9wTmFtZTogc3RyaW5nXTogYW55O1xufVxuIl19