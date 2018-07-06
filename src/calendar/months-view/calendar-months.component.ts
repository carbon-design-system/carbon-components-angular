import {
	Component,
	Input,
	OnInit,
} from "@angular/core";
import { DateTimeModel } from "./../date-time-model.class";

@Component({
	selector: "n-calendar-months-view",
	template: `
	<div class="calendar-view">
		<n-calendar-header [currentlyViewed]="currentlyViewed" [header]="header"></n-calendar-header>
		<table class="calendar_grid">
			<tr
			class="grid_row--months"
			*ngFor="let i of [0,1,2]">
				<td
				*ngFor="let j of [0,1,2,3]"
				(click)="selectMonth(i * 4 + j)"
				[ngClass]="{
					'today': isCurrentMonth(i * 4 + j),
					'selected': isSelected(model.startDate) && i * 4 + j == model.startDate.getMonth()
						|| isSelected(model.endDate) && i * 4 + j == model.endDate.getMonth(),
					'range': inRange(i * 4 + j)
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

	currentlyViewed: Date = new Date();
	selected: boolean;
	rangeSelectionInProgress = false;
	header = "yearOnly";
	months = DateTimeModel.monthsTranslateKeys;

	ngOnInit() {
		this.currentlyViewed = new Date(this.model.startDate);

		if (!this.currentlyViewed || isNaN(this.currentlyViewed.getTime())) {
			this.currentlyViewed = new Date();
		}
	}

	isCurrentMonth(month) {
		const now = new Date();

		return (
			this.currentlyViewed.getFullYear() === now.getFullYear() &&
			month === now.getMonth()
		);
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
			this.model.endDate = new Date(this.currentlyViewed.getFullYear(), month, 0);
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
