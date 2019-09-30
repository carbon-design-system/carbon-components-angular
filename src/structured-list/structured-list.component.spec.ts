import { TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Component } from "@angular/core";
import { StructuredList } from "./structured-list.component";
import { ListRow } from "./list-row.component";
import { ListHeader } from "./list-header.component";
import { ListColumn } from "./list-column.component";
import { CheckmarkFilled16Module } from "@carbon/icons-angular/lib/checkmark--filled/16";
import { wrappedError } from "@angular/core/src/error_handler";

@Component({
	template: `
		<ibm-structured-list
			border="true"
			[condensed]="condensed"
			nowrap="false"
			selection="true"
			[(ngModel)]="valueSelected"
			(selected)="onSelected()"
			>
			<ibm-list-header>
				<ibm-list-column nowrap="true">Column 1</ibm-list-column>
				<ibm-list-column nowrap="true">Column 2</ibm-list-column>
				<ibm-list-column>Column 3</ibm-list-column>
			</ibm-list-header>
			<ibm-list-row value="row1">
				<ibm-list-column>Row 1</ibm-list-column>
				<ibm-list-column nowrap="true">Row One</ibm-list-column>
				<ibm-list-column>
					Test
				</ibm-list-column>
			</ibm-list-row>
			<ibm-list-row value="row2">
				<ibm-list-column>Row 2</ibm-list-column>
				<ibm-list-column nowrap="true">Row Two</ibm-list-column>
				<ibm-list-column>
					Test
				</ibm-list-column>
			</ibm-list-row>
			<p class="test">{{valueSelected}}</p>
		</ibm-structured-list>
	`
})
class StructuredListTest {
	valueSelected = "row2";
	condensed = false;
	onSelected() {}
}

describe("StructuredList", () => {
	let fixture, wrapper, element;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				StructuredList,
				StructuredListTest,
				ListRow,
				ListHeader,
				ListColumn
			],

			imports: [
				FormsModule,
				CheckmarkFilled16Module
			]
		});
	});

	it("should work", () => {
		fixture = TestBed.createComponent(StructuredList);
		expect(fixture.componentInstance instanceof StructuredList).toBe(true);
	});

	it("should set bx--structured-list--border class", () => {
		fixture = TestBed.createComponent(StructuredListTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("ibm-structured-list"));
		expect(element.nativeElement.querySelector(".bx--structured-list--border")).toBeTruthy();
	});

	it("should change valueSelected to row1 on click and call onSelected", () => {
		fixture = TestBed.createComponent(StructuredListTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("ibm-structured-list"));
		spyOn(wrapper, "onSelected");
		element.nativeElement.querySelector("ibm-list-row").click();
		fixture.detectChanges();
		expect(element.nativeElement.querySelector(".test").textContent).toEqual("row1");
		expect(wrapper.onSelected).toHaveBeenCalled();
	});

	it("should set valueSelected to row1 and change to row2", () => {
		fixture = TestBed.createComponent(StructuredListTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("ibm-structured-list"));
		expect(element.nativeElement.querySelector(".test").textContent).toEqual("row2");
		wrapper.valueSelected = "row1";
		fixture.detectChanges();
		expect(element.nativeElement.querySelector(".test").textContent).toEqual("row1");
	});

	it("should set bx--structured-list-content--nowrap class", () => {
		fixture = TestBed.createComponent(StructuredListTest);
		fixture.detectChanges();
		wrapper = fixture.componentInstance;
		wrapper.condensed = true;
		element = fixture.debugElement.query(By.css("ibm-structured-list"));
		expect(element.nativeElement.querySelector(".bx--structured-list-content--nowrap")).toBeTruthy();
	});
});
