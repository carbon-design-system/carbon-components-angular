import { AfterContentInit, EventEmitter, QueryList, OnDestroy } from "@angular/core";
import { SelectionTile } from "./selection-tile.component";
import { TileSelection } from "./tile-selection.interface";
import { Subject } from "rxjs";
export declare class TileGroup implements AfterContentInit, OnDestroy {
    static tileGroupCount: number;
    /**
     * The tile group `name`
     */
    name: string;
    /**
     * Set to `true` to support multiple tile selection
     */
    multiple: boolean;
    /**
     * Emits an event when the tile selection changes.
     *
     * Emits an object that looks like:
     * ```javascript
     * {
     * 	value: "something",
     * 	selected: true,
     * 	name: "tile-group-1"
     * }
     * ```
     */
    selected: EventEmitter<TileSelection>;
    tileGroupClass: boolean;
    selectionTiles: QueryList<SelectionTile>;
    protected unsubscribe$: Subject<void>;
    protected unsubscribeTiles$: Subject<void>;
    constructor();
    onChange: (_: any) => void;
    onTouched: () => void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
