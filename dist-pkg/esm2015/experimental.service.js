/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from "@angular/core";
/**
 * Represents options for an experiment. The only required property is `enabled`, however other options may be supplied.
 * @record
 */
export function Experiment() { }
function Experiment_tsickle_Closure_declarations() {
    /** @type {?} */
    Experiment.prototype.enabled;
    /* TODO: handle strange member:
    [key: string]: any;
    */
}
export class ExperimentalService {
    constructor() {
        /**
         * Map to hold all our experiments
         */
        this.experiments = new Map();
    }
    /**
     * Sets the v10 experimental mode
     * @deprecated since v3
     * @param {?} v
     * @return {?}
     */
    set isExperimental(v) {
        ExperimentalService.experimentalEnabled = v;
    }
    /**
     * Gets the state of the v10 experimental mode
     * @deprecated since v3
     * @return {?}
     */
    get isExperimental() {
        return ExperimentalService.experimentalEnabled;
    }
    /**
     * Adds an experiment if it doesn't exist.
     * @param {?} name
     * @param {?=} options
     * @return {?}
     */
    addExperiment(name, options = { enabled: false }) {
        if (!this.experiments.has(name)) {
            this.experiments.set(name, options);
        }
    }
    /**
     * Enables an experiment by name
     * @param {?} name name of the experiment to enable
     * @return {?}
     */
    enableExperiment(name) {
        /** @type {?} */
        const experiment = this.getExperiment(name);
        experiment.enabled = true;
    }
    /**
     * Disables an experiment by name
     * @param {?} name name of the experiment to disable
     * @return {?}
     */
    disableExperiment(name) {
        /** @type {?} */
        const experiment = this.getExperiment(name);
        experiment.enabled = false;
    }
    /**
     * Get the options for an experiment by name
     * @param {?} name name of experiment to get
     * @return {?}
     */
    getExperiment(name) {
        if (!this.experiments.has(name)) {
            this.addExperiment(name);
            return this.getExperiment(name);
        }
        return this.experiments.get(name);
    }
    /**
     * Get an array of tuples representing an experiment and it's options
     * @return {?}
     */
    getExperiments() {
        return Array.from(this.experiments.entries());
    }
}
/**
 * Tracks if the v10 experimental mode is enabled
 * @deprecated since v3
 */
