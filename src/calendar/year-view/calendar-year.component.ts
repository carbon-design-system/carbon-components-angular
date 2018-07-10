import {
	Component,
	Input,
	OnInit,
} from "@angular/core";
import { DateTimeModel } from "./../date-time-model.class";
import { range } from "../../common/utils";

@Component({
	selector: "n-calendar-year-view",
	template: `
	<div class="calendar-view">
		<n-calendar-header [currentView]="currentView" header="yearOnlyRange"></n-calendar-header>
		<table class="calendar_grid">
			<tr
			class="grid_row--months"
			*ngFor="let i of range(-1, 2, -1)">
				<td
				*ngFor="let j of range(-1, 1, -1)"
				(click)="selectYear(i * 2 + j)"
				[ngClass]="{
					'today': isCurrentYear(i * 2 + j),
					'selected': isSelected(i * 2 + j),
					'range': inRange(i * 2 + j),
					'disabled': isDisabled(i * 2 + j)
				}">
					<div>
						<p>
						{{currentView.getFullYear() - (i * 2 + j)}}
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

	currentView: Date = new Date();
	selected: boolean;
	rangeSelectionInProgress = false;

	ngOnInit() {
		this.currentView = new Date(this.model.startDate);
		if (!this.currentView || isNaN(this.currentView.getTime())) {
			this.currentView = new Date();
		}
	}

	range(stop: number, start = 0, step = 1) {
		return range(stop, start, step);
	}

	isCurrentYear(year) {
		const now = new Date();
		const currentYear = this.currentView.getFullYear() - year;

		return currentYear === now.getFullYear();
	}

	isDisabled(year) {
		const disabledYear = this.currentView.getFullYear() - year;
		return this.model.isDateDisabled(new Date(disabledYear, 1, 1));
	}

	inRange(year) {
		const inRangeYear = this.currentView.getFullYear() - year;
		return this.model.isDateInRange(new Date(inRangeYear, 1, 1));
	}

	isSelected(date: number) {
		for (let i = 0; i < 6; i ++) {
			const currentYearInView = this.currentView.getFullYear() - i;
			const currentYearProvided = this.currentView.getFullYear() - date;

			const isCurrentYearStart =
				currentYearInView === this.model.startDate.getFullYear() &&
				currentYearProvided === this.model.startDate.getFullYear();

			const isCurrentYearEnd =
				currentYearInView === this.model.endDate.getFullYear() &&
				currentYearProvided === this.model.endDate.getFullYear();

			if (isCurrentYearStart || isCurrentYearEnd) {
				return true;
			}
		}
		return false;
	}

	selectYear(year) {
		const selectedYear = this.currentView.getFullYear() - year;

		if (this.rangeSelectionInProgress) {
			this.rangeSelectionInProgress = false;
			this.model.endDate = new Date(selectedYear, 11, 31);
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
