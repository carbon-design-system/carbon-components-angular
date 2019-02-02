import { Component, AfterViewInit, OnDestroy } from "@angular/core";
import { ExperimentalService } from "../src/experimental.module";

@Component({
	selector: "app-experimental-component",
	template: ``
})
export class ExperimentalComponenent implements AfterViewInit, OnDestroy {
	constructor(protected experimental: ExperimentalService) {
		experimental.isExperimental = false;
	}

	ngAfterViewInit() {
		this.toggleExperimental();
		document.querySelectorAll(".toggle-btn").forEach(button => {
			button.addEventListener("click", this.toggleExperimental);
		});
	}

	ngOnDestroy() {
		document.querySelectorAll(".toggle-btn").forEach(button => {
			button.removeEventListener("click", this.toggleExperimental);
		});
	}

	// arrow function to capture the correct `this`
	toggleExperimental = () => {
		if (document.body.classList.contains("experimental")) {
			this.experimental.isExperimental = true;
		} else {
			this.experimental.isExperimental = false;
		}
	}
}
