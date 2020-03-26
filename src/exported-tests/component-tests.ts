class ComponentTests {
	static defaults = {
		selectors: {
			root: ""
		},
		classes: {}
	};

	static getTests(tests) {
		return Object.keys(tests).map(i => tests[i]);
	}

	static getComponent(fragment, selector) {
		const root = fragment.querySelector(selector);
		return root;
	}

	constructor() {
		(this as any).tests = [];
		this.bindFunctions();
	}

	bindFunctions() {
		// Bind functions
		const publicFunctions = {
			getComponent: (this.constructor as typeof ComponentTests).getComponent,
			getTests: (this.constructor as typeof ComponentTests).getTests
		};

		Object.keys(publicFunctions).forEach(name => {
			this.constructor[name] = publicFunctions[name].bind(this);
		});
	}
}

export default ComponentTests;
