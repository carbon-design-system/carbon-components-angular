import { TestBed, ComponentFixture } from "@angular/core/testing";
import { Component } from "@angular/core";
import { By } from "@angular/platform-browser";

import { ThemeDirective } from "./theme.directive";
import { LayerDirective } from "../layer";

@Component({
	template: `<div cdsTheme></div>`
})
class TestThemeComponent { }

describe("Theme", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				TestThemeComponent,
				ThemeDirective,
				LayerDirective
			]
		});
	});

	it("should assign theme class to div", () => {
		TestBed.configureTestingModule({
			declarations: [TestThemeComponent, ThemeDirective]
		});

		let fixture: ComponentFixture<TestThemeComponent> = TestBed.createComponent(TestThemeComponent);
		let component: TestThemeComponent = fixture.componentInstance;
		fixture.detectChanges();

		expect(component).toBeTruthy();
		const directiveEl = fixture.debugElement.query(By.directive(ThemeDirective));
		expect(directiveEl).not.toBeNull();
		expect(directiveEl.nativeElement.classList.contains("cds--white")).toBeTruthy();
		expect(directiveEl.nativeElement.classList.contains("cds--layer-one")).toBeTruthy();
	});

	it("should reset nested layer level", () => {
		TestBed.overrideComponent(TestThemeComponent, {
			set: {
				template: `
					<div cdsLayer>
						<div cdsTheme>
							<div cdsLayer id="nested-layer"></div>
						</div>
					</div>
				`
			}
		});

		TestBed.compileComponents().then(() => {
			let fixture: ComponentFixture<TestThemeComponent> = TestBed.createComponent(TestThemeComponent);
			fixture.detectChanges();

			const directiveEl = fixture.debugElement.query(By.directive(ThemeDirective)).nativeElement;
			expect(directiveEl.querySelector("div").classList.contains("cds--layer-two")).toBeTruthy();
		});
	});

	/**
	 * @todo Remove this test when `ibmTheme` is removed
	 * v6
	 */
	it("should work with deprecated `ibmTheme` input property", () => {
		TestBed.overrideComponent(TestThemeComponent, {
			set: {
				template: `
					<div ibmTheme="g100"></div>
				`
			}
		});

		TestBed.compileComponents().then(() => {
			let fixture: ComponentFixture<TestThemeComponent> = TestBed.createComponent(TestThemeComponent);
			fixture.detectChanges();

			const directiveEl = fixture.debugElement.query(By.directive(ThemeDirective));
			expect(directiveEl.nativeElement.classList.contains("cds--g100")).toBeTruthy();
			expect(directiveEl.nativeElement.classList.contains("cds--layer-one")).toBeTruthy();
		});
	});
});
