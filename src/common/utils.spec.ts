import * as utils from "./utils";

describe("utils", () => {
	it("range should work", () => {
		expect(utils.range(5)).toEqual([0, 1, 2, 3, 4]);
	});

	it("range with start should work", () => {
		expect(utils.range(5, 2)).toEqual([2, 3, 4]);
	});

	it("range with step should work", () => {
		expect(utils.range(5, 0, 2)).toEqual([0, 2, 4]);
	});

	it("range with start and step should work", () => {
		expect(utils.range(7, 2, 2)).toEqual([2, 4, 6]);
	});

	it("range with negative step should work", () => {
		expect(utils.range(-5, 0, -1)).toEqual([0, -1, -2, -3, -4]);
	});

	it("range with negative start and step should work", () => {
		expect(utils.range(-5, -1, -1)).toEqual([-1, -2, -3, -4]);
	});

	it("range with positive start and negative end and step should work", () => {
		expect(utils.range(-5, 1, -1)).toEqual([1, 0, -1, -2, -3, -4]);
	});
});
