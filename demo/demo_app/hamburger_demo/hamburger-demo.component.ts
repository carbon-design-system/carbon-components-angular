import { Component } from "@angular/core";


@Component({
	selector: "hamburger-demo",
	templateUrl: "./hamburger-demo.component.html"
})

export class HamburgerDemo {
	private count = 0;

	private onClick() {
		this.count++;
	}

}
