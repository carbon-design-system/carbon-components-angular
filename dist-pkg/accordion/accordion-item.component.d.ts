import { EventEmitter } from "@angular/core";
export declare class AccordionItem {
    static accordionItemCount: number;
    title: string;
    id: string;
    skeleton: boolean;
    selected: EventEmitter<{}>;
    itemClass: boolean;
    expanded: boolean;
    itemType: string;
    role: string;
    ariaLevel: number;
    constructor();
    toggleExpanded(): void;
}
