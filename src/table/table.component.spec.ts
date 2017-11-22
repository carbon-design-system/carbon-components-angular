import { DialogModule } from "./../dialog/dialog.module";
import { TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { TableModule } from "./table.module";
import { Table } from "./table.component";
import { By } from "@angular/platform-browser";

import { NFormsModule } from "./../forms/forms.module";

describe("Table", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				FormsModule,
				NFormsModule,
				DialogModule
			],
			declarations: [Table]
		});
	});

	it("should work", () => {
		let fixture = TestBed.createComponent(Table);
		expect(fixture.componentInstance instanceof Table).toBe(true);
	});

	it("should call the row sort function", () => {

	});

	it("should call the row filter function", () => {

	});
});
