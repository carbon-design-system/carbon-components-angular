import { ChangeDetectorRef } from "@angular/core";
import {
	ComponentFixture,
	fakeAsync,
	TestBed,
	tick
} from "@angular/core/testing";

import { SelectionTile } from "./selection-tile.component";

describe("SelectionTile", () => {
	let component: SelectionTile;
	let fixture: ComponentFixture<SelectionTile>;
	let markForCheckSpy: jasmine.Spy;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SelectionTile]
		}).compileComponents();

		fixture = TestBed.createComponent(SelectionTile);
		component = fixture.componentInstance;

		const injectedRef = (component as unknown as { changeDetectorRef: ChangeDetectorRef })
			.changeDetectorRef;
		markForCheckSpy = spyOn(injectedRef, "markForCheck");

		component.input = {
			nativeElement: {
				checked: false
			}
		};
	});

	it("marks for check when selected is changed programmatically", () => {
		component.selected = true;

		expect(markForCheckSpy).toHaveBeenCalledTimes(1);
		expect(component.selected).toBeTrue();
	});

	it("marks for check after the deferred sync in ngAfterViewInit", fakeAsync(() => {
		component.selected = true;
		markForCheckSpy.calls.reset();

		component.ngAfterViewInit();
		tick();

		expect(component["input"].nativeElement.checked).toBeTrue();
		expect(markForCheckSpy).toHaveBeenCalledTimes(1);
	}));
});
