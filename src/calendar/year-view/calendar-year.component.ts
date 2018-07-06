import {
	Component,
	Input,
	OnInit,
} from "@angular/core";
import { DatePipe } from "@angular/common";
import { DateTimeModel } from "./../date-time-model.class";

@Component({
	selector: "n-calendar-year-view",
	template: `
	<div class="calendar-view">
		<n-calendar-header [currentlyViewed]="currentlyViewed" [header]="header"></n-calendar-header>
		<table class="calendar_grid">
			<tr
			class="grid_row--months"
			*ngFor="let i of [2,1,0]">
				<td
				*ngFor="let j of [1,0]"
				(click)="selectYear(i * 2 + j)"
				[ngClass]="{
					'today': isCurrentYear(i *2 + j),
					'selected': isSelected(model.startDate) && currentlyViewed.getFullYear() - (i * 2 + j) === model.startDate.getFullYear()
						|| isSelected(model.endDate) && currentlyViewed.getFullYear() - (i * 2 + j) === model.endDate.getFullYear(),
					'range': inRange(i * 2 + j)
				}">
					<div>
						<p>
						{{currentlyViewed.getFullYear() - (i * 2 + j)}}
						</p>
					</div>
				</td>
			</tr>
		</table>
	</div>
	`
})

export class CalendarYear implements OnInit {

	@Input() model: DateTimeModel;

	currentlyViewed: Date = new Date();
	selected: boolean;
	rangeSelectionInProgress = false;
	header = "yearOnlyRange";

	ngOnInit() {
		this.currentlyViewed = new Date(this.model.startDate);
		if (!this.currentlyViewed || isNaN(this.currentlyViewed.getTime())) {
			this.currentlyViewed = new Date();
		}
	}

	isCurrentYear(year) {
		const now = new Date();
		const currentYear = this.currentlyViewed.getFullYear() - year;

		return currentYear === now.getFullYear();
	}

	inRange(year) {
		const inRangeYear = this.currentlyViewed.getFullYear() - year;
		return this.model.isDateInRange(new Date(inRangeYear, 1, 1));
	}

	isSelected(date: Date) {
		if (!date) {
			return false;
		}
		for (let i = 0; i < 6; i ++) {
			if (this.currentlyViewed.getFullYear() - i === date.getFullYear()) {
				return true;
			}
		}
		return false;
	}

	selectYear(year) {
		const selectedYear = this.currentlyViewed.getFullYear() - year;

		if (this.rangeSelectionInProgress) {
			this.rangeSelectionInProgress = false;
			this.model.endDate = new Date(selectedYear, 1, 1);
			if (this.model.startDate.getTime() > this.model.endDate.getTime()) {
				const tmp = this.model.startDate;
				this.model.startDate = this.model.endDate;
				this.model.endDate = tmp;
			}
		} else {
			this.rangeSelectionInProgress = true;
			this.model.selectMonth(new Date(selectedYear, 1, 1));
		}
	}
}
