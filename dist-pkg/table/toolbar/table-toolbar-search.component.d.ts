import { Search } from "./../../search/search.component";
import { OnInit } from "@angular/core";
export declare class TableToolbarSearch extends Search implements OnInit {
    tableSearch: boolean;
    expandable: boolean;
    readonly persistentClass: boolean;
    readonly activeClass: boolean;
    ngOnInit(): void;
}
