import { expect } from "chai";

import ComponentTests from "../exported-tests/component-tests";

class CheckboxExportedTests extends ComponentTests {
	static structure() {
		const tests = {
			checked: {
				name: "Set checked to true when clicked",
				getActual: fragment =>
					new Promise(resolve => {
						const component = this.getComponent(fragment, "ibm-checkbox input");
						const initialState = component.checked;
						component.click();
						const afterClickState = component.checked;
						resolve({
							initialState,
							afterClickState
						});
					}),
				runComparison: results => {
					expect(results.initialState).to.be.false;
					expect(results.afterClickState).to.be.true;
				}
			}
		};
		return [{
			name: "Basic checkbox tests",
			tests: this.getTests(tests)
		}];
	}

	constructor() {
		super();
		(this as any).tests = (this as any).tests.concat((this.constructor as typeof CheckboxExportedTests).structure());
	}
}

export default CheckboxExportedTests;
