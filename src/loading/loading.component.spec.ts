import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { Loading } from "./loading.component";
import { I18nModule } from "../i18n/index";
import { Component } from "@angular/core";
import { By } from "@angular/platform-browser";

@Component({
	template: `
		<cds-loading
			[isActive]="isActive"
			[size]="size"
			[overlay]="overlay"
			title="title">
		</cds-loading>`
})
class LoadingTest {
	isActive = true;
	size = "sm";
	overlay = false;
}

describe("Loading", () => {
	let component, fixture, element;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [Loading, LoadingTest],
			imports: [I18nModule]
		});
	});

	it("should work", () => {
		fixture = TestBed.createComponent(Loading);
		component = fixture.componentInstance;
		expect(component instanceof Loading).toBe(true);
	});

	it("should change is active from true to false and set the cds--loading--stop class when isActive is false", () => {
		fixture = TestBed.createComponent(LoadingTest);
		component = fixture.componentInstance;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-loading"));
		expect(element.componentInstance.isActive).toBe(true);
		component.isActive = false;
		fixture.detectChanges();
		expect(element.componentInstance.isActive).toBe(false);
		expect(element.nativeElement.querySelector(".cds--loading--stop")).toBeTruthy();
	});

	it("should set title to 'title'", () => {
		fixture = TestBed.createComponent(LoadingTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-loading title"));
		expect(element.nativeElement.textContent).toBe("title");
	});

	it("should set the cds--loading-small class when size is sm", () => {
		fixture = TestBed.createComponent(LoadingTest);
		component = fixture.componentInstance;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-loading"));
		expect(element.nativeElement.querySelector(".cds--loading--small")).toBeTruthy();
		component.size = "normal";
		fixture.detectChanges();
		expect(element.nativeElement.querySelector(".cds--loading-small")).not.toBeTruthy();
	});

	it("should set the cds--loading-overlay-stop class when overlay is true and isActive is false", () => {
		fixture = TestBed.createComponent(LoadingTest);
		component = fixture.componentInstance;
		component.overlay = true;
		component.isActive = false;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-loading"));
		expect(element.nativeElement.querySelector(".cds--loading-overlay--stop")).toBeTruthy();
	});
});
