import { Component, Injector } from "@angular/core";
import { Modal } from "../../../src";

@Modal()
@Component({
	selector: "app-drill-modal",
	template: `
		<ibm-modal size="xl" [ngSwitch]="drilledin">
			<ng-container *ngSwitchCase="false">
				<ibm-modal-header (closeSelect)="closeModal()">
					<span
						class="breadcrumb">
						Header text
					</span>
				</ibm-modal-header>
				<section class="modal-body">
					<div>
						<h1>Drill modal works.</h1>
						<button class="btn--primary" (click)="drill($event)">Drill down</button>
					</div>
				</section>
				<ibm-modal-footer *ngIf="!drilledin">
					<button class="btn--primary cancel-button" (click)="closeModal()">Close</button>
				</ibm-modal-footer>
			</ng-container>
			<ng-container *ngSwitchCase="true">
				<ibm-modal-header (closeSelect)="closeModal()">
					<a
						(click)="drill($event, false)"
						class="breadcrumb"
						href="#">
						Header text
					</a>
					<span>
						<ibm-icon icon="chevron_right" size="sm" color="white"></ibm-icon>
						Drilled down
					</span>
				</ibm-modal-header>
				<section class="modal-body">
					<div>
						<h2>Hello, from drilled down content.</h2>
					</div>
				</section>
				<ibm-modal-footer>
					<button class="btn--secondary" (click)="drill($event, false)">Back</button>
				</ibm-modal-footer>
			</ng-container>
		</ibm-modal>
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
