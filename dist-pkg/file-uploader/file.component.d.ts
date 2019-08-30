import { EventEmitter } from "@angular/core";
import { I18n } from "../i18n/i18n.module";
import { FileItem } from "./file-item.interface";
export declare class File {
    protected i18n: I18n;
    /**
     * Accessible translations for the close and complete icons
     */
    translations: any;
    /**
     * A single `FileItem` from the set of `FileItem`s
     */
    fileItem: FileItem;
    remove: EventEmitter<{}>;
    selectedFile: boolean;
    constructor(i18n: I18n);
}
