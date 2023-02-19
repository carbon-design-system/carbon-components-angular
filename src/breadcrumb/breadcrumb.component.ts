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
import { Router } from "@angular/router";
import { I18n } from "carbon-components-angular/i18n";

const MINIMUM_OVERFLOW_THRESHOLD = 4;

/**
 *  [See demo](../../?path=/story/components-breadcrumb--basic)
 */
@Component({
	selector: "cds-breadcrumb, ibm-breadcrumb",
	template: `
	<nav #nav class="cds--breadcrumb"
		[ngClass]="{
			'cds--skeleton' : skeleton,
			'cds--breadcrumb--no-trailing-slash' : noTrailingSlash
		}"
		[attr.aria-label]="ariaLabel">
		<ng-template [ngIf]="shouldShowContent">
			<ng-content></ng-content>
		</ng-template>
		<ng-template [ngIf]="!shouldShowOverflow">
			<cds-breadcrumb-item
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
			</cds-breadcrumb-item>
		</ng-template>
		<ng-template [ngIf]="shouldShowOverflow">
			<cds-breadcrumb-item
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
			</cds-breadcrumb-item>
			<cds-breadcrumb-item>
				<cds-overflow-menu>
					<li class="cds--overflow-menu-options__option"
						*ngFor="let item of overflowItems">
						<a class="cds--overflow-menu-options__btn"
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
				</cds-overflow-menu>
			</cds-breadcrumb-item>
			<cds-breadcrumb-item
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
			</cds-breadcrumb-item>
			<cds-breadcrumb-item
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
			</cds-breadcrumb-item>
		</ng-template>
	</nav>`
})
export class Breadcrumb implements AfterContentInit {
	@ContentChildren(BreadcrumbItemComponent) children: QueryList<BreadcrumbItemComponent>;

	@Input() items: Array<BreadcrumbItem>;

	@Input() noTrailingSlash = false;

	@Input() ariaLabel: string = this.i18n.get().BREADCRUMB.LABEL;

	@Input()
	set skeleton(value: any) {
		this._skeleton = value;
		this.updateChildren();
	}

	get skeleton(): any {
		return this._skeleton;
	}

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

	constructor(protected i18n: I18n, @Optional() protected router: Router) { }

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
