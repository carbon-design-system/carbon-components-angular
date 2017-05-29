import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ComponentFixture, TestBed, fakeAsync, tick, async } from "@angular/core/testing";
import { By }              			 from "@angular/platform-browser";
import { DebugElement }    			 from "@angular/core";

import { LabelComponent } from "./label.component";

describe("LabelComponent", () => {
	let component: LabelComponent;
	let fixture: ComponentFixture<LabelComponent>;
	let de: DebugElement;
	let el: HTMLElement;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [LabelComponent],
			imports: [BrowserAnimationsModule],
			providers: []
		});

		fixture = TestBed.createComponent(LabelComponent);
		component = fixture.componentInstance;
		de = fixture.debugElement.query(By.css(".label"));
		el = de.nativeElement;
		fixture.detectChanges();
	});

	it("should work", () => {
		expect(component instanceof LabelComponent).toBe(true);
	});

	it("should set icon to success", () => {
		component.labelState = "success";
		fixture.detectChanges();
		expect(el.querySelector(".label-icon-success")).toBeTruthy();
	});

	it("should set icon to warning", () => {
		component.labelState = "warning";
		fixture.detectChanges();
		expect(el.querySelector(".label-icon-warning")).toBeTruthy();
	});

	it("should set icon to error", () => {
		component.labelState = "error";
		fixture.detectChanges();
		expect(el.querySelector(".label-icon-error")).toBeTruthy();
	});
});
