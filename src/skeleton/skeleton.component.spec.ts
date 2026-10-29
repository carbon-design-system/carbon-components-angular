import { Component, ViewChild } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SkeletonModule } from "./skeleton.module";
import { SkeletonText } from "./skeleton-text.component";
import { SkeletonPlaceholder } from "./skeleton-placeholder.component";
import { SkeletonIcon } from "./skeleton-icon.component";

@Component({
	template: `
		<cds-skeleton-text
			[lines]="lines"
			[heading]="heading"
			[minLineWidth]="minLineWidth"
			[maxLineWidth]="maxLineWidth"
			[ai]="ai">
		</cds-skeleton-text>
		<cds-skeleton-placeholder [ai]="ai"></cds-skeleton-placeholder>
		<cds-skeleton-icon [ai]="ai"></cds-skeleton-icon>
	`
})
class SkeletonTest {
	@ViewChild(SkeletonText) text: SkeletonText;
	@ViewChild(SkeletonPlaceholder) placeholder: SkeletonPlaceholder;
	@ViewChild(SkeletonIcon) icon: SkeletonIcon;

	lines = 1;
	heading = false;
	minLineWidth = 100;
	maxLineWidth = 120;
	ai = false;
}

describe("Skeleton components", () => {
	let fixture: ComponentFixture<SkeletonTest>;
	let wrapper: SkeletonTest;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [SkeletonTest],
			imports: [SkeletonModule]
		});

		fixture = TestBed.createComponent(SkeletonTest);
		fixture.detectChanges();
		wrapper = fixture.componentInstance;
	});

	it("should work", () => {
		expect(wrapper.text instanceof SkeletonText).toBe(true);
		expect(wrapper.placeholder instanceof SkeletonPlaceholder).toBe(true);
		expect(wrapper.icon instanceof SkeletonIcon).toBe(true);
	});

	it("should render the placeholder and icon markup", () => {
		expect(fixture.nativeElement.querySelector(".cds--skeleton__placeholder")).toBeTruthy();
		expect(fixture.nativeElement.querySelector(".cds--icon--skeleton")).toBeTruthy();
	});

	it("should render one line per configured line", () => {
		expect(fixture.nativeElement.querySelectorAll(".cds--skeleton__text").length).toBe(1);

		wrapper.lines = 4;
		fixture.detectChanges();

		expect(fixture.nativeElement.querySelectorAll(".cds--skeleton__text").length).toBe(4);
	});

	it("should render the heading variant", () => {
		expect(fixture.nativeElement.querySelector(".cds--skeleton__heading")).toBeFalsy();

		wrapper.heading = true;
		fixture.detectChanges();

		expect(fixture.nativeElement.querySelector(".cds--skeleton__heading")).toBeTruthy();
	});

	it("should render the ai variant", () => {
		expect(fixture.nativeElement.querySelector(".cds--skeleton__text--ai")).toBeFalsy();

		wrapper.ai = true;
		fixture.detectChanges();

		expect(fixture.nativeElement.querySelector(".cds--skeleton__text--ai")).toBeTruthy();
		expect(fixture.nativeElement.querySelector(".cds--skeleton__placeholder--ai")).toBeTruthy();
		expect(fixture.nativeElement.querySelector(".cds--skeleton__icon--ai")).toBeTruthy();
	});

	it("should render line widths within the configured bounds", () => {
		wrapper.minLineWidth = 40;
		wrapper.maxLineWidth = 45;
		fixture.detectChanges();

		const width = parseInt(fixture.nativeElement.querySelector(".cds--skeleton__text").style.width, 10);
		expect(width).toBeGreaterThanOrEqual(40);
		expect(width).toBeLessThanOrEqual(45);
	});
});
