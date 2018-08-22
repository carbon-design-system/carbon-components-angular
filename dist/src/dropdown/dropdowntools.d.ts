import { Observable } from "rxjs";
/**
 * returns an observable bound to keydown events that
 * filters to a single element where the first letter of
 * it's textContent matches the key pressed
 *
 * @param {HTMLElement} target element to watch
 * @param {Array<HTMLElement>} elements elements to search
 */
export declare function watchFocusJump(target: HTMLElement, elements: any): Observable<HTMLElement>;
/** bundle of functions to aid in manipulating tree structures */
export declare const treetools: {
    /** finds an item in a set of items and returns the item and path to the item as an array */
    find: (items: any, itemToFind: any, path?: any[]) => {
        found: any;
        path: any[];
    };
};
