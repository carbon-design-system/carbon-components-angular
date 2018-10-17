import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { ModalComponent } from "./modal.component";
import { OverlayComponent } from "./overlay.component";
import { ModalService } from "./modal.service";
import { ModalPlaceholderService } from "./modal-placeholder.service";
import { I18nModule } from "../i18n/i18n.module";

// snippet to add transform to style so karma doesn't die with
// 'The provided animation property "transform" is not a supported CSS property for animations in karma-test-shim.js'
Object.defineProperty(document.body.style, "transform", {
	value: () => {
		return {
			enumerable: true,
			configurable: true
		};
	}
});

describe("ModalComponent", () => {
	let component: ModalComponent;
	let fixture: ComponentFixture<ModalComponent>;
	let de: DebugElement;
	let el: HTMLElement;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ModalComponent, OverlayComponent],
			imports: [
				BrowserAnimationsModule,
				I18nModule
			],
			providers: [ModalService, ModalPlaceholderService]
		});

		fixture = TestBed.createComponent(ModalComponent);
		component = fixture.componentInstance;
		de = fixture.debugElement.query(By.css("div"));
		el = de.nativeElement;
	});

	it("should work", () => {
		expect(component instanceof ModalComponent).toBe(true);
	});

	it("should close modal when overlay is clicked", () => {
		fixture.detectChanges();
		let overlay = fixture.debugElement.query(By.css(".bx--modal.bx--modal-tall.is-visible")).nativeElement;
		spyOn(fixture.componentInstance.overlaySelected, "emit");
		overlay.click();
		expect(fixture.componentInstance.overlaySelected.emit).toHaveBeenCalled();
	});

	it("should close modal when escape is pressed", async(() => {
		let modalService = fixture.debugElement.injector.get(ModalService);

		spyOn(modalService, "destroy");

		let evt = new KeyboardEvent("keydown", {bubbles: true, key: "Escape"});
		el.dispatchEvent(evt);
		fixture.detectChanges();
		fixture.whenStable().then(() => {
			fixture.detectChanges();
			expect(modalService.destroy).toHaveBeenCalled();
		});
	}));
});
