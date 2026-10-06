import { Component, Input } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { ContextMenuModule } from "./context-menu.module";
import { IconModule } from "../icon";
import { By } from "@angular/platform-browser";
import { ContextMenuSelectionService } from "./context-menu-selection.service";

@Component({
	template: `
		<cds-context-menu [open]="open">
			<cds-context-menu-item label="Option with icon" icon="calendar"></cds-context-menu-item>
			<cds-context-menu-divider></cds-context-menu-divider>
			<cds-context-menu-item type="checkbox" label="Enable magic"></cds-context-menu-item>
			<cds-context-menu-divider></cds-context-menu-divider>
			<cds-context-menu-group
				type="checkbox"
				label="Selection group"
				[value]="checkboxGroupValue">
				<cds-context-menu-item type="checkbox" label="Blue" value="blue"></cds-context-menu-item>
				<cds-context-menu-item type="checkbox" label="Red" value="red" [checked]="true"></cds-context-menu-item>
			</cds-context-menu-group>
			<cds-context-menu-divider></cds-context-menu-divider>
			<cds-context-menu-item label="Radio flyout">
				<cds-context-menu>
					<cds-context-menu-group
						type="radio"
						[value]="radioGroupValue"
						(valueChange)="onRadioChange($event)">
						<cds-context-menu-item type="radio" label="Radio one" value="one"></cds-context-menu-item>
						<cds-context-menu-item type="radio" label="Radio two" value="two"></cds-context-menu-item>
					</cds-context-menu-group>
				</cds-context-menu>
			</cds-context-menu-item>
		</cds-context-menu>
	`
})
class MenuTestComponent {
	@Input() open = true;
	radioGroupValue = "one";
	checkboxGroupValue = ["red"];

	onRadioChange(event) {}
}

describe("Menu", () => {
	let fixture, wrapper;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				MenuTestComponent
			],
			imports: [
				ContextMenuModule,
				IconModule
			]
		});
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(MenuTestComponent);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should work", () => {
		expect(wrapper instanceof MenuTestComponent).toBe(true);
	});

	it("should remove open css class when open is set to false", () => {
		const menu = fixture.debugElement.query(By.css("cds-context-menu"));
		wrapper.open = false;
		fixture.detectChanges();
		expect(menu.nativeElement.className.includes("cds--menu--open").nativeElement).toBeFalsy();
	});

	it("Should have red checkbox checked by default", () => {
		const selectedRadio = fixture.debugElement.query(
			By.css("cds-context-menu-item[type='checkbox'][label='Red']")
		);
		expect(selectedRadio.componentInstance.checked).toBeTrue();
	});

	it("Should have radio one selected by default", () => {
		const selectedRadio = fixture.debugElement.query(
			By.css("cds-context-menu-item[type='radio'][value='one']")
		);
		expect(selectedRadio.componentInstance.checked).toBeTrue();
	});

	it("should emit valueChange from group when a radio item is clicked", () => {
		spyOn(wrapper, "onRadioChange");

		const radioOne = fixture.debugElement.query(
			By.css("cds-context-menu-item[type='radio'][value='one']")
		);
		const radioTwo = fixture.debugElement.query(
			By.css("cds-context-menu-item[type='radio'][value='two']")
		);

		radioTwo.nativeElement.click();
		fixture.detectChanges();

		expect(wrapper.onRadioChange).toHaveBeenCalledWith("two");
		expect(radioTwo.nativeElement.querySelector("svg")).toBeTruthy();
		expect(radioOne.nativeElement.querySelector("svg")).toBeFalsy();
	});

	it("should check the radio item the selection service selects", () => {
		const group = fixture.debugElement.query(By.css("cds-context-menu-group[type='radio']"));
		group.injector.get(ContextMenuSelectionService).selectRadio("two");
		fixture.detectChanges();

		const radioOne = fixture.debugElement.query(
			By.css("cds-context-menu-item[type='radio'][value='one']")
		);
		const radioTwo = fixture.debugElement.query(
			By.css("cds-context-menu-item[type='radio'][value='two']")
		);
		expect(radioTwo.nativeElement.querySelector("svg")).toBeTruthy();
		expect(radioOne.nativeElement.querySelector("svg")).toBeFalsy();
	});

	it("should update aria-checked when a checkbox item is toggled", () => {
		const blue = fixture.debugElement.query(By.css("cds-context-menu-item[label='Blue']"));
		expect(blue.nativeElement.getAttribute("aria-checked")).toBe("false");

		blue.nativeElement.click();
		fixture.detectChanges();

		expect(blue.nativeElement.getAttribute("aria-checked")).toBe("true");
		expect(blue.nativeElement.querySelector("svg")).toBeTruthy();
	});

	it("should check every checkbox item the selection service selects", () => {
		const group = fixture.debugElement.query(By.css("cds-context-menu-group[type='checkbox']"));
		group.injector.get(ContextMenuSelectionService).selectCheckboxes(["blue", "red"]);
		fixture.detectChanges();

		const blue = fixture.debugElement.query(By.css("cds-context-menu-item[label='Blue']"));
		const red = fixture.debugElement.query(By.css("cds-context-menu-item[label='Red']"));
		expect(blue.nativeElement.getAttribute("aria-checked")).toBe("true");
		expect(red.nativeElement.getAttribute("aria-checked")).toBe("true");
		expect(blue.nativeElement.querySelector("svg")).toBeTruthy();
		expect(red.nativeElement.querySelector("svg")).toBeTruthy();
	});

	it("should apply appropriate attributes to the divider component", () => {
		const divider = fixture.debugElement.query(
			By.css("cds-context-menu-divider")
		);

		expect(divider.nativeElement.className.includes("cds--menu-item-divider")).toBeTrue();
		expect(divider.nativeElement.role).toEqual("separator");
	});

	it("should detect if there is a child context menu", () => {
		const flyoutElement = fixture.debugElement.query(
			By.css("cds-context-menu-item[label='Radio flyout']")
		);
		const flyoutComponent = flyoutElement.componentInstance;

		expect(flyoutComponent.childContextMenu).toBeTruthy();
		expect(flyoutComponent.hasChildren).toBeTruthy();
	});
});
