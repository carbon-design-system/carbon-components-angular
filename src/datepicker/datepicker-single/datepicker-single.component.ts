import { Component, Input, ContentChild, TemplateRef, ViewChild, AfterViewInit, OnInit, ElementRef } from "@angular/core";
import { FlatpickrOptions } from "ng2-flatpickr";

@Component({
	selector: "ibm-date-picker-single",
	styles: [`
	.bx--date-picker__icon~.bx--date-picker__input {
		padding-left: 3rem;
	}
	`],
	template: `
	<div class="bx--form-item">
	<ng2-flatpickr [config]="flatpickrOptions" [hideButton]="true">
		<div class="bx--form-item">
			<div data-date-picker data-date-picker-type="single" class="bx--date-picker bx--date-picker--single">
				<div class="bx--date-picker-container" #flatpickr>
					<svg data-date-picker-icon class="bx--date-picker__icon" width="14" height="16" viewBox="0 0 14 16">
						<path d="M0 5h14v1H0V5zm3-5h1v4H3V0zm7 0h1v4h-1V0zM0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 14.5v-12zm1 0v12a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5z"
						fill-rule="nonzero"/>
					</svg>
					<label for="date-picker-3" class="bx--label">Date Picker label</label>
					<input type="text" id="date-picker-3" class="bx--date-picker__input" pattern="\d{1,2}/\d{1,2}/\d{4}" placeholder="mm/dd/yyyy"
					data-input/>
				</div>
			</div>
		</div>
	</ng2-flatpickr>
  </div>
	`
})
export class DatePickerSingle {
	flatpickrOptions: FlatpickrOptions = {
		dateFormat: "m/d/Y"
	};
}