ExperimentalService.experimentalEnabled = true;
ExperimentalService.decorators = [
    { type: Injectable }
];
function ExperimentalService_tsickle_Closure_declarations() {
    /**
     * Tracks if the v10 experimental mode is enabled
     * @deprecated since v3
     * @type {?}
     */
    ExperimentalService.experimentalEnabled;
    /**
     * Map to hold all our experiments
     * @type {?}
     */
    ExperimentalService.prototype.experiments;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZXJpbWVudGFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJib24tY29tcG9uZW50cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsiZXhwZXJpbWVudGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFXM0MsTUFBTTs7Ozs7MkJBMEJpQixJQUFJLEdBQUcsRUFBc0I7Ozs7Ozs7O0lBZm5ELElBQUksY0FBYyxDQUFDLENBQVU7UUFDNUIsbUJBQW1CLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO0tBQzVDOzs7Ozs7SUFNRCxJQUFJLGNBQWM7UUFDakIsT0FBTyxtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQztLQUMvQzs7Ozs7OztJQVVELGFBQWEsQ0FBQyxJQUFZLEVBQUUsVUFBc0IsRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFDO1FBQ2pFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDcEM7S0FDRDs7Ozs7O0lBTUQsZ0JBQWdCLENBQUMsSUFBWTs7UUFDNUIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztLQUMxQjs7Ozs7O0lBTUQsaUJBQWlCLENBQUMsSUFBWTs7UUFDN0IsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxVQUFVLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztLQUMzQjs7Ozs7O0lBTUQsYUFBYSxDQUFDLElBQVk7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hDO1FBRUQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNsQzs7Ozs7SUFLRCxjQUFjO1FBQ2IsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztLQUM5Qzs7Ozs7OzBDQXBFNEIsSUFBSTs7WUFOakMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgb3B0aW9ucyBmb3IgYW4gZXhwZXJpbWVudC4gVGhlIG9ubHkgcmVxdWlyZWQgcHJvcGVydHkgaXMgYGVuYWJsZWRgLCBob3dldmVyIG90aGVyIG9wdGlvbnMgbWF5IGJlIHN1cHBsaWVkLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEV4cGVyaW1lbnQge1xuXHRlbmFibGVkOiBib29sZWFuO1xuXHRba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFeHBlcmltZW50YWxTZXJ2aWNlIHtcblx0LyoqXG5cdCAqIFRyYWNrcyBpZiB0aGUgdjEwIGV4cGVyaW1lbnRhbCBtb2RlIGlzIGVuYWJsZWRcblx0ICogQGRlcHJlY2F0ZWQgc2luY2UgdjNcblx0ICovXG5cdHN0YXRpYyBleHBlcmltZW50YWxFbmFibGVkID0gdHJ1ZTtcblxuXHQvKipcblx0ICogU2V0cyB0aGUgdjEwIGV4cGVyaW1lbnRhbCBtb2RlXG5cdCAqIEBkZXByZWNhdGVkIHNpbmNlIHYzXG5cdCAqL1xuXHRzZXQgaXNFeHBlcmltZW50YWwodjogYm9vbGVhbikge1xuXHRcdEV4cGVyaW1lbnRhbFNlcnZpY2UuZXhwZXJpbWVudGFsRW5hYmxlZCA9IHY7XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyB0aGUgc3RhdGUgb2YgdGhlIHYxMCBleHBlcmltZW50YWwgbW9kZVxuXHQgKiBAZGVwcmVjYXRlZCBzaW5jZSB2M1xuXHQgKi9cblx0Z2V0IGlzRXhwZXJpbWVudGFsKCkge1xuXHRcdHJldHVybiBFeHBlcmltZW50YWxTZXJ2aWNlLmV4cGVyaW1lbnRhbEVuYWJsZWQ7XG5cdH1cblxuXHQvKipcblx0ICogTWFwIHRvIGhvbGQgYWxsIG91ciBleHBlcmltZW50c1xuXHQgKi9cblx0cHJpdmF0ZSBleHBlcmltZW50cyA9IG5ldyBNYXA8c3RyaW5nLCBFeHBlcmltZW50PigpO1xuXG5cdC8qKlxuXHQgKiBBZGRzIGFuIGV4cGVyaW1lbnQgaWYgaXQgZG9lc24ndCBleGlzdC5cblx0ICovXG5cdGFkZEV4cGVyaW1lbnQobmFtZTogc3RyaW5nLCBvcHRpb25zOiBFeHBlcmltZW50ID0ge2VuYWJsZWQ6IGZhbHNlfSkge1xuXHRcdGlmICghdGhpcy5leHBlcmltZW50cy5oYXMobmFtZSkpIHtcblx0XHRcdHRoaXMuZXhwZXJpbWVudHMuc2V0KG5hbWUsIG9wdGlvbnMpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBFbmFibGVzIGFuIGV4cGVyaW1lbnQgYnkgbmFtZVxuXHQgKiBAcGFyYW0gbmFtZSBuYW1lIG9mIHRoZSBleHBlcmltZW50IHRvIGVuYWJsZVxuXHQgKi9cblx0ZW5hYmxlRXhwZXJpbWVudChuYW1lOiBzdHJpbmcpIHtcblx0XHRjb25zdCBleHBlcmltZW50ID0gdGhpcy5nZXRFeHBlcmltZW50KG5hbWUpO1xuXHRcdGV4cGVyaW1lbnQuZW5hYmxlZCA9IHRydWU7XG5cdH1cblxuXHQvKipcblx0ICogRGlzYWJsZXMgYW4gZXhwZXJpbWVudCBieSBuYW1lXG5cdCAqIEBwYXJhbSBuYW1lIG5hbWUgb2YgdGhlIGV4cGVyaW1lbnQgdG8gZGlzYWJsZVxuXHQgKi9cblx0ZGlzYWJsZUV4cGVyaW1lbnQobmFtZTogc3RyaW5nKSB7XG5cdFx0Y29uc3QgZXhwZXJpbWVudCA9IHRoaXMuZ2V0RXhwZXJpbWVudChuYW1lKTtcblx0XHRleHBlcmltZW50LmVuYWJsZWQgPSBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIG9wdGlvbnMgZm9yIGFuIGV4cGVyaW1lbnQgYnkgbmFtZVxuXHQgKiBAcGFyYW0gbmFtZSBuYW1lIG9mIGV4cGVyaW1lbnQgdG8gZ2V0XG5cdCAqL1xuXHRnZXRFeHBlcmltZW50KG5hbWU6IHN0cmluZyk6IEV4cGVyaW1lbnQge1xuXHRcdGlmICghdGhpcy5leHBlcmltZW50cy5oYXMobmFtZSkpIHtcblx0XHRcdHRoaXMuYWRkRXhwZXJpbWVudChuYW1lKTtcblx0XHRcdHJldHVybiB0aGlzLmdldEV4cGVyaW1lbnQobmFtZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZXhwZXJpbWVudHMuZ2V0KG5hbWUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbiBhcnJheSBvZiB0dXBsZXMgcmVwcmVzZW50aW5nIGFuIGV4cGVyaW1lbnQgYW5kIGl0J3Mgb3B0aW9uc1xuXHQgKi9cblx0Z2V0RXhwZXJpbWVudHMoKTogQXJyYXk8W3N0cmluZywgRXhwZXJpbWVudF0+IHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmV4cGVyaW1lbnRzLmVudHJpZXMoKSk7XG5cdH1cbn1cbiJdfQ==