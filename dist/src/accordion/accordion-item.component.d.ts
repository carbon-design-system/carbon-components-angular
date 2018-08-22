import { EventEmitter } from "@angular/core";
export declare class AccordionItem {
    static accodionItemCount: number;
    title: string;
    expanded: boolean;
    id: string;
    selected: EventEmitter<{}>;
    itemClass: string;
    itemType: string;
    constructor();
    toggleExpanded(): void;
}
