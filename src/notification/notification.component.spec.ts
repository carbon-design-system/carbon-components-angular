import { TestBed } from "@angular/core/testing";

import { Notification, NotificationDisplayService } from "./notification.module";
import { I18nModule } from "../i18n/i18n.module";
import { Close16Module } from "@carbon/icons-angular/lib/close/16";
import { ErrorFilled16Module } from "@carbon/icons-angular/lib/error--filled/16";
import { CheckmarkFilled16Module } from "@carbon/icons-angular/lib/checkmark--filled/16";
import { WarningFilled16Module } from "@carbon/icons-angular/lib/warning--filled/16";


describe("Notification", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [Notification],
			providers: [NotificationDisplayService],
			imports: [
				I18nModule,
				Close16Module,
				ErrorFilled16Module,
				CheckmarkFilled16Module,
				WarningFilled16Module
			]
		});
	});

	it("should work", () => {
		const fixture = TestBed.createComponent(Notification);
		expect(fixture.componentInstance instanceof Notification).toBe(true);
	});

	it("should render info notification", () => {
		const fixture = TestBed.createComponent(Notification);
		fixture.componentInstance.notificationObj = {
			type: "info",
			title: "sample",
			message: "sample message"
		};
		fixture.detectChanges();

		expect(fixture.nativeElement.classList.contains("bx--inline-notification--info")).toBeTruthy();
	});

	it("should render danger notification", () => {
		const fixture = TestBed.createComponent(Notification);
		fixture.componentInstance.notificationObj = {
			type: "error",
			title: "sample",
			message: "sample message"
		};
		fixture.detectChanges();

		expect(fixture.nativeElement.classList.contains("bx--inline-notification--error")).toBeTruthy();
	});

	it("should render info warning notification", () => {
		const fixture = TestBed.createComponent(Notification);
		fixture.componentInstance.notificationObj = {
			type: "warning",
			title: "sample",
			message: "sample message"
		};
		fixture.detectChanges();

		expect(fixture.nativeElement.classList.contains("bx--inline-notification--warning")).toBeTruthy();
	});

	it("should render info success notification", () => {
		const fixture = TestBed.createComponent(Notification);
		fixture.componentInstance.notificationObj = {
			type: "success",
			title: "sample",
			message: "sample message"
		};
		fixture.detectChanges();

		expect(fixture.nativeElement.classList.contains("bx--inline-notification--success")).toBeTruthy();
	});

	it("should display correct message", () => {
		const fixture = TestBed.createComponent(Notification);
		fixture.componentInstance.notificationObj = {
			type: "success",
			title: "sample",
			message: "sample message"
		};
		fixture.detectChanges();

		let p = fixture.nativeElement.querySelector(".bx--inline-notification__subtitle");

		expect(p.innerHTML.trim()).toEqual("sample message");
	});

	it("should emit change when close button is clicked", () => {
		const fixture = TestBed.createComponent(Notification);
		fixture.componentInstance.notificationObj = {
			type: "success",
			title: "sample",
			message: "sample message"
		};
		fixture.detectChanges();

		spyOn(fixture.componentInstance.close, "emit");

		let button = fixture.nativeElement.querySelector(".bx--inline-notification__close-button");

		button.click();
		expect(fixture.componentInstance.close.emit).toHaveBeenCalled();
	});

	it("should emit change when notification is closed programmatically", () => {
		const fixture = TestBed.createComponent(Notification);
		fixture.componentInstance.notificationObj = {
			type: "info",
			title: "sample",
			message: "sample message"
		};
		fixture.detectChanges();

		fixture.componentInstance.destroy();

		expect(fixture.componentInstance);
	});
});
