import {
	Component,
	Input,
	OnInit,
} from "@angular/core";
import { DateTimeModel } from "./../date-time-model.class";

@Component({
	selector: "n-calendar-quarter-view",
	template: `
	<div class="calendar-view">
		<n-calendar-header [currentlyViewed]="currentlyViewed" [header]="header"></n-calendar-header>
		<table class="calendar_grid">
			<tr
			class="grid_row--quarters"
			*ngFor="let i of [0,1]">
				<td
				*ngFor="let j of [0,1]"
				(click)="selectQuarter(i * 2 + j)"
				[ngClass]="{
					'today': isCurrentQuarter(i * 2 + j),
					'selected': isSelected(i * 2 + j),
					'range': inRange(i * 2 + j),
					'disabled': isDisabled(i * 2 + j)
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

	isCurrentQuarter(quarter) {
		const now = new Date();

		return (
			this.currentlyViewed.getFullYear() === now.getFullYear() &&
			quarter === Math.floor(now.getMonth() / 3)
		);
	}

	isDisabled(quarter) {
		return this.model.isDateDisabled(new Date(this.currentlyViewed.getFullYear(), quarter * 4, 1));
	}

	inRange(quarter) {
		return this.model.isDateInRange(new Date(this.currentlyViewed.getFullYear(), quarter * 4, 1));
	}

	isSelected(quarter) {
		return (
			this.currentlyViewed.getFullYear() === this.model.startDate.getFullYear() && quarter === Math.floor(this.model.startDate.getMonth() / 3)
			||
			this.currentlyViewed.getFullYear() === this.model.endDate.getFullYear() && quarter === Math.floor(this.model.endDate.getMonth() / 3)
		);
	}

	selectQuarter(quarter) {
		if (this.rangeSelectionInProgress) {
			this.rangeSelectionInProgress = false;
			this.model.selectQuarterEnd(quarter, this.currentlyViewed.getFullYear());
			console.log(this.model.endDate);
			if (this.model.startDate.getTime() > this.model.endDate.getTime()) {
				const tmp = this.model.startDate;
				this.model.startDate = this.model.endDate;
				this.model.endDate = tmp;
			}
		} else {
			this.rangeSelectionInProgress = true;
			this.model.endDate = null;
			this.model.selectQuarter(quarter, this.currentlyViewed.getFullYear());
			console.log(this.model.startDate);
		}
	}
}
