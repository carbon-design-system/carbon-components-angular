import { TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { Component } from "@angular/core";

import { IconModule } from "../icon";
import { TagFilter } from "./tag-filter.component";

@Component({
	template: `
	<cds-tag-filter [disabled]="disabled">TagFilter</cds-tag-filter>`
})
class TagFilterTest {
	disabled = false;
}

describe("TagFilter", () => {
	let fixture, debugElement;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				TagFilter,
				TagFilterTest
			],
			imports: [
				IconModule
			]
		});
	});

	it("should call onClick on label click", () => {
		fixture = TestBed.createComponent(TagFilterTest);
		debugElement = fixture.debugElement.query(By.css(".cds--tag__label"));
		fixture.detectChanges();
		spyOn(debugElement.componentInstance.click, "emit");
		debugElement.nativeElement.click();
		fixture.detectChanges();
		expect(debugElement.componentInstance.click.emit).toHaveBeenCalledWith({ action: "click" });
	});

	it("should call both onClick and onClose on close icon click", () => {
		fixture = TestBed.createComponent(TagFilterTest);
		debugElement = fixture.debugElement.query(By.css(".cds--tag__close-icon"));
		fixture.detectChanges();
		spyOn(debugElement.componentInstance.close, "emit");
		spyOn(debugElement.componentInstance.click, "emit");
		debugElement.nativeElement.click();
		fixture.detectChanges();
		expect(debugElement.componentInstance.close.emit).toHaveBeenCalled();
		expect(debugElement.componentInstance.click.emit).toHaveBeenCalledWith({ action: "close" });
	});

	it("should not call onClick when disabled", () => {
		fixture = TestBed.createComponent(TagFilterTest);
		fixture.componentInstance.disabled = true;
		debugElement = fixture.debugElement.query(By.css(".cds--tag__label"));
		fixture.detectChanges();
		spyOn(debugElement.componentInstance.click, "emit");
		debugElement.nativeElement.click();
		fixture.detectChanges();
		expect(debugElement.componentInstance.click.emit).not.toHaveBeenCalled();
	});

	it("should not call onClick nor onClose when disabled", () => {
		fixture = TestBed.createComponent(TagFilterTest);
		fixture.componentInstance.disabled = true;
		debugElement = fixture.debugElement.query(By.css(".cds--tag__close-icon"));
		fixture.detectChanges();
		spyOn(debugElement.componentInstance.close, "emit");
		spyOn(debugElement.componentInstance.click, "emit");
		debugElement.nativeElement.click();
		fixture.detectChanges();
		expect(debugElement.componentInstance.close.emit).not.toHaveBeenCalled();
		expect(debugElement.componentInstance.click.emit).not.toHaveBeenCalled();
	});
});
