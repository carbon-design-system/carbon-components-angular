import {
	AfterViewInit,
	Component,
	Input,
	OnInit,
} from "@angular/core";
import { DateTimeModel } from "./../date-time-model.class";

@Component({
	selector: "n-calendar-month-view",
	template: `
	<div class="calendar-view">
		<n-calendar-header [currentlyViewed]="currentlyViewed"></n-calendar-header>
		<table class="calendar_grid calendar_month">
			<tr class="grid_row_header--month">
					<th *ngFor="let day of model.daysOfWeek"><div>{{day | translate}}</div></th>
			</tr>
			<tr
			class="grid_row--month"
			*ngFor="let week of daysOfMonth()">
			<td
				*ngFor="let day of week"
				(click)="selectDay(day)"
				[ngClass]="{
					'empty': !day,
					'selected': isSelected(model.startDate) && day == model.startDate.getDate()
						|| isSelected(model.endDate) && day == model.endDate.getDate(),
					'range': inRange(day)
				}">
					<div>
						<p>
							{{day}}
						</p>
					</div>
				</td>
			</tr>
		</table>
	</div>
	`
})
export class CalendarMonth implements OnInit {

	@Input() model: DateTimeModel;

	currentlyViewed: Date = new Date();
	selected: boolean;
	rangeSelectionInProgress = false;

	ngOnInit() {
		this.currentlyViewed = new Date(this.model.startDate);

		if (!this.currentlyViewed || isNaN(this.currentlyViewed.getTime())) {
			this.currentlyViewed = new Date();
		}
	}

	daysOfMonth() {
		return this.model.daysOfMonth(new Date(this.currentlyViewed.getFullYear(), this.currentlyViewed.getMonth(), 1));
	}

	inRange(day) {
		if (!day) {
			return false;
		}
		return this.model.isDateInRange(new Date(this.currentlyViewed.getFullYear(), this.currentlyViewed.getMonth(), day));
	}

	isSelected(date: Date) {
		if (!date) {
			return false;
		}
		return this.currentlyViewed.getMonth() === date.getMonth() &&
		this.currentlyViewed.getFullYear() === date.getFullYear();
	}

	selectDay(day: number) {
		if (this.rangeSelectionInProgress) {
			this.rangeSelectionInProgress = false;
			this.model.endDate = new Date(this.currentlyViewed.getFullYear(), this.currentlyViewed.getMonth(), day);
			if (this.model.startDate.getTime() > this.model.endDate.getTime()) {
				const tmp = this.model.startDate;
				this.model.startDate = this.model.endDate;
				this.model.endDate = tmp;
			}
		} else {
			this.rangeSelectionInProgress = true;
			this.model.selectDay(new Date(this.currentlyViewed.getFullYear(), this.currentlyViewed.getMonth(), day));
		}
	}

	daysInMonth(month, year) { // Use 1 for January, 2 for February, etc.
		return new Date(year, month + 1, 0).getDate();
	}
}
