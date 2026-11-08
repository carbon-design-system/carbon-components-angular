import { TableItem } from "./index";

describe("TableItem", () => {
	it("should use title if defined", () => {
		let tableItem = new TableItem({data: 6, title: "title"});

		expect(tableItem.title).toEqual("title");
	});

	it("should use data if string", () => {
		let tableItem = new TableItem({data: "data"});

		expect(tableItem.title).toEqual("data");
	});

	it("should use toString for native elements", () => {
		let tableItem = new TableItem({data: true});

		expect(tableItem.title).toEqual("true");
	});

	it("should use empty if no data", () => {
		let tableItem = new TableItem({});

		expect(tableItem.title).toEqual("");
	});

	it("should not use toString if not overridden", () => {
		let tableItem = new TableItem({data: {}});

		expect(tableItem.title).toEqual("");
	});

	it("should not use toString if not overridden", () => {
		class TestClass {
			constructor(public i = 0) {
			}
		}
		let tableItem = new TableItem({data: new TestClass()});

		expect(tableItem.title).toEqual("");
	});


	it("should not use toString if not overridden", () => {
		class TestClass {
			constructor(public i: number) {
			}
			toString(): string {
				return `${this.i}`;
			}
		}
		let tableItem = new TableItem({data: new TestClass(4)});

		expect(tableItem.title).toEqual("4");
	});
});
