import {
	Component,
	Input,
	OnInit,
} from "@angular/core";
import { DateTimeModel } from "./../date-time-model.class";
import { range } from "../../common/utils";

@Component({
	selector: "n-calendar-months-view",
	template: `
	<div class="calendar-view">
		<n-calendar-header [currentView]="currentView" [header]="header"></n-calendar-header>
		<table class="calendar_grid">
			<tr
			class="grid_row--months"
			*ngFor="let i of range(3)">
				<td
				*ngFor="let j of range(4)"
				(click)="selectMonth(i * 4 + j)"
				[ngClass]="{
					'today': isCurrentMonth(i * 4 + j),
					'selected': isSelected(i * 4 + j),
					'range': inRange(i * 4 + j),
					'disabled': isDisabled(i * 4 + j)
				}">
					<div>
						<p>
							{{months[i * 4 + j] | translate}}
						</p>
					</div>
				</td>
			</tr>
		</table>
	</div>
	`
})
export class CalendarMonths implements OnInit {

	@Input() model: DateTimeModel;

	currentView: Date = new Date();
	rangeSelectionInProgress = false;
	header = "yearOnly";
	months = DateTimeModel.monthsTranslateKeys;

	ngOnInit() {
		this.currentView = new Date(this.model.startDate);

		if (!this.currentView || isNaN(this.currentView.getTime())) {
			this.currentView = new Date();
		}
	}

	range(stop: number, start = 0, step = 1) {
		return range(stop, start, step);
	}

	isCurrentMonth(month) {
		const now = new Date();

		return (
			this.currentView.getFullYear() === now.getFullYear() &&
			month === now.getMonth()
		);
	}

	isDisabled(month) {
		return this.model.isDateDisabled(new Date(this.currentView.getFullYear(), month, 1));
	}

	inRange(month) {
		return this.model.isDateInRange(new Date(this.currentView.getFullYear(), month, 1));
	}

	isSelected(date: number) {
		return this.currentView.getFullYear() === this.model.startDate.getFullYear() && date === this.model.startDate.getMonth()
			|| this.currentView.getFullYear() === this.model.endDate.getFullYear() && date === this.model.endDate.getMonth();
	}

	selectMonth(month) {
		if (this.rangeSelectionInProgress) {
			this.rangeSelectionInProgress = false;
			this.model.endDate = new Date(this.currentView.getFullYear(), month + 1, 0, 23, 59, 59);
			console.log(this.model.endDate);
			if (this.model.startDate.getTime() > this.model.endDate.getTime()) {
				const tmp = this.model.startDate;
				this.model.startDate = this.model.endDate;
				this.model.endDate = tmp;
			}
		} else {
			this.rangeSelectionInProgress = true;
			this.model.selectMonth(new Date(this.currentView.getFullYear(), month, 1));
		}
	}
}
