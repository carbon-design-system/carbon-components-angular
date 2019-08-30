/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, HostBinding, Output, EventEmitter } from "@angular/core";
export class AccordionItem {
    constructor() {
        this.title = `Title ${AccordionItem.accordionItemCount}`;
        this.id = `accordion-item-${AccordionItem.accordionItemCount}`;
        this.skeleton = false;
        this.selected = new EventEmitter();
        this.itemClass = true;
        this.expanded = false;
        this.itemType = "list-item";
        this.role = "heading";
        this.ariaLevel = 3;
        AccordionItem.accordionItemCount++;
    }
    /**
     * @return {?}
     */
    toggleExpanded() {
        if (!this.skeleton) {
            this.expanded = !this.expanded;
            this.selected.emit({ id: this.id, expanded: this.expanded });
        }
    }
}
AccordionItem.accordionItemCount = 0;
AccordionItem.decorators = [
    { type: Component, args: [{
                selector: "ibm-accordion-item",
                template: `
		<button
			[attr.aria-expanded]="expanded"
			[attr.aria-controls]="id"
			(click)="toggleExpanded()"
			class="bx--accordion__heading">
			<ibm-icon-chevron-right16 class="bx--accordion__arrow"></ibm-icon-chevron-right16>
			<p
				class="bx--accordion__title"
				[ngClass]="{
					'bx--skeleton__text': skeleton
				}">
				{{!skeleton ? title : null}}
			</p>
		</button>
		<div [id]="id" class="bx--accordion__content">
			<ng-content *ngIf="!skeleton; else skeletonTemplate"></ng-content>
			<ng-template #skeletonTemplate>
				<p class="bx--skeleton__text" style="width: 90%"></p>
				<p class="bx--skeleton__text" style="width: 80%"></p>
				<p class="bx--skeleton__text" style="width: 95%"></p>
			</ng-template>
		</div>
	`
            }] }
];
/** @nocollapse */
AccordionItem.ctorParameters = () => [];
AccordionItem.propDecorators = {
    title: [{ type: Input }],
    id: [{ type: Input }],
    skeleton: [{ type: Input }],
    selected: [{ type: Output }],
    itemClass: [{ type: HostBinding, args: ["class.bx--accordion__item",] }],
    expanded: [{ type: HostBinding, args: ["class.bx--accordion__item--active",] }, { type: Input }],
    itemType: [{ type: HostBinding, args: ["style.display",] }],
    role: [{ type: HostBinding, args: ["attr.role",] }],
    ariaLevel: [{ type: HostBinding, args: ["attr.aria-level",] }, { type: Input }]
};
function AccordionItem_tsickle_Closure_declarations() {
    /** @type {?} */
    AccordionItem.accordionItemCount;
    /** @type {?} */
    AccordionItem.prototype.title;
    /** @type {?} */
    AccordionItem.prototype.id;
    /** @type {?} */
    AccordionItem.prototype.skeleton;
    /** @type {?} */
    AccordionItem.prototype.selected;
    /** @type {?} */
    AccordionItem.prototype.itemClass;
    /** @type {?} */
    AccordionItem.prototype.expanded;
    /** @type {?} */
    AccordionItem.prototype.itemType;
    /** @type {?} */
    AccordionItem.prototype.role;
    /** @type {?} */
    AccordionItem.prototype.ariaLevel;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FyYm9uLWNvbXBvbmVudHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbImFjY29yZGlvbi9hY2NvcmRpb24taXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBQ1QsS0FBSyxFQUNMLFdBQVcsRUFDWCxNQUFNLEVBQ04sWUFBWSxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBNkJ2QixNQUFNO0lBYUw7cUJBWGlCLFNBQVMsYUFBYSxDQUFDLGtCQUFrQixFQUFFO2tCQUM5QyxrQkFBa0IsYUFBYSxDQUFDLGtCQUFrQixFQUFFO3dCQUM5QyxLQUFLO3dCQUNKLElBQUksWUFBWSxFQUFFO3lCQUVlLElBQUk7d0JBQ1ksS0FBSzt3QkFDbEMsV0FBVztvQkFDbkIsU0FBUzt5QkFDVyxDQUFDO1FBR3JELGFBQWEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0tBQ25DOzs7O0lBRU0sY0FBYztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQztTQUMzRDs7O21DQXBCMEIsQ0FBQzs7WUE1QjdCLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdUJUO2FBQ0Q7Ozs7O29CQUdDLEtBQUs7aUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLE1BQU07d0JBRU4sV0FBVyxTQUFDLDJCQUEyQjt1QkFDdkMsV0FBVyxTQUFDLG1DQUFtQyxjQUFHLEtBQUs7dUJBQ3ZELFdBQVcsU0FBQyxlQUFlO21CQUMzQixXQUFXLFNBQUMsV0FBVzt3QkFDdkIsV0FBVyxTQUFDLGlCQUFpQixjQUFHLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdElucHV0LFxuXHRIb3N0QmluZGluZyxcblx0T3V0cHV0LFxuXHRFdmVudEVtaXR0ZXJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImlibS1hY2NvcmRpb24taXRlbVwiLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxidXR0b25cblx0XHRcdFthdHRyLmFyaWEtZXhwYW5kZWRdPVwiZXhwYW5kZWRcIlxuXHRcdFx0W2F0dHIuYXJpYS1jb250cm9sc109XCJpZFwiXG5cdFx0XHQoY2xpY2spPVwidG9nZ2xlRXhwYW5kZWQoKVwiXG5cdFx0XHRjbGFzcz1cImJ4LS1hY2NvcmRpb25fX2hlYWRpbmdcIj5cblx0XHRcdDxpYm0taWNvbi1jaGV2cm9uLXJpZ2h0MTYgY2xhc3M9XCJieC0tYWNjb3JkaW9uX19hcnJvd1wiPjwvaWJtLWljb24tY2hldnJvbi1yaWdodDE2PlxuXHRcdFx0PHBcblx0XHRcdFx0Y2xhc3M9XCJieC0tYWNjb3JkaW9uX190aXRsZVwiXG5cdFx0XHRcdFtuZ0NsYXNzXT1cIntcblx0XHRcdFx0XHQnYngtLXNrZWxldG9uX190ZXh0Jzogc2tlbGV0b25cblx0XHRcdFx0fVwiPlxuXHRcdFx0XHR7eyFza2VsZXRvbiA/IHRpdGxlIDogbnVsbH19XG5cdFx0XHQ8L3A+XG5cdFx0PC9idXR0b24+XG5cdFx0PGRpdiBbaWRdPVwiaWRcIiBjbGFzcz1cImJ4LS1hY2NvcmRpb25fX2NvbnRlbnRcIj5cblx0XHRcdDxuZy1jb250ZW50ICpuZ0lmPVwiIXNrZWxldG9uOyBlbHNlIHNrZWxldG9uVGVtcGxhdGVcIj48L25nLWNvbnRlbnQ+XG5cdFx0XHQ8bmctdGVtcGxhdGUgI3NrZWxldG9uVGVtcGxhdGU+XG5cdFx0XHRcdDxwIGNsYXNzPVwiYngtLXNrZWxldG9uX190ZXh0XCIgc3R5bGU9XCJ3aWR0aDogOTAlXCI+PC9wPlxuXHRcdFx0XHQ8cCBjbGFzcz1cImJ4LS1za2VsZXRvbl9fdGV4dFwiIHN0eWxlPVwid2lkdGg6IDgwJVwiPjwvcD5cblx0XHRcdFx0PHAgY2xhc3M9XCJieC0tc2tlbGV0b25fX3RleHRcIiBzdHlsZT1cIndpZHRoOiA5NSVcIj48L3A+XG5cdFx0XHQ8L25nLXRlbXBsYXRlPlxuXHRcdDwvZGl2PlxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkl0ZW0ge1xuXHRzdGF0aWMgYWNjb3JkaW9uSXRlbUNvdW50ID0gMDtcblx0QElucHV0KCkgdGl0bGUgPSBgVGl0bGUgJHtBY2NvcmRpb25JdGVtLmFjY29yZGlvbkl0ZW1Db3VudH1gO1xuXHRASW5wdXQoKSBpZCA9IGBhY2NvcmRpb24taXRlbS0ke0FjY29yZGlvbkl0ZW0uYWNjb3JkaW9uSXRlbUNvdW50fWA7XG5cdEBJbnB1dCgpIHNrZWxldG9uID0gZmFsc2U7XG5cdEBPdXRwdXQoKSBzZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRASG9zdEJpbmRpbmcoXCJjbGFzcy5ieC0tYWNjb3JkaW9uX19pdGVtXCIpIGl0ZW1DbGFzcyA9IHRydWU7XG5cdEBIb3N0QmluZGluZyhcImNsYXNzLmJ4LS1hY2NvcmRpb25fX2l0ZW0tLWFjdGl2ZVwiKSBASW5wdXQoKSBleHBhbmRlZCA9IGZhbHNlO1xuXHRASG9zdEJpbmRpbmcoXCJzdHlsZS5kaXNwbGF5XCIpIGl0ZW1UeXBlID0gXCJsaXN0LWl0ZW1cIjtcblx0QEhvc3RCaW5kaW5nKFwiYXR0ci5yb2xlXCIpIHJvbGUgPSBcImhlYWRpbmdcIjtcblx0QEhvc3RCaW5kaW5nKFwiYXR0ci5hcmlhLWxldmVsXCIpIEBJbnB1dCgpIGFyaWFMZXZlbCA9IDM7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0QWNjb3JkaW9uSXRlbS5hY2NvcmRpb25JdGVtQ291bnQrKztcblx0fVxuXG5cdHB1YmxpYyB0b2dnbGVFeHBhbmRlZCgpIHtcblx0XHRpZiAoIXRoaXMuc2tlbGV0b24pIHtcblx0XHRcdHRoaXMuZXhwYW5kZWQgPSAhdGhpcy5leHBhbmRlZDtcblx0XHRcdHRoaXMuc2VsZWN0ZWQuZW1pdCh7aWQ6IHRoaXMuaWQsIGV4cGFuZGVkOiB0aGlzLmV4cGFuZGVkfSk7XG5cdFx0fVxuXHR9XG59XG4iXX0=