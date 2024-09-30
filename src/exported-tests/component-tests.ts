import merge from "lodash-es/merge";

function isObject(val) {
	if (val === null) {
		return false;
	}
	return typeof val === "function" || typeof val === "object";
}

class ComponentTests {
	static defaults = {
		selectors: {
			root: ""
		},
		classes: {}
	};
	settings: any = {};
	tests: any[] = [];

	constructor(configs = {}) {
		this.settings = merge({}, ComponentTests.defaults, configs);
	}

	getTests(tests) {
		if (isObject(tests)) {
			return Object.keys(tests).map(i => tests[i]);
		}
		return tests;
	}

	getComponent(fragment, selector) {
		const root = fragment.querySelector(selector);
		return root;
	}
}

export default ComponentTests;
