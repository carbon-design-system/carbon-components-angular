// custom deep object merge
export const merge = (target, ...objects) => {
	for (const object of objects) {
		for (const key in object) {
			if (object.hasOwnProperty(key)) {
				// since we're dealing just with JSON this simple check should be enough
				if (object[key] instanceof Object) {
					if (!target[key]) {
						target[key] = {};
					}
					// recursively merge into the target
					// most translations only run 3 or 4 levels deep, so no stack explosions
					target[key] = merge(target[key], object[key]);
				} else {
					target[key] = object[key];
				}
			}
		}
	}
	return target;
};
