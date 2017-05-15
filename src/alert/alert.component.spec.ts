import {Component} from "@angular/core";
import {TestBed, ComponentFixture, inject} from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { Alert } from "./alert.component";

describe("Alert", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({declarations: [Alert]});
	});

	it("should work", () => {
		const fixture = TestBed.createComponent(Alert);
		expect(fixture.componentInstance instanceof Alert).toBe(true);
	});

	it("should render info alert", () => {
		const fixture = TestBed.createComponent(Alert);
		fixture.componentInstance.alertObj = {
			type: "info",
			message: "sample message"
		};
		fixture.detectChanges();

		let alert = fixture.nativeElement.querySelector(".alert");
		expect(alert.classList.contains("alert-info")).toBeTruthy;
	});

	it("should render danger alert", () => {
		const fixture = TestBed.createComponent(Alert);
		fixture.componentInstance.alertObj = {
			type: "danger",
			message: "sample message"
		};
		fixture.detectChanges();

		let alert = fixture.nativeElement.querySelector(".alert");
		expect(alert.classList.contains("alert-danger")).toBeTruthy();
	});

	it("should render info warning", () => {
		const fixture = TestBed.createComponent(Alert);
		fixture.componentInstance.alertObj = {
			type: "warning",
			message: "sample message"
		};
		fixture.detectChanges();

		let alert = fixture.nativeElement.querySelector(".alert");
		expect(alert.classList.contains("alert-warning")).toBeTruthy();
	});

	it("should render info success", () => {
		const fixture = TestBed.createComponent(Alert);
		fixture.componentInstance.alertObj = {
			type: "success",
			message: "sample message"
		};
		fixture.detectChanges();

		let alert = fixture.nativeElement.querySelector(".alert");
		expect(alert.classList.contains("alert-success")).toBeTruthy();
	});

	it("should display correct message", () => {
		const fixture = TestBed.createComponent(Alert);
		fixture.componentInstance.alertObj = {
			type: "success",
			message: "sample message"
		};
		fixture.detectChanges();

		let p = fixture.nativeElement.querySelector(".alert p");

		expect(p.innerHTML.trim()).toEqual("sample message");
	});

	it("should emit change when close button is clicked", () => {
		const fixture = TestBed.createComponent(Alert);
		fixture.componentInstance.alertObj = {
			type: "success",
			message: "sample message"
		};
		fixture.detectChanges();

		spyOn(fixture.componentInstance.close, "emit");

		let button = fixture.nativeElement.querySelector(".close-btn");

		button.click();
		expect(fixture.componentInstance.close.emit).toHaveBeenCalled();
	});
});
