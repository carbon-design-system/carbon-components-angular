import { Component, ViewChild } from "@angular/core";
import { ComponentFixture, fakeAsync, TestBed } from "@angular/core/testing";

import { I18nModule } from "../i18n/index";
import { IconModule } from "../icon/index";
import { Toast } from "./toast.component";
import { NotificationDisplayService } from "./notification-display.service";
import { advancedFakeAsync } from "../test-helpers/change-detection";

@Component({
	template: `<cds-toast [notificationObj]="notificationObj"></cds-toast>`
})
class ToastTest {
	@ViewChild(Toast) toast: Toast;
	notificationObj: any = {
		type: "info",
		title: "Uploading",
		subtitle: "in progress",
		caption: "just now"
	};
}

describe("Toast", () => {
	let fixture: ComponentFixture<ToastTest>;
	let wrapper: ToastTest;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [Toast, ToastTest],
			providers: [NotificationDisplayService],
			imports: [I18nModule, IconModule]
		});

		fixture = TestBed.createComponent(ToastTest);
		fixture.detectChanges();
		wrapper = fixture.componentInstance;
	});

	it("should work", () => {
		expect(wrapper.toast instanceof Toast).toBe(true);
	});

	it("should render the title, subtitle and caption", () => {
		expect(fixture.nativeElement.textContent).toContain("Uploading");
		expect(fixture.nativeElement.textContent).toContain("in progress");
		expect(fixture.nativeElement.textContent).toContain("just now");
	});

	it("should apply the host class for the notification type", () => {
		expect(fixture.nativeElement.querySelector("cds-toast").classList)
			.toContain("cds--toast-notification--info");
	});

	it("should update the subtitle when the notification object changes", fakeAsync(() => {
		setTimeout(() => wrapper.toast.notificationObj.subtitle = "finished", 400);
		advancedFakeAsync(fixture, 400);

		expect(fixture.nativeElement.textContent).toContain("finished");
		expect(fixture.nativeElement.textContent).not.toContain("in progress");
	}));

	it("should restyle the toast when the type changes", fakeAsync(() => {
		setTimeout(() => wrapper.toast.notificationObj.type = "error", 200);
		advancedFakeAsync(fixture, 200);

		const element = fixture.nativeElement.querySelector("cds-toast");
		expect(element.classList).toContain("cds--toast-notification--error");
		expect(element.classList).not.toContain("cds--toast-notification--info");
	}));
});
