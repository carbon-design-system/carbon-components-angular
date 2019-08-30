/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, HostBinding, ContentChildren, QueryList } from "@angular/core";
import { SelectionTile } from "./selection-tile.component";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
export class TileGroup {
    constructor() {
        /**
         * The tile group `name`
         */
        this.name = `tile-group-${TileGroup.tileGroupCount}`;
        /**
         * Set to `true` to support multiple tile selection
         */
        this.multiple = false;
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
        this.selected = new EventEmitter();
        this.tileGroupClass = true;
        this.unsubscribe$ = new Subject();
        this.unsubscribeTiles$ = new Subject();
        this.onChange = (_) => { };
        this.onTouched = () => { };
        TileGroup.tileGroupCount++;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        /** @type {?} */
        const updateTiles = () => {
            // remove old subscriptions
            this.unsubscribeTiles$.next();
            // react to changes
            this.selectionTiles.forEach(tile => {
                tile.name = this.name;
                tile.change
                    .pipe(takeUntil(this.unsubscribeTiles$))
                    .subscribe(() => {
                    this.selected.emit({
                        value: tile.value,
                        selected: tile.selected,
                        name: this.name
                    });
                    this.onChange(tile.value);
                });
                tile.multiple = this.multiple;
            });
        };
        updateTiles();
        this.selectionTiles.changes
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(_ => updateTiles());
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
        // takes care of tile subscriptions when tile-group dies
        this.unsubscribeTiles$.next();
        this.unsubscribeTiles$.complete();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (!this.selectionTiles) {
            return;
        }
        this.selectionTiles.forEach(tile => {
            if (tile.value === value) {
                tile.selected = true;
            }
            else {
                tile.selected = false;
            }
        });
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
TileGroup.tileGroupCount = 0;
TileGroup.decorators = [
    { type: Component, args: [{
                selector: "ibm-tile-group",
                template: `<ng-content select="ibm-selection-tile"></ng-content>`,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: TileGroup,
                        multi: true
                    }
                ]
            }] }
];
/** @nocollapse */
TileGroup.ctorParameters = () => [];
TileGroup.propDecorators = {
    name: [{ type: Input }],
    multiple: [{ type: Input }],
    selected: [{ type: Output }],
    tileGroupClass: [{ type: HostBinding, args: ["class.bx--tile-group",] }],
    selectionTiles: [{ type: ContentChildren, args: [SelectionTile,] }]
};
function TileGroup_tsickle_Closure_declarations() {
    /** @type {?} */
    TileGroup.tileGroupCount;
    /**
     * The tile group `name`
     * @type {?}
     */
    TileGroup.prototype.name;
    /**
     * Set to `true` to support multiple tile selection
     * @type {?}
     */
    TileGroup.prototype.multiple;
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
     * @type {?}
     */
    TileGroup.prototype.selected;
    /** @type {?} */
    TileGroup.prototype.tileGroupClass;
    /** @type {?} */
    TileGroup.prototype.selectionTiles;
    /** @type {?} */
    TileGroup.prototype.unsubscribe$;
    /** @type {?} */
    TileGroup.prototype.unsubscribeTiles$;
    /** @type {?} */
    TileGroup.prototype.onChange;
    /** @type {?} */
    TileGroup.prototype.onTouched;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZS1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJib24tY29tcG9uZW50cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsidGlsZXMvdGlsZS1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBRVQsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osV0FBVyxFQUNYLGVBQWUsRUFDZixTQUFTLEVBRVQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBYTNDLE1BQU07SUFnQ0w7Ozs7b0JBM0JnQixjQUFjLFNBQVMsQ0FBQyxjQUFjLEVBQUU7Ozs7d0JBSXBDLEtBQUs7Ozs7Ozs7Ozs7Ozs7d0JBY3lCLElBQUksWUFBWSxFQUFFOzhCQUVkLElBQUk7NEJBSWpDLElBQUksT0FBTyxFQUFRO2lDQUNkLElBQUksT0FBTyxFQUFRO3dCQU10QyxDQUFDLENBQU0sRUFBRSxFQUFFLElBQUk7eUJBRWQsR0FBRyxFQUFFLElBQUk7UUFMcEIsU0FBUyxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBQzNCOzs7O0lBTUQsa0JBQWtCOztRQUNqQixNQUFNLFdBQVcsR0FBRyxHQUFHLEVBQUU7O1lBRXhCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7WUFHOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDdEIsSUFBSSxDQUFDLE1BQU07cUJBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztxQkFDdkMsU0FBUyxDQUFDLEdBQUcsRUFBRTtvQkFDZixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzt3QkFDbEIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO3dCQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7d0JBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtxQkFDZixDQUFDLENBQUM7b0JBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQzFCLENBQUMsQ0FBQztnQkFDSixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDOUIsQ0FBQyxDQUFDO1NBQ0gsQ0FBQztRQUNGLFdBQVcsRUFBRSxDQUFDO1FBRWQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPO2FBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ2xDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7S0FDaEM7Ozs7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDOztRQUc3QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ2xDOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFVO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQUUsT0FBTztTQUFFO1FBQ3JDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xDLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2FBQ3JCO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2FBQ3RCO1NBQ0QsQ0FBQyxDQUFDO0tBQ0g7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsRUFBTztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztLQUNuQjs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0tBQ3BCOzsyQkE3RnVCLENBQUM7O1lBWnpCLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsdURBQXVEO2dCQUNqRSxTQUFTLEVBQUU7b0JBQ1Y7d0JBQ0MsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFNBQVM7d0JBQ3RCLEtBQUssRUFBRSxJQUFJO3FCQUNYO2lCQUNEO2FBQ0Q7Ozs7O21CQU1DLEtBQUs7dUJBSUwsS0FBSzt1QkFjTCxNQUFNOzZCQUVOLFdBQVcsU0FBQyxzQkFBc0I7NkJBRWxDLGVBQWUsU0FBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRBZnRlckNvbnRlbnRJbml0LFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRFdmVudEVtaXR0ZXIsXG5cdEhvc3RCaW5kaW5nLFxuXHRDb250ZW50Q2hpbGRyZW4sXG5cdFF1ZXJ5TGlzdCxcblx0T25EZXN0cm95XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTZWxlY3Rpb25UaWxlIH0gZnJvbSBcIi4vc2VsZWN0aW9uLXRpbGUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgVGlsZVNlbGVjdGlvbiB9IGZyb20gXCIuL3RpbGUtc2VsZWN0aW9uLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImlibS10aWxlLWdyb3VwXCIsXG5cdHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQgc2VsZWN0PVwiaWJtLXNlbGVjdGlvbi10aWxlXCI+PC9uZy1jb250ZW50PmAsXG5cdHByb3ZpZGVyczogW1xuXHRcdHtcblx0XHRcdHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuXHRcdFx0dXNlRXhpc3Rpbmc6IFRpbGVHcm91cCxcblx0XHRcdG11bHRpOiB0cnVlXG5cdFx0fVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFRpbGVHcm91cCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG5cdHN0YXRpYyB0aWxlR3JvdXBDb3VudCA9IDA7XG5cdC8qKlxuXHQgKiBUaGUgdGlsZSBncm91cCBgbmFtZWBcblx0ICovXG5cdEBJbnB1dCgpIG5hbWUgPSBgdGlsZS1ncm91cC0ke1RpbGVHcm91cC50aWxlR3JvdXBDb3VudH1gO1xuXHQvKipcblx0ICogU2V0IHRvIGB0cnVlYCB0byBzdXBwb3J0IG11bHRpcGxlIHRpbGUgc2VsZWN0aW9uXG5cdCAqL1xuXHRASW5wdXQoKSBtdWx0aXBsZSA9IGZhbHNlO1xuXG5cdC8qKlxuXHQgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSB0aWxlIHNlbGVjdGlvbiBjaGFuZ2VzLlxuXHQgKlxuXHQgKiBFbWl0cyBhbiBvYmplY3QgdGhhdCBsb29rcyBsaWtlOlxuXHQgKiBgYGBqYXZhc2NyaXB0XG5cdCAqIHtcblx0ICogXHR2YWx1ZTogXCJzb21ldGhpbmdcIixcblx0ICogXHRzZWxlY3RlZDogdHJ1ZSxcblx0ICogXHRuYW1lOiBcInRpbGUtZ3JvdXAtMVwiXG5cdCAqIH1cblx0ICogYGBgXG5cdCAqL1xuXHRAT3V0cHV0KCkgc2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxUaWxlU2VsZWN0aW9uPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRASG9zdEJpbmRpbmcoXCJjbGFzcy5ieC0tdGlsZS1ncm91cFwiKSB0aWxlR3JvdXBDbGFzcyA9IHRydWU7XG5cblx0QENvbnRlbnRDaGlsZHJlbihTZWxlY3Rpb25UaWxlKSBzZWxlY3Rpb25UaWxlczogUXVlcnlMaXN0PFNlbGVjdGlvblRpbGU+O1xuXG5cdHByb3RlY3RlZCB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXHRwcm90ZWN0ZWQgdW5zdWJzY3JpYmVUaWxlcyQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdFRpbGVHcm91cC50aWxlR3JvdXBDb3VudCsrO1xuXHR9XG5cblx0b25DaGFuZ2UgPSAoXzogYW55KSA9PiB7IH07XG5cblx0b25Ub3VjaGVkID0gKCkgPT4geyB9O1xuXG5cdG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcblx0XHRjb25zdCB1cGRhdGVUaWxlcyA9ICgpID0+IHtcblx0XHRcdC8vIHJlbW92ZSBvbGQgc3Vic2NyaXB0aW9uc1xuXHRcdFx0dGhpcy51bnN1YnNjcmliZVRpbGVzJC5uZXh0KCk7XG5cblx0XHRcdC8vIHJlYWN0IHRvIGNoYW5nZXNcblx0XHRcdHRoaXMuc2VsZWN0aW9uVGlsZXMuZm9yRWFjaCh0aWxlID0+IHtcblx0XHRcdFx0dGlsZS5uYW1lID0gdGhpcy5uYW1lO1xuXHRcdFx0XHR0aWxlLmNoYW5nZVxuXHRcdFx0XHRcdC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlVGlsZXMkKSlcblx0XHRcdFx0XHQuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWQuZW1pdCh7XG5cdFx0XHRcdFx0XHRcdHZhbHVlOiB0aWxlLnZhbHVlLFxuXHRcdFx0XHRcdFx0XHRzZWxlY3RlZDogdGlsZS5zZWxlY3RlZCxcblx0XHRcdFx0XHRcdFx0bmFtZTogdGhpcy5uYW1lXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdHRoaXMub25DaGFuZ2UodGlsZS52YWx1ZSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdHRpbGUubXVsdGlwbGUgPSB0aGlzLm11bHRpcGxlO1xuXHRcdFx0fSk7XG5cdFx0fTtcblx0XHR1cGRhdGVUaWxlcygpO1xuXG5cdFx0dGhpcy5zZWxlY3Rpb25UaWxlcy5jaGFuZ2VzXG5cdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxuXHRcdFx0LnN1YnNjcmliZShfID0+IHVwZGF0ZVRpbGVzKCkpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuXHRcdHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG5cblx0XHQvLyB0YWtlcyBjYXJlIG9mIHRpbGUgc3Vic2NyaXB0aW9ucyB3aGVuIHRpbGUtZ3JvdXAgZGllc1xuXHRcdHRoaXMudW5zdWJzY3JpYmVUaWxlcyQubmV4dCgpO1xuXHRcdHRoaXMudW5zdWJzY3JpYmVUaWxlcyQuY29tcGxldGUoKTtcblx0fVxuXG5cdHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuXHRcdGlmICghdGhpcy5zZWxlY3Rpb25UaWxlcykgeyByZXR1cm47IH1cblx0XHR0aGlzLnNlbGVjdGlvblRpbGVzLmZvckVhY2godGlsZSA9PiB7XG5cdFx0XHRpZiAodGlsZS52YWx1ZSA9PT0gdmFsdWUpIHtcblx0XHRcdFx0dGlsZS5zZWxlY3RlZCA9IHRydWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aWxlLnNlbGVjdGVkID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRyZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcblx0XHR0aGlzLm9uQ2hhbmdlID0gZm47XG5cdH1cblxuXHRyZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG5cdFx0dGhpcy5vblRvdWNoZWQgPSBmbjtcblx0fVxufVxuIl19