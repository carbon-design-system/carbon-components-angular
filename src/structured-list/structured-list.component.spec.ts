import { TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Component } from "@angular/core";
import { StructuredList } from "./structured-list.component";
import { ListRow } from "./list-row.component";
import { ListHeader } from "./list-header.component";
import { ListColumn } from "./list-column.component";
import { IconModule } from "../icon/index";

@Component({
	template: `
		<ibm-structured-list
			flushed="true"
			[condensed]="condensed"
			selection="true"
			[(ngModel)]="valueSelected"
			(selected)="onSelected()">
			<ibm-list-header>
				<ibm-list-column nowrap="true">Column 1</ibm-list-column>
				<ibm-list-column nowrap="true">Column 2</ibm-list-column>
				<ibm-list-column>Column 3</ibm-list-column>
			</ibm-list-header>
			<ibm-list-row value="row1">
				<ibm-list-column>Row 1</ibm-list-column>
				<ibm-list-column nowrap="true">Row One</ibm-list-column>
				<ibm-list-column>Test</ibm-list-column>
			</ibm-list-row>
			<ibm-list-row value="row2">
				<ibm-list-column>Row 2</ibm-list-column>
				<ibm-list-column nowrap="true">Row Two</ibm-list-column>
				<ibm-list-column>Test</ibm-list-column>
			</ibm-list-row>
		</ibm-structured-list>
	`
})
class StructuredListTest {
	valueSelected = null;
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
				IconModule
			]
		});
	});

	it("should work", () => {
		fixture = TestBed.createComponent(StructuredList);
		expect(fixture.componentInstance instanceof StructuredList).toBe(true);
	});

	it("should set cds--structured-list--flushed class", () => {
		fixture = TestBed.createComponent(StructuredListTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("ibm-structured-list"));
		expect(element.nativeElement.querySelector(".cds--structured-list--flush")).toBeTruthy();
	});

	it("should change valueSelected to row1 on click and emit selected event", () => {
		fixture = TestBed.createComponent(StructuredListTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("ibm-structured-list"));
		spyOn(wrapper, "onSelected");
		element.nativeElement.querySelector("ibm-list-row").click();
		fixture.detectChanges();
		expect(wrapper.valueSelected).toEqual("row1");
		expect(wrapper.onSelected).toHaveBeenCalled();
	});

	it("should set cds--structured-list--condensed class", () => {
		fixture = TestBed.createComponent(StructuredListTest);
		wrapper = fixture.componentInstance;
		wrapper.condensed = true;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("ibm-structured-list"));
		expect(element.nativeElement.querySelector(".cds--structured-list--condensed")).toBeTruthy();
	});
});
