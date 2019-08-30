/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, ContentChildren, QueryList } from "@angular/core";
import { BreadcrumbItemComponent } from "./breadcrumb-item.component";
/** @type {?} */
const MINIMUM_OVERFLOW_THRESHOLD = 4;
/**
 *  [See demo](../../?path=/story/breadcrumb--basic)
 *
 * <example-url>../../iframe.html?id=breadcrumb--basic</example-url>
 */
export class Breadcrumb {
    constructor() {
        this.noTrailingSlash = false;
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
     * @param {?} threshold
     * @return {?}
     */
    set threshold(threshold) {
        this._threshold = threshold;
        if (isNaN(threshold) || threshold < MINIMUM_OVERFLOW_THRESHOLD) {
            this._threshold = MINIMUM_OVERFLOW_THRESHOLD;
        }
    }
    /**
     * @return {?}
     */
    get threshold() {
        return this._threshold;
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
    get shouldShowContent() {
        return !this.items;
    }
    /**
     * @return {?}
     */
    get shouldShowOverflow() {
        if (!this.items) {
            return false;
        }
        return this.items.length > this.threshold;
    }
    /**
     * @return {?}
     */
    get first() {
        return this.shouldShowOverflow ? this.items[0] : null;
    }
    /**
     * @return {?}
     */
    get overflowItems() {
        return this.shouldShowOverflow ? this.items.slice(1, this.items.length - 2) : [];
    }
    /**
     * @return {?}
     */
    get secondLast() {
        return this.shouldShowOverflow ? this.items[this.items.length - 2] : null;
    }
    /**
     * @return {?}
     */
    get last() {
        return this.shouldShowOverflow ? this.items[this.items.length - 1] : null;
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
Breadcrumb.decorators = [
    { type: Component, args: [{
                selector: "ibm-breadcrumb",
                template: `
	<nav #nav class="bx--breadcrumb"
		[ngClass]="{
			'bx--skeleton' : skeleton,
			'bx--breadcrumb--no-trailing-slash' : noTrailingSlash
		}"
		[attr.aria-label]="ariaLabel">
		<ng-template [ngIf]="shouldShowContent">
			<ng-content></ng-content>
		</ng-template>
		<ng-template [ngIf]="!shouldShowOverflow">
			<ibm-breadcrumb-item
				*ngFor="let item of items"
				[href]="item.href"
				[current]="item.current"
				[ariaCurrent]="item.ariaCurrent">
				<ng-container *ngIf="!item.template">{{item.content}}</ng-container>
				<ng-template
					*ngIf="item.template"
					[ngTemplateOutlet]="item.template"
					[ngTemplateOutletContext]="{ $implicit: item }">
				</ng-template>
			</ibm-breadcrumb-item>
		</ng-template>
		<ng-template [ngIf]="shouldShowOverflow">
			<ibm-breadcrumb-item
				[href]="first?.href"
				[current]="first?.current"
				[ariaCurrent]="first?.ariaCurrent">
				<ng-container *ngIf="!first?.template">{{first?.content}}</ng-container>
				<ng-template
					*ngIf="first?.template"
					[ngTemplateOutlet]="first?.template"
					[ngTemplateOutletContext]="{ $implicit: first }">
				</ng-template>
			</ibm-breadcrumb-item>
			<ibm-breadcrumb-item>
				<ibm-overflow-menu>
					<li class="bx--overflow-menu-options__option"
						*ngFor="let item of overflowItems">
						<a class="bx--overflow-menu-options__btn"
							href="{{item?.href}}"
							style="text-decoration: none;">
							<ng-container *ngIf="!item?.template">{{item?.content}}</ng-container>
							<ng-template
								*ngIf="item?.template"
								[ngTemplateOutlet]="item?.template"
								[ngTemplateOutletContext]="{ $implicit: item }">
							</ng-template>
						</a>
					</li>
				</ibm-overflow-menu>
			</ibm-breadcrumb-item>
			<ibm-breadcrumb-item
				[href]="secondLast?.href"
				[current]="secondLast?.current"
				[ariaCurrent]="secondLast?.ariaCurrent">
				<ng-container *ngIf="!secondLast?.template">{{secondLast?.content}}</ng-container>
				<ng-template
					*ngIf="secondLast?.template"
					[ngTemplateOutlet]="secondLast?.template"
					[ngTemplateOutletContext]="{ $implicit: secondLast }">
				</ng-template>
			</ibm-breadcrumb-item>
			<ibm-breadcrumb-item
				[href]="last?.href"
				[current]="last?.current"
				[ariaCurrent]="last?.ariaCurrent">
				<ng-container *ngIf="!last?.template">{{last?.content}}</ng-container>
				<ng-template
					*ngIf="last?.template"
					[ngTemplateOutlet]="last?.template"
					[ngTemplateOutletContext]="{ $implicit: last }">
				</ng-template>
			</ibm-breadcrumb-item>
		</ng-template>
	</nav>`
            }] }
];
Breadcrumb.propDecorators = {
    children: [{ type: ContentChildren, args: [BreadcrumbItemComponent,] }],
    items: [{ type: Input }],
    noTrailingSlash: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    skeleton: [{ type: Input }],
    threshold: [{ type: Input }]
};
function Breadcrumb_tsickle_Closure_declarations() {
    /** @type {?} */
    Breadcrumb.prototype.children;
    /** @type {?} */
    Breadcrumb.prototype.items;
    /** @type {?} */
    Breadcrumb.prototype.noTrailingSlash;
    /** @type {?} */
    Breadcrumb.prototype.ariaLabel;
    /** @type {?} */
    Breadcrumb.prototype._threshold;
    /** @type {?} */
    Breadcrumb.prototype._skeleton;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJib24tY29tcG9uZW50cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsiYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsZUFBZSxFQUNmLFNBQVMsRUFHVCxNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFFdEUsTUFBTSwwQkFBMEIsR0FBRyxDQUFDLENBQUM7Ozs7OztBQXVGckMsTUFBTTs7K0JBS3NCLEtBQUs7eUJBS1YsS0FBSzs7Ozs7O0lBRTNCLElBQ0ksUUFBUSxDQUFDLEtBQVU7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBQ3RCOzs7O0lBRUQsSUFBSSxRQUFRO1FBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3RCOzs7OztJQUVELElBQ0ksU0FBUyxDQUFDLFNBQWlCO1FBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzVCLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLFNBQVMsR0FBRywwQkFBMEIsRUFBRTtZQUMvRCxJQUFJLENBQUMsVUFBVSxHQUFHLDBCQUEwQixDQUFDO1NBQzdDO0tBQ0Q7Ozs7SUFFRCxJQUFJLFNBQVM7UUFDWixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7S0FDdkI7Ozs7SUFFRCxrQkFBa0I7UUFDakIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBQ3RCOzs7O0lBRUQsSUFBSSxpQkFBaUI7UUFDcEIsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDbkI7Ozs7SUFFRCxJQUFJLGtCQUFrQjtRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNoQixPQUFPLEtBQUssQ0FBQztTQUNiO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQzFDOzs7O0lBRUQsSUFBSSxLQUFLO1FBQ1IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztLQUN0RDs7OztJQUVELElBQUksYUFBYTtRQUNoQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7S0FDakY7Ozs7SUFFRCxJQUFJLFVBQVU7UUFDYixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0tBQzFFOzs7O0lBRUQsSUFBSSxJQUFJO1FBQ1AsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztLQUMxRTs7OztJQUVTLGNBQWM7UUFDdkIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDekU7S0FDRDs7O1lBckpELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUE0RUg7YUFDUDs7O3VCQUVDLGVBQWUsU0FBQyx1QkFBdUI7b0JBRXZDLEtBQUs7OEJBRUwsS0FBSzt3QkFFTCxLQUFLO3VCQUtMLEtBQUs7d0JBVUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0SW5wdXQsXG5cdENvbnRlbnRDaGlsZHJlbixcblx0UXVlcnlMaXN0LFxuXHRBZnRlckNvbnRlbnRJbml0LFxuXHRUZW1wbGF0ZVJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBCcmVhZGNydW1iSXRlbSB9IGZyb20gXCIuL2JyZWFkY3J1bWItaXRlbS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IEJyZWFkY3J1bWJJdGVtQ29tcG9uZW50IH0gZnJvbSBcIi4vYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudFwiO1xuXG5jb25zdCBNSU5JTVVNX09WRVJGTE9XX1RIUkVTSE9MRCA9IDQ7XG5cbi8qKlxuICogIFtTZWUgZGVtb10oLi4vLi4vP3BhdGg9L3N0b3J5L2JyZWFkY3J1bWItLWJhc2ljKVxuICpcbiAqIDxleGFtcGxlLXVybD4uLi8uLi9pZnJhbWUuaHRtbD9pZD1icmVhZGNydW1iLS1iYXNpYzwvZXhhbXBsZS11cmw+XG4gKi9cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJpYm0tYnJlYWRjcnVtYlwiLFxuXHR0ZW1wbGF0ZTogYFxuXHQ8bmF2ICNuYXYgY2xhc3M9XCJieC0tYnJlYWRjcnVtYlwiXG5cdFx0W25nQ2xhc3NdPVwie1xuXHRcdFx0J2J4LS1za2VsZXRvbicgOiBza2VsZXRvbixcblx0XHRcdCdieC0tYnJlYWRjcnVtYi0tbm8tdHJhaWxpbmctc2xhc2gnIDogbm9UcmFpbGluZ1NsYXNoXG5cdFx0fVwiXG5cdFx0W2F0dHIuYXJpYS1sYWJlbF09XCJhcmlhTGFiZWxcIj5cblx0XHQ8bmctdGVtcGxhdGUgW25nSWZdPVwic2hvdWxkU2hvd0NvbnRlbnRcIj5cblx0XHRcdDxuZy1jb250ZW50PjwvbmctY29udGVudD5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXHRcdDxuZy10ZW1wbGF0ZSBbbmdJZl09XCIhc2hvdWxkU2hvd092ZXJmbG93XCI+XG5cdFx0XHQ8aWJtLWJyZWFkY3J1bWItaXRlbVxuXHRcdFx0XHQqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiXG5cdFx0XHRcdFtocmVmXT1cIml0ZW0uaHJlZlwiXG5cdFx0XHRcdFtjdXJyZW50XT1cIml0ZW0uY3VycmVudFwiXG5cdFx0XHRcdFthcmlhQ3VycmVudF09XCJpdGVtLmFyaWFDdXJyZW50XCI+XG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXRlbS50ZW1wbGF0ZVwiPnt7aXRlbS5jb250ZW50fX08L25nLWNvbnRhaW5lcj5cblx0XHRcdFx0PG5nLXRlbXBsYXRlXG5cdFx0XHRcdFx0Km5nSWY9XCJpdGVtLnRlbXBsYXRlXCJcblx0XHRcdFx0XHRbbmdUZW1wbGF0ZU91dGxldF09XCJpdGVtLnRlbXBsYXRlXCJcblx0XHRcdFx0XHRbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGl0ZW0gfVwiPlxuXHRcdFx0XHQ8L25nLXRlbXBsYXRlPlxuXHRcdFx0PC9pYm0tYnJlYWRjcnVtYi1pdGVtPlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cdFx0PG5nLXRlbXBsYXRlIFtuZ0lmXT1cInNob3VsZFNob3dPdmVyZmxvd1wiPlxuXHRcdFx0PGlibS1icmVhZGNydW1iLWl0ZW1cblx0XHRcdFx0W2hyZWZdPVwiZmlyc3Q/LmhyZWZcIlxuXHRcdFx0XHRbY3VycmVudF09XCJmaXJzdD8uY3VycmVudFwiXG5cdFx0XHRcdFthcmlhQ3VycmVudF09XCJmaXJzdD8uYXJpYUN1cnJlbnRcIj5cblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cIiFmaXJzdD8udGVtcGxhdGVcIj57e2ZpcnN0Py5jb250ZW50fX08L25nLWNvbnRhaW5lcj5cblx0XHRcdFx0PG5nLXRlbXBsYXRlXG5cdFx0XHRcdFx0Km5nSWY9XCJmaXJzdD8udGVtcGxhdGVcIlxuXHRcdFx0XHRcdFtuZ1RlbXBsYXRlT3V0bGV0XT1cImZpcnN0Py50ZW1wbGF0ZVwiXG5cdFx0XHRcdFx0W25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBmaXJzdCB9XCI+XG5cdFx0XHRcdDwvbmctdGVtcGxhdGU+XG5cdFx0XHQ8L2libS1icmVhZGNydW1iLWl0ZW0+XG5cdFx0XHQ8aWJtLWJyZWFkY3J1bWItaXRlbT5cblx0XHRcdFx0PGlibS1vdmVyZmxvdy1tZW51PlxuXHRcdFx0XHRcdDxsaSBjbGFzcz1cImJ4LS1vdmVyZmxvdy1tZW51LW9wdGlvbnNfX29wdGlvblwiXG5cdFx0XHRcdFx0XHQqbmdGb3I9XCJsZXQgaXRlbSBvZiBvdmVyZmxvd0l0ZW1zXCI+XG5cdFx0XHRcdFx0XHQ8YSBjbGFzcz1cImJ4LS1vdmVyZmxvdy1tZW51LW9wdGlvbnNfX2J0blwiXG5cdFx0XHRcdFx0XHRcdGhyZWY9XCJ7e2l0ZW0/LmhyZWZ9fVwiXG5cdFx0XHRcdFx0XHRcdHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOiBub25lO1wiPlxuXHRcdFx0XHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0/LnRlbXBsYXRlXCI+e3tpdGVtPy5jb250ZW50fX08L25nLWNvbnRhaW5lcj5cblx0XHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlXG5cdFx0XHRcdFx0XHRcdFx0Km5nSWY9XCJpdGVtPy50ZW1wbGF0ZVwiXG5cdFx0XHRcdFx0XHRcdFx0W25nVGVtcGxhdGVPdXRsZXRdPVwiaXRlbT8udGVtcGxhdGVcIlxuXHRcdFx0XHRcdFx0XHRcdFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaXRlbSB9XCI+XG5cdFx0XHRcdFx0XHRcdDwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0PC9pYm0tb3ZlcmZsb3ctbWVudT5cblx0XHRcdDwvaWJtLWJyZWFkY3J1bWItaXRlbT5cblx0XHRcdDxpYm0tYnJlYWRjcnVtYi1pdGVtXG5cdFx0XHRcdFtocmVmXT1cInNlY29uZExhc3Q/LmhyZWZcIlxuXHRcdFx0XHRbY3VycmVudF09XCJzZWNvbmRMYXN0Py5jdXJyZW50XCJcblx0XHRcdFx0W2FyaWFDdXJyZW50XT1cInNlY29uZExhc3Q/LmFyaWFDdXJyZW50XCI+XG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCIhc2Vjb25kTGFzdD8udGVtcGxhdGVcIj57e3NlY29uZExhc3Q/LmNvbnRlbnR9fTwvbmctY29udGFpbmVyPlxuXHRcdFx0XHQ8bmctdGVtcGxhdGVcblx0XHRcdFx0XHQqbmdJZj1cInNlY29uZExhc3Q/LnRlbXBsYXRlXCJcblx0XHRcdFx0XHRbbmdUZW1wbGF0ZU91dGxldF09XCJzZWNvbmRMYXN0Py50ZW1wbGF0ZVwiXG5cdFx0XHRcdFx0W25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBzZWNvbmRMYXN0IH1cIj5cblx0XHRcdFx0PC9uZy10ZW1wbGF0ZT5cblx0XHRcdDwvaWJtLWJyZWFkY3J1bWItaXRlbT5cblx0XHRcdDxpYm0tYnJlYWRjcnVtYi1pdGVtXG5cdFx0XHRcdFtocmVmXT1cImxhc3Q/LmhyZWZcIlxuXHRcdFx0XHRbY3VycmVudF09XCJsYXN0Py5jdXJyZW50XCJcblx0XHRcdFx0W2FyaWFDdXJyZW50XT1cImxhc3Q/LmFyaWFDdXJyZW50XCI+XG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCIhbGFzdD8udGVtcGxhdGVcIj57e2xhc3Q/LmNvbnRlbnR9fTwvbmctY29udGFpbmVyPlxuXHRcdFx0XHQ8bmctdGVtcGxhdGVcblx0XHRcdFx0XHQqbmdJZj1cImxhc3Q/LnRlbXBsYXRlXCJcblx0XHRcdFx0XHRbbmdUZW1wbGF0ZU91dGxldF09XCJsYXN0Py50ZW1wbGF0ZVwiXG5cdFx0XHRcdFx0W25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBsYXN0IH1cIj5cblx0XHRcdFx0PC9uZy10ZW1wbGF0ZT5cblx0XHRcdDwvaWJtLWJyZWFkY3J1bWItaXRlbT5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXHQ8L25hdj5gXG59KVxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWIgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcblx0QENvbnRlbnRDaGlsZHJlbihCcmVhZGNydW1iSXRlbUNvbXBvbmVudCkgY2hpbGRyZW46IFF1ZXJ5TGlzdDxCcmVhZGNydW1iSXRlbUNvbXBvbmVudD47XG5cblx0QElucHV0KCkgaXRlbXM6IEFycmF5PEJyZWFkY3J1bWJJdGVtPjtcblxuXHRASW5wdXQoKSBub1RyYWlsaW5nU2xhc2ggPSBmYWxzZTtcblxuXHRASW5wdXQoKSBhcmlhTGFiZWw6IHN0cmluZztcblxuXHRwcm90ZWN0ZWQgX3RocmVzaG9sZDogbnVtYmVyO1xuXHRwcm90ZWN0ZWQgX3NrZWxldG9uID0gZmFsc2U7XG5cblx0QElucHV0KClcblx0c2V0IHNrZWxldG9uKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLl9za2VsZXRvbiA9IHZhbHVlO1xuXHRcdHRoaXMudXBkYXRlQ2hpbGRyZW4oKTtcblx0fVxuXG5cdGdldCBza2VsZXRvbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLl9za2VsZXRvbjtcblx0fVxuXG5cdEBJbnB1dCgpXG5cdHNldCB0aHJlc2hvbGQodGhyZXNob2xkOiBudW1iZXIpIHtcblx0XHR0aGlzLl90aHJlc2hvbGQgPSB0aHJlc2hvbGQ7XG5cdFx0aWYgKGlzTmFOKHRocmVzaG9sZCkgfHwgdGhyZXNob2xkIDwgTUlOSU1VTV9PVkVSRkxPV19USFJFU0hPTEQpIHtcblx0XHRcdHRoaXMuX3RocmVzaG9sZCA9IE1JTklNVU1fT1ZFUkZMT1dfVEhSRVNIT0xEO1xuXHRcdH1cblx0fVxuXG5cdGdldCB0aHJlc2hvbGQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5fdGhyZXNob2xkO1xuXHR9XG5cblx0bmdBZnRlckNvbnRlbnRJbml0KCkge1xuXHRcdHRoaXMudXBkYXRlQ2hpbGRyZW4oKTtcblx0fVxuXG5cdGdldCBzaG91bGRTaG93Q29udGVudCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gIXRoaXMuaXRlbXM7XG5cdH1cblxuXHRnZXQgc2hvdWxkU2hvd092ZXJmbG93KCk6IGJvb2xlYW4ge1xuXHRcdGlmICghdGhpcy5pdGVtcykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5pdGVtcy5sZW5ndGggPiB0aGlzLnRocmVzaG9sZDtcblx0fVxuXG5cdGdldCBmaXJzdCgpOiBCcmVhZGNydW1iSXRlbSB7XG5cdFx0cmV0dXJuIHRoaXMuc2hvdWxkU2hvd092ZXJmbG93ID8gdGhpcy5pdGVtc1swXSA6IG51bGw7XG5cdH1cblxuXHRnZXQgb3ZlcmZsb3dJdGVtcygpOiBBcnJheTxCcmVhZGNydW1iSXRlbT4ge1xuXHRcdHJldHVybiB0aGlzLnNob3VsZFNob3dPdmVyZmxvdyA/IHRoaXMuaXRlbXMuc2xpY2UoMSwgdGhpcy5pdGVtcy5sZW5ndGggLSAyKSA6IFtdO1xuXHR9XG5cblx0Z2V0IHNlY29uZExhc3QoKTogQnJlYWRjcnVtYkl0ZW0ge1xuXHRcdHJldHVybiB0aGlzLnNob3VsZFNob3dPdmVyZmxvdyA/IHRoaXMuaXRlbXNbdGhpcy5pdGVtcy5sZW5ndGggLSAyXSA6IG51bGw7XG5cdH1cblxuXHRnZXQgbGFzdCgpOiBCcmVhZGNydW1iSXRlbSB7XG5cdFx0cmV0dXJuIHRoaXMuc2hvdWxkU2hvd092ZXJmbG93ID8gdGhpcy5pdGVtc1t0aGlzLml0ZW1zLmxlbmd0aCAtIDFdIDogbnVsbDtcblx0fVxuXG5cdHByb3RlY3RlZCB1cGRhdGVDaGlsZHJlbigpIHtcblx0XHRpZiAodGhpcy5jaGlsZHJlbikge1xuXHRcdFx0dGhpcy5jaGlsZHJlbi50b0FycmF5KCkuZm9yRWFjaChjaGlsZCA9PiBjaGlsZC5za2VsZXRvbiA9IHRoaXMuc2tlbGV0b24pO1xuXHRcdH1cblx0fVxufVxuIl19