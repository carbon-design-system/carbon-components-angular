import { Component, OnInit } from "@angular/core";

@Component({
	selector: "datepicker-demo",
	template: `
	<h1>Date picker</h1>
	<br>
	Selected date: {{selectedDate1}}
	<br>
	Valid date: {{validDate1}}
	<div style="position: relative">
	<input type="text"
		[(ngModel)]="date1"
		nDatepicker
		placement="bottom"
		#nDatepicker="nDatepicker"
		[(selectedDate)]="selectedDate1"
		[(validDate)]="validDate1"
	/>
	<button class="btn--primary" (click)="nDatepicker.toggle($event)">
		<span style="pointer-events: none; display: inline-block">
		<n-icon icon="Calendar" size="md"></n-icon>
		</span>
	</button>
	</div>

	<br>
	Selected date: {{selectedDate3}}
	<br>
	Valid date: {{validDate3}}
	<div style="position: relative">
	<input type="text"
		nDatepicker
		placement="right"
		[(ngModel)]="date3"
		format="dd/mm/yy"
		[(selectedDate)]="selectedDate3"
		[(validDate)]="validDate3"
		[appendToBody]="true"
		#nDatepicker3="nDatepicker"
	/>
	<button class="btn--primary" (click)="nDatepicker3.toggle($event)">
		<span style="pointer-events: none; display: inline-block">
		<n-icon icon="Calendar" size="md"></n-icon>
		</span>
	</button>
	</div>

	<br>
	Selected date: {{selectedDate}}
	<br>
	Valid date: {{validDate}}
	<div style="position: relative">
	<input type="text"
		nDatepicker
		placement="top"
		[(ngModel)]="date2"
		format="dd/mm/yy"
		[(selectedDate)]="selectedDate"
		[(validDate)]="validDate"
		[appendToBody]="true"
		#nDatepicker2="nDatepicker"
	/>
	<button class="btn--primary" (click)="nDatepicker2.toggle($event)">
		<span style="pointer-events: none; display: inline-block">
		<n-icon icon="Calendar" size="md"></n-icon>
		</span>
	</button>
	</div>
	`
})

export class DatepickerDemo {
		date1 = "";
		selectedDate = "";
}
