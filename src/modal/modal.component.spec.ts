import { ComponentFixture, fakeAsync, TestBed, waitForAsync } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { Component, DebugElement, ViewChild } from "@angular/core";
import { advancedFakeAsync } from "../test-helpers/change-detection";

import { Modal } from "./modal.component";
import { Overlay } from "./overlay.component";
import { ModalService } from "./modal.service";
import { Placeholder } from "./../placeholder/index";
import { BaseModalService } from "./base-modal.service";
import { ModalModule } from "./modal.module";
import { ModalHeader } from "./modal-header.component";
import { ModalFooter } from "./modal-footer.component";

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
			imports: [
				Placeholder,
				Modal, Overlay
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

@Component({
	template: `
		<cds-modal [open]="open" ariaLabel="test modal">
			<button modal-primary-focus>focus me</button>
		</cds-modal>
	`,
	imports: [Placeholder, Modal, Overlay, ModalModule]
})
class ModalOpenStateTest {
	@ViewChild(Modal) modal: Modal;
	open = true;
}

describe("Modal open state", () => {
	let fixture: ComponentFixture<ModalOpenStateTest>;
	let wrapper: ModalOpenStateTest;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				ModalOpenStateTest
			],
			providers: [ModalService, BaseModalService]
		});

		fixture = TestBed.createComponent(ModalOpenStateTest);
		fixture.detectChanges();
		wrapper = fixture.componentInstance;
	});

	it("should hide the overlay when escape closes the modal", () => {
		expect(fixture.nativeElement.querySelector(".cds--modal").classList).toContain("is-visible");

		fixture.nativeElement.querySelector(".cds--modal-container")
			.dispatchEvent(new KeyboardEvent("keydown", { bubbles: true, key: "Escape" }));
		fixture.detectChanges();

		expect(wrapper.modal.open).toBe(false);
		expect(fixture.nativeElement.querySelector(".cds--modal").classList).not.toContain("is-visible");
	});

	it("should focus the primary element once the modal is open", fakeAsync(() => {
		wrapper.open = false;
		fixture.detectChanges();

		wrapper.open = true;
		fixture.detectChanges();

		// the focus is scheduled 100ms out, the content has to already be in the DOM
		advancedFakeAsync(fixture, 100);

		expect(document.activeElement).toBe(fixture.nativeElement.querySelector("[modal-primary-focus]"));
	}));

	it("should reopen the modal after escape has closed it", fakeAsync(() => {
		fixture.nativeElement.querySelector(".cds--modal-container")
			.dispatchEvent(new KeyboardEvent("keydown", { bubbles: true, key: "Escape" }));
		fixture.detectChanges();
		expect(fixture.nativeElement.querySelector(".cds--modal").classList).not.toContain("is-visible");

		// the host still holds `true`, so it has to pass through `false` for the input to change
		wrapper.open = false;
		fixture.detectChanges();
		wrapper.open = true;
		fixture.detectChanges();
		advancedFakeAsync(fixture, 100);

		expect(wrapper.modal.open).toBe(true);
		expect(fixture.nativeElement.querySelector(".cds--modal").classList).toContain("is-visible");
	}));
});

@Component({
	template: `
		<cds-modal [open]="true">
			<cds-modal-header [showCloseButton]="showCloseButton" (closeSelect)="closed = true">
				<h3 cdsModalHeaderHeading>{{heading}}</h3>
			</cds-modal-header>
			<div cdsModalContent>body</div>
			<cds-modal-footer>
				<button cdsButton="primary">Save</button>
			</cds-modal-footer>
		</cds-modal>
	`,
	imports: [Placeholder, Modal, Overlay, ModalModule]
})
class ModalHeaderFooterTest {
	@ViewChild(ModalHeader) header: ModalHeader;
	@ViewChild(ModalFooter) footer: ModalFooter;
	heading = "Modal heading";
	showCloseButton = true;
	closed = false;
}

describe("ModalHeader and ModalFooter", () => {
	let fixture: ComponentFixture<ModalHeaderFooterTest>;
	let wrapper: ModalHeaderFooterTest;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				ModalHeaderFooterTest
			],
			providers: [ModalService, BaseModalService]
		});

		fixture = TestBed.createComponent(ModalHeaderFooterTest);
		fixture.detectChanges();
		wrapper = fixture.componentInstance;
	});

	it("should work", () => {
		expect(wrapper.header instanceof ModalHeader).toBe(true);
		expect(wrapper.footer instanceof ModalFooter).toBe(true);
	});

	it("should render the projected heading and footer content", () => {
		expect(fixture.nativeElement.textContent).toContain("Modal heading");
		expect(fixture.nativeElement.querySelector("cds-modal-footer").textContent).toContain("Save");
	});

	it("should emit closeSelect when the close button is clicked", () => {
		fixture.nativeElement.querySelector(".cds--modal-close").click();
		fixture.detectChanges();

		expect(wrapper.closed).toBe(true);
	});

	it("should hide the close button when it is turned off", () => {
		expect(fixture.nativeElement.querySelector(".cds--modal-close")).toBeTruthy();

		wrapper.showCloseButton = false;
		fixture.detectChanges();

		expect(fixture.nativeElement.querySelector(".cds--modal-close")).toBeFalsy();
	});

	it("should update the heading when it changes", () => {
		wrapper.heading = "Updated heading";
		fixture.detectChanges();

		expect(fixture.nativeElement.textContent).toContain("Updated heading");
	});
});
