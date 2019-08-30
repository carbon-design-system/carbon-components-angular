/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, Input, ElementRef, HostListener, Output, EventEmitter } from "@angular/core";
import { Table } from "./table.component";
import { getFocusElementList, tabbableSelectorIgnoreTabIndex } from "../common/tab.service";
export class DataGridFocus {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.columnIndexChange = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set columnIndex(value) {
        /** @type {?} */
        const shouldEmit = value !== this._columnIndex;
        this._columnIndex = value;
        if (shouldEmit) {
            this.columnIndexChange.emit(value);
        }
    }
    /**
     * @return {?}
     */
    get columnIndex() {
        return this._columnIndex;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    focus(element) {
        /** @type {?} */
        const focusElementList = getFocusElementList(element, tabbableSelectorIgnoreTabIndex);
        if (element.firstElementChild && element.firstElementChild.classList.contains("bx--table-sort-v2")) {
            focusElementList[1].focus();
        }
        else if (focusElementList.length > 0) {
            focusElementList[0].focus();
        }
        else {
            element.focus();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyDown(event) {
        if (!this.ibmDataGridFocus) {
            return;
        }
        /** @type {?} */
        const element = this.elementRef.nativeElement;
        /** @type {?} */
        const rows = element.closest("table").rows;
        /** @type {?} */
        const closestTr = element.closest("tr");
        /** @type {?} */
        let rowIndex = Array.from(rows).indexOf(closestTr);
        /** @type {?} */
        const headerRow = rows[0].querySelectorAll("th");
        switch (event.key) {
            case "Right": // IE specific value
            case "ArrowRight":
                /** @type {?} */
                const firstBodyRow = rows[1].querySelectorAll("td");
                event.preventDefault();
                if (element.nextElementSibling && Array.from(headerRow).indexOf(element.nextElementSibling) < firstBodyRow.length) {
                    this.columnIndex++;
                    /** @type {?} */
                    const nextSibling = element.nextElementSibling;
                    Table.setTabIndex(element, -1);
                    Table.setTabIndex(nextSibling, 0);
                    this.focus(nextSibling);
                }
                break;
            case "Left": // IE specific value
            case "ArrowLeft":
                event.preventDefault();
                if (element.previousElementSibling) {
                    this.columnIndex--;
                    /** @type {?} */
                    const previousSibling = element.previousElementSibling;
                    Table.setTabIndex(element, -1);
                    Table.setTabIndex(previousSibling, 0);
                    this.focus(previousSibling);
                }
                break;
            case "Down": // IE specific value
            case "ArrowDown":
                event.preventDefault();
                if (rowIndex < rows.length - 1) {
                    rowIndex++;
                    /** @type {?} */
                    const row = rows[rowIndex].querySelectorAll("td");
                    Table.setTabIndex(element, -1);
                    if (rows[rowIndex].classList.contains("bx--expandable-row-v2") && !rows[rowIndex].classList.contains("bx--parent-row-v2")) {
                        Table.setTabIndex(row[0], 0);
                        this.focus(row[0]);
                    }
                    else {
                        if (this.columnIndex > row.length - 1) {
                            this.columnIndex = row.length - 1;
                        }
                        Table.setTabIndex(row[this.columnIndex], 0);
                        this.focus(row[this.columnIndex]);
                    }
                }
                break;
            case "Up": // IE specific value
            case "ArrowUp":
                event.preventDefault();
                if ((rowIndex === 1 && Array.from(headerRow).every(th => getFocusElementList(th, tabbableSelectorIgnoreTabIndex).length === 0)) ||
                    rowIndex === 0) {
                    return;
                }
                Table.setTabIndex(element, -1);
                rowIndex--;
                /** @type {?} */
                const row = rows[rowIndex].querySelectorAll("td, th");
                if (rows[rowIndex].classList.contains("bx--expandable-row-v2") && !rows[rowIndex].classList.contains("bx--parent-row-v2")) {
                    Table.setTabIndex(row[0], 0);
                    this.focus(row[0]);
                }
                else {
                    if (this.columnIndex > row.length - 1) {
                        this.columnIndex = row.length - 1;
                    }
                    Table.setTabIndex(row[this.columnIndex], 0);
                    this.focus(row[this.columnIndex]);
                }
                break;
            case "Home":
                event.preventDefault();
                this.columnIndex = 0;
                Table.setTabIndex(element, -1);
                if (event.ctrlKey) {
                    if (Array.from(headerRow).some(th => getFocusElementList(th, tabbableSelectorIgnoreTabIndex).length > 0)) {
                        Table.setTabIndex(headerRow[0], 0);
                        this.focus(headerRow[0]);
                    }
                    else {
                        /** @type {?} */
                        const firstBodyCell = rows[1].querySelectorAll("td")[0];
                        Table.setTabIndex(firstBodyCell, 0);
                        this.focus(firstBodyCell);
                    }
                }
                else {
                    /** @type {?} */
                    const firstRowCell = rows[rowIndex].querySelectorAll("th, td")[0];
                    Table.setTabIndex(firstRowCell, 0);
                    this.focus(firstRowCell);
                }
                break;
            case "End":
                event.preventDefault();
                /** @type {?} */
                const lastRow = rows[rows.length - 1].querySelectorAll("td");
                Table.setTabIndex(element, -1);
                if (event.ctrlKey) {
                    this.columnIndex = lastRow.length - 1;
                    Table.setTabIndex(lastRow[this.columnIndex], 0);
                    this.focus(lastRow[this.columnIndex]);
                }
                else {
                    /** @type {?} */
                    const currentRow = rows[rowIndex].querySelectorAll("th, td");
                    this.columnIndex = currentRow.length - 1;
                    Table.setTabIndex(currentRow[this.columnIndex], 0);
                    this.focus(currentRow[this.columnIndex]);
                }
                break;
        }
    }
    /**
     * @return {?}
     */
    onClick() {
        if (!this.ibmDataGridFocus) {
            return;
        }
        /** @type {?} */
        const focusElementList = getFocusElementList(this.elementRef.nativeElement.closest("table"), tabbableSelectorIgnoreTabIndex);
        focusElementList.forEach(element => Table.setTabIndex(element, -1));
        Table.setTabIndex(this.elementRef.nativeElement, 0);
        this.focus(this.elementRef.nativeElement);
    }
}
DataGridFocus.decorators = [
    { type: Directive, args: [{
                selector: "[ibmDataGridFocus]"
            },] }
];
/** @nocollapse */
DataGridFocus.ctorParameters = () => [
    { type: ElementRef }
];
DataGridFocus.propDecorators = {
    ibmDataGridFocus: [{ type: Input }],
    columnIndex: [{ type: Input }],
    columnIndexChange: [{ type: Output }],
    keyDown: [{ type: HostListener, args: ["keydown", ["$event"],] }],
    onClick: [{ type: HostListener, args: ["click",] }]
};
function DataGridFocus_tsickle_Closure_declarations() {
    /** @type {?} */
    DataGridFocus.prototype.ibmDataGridFocus;
    /** @type {?} */
    DataGridFocus.prototype.columnIndexChange;
    /** @type {?} */
    DataGridFocus.prototype._columnIndex;
    /** @type {?} */
    DataGridFocus.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLWZvY3VzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ0YWJsZS9kYXRhLWdyaWQtZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUNULEtBQUssRUFDTCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixZQUFZLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBSzVGLE1BQU07Ozs7SUFpQkwsWUFBc0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtpQ0FKUSxJQUFJLFlBQVksRUFBRTtLQUl0Qjs7Ozs7SUFmaEQsSUFBYSxXQUFXLENBQUMsS0FBYTs7UUFDckMsTUFBTSxVQUFVLEdBQUcsS0FBSyxLQUFLLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDL0MsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxVQUFVLEVBQUU7WUFDZixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DO0tBQ0Q7Ozs7SUFDRCxJQUFJLFdBQVc7UUFDZCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7S0FDekI7Ozs7O0lBUUQsS0FBSyxDQUFDLE9BQU87O1FBQ1osTUFBTSxnQkFBZ0IsR0FBRyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsOEJBQThCLENBQUMsQ0FBQztRQUN0RixJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsSUFBSSxPQUFPLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO1lBQ25HLGdCQUFnQixDQUFD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OzBCQUNMLEtBQUs7Z0NBV0wsTUFBTTtzQkFpQk4sWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQztzQkFpSGxDLFlBQVksU0FBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0RGlyZWN0aXZlLFxuXHRJbnB1dCxcblx0RWxlbWVudFJlZixcblx0SG9zdExpc3RlbmVyLFxuXHRPdXRwdXQsXG5cdEV2ZW50RW1pdHRlclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwiLi90YWJsZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IGdldEZvY3VzRWxlbWVudExpc3QsIHRhYmJhYmxlU2VsZWN0b3JJZ25vcmVUYWJJbmRleCB9IGZyb20gXCIuLi9jb21tb24vdGFiLnNlcnZpY2VcIjtcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiBcIltpYm1EYXRhR3JpZEZvY3VzXVwiXG59KVxuZXhwb3J0IGNsYXNzIERhdGFHcmlkRm9jdXMge1xuXHRASW5wdXQoKSBpYm1EYXRhR3JpZEZvY3VzOiBib29sZWFuO1xuXHRASW5wdXQoKSBzZXQgY29sdW1uSW5kZXgodmFsdWU6IG51bWJlcikge1xuXHRcdGNvbnN0IHNob3VsZEVtaXQgPSB2YWx1ZSAhPT0gdGhpcy5fY29sdW1uSW5kZXg7XG5cdFx0dGhpcy5fY29sdW1uSW5kZXggPSB2YWx1ZTtcblx0XHRpZiAoc2hvdWxkRW1pdCkge1xuXHRcdFx0dGhpcy5jb2x1bW5JbmRleENoYW5nZS5lbWl0KHZhbHVlKTtcblx0XHR9XG5cdH1cblx0Z2V0IGNvbHVtbkluZGV4KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuX2NvbHVtbkluZGV4O1xuXHR9XG5cblx0QE91dHB1dCgpIGNvbHVtbkluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwcm90ZWN0ZWQgX2NvbHVtbkluZGV4OiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IocHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG5cblx0Zm9jdXMoZWxlbWVudCkge1xuXHRcdGNvbnN0IGZvY3VzRWxlbWVudExpc3QgPSBnZXRGb2N1c0VsZW1lbnRMaXN0KGVsZW1lbnQsIHRhYmJhYmxlU2VsZWN0b3JJZ25vcmVUYWJJbmRleCk7XG5cdFx0aWYgKGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQgJiYgZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJieC0tdGFibGUtc29ydC12MlwiKSkge1xuXHRcdFx0Zm9jdXNFbGVtZW50TGlzdFsxXS5mb2N1cygpO1xuXHRcdH0gZWxzZSBpZiAoZm9jdXNFbGVtZW50TGlzdC5sZW5ndGggPiAwKSB7XG5cdFx0XHRmb2N1c0VsZW1lbnRMaXN0WzBdLmZvY3VzKCk7XG5cdFx0fSAgZWxzZSB7XG5cdFx0XHRlbGVtZW50LmZvY3VzKCk7XG5cdFx0fVxuXHR9XG5cblx0QEhvc3RMaXN0ZW5lcihcImtleWRvd25cIiwgW1wiJGV2ZW50XCJdKVxuXHRrZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG5cdFx0aWYgKCF0aGlzLmlibURhdGFHcmlkRm9jdXMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXHRcdGNvbnN0IHJvd3MgPSBlbGVtZW50LmNsb3Nlc3QoXCJ0YWJsZVwiKS5yb3dzO1xuXHRcdGNvbnN0IGNsb3Nlc3RUciA9IGVsZW1lbnQuY2xvc2VzdChcInRyXCIpO1xuXHRcdGxldCByb3dJbmRleCA9IEFycmF5LmZyb20ocm93cykuaW5kZXhPZihjbG9zZXN0VHIpO1xuXG5cdFx0Y29uc3QgaGVhZGVyUm93ID0gcm93c1swXS5xdWVyeVNlbGVjdG9yQWxsKFwidGhcIik7XG5cblx0XHRzd2l0Y2ggKGV2ZW50LmtleSkge1xuXHRcdFx0Y2FzZSBcIlJpZ2h0XCI6IC8vIElFIHNwZWNpZmljIHZhbHVlXG5cdFx0XHRjYXNlIFwiQXJyb3dSaWdodFwiOlxuXHRcdFx0XHRjb25zdCBmaXJzdEJvZHlSb3cgPSByb3dzWzFdLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZFwiKTtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0aWYgKGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nICYmIEFycmF5LmZyb20oaGVhZGVyUm93KS5pbmRleE9mKGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nKSA8IGZpcnN0Qm9keVJvdy5sZW5ndGgpIHtcblx0XHRcdFx0XHR0aGlzLmNvbHVtbkluZGV4Kys7XG5cdFx0XHRcdFx0Y29uc3QgbmV4dFNpYmxpbmcgPSBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcblx0XHRcdFx0XHRUYWJsZS5zZXRUYWJJbmRleChlbGVtZW50LCAtMSk7XG5cdFx0XHRcdFx0VGFibGUuc2V0VGFiSW5kZXgobmV4dFNpYmxpbmcsIDApO1xuXHRcdFx0XHRcdHRoaXMuZm9jdXMobmV4dFNpYmxpbmcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcIkxlZnRcIjogLy8gSUUgc3BlY2lmaWMgdmFsdWVcblx0XHRcdGNhc2UgXCJBcnJvd0xlZnRcIjpcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0aWYgKGVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZykge1xuXHRcdFx0XHRcdHRoaXMuY29sdW1uSW5kZXgtLTtcblx0XHRcdFx0XHRjb25zdCBwcmV2aW91c1NpYmxpbmcgPSBlbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG5cdFx0XHRcdFx0VGFibGUuc2V0VGFiSW5kZXgoZWxlbWVudCwgLTEpO1xuXHRcdFx0XHRcdFRhYmxlLnNldFRhYkluZGV4KHByZXZpb3VzU2libGluZywgMCk7XG5cdFx0XHRcdFx0dGhpcy5mb2N1cyhwcmV2aW91c1NpYmxpbmcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcIkRvd25cIjogLy8gSUUgc3BlY2lmaWMgdmFsdWVcblx0XHRcdGNhc2UgXCJBcnJvd0Rvd25cIjpcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0aWYgKHJvd0luZGV4IDwgcm93cy5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdFx0cm93SW5kZXgrKztcblx0XHRcdFx0XHRjb25zdCByb3cgPSByb3dzW3Jvd0luZGV4XS5xdWVyeVNlbGVjdG9yQWxsKFwidGRcIik7XG5cdFx0XHRcdFx0VGFibGUuc2V0VGFiSW5kZXgoZWxlbWVudCwgLTEpO1xuXHRcdFx0XHRcdGlmIChyb3dzW3Jvd0luZGV4XS5jbGFzc0xpc3QuY29udGFpbnMoXCJieC0tZXhwYW5kYWJsZS1yb3ctdjJcIikgJiYgIXJvd3Nbcm93SW5kZXhdLmNsYXNzTGlzdC5jb250YWlucyhcImJ4LS1wYXJlbnQtcm93LXYyXCIpKSB7XG5cdFx0XHRcdFx0XHRUYWJsZS5zZXRUYWJJbmRleChyb3dbMF0sIDApO1xuXHRcdFx0XHRcdFx0dGhpcy5mb2N1cyhyb3dbMF0pO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5jb2x1bW5JbmRleCA+IHJvdy5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuY29sdW1uSW5kZXggPSByb3cubGVuZ3RoIC0gMTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFRhYmxlLnNldFRhYkluZGV4KHJvd1t0aGlzLmNvbHVtbkluZGV4XSwgMCk7XG5cdFx0XHRcdFx0XHR0aGlzLmZvY3VzKHJvd1t0aGlzLmNvbHVtbkluZGV4XSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcIlVwXCI6IC8vIElFIHNwZWNpZmljIHZhbHVlXG5cdFx0XHRjYXNlIFwiQXJyb3dVcFwiOlxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRpZiAoKHJvd0luZGV4ID09PSAxICYmIEFycmF5LmZyb20oaGVhZGVyUm93KS5ldmVyeSh0aCA9PiBnZXRGb2N1c0VsZW1lbnRMaXN0KHRoLCB0YWJiYWJsZVNlbGVjdG9ySWdub3JlVGFiSW5kZXgpLmxlbmd0aCA9PT0gMCkpIHx8XG5cdFx0XHRcdFx0cm93SW5kZXggPT09IDApIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRUYWJsZS5zZXRUYWJJbmRleChlbGVtZW50LCAtMSk7XG5cdFx0XHRcdHJvd0luZGV4LS07XG5cdFx0XHRcdGNvbnN0IHJvdyA9IHJvd3Nbcm93SW5kZXhdLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZCwgdGhcIik7XG5cdFx0XHRcdGlmIChyb3dzW3Jvd0luZGV4XS5jbGFzc0xpc3QuY29udGFpbnMoXCJieC0tZXhwYW5kYWJsZS1yb3ctdjJcIikgJiYgIXJvd3Nbcm93SW5kZXhdLmNsYXNzTGlzdC5jb250YWlucyhcImJ4LS1wYXJlbnQtcm93LXYyXCIpKSB7XG5cdFx0XHRcdFx0VGFibGUuc2V0VGFiSW5kZXgocm93WzBdLCAwKTtcblx0XHRcdFx0XHR0aGlzLmZvY3VzKHJvd1swXSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuY29sdW1uSW5kZXggPiByb3cubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRcdFx0dGhpcy5jb2x1bW5JbmRleCA9IHJvdy5sZW5ndGggLSAxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRUYWJsZS5zZXRUYWJJbmRleChyb3dbdGhpcy5jb2x1bW5JbmRleF0sIDApO1xuXHRcdFx0XHRcdHRoaXMuZm9jdXMocm93W3RoaXMuY29sdW1uSW5kZXhdKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJIb21lXCI6XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdHRoaXMuY29sdW1uSW5kZXggPSAwO1xuXHRcdFx0XHRUYWJsZS5zZXRUYWJJbmRleChlbGVtZW50LCAtMSk7XG5cdFx0XHRcdGlmIChldmVudC5jdHJsS2V5KSB7XG5cdFx0XHRcdFx0aWYgKEFycmF5LmZyb20oaGVhZGVyUm93KS5zb21lKHRoID0+IGdldEZvY3VzRWxlbWVudExpc3QodGgsIHRhYmJhYmxlU2VsZWN0b3JJZ25vcmVUYWJJbmRleCkubGVuZ3RoID4gMCkpIHtcblx0XHRcdFx0XHRcdFRhYmxlLnNldFRhYkluZGV4KGhlYWRlclJvd1swXSwgMCk7XG5cdFx0XHRcdFx0XHR0aGlzLmZvY3VzKGhlYWRlclJvd1swXSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNvbnN0IGZpcnN0Qm9keUNlbGwgPSByb3dzWzFdLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZFwiKVswXTtcblx0XHRcdFx0XHRcdFRhYmxlLnNldFRhYkluZGV4KGZpcnN0Qm9keUNlbGwsIDApO1xuXHRcdFx0XHRcdFx0dGhpcy5mb2N1cyhmaXJzdEJvZHlDZWxsKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29uc3QgZmlyc3RSb3dDZWxsID0gcm93c1tyb3dJbmRleF0ucXVlcnlTZWxlY3RvckFsbChcInRoLCB0ZFwiKVswXTtcblx0XHRcdFx0XHRUYWJsZS5zZXRUYWJJbmRleChmaXJzdFJvd0NlbGwsIDApO1xuXHRcdFx0XHRcdHRoaXMuZm9jdXMoZmlyc3RSb3dDZWxsKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJFbmRcIjpcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0Y29uc3QgbGFzdFJvdyA9IHJvd3Nbcm93cy5sZW5ndGggLSAxXS5xdWVyeVNlbGVjdG9yQWxsKFwidGRcIik7XG5cdFx0XHRcdFRhYmxlLnNldFRhYkluZGV4KGVsZW1lbnQsIC0xKTtcblx0XHRcdFx0aWYgKGV2ZW50LmN0cmxLZXkpIHtcblx0XHRcdFx0XHR0aGlzLmNvbHVtbkluZGV4ID0gbGFzdFJvdy5sZW5ndGggLSAxO1xuXHRcdFx0XHRcdFRhYmxlLnNldFRhYkluZGV4KGxhc3RSb3dbdGhpcy5jb2x1bW5JbmRleF0sIDApO1xuXHRcdFx0XHRcdHRoaXMuZm9jdXMobGFzdFJvd1t0aGlzLmNvbHVtbkluZGV4XSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29uc3QgY3VycmVudFJvdyA9IHJvd3Nbcm93SW5kZXhdLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0aCwgdGRcIik7XG5cdFx0XHRcdFx0dGhpcy5jb2x1bW5JbmRleCA9IGN1cnJlbnRSb3cubGVuZ3RoIC0gMTtcblx0XHRcdFx0XHRUYWJsZS5zZXRUYWJJbmRleChjdXJyZW50Um93W3RoaXMuY29sdW1uSW5kZXhdLCAwKTtcblx0XHRcdFx0XHR0aGlzLmZvY3VzKGN1cnJlbnRSb3dbdGhpcy5jb2x1bW5JbmRleF0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiKVxuXHRvbkNsaWNrKCkge1xuXHRcdGlmICghdGhpcy5pYm1EYXRhR3JpZEZvY3VzKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IGZvY3VzRWxlbWVudExpc3QgPSBnZXRGb2N1c0VsZW1lbnRMaXN0KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsb3Nlc3QoXCJ0YWJsZVwiKSwgdGFiYmFibGVTZWxlY3Rvcklnbm9yZVRhYkluZGV4KTtcblx0XHRmb2N1c0VsZW1lbnRMaXN0LmZvckVhY2goZWxlbWVudCA9PiBUYWJsZS5zZXRUYWJJbmRleChlbGVtZW50LCAtMSkpO1xuXHRcdFRhYmxlLnNldFRhYkluZGV4KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAwKTtcblx0XHR0aGlzLmZvY3VzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcblx0fVxufVxuIl19