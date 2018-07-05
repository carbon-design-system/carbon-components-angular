import {
	Component, Input
} from "@angular/core";
import { DateTimeModel } from "./date-time-model.class";

@Component({
	selector: "n-calendar-header",
	template: `
			<nav class="pagination" aria-label="year-pagination">
				<ul>
					<li class="pagination_chevron">
						<a (click)="previousYear()" title="Previous page" aria-label="Previous page">
							<n-static-icon icon="chevron_left" size="xs"></n-static-icon>
						</a>
					</li>
					<li *ngIf="header == 'yearOnlyRange'">{{getYear()-5}} - {{getYear()}}</li>
					<li *ngIf="header !== 'yearOnlyRange'">{{getYear()}}</li>
					<li class="pagination_chevron">
						<a (click)="nextYear()" title="Next page" aria-label="Next page">
							<n-static-icon icon="chevron_right" size="xs"></n-static-icon>
						</a>
					</li>
				</ul>
			</nav>

			<nav *ngIf="header !== 'yearOnly' && header !== 'yearOnlyRange'"
				class="pagination month"
				aria-label="month-pagination">
				<ul>
					<li class="pagination_chevron">
						<a (click)="previousMonth()" title="Previous page" aria-label="Previous page">
							<n-static-icon icon="chevron_left" size="xs"></n-static-icon>
						</a>
					</li>
					<li class="month_view-month">{{getMonth() | translate}}</li>
					<li *ngIf="header == 'twoMonths'" class="month_view-month">{{getMonth(1) | translate}}</li>
					<li class="pagination_chevron">
						<a (click)="nextMonth()" title="Next page" aria-label="Next page">
							<n-static-icon icon="chevron_right" size="xs"></n-static-icon>
						</a>
					</li>
				</ul>
			</nav>
	`
})
export class CalendarHeader {
	@Input() currentlyViewed; // : DateTimeModel;
	@Input() header;

	nextYear() {
		this.currentlyViewed.setYear(this.currentlyViewed.getFullYear() + 1);
	}

	nextMonth() {
		this.currentlyViewed.setMonth(this.currentlyViewed.getMonth() + 1);
	}

	previousYear() {
		this.currentlyViewed.setYear(this.currentlyViewed.getFullYear() - 1);
	}

	previousMonth() {
		this.currentlyViewed.setMonth(this.currentlyViewed.getMonth() - 1);
	}

	getYear() {
		return this.currentlyViewed ? this.currentlyViewed.getFullYear() : new Date().getFullYear();
	}

	getMonth(position = 0) {
		if (!this.currentlyViewed) {
			this.currentlyViewed = new Date();
		}

		const date = new Date(this.currentlyViewed);
		date.setMonth(date.getMonth() + position);
		return DateTimeModel.monthsTranslateKeys[date.getMonth()];
	}
}
