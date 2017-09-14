import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/toPromise";

@Injectable()
export class TableDemoService {
	constructor(private http: Http) {}

	getPage(page: number) {
		const url = `table-demo-data-page-${page}.json`;

		return new Promise(resolve => {
			setTimeout(() => resolve(page === 1 ?
				// page 1
				[["asdf", {name: "Lessy", link: "/table"}],
				["cdsf", "swer"],
				["bsdf", {name: "Alice", surname: "Bob"}],
				["csdf", "twer"]] :
				// every other page
				[["asdf", {name: "John", surname: "Wayne", link: "/table"}],
				[{name: "Lenny"}, {surname: "Tin"}],
				[`Whoa! ${page}!`, {name: "Bob", surname: "Smith"}],
				["1001 nights", {name: "Isaac Bob", surname: "Murphey"}]]), 600);
		});
	}
}
