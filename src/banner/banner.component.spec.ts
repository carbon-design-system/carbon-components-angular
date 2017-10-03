import {Component} from "@angular/core";
import {TestBed, ComponentFixture, inject, tick, fakeAsync} from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { Banner } from "./banner.component";
import { BannerService } from "./banner.service";


describe("Banner", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [Banner],
			providers: [BannerService]
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
			message: "sample message"
		};
		fixture.detectChanges();

		let banner = fixture.nativeElement.querySelector("[role='alert']");
		expect(banner.classList.contains("banner--info")).toBeTruthy();
	});

	it("should render danger banner", () => {
		const fixture = TestBed.createComponent(Banner);
		fixture.componentInstance.bannerObj = {
			type: "danger",
			message: "sample message"
		};
		fixture.detectChanges();

		let banner = fixture.nativeElement.querySelector("[role='alert']");
		expect(banner.classList.contains("banner--danger")).toBeTruthy();
	});

	it("should render info warning", () => {
		const fixture = TestBed.createComponent(Banner);
		fixture.componentInstance.bannerObj = {
			type: "warning",
			message: "sample message"
		};
		fixture.detectChanges();

		let banner = fixture.nativeElement.querySelector("[role='alert']");
		expect(banner.classList.contains("banner--warning")).toBeTruthy();
	});

	it("should render info success", () => {
		const fixture = TestBed.createComponent(Banner);
		fixture.componentInstance.bannerObj = {
			type: "success",
			message: "sample message"
		};
		fixture.detectChanges();

		let banner = fixture.nativeElement.querySelector("[role='alert']");
		expect(banner.classList.contains("banner--success")).toBeTruthy();
	});

	it("should display correct message", () => {
		const fixture = TestBed.createComponent(Banner);
		fixture.componentInstance.bannerObj = {
			type: "success",
			message: "sample message"
		};
		fixture.detectChanges();

		let p = fixture.nativeElement.querySelector("[role='alert'] p");

		expect(p.innerHTML.trim()).toEqual("sample message");
	});

	it("should emit change when close button is clicked", () => {
		const fixture = TestBed.createComponent(Banner);
		fixture.componentInstance.bannerObj = {
			type: "success",
			message: "sample message"
		};
		fixture.detectChanges();

		spyOn(fixture.componentInstance.close, "emit");

		let button = fixture.nativeElement.querySelector(".close--dark-sm");

		button.click();
		expect(fixture.componentInstance.close.emit).toHaveBeenCalled();
	});

	it("should emit change when banner is closed programmatically", () => {
		const fixture = TestBed.createComponent(Banner);
		fixture.componentInstance.bannerObj = {
			type: "info",
			message: "sample message"
		};
		fixture.detectChanges();

		fixture.componentInstance.destroy();

		expect(fixture.componentInstance);
	});
});
