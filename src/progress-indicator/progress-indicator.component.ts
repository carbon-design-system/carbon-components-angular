import { Component, Input } from "@angular/core";

@Component({
	selector: "ibm-progress-indicator",
	template: `

	<ul data-progress data-progress-current class="bx--progress">
		<li
		class="bx--progress-step bx--progress-step--{{step.state}}"
		*ngFor="let step of steps; let i = index">
			<svg *ngIf="step.state == 'complete'" width="16" height="16" viewBox="0 0 16 16">
				<g fill-rule="nonzero">
					<path d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
					<path d="M11.646 5.146l.708.708-5.604 5.603-3.104-3.103.708-.708 2.396 2.397z"/>
				</g>
			</svg>
			<svg *ngIf="step.state == 'current'">
				<circle cx="12" cy="12" r="12"></circle>
				<circle cx="12" cy="12" r="6"></circle>
			</svg>
			<svg *ngIf="step.state == 'incomplete'">
				<circle cx="12" cy="12" r="12"></circle>
			</svg>
			<p class="bx--progress-label">{{step.text}}</p>
			<span class="bx--progress-line"></span>
		</li>
	</ul>
	`
})
export class ProgressIndicator {

	@Input() steps = [];

}
