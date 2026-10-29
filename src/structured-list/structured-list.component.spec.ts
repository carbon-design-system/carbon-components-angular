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
		<cds-structured-list
			flushed="true"
			[condensed]="condensed"
			selection="true"
			[(ngModel)]="valueSelected"
			(selected)="onSelected()">
			<cds-list-header>
				<cds-list-column nowrap="true">Column 1</cds-list-column>
				<cds-list-column nowrap="true">Column 2</cds-list-column>
				<cds-list-column>Column 3</cds-list-column>
			</cds-list-header>
			<cds-list-row value="row1">
				<cds-list-column>Row 1</cds-list-column>
				<cds-list-column nowrap="true">Row One</cds-list-column>
				<cds-list-column>Test</cds-list-column>
			</cds-list-row>
			<cds-list-row value="row2">
				<cds-list-column>Row 2</cds-list-column>
				<cds-list-column nowrap="true">Row Two</cds-list-column>
				<cds-list-column>Test</cds-list-column>
			</cds-list-row>
		</cds-structured-list>
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
		element = fixture.debugElement.query(By.css("cds-structured-list"));
		expect(element.nativeElement.querySelector(".cds--structured-list--flush")).toBeTruthy();
	});

	it("should change valueSelected to row1 on click and emit selected event", () => {
		fixture = TestBed.createComponent(StructuredListTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-structured-list"));
		spyOn(wrapper, "onSelected");
		element.nativeElement.querySelector("cds-list-row").click();
		fixture.detectChanges();
		expect(wrapper.valueSelected).toEqual("row1");
		expect(wrapper.onSelected).toHaveBeenCalled();
	});

	it("should set cds--structured-list--condensed class", () => {
		fixture = TestBed.createComponent(StructuredListTest);
		wrapper = fixture.componentInstance;
		wrapper.condensed = true;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-structured-list"));
		expect(element.nativeElement.querySelector(".cds--structured-list--condensed")).toBeTruthy();
	});

	it("should deselect the previously selected row", () => {
		fixture = TestBed.createComponent(StructuredListTest);
		fixture.detectChanges();
		const rows = fixture.debugElement.queryAll(By.directive(ListRow));
		const inputs = fixture.nativeElement.querySelectorAll("input[type=radio]");

		inputs[0].dispatchEvent(new Event("change"));
		fixture.detectChanges();
		expect(rows[0].componentInstance.selected).toBe(true);
		expect(rows[0].nativeElement.classList).toContain("cds--structured-list-row--selected");

		inputs[1].dispatchEvent(new Event("change"));
		fixture.detectChanges();

		expect(rows[0].componentInstance.selected).toBe(false);
		expect(rows[0].nativeElement.classList).not.toContain("cds--structured-list-row--selected");
		expect(rows[1].componentInstance.selected).toBe(true);
		expect(rows[1].nativeElement.classList).toContain("cds--structured-list-row--selected");
	});

	it("should select the row matching a value written by the form", () => {
		fixture = TestBed.createComponent(StructuredListTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-structured-list"));

		element.componentInstance.writeValue("row2");
		fixture.detectChanges();

		const rows = fixture.debugElement.queryAll(By.directive(ListRow));
		expect(rows[1].componentInstance.selected).toBe(true);
		expect(rows[1].nativeElement.classList).toContain("cds--structured-list-row--selected");
	});
});
