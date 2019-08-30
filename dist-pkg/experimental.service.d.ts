/**
 * Represents options for an experiment. The only required property is `enabled`, however other options may be supplied.
 */
export interface Experiment {
    enabled: boolean;
    [key: string]: any;
}
export declare class ExperimentalService {
    /**
     * Tracks if the v10 experimental mode is enabled
     * @deprecated since v3
     */
    static experimentalEnabled: boolean;
    /**
     * Sets the v10 experimental mode
     * @deprecated since v3
     */
    /**
    * Gets the state of the v10 experimental mode
    * @deprecated since v3
    */
    isExperimental: boolean;
    /**
     * Map to hold all our experiments
     */
    private experiments;
    /**
     * Adds an experiment if it doesn't exist.
     */
    addExperiment(name: string, options?: Experiment): void;
    /**
     * Enables an experiment by name
     * @param name name of the experiment to enable
     */
    enableExperiment(name: string): void;
    /**
     * Disables an experiment by name
     * @param name name of the experiment to disable
     */
    disableExperiment(name: string): void;
    /**
     * Get the options for an experiment by name
     * @param name name of experiment to get
     */
    getExperiment(name: string): Experiment;
    /**
     * Get an array of tuples representing an experiment and it's options
     */
    getExperiments(): Array<[string, Experiment]>;
}
