import { expect } from "chai";

import merge from "lodash/merge";

import ComponentTests from "../exported-tests/component-tests";

const defaults = {
	selectors: {
		root: "cds-checkbox",
		input: "input"
	}
};

class CheckboxExportedTests extends ComponentTests {
	constructor(configs) {
		super(merge({}, defaults, configs));
		this.tests = this.tests.concat(this.structure());
	}

	structure() {
		const tests = [
			{
				name: "initially be unchecked, be checked on click",
				getActual: fragment =>
					new Promise(resolve => {
						const component = this.getComponent(
							fragment,
							`${this.settings.selectors.root} ${this.settings.selectors.input}`
						);
						const initialState = component.checked;
						component.click();
						const afterClickState = component.checked;
						resolve({
							initialState,
							afterClickState
						});
					}),
				runComparison: results => {
					// tslint:disable-next-line
					expect(results.initialState).to.be.false;
					// tslint:disable-next-line
					expect(results.afterClickState).to.be.true;
				}
			}
		];
		return [{
			name: "Basic checkbox tests",
			tests: this.getTests(tests)
		}];
	}
}

export default CheckboxExportedTests;
