import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { Modal } from "./modal.component";
import { Overlay } from "./overlay.component";
import { ModalService } from "./modal.service";
import { I18nModule } from "../i18n/index";
import { PlaceholderModule } from "./../placeholder/index";
import { BaseModalService } from "./base-modal.service";

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

describe("Modal", () => {
	let component: Modal;
	let fixture: ComponentFixture<Modal>;
	let de: DebugElement;
	let el: HTMLElement;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [Modal, Overlay],
			imports: [
				I18nModule,
				PlaceholderModule
			],
			providers: [ModalService, BaseModalService]
		});

		fixture = TestBed.createComponent(Modal);
		component = fixture.componentInstance;
		de = fixture.debugElement.query(By.css("div"));
		el = de.nativeElement;
	});

	it("should work", () => {
		expect(component instanceof Modal).toBe(true);
	});

	it("should close modal when overlay is clicked", () => {
		fixture.componentInstance.open = true;
		fixture.detectChanges();
		let overlay = fixture.debugElement.query(By.css(".cds--modal.cds--modal-tall.is-visible")).nativeElement;
		spyOn(fixture.componentInstance.overlaySelected, "emit");
		overlay.click();
		expect(fixture.componentInstance.overlaySelected.emit).toHaveBeenCalled();
	});

	it("should close modal when escape is pressed", waitForAsync(() => {
		// Have to check BaseModalService since ModalService extends it
		let modalService = fixture.debugElement.injector.get(BaseModalService);

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
