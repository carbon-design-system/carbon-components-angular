/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @type {?} */
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
                }
                else {
                    target[key] = object[key];
                }
            }
        }
    }
    return target;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FyYm9uLWNvbXBvbmVudHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbInV0aWxzL29iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLGFBQWEsS0FBSyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsT0FBTyxFQUFFLEVBQUU7SUFDM0MsS0FBSyxNQUFNLE1BQU0sSUFBSSxPQUFPLEVBQUU7UUFDN0IsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUU7WUFDekIsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFOztnQkFFL0IsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLFlBQVksTUFBTSxFQUFFO29CQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUNqQixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO3FCQUNqQjs7O29CQUdELE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUM5QztxQkFBTTtvQkFDTixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUMxQjthQUNEO1NBQ0Q7S0FDRDtJQUNELE9BQU8sTUFBTSxDQUFDO0NBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGN1c3RvbSBkZWVwIG9iamVjdCBtZXJnZVxuZXhwb3J0IGNvbnN0IG1lcmdlID0gKHRhcmdldCwgLi4ub2JqZWN0cykgPT4ge1xuXHRmb3IgKGNvbnN0IG9iamVjdCBvZiBvYmplY3RzKSB7XG5cdFx0Zm9yIChjb25zdCBrZXkgaW4gb2JqZWN0KSB7XG5cdFx0XHRpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdFx0Ly8gc2luY2Ugd2UncmUgZGVhbGluZyBqdXN0IHdpdGggSlNPTiB0aGlzIHNpbXBsZSBjaGVjayBzaG91bGQgYmUgZW5vdWdoXG5cdFx0XHRcdGlmIChvYmplY3Rba2V5XSBpbnN0YW5jZW9mIE9iamVjdCkge1xuXHRcdFx0XHRcdGlmICghdGFyZ2V0W2tleV0pIHtcblx0XHRcdFx0XHRcdHRhcmdldFtrZXldID0ge307XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIHJlY3Vyc2l2ZWx5IG1lcmdlIGludG8gdGhlIHRhcmdldFxuXHRcdFx0XHRcdC8vIG1vc3QgdHJhbnNsYXRpb25zIG9ubHkgcnVuIDMgb3IgNCBsZXZlbHMgZGVlcCwgc28gbm8gc3RhY2sgZXhwbG9zaW9uc1xuXHRcdFx0XHRcdHRhcmdldFtrZXldID0gbWVyZ2UodGFyZ2V0W2tleV0sIG9iamVjdFtrZXldKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0YXJnZXRba2V5XSA9IG9iamVjdFtrZXldO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0YXJnZXQ7XG59O1xuIl19