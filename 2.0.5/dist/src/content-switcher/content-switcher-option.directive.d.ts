import { EventEmitter } from "@angular/core";
export declare class ContentSwitcherOption {
    active: boolean;
    name: string;
    selected: EventEmitter<{}>;
    switcherClass: string;
    selectedClass: boolean;
    role: string;
    ariaSelected: boolean;
    protected _active: boolean;
    hostClick(): void;
}
