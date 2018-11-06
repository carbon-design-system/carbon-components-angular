import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ComponentFixture, TestBed, fakeAsync, tick, async } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";
import { StaticIconModule } from "../icon/static-icon.module";

import { Label } from "./label.component";

describe("Label", () => {
	let component: Label;
	let fixture: ComponentFixture<Label>;
	let de: DebugElement;
	let el: HTMLElement;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [Label],
			imports: [BrowserAnimationsModule, StaticIconModule],
			providers: []
		});

		fixture = TestBed.createComponent(Label);
		component = fixture.componentInstance;
		de = fixture.debugElement.query(By.css(".label"));
		el = de.nativeElement;
		fixture.detectChanges();
	});

	xit("should work", () => {
		expect(component instanceof Label).toBe(true);
	});

	xit("should set icon to success", () => {
		component.labelState = "success";
		fixture.detectChanges();
		expect(el.querySelector(".label-icon-success")).toBeTruthy();
	});

	xit("should set icon to warning", () => {
		component.labelState = "warning";
		fixture.detectChanges();
		expect(el.querySelector(".label-icon-warning")).toBeTruthy();
	});

	xit("should set icon to error", () => {
		component.labelState = "error";
		fixture.detectChanges();
		expect(el.querySelector(".label-icon-error")).toBeTruthy();
	});
});
