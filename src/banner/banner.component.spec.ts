import { TestBed } from "@angular/core/testing";
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from "@ngx-translate/core";

import { StaticIconModule } from "./../icon/static-icon.module";

import { Banner, BannerService } from "./banner.module";


describe("Banner", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [Banner],
			providers: [BannerService],
			imports: [
				StaticIconModule,
				TranslateModule.forRoot({
					loader: {
						provide: TranslateLoader, useClass: TranslateFakeLoader
					}
				})
			]
		});
	});

	it("should work", () => {
		const fixture = TestBed.createComponent(Banner);
		expect(fixture.componentInstance instanceof Banner).toBe(true);
	});

	it("should render info banner", () => {
		const fixture = TestBed.createComponent(Banner);
		fixture.componentInstance.bannerObj = {
			type: "info",
			title: "sample",
			message: "sample message"
		};
		fixture.detectChanges();

		let banner = fixture.nativeElement.querySelector(".bx--inline-notification");
		expect(banner.classList.contains("bx--inline-notification--info")).toBeTruthy();
	});

	it("should render danger banner", () => {
		const fixture = TestBed.createComponent(Banner);
		fixture.componentInstance.bannerObj = {
			type: "danger",
			title: "sample",
			message: "sample message"
		};
		fixture.detectChanges();

		let banner = fixture.nativeElement.querySelector(".bx--inline-notification");
		expect(banner.classList.contains("bx--inline-notification--danger")).toBeTruthy();
	});

	it("should render info warning", () => {
		const fixture = TestBed.createComponent(Banner);
		fixture.componentInstance.bannerObj = {
			type: "warning",
			title: "sample",
			message: "sample message"
		};
		fixture.detectChanges();

		let banner = fixture.nativeElement.querySelector(".bx--inline-notification");
		expect(banner.classList.contains("bx--inline-notification--warning")).toBeTruthy();
	});

	it("should render info success", () => {
		const fixture = TestBed.createComponent(Banner);
		fixture.componentInstance.bannerObj = {
			type: "success",
			title: "sample",
			message: "sample message"
		};
		fixture.detectChanges();

		let banner = fixture.nativeElement.querySelector(".bx--inline-notification");
		expect(banner.classList.contains("bx--inline-notification--success")).toBeTruthy();
	});

	it("should display correct message", () => {
		const fixture = TestBed.createComponent(Banner);
		fixture.componentInstance.bannerObj = {
			type: "success",
			title: "sample",
			message: "sample message"
		};
		fixture.detectChanges();

		let p = fixture.nativeElement.querySelector(".bx--inline-notification__subtitle");

		expect(p.innerHTML.trim()).toEqual("sample message");
	});

	it("should emit change when close button is clicked", () => {
		const fixture = TestBed.createComponent(Banner);
		fixture.componentInstance.bannerObj = {
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

	it("should emit change when banner is closed programmatically", () => {
		const fixture = TestBed.createComponent(Banner);
		fixture.componentInstance.bannerObj = {
			type: "info",
			title: "sample",
			message: "sample message"
		};
		fixture.detectChanges();

		fixture.componentInstance.destroy();

		expect(fixture.componentInstance);
	});
});
