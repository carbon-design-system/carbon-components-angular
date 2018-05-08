import { Injectable } from "@angular/core";

@Injectable()
export class ConditionBuilderService {
	getEmptyCondition(attributes, state = null) {
		return {
			conditionState: state || {
				attributes: attributes
			},
			// attributes: attributes,
			operator: "",
			items: null
		};
	}

	getWrapAndAdd(condition, operator, attributes) {
		return {
			conditionState: null,
			// attributes: attributes,
			operator: operator,
			items: [
				{
					conditionState: condition.state,
					// attributes: attributes,
					operator: "",
					items: null
				},
				this.getEmptyCondition(attributes)
			]
		};
	}

	getDuplicated(condition, operator = "and") {
		return {
			conditionState: null,
			// attributes: attributes,
			operator: operator,
			items: [
				{
					conditionState: condition.state,
					// attributes: attributes,
					operator: "",
					items: null
				},
				{
					conditionState: condition.state,
					// attributes: attributes,
					operator: "",
					items: null
				}
			]
		};
	}
}
