import merge from "lodash-es/merge";

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
		return Object.keys(tests).map(i => tests[i]);
	}

	getComponent(fragment, selector) {
		const root = fragment.querySelector(selector);
		return root;
	}
}

export default ComponentTests;
