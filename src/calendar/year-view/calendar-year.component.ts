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
		<n-calendar-header [currentView]="currentView" [header]="header"></n-calendar-header>
		<table class="calendar_grid">
			<tr
			class="grid_row--months"
			*ngFor="let i of [2,1,0]">
				<td
				*ngFor="let j of [1,0]"
				(click)="selectYear(i * 2 + j)"
				[ngClass]="{
					'today': isCurrentYear(i *2 + j),
					'selected': isSelected(model.startDate) && currentView.getFullYear() - (i * 2 + j) === model.startDate.getFullYear()
						|| isSelected(model.endDate) && currentView.getFullYear() - (i * 2 + j) === model.endDate.getFullYear(),
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
	header = "yearOnlyRange";

	ngOnInit() {
		this.currentView = new Date(this.model.startDate);
		if (!this.currentView || isNaN(this.currentView.getTime())) {
			this.currentView = new Date();
		}
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

	isSelected(date: Date) {
		if (!date) {
			return false;
		}
		for (let i = 0; i < 6; i ++) {
			if (this.currentView.getFullYear() - i === date.getFullYear()) {
				return true;
			}
		}
		return false;
	}

	selectYear(year) {
		const selectedYear = this.currentView.getFullYear() - year;

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
