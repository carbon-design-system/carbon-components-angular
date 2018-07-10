import { TranslateService } from "@ngx-translate/core";
import {
	Component,
	Input,
	OnInit,
} from "@angular/core";
import { DateTimeModel } from "./../date-time-model.class";
import { range } from "../../common/utils";

@Component({
	selector: "n-calendar-quarter-view",
	template: `
	<div class="calendar-view">
		<n-calendar-header [currentView]="currentView" header="yearOnly"></n-calendar-header>
		<table class="calendar_grid">
			<tr
			class="grid_row--quarters"
			*ngFor="let i of range(2)">
				<td
				*ngFor="let j of range(2)"
				(click)="selectQuarter(i * 2 + j)"
				[ngClass]="{
					'today': isCurrentQuarter(i * 2 + j),
					'selected': isSelected(i * 2 + j),
					'range': inRange(i * 2 + j),
					'disabled': isDisabled(i * 2 + j)
				}">
					<div>
						<p class="top">
							{{quarters[i * 2 + j].name | translate}}
						</p>
						<p class="bottom">
							{{quarters[i * 2 + j].months | translate}}
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

	currentView: Date = new Date();
	rangeSelectionInProgress = false;

	quarters: Array<any>;

	constructor(private translate: TranslateService) {
		this.translate.get("CALENDAR.QUARTERS").toPromise().then((res: Array<any>) => {
			this.quarters = res;
		});
	}

	ngOnInit() {
		this.currentView = new Date(this.model.startDate);

		if (!this.currentView || isNaN(this.currentView.getTime())) {
			this.currentView = new Date();
		}
	}

	range(stop: number, start = 0, step = 1) {
		return range(stop, start, step);
	}

	isCurrentQuarter(quarter) {
		const now = new Date();

		return (
			this.currentView.getFullYear() === now.getFullYear() &&
			quarter === Math.floor(now.getMonth() / 3)
		);
	}

	isDisabled(quarter) {
		return this.model.isDateDisabled(new Date(this.currentView.getFullYear(), quarter * 4, 1));
	}

	inRange(quarter) {
		return this.model.isDateInRange(new Date(this.currentView.getFullYear(), quarter * 4, 1));
	}

	isSelected(quarter) {
		return (
			this.currentView.getFullYear() === this.model.startDate.getFullYear() && quarter === Math.floor(this.model.startDate.getMonth() / 3)
			|| this.currentView.getFullYear() === this.model.endDate.getFullYear() && quarter === Math.floor(this.model.endDate.getMonth() / 3)
		);
	}

	selectQuarter(quarter) {
		if (this.rangeSelectionInProgress) {
			this.rangeSelectionInProgress = false;
			this.model.selectQuarterEnd(quarter, this.currentView.getFullYear());
			if (this.model.startDate.getTime() > this.model.endDate.getTime()) {
				const tmp = this.model.startDate;
				this.model.startDate = this.model.endDate;
				this.model.endDate = tmp;
			}
		} else {
			this.rangeSelectionInProgress = true;
			this.model.selectQuarter(quarter, this.currentView.getFullYear());
		}
	}
}
