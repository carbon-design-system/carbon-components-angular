/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const AlertModalType = {
    default: "default",
    danger: "danger",
};
export { AlertModalType };
/**
 * @record
 */
export function AlertModalData() { }
function AlertModalData_tsickle_Closure_declarations() {
    /**
     * Use of `modalType` is deprecated, use `type` instead
     * @type {?|undefined}
     */
    AlertModalData.prototype.modalType;
    /**
     * type of the modal
     * @type {?|undefined}
     */
    AlertModalData.prototype.type;
    /**
     * Use of `modalLabel` is deprecated, use `label` instead
     * @type {?|undefined}
     */
    AlertModalData.prototype.modalLabel;
    /**
     * Additional label shown over the modal
     * @type {?|undefined}
     */
    AlertModalData.prototype.label;
    /**
     * Use of `modalTitle` is deprecated, use `title` instead
     * @type {?|undefined}
     */
    AlertModalData.prototype.modalTitle;
    /**
     * Primary title for the modal
     * @type {?|undefined}
     */
    AlertModalData.prototype.title;
    /**
     * Use of `modalContent` is deprecated, use `content` instead
     * @type {?|undefined}
     */
    AlertModalData.prototype.modalContent;
    /**
     * Content for the modal body, could include HTML tags
     * @type {?|undefined}
     */
    AlertModalData.prototype.content;
    /**
     * Array of `ModalButton`s
     * @type {?|undefined}
     */
    AlertModalData.prototype.buttons;
    /**
     * Callback for non-specific close events. `return false;` to prevent the modal from closing
     * @type {?|undefined}
     */
    AlertModalData.prototype.close;
}
/** @enum {string} */
const ModalButtonType = {
    primary: "primary",
    secondary: "secondary",
    tertiary: "tertiary",
    ghost: "ghost",
    danger: "danger",
    danger_primary: "danger--primary",
};
export { ModalButtonType };
/**
 * @record
 */
