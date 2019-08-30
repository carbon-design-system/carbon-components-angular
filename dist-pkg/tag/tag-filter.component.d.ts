import { EventEmitter } from "@angular/core";
import { Tag } from "./tag.component";
export declare class TagFilter extends Tag {
    /**
     * Function for close/delete the tag
     */
    close: EventEmitter<any>;
    readonly attrClass: string;
}
