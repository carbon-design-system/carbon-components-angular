import { ElementRef, OnInit, OnDestroy } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
export declare class Documentation implements OnInit, OnDestroy {
    protected elementRef: ElementRef;
    protected sanitizer: DomSanitizer;
    src: string;
    protected _src: any;
    constructor(elementRef: ElementRef, sanitizer: DomSanitizer);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onLoad(): void;
}
