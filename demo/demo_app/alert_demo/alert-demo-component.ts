import {
	Component,
	OnInit,
	TemplateRef
} from "@angular/core";

import { AlertService } from "./../../../src";
import { AlertCustom } from "./alert-demo-custom";

@Component({
	selector: "alert-demo",
	templateUrl: "./alert-demo-component.html",
	styleUrls: ["./alert-demo.component.scss"]
})

export class AlertDemo {
	constructor(private alert: AlertService) {

	}

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
