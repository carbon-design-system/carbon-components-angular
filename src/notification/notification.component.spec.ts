import { TestBed } from "@angular/core/testing";

import { Notification, NotificationDisplayService } from "./index";
import { I18nModule } from "../i18n/index";
import { IconModule } from "../icon/index";

describe("Notification", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [Notification],
			providers: [NotificationDisplayService],
			imports: [
				I18nModule,
				IconModule
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

		expect(fixture.nativeElement.classList.contains("cds--inline-notification--info")).toBeTruthy();
	});

	it("should render danger notification", () => {
		const fixture = TestBed.createComponent(Notification);
		fixture.componentInstance.notificationObj = {
			type: "error",
			title: "sample",
			message: "sample message"
		};
		fixture.detectChanges();

		expect(fixture.nativeElement.classList.contains("cds--inline-notification--error")).toBeTruthy();
	});

	it("should render info warning notification", () => {
		const fixture = TestBed.createComponent(Notification);
		fixture.componentInstance.notificationObj = {
			type: "warning",
			title: "sample",
			message: "sample message"
		};
		fixture.detectChanges();

		expect(fixture.nativeElement.classList.contains("cds--inline-notification--warning")).toBeTruthy();
	});

	it("should render info success notification", () => {
		const fixture = TestBed.createComponent(Notification);
		fixture.componentInstance.notificationObj = {
			type: "success",
			title: "sample",
			message: "sample message"
		};
		fixture.detectChanges();

		expect(fixture.nativeElement.classList.contains("cds--inline-notification--success")).toBeTruthy();
	});

	it("should display correct message", () => {
		const fixture = TestBed.createComponent(Notification);
		fixture.componentInstance.notificationObj = {
			type: "success",
			title: "sample",
			message: "sample message"
		};
		fixture.detectChanges();

		let p = fixture.nativeElement.querySelector(".cds--inline-notification__text-wrapper div span");

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

		let button = fixture.nativeElement.querySelector(".cds--inline-notification__close-button");

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
