/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Search } from "./../../search/search.component";
import { Component, HostBinding, Input } from "@angular/core";
export class TableToolbarSearch extends Search {
    constructor() {
        super(...arguments);
        this.tableSearch = true;
        this.expandable = false;
    }
    /**
     * @return {?}
     */
    get persistentClass() { return !this.expandable; }
    /**
     * @return {?}
     */
    get activeClass() {
        return this.active && (this.value !== null || this.value !== "");
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.size = "sm";
        if (this.expandable) {
            this.toolbar = true;
        }
    }
}
TableToolbarSearch.decorators = [
    { type: Component, args: [{
                selector: "ibm-table-toolbar-search",
                template: "<div\n\tclass=\"bx--search\"\n\t[ngClass]=\"{\n\t\t'bx--search--sm': size === 'sm',\n\t\t'bx--search--xl': size === 'xl',\n\t\t'bx--search--light': theme === 'light',\n\t\t'bx--skeleton': skeleton,\n\t\t'bx--toolbar-search': toolbar,\n\t\t'bx--toolbar-search--active': toolbar && active\n\t}\"\n\trole=\"search\">\n\t<label class=\"bx--label\" [for]=\"id\">{{label}}</label>\n\n\t<div *ngIf=\"skeleton; else enableInput\" class=\"bx--search-input\"></div>\n\t<ng-template #enableInput>\n\t\t<input\n\t\t\t#input\n\t\t\t*ngIf=\"!toolbar || active || value !== ''\"\n\t\t\tclass=\"bx--search-input\"\n\t\t\t[type]=\"tableSearch || !toolbar ? 'text' : 'search'\"\n\t\t\trole=\"search\"\n\t\t\t[id]=\"id\"\n\t\t\t[value]=\"value\"\n\t\t\t[autocomplete]=\"autocomplete\"\n\t\t\t[placeholder]=\"placeholder\"\n\t\t\t[disabled]=\"disabled\"\n\t\t\t[required]=\"required\"\n\t\t\t(input)=\"onSearch($event.target.value)\"/>\n\t\t<button *ngIf=\"!tableSearch && toolbar\" class=\"bx--toolbar-search__btn\" (click)=\"openSearch()\">\n\t\t\t<ibm-icon-search16 class=\"bx--search-magnifier\"></ibm-icon-search16>\n\t\t</button>\n\t\t<ibm-icon-search16 *ngIf=\"tableSearch || !toolbar\" (click)=\"openSearch()\" class=\"bx--search-magnifier\"></ibm-icon-search16>\n\t</ng-template>\n\n\t<button\n\t\t*ngIf=\"tableSearch || !toolbar\"\n\t\tclass=\"bx--search-close\"\n\t\t[ngClass]=\"{\n\t\t\t'bx--search-close--hidden': !value || value.length === 0\n\t\t}\"\n\t\t[title]=\"clearButtonTitle\"\n\t\t[attr.aria-label]=\"clearButtonTitle\"\n\t\t(click)=\"clearSearch()\">\n\t\t<ibm-icon-close16></ibm-icon-close16>\n\t</button>\n</div>\n"
            }] }
];
TableToolbarSearch.propDecorators = {
    expandable: [{ type: HostBinding, args: ["class.bx--toolbar-search-container-expandable",] }, { type: Input }],
    persistentClass: [{ type: HostBinding, args: ["class.bx--toolbar-search-container-persistent",] }],
    activeClass: [{ type: HostBinding, args: ["class.bx--toolbar-search-container-active",] }]
};
function TableToolbarSearch_tsickle_Closure_declarations() {
    /** @type {?} */
    TableToolbarSearch.prototype.tableSearch;
    /** @type {?} */
    TableToolbarSearch.prototype.expandable;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtdG9vbGJhci1zZWFyY2guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FyYm9uLWNvbXBvbmVudHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbInRhYmxlL3Rvb2xiYXIvdGFibGUtdG9vbGJhci1zZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDekQsT0FBTyxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsS0FBSyxFQUVMLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE1BQU0seUJBQTBCLFNBQVEsTUFBTTs7OzJCQUMvQixJQUFJOzBCQUVrRSxLQUFLOzs7OztJQUV6RixJQUFrRSxlQUFlLEtBQUssT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTs7OztJQUVoSCxJQUE4RCxXQUFXO1FBQ3hFLE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssRUFBRSxDQUFDLENBQUM7S0FDakU7Ozs7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO0tBQ0Q7OztZQXBCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsZ21EQUFpRDthQUNqRDs7O3lCQUlDLFdBQVcsU0FBQywrQ0FBK0MsY0FBRyxLQUFLOzhCQUVuRSxXQUFXLFNBQUMsK0NBQStDOzBCQUUzRCxXQUFXLFNBQUMsMkNBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VhcmNoIH0gZnJvbSBcIi4vLi4vLi4vc2VhcmNoL3NlYXJjaC5jb21wb25lbnRcIjtcbmltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0SG9zdEJpbmRpbmcsXG5cdElucHV0LFxuXHRPbkluaXRcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImlibS10YWJsZS10b29sYmFyLXNlYXJjaFwiLFxuXHR0ZW1wbGF0ZVVybDogXCIuLi8uLi9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVUb29sYmFyU2VhcmNoIGV4dGVuZHMgU2VhcmNoIGltcGxlbWVudHMgT25Jbml0IHtcblx0dGFibGVTZWFyY2ggPSB0cnVlO1xuXG5cdEBIb3N0QmluZGluZyhcImNsYXNzLmJ4LS10b29sYmFyLXNlYXJjaC1jb250YWluZXItZXhwYW5kYWJsZVwiKSBASW5wdXQoKSBleHBhbmRhYmxlID0gZmFsc2U7XG5cblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MuYngtLXRvb2xiYXItc2VhcmNoLWNvbnRhaW5lci1wZXJzaXN0ZW50XCIpIGdldCBwZXJzaXN0ZW50Q2xhc3MoKSB7IHJldHVybiAhdGhpcy5leHBhbmRhYmxlOyB9XG5cblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MuYngtLXRvb2xiYXItc2VhcmNoLWNvbnRhaW5lci1hY3RpdmVcIikgZ2V0IGFjdGl2ZUNsYXNzKCkge1xuXHRcdHJldHVybiB0aGlzLmFjdGl2ZSAmJiAodGhpcy52YWx1ZSAhPT0gbnVsbCB8fCB0aGlzLnZhbHVlICE9PSBcIlwiKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuc2l6ZSA9IFwic21cIjtcblx0XHRpZiAodGhpcy5leHBhbmRhYmxlKSB7XG5cdFx0XHR0aGlzLnRvb2xiYXIgPSB0cnVlO1xuXHRcdH1cblx0fVxufVxuIl19