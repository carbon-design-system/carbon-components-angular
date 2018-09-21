import { Component, Input } from "@angular/core";

@Component({
	selector: "ibm-loading",
	template: `
		<div class="bx--loading-overlay">
			<div data-loading class="bx--loading">
				<svg class="bx--loading__svg" viewBox="-75 -75 150 150">
					<title>{{title}}</title>
					<circle cx="0" cy="0" r="37.5" />
				</svg>
			</div>
		</div>`,
	styles: []
})
export class LoadingComponent {
	@Input()
	title = "Loading";
}

@Component({
	selector: "ibm-small-loading",
	template: `
		<div data-loading class="bx--loading bx--loading--small">
			<svg class="bx--loading__svg" viewBox="-75 -75 150 150">
				<title>{{title}}</title>
				<circle cx="0" cy="0" r="37.5" />
			</svg>
		</div>`,
	styles: []
})
export class SmallLoadingComponent {
	@Input()
	title = "Loading";
}
