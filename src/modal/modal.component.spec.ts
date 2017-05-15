import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ComponentFixture, TestBed, fakeAsync, tick, async } from "@angular/core/testing";
import { By }              			 from "@angular/platform-browser";
import { DebugElement }    			 from "@angular/core";

import { ModalComponent } from "./modal.component";
import { OverlayComponent } from "./overlay.component";
import { ModalService } from "./modal.service";

describe("ModalComponent", () => {
	let component: ModalComponent;
	let fixture: ComponentFixture<ModalComponent>;
	let de: DebugElement;
	let el: HTMLElement;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ModalComponent, OverlayComponent],
			imports: [BrowserAnimationsModule],
			providers: [ModalService]
		});

		fixture = TestBed.createComponent(ModalComponent);
		component = fixture.componentInstance;
		de = fixture.debugElement.query(By.css("div.modal-wrapper"));
		el = de.nativeElement;
	});

	it("should work", () => {
		expect(component instanceof ModalComponent).toBe(true);
	});

	it("should close modal when overlay is clicked", () => {
		fixture.detectChanges();
		let overlay = fixture.debugElement.query(By.css(".overlay")).nativeElement;
		spyOn(fixture.componentInstance.overlaySelected, "emit");
		overlay.click();
		expect(fixture.componentInstance.overlaySelected.emit).toHaveBeenCalled();
	});

	it("should close modal when escape is pressed", async(() => {
		let modalService = fixture.debugElement.injector.get(ModalService);

		spyOn(modalService, "destroy");

		let evt = document.createEvent("KeyboardEvent");
		evt.initEvent("keydown", true, false);
		(<any>evt).key = "Escape";
		el.dispatchEvent(evt);
		fixture.detectChanges();
		fixture.whenStable().then(() => {
			fixture.detectChanges();
			expect(modalService.destroy).toHaveBeenCalled();
		});
	}));
});
