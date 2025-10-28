import { ChangeDetectorRef } from "@angular/core";
import { fakeAsync, tick } from "@angular/core/testing";
import { I18n } from "carbon-components-angular/i18n";

import { SelectionTile } from "./selection-tile.component";

describe("SelectionTile", () => {
	let changeDetectorRef: jasmine.SpyObj<ChangeDetectorRef>;
	let component: SelectionTile;

	beforeEach(() => {
		changeDetectorRef = jasmine.createSpyObj<ChangeDetectorRef>("ChangeDetectorRef", ["markForCheck"]);
		component = new SelectionTile(new I18n(), changeDetectorRef);
		component["input"] = {
			nativeElement: {
				checked: false
			}
		};
	});

	it("marks for check when selected is changed programmatically", () => {
		component.selected = true;

		expect(changeDetectorRef.markForCheck).toHaveBeenCalledTimes(1);
		expect(component.selected).toBeTrue();
	});

	it("marks for check after the deferred sync in ngAfterViewInit", fakeAsync(() => {
		component.selected = true;
		changeDetectorRef.markForCheck.calls.reset();

		component.ngAfterViewInit();
		tick();

		expect(component["input"].nativeElement.checked).toBeTrue();
		expect(changeDetectorRef.markForCheck).toHaveBeenCalledTimes(1);
	}));
});
