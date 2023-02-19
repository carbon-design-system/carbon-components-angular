import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { By	} from "@angular/platform-browser";

import { IconModule } from "../icon/index";
import { I18nModule } from "../i18n/index";

import { ListItem } from "./../dropdown/list-item.interface";
import { ComboBox } from "./combobox.component";
import { DropdownList } from "./../dropdown/list/dropdown-list.component";
import { ScrollableList } from "./../dropdown/scrollable-list.directive";
import { FormsModule } from "@angular/forms";
import { UtilsModule } from "../utils";
import { DropdownService } from "./../dropdown/index";
import { PlaceholderModule } from "./../placeholder/index";


@Component({
	template: `
	<cds-combo-box
		placeholder="placeholder"
		label="label"
		[items]="items"
		[(ngModel)]="model">
		<cds-dropdown-list></cds-dropdown-list>
	</cds-combo-box>`
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
				IconModule,
				I18nModule,
				FormsModule,
				UtilsModule,
				PlaceholderModule
			],
			providers: [ DropdownService ]
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
		element = fixture.debugElement.query(By.css("cds-combo-box"));

		const dropdownToggle = element.nativeElement.querySelector(".cds--list-box__field");
		dropdownToggle.click();
		fixture.detectChanges();

		const dropdownOption = element.nativeElement.querySelector(".cds--list-box__menu-item");
		dropdownOption.click();
		fixture.detectChanges();

		expect(element.nativeElement.querySelector("input").value).toBe("one");
		expect(wrapper.model.content).toBe("one");
		expect(wrapper.model.selected).toBe(true);

		element.componentInstance.clearSelected();

		// No longer emits null when selection is empty.
		expect(wrapper.model).toEqual([]);
	});

	it("should call clearInput on clear selection button keyup event", () => {
		const keyupEnter = new KeyboardEvent("keyup", { "key": "Enter" });
		fixture = TestBed.createComponent(ComboboxTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-combo-box"));
		spyOn(element.componentInstance, "clearInput");

		// Select an item from the dropdown
		const dropdownToggle = element.nativeElement.querySelector(".cds--list-box__field");
		dropdownToggle.click();
		fixture.detectChanges();
		const dropdownOption = element.nativeElement.querySelector(".cds--list-box__menu-item");
		dropdownOption.click();
		fixture.detectChanges();

		// Attempt clear by keyboard event
		const clearBtn = element.nativeElement.querySelector(".cds--list-box__selection");
		clearBtn.dispatchEvent(keyupEnter);
		fixture.detectChanges();

		expect(element.componentInstance.clearInput).toHaveBeenCalled();
	});

	it("should open dropdown on ArrowDown and close dropdown on Escape", () => {
		const keyDown = new KeyboardEvent("keydown", { "key": "ArrowDown" });
		const escape = new KeyboardEvent("keydown", { "key": "Escape" });

		fixture = TestBed.createComponent(ComboboxTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-combo-box"));
		element.componentInstance.open = false;
		fixture.detectChanges();

		element.nativeElement.dispatchEvent(keyDown);
		fixture.detectChanges();

		expect(element.componentInstance.open).toBe(true);

		element.nativeElement.dispatchEvent(escape);
		fixture.detectChanges();

		expect(element.componentInstance.open).toBe(false);
	});

	it("should call onSearch on input event", () => {
		fixture = TestBed.createComponent(ComboboxTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-combo-box"));
		spyOn(element.componentInstance, "onSearch");

		const textInput = element.nativeElement.querySelector(".cds--text-input");
		textInput.dispatchEvent(new Event("input"));
		fixture.detectChanges();

		expect(element.componentInstance.onSearch).toHaveBeenCalled();
	});

	it("should set label to 'label'", () => {
		fixture = TestBed.createComponent(ComboboxTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-combo-box"));
		expect(element.nativeElement.textContent).toBe("label");
	});

	it("should set placeholder to 'placeholder'", () => {
		fixture = TestBed.createComponent(ComboboxTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("input"));
		expect(element.nativeElement.getAttribute("placeholder")).toBe("placeholder");
	});

	it("should display dropdown list when new items are passed that match the current search string", () => {
		fixture = TestBed.createComponent(ComboboxTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();

		element = fixture.debugElement.query(By.css("cds-combo-box"));

		const textInput = element.nativeElement.querySelector(".cds--text-input");
		textInput.value = "f";
		textInput.dispatchEvent(new Event("input"));

		wrapper.items = [
			{content: "four", selected: false},
			{content: "five", selected: false},
			{content: "six", selected: false}
		];

		fixture.detectChanges();

		const itemEls = fixture.debugElement.queryAll(By.css(".cds--list-box__menu-item"));

		expect(itemEls.length).toEqual(2);
	});
});
