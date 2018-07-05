import {
	Component,
	Input,
	OnInit,
} from "@angular/core";
import { DatePipe } from "@angular/common";
import { DateTimeModel } from "./../date-time-model.class";

@Component({
	selector: "n-calendar-quarter-view",
	template: `
	<div class="calendar-view">
		<n-calendar-header [currentlyViewed]="currentlyViewed" [header]="header"></n-calendar-header>
		<table class="calendar_grid">
			<tr
			class="grid_row--months"
			*ngFor="let i of [0,1]">
				<td
				*ngFor="let j of [0,1]"
				(click)="selectMonth(i * 4 + j)"
				[ngClass]="{
					'selected': isSelected(model.startDate) && i * 4 + j == model.startDate.getMonth()
						|| isSelected(model.endDate) && i * 4 + j == model.endDate.getMonth(),
					'range': inRange(i * 4 + j)
				}">
					<div>
						<p class="top">
							{{quarters[i * 2 + j].name}}
						</p>
						<p class="bottom">
							{{quarters[i * 2 + j].months}}
						</p>
					</div>
				</td>
			</tr>
		</table>
	</div>
	`
})
export class CalendarQuarter implements OnInit {

	@Input() model: DateTimeModel;

	currentlyViewed: Date = new Date();
	selected: boolean;
	rangeSelectionInProgress = false;
	header = "yearOnly";

	quarters =
	[
		{
			name: "Q1",
			months: "January-March"
		}
		,
		{
			name: "Q2",
			months: "April-June"
		},
		{
			name: "Q3",
			months: "July-September"
		},
		{
			name: "Q4",
			months: "October-December"
		}
	];

	ngOnInit() {
		this.currentlyViewed = new Date(this.model.startDate);

		if (!this.currentlyViewed || isNaN(this.currentlyViewed.getTime())) {
			this.currentlyViewed = new Date();
		}
	}

	inRange(month) {
		return this.model.isDateInRange(new Date(this.currentlyViewed.getFullYear(), month, 1));
	}

	isSelected(date: Date) {
		if (!date) {
			return false;
		}
		return this.currentlyViewed.getFullYear() === date.getFullYear();
	}

	selectMonth(month) {
		if (this.rangeSelectionInProgress) {
			this.rangeSelectionInProgress = false;
			this.model.endDate = new Date(this.currentlyViewed.getFullYear(), month, 1);
			if (this.model.startDate.getTime() > this.model.endDate.getTime()) {
				const tmp = this.model.startDate;
				this.model.startDate = this.model.endDate;
				this.model.endDate = tmp;
			}
		} else {
			this.rangeSelectionInProgress = true;
			this.model.selectMonth(new Date(this.currentlyViewed.getFullYear(), month, 1));
		}
	}
}
