import { Component, Injector } from "@angular/core";
import { Modal } from "../../../src";

@Modal()
@Component({
	selector: "drill-modal",
	template: `
		<n-modal size="xl" (overlaySelected)="closeModal()" [ngSwitch]="drilledin">
			<ng-container *ngSwitchCase="false">
				<n-modal-header (closeSelect)="closeModal()">
					<span
						class="breadcrumb">
						Header text
					</span>
				</n-modal-header>
				<section class="modal-body">
					<div>
						<h1>Drill modal works.</h1>
						<button class="btn--primary" (click)="drill($event)">Drill down</button>
					</div>
				</section>
				<n-modal-footer *ngIf="!drilledin">
					<button class="btn--primary cancel-button" (click)="closeModal()">Close</button>
				</n-modal-footer>
			</ng-container>
			<ng-container *ngSwitchCase="true">
				<n-modal-header (closeSelect)="closeModal()">
					<a
						(click)="drill($event, false)"
						class="breadcrumb"
						href="#">
						Header text
					</a>
					<span>
						<n-icon icon="chevron_right" size="sm" style="fill: white;"></n-icon>
						Drilled down
					</span>
				</n-modal-header>
				<section class="modal-body">
					<div>
						<h2>Hello, from drilled down content.</h2>
					</div>
				</section>
				<n-modal-footer>
					<button class="btn--secondary" (click)="drill($event, false)">Back</button>
				</n-modal-footer>
			</ng-container>
		</n-modal>
	`,
	styleUrls: ["./sample-modal.component.scss"]
})
export class DrilldownModalComponent {
	public drilledin = false;

	constructor(private injector: Injector) {}

	public drill(ev, drilled = true) {
		ev.preventDefault();
		this.drilledin = drilled;
	}
}
