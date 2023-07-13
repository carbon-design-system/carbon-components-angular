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
			[isOpen]="isOpen">
			<button cdsToggletipButton>
				btn
			</button>
			<div cdsToggletipContent>
				<div cdsToggletipAction>
					<button>action btn</button>
				</div>
			</div>
		</cds-toggletip>
		`
})
class TestToggletipComponent {
	@Input() isOpen = false;
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
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
			declarations: [
				TestToggletipComponent,
				Toggletip,
				ToggletipAction,
				ToggletipButton,
				ToggletipContent,
				ToggletipLabel
			]
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
});
