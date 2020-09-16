const getMembersByDecoratorName = (groups, name) => {
	let members = [];
	if (Array.isArray(groups)) {
		for (const group of groups) {
			for (const child of group.children) {
				if (child.decorators) {
					if (child.decorators.some((value) => value.name === name)) {
						members.push(child);
					}
				}
			}
		}
	}
	return members;
}

module.exports = {
	toJSON: function(object) {
		return JSON.stringify(object, (key, value) => {
			if (typeof value === 'string') {
				return value.replace(/"/g, '');
			}
			return value;
		}, '');
	},
	isEmpty: function(object, options) {
		if (Object.entries(object).length === 0) {
			return options.fn(this);
		}
		return options.inverse(this);
	},
	info: function(groups) {
		if (Array.isArray(groups)) {
			for (const group of groups) {
				for (const child of group.children) {
					if (child.decorators) {
						const clone = Object.assign({}, child);
						delete clone.parent;
						delete clone.children;
						delete clone.groups;
						console.log(clone);
					}
				}
			}
		}
	},
	withInputs: function(groups, options) {
		const members = getMembersByDecoratorName(groups, "Input");
		return options.fn({members})
	},
	withOutputs: function(groups, options) {
		const members = getMembersByDecoratorName(groups, "Output");
		return options.fn({ members })
	},
	hasInputs: function(groups, options) {
		const members = getMembersByDecoratorName(groups, "Input");
		if (members.length > 0) {
			return options.fn(this);
		}
		return options.inverse(this);
	},
	hasOutputs: function (groups, options) {
		const members = getMembersByDecoratorName(groups, "Output");
		if (members.length > 0) {
			return options.fn(this);
		}
		return options.inverse(this);
	}
}
