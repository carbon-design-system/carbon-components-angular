/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, ContentChildren, QueryList } from "@angular/core";
import { AccordionItem } from "./accordion-item.component";
/**
 * [See demo](../../?path=/story/accordion--basic)
 *
 * <example-url>../../iframe.html?id=accordion--basic</example-url>
 */
export class Accordion {
    constructor() {
        this._skeleton = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set skeleton(value) {
        this._skeleton = value;
        this.updateChildren();
    }
    /**
     * @return {?}
     */
    get skeleton() {
        return this._skeleton;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.updateChildren();
    }
    /**
     * @return {?}
     */
    updateChildren() {
        if (this.children) {
            this.children.toArray().forEach(child => child.skeleton = this.skeleton);
        }
    }
}
Accordion.decorators = [
    { type: Component, args: [{
                selector: "ibm-accordion",
                template: `
		<ul class="bx--accordion">
			<ng-content></ng-content>
		</ul>
	`
            }] }
];
Accordion.propDecorators = {
    children: [{ type: ContentChildren, args: [AccordionItem,] }],
    skeleton: [{ type: Input }]
};
function Accordion_tsickle_Closure_declarations() {
    /** @type {?} */
    Accordion.prototype.children;
    /** @type {?} */
    Accordion.prototype._skeleton;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJhY2NvcmRpb24vYWNjb3JkaW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsZUFBZSxFQUNmLFNBQVMsRUFFVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7OztBQWUzRCxNQUFNOzt5QkFHaUIsS0FBSzs7Ozs7O0lBRTNCLElBQ0ksUUFBUSxDQUFDLEtBQVU7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBQ3RCOzs7O0lBRUQsSUFBSSxRQUFRO1FBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3RCOzs7O0lBRUQsa0JBQWtCO1FBQ2pCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztLQUN0Qjs7OztJQUVTLGNBQWM7UUFDdkIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDekU7S0FDRDs7O1lBL0JELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFOzs7O0VBSVQ7YUFDRDs7O3VCQUVDLGVBQWUsU0FBQyxhQUFhO3VCQUk3QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbnB1dCxcblx0Q29udGVudENoaWxkcmVuLFxuXHRRdWVyeUxpc3QsXG5cdEFmdGVyQ29udGVudEluaXRcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjY29yZGlvbkl0ZW0gfSBmcm9tIFwiLi9hY2NvcmRpb24taXRlbS5jb21wb25lbnRcIjtcblxuLyoqXG4gKiBbU2VlIGRlbW9dKC4uLy4uLz9wYXRoPS9zdG9yeS9hY2NvcmRpb24tLWJhc2ljKVxuICpcbiAqIDxleGFtcGxlLXVybD4uLi8uLi9pZnJhbWUuaHRtbD9pZD1hY2NvcmRpb24tLWJhc2ljPC9leGFtcGxlLXVybD5cbiAqL1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImlibS1hY2NvcmRpb25cIixcblx0dGVtcGxhdGU6IGBcblx0XHQ8dWwgY2xhc3M9XCJieC0tYWNjb3JkaW9uXCI+XG5cdFx0XHQ8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5cdFx0PC91bD5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb24gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcblx0QENvbnRlbnRDaGlsZHJlbihBY2NvcmRpb25JdGVtKSBjaGlsZHJlbjogUXVlcnlMaXN0PEFjY29yZGlvbkl0ZW0+O1xuXG5cdHByb3RlY3RlZCBfc2tlbGV0b24gPSBmYWxzZTtcblxuXHRASW5wdXQoKVxuXHRzZXQgc2tlbGV0b24odmFsdWU6IGFueSkge1xuXHRcdHRoaXMuX3NrZWxldG9uID0gdmFsdWU7XG5cdFx0dGhpcy51cGRhdGVDaGlsZHJlbigpO1xuXHR9XG5cblx0Z2V0IHNrZWxldG9uKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuX3NrZWxldG9uO1xuXHR9XG5cblx0bmdBZnRlckNvbnRlbnRJbml0KCkge1xuXHRcdHRoaXMudXBkYXRlQ2hpbGRyZW4oKTtcblx0fVxuXG5cdHByb3RlY3RlZCB1cGRhdGVDaGlsZHJlbigpIHtcblx0XHRpZiAodGhpcy5jaGlsZHJlbikge1xuXHRcdFx0dGhpcy5jaGlsZHJlbi50b0FycmF5KCkuZm9yRWFjaChjaGlsZCA9PiBjaGlsZC5za2VsZXRvbiA9IHRoaXMuc2tlbGV0b24pO1xuXHRcdH1cblx0fVxufVxuIl19