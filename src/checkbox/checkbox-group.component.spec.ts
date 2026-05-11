import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { CheckboxModule } from "./checkbox.module";

@Component({
	template: `
		<cds-checkbox-group
			legend="Checkbox heading"
			[helperText]="helperText"
			[legendId]="legendId"
			[invalid]="invalid"
			[invalidText]="invalidText"
			[warn]="warn"
			[warnText]="warnText"
			[readOnly]="readOnly"
			[orientation]="orientation">
			<cds-checkbox id="checkbox-label-1">Checkbox label</cds-checkbox>
			<cds-checkbox id="checkbox-label-2">Checkbox label</cds-checkbox>
		</cds-checkbox-group>
	`,
	standalone: false
})
class GroupBasicHost {
	helperText: string;
	legendId: string;
	invalid = false;
	invalidText: string;
	warn = false;
	warnText: string;
	readOnly = false;
	orientation: "horizontal" | "vertical" = "vertical";
}

@Component({
	template: `
		<cds-checkbox-group legend="Checkbox heading" [decorator]="decTpl">
			<cds-checkbox id="c1">One</cds-checkbox>
		</cds-checkbox-group>
		<ng-template #decTpl><span class="decorator-stub"></span></ng-template>
	`,
	standalone: false
})
class GroupDecoratorHost {}

@Component({
	template: `
		<cds-checkbox-group
			legend="Checkbox heading"
			[readOnly]="groupReadOnly">
			<cds-checkbox id="checkbox-a1">Checkbox 1</cds-checkbox>
			<cds-checkbox id="checkbox-a2">Checkbox 2</cds-checkbox>
		</cds-checkbox-group>
	`,
	standalone: false
})
class GroupReadOnlyInheritBothHost {
	groupReadOnly = false;
}

@Component({
	template: `
		<cds-checkbox-group
			legend="Checkbox heading"
			[readOnly]="groupReadOnly">
			<cds-checkbox id="checkbox-1" [readOnly]="false">Checkbox 1</cds-checkbox>
			<cds-checkbox id="checkbox-2">Checkbox 2</cds-checkbox>
		</cds-checkbox-group>
	`,
	standalone: false
})
class GroupInheritanceHost {
	groupReadOnly = false;
}

@Component({
	template: `
		<cds-checkbox-group legend="Checkbox heading" [invalid]="groupInvalid">
			<cds-checkbox id="checkbox-b1">Checkbox 1</cds-checkbox>
			<cds-checkbox id="checkbox-b2">Checkbox 2</cds-checkbox>
		</cds-checkbox-group>
	`,
	standalone: false
})
class GroupInvalidInheritBothHost {
	groupInvalid = false;
}

@Component({
	template: `
		<cds-checkbox-group legend="Checkbox heading" [invalid]="groupInvalid">
			<cds-checkbox id="checkbox-1" [invalid]="false">Checkbox 1</cds-checkbox>
			<cds-checkbox id="checkbox-2">Checkbox 2</cds-checkbox>
		</cds-checkbox-group>
	`,
	standalone: false
})
class GroupInheritanceInvalidHost {
	groupInvalid = false;
}

