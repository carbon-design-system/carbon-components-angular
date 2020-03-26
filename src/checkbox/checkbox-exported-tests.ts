import { expect } from "chai";

class CheckboxExportedTests {
	private _tests = {
		checked: {
			name: "Set checked to false",
			getActual: fragment =>
				new Promise(resolve => {
					const component = fragment.querySelector("ibm-checkbox input");
					const checked = component.getAttribute("aria-checked");
					resolve({
						checked
					});
				}),
			runComparison: results => {
				console.log(results);
				expect(results.checked).to.equal("false");
			}
		}
	};

	get tests() {
		return [{
			name: "Basic checkbox tests",
			tests: Object.keys(this._tests).map(i => this._tests[i])
		}];
	}
}

export default CheckboxExportedTests;
