import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { Loading } from "./loading.component";
import { I18nModule } from "../i18n/i18n.module";
import { Component } from "@angular/core";
import { By } from "@angular/platform-browser";

@Component({
	template: `
		<ibm-loading
			[isActive]="isActive"
			[size]="size"
			[overlay]="overlay"
			title="title">
		</ibm-loading>`
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

	it("should change is active from true to false and set the bx--loading--stop class when isActive is false", () => {
		fixture = TestBed.createComponent(LoadingTest);
		component = fixture.componentInstance;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("ibm-loading"));
		expect(element.componentInstance.isActive).toBe(true);
		component.isActive = false;
		fixture.detectChanges();
		expect(element.componentInstance.isActive).toBe(false);
		expect(element.nativeElement.querySelector(".bx--loading--stop")).toBeTruthy();
	});

	it("should set title to 'title'", () => {
		fixture = TestBed.createComponent(LoadingTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("ibm-loading title"));
		expect(element.nativeElement.textContent).toBe("title");
	});

	it("should set the bx--loading-small class when size is sm", () => {
		fixture = TestBed.createComponent(LoadingTest);
		component = fixture.componentInstance;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("ibm-loading"));
		expect(element.nativeElement.querySelector(".bx--loading--small")).toBeTruthy();
		component.size = "normal";
		fixture.detectChanges();
		expect(element.nativeElement.querySelector(".bx--loading-small")).not.toBeTruthy();
	});

	it("should set the bx--loading-overlay-stop class when overlay is true and isActive is false", () => {
		fixture = TestBed.createComponent(LoadingTest);
		component = fixture.componentInstance;
		component.overlay = true;
		component.isActive = false;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("ibm-loading"));
		expect(element.nativeElement.querySelector(".bx--loading-overlay--stop")).toBeTruthy();
	});
});
