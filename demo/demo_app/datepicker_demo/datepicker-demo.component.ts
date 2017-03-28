import { Component, OnInit } from "@angular/core";

@Component({
	selector: "datepicker-demo",
	template: `
	<h1>Date picker</h1>
	<br>
	Selected date: {{selectedDate1}}
	<br>
	Valid Date: {{validDate1}}
	<div style="position: relative">
	<input type="text"
		[(ngModel)]="date1"
		cdlDatepicker
		placement="bottom"
		#cdlDatepicker="cdlDatepicker"
		[(selectedDate)]="selectedDate1"
		[(validDate)]="validDate1"
	/>
	<button class="btn" (click)="cdlDatepicker.toggle($event)">
		<span style="pointer-events: none; display: inline-block">
		<cdl-glyphicon icon="Calendar" size="md"></cdl-glyphicon>
		</span>
	</button>
	</div>

	<br>
	Selected date: {{selectedDate3}}
	<br>
	Valid Date: {{validDate3}}
	<div style="position: relative">
	<input type="text"
		cdlDatepicker
		placement="right"
		[(ngModel)]="date3"
		format="dd/mm/yy"
		[(selectedDate)]="selectedDate3"
		[(validDate)]="validDate3"
		[appendToBody]="true"
		#cdlDatepicker3="cdlDatepicker"
	/>
	<button class="btn" (click)="cdlDatepicker3.toggle($event)">
		<span style="pointer-events: none; display: inline-block">
		<cdl-glyphicon icon="Calendar" size="md"></cdl-glyphicon>
		</span>
	</button>
	</div>

	<br>
	Selected date: {{selectedDate}}
	<br>
	Valid Date: {{validDate}}
	<div style="position: relative">
	<input type="text"
		cdlDatepicker
		placement="top"
		[(ngModel)]="date2"
		format="dd/mm/yy"
		[(selectedDate)]="selectedDate"
		[(validDate)]="validDate"
		[appendToBody]="true"
		#cdlDatepicker2="cdlDatepicker"
	/>
	<button class="btn" (click)="cdlDatepicker2.toggle($event)">
		<span style="pointer-events: none; display: inline-block">
		<cdl-glyphicon icon="Calendar" size="md"></cdl-glyphicon>
		</span>
	</button>
	</div>
	`
})

export class DatepickerDemo {
		date1 = "";
		selectedDate = "";
}
