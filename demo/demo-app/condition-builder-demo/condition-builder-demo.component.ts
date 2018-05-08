import {
	Component,
	ViewEncapsulation
} from "@angular/core";

import { ConditionBuilder, ConditionBuilderService } from "./../../../src/condition-builder/condition-builder.module";

import { ConditionBuilderDemoService } from "./condition-builder-demo.service";

@Component({
	selector: "app-condition-builder-demo",
	template: `
	<h1>Condition builder</h1>

	<button (click)="showState = !showState" class="btn--primary">Show state</button>
	<button (click)="editState = !editState" class="btn--primary">Edit state</button>

	<div>
		<div class="json-container" *ngIf="showState">{{conditionBuilderState | json}}</div>
		<textarea class="json-container" [(ngModel)]="conditionBuilderStateJson" *ngIf="editState"></textarea>
		<button *ngIf="editState" (click)="updateStateFromJson()">Update state</button>
	</div>


	<n-condition-builder [attributes]="demoItems" [(state)]="conditionBuilderState"></n-condition-builder>
	`,
	styleUrls: ["./condition-builder-demo.component.scss"],
	encapsulation: ViewEncapsulation.None
})
export class ConditionBuilderDemo {
	demoItems = [
		{
			content: "Profile",
			selected: false,
			items: [
				{
					content: "Account id",
					selected: false,
					type: "number"
				},
				{
					content: "Age",
					selected: false,
					type: "number"
				},
				{
					content: "City (enum-single)",
					selected: false,
					type: "enumerated-single",
					hasModifier: true
				},
				{
					content: "City (enum-multi)",
					selected: false,
					type: "enumerated-multi",
					hasModifier: true
				},
				{
					content: "Company",
					selected: false,
					type: "string",
					hasModifier: true
				},
				{
					content: "Date of birth",
					selected: false,
					type: "date"
				},
				{
					content: "Start of work day",
					selected: false,
					type: "time"
				},
				{
					content: "Very important event",
					selected: false,
					type: "date-time"
				}
			]
		},
		{
			content: "Interaction",
			selected: false,
			items: [
				{
					content: "Cart abandonment",
					selected: false
				},
				{
					content: "External message - Been sent a message",
					selected: false
				}
			]
		}
	];

	showState = false;
	editState = false;

	conditionBuilderState = {};
	conditionBuilderStateJson = "";

	constructor(public service: ConditionBuilderService, private demoService: ConditionBuilderDemoService) {}

	updateStateFromJson() {
		this.conditionBuilderState = JSON.parse(this.conditionBuilderStateJson);
	}
}
