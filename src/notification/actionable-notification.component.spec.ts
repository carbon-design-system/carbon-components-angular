import { Component, ViewChild } from "@angular/core";
import { ComponentFixture, fakeAsync, TestBed } from "@angular/core/testing";

import { I18nModule } from "../i18n/index";
import { IconModule } from "../icon/index";
import { LinkModule } from "../link/index";
import { ButtonModule } from "../button/index";
import { ActionableNotification } from "./actionable-notification.component";
import { NotificationDisplayService } from "./notification-display.service";
import { advancedFakeAsync } from "../test-helpers/change-detection";

@Component({
	template: `<cds-actionable-notification [notificationObj]="notificationObj"></cds-actionable-notification>`,
	imports: [
		ActionableNotification,
		I18nModule,
		IconModule,
		LinkModule,
		ButtonModule
	]
})
class ActionableNotificationTest {
	@ViewChild(ActionableNotification) notification: ActionableNotification;
	notificationObj: any = {
		type: "info",
		title: "Heads up",
		message: "something happened",
		actions: [{ text: "Undo", click: () => { } }]
	};
}

describe("ActionableNotification", () => {
	let fixture: ComponentFixture<ActionableNotificationTest>;
	let wrapper: ActionableNotificationTest;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [NotificationDisplayService],
			imports: [
				ActionableNotificationTest
			]
		});

		fixture = TestBed.createComponent(ActionableNotificationTest);
		fixture.detectChanges();
		wrapper = fixture.componentInstance;
	});

	it("should work", () => {
		expect(wrapper.notification instanceof ActionableNotification).toBe(true);
	});

	it("should render the message and the action button", () => {
		expect(fixture.nativeElement.textContent).toContain("something happened");
		expect(fixture.nativeElement.textContent).toContain("Undo");
	});

	it("should update the message when the notification object changes", fakeAsync(() => {
		setTimeout(() => wrapper.notification.notificationObj.message = "updated message", 300);
		advancedFakeAsync(fixture, 300);

		expect(fixture.nativeElement.textContent).toContain("updated message");
	}));

	it("should render an action added to the existing notification", fakeAsync(() => {
		expect(fixture.nativeElement.textContent).not.toContain("Retry");

		setTimeout(() => wrapper.notification.notificationObj.actions.push({ text: "Retry", click: () => { } }), 250);
		advancedFakeAsync(fixture, 250);

		expect(fixture.nativeElement.textContent).toContain("Retry");
	}));

	it("should restyle the notification when the type changes", fakeAsync(() => {
		setTimeout(() => wrapper.notification.notificationObj.type = "error", 150);
		advancedFakeAsync(fixture, 150);

		expect(fixture.nativeElement.querySelector("cds-actionable-notification").classList)
			.toContain("cds--actionable-notification--error");
	}));
});
