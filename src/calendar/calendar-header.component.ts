import { Component, Input } from "@angular/core";
import { DateTimeModel } from "./date-time-model.class";
import { range } from "../common/utils";

@Component({
	selector: "ibm-calendar-header",
	template: `
			<nav class="pagination" aria-label="year-pagination">
				<ul>
					<li class="pagination_chevron">
						<a (click)="previousYear()" title="Previous page" aria-label="Previous page">
							<peretz-icon set="arrows_chevrons" icon="chevron_left" size="xs"></peretz-icon>
						</a>
					</li>
					<li *ngIf="header === 'yearOnlyRange'">{{getYear() - 5}} - {{getYear()}}</li>
					<li *ngIf="header !== 'yearOnlyRange'">{{getYear()}}</li>
					<li class="pagination_chevron">
						<a (click)="nextYear()" title="Next page" aria-label="Next page">
							<peretz-icon set="arrows_chevrons" icon="chevron_right" size="xs"></peretz-icon>
						</a>
					</li>
				</ul>
			</nav>

			<nav
			*ngIf="header !== 'yearOnly' && header !== 'yearOnlyRange'"
			class="pagination month"
			aria-label="month-pagination">
				<ul>
					<li class="pagination_chevron">
						<a (click)="previousMonth()" title="Previous page" aria-label="Previous page">
							<peretz-icon set="arrows_chevrons" icon="chevron_left" size="xs"></peretz-icon>
						</a>
					</li>
					<li
					class="month_view-month"
					*ngFor="let month of range(monthCount)">
						{{getMonth(month) | translate}}
					</li>
					<li class="pagination_chevron">
						<a (click)="nextMonth()" title="Next page" aria-label="Next page">
							<peretz-icon set="arrows_chevrons" icon="chevron_right" size="xs"></peretz-icon>
						</a>
					</li>
				</ul>
			</nav>
	`
})
export class CalendarHeader {
	@Input() currentView = new Date();
	@Input() header;
	@Input() monthCount = 1;

	range(stop: number, start = 0, step = 1) {
		return range(stop, start, step);
	}

	nextYear() {
		this.currentView.setFullYear(this.currentView.getFullYear() + 1);
	}

	nextMonth() {
		this.currentView.setMonth(this.currentView.getMonth() + 1);
	}

	previousYear() {
		this.currentView.setFullYear(this.currentView.getFullYear() - 1);
	}

	previousMonth() {
		this.currentView.setMonth(this.currentView.getMonth() - 1);
	}

	getYear() {
		return this.currentView.getFullYear();
	}

	getMonth(position = 0) {
		const currentMonthInView = (this.currentView.getMonth() + position) % 12;

		return DateTimeModel.monthsTranslateKeys[currentMonthInView];
	}
}