describe("CheckboxGroup", () => {
	beforeEach(() => {
		TestBed.resetTestingModule();
		TestBed.configureTestingModule({
			imports: [FormsModule, CheckboxModule],
			declarations: [
				GroupBasicHost,
				GroupDecoratorHost,
				GroupReadOnlyInheritBothHost,
				GroupInheritanceHost,
				GroupInvalidInheritBothHost,
				GroupInheritanceInvalidHost
			]
		});
	});

	it("should render legend text", () => {
		const f = TestBed.createComponent(GroupBasicHost);
		f.detectChanges();
		expect(f.debugElement.nativeElement.textContent).toContain(
			"Checkbox heading"
		);
	});

	it("should render helper text", () => {
		const f = TestBed.createComponent(GroupBasicHost);
		f.componentInstance.helperText = "Helper text";
		f.detectChanges();
		expect(f.debugElement.nativeElement.textContent).toContain(
			"Helper text"
		);
	});

	it("should set data-invalid on the fieldset when invalid is true", () => {
		const f = TestBed.createComponent(GroupBasicHost);
		f.componentInstance.invalid = true;
		f.detectChanges();
		const fieldset = f.debugElement.query(
			By.css("fieldset.cds--checkbox-group")
		);
		expect(fieldset.nativeElement.getAttribute("data-invalid")).toBe(
			"true"
		);
	});

	it("should display invalidText when invalid is true", () => {
		const f = TestBed.createComponent(GroupBasicHost);
		f.componentInstance.invalid = true;
		f.componentInstance.invalidText = "Invalid text";
		f.detectChanges();
		expect(f.debugElement.nativeElement.textContent).toContain(
			"Invalid text"
		);
	});

	it("should set id on legend when legendId is set", () => {
		const f = TestBed.createComponent(GroupBasicHost);
		f.componentInstance.legendId = "legend-testid";
		f.detectChanges();
		const legend = f.debugElement.query(By.css("legend.cds--label"));
		expect(legend.nativeElement.getAttribute("id")).toBe("legend-testid");
	});

	it("should add readonly class when readOnly is true", () => {
		const f = TestBed.createComponent(GroupBasicHost);
		f.componentInstance.readOnly = true;
		f.detectChanges();
		const fieldset = f.debugElement.query(
			By.css("fieldset.cds--checkbox-group")
		);
		expect(
			fieldset.nativeElement.classList.contains(
				"cds--checkbox-group--readonly"
			)
		).toBe(true);
	});

	it("should add warning class and warning icon when warn is true", () => {
		const f = TestBed.createComponent(GroupBasicHost);
		f.componentInstance.warn = true;
		f.detectChanges();
		const fieldset = f.debugElement.query(
			By.css("fieldset.cds--checkbox-group")
		);
		expect(
			fieldset.nativeElement.classList.contains(
				"cds--checkbox-group--warning"
			)
		).toBe(true);
		expect(
			f.debugElement.query(
				By.css(".cds--checkbox__invalid-icon--warning")
			)
		).toBeTruthy();
	});

	it("should display warnText when warn is true", () => {
		const f = TestBed.createComponent(GroupBasicHost);
		f.componentInstance.warn = true;
		f.componentInstance.warnText = "Warn text";
		f.detectChanges();
		expect(f.debugElement.nativeElement.textContent).toContain("Warn text");
	});

	it("should add horizontal class when orientation is horizontal", () => {
		const f = TestBed.createComponent(GroupBasicHost);
		f.componentInstance.orientation = "horizontal";
		f.detectChanges();
		const fieldset = f.debugElement.query(
			By.css("fieldset.cds--checkbox-group")
		);
		expect(
			fieldset.nativeElement.classList.contains(
				"cds--checkbox-group--horizontal"
			)
		).toBe(true);
	});

	it("should add decorator class when decorator template is set", () => {
		const f = TestBed.createComponent(GroupDecoratorHost);
		f.detectChanges();
		const fieldset = f.debugElement.query(
			By.css("fieldset.cds--checkbox-group")
		);
		expect(
			fieldset.nativeElement.classList.contains(
				"cds--checkbox-group--decorator"
			)
		).toBe(true);
	});

	describe("host injection (group state to children)", () => {
		// CheckboxGroup notifies children in a microtask, so we run CD twice to allow OnPush checkboxes to refresh
		function detectAfterGroupNotify(fixture: ComponentFixture<unknown>) {
			fixture.detectChanges();
			fixture.detectChanges();
		}

		it("should apply group readOnly to child checkboxes that do not set readOnly", () => {
			const f = TestBed.createComponent(GroupReadOnlyInheritBothHost);
			f.componentInstance.groupReadOnly = true;
			detectAfterGroupNotify(f);
			const inputs = f.debugElement.queryAll(
				By.css("input.cds--checkbox")
			);
			expect(inputs.length).toBe(2);
			expect(inputs[0].nativeElement.getAttribute("aria-readonly")).toBe(
				"true"
			);
			expect(inputs[1].nativeElement.getAttribute("aria-readonly")).toBe(
				"true"
			);
		});

		it("should let a child opt out of group readOnly with explicit readOnly false", () => {
			const f = TestBed.createComponent(GroupInheritanceHost);
			f.componentInstance.groupReadOnly = true;
			detectAfterGroupNotify(f);
			const inputs = f.debugElement.queryAll(
				By.css("input.cds--checkbox")
			);
			expect(
				inputs[0].nativeElement.getAttribute("aria-readonly")
			).not.toBe("true");
			expect(inputs[1].nativeElement.getAttribute("aria-readonly")).toBe(
				"true"
			);
		});

		it("should apply group invalid to child checkboxes that do not set invalid", () => {
			const f = TestBed.createComponent(GroupInvalidInheritBothHost);
			f.componentInstance.groupInvalid = true;
			detectAfterGroupNotify(f);
			const inputs = f.debugElement.queryAll(
				By.css("input.cds--checkbox")
			);
			expect(inputs[0].nativeElement.getAttribute("data-invalid")).toBe(
				"true"
			);
			expect(inputs[1].nativeElement.getAttribute("data-invalid")).toBe(
				"true"
			);
		});

		it("should let a child opt out of group invalid with explicit invalid false", () => {
			const f = TestBed.createComponent(GroupInheritanceInvalidHost);
			f.componentInstance.groupInvalid = true;
			detectAfterGroupNotify(f);
			const inputs = f.debugElement.queryAll(
				By.css("input.cds--checkbox")
			);
			expect(
				inputs[0].nativeElement.getAttribute("data-invalid")
			).not.toBe("true");
			expect(inputs[1].nativeElement.getAttribute("data-invalid")).toBe(
				"true"
			);
		});
	});
});
