import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
	private availableRows = [];
	private updates = 0;
	private cvis = false;

	ngOnInit() {
		this.rows();
	}

	rows() {
		let test = [];
		for (var i = 0; i < 1000; i++) {
			test.push({
				a: i,
				b: i + "B",
				c: i + "C"
			});
		}
		this.availableRows = test;

	}

	update() {
		let test = [];
		this.updates++;
		for (var i = 0; i < 100; i++) {
			test.push({
				a: i + `Aupdated${this.updates}`,
				b: i + `Bupdated${this.updates}`
			});
		}
		this.availableRows = test;
	}

	sortA(ev) {
		if(ev.direction === "up") {
			this.availableRows.sort((a,b) => a[ev.key] - b[ev.key]);
		} else {
			this.availableRows.sort((a,b) => b[ev.key] - a[ev.key]);
		}
	}

	sort(ev) {
		if(ev.direction === "up") {
			this.availableRows.sort();
		} else {
			this.availableRows.sort().reverse();
		}
	}

	private selected = {};
	select(ev) {
		console.log(ev);
		if(ev.selected) {
			this.selected[ev.index] = ev.row;
		} else {
			delete this.selected[ev.index];
		}
	}

	deleteSelected() {
		let keys = Object.keys(this.selected);
		for (var i = 0; i < keys.length; i++) {
			let idx = this.availableRows.indexOf(this.selected[keys[i]]);
			this.availableRows.splice(idx, 1);
		}
		this.selected = {};
	}
}
