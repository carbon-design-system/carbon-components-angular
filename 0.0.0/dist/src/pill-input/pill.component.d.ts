import { EventEmitter } from "@angular/core";
/**
 * Internal component that represents a single pill/selected item
 * @export
 * @class Pill
 */
export declare class Pill {
    /** ListItem to render */
    item: any;
    /** emits an empty event when the close button is clicked */
    remove: EventEmitter<{}>;
    attrClass: string;
    /** close button handler */
    doRemove(ev: any): void;
}
