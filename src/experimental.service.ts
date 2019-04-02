import { Injectable } from "@angular/core";

/**
 * Represents options for an experiment. The only required property is `enabled`, however other options may be supplied.
 */
export interface Experiment {
	enabled: boolean;
	[key: string]: any;
}

@Injectable()
export class ExperimentalService {
	/**
	 * Tracks if the v10 experimental mode is enabled
	 * @deprecated
	 */
	static experimentalEnabled = true;

	/**
	 * Sets the v10 experimental mode
	 * @deprecated
	 */
	set isExperimental(v: boolean) {
		ExperimentalService.experimentalEnabled = v;
		if (!v) {
			this.disableExperiment("v10");
		} else {
			this.enableExperiment("v10");
		}
	}

	/**
	 * Gets the state of the v10 experimental mode
	 * @deprecated
	 */
	get isExperimental() {
		return this.getExperiment("v10").enabled;
	}

	/**
	 * Map to hold all our experiments
	 */
	private experiments = new Map<string, Experiment>();

	constructor() {
		this.experiments.set("v10", {enabled: true});
	}

	/**
	 * Adds an experiment if it doesn't exist.
	 */
	addExperiment(name: string, options: Experiment = {enabled: false}) {
		if (!this.experiments.has(name)) {
			this.experiments.set(name, options);
		}
	}

	/**
	 * Enables an experiment by name
	 * @param name name of the experiment to enable
	 */
	enableExperiment(name: string) {
		const experiment = this.getExperiment(name);
		experiment.enabled = true;
	}

	/**
	 * Disables an experiment by name
	 * @param name name of the experiment to disable
	 */
	disableExperiment(name: string) {
		const experiment = this.getExperiment(name);
		experiment.enabled = false;
	}

	/**
	 * Get the options for an experiment by name
	 * @param name name of experiment to get
	 */
	getExperiment(name: string): Experiment {
		if (!this.experiments.has(name)) {
			this.addExperiment(name);
			return this.getExperiment(name);
		}

		return this.experiments.get(name);
	}

	/**
	 * Get an array of tuples representing an experiment and it's options
	 */
	getExperiments(): Array<[string, Experiment]> {
		return Array.from(this.experiments.entries());
	}
}
