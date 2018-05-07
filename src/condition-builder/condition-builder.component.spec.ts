import { ConditionBuilder } from "./condition-builder.component";
import { Component, OnInit } from "@angular/core";
import { DialogModule } from "./../dialog/dialog.module";
import { TestBed } from "@angular/core/testing";
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from "@ngx-translate/core";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";

import { NFormsModule } from "./../forms/forms.module";

@Component({
	template: `<n-condition-builder></n-condition-builder>`
})
class TestComponent implements OnInit {
	ngOnInit() {
	}
}

describe("Condition builder", () => {
	let fixture, tableInstance;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				FormsModule,
				NFormsModule,
				DialogModule,
				TranslateModule.forRoot({
					loader: {
						provide: TranslateLoader, useClass: TranslateFakeLoader
					}
				})
			],
			declarations: [
				ConditionBuilder,
				TestComponent
			]
		});

		fixture = TestBed.createComponent(TestComponent);
		tableInstance = fixture.debugElement.query(By.css("n-table"));
		fixture.detectChanges();
	});

	it("should work", () => {
		fixture = TestBed.createComponent(ConditionBuilder);
		expect(fixture.componentInstance instanceof ConditionBuilder).toBe(true);
	});
});
