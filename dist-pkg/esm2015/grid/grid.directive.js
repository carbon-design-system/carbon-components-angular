/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, HostBinding, Input } from "@angular/core";
/**
 * [See demo](../../?path=/story/grid--basic)
 *
 * <example-url>../../iframe.html?id=grid--basic</example-url>
 */
export class GridDirective {
    constructor() {
        this.baseClass = true;
    }
}
GridDirective.decorators = [
    { type: Directive, args: [{
                selector: "[ibmGrid]"
            },] }
];
GridDirective.propDecorators = {
    baseClass: [{ type: HostBinding, args: ["class.bx--grid",] }]
};
function GridDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    GridDirective.prototype.baseClass;
}
export class RowDirective {
    constructor() {
        this.baseClass = true;
    }
}
RowDirective.decorators = [
    { type: Directive, args: [{
                selector: "[ibmRow]"
            },] }
];
RowDirective.propDecorators = {
    baseClass: [{ type: HostBinding, args: ["class.bx--row",] }]
};
function RowDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    RowDirective.prototype.baseClass;
}
export class ColumnDirective {
    constructor() {
        this.class = "";
        this.columnNumbers = {};
        this.offsets = {};
        this._columnClasses = [];
    }
    /**
     * @return {?}
     */
    get columnClasses() {
        return this._columnClasses.join(" ");
    }
    /**
     * @param {?} classes
     * @return {?}
     */
    set(classes) {
        this._columnClasses = classes.split(" ");
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        try {
            /** @type {?} */
            const columnKeys = Object.keys(this.columnNumbers);
            if (columnKeys.length <= 0) {
                this._columnClasses.push("bx--col");
            }
            columnKeys.forEach(key => {
                if (this.columnNumbers[key] === "nobreak") {
                    this._columnClasses.push(`bx--col-${key}`);
                }
                else {
                    this._columnClasses.push(`bx--col-${key}-${this.columnNumbers[key]}`);
                }
            });
            Object.keys(this.offsets).forEach(key => {
                this._columnClasses.push(`bx--offset-${key}-${this.offsets[key]}`);
            });
        }
        catch (err) {
            console.error(`Malformed \`offsets\` or \`columnNumbers\`: ${err}`);
        }
        if (this.class) {
            this._columnClasses.push(this.class);
        }
    }
}
ColumnDirective.decorators = [
    { type: Directive, args: [{
                selector: "[ibmCol]"
            },] }
];
ColumnDirective.propDecorators = {
    class: [{ type: Input }],
    columnNumbers: [{ type: Input }],
    offsets: [{ type: Input }],
    columnClasses: [{ type: HostBinding, args: ["class",] }]
};
function ColumnDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    ColumnDirective.prototype.class;
    /** @type {?} */
    ColumnDirective.prototype.columnNumbers;
    /** @type {?} */
    ColumnDirective.prototype.offsets;
    /** @type {?} */
    ColumnDirective.prototype._columnClasses;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJib24tY29tcG9uZW50cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsiZ3JpZC9ncmlkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFVdEUsTUFBTTs7eUJBQ3NDLElBQUk7Ozs7WUFKL0MsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxXQUFXO2FBQ3JCOzs7d0JBRUMsV0FBVyxTQUFDLGdCQUFnQjs7Ozs7O0FBTTlCLE1BQU07O3lCQUNxQyxJQUFJOzs7O1lBSjlDLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsVUFBVTthQUNwQjs7O3dCQUVDLFdBQVcsU0FBQyxlQUFlOzs7Ozs7QUFNN0IsTUFBTTs7cUJBQ1ksRUFBRTs2QkFFTSxFQUFFO3VCQUVSLEVBQUU7OEJBRWdCLEVBQUU7Ozs7O0lBRXZDLElBQ0ksYUFBYTtRQUNoQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3JDOzs7OztJQUVELEdBQUcsQ0FBQyxPQUFlO1FBQ2xCLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUN6Qzs7OztJQUVELFFBQVE7UUFDUCxJQUFJOztZQUNILE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ25ELElBQUksVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3BDO1lBRUQsVUFBVSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDeEIsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsRUFBRTtvQkFDMUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2lCQUMzQztxQkFBTTtvQkFDTixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDdEU7YUFDRCxDQUFDLENBQUM7WUFFSCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ25FLENBQUMsQ0FBQztTQUNIO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDYixPQUFPLENBQUMsS0FBSyxDQUFDLCtDQUErQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQ3BFO1FBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3JDO0tBQ0Q7OztZQTlDRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLFVBQVU7YUFDcEI7OztvQkFFQyxLQUFLOzRCQUVMLEtBQUs7c0JBRUwsS0FBSzs0QkFJTCxXQUFXLFNBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG4vKipcbiAqIFtTZWUgZGVtb10oLi4vLi4vP3BhdGg9L3N0b3J5L2dyaWQtLWJhc2ljKVxuICpcbiAqIDxleGFtcGxlLXVybD4uLi8uLi9pZnJhbWUuaHRtbD9pZD1ncmlkLS1iYXNpYzwvZXhhbXBsZS11cmw+XG4gKi9cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogXCJbaWJtR3JpZF1cIlxufSlcbmV4cG9ydCBjbGFzcyBHcmlkRGlyZWN0aXZlIHtcblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MuYngtLWdyaWRcIikgYmFzZUNsYXNzID0gdHJ1ZTtcbn1cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiBcIltpYm1Sb3ddXCJcbn0pXG5leHBvcnQgY2xhc3MgUm93RGlyZWN0aXZlIHtcblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MuYngtLXJvd1wiKSBiYXNlQ2xhc3MgPSB0cnVlO1xufVxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6IFwiW2libUNvbF1cIlxufSlcbmV4cG9ydCBjbGFzcyBDb2x1bW5EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXHRASW5wdXQoKSBjbGFzcyA9IFwiXCI7XG5cblx0QElucHV0KCkgY29sdW1uTnVtYmVycyA9IHt9O1xuXG5cdEBJbnB1dCgpIG9mZnNldHMgPSB7fTtcblxuXHRwcm90ZWN0ZWQgX2NvbHVtbkNsYXNzZXM6IHN0cmluZ1tdID0gW107XG5cblx0QEhvc3RCaW5kaW5nKFwiY2xhc3NcIilcblx0Z2V0IGNvbHVtbkNsYXNzZXMoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5fY29sdW1uQ2xhc3Nlcy5qb2luKFwiIFwiKTtcblx0fVxuXG5cdHNldChjbGFzc2VzOiBzdHJpbmcpIHtcblx0XHR0aGlzLl9jb2x1bW5DbGFzc2VzID0gY2xhc3Nlcy5zcGxpdChcIiBcIik7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgY29sdW1uS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuY29sdW1uTnVtYmVycyk7XG5cdFx0XHRpZiAoY29sdW1uS2V5cy5sZW5ndGggPD0gMCkge1xuXHRcdFx0XHR0aGlzLl9jb2x1bW5DbGFzc2VzLnB1c2goXCJieC0tY29sXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb2x1bW5LZXlzLmZvckVhY2goa2V5ID0+IHtcblx0XHRcdFx0aWYgKHRoaXMuY29sdW1uTnVtYmVyc1trZXldID09PSBcIm5vYnJlYWtcIikge1xuXHRcdFx0XHRcdHRoaXMuX2NvbHVtbkNsYXNzZXMucHVzaChgYngtLWNvbC0ke2tleX1gKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLl9jb2x1bW5DbGFzc2VzLnB1c2goYGJ4LS1jb2wtJHtrZXl9LSR7dGhpcy5jb2x1bW5OdW1iZXJzW2tleV19YCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRPYmplY3Qua2V5cyh0aGlzLm9mZnNldHMpLmZvckVhY2goa2V5ID0+IHtcblx0XHRcdFx0dGhpcy5fY29sdW1uQ2xhc3Nlcy5wdXNoKGBieC0tb2Zmc2V0LSR7a2V5fS0ke3RoaXMub2Zmc2V0c1trZXldfWApO1xuXHRcdFx0fSk7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGBNYWxmb3JtZWQgXFxgb2Zmc2V0c1xcYCBvciBcXGBjb2x1bW5OdW1iZXJzXFxgOiAke2Vycn1gKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5jbGFzcykge1xuXHRcdFx0dGhpcy5fY29sdW1uQ2xhc3Nlcy5wdXNoKHRoaXMuY2xhc3MpO1xuXHRcdH1cblx0fVxufVxuIl19