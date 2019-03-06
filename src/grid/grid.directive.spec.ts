import { Component } from "@angular/core";
import { async, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { ColumnDirective, GridDirective, RowDirective } from "./grid.directive";

@Component({
	selector: "ibm-test-grid",
	template: ""
})
class TestGridComponent {}

describe("GridDirective", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				TestGridComponent,
				GridDirective,
				RowDirective,
				ColumnDirective
			]
		});
	});

	it("should render a grid", async(() => {
		TestBed.overrideComponent(TestGridComponent, {
			set: {
				template: `<div ibmGrid></div>`
			}
		});

		TestBed.compileComponents().then(() => {
			const fixture = TestBed.createComponent(TestGridComponent);
			const directiveEl = fixture.debugElement.query(
				By.directive(GridDirective)
			);
			fixture.detectChanges();

			expect(directiveEl).not.toBeNull();
		});
	}));

	it("should render a row", async(() => {
		TestBed.overrideComponent(TestGridComponent, {
			set: {
				template: `<div ibmRow></div>`
			}
		});

		TestBed.compileComponents().then(() => {
			const fixture = TestBed.createComponent(TestGridComponent);
			const directiveEl = fixture.debugElement.query(
				By.directive(RowDirective)
			);
			fixture.detectChanges();

			expect(directiveEl).not.toBeNull();
		});
	}));

	it("should render a column", async(() => {
		TestBed.overrideComponent(TestGridComponent, {
			set: {
				template:
				`<div ibmCol [offsets]="{'md': 2}" [columnNumbers]="{'lg': 3, 'md': 'nobreak'}" class='custom-class-example'></div>`
			}
		});

		TestBed.compileComponents().then(() => {
			const fixture = TestBed.createComponent(TestGridComponent);
			const directiveEl = fixture.debugElement.query(
				By.directive(ColumnDirective)
			);
			fixture.detectChanges();

			expect(directiveEl).not.toBeNull();

			const directiveInstance = directiveEl.injector.get(ColumnDirective);
			expect(directiveInstance.columnClasses).toBe(
				"bx--col-lg-3 bx--col-md bx--offset-md-2 custom-class-example"
			);
		});
	}));
});