export function ModalButton() { }
function ModalButton_tsickle_Closure_declarations() {
    /**
     * Display value of the button
     * @type {?}
     */
    ModalButton.prototype.text;
    /**
     * Optional unique ID for the button
     * @type {?|undefined}
     */
    ModalButton.prototype.id;
    /**
     * Button type
     * @type {?|undefined}
     */
    ModalButton.prototype.type;
    /**
     * Callback for the button `click` event
     * @type {?|undefined}
     */
    ModalButton.prototype.click;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtbW9kYWwuaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FyYm9uLWNvbXBvbmVudHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbIm1vZGFsL2FsZXJ0LW1vZGFsLmludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFDQyxTQUFVLFNBQVM7SUFDbkIsUUFBUyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBK0NqQixTQUFVLFNBQVM7SUFDbkIsV0FBWSxXQUFXO0lBQ3ZCLFVBQVcsVUFBVTtJQUNyQixPQUFRLE9BQU87SUFDZixRQUFTLFFBQVE7SUFDakIsZ0JBQWlCLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIEFsZXJ0TW9kYWxUeXBlIHtcblx0ZGVmYXVsdCA9IFwiZGVmYXVsdFwiLFxuXHRkYW5nZXIgPSBcImRhbmdlclwiXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxlcnRNb2RhbERhdGEge1xuXHQvKipcblx0ICogVXNlIG9mIGBtb2RhbFR5cGVgIGlzIGRlcHJlY2F0ZWQsIHVzZSBgdHlwZWAgaW5zdGVhZFxuXHQgKi9cblx0bW9kYWxUeXBlPzogc3RyaW5nO1xuXHQvKipcblx0ICogdHlwZSBvZiB0aGUgbW9kYWxcblx0ICovXG5cdHR5cGU/OiBBbGVydE1vZGFsVHlwZTtcblx0LyoqXG5cdCAqIFVzZSBvZiBgbW9kYWxMYWJlbGAgaXMgZGVwcmVjYXRlZCwgdXNlIGBsYWJlbGAgaW5zdGVhZFxuXHQgKi9cblx0bW9kYWxMYWJlbD86IHN0cmluZztcblx0LyoqXG5cdCAqIEFkZGl0aW9uYWwgbGFiZWwgc2hvd24gb3ZlciB0aGUgbW9kYWxcblx0ICovXG5cdGxhYmVsPzogc3RyaW5nO1xuXHQvKipcblx0ICogVXNlIG9mIGBtb2RhbFRpdGxlYCBpcyBkZXByZWNhdGVkLCB1c2UgYHRpdGxlYCBpbnN0ZWFkXG5cdCAqL1xuXHRtb2RhbFRpdGxlPzogc3RyaW5nO1xuXHQvKipcblx0ICogUHJpbWFyeSB0aXRsZSBmb3IgdGhlIG1vZGFsXG5cdCAqL1xuXHR0aXRsZT86IHN0cmluZztcblx0LyoqXG5cdCAqIFVzZSBvZiBgbW9kYWxDb250ZW50YCBpcyBkZXByZWNhdGVkLCB1c2UgYGNvbnRlbnRgIGluc3RlYWRcblx0ICovXG5cdG1vZGFsQ29udGVudD86IHN0cmluZztcblx0LyoqXG5cdCAqIENvbnRlbnQgZm9yIHRoZSBtb2RhbCBib2R5LCBjb3VsZCBpbmNsdWRlIEhUTUwgdGFnc1xuXHQgKi9cblx0Y29udGVudD86IHN0cmluZztcblx0LyoqXG5cdCAqIEFycmF5IG9mIGBNb2RhbEJ1dHRvbmBzXG5cdCAqL1xuXHRidXR0b25zPzogQXJyYXk8TW9kYWxCdXR0b24+O1xuXHQvKipcblx0ICogQ2FsbGJhY2sgZm9yIG5vbi1zcGVjaWZpYyBjbG9zZSBldmVudHMuIGByZXR1cm4gZmFsc2U7YCB0byBwcmV2ZW50IHRoZSBtb2RhbCBmcm9tIGNsb3Npbmdcblx0ICovXG5cdGNsb3NlPzogRnVuY3Rpb247XG59XG5cbmV4cG9ydCBlbnVtIE1vZGFsQnV0dG9uVHlwZSB7XG5cdHByaW1hcnkgPSBcInByaW1hcnlcIixcblx0c2Vjb25kYXJ5ID0gXCJzZWNvbmRhcnlcIixcblx0dGVydGlhcnkgPSBcInRlcnRpYXJ5XCIsXG5cdGdob3N0ID0gXCJnaG9zdFwiLFxuXHRkYW5nZXIgPSBcImRhbmdlclwiLFxuXHRkYW5nZXJfcHJpbWFyeSA9IFwiZGFuZ2VyLS1wcmltYXJ5XCJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNb2RhbEJ1dHRvbiB7XG5cdC8qKlxuXHQgKiBEaXNwbGF5IHZhbHVlIG9mIHRoZSBidXR0b25cblx0ICovXG5cdHRleHQ6IHN0cmluZztcblx0LyoqXG5cdCAqIE9wdGlvbmFsIHVuaXF1ZSBJRCBmb3IgdGhlIGJ1dHRvblxuXHQgKi9cblx0aWQ/OiBzdHJpbmc7XG5cdC8qKlxuXHQgKiBCdXR0b24gdHlwZVxuXHQgKi9cblx0dHlwZT86IE1vZGFsQnV0dG9uVHlwZTtcblx0LyoqXG5cdCAqIENhbGxiYWNrIGZvciB0aGUgYnV0dG9uIGBjbGlja2AgZXZlbnRcblx0ICovXG5cdGNsaWNrPzogRnVuY3Rpb247XG59XG4iXX0=