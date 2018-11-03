import { EventEmitter, TemplateRef } from "@angular/core";
/**
 * `listTpl` binds `item` to the template context
 *
 * `items` expects an array of objects where the objects follow the format:
 * ```javascript
 * {
 * 	content: "string",
 * 	selected: false,
 * 	disabled: false //optional
 * }
 * ```
 *
 * @export
 * @class ListGroup
 */
export declare class ListGroup {
    /**
     * The list items belonging to the `ListGroup`.
     * @type {Array<Object>}
     * @memberof ListGroup
     */
    items: Array<Object>;
    /**
     * Template to bind to items in the `ListGroup` (optional).
     * @type {(string | TemplateRef<any>)}
     * @memberof ListGroup
     */
    listTpl: string | TemplateRef<any>;
    /**
     * Set to `true` for the `ListGroup` to have checkmark selection.
     * @type {boolean}
     * @memberof ListGroup
     */
    checkMark: Boolean;
    /**
     * Event to emit selection of a list item within the `ListGroup`.
     * @type {EventEmitter<Object>}
     * @memberof ListGroup
     */
    selected: EventEmitter<Object>;
    /**
     * Controls keyboard navigation and selection within the `ListGroup`.
     * @param {any} ev
     * @param {any} item
     * @memberof ListGroup
     */
    doKeyDown(ev: any, item: any): void;
    /**
     * Selects the `item` parameter from the `ListGroup` if it is not disabled and emits the selection event.
     * @param {any} ev
     * @param {any} item
     * @memberof ListGroup
     */
    doClick(ev: any, item: any): void;
}
