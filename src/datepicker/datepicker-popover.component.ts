import {
	Component,
	Input,
	Output,
	EventEmitter,
	ElementRef
} from "@angular/core";
import { DatepickerService } from "./datepicker.service";
import { position, Positions } from "../common/position.service";

@Component({
	selector: "n-date-picker-popover",
	template: `
		<div class="popover date-picker-popover">
			<div class="popover-header">
				<h4 class="popover-title">Select Date</h4>
				<button class="close-icon"  (click)="onClose()" aria-label="Close popover">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
					<path d="M14.5 2.6l-1.1-1.1L8 6.9 2.6 1.5 1.5 2.6 6.9 8l-5.4 5.4 1.1 1.1L8 9.1l5.4 5.4 1.1-1.1L9.1 8z"/>
					</svg>
				</button>
			</div>
			<div>
				<n-date-picker [selectedDate]="selectedDate" (onSelectDate)="onSelect($event)"></n-date-picker>
			</div>
			<div class="arrow" aria-hidden="true"></div>
		</div>
		`,
	host: {"class": "date-picker-wrapper"}
})
export class DatepickerPopover {
	selectedDate;

	@Output() close: EventEmitter<any> = new EventEmitter();
	@Input() popoverConfig;

	constructor(public datepickerService: DatepickerService, public elementRef: ElementRef) {
		this.selectedDate = this.datepickerService.getSelectedDate();
	}

	ngAfterViewInit() {
		this.elementRef.nativeElement.querySelector("button").focus();
	}

	public onClose() {
		this.close.emit();
	}

	onSelect(date) {
		this.close.emit(date);
		this.datepickerService.setSelectedDate(date);
	}
}
