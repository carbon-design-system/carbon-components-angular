import { TestBed } from "@angular/core/testing";
import { TableModel, TableItem, TableHeaderItem } from "./table.module";

describe("Table", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: []
		});
	});

	it("empty model should have length 0", () => {
		let tableModel  = new TableModel();
		tableModel.data = [[]];

		expect(tableModel.totalDataLength).toEqual(0);
	});

	it("should set rowsSelected when setting data", () => {
		let tableModel  = new TableModel();
		tableModel.data = [
			[new TableItem({data: "A"}), new TableItem({data: "B"})],
			[new TableItem({data: "C"}), new TableItem({data: "D"})]
		];

		expect(tableModel.rowsSelected.length).toEqual(2);
	});

	it("should set rowsContext when setting data", () => {
		let tableModel  = new TableModel();
		tableModel.data = [
			[new TableItem({data: "A"}), new TableItem({data: "B"})],
			[new TableItem({data: "C"}), new TableItem({data: "D"})]
		];

		expect(tableModel.rowsContext.length).toEqual(2);
	});

	it("should set header when setting data", () => {
		let tableModel  = new TableModel();
		tableModel.data = [
			[new TableItem({data: "A"}), new TableItem({data: "B"})],
			[new TableItem({data: "C"}), new TableItem({data: "D"})]
		];

		expect(tableModel.header.length).toEqual(2);
	});

	it("should have same data in same table cell", () => {
		let tableModel  = new TableModel();
		tableModel.data = [
			[new TableItem({data: "A"}), new TableItem({data: "B"}), new TableItem({data: "C"})],
			[new TableItem({data: "D"}), new TableItem({data: "E"}), new TableItem({data: "F"})],
			[new TableItem({data: "G"}), new TableItem({data: "H"}), new TableItem({data: "I"})]
		];

		expect(tableModel.row(1)[1]).toBe(tableModel.column(1)[1]);
	});

	it("should modify the data via row", () => {
		let tableModel  = new TableModel();
		tableModel.data = [
			[new TableItem({data: "A"}), new TableItem({data: "B"}), new TableItem({data: "C"})],
			[new TableItem({data: "D"}), new TableItem({data: "E"}), new TableItem({data: "F"})],
			[new TableItem({data: "G"}), new TableItem({data: "H"}), new TableItem({data: "I"})]
		];

		tableModel.row(1)[1].data = "test";

		expect(tableModel.column(1)[1].data).toEqual("test");
	});

	it("should modify the data via column", () => {
		let tableModel  = new TableModel();
		tableModel.data = [
			[new TableItem({data: "A"}), new TableItem({data: "B"}), new TableItem({data: "C"})],
			[new TableItem({data: "D"}), new TableItem({data: "E"}), new TableItem({data: "F"})],
			[new TableItem({data: "G"}), new TableItem({data: "H"}), new TableItem({data: "I"})]
		];

		tableModel.column(1)[1].data = "test";

		expect(tableModel.row(1)[1].data).toEqual("test");
	});

	it("should modify the data via data", () => {
		let tableModel  = new TableModel();
		tableModel.data = [
			[new TableItem({data: "A"}), new TableItem({data: "B"}), new TableItem({data: "C"})],
			[new TableItem({data: "D"}), new TableItem({data: "E"}), new TableItem({data: "F"})],
			[new TableItem({data: "G"}), new TableItem({data: "H"}), new TableItem({data: "I"})]
		];

		tableModel.data[1][1].data = "test";

		expect(tableModel.column(1)[1].data).toEqual("test");
		expect(tableModel.row(1)[1].data).toEqual("test");
	});


	/* ****************************************************************
	***********                                             ***********
	***********                  SORTING                    ***********
	***********                                             ***********
	***************************************************************** */

	it("should sort data ascending", () => {
		let tableModel = new TableModel();
		tableModel.data = [
			[new TableItem({data: "D"}), new TableItem({data: "E"}), new TableItem({data: "F"})],
			[new TableItem({data: "G"}), new TableItem({data: "H"}), new TableItem({data: "I"})],
			[new TableItem({data: "A"}), new TableItem({data: "B"}), new TableItem({data: "C"})]
		];
		tableModel.rowsSelected[1] = true;
		tableModel.rowsContext[1] = "success";

		tableModel.sort(1);
		expect(tableModel.row(0)).toEqual([new TableItem({data: "A"}), new TableItem({data: "B"}), new TableItem({data: "C"})]);
		expect(tableModel.row(1)).toEqual([new TableItem({data: "D"}), new TableItem({data: "E"}), new TableItem({data: "F"})]);
		expect(tableModel.row(2)).toEqual([new TableItem({data: "G"}), new TableItem({data: "H"}), new TableItem({data: "I"})]);
		expect(tableModel.rowsSelected).toEqual([false, false, true]);
		expect(tableModel.rowsContext).toEqual([undefined, undefined, "success"]);
	});

	it("should sort data descending", () => {
		let tableModel = new TableModel();
		tableModel.data = [
			[new TableItem({data: "D"}), new TableItem({data: "E"}), new TableItem({data: "F"})],
			[new TableItem({data: "G"}), new TableItem({data: "H"}), new TableItem({data: "I"})],
			[new TableItem({data: "A"}), new TableItem({data: "B"}), new TableItem({data: "C"})]
		];
		tableModel.rowsSelected[1] = true;
		tableModel.rowsContext[1] = "success";
		tableModel.header[1].descending = true;

		tableModel.sort(1);
		expect(tableModel.row(0)).toEqual([new TableItem({data: "G"}), new TableItem({data: "H"}), new TableItem({data: "I"})]);
		expect(tableModel.row(1)).toEqual([new TableItem({data: "D"}), new TableItem({data: "E"}), new TableItem({data: "F"})]);
		expect(tableModel.row(2)).toEqual([new TableItem({data: "A"}), new TableItem({data: "B"}), new TableItem({data: "C"})]);
		expect(tableModel.rowsSelected).toEqual([true, false, false]);
		expect(tableModel.rowsContext).toEqual(["success", undefined, undefined]);
	});

	/* ****************************************************************
	***********                                             ***********
	***********                   ROWS                      ***********
	***********                                             ***********
	***************************************************************** */

	it("should get row", () => {
		let tableModel  = new TableModel();
		tableModel.data = [
			[new TableItem({data: "A"}), new TableItem({data: "B"})],
			[new TableItem({data: "C"}), new TableItem({data: "D"})]
		];

		expect(tableModel.row(0)).toEqual([new TableItem({data: "A"}), new TableItem({data: "B"})]);
	});

	it("should get last row", () => {
		let tableModel  = new TableModel();
		tableModel.data = [
			[new TableItem({data: "A"}), new TableItem({data: "B"})],
			[new TableItem({data: "C"}), new TableItem({data: "D"})]
		];

		expect(tableModel.row(-1)).toEqual([new TableItem({data: "C"}), new TableItem({data: "D"})]);
	});


	it("should add empty row to empty table", () => {
		let tableModel  = new TableModel();
		tableModel.addRow();

		expect(tableModel.data.length).toEqual(1);
		expect(tableModel.data[0].length).toEqual(1);
		expect(tableModel.row(0)).toEqual([new TableItem()]);
		expect(tableModel.rowsSelected.length).toEqual(1);
		expect(tableModel.rowsContext.length).toEqual(1);
		expect(tableModel.header.length).toEqual(1);
	});

	it("should add row to empty table", () => {
		let tableModel  = new TableModel();
		tableModel.addRow([new TableItem({data: "A"}), new TableItem({data: "B"})]);

		expect(tableModel.data.length).toEqual(1);
		expect(tableModel.data[0].length).toEqual(2);
		expect(tableModel.row(0)).toEqual([new TableItem({data: "A"}), new TableItem({data: "B"})]);
		expect(tableModel.rowsSelected.length).toEqual(1);
		expect(tableModel.rowsContext.length).toEqual(1);
		expect(tableModel.header.length).toEqual(2);
	});

	it("first and last row in one row table should be the same", () => {
		let tableModel  = new TableModel();
		tableModel.addRow([new TableItem({data: "A"}), new TableItem({data: "B"})]);

		expect(tableModel.row(0)).toBe(tableModel.row(-1));
	});

	it("should add row to the beginning", () => {
		let tableModel  = new TableModel();
		tableModel.data = [
			[new TableItem({data: "A"}), new TableItem({data: "B"})],
			[new TableItem({data: "C"}), new TableItem({data: "D"})]
		];

		tableModel.addRow([new TableItem({data: "E"}), new TableItem({data: "F"})], 0);

		expect(tableModel.row(0)).toEqual([new TableItem({data: "E"}), new TableItem({data: "F"})]);
		expect(tableModel.rowsSelected.length).toEqual(3);
		expect(tableModel.rowsContext.length).toEqual(3);
		expect(tableModel.header.length).toEqual(2);
	});

	it("should add row in the middle", () => {
		let tableModel  = new TableModel();
		tableModel.data = [
			[new TableItem({data: "A"}), new TableItem({data: "B"})],
			[new TableItem({data: "C"}), new TableItem({data: "D"})]
		];

		tableModel.addRow([new TableItem({data: "E"}), new TableItem({data: "F"})], 1);

		expect(tableModel.row(1)).toEqual([new TableItem({data: "E"}), new TableItem({data: "F"})]);
		expect(tableModel.rowsSelected.length).toEqual(3);
		expect(tableModel.rowsContext.length).toEqual(3);
		expect(tableModel.header.length).toEqual(2);
	});

	it("should add row to the end", () => {
		let tableModel  = new TableModel();
		tableModel.data = [
			[new TableItem({data: "A"}), new TableItem({data: "B"})],
			[new TableItem({data: "C"}), new TableItem({data: "D"})]
		];

		tableModel.addRow([new TableItem({data: "E"}), new TableItem({data: "F"})]);

		expect(tableModel.row(-1)).toEqual([new TableItem({data: "E"}), new TableItem({data: "F"})]);
		expect(tableModel.rowsSelected.length).toEqual(3);
		expect(tableModel.rowsContext.length).toEqual(3);
		expect(tableModel.header.length).toEqual(2);
	});

	it("should add shorter row", () => {
		let tableModel  = new TableModel();
		tableModel.data = [
			[new TableItem({data: "A"}), new TableItem({data: "B"})],
			[new TableItem({data: "C"}), new TableItem({data: "D"})]
		];

		tableModel.addRow([new TableItem({data: "E"})]);

		expect(tableModel.row(-1)).toEqual([new TableItem({data: "E"}), new TableItem()]);
		expect(tableModel.rowsSelected.length).toEqual(3);
		expect(tableModel.rowsContext.length).toEqual(3);
		expect(tableModel.header.length).toEqual(2);
	});

	it("should add longer row", () => {
		let tableModel  = new TableModel();
		tableModel.data = [
			[new TableItem({data: "A"}), new TableItem({data: "B"})],
			[new TableItem({data: "C"}), new TableItem({data: "D"})]
		];

		tableModel.addRow([new TableItem({data: "E"}), new TableItem({data: "F"}), new TableItem({data: "G"})]);

		expect(tableModel.row(0)).toEqual([new TableItem({data: "A"}), new TableItem({data: "B"}), new TableItem()]);
		expect(tableModel.row(1)).toEqual([new TableItem({data: "C"}), new TableItem({data: "D"}), new TableItem()]);
		expect(tableModel.row(2)).toEqual([new TableItem({data: "E"}), new TableItem({data: "F"}), new TableItem({data: "G"})]);
		expect(tableModel.rowsSelected.length).toEqual(3);
		expect(tableModel.rowsContext.length).toEqual(3);
		expect(tableModel.header.length).toEqual(3);
	});

	it("should delete first row", () => {
		let tableModel  = new TableModel();
		tableModel.data = [
			[new TableItem({data: "A"}), new TableItem({data: "B"})],
			[new TableItem({data: "C"}), new TableItem({data: "D"})]
		];

		tableModel.deleteRow(0);

		expect(tableModel.row(0)).toEqual([new TableItem({data: "C"}), new TableItem({data: "D"})]);
		expect(tableModel.data.length).toEqual(1);
		expect(tableModel.rowsSelected.length).toEqual(1);
		expect(tableModel.rowsContext.length).toEqual(1);
		expect(tableModel.header.length).toEqual(2);
	});

	it("should delete last row", () => {
		let tableModel  = new TableModel();
		tableModel.data = [
			[new TableItem({data: "A"}), new TableItem({data: "B"})],
			[new TableItem({data: "C"}), new TableItem({data: "D"})]
		];

		tableModel.deleteRow(-1);

		expect(tableModel.row(-1)).toEqual([new TableItem({data: "A"}), new TableItem({data: "B"})]);
		expect(tableModel.data.length).toEqual(1);
		expect(tableModel.rowsSelected.length).toEqual(1);
		expect(tableModel.rowsContext.length).toEqual(1);
		expect(tableModel.header.length).toEqual(2);
	});

	it("should delete middle row", () => {
		let tableModel  = new TableModel();
		tableModel.data = [
			[new TableItem({data: "A"}), new TableItem({data: "B"})],
			[new TableItem({data: "C"}), new TableItem({data: "D"})],
			[new TableItem({data: "E"}), new TableItem({data: "F"})]
		];

		tableModel.deleteRow(1);

		expect(tableModel.row(0)).toEqual([new TableItem({data: "A"}), new TableItem({data: "B"})]);
		expect(tableModel.row(1)).toEqual([new TableItem({data: "E"}), new TableItem({data: "F"})]);
		expect(tableModel.data.length).toEqual(2);
		expect(tableModel.rowsSelected.length).toEqual(2);
		expect(tableModel.rowsContext.length).toEqual(2);
		expect(tableModel.header.length).toEqual(2);
	});



	/* ****************************************************************
	***********                                             ***********
	***********                  COLUMNS                    ***********
	***********                                             ***********
	***************************************************************** */

	it("should get column", () => {
		let tableModel  = new TableModel();
		tableModel.data = [
			[new TableItem({data: "A"}), new TableItem({data: "B"})],
			[new TableItem({data: "C"}), new TableItem({data: "D"})]
		];

		expect(tableModel.column(0)).toEqual([new TableItem({data: "A"}), new TableItem({data: "C"})]);
	});

	it("should get last column", () => {
		let tableModel  = new TableModel();
		tableModel.data = [
			[new TableItem({data: "A"}), new TableItem({data: "B"})],
			[new TableItem({data: "C"}), new TableItem({data: "D"})]
		];

		expect(tableModel.column(-1)).toEqual([new TableItem({data: "B"}), new TableItem({data: "D"})]);
	});


	it("should add empty column to empty table", () => {
		let tableModel  = new TableModel();
		tableModel.addColumn();

		expect(tableModel.data.length).toEqual(1);
		expect(tableModel.data[0].length).toEqual(1);
		expect(tableModel.column(0)).toEqual([new TableItem()]);
		expect(tableModel.rowsSelected.length).toEqual(1);
		expect(tableModel.rowsContext.length).toEqual(1);
		expect(tableModel.header.length).toEqual(1);
	});

	it("should add column to empty table", () => {
		let tableModel  = new TableModel();
		tableModel.addColumn([new TableItem({data: "A"}), new TableItem({data: "B"})]);

		expect(tableModel.data.length).toEqual(2);
		expect(tableModel.data[0].length).toEqual(1);
		expect(tableModel.column(0)).toEqual([new TableItem({data: "A"}), new TableItem({data: "B"})]);
		expect(tableModel.rowsSelected.length).toEqual(2);
		expect(tableModel.rowsContext.length).toEqual(2);
		expect(tableModel.header.length).toEqual(1);
	});

	it("first and last column in one column table should be the same", () => {
		let tableModel  = new TableModel();
		tableModel.addColumn([new TableItem({data: "A"}), new TableItem({data: "B"})]);

		expect(tableModel.column(0)).toEqual(tableModel.column(-1));
	});

	it("should add column to the beginning", () => {
		let tableModel  = new TableModel();
		tableModel.data = [
			[new TableItem({data: "A"}), new TableItem({data: "B"})],
			[new TableItem({data: "C"}), new TableItem({data: "D"})]
		];

		tableModel.addColumn([new TableItem({data: "E"}), new TableItem({data: "F"})], 0);

		expect(tableModel.column(0)).toEqual([new TableItem({data: "E"}), new TableItem({data: "F"})]);
		expect(tableModel.rowsSelected.length).toEqual(2);
		expect(tableModel.rowsContext.length).toEqual(2);
		expect(tableModel.header.length).toEqual(3);
	});

	it("should add column in the middle", () => {
		let tableModel  = new TableModel();
		tableModel.data = [
			[new TableItem({data: "A"}), new TableItem({data: "B"})],
			[new TableItem({data: "C"}), new TableItem({data: "D"})]
		];

		tableModel.addColumn([new TableItem({data: "E"}), new TableItem({data: "F"})], 1);

		expect(tableModel.column(1)).toEqual([new TableItem({data: "E"}), new TableItem({data: "F"})]);
		expect(tableModel.rowsSelected.length).toEqual(2);
		expect(tableModel.rowsContext.length).toEqual(2);
		expect(tableModel.header.length).toEqual(3);
	});

	it("should add column to the end", () => {
		let tableModel  = new TableModel();
		tableModel.data = [
			[new TableItem({data: "A"}), new TableItem({data: "B"})],
			[new TableItem({data: "C"}), new TableItem({data: "D"})]
		];

		tableModel.addColumn([new TableItem({data: "E"}), new TableItem({data: "F"})]);

		expect(tableModel.column(-1)).toEqual([new TableItem({data: "E"}), new TableItem({data: "F"})]);
		expect(tableModel.rowsSelected.length).toEqual(2);
		expect(tableModel.rowsContext.length).toEqual(2);
		expect(tableModel.header.length).toEqual(3);
	});

	it("should add shorter column", () => {
		let tableModel  = new TableModel();
		tableModel.data = [
			[new TableItem({data: "A"}), new TableItem({data: "B"})],
			[new TableItem({data: "C"}), new TableItem({data: "D"})]
		];

		tableModel.addColumn([new TableItem({data: "E"})]);

		expect(tableModel.column(-1)).toEqual([new TableItem({data: "E"}), new TableItem()]);
		expect(tableModel.rowsSelected.length).toEqual(2);
		expect(tableModel.rowsContext.length).toEqual(2);
		expect(tableModel.header.length).toEqual(3);
	});

	it("should add longer column", () => {
		let tableModel  = new TableModel();
		tableModel.data = [
			[new TableItem({data: "A"}), new TableItem({data: "B"})],
			[new TableItem({data: "C"}), new TableItem({data: "D"})]
		];

		tableModel.addColumn([new TableItem({data: "E"}), new TableItem({data: "F"}), new TableItem({data: "G"})]);

		expect(tableModel.column(0)).toEqual([new TableItem({data: "A"}), new TableItem({data: "C"}), new TableItem()]);
		expect(tableModel.column(1)).toEqual([new TableItem({data: "B"}), new TableItem({data: "D"}), new TableItem()]);
		expect(tableModel.column(2)).toEqual([new TableItem({data: "E"}), new TableItem({data: "F"}), new TableItem({data: "G"})]);
		expect(tableModel.rowsSelected.length).toEqual(3);
		expect(tableModel.rowsContext.length).toEqual(3);
		expect(tableModel.header.length).toEqual(3);
	});

	it("should delete first column", () => {
		let tableModel  = new TableModel();
		tableModel.data = [
			[new TableItem({data: "A"}), new TableItem({data: "B"})],
			[new TableItem({data: "C"}), new TableItem({data: "D"})]
		];

		tableModel.deleteColumn(0);

		expect(tableModel.column(0)).toEqual([new TableItem({data: "B"}), new TableItem({data: "D"})]);
		expect(tableModel.data.length).toEqual(2);
		expect(tableModel.rowsSelected.length).toEqual(2);
		expect(tableModel.rowsContext.length).toEqual(2);
		expect(tableModel.header.length).toEqual(1);
	});

	it("should delete last column", () => {
		let tableModel  = new TableModel();
		tableModel.data = [
			[new TableItem({data: "A"}), new TableItem({data: "B"})],
			[new TableItem({data: "C"}), new TableItem({data: "D"})]
		];

		tableModel.deleteColumn(-1);

		expect(tableModel.column(-1)).toEqual([new TableItem({data: "A"}), new TableItem({data: "C"})]);
		expect(tableModel.data.length).toEqual(2);
		expect(tableModel.rowsSelected.length).toEqual(2);
		expect(tableModel.rowsContext.length).toEqual(2);
		expect(tableModel.header.length).toEqual(1);
	});

	it("should delete middle column", () => {
		let tableModel  = new TableModel();
		tableModel.data = [
			[new TableItem({data: "A"}), new TableItem({data: "B"}), new TableItem({data: "C"})],
			[new TableItem({data: "D"}), new TableItem({data: "E"}), new TableItem({data: "F"})]
		];

		tableModel.deleteColumn(1);

		expect(tableModel.column(0)).toEqual([new TableItem({data: "A"}), new TableItem({data: "D"})]);
		expect(tableModel.column(1)).toEqual([new TableItem({data: "C"}), new TableItem({data: "F"})]);
		expect(tableModel.data.length).toEqual(2);
		expect(tableModel.rowsSelected.length).toEqual(2);
		expect(tableModel.rowsContext.length).toEqual(2);
		expect(tableModel.header.length).toEqual(2);
	});

	it("should move column to beginning", () => {
		let tableModel  = new TableModel();
		tableModel.header = [
			new TableHeaderItem({data: "h1"}), new TableHeaderItem({data: "h2"}), new TableHeaderItem({data: "h3"})
		];
		tableModel.data = [
			[new TableItem({data: "A"}), new TableItem({data: "B"}), new TableItem({data: "C"})],
			[new TableItem({data: "D"}), new TableItem({data: "E"}), new TableItem({data: "F"})]
		];

		tableModel.moveColumn(1, 0);

		expect(tableModel.column(0)).toEqual([new TableItem({data: "B"}), new TableItem({data: "E"})]);
		expect(tableModel.column(1)).toEqual([new TableItem({data: "A"}), new TableItem({data: "D"})]);
		expect(tableModel.column(2)).toEqual([new TableItem({data: "C"}), new TableItem({data: "F"})]);
		expect(tableModel.header[0].data).toEqual("h2");
		expect(tableModel.header[1].data).toEqual("h1");
		expect(tableModel.header[2].data).toEqual("h3");
		expect(tableModel.header.length).toEqual(3);
	});

	it("should move column to end", () => {
		let tableModel  = new TableModel();
		tableModel.header = [
			new TableHeaderItem({data: "h1"}), new TableHeaderItem({data: "h2"}), new TableHeaderItem({data: "h3"})
		];
		tableModel.data = [
			[new TableItem({data: "A"}), new TableItem({data: "B"}), new TableItem({data: "C"})],
			[new TableItem({data: "D"}), new TableItem({data: "E"}), new TableItem({data: "F"})]
		];

		tableModel.moveColumn(1, 3);

		expect(tableModel.column(0)).toEqual([new TableItem({data: "A"}), new TableItem({data: "D"})]);
		expect(tableModel.column(1)).toEqual([new TableItem({data: "C"}), new TableItem({data: "F"})]);
		expect(tableModel.column(2)).toEqual([new TableItem({data: "B"}), new TableItem({data: "E"})]);
		expect(tableModel.header[0].data).toEqual("h1");
		expect(tableModel.header[1].data).toEqual("h3");
		expect(tableModel.header[2].data).toEqual("h2");
		expect(tableModel.header.length).toEqual(3);
	});

	it("should move column to left", () => {
		let tableModel  = new TableModel();
		tableModel.header = [
			new TableHeaderItem({data: "h1"}), new TableHeaderItem({data: "h2"}), new TableHeaderItem({data: "h3"})
		];
		tableModel.data = [
			[new TableItem({data: "A"}), new TableItem({data: "B"}), new TableItem({data: "C"})],
			[new TableItem({data: "D"}), new TableItem({data: "E"}), new TableItem({data: "F"})]
		];

		tableModel.moveColumn(2, 1);

		expect(tableModel.column(0)).toEqual([new TableItem({data: "A"}), new TableItem({data: "D"})]);
		expect(tableModel.column(1)).toEqual([new TableItem({data: "C"}), new TableItem({data: "F"})]);
		expect(tableModel.column(2)).toEqual([new TableItem({data: "B"}), new TableItem({data: "E"})]);
		expect(tableModel.header[0].data).toEqual("h1");
		expect(tableModel.header[1].data).toEqual("h3");
		expect(tableModel.header[2].data).toEqual("h2");
		expect(tableModel.header.length).toEqual(3);
	});

	it("should move column to right", () => {
		let tableModel  = new TableModel();
		tableModel.header = [
			new TableHeaderItem({data: "h1"}), new TableHeaderItem({data: "h2"}), new TableHeaderItem({data: "h3"})
		];
		tableModel.data = [
			[new TableItem({data: "A"}), new TableItem({data: "B"}), new TableItem({data: "C"})],
			[new TableItem({data: "D"}), new TableItem({data: "E"}), new TableItem({data: "F"})]
		];

		tableModel.moveColumn(0, 2);

		expect(tableModel.column(0)).toEqual([new TableItem({data: "B"}), new TableItem({data: "E"})]);
		expect(tableModel.column(1)).toEqual([new TableItem({data: "A"}), new TableItem({data: "D"})]);
		expect(tableModel.column(2)).toEqual([new TableItem({data: "C"}), new TableItem({data: "F"})]);
		expect(tableModel.header[0].data).toEqual("h2");
		expect(tableModel.header[1].data).toEqual("h1");
		expect(tableModel.header[2].data).toEqual("h3");
		expect(tableModel.header.length).toEqual(3);
	});
});
