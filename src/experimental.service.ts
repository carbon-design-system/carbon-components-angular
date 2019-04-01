import { Injectable } from "@angular/core";

@Injectable()
export class ExperimentalService {
	static experimentalEnabled = true;

	set isExperimental(v: boolean) {
		ExperimentalService.experimentalEnabled = v;
	}

	get isExperimental() {
		return ExperimentalService.experimentalEnabled;
	}
}
