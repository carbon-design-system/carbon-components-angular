import {
	TestBed,
	ComponentFixture,
	tick,
	fakeAsync
} from "@angular/core/testing";
import {
	Component,
	Input,
	DebugElement,
	CUSTOM_ELEMENTS_SCHEMA
} from "@angular/core";
import { By } from "@angular/platform-browser";

import {
	Toggletip,
	ToggletipAction,
	ToggletipButton,
	ToggletipContent,
	ToggletipLabel
} from "./";

@Component({
	template: `
		<span cdsToggletipLabel>Toggletip label</span>
		<cds-toggletip
			[isOpen]="isOpen"
			[autoAlign]="autoAlign">
			<button cdsToggletipButton>
				btn
			</button>
			<div cdsToggletipContent>
				<div cdsToggletipAction>
					<button>action btn</button>
				</div>
			</div>
		</cds-toggletip>
		`,
	imports: [Toggletip, ToggletipContent, ToggletipButton, ToggletipAction, ToggletipLabel],
	standalone: true
})
class TestToggletipComponent {
	@Input() isOpen = false;
	@Input() autoAlign = false;
}

describe("Toggletip", () => {
	let fixture: ComponentFixture<TestToggletipComponent>;
	let component: TestToggletipComponent;
	let labelEl: DebugElement;
	let toggletipEl: DebugElement;
	let actionEl: DebugElement;
	let buttonEl: DebugElement;
	let contentEl: DebugElement;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				TestToggletipComponent
			],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		});
		fixture = TestBed.createComponent(TestToggletipComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		labelEl = fixture.debugElement.query(By.directive(ToggletipLabel));
		toggletipEl = fixture.debugElement.query(By.css("cds-toggletip"));
		actionEl = fixture.debugElement.query(By.directive(ToggletipAction));
		buttonEl = fixture.debugElement.query(By.directive(ToggletipButton));
		contentEl = fixture.debugElement.query(By.directive(ToggletipContent));
	});


	it("should create a toggletip component using helper directives", () => {
		expect(component).toBeTruthy();
		expect(labelEl).not.toBeNull();
		expect(toggletipEl).not.toBeNull();
		expect(actionEl).not.toBeNull();
		expect(buttonEl).not.toBeNull();
		expect(contentEl).not.toBeNull();
	});

	it("should keep toggletip open after interacting with actions", fakeAsync(() => {
		spyOn(toggletipEl.componentInstance.isOpenChange, "emit");
		buttonEl.nativeElement.click();
		tick();
		fixture.detectChanges();
		actionEl.nativeElement.querySelector("button").click();
		tick();
		fixture.detectChanges();
		expect(toggletipEl.componentInstance.isOpen).toBeTruthy();
	}));

	it("should close toggletip when document window is clicked (Except toggletip nodes)", fakeAsync(() => {
		spyOn(toggletipEl.componentInstance.isOpenChange, "emit");
		buttonEl.nativeElement.click();
		tick();
		fixture.detectChanges();
		buttonEl.nativeElement.click();
		tick();
		fixture.detectChanges();
		expect(toggletipEl.componentInstance.isOpen).toBeFalsy();
	}));

	it("should markForCheck given the changeDetectorRef is set", () => {
		const spy = spyOn(toggletipEl.componentInstance.changeDetectorRef, "markForCheck");
		buttonEl.nativeElement.click();
		fixture.detectChanges();
		expect(spy).toHaveBeenCalled();
	});

	it("should set auto alignment class to wrapper and caret", () => {
		component.autoAlign = true;
		fixture.detectChanges();
		expect(toggletipEl.nativeElement.classList.contains("cds--popover--auto-align")).toBeTruthy();
		expect(toggletipEl.nativeElement.querySelector(".cds--popover-caret.cds--popover--auto-align")).toBeDefined();
	});

	it("should clean up auto placement on close when auto alignment is enabled", () => {
		spyOn(toggletipEl.componentInstance, "cleanUp");
		component.autoAlign = true;
		component.isOpen = true;
		fixture.detectChanges();
		component.isOpen = false;
		expect(toggletipEl.componentInstance.cleanUp).toHaveBeenCalled();
	});
});
