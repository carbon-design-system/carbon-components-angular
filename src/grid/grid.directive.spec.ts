import { async, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { TestGridComponent } from "./grid-test.component";
import { ColumnDirective, GridDirective, RowDirective } from "./grid.directive";

describe("Grid Directive", () => {
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
				template: "<div ibmGrid class='test-directive'></div>"
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
				template: "<div ibmRow class='test-directive'></div>"
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
				"<div ibmCol [offsets]='{\"md\": 2}' [columnNumbers]='{\"lg\":3, \"md\": \"nobreak\"}' class='test-directive'></div>"
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
				"bx--col-lg-3 bx--col-md bx--offset-md-2 test-directive"
			);
		});
	}));
});
