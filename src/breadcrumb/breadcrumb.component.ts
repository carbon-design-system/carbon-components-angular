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
			'bx--breadcrumb--no-trailing-slash' : noTrailingSlash
		}"
		[attr.aria-label]="ariaLabel">
		<ng-template [ngIf]="showContent">
		  <ng-content></ng-content>
		</ng-template>
		<ng-template [ngIf]="!showOverflow">
			<ibm-breadcrumb-item
			  *ngFor="let item of items"
			  [href]="item.href">
			  {{item.content}}
			</ibm-breadcrumb-item>
		</ng-template>
		<ng-template [ngIf]="showOverflow">
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
export class BreadcrumbComponent {

	threshold: number;
	first: BreadcrumbItem;
	overflowItems: BreadcrumbItem[] = [];
	secondLast: BreadcrumbItem;
	last: BreadcrumbItem;
	items: Array<BreadcrumbItem>;

	@Input() noTrailingSlash = false;

	@Input() ariaLabel: string;

	@Input()
	set overflowThreshold(threshold: number) {
		this.threshold = threshold;
		if (isNaN(threshold) || threshold < MINIMUM_OVERFLOW_THRESHOLD) {
			this.threshold = MINIMUM_OVERFLOW_THRESHOLD;
		}
		this.update();
	}

	@Input()
	set breadcrumbItems(items: Array<BreadcrumbItem>) {
		this.items = items;
		this.update();
	}

	get showContent(): boolean {
		return !this.items;
	}

	get showOverflow(): boolean {
		if (!this.items) {
			return false;
		}
		return this.items.length > this.threshold;
	}

	update(): void {
		if (this.showOverflow) {
			this.first = this.items[0];
			this.overflowItems = this.items.slice(1, this.items.length - 2);
			this.secondLast = this.items[this.items.length - 2];
			this.last = this.items[this.items.length - 1];
			return;
		}
		this.first = null;
		this.overflowItems = [];
		this.secondLast = null;
		this.last = null;
	}
}
