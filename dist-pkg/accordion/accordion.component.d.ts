import { QueryList, AfterContentInit } from "@angular/core";
import { AccordionItem } from "./accordion-item.component";
/**
 * [See demo](../../?path=/story/accordion--basic)
 *
 * <example-url>../../iframe.html?id=accordion--basic</example-url>
 */
export declare class Accordion implements AfterContentInit {
    children: QueryList<AccordionItem>;
    protected _skeleton: boolean;
    skeleton: any;
    ngAfterContentInit(): void;
    protected updateChildren(): void;
}
