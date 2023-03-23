import { TestBed, ComponentFixture } from "@angular/core/testing";
import { Component, DebugElement, Input } from "@angular/core";
import { By } from "@angular/platform-browser";

import { ProgressBar } from "./";

@Component({
	template: `
		<cds-progress-bar
			[label]="label"
			[helperText]="helperText"
			[max]="max"
			[size]="size"
			[status]="status"
			[type]="type"
			[value]="value">
		</cds-progress-bar>
		`
})
class TestProgessBarComponent {
	@Input() label = "Label";
	@Input() helperText = "helper text";
	@Input() max = 100;
	@Input() size: "small" | "big" = "big";
	@Input() status: "active" | "finished" | "error" = "active";
	@Input() type: "default" | "inline" | "indented" = "default";
	@Input() value: undefined | number = 100;
}

describe("Progress bar", () => {
	let fixture: ComponentFixture<TestProgessBarComponent>;
	let component: TestProgessBarComponent;
	let element: DebugElement;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [TestProgessBarComponent, ProgressBar]
		});
		fixture = TestBed.createComponent(TestProgessBarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-progress-bar"));
	});

	it("should create a progress bar component", () => {
		expect(component).toBeTruthy();
		expect(element).not.toBeNull();
		expect(element.nativeElement.className.includes("cds--progress-bar")).toBeTruthy();
	});

	it("should create an indeterminate progress bar when value is undefined & status is active", () => {
		component.value = undefined;
		component.status = "active";
		fixture.detectChanges();
		expect(element.nativeElement.className.includes("cds--progress-bar--indeterminate")).toBeTruthy();
	});

	it("should set the appropriate status class", () => {
		component.status = "finished";
		fixture.detectChanges();
		expect(element.nativeElement.className.includes("cds--progress-bar--finished")).toBeTruthy();
		component.status = "error";
		fixture.detectChanges();
		expect(element.nativeElement.className.includes("cds--progress-bar--error")).toBeTruthy();
	});

	it("should set the the correct size class", () => {
		expect(element.nativeElement.className.includes("cds--progress-bar--big")).toBeTruthy();
		component.size = "small";
		fixture.detectChanges();
		expect(element.nativeElement.className.includes("cds--progress-bar--small")).toBeTruthy();
	});
});
