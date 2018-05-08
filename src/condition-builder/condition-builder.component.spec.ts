import { Component, OnInit } from "@angular/core";
import { DialogModule } from "./../dialog/dialog.module";
import { StaticIconModule } from "..";
import { TestBed } from "@angular/core/testing";
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from "@ngx-translate/core";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";

import { NFormsModule } from "./../forms/forms.module";
import { DropdownModule } from "./../dropdown/dropdown.module";
import { PillInputModule } from "./../pill-input/pill-input.module";

import { ConditionBuilderService } from "./condition-builder.service";
import { ConditionWrapper } from "./condition-wrapper.component";
import { ConditionBuilderPillInput } from "./condition-builder-pill-input.component";
import { ConditionBuilder, Condition } from "./condition-builder.module";

@Component({
	template: `<n-condition-builder [attributes]="demoItems"></n-condition-builder>`
})
class ConditionBuilderTestComponent {
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
}

describe("Condition builder", () => {
	let fixture, conditionBuilderInstance;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				FormsModule,
				NFormsModule,
				DialogModule,
				StaticIconModule,
				DropdownModule,
				PillInputModule,
				TranslateModule.forRoot({
					loader: {
						provide: TranslateLoader, useClass: TranslateFakeLoader
					}
				})
			],
			declarations: [
				ConditionBuilder,
				ConditionWrapper,
				Condition,
				ConditionBuilderPillInput,
				ConditionBuilderTestComponent
			],
			providers: [
				ConditionBuilderService
			]
		});
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ConditionBuilderTestComponent);
		conditionBuilderInstance = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should work", () => {
		fixture = TestBed.createComponent(ConditionBuilder);
		expect(fixture.componentInstance instanceof ConditionBuilder).toBe(true);
	});
});
