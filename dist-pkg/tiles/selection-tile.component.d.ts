import { EventEmitter } from "@angular/core";
import { I18n } from "./../i18n/i18n.module";
export declare class SelectionTile {
    i18n: I18n;
    static tileCount: number;
    /**
     * The unique id for the input.
     */
    id: string;
    /**
     * Updating the state of the input to match the state of the parameter passed in.
     * Set to `true` if this tile should be selected.
     */
    selected: boolean;
    /**
     * The value for the tile. Returned via `ngModel` or `selected` event on the containing `TileGroup`.
     */
    value: string;
    /**
     * Internal event used to notify the containing `TileGroup` of changes.
     */
    change: EventEmitter<Event>;
    /**
     * Set by the containing `TileGroup`. Used for the `name` property on the input.
     */
    name: string;
    /**
     * Defines whether or not the `SelectionTile` supports selecting multiple tiles as opposed to single
     * tile selection.
     */
    multiple: boolean;
    input: any;
    constructor(i18n: I18n);
    onChange(event: any): void;
}
