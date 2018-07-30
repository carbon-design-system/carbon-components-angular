import { Injectable } from "@angular/core";

@Injectable()
export class TableDemoService {

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
				["1001 nights", {name: "Isaac Bob", surname: "Murphey"}]]), 150);
		});
	}
}
