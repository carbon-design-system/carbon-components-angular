import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/toPromise";

@Injectable()
export class ConditionBuilderDemoService {
	constructor(private http: Http) {}

	getContent() {
		return new Promise(resolve => {
			setTimeout(() => resolve({}), 150);
		});
	}
}
