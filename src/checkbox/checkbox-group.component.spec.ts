import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";

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
	imports: [CheckboxModule]
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
	imports: [CheckboxModule]
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
	imports: [CheckboxModule]
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
	imports: [CheckboxModule]
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
	imports: [CheckboxModule]
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
	imports: [CheckboxModule]
})
class GroupInheritanceInvalidHost {
	groupInvalid = false;
}

@Component({
	template: `
		<cds-checkbox-group legend="Checkbox heading" [(ngModel)]="selected">
			@for (option of options; track option) {
				<cds-checkbox [value]="option">{{option}}</cds-checkbox>
			}
		</cds-checkbox-group>
	`,
	imports: [CheckboxModule, FormsModule]
})
class GroupNgModelHost {
	options = ["a", "b", "c"];
	selected: string[] = ["b"];
}

@Component({
	template: `
		<cds-checkbox-group legend="Checkbox heading" [formControl]="control">
			<cds-checkbox value="a">A</cds-checkbox>
			<cds-checkbox value="b">B</cds-checkbox>
			<cds-checkbox>No value</cds-checkbox>
		</cds-checkbox-group>
	`,
	imports: [CheckboxModule, ReactiveFormsModule]
})
class GroupReactiveHost {
	control = new FormControl<string[]>(["a"]);
}

@Component({
	template: `
		<cds-checkbox-group legend="Checkbox heading">
			<cds-checkbox value="a" [checked]="true">A</cds-checkbox>
			<cds-checkbox value="b">B</cds-checkbox>
		</cds-checkbox-group>
	`,
	imports: [CheckboxModule]
})
class GroupStandaloneHost {}

describe("CheckboxGroup", () => {
	beforeEach(() => {
		TestBed.resetTestingModule();
		TestBed.configureTestingModule({
			imports: [
				FormsModule,
				GroupBasicHost,
				GroupDecoratorHost,
				GroupReadOnlyInheritBothHost,
				GroupInheritanceHost,
				GroupInvalidInheritBothHost,
				GroupInheritanceInvalidHost,
				GroupNgModelHost,
				GroupReactiveHost,
				GroupStandaloneHost
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

	describe("forms support", () => {
		const getInputs = (f: ComponentFixture<unknown>): HTMLInputElement[] =>
			f.debugElement
				.queryAll(By.css("input.cds--checkbox"))
				.map(input => input.nativeElement);

		it("should not change the checked state of checkboxes when used without forms", async () => {
			const f = TestBed.createComponent(GroupStandaloneHost);
			f.detectChanges();
			await f.whenStable();
			f.detectChanges();
			expect(getInputs(f).map(input => input.checked)).toEqual([true, false]);
		});

		it("should check the checkboxes included in the ngModel value", async () => {
			const f = TestBed.createComponent(GroupNgModelHost);
			f.detectChanges();
			await f.whenStable();
			f.detectChanges();
			expect(getInputs(f).map(input => input.checked)).toEqual([false, true, false]);
		});

		it("should update the ngModel value when checkboxes are toggled", async () => {
			const f = TestBed.createComponent(GroupNgModelHost);
			f.detectChanges();
			await f.whenStable();
			const inputs = getInputs(f);
			inputs[2].click();
			f.detectChanges();
			expect(f.componentInstance.selected).toEqual(["b", "c"]);
			inputs[1].click();
			f.detectChanges();
			expect(f.componentInstance.selected).toEqual(["c"]);
			inputs[2].click();
			f.detectChanges();
			expect(f.componentInstance.selected).toEqual([]);
		});

		it("should not mutate the array bound to ngModel", async () => {
			const f = TestBed.createComponent(GroupNgModelHost);
			const initial = f.componentInstance.selected;
			f.detectChanges();
			await f.whenStable();
			getInputs(f)[0].click();
			f.detectChanges();
			expect(initial).toEqual(["b"]);
			expect(f.componentInstance.selected).not.toBe(initial);
		});

		it("should reflect ngModel changes made from the outside", async () => {
			const f = TestBed.createComponent(GroupNgModelHost);
			f.detectChanges();
			await f.whenStable();
			f.componentInstance.selected = ["a", "c"];
			f.detectChanges();
			await f.whenStable();
			f.detectChanges();
			expect(getInputs(f).map(input => input.checked)).toEqual([true, false, true]);
		});

		it("should apply the value to checkboxes rendered later", async () => {
			const f = TestBed.createComponent(GroupNgModelHost);
			f.detectChanges();
			await f.whenStable();
			f.componentInstance.options = ["a", "b", "c", "d"];
			f.componentInstance.selected = ["d"];
			f.detectChanges();
			await f.whenStable();
			f.detectChanges();
			await f.whenStable();
			f.detectChanges();
			expect(getInputs(f).map(input => input.checked)).toEqual([false, false, false, true]);
		});

		it("should work with reactive forms", () => {
			const f = TestBed.createComponent(GroupReactiveHost);
			f.detectChanges();
			const inputs = getInputs(f);
			expect(inputs.map(input => input.checked)).toEqual([true, false, false]);

			inputs[1].click();
			f.detectChanges();
			expect(f.componentInstance.control.value).toEqual(["a", "b"]);

			f.componentInstance.control.setValue(["b"]);
			f.detectChanges();
			expect(inputs.map(input => input.checked)).toEqual([false, true, false]);

			f.componentInstance.control.setValue(null);
			f.detectChanges();
			expect(inputs.map(input => input.checked)).toEqual([false, false, false]);
		});

		it("should ignore checkboxes without a value", () => {
			const f = TestBed.createComponent(GroupReactiveHost);
			f.detectChanges();
			getInputs(f)[2].click();
			f.detectChanges();
			expect(f.componentInstance.control.value).toEqual(["a"]);
		});

		it("should disable every checkbox when the form control is disabled", async () => {
			const f = TestBed.createComponent(GroupReactiveHost);
			f.detectChanges();
			f.componentInstance.control.disable();
			await f.whenStable();
			f.detectChanges();
			expect(getInputs(f).every(input => input.disabled)).toBe(true);

			getInputs(f)[1].click();
			expect(f.componentInstance.control.value).toEqual(["a"]);

			f.componentInstance.control.enable();
			await f.whenStable();
			f.detectChanges();
			expect(getInputs(f).some(input => input.disabled)).toBe(false);
		});

		it("should mark the control as touched only when focus leaves the group", () => {
			const f = TestBed.createComponent(GroupReactiveHost);
			f.detectChanges();
			const inputs = getInputs(f);
			const group = f.debugElement.query(By.css("cds-checkbox-group")).nativeElement;

			group.dispatchEvent(new FocusEvent("focusout", { relatedTarget: inputs[1], bubbles: true }));
			expect(f.componentInstance.control.touched).toBe(false);

			group.dispatchEvent(new FocusEvent("focusout", { relatedTarget: null, bubbles: true }));
			expect(f.componentInstance.control.touched).toBe(true);
		});
	});
});
