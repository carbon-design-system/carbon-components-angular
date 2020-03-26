import { expect } from "chai";

import ComponentTests from "../exported-tests/component-tests";

class CheckboxExportedTests extends ComponentTests {
	static getComponent(fragment, selectors) {
		return super.getComponent(fragment, selectors);
	}

	static structure(settings) {
		const tests = {
			checked: {
				name: "initially be unchecked, be checked on click",
				getActual: fragment =>
					new Promise(resolve => {
						const component = this.getComponent(fragment, `${settings.selectors.root} ${settings.selectors.input}`);
						const initialState = component.checked;
						component.click();
						const afterClickState = component.checked;
						resolve({
							initialState,
							afterClickState
						});
					}),
				runComparison: results => {
					/* tslint:disable-next-line */
					expect(results.initialState).to.be.false;
					/* tslint:disable-next-line */
					expect(results.afterClickState).to.be.true;
				}
			}
		};
		return [{
			name: "Basic checkbox tests",
			tests: this.getTests(tests)
		}];
	}

	constructor(configs) {
		super(configs);
		(this as any).tests = (this as any).tests.concat((this.constructor as typeof CheckboxExportedTests).structure((this as any).settings));
	}
}

export default CheckboxExportedTests;
