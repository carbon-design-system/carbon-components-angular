import {
	Component,
	Input
} from "@angular/core";

import { BreadcrumbItem } from "./breadcrumb-item.interface";

const MINIMUM_OVERFLOW_THRESHOLD = 4;

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
				[href]="item.href">
				{{item.content}}
			</ibm-breadcrumb-item>
		</ng-template>
		<ng-template [ngIf]="shouldShowOverflow">
			<ibm-breadcrumb-item [href]="first?.href">
				{{first?.content}}
			</ibm-breadcrumb-item>
			<ibm-breadcrumb-item>
				<ibm-overflow-menu>
					<li class="bx--overflow-menu-options__option"
						*ngFor="let item of overflowItems">
						<a class="bx--overflow-menu-options__btn"
							href="{{item?.href}}"
							style="text-decoration: none;">
							{{item?.content}}
						</a>
					</li>
				</ibm-overflow-menu>
			</ibm-breadcrumb-item>
			<ibm-breadcrumb-item [href]="secondLast?.href">
				{{secondLast?.content}}
			</ibm-breadcrumb-item>
			<ibm-breadcrumb-item [href]="last?.href">
				{{last?.content}}
			</ibm-breadcrumb-item>
		</ng-template>
	</nav>`
})
export class Breadcrumb {
	@Input() items: Array<BreadcrumbItem>;

	@Input() noTrailingSlash = false;

	@Input() ariaLabel: string;

	@Input() skeleton = false;

	protected _threshold: number;

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
}
