import { OnInit } from "@angular/core";
/**
 * [See demo](../../?path=/story/grid--basic)
 *
 * <example-url>../../iframe.html?id=grid--basic</example-url>
 */
export declare class GridDirective {
    baseClass: boolean;
}
export declare class RowDirective {
    baseClass: boolean;
}
export declare class ColumnDirective implements OnInit {
    class: string;
    columnNumbers: {};
    offsets: {};
    protected _columnClasses: string[];
    readonly columnClasses: string;
    set(classes: string): void;
    ngOnInit(): void;
}
