import { ExperimentalService } from "./../experimental.module";
import { Step } from "./progress-indicator-step.interface";
/**
 * [See demo](../../?path=/story/progress-indicator--basic)
 *
 * <example-url>../../iframe.html?id=progress-indicator--basic</example-url>
 */
export declare class ProgressIndicator {
    protected experimental: ExperimentalService;
    static skeletonSteps(stepCount: number): any[];
    steps: Array<Step>;
    orientation: "horizontal" | "vertical";
    skeleton: boolean;
    current: number;
    readonly isExperimental: boolean;
    constructor(experimental: ExperimentalService);
}
