import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ComponentFixture, TestBed, fakeAsync, tick, async } from "@angular/core/testing";
import { By }              			 from "@angular/platform-browser";
import { DebugElement }    			 from "@angular/core";

import { SwitchComponent } from "./switch.component";

describe("SwitchComponent", () => {
	let component: SwitchComponent;
	let fixture: ComponentFixture<SwitchComponent>;
	let de: DebugElement;
	let el: HTMLElement;
	let inputElement: HTMLElement;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [SwitchComponent],
			imports: [BrowserAnimationsModule],
			providers: []
		});

		fixture = TestBed.createComponent(SwitchComponent);
		component = fixture.componentInstance;
		de = fixture.debugElement.query(By.css("div.switch"));
		el = de.nativeElement;
		inputElement = fixture.debugElement.query(By.css("input")).nativeElement;
	});

	it("should work", () => {
		expect(component instanceof SwitchComponent).toBe(true);
	});

	it("should change state", () => {
		inputElement.click();
		fixture.detectChanges();
		expect(component.checked).toBe(true, "setting to on");

		inputElement.click();
		fixture.detectChanges();
		expect(component.checked).toBe(false, "setting to off");
	});
});
