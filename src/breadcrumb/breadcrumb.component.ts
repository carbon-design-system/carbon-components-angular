import {
	Component,
	Input,
	ContentChildren,
	QueryList,
	AfterContentInit,
	TemplateRef,
	Optional,
	Output,
	EventEmitter
} from "@angular/core";

import { BreadcrumbItem } from "./breadcrumb-item.interface";
import { BreadcrumbItemComponent } from "./breadcrumb-item.component";
import { DomSanitizer } from "@angular/platform-browser";
import { Router } from "@angular/router";

const MINIMUM_OVERFLOW_THRESHOLD = 4;

/**
 *  [See demo](../../?path=/story/breadcrumb--basic)
 *
 * <example-url>../../iframe.html?id=breadcrumb--basic</example-url>
 */
@Component({
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
				[route]="item.route"
				[routeExtras]="item.routeExtras"
				[current]="item.current"
				[ariaCurrent]="item.ariaCurrent"
				(navigation)="navigation.emit($event)">
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
				[route]="first?.route"
				[routeExtras]="first?.routeExtras"
				[current]="first?.current"
				[ariaCurrent]="first?.ariaCurrent"
				(navigation)="navigation.emit($event)">
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
							(click)="navigate($event, item)"
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
				[route]="secondLast?.route"
				[routeExtras]="secondLast?.routeExtras"
				[current]="secondLast?.current"
				[ariaCurrent]="secondLast?.ariaCurrent"
				(navigation)="navigation.emit($event)">
				<ng-container *ngIf="!secondLast?.template">{{secondLast?.content}}</ng-container>
				<ng-template
					*ngIf="secondLast?.template"
					[ngTemplateOutlet]="secondLast?.template"
					[ngTemplateOutletContext]="{ $implicit: secondLast }">
				</ng-template>
			</ibm-breadcrumb-item>
			<ibm-breadcrumb-item
				[href]="last?.href"
				[route]="last?.route"
				[routeExtras]="last?.routeExtras"
				[current]="last?.current"
				[ariaCurrent]="last?.ariaCurrent"
				(navigation)="navigation.emit($event)">
				<ng-container *ngIf="!last?.template">{{last?.content}}</ng-container>
				<ng-template
					*ngIf="last?.template"
					[ngTemplateOutlet]="last?.template"
					[ngTemplateOutletContext]="{ $implicit: last }">
				</ng-template>
			</ibm-breadcrumb-item>
		</ng-template>
	</nav>`
})
export class Breadcrumb implements AfterContentInit {
	@ContentChildren(BreadcrumbItemComponent) children: QueryList<BreadcrumbItemComponent>;
	/**
	 * Array of breadcrumb items to display
	 */
	@Input() items: Array<BreadcrumbItem>;
	/**
	 * Controls if the last slash is shown
	 *
	 * Note: boolean properties should be set using the `[noTrailingSlash]="true"` syntax.
	 * `noTrailingSlash="true"` will assign a string value of`"true"`
	 */
	@Input() noTrailingSlash = false;

	/**
	 * The accessible description of the breadcrumb container
	 */
	@Input() ariaLabel: string;

	/**
	 * Enables or disables the skeleton state
	 *
	 * Note: boolean properties should be set using the `[skeleton]="true"` syntax.
	 * `skeleton="true"` will assign a string value of `"true"`
	 */
	@Input()
	set skeleton(value: boolean) {
		this._skeleton = value;
		this.updateChildren();
	}

	get skeleton(): boolean {
		return this._skeleton;
	}

	/**
	 * The number of items to be shown before wrapping the excess into an overflow menu
	 */
	@Input()
	set threshold(threshold: number) {
		this._threshold = threshold;
		if (isNaN(threshold) || threshold < MINIMUM_OVERFLOW_THRESHOLD) {
			this._threshold = MINIMUM_OVERFLOW_THRESHOLD;
		}
	}

	get threshold(): number {
		return this._threshold;
	}

	/**
	 * Emits the navigation status promise when the link is activated
	 */
	@Output() navigation = new EventEmitter<Promise<boolean>>();

	get shouldShowContent(): boolean {
		return !this.items;
	}

	get shouldShowOverflow(): boolean {
		if (!this.items) {
			return false;
		}
		return this.items.length > this.threshold;
	}

	get first(): BreadcrumbItem {
		return this.shouldShowOverflow ? this.items[0] : null;
	}

	get overflowItems(): Array<BreadcrumbItem> {
		return this.shouldShowOverflow ? this.items.slice(1, this.items.length - 2) : [];
	}

	get secondLast(): BreadcrumbItem {
		return this.shouldShowOverflow ? this.items[this.items.length - 2] : null;
	}

	get last(): BreadcrumbItem {
		return this.shouldShowOverflow ? this.items[this.items.length - 1] : null;
	}

	protected _threshold: number;
	protected _skeleton = false;

	constructor(protected domSanitizer: DomSanitizer, @Optional() protected router: Router) { }

	ngAfterContentInit() {
		this.updateChildren();
	}

	navigate(event, item: BreadcrumbItem) {
		if (this.router && item.route) {
			event.preventDefault();
			const status = this.router.navigate(item.route, item.routeExtras);
			this.navigation.emit(status);
		}
	}

	protected updateChildren() {
		if (this.children) {
			this.children.toArray().forEach(child => child.skeleton = this.skeleton);
		}
	}
}
