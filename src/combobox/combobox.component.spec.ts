import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { By	} from "@angular/platform-browser";
import { ChevronDown16Module } from "@carbon/icons-angular/lib/chevron--down/16";
import { WarningFilled16Module } from "@carbon/icons-angular/lib/warning--filled/16";
import { Close16Module } from "@carbon/icons-angular/lib/close/16";
import { I18nModule } from "../i18n/i18n.module";

import { ListItem } from "./../dropdown/list-item.interface";
import { ComboBox } from "./combobox.component";
import { DropdownList } from "./../dropdown/list/dropdown-list.component";
import { ScrollableList } from "./../dropdown/scrollable-list.directive";
import { FormsModule } from "@angular/forms";


@Component({
	template: `
	<ibm-combo-box
		placeholder="placeholder"
		label="label"
		[items]="items"
		[(ngModel)]="model">
		<ibm-dropdown-list></ibm-dropdown-list>
	</ibm-combo-box>`
})
class ComboboxTest {
	items = [
		{content: "one", selected: false},
		{content: "two", selected: false},
		{content: "three", selected: false}
	];
	model: ListItem;
}

describe("Combo box", () => {
	let fixture, wrapper, element;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				ComboBox,
				DropdownList,
				ComboboxTest,
				ScrollableList
			],
			imports: [
				ChevronDown16Module,
				WarningFilled16Module,
				Close16Module,
				I18nModule,
				FormsModule
			]
		});
	});

	it("should work", () => {
		fixture = TestBed.createComponent(ComboBox);
		fixture.detectChanges();
		expect(fixture.componentInstance instanceof ComboBox).toBe(true);
	});

	it("should change the placeholder value upon selection and propagate changes back to the form", () => {
		fixture = TestBed.createComponent(ComboboxTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("ibm-combo-box"));

		const dropdownToggle = element.nativeElement.querySelector(".bx--list-box__field");
		dropdownToggle.click();
		fixture.detectChanges();

		const dropdownOption = element.nativeElement.querySelector(".bx--list-box__menu-item");
		dropdownOption.click();
		fixture.detectChanges();

		expect(element.nativeElement.querySelector("input").value).toBe("one");
		expect(wrapper.model.content).toBe("one");
		expect(wrapper.model.selected).toBe(true);

		element.componentInstance.clearSelected();

		// No longer emits null when selection is empty.
		expect(wrapper.model).toEqual([]);
	});

	it("should open dropdown on ArrowDown and close dropdown on Escape", () => {
		const keyDown = new KeyboardEvent("keydown", { "key": "ArrowDown" });
		const escape = new KeyboardEvent("keydown", { "key": "Escape" });

		fixture = TestBed.createComponent(ComboboxTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("ibm-combo-box"));
		element.componentInstance.open = false;

		element.nativeElement.dispatchEvent(keyDown);
		fixture.detectChanges();

		expect(element.componentInstance.open).toBe(true);

		element.nativeElement.dispatchEvent(escape);
		fixture.detectChanges();

		expect(element.componentInstance.open).toBe(false);
	});

	it("should call onSearch on keyup event", () => {
		const keyupT = new KeyboardEvent("keyup", { "key": "t" });

		fixture = TestBed.createComponent(ComboboxTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("ibm-combo-box"));
		spyOn(element.componentInstance, "onSearch");

		const textInput = element.nativeElement.querySelector(".bx--text-input");
		textInput.dispatchEvent(keyupT);
		fixture.detectChanges();

		expect(element.componentInstance.onSearch).toHaveBeenCalled();
	});

	it("should set label to 'label'", () => {
		fixture = TestBed.createComponent(ComboboxTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("ibm-combo-box"));
		expect(element.nativeElement.textContent).toBe("label");
	});

	it("should set placeholder to 'placeholder'", () => {
		fixture = TestBed.createComponent(ComboboxTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("input"));
		expect(element.nativeElement.getAttribute("placeholder")).toBe("placeholder");
	});
});
