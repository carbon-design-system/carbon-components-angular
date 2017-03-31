import {
	Component,
	OnInit,
	TemplateRef
} from "@angular/core";

import { AlertService } from "./../../../src";
import { AlertCustom } from "./alert-demo-custom";

@Component({
	selector: "alert-demo",
	template: `
	<h1>Alert Service</h1>

	<h3>Default Alert</h3>
	<button class="btn" (click)="callAlert('info')">Alert Info</button>
	<button class="btn" (click)="callAlert('danger')">Alert Error</button>
	<button class="btn" (click)="callAlert('warning')">Alert Warning</button>
	<button class="btn" (click)="callAlert('success')">Alert Success</button>


	<h3>Custom Alert</h3>

	<button class="btn" (click)="callAlertCustom()">show custom alert</button>


	<h3>Fade away Alert(2secs)</h3>

	<button class="btn" (click)="callAlertFadeAway()">show fade away alert</button>


	<h3>Alert to a container</h3>
	<button class="btn" (click)="callAlert2()">show alert in the container below</button>
	<div id="alertcontainer">
	<span></span>
	</div>


	<h3>Smart Alert</h3>

	<p><textarea [(ngModel)]="smartAlertText" rows="6" cols="60"></textarea></p>

	<button class="btn" (click)="callAlertSmart('info')">Alert Info</button>
	<button class="btn" (click)="callAlertSmart('danger')">Alert Error</button>
	<button class="btn" (click)="callAlertSmart('warning')">Alert Warning</button>
	<button class="btn" (click)="callAlertSmart('success')">Alert Success</button>


	<h1>Alert Component</h1>

	<div class="alerts-container">
	<cdl-alert [alertObj]="infoAlert" (close)="onClose($event)"></cdl-alert>
	</div>
	<div class="alerts-container">
	<cdl-alert [alertObj]="errorAlert" (close)="onCloseError($event)"></cdl-alert>
	</div>
	<div class="alerts-container">
	<cdl-alert [alertObj]="warningAlert" (close)="onCloseWarning($event)"></cdl-alert>
	</div>
	<div class="alerts-container">
	<cdl-alert [alertObj]="successAlert" (close)="onCloseSuccess($event)"></cdl-alert>
	</div>
	`,
	styleUrls: ["./alert-demo.component.scss"]
})
export class AlertDemo {
	infoAlert = {
		type: "info",
		message: "sample message"
	};

	errorAlert = {
		type: "danger",
		message: "sample message"
	};

	warningAlert = {
		type: "warning",
		message: "sample message"
	};

	successAlert = {
		type: "success",
		message: "sample message",
	};

	smartAlertText = "The length of this text, along with alert type, affects how long alert displays. Try it out!";

	constructor(private alert: AlertService) {

	}

	callAlertCustom() {
		this.alert.showAlert({
			type: "info",
			message: "sample message"
		}, AlertCustom);
	}

	callAlert(type) {
		this.alert.showAlert({
			type: type,
			message: "sample message"
		});
	}

	callAlertSmart(type) {
		this.alert.showAlert({
			type: type,
			message: this.smartAlertText,
			smart: true
		});
	}

	callAlert2() {
		this.alert.showAlert({
			type: "info",
			message: "sample message",
			target: "#alertcontainer"
		});
	}

	callAlertFadeAway() {
		this.alert.showAlert({
			type: "info",
			message: "sample message",
			duration: 2000
		});
	}

	onClose() {
		this.infoAlert = null;
	}

	onCloseSuccess() {
		this.successAlert = null;
	}

	onCloseError() {
		this.errorAlert = null;
	}

	onCloseWarning() {
		this.warningAlert = null;
	}
}
