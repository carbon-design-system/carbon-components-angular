import { ElementRef, EventEmitter } from "@angular/core";
export declare class DataGridFocus {
    protected elementRef: ElementRef;
    ibmDataGridFocus: boolean;
    columnIndex: number;
    columnIndexChange: EventEmitter<number>;
    protected _columnIndex: number;
    constructor(elementRef: ElementRef);
    focus(element: any): void;
    keyDown(event: KeyboardEvent): void;
    onClick(): void;
}
