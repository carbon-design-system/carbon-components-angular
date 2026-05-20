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
		[(ngModel)]="model"
		[type]="type"
		[itemValueKey]="itemValueKey">
		<cds-dropdown-list></cds-dropdown-list>
	</cds-combo-box>`
})
class ComboboxTest {
	items = [
		{id: "1", content: "one", selected: false},
		{id: "2", content: "two", selected: false},
		{id: "3", content: "three", selected: false}
	];
	type = "single";
	itemValueKey = undefined;
	model: ListItem;
}

@Component({
	template: `
	<cds-combo-box
		placeholder="placeholder"
		label="label"
		[items]="items"
		[type]="type"
		[itemValueKey]="itemValueKey">
		<cds-dropdown-list></cds-dropdown-list>
	</cds-combo-box>`
})
class ComboboxTestNoModel {
	items = [
		{id: "1", content: "one", selected: false},
		{id: "2", content: "two", selected: false},
		{id: "3", content: "three", selected: false}
	];
	type = "single";
	itemValueKey = undefined;
}

describe("Combo box", () => {
	let fixture, wrapper, element;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				ComboBox,
				DropdownList,
				ComboboxTest,
				ScrollableList,
				ComboboxTestNoModel
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
		expect(wrapper.model.id).toBe("1");
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
			{id: "4", content: "four", selected: false},
			{id: "5", content: "five", selected: false},
			{id: "6", content: "six", selected: false}
		];

		fixture.detectChanges();

		const itemEls = fixture.debugElement.queryAll(By.css(".cds--list-box__menu-item"));

		expect(itemEls.length).toEqual(2);
	});

	it("should update model by itemValueKey when specified", () => {
		fixture = TestBed.createComponent(ComboboxTest);
		wrapper = fixture.componentInstance;
		wrapper.type = "multi";
		wrapper.itemValueKey = "id";
		fixture.detectChanges();

		element = fixture.debugElement.query(By.css("cds-combo-box"));

		const dropdownToggle = element.nativeElement.querySelector(".cds--list-box__field");
		dropdownToggle.click();
		fixture.detectChanges();

		const dropdownOption = element.nativeElement.querySelector(".cds--list-box__menu-item");
		dropdownOption.click();
		fixture.detectChanges();

		expect(wrapper.model).toEqual(["1"]);
	});

	it("should ignore selected property from the items when _isUsingReactiveForms is true", () => {
		fixture = TestBed.createComponent(ComboboxTestNoModel);
		wrapper = fixture.componentInstance;
		wrapper.itemValueKey = "id";
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-combo-box"));

		expect(element.componentInstance._isUsingReactiveForms).toBe(false);
		expect(element.componentInstance.view.getSelected()).toEqual([]);

		element.componentInstance._isUsingReactiveForms = true;
		wrapper.items[0].selected = true;
		fixture.detectChanges();

		expect(element.componentInstance.view.getSelected()).toEqual([]);
	});

	it("should automatically reselect the _writtenValue when items are updated and _isUsingReactiveForms is true", () => {
		fixture = TestBed.createComponent(ComboboxTestNoModel);
		wrapper = fixture.componentInstance;
		wrapper.itemValueKey = "id";
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-combo-box"));

		element.componentInstance._isUsingReactiveForms = true;
		element.componentInstance.writeValue("1");
		fixture.detectChanges();

		expect(element.componentInstance.view.getSelected()[0].id).toEqual("1");

		wrapper.items.push({ id: "4", content: "four", selected: false });
		fixture.detectChanges();

		expect(element.componentInstance.view.getSelected()[0].id).toEqual("1");
	});

	it("should update _writtenValue if user manually changes selection when _isUsingReactiveForms is true", () => {
		fixture = TestBed.createComponent(ComboboxTestNoModel);
		wrapper = fixture.componentInstance;
		wrapper.itemValueKey = "id";
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-combo-box"));

		element.componentInstance._isUsingReactiveForms = true;
		element.componentInstance.writeValue("2");
		fixture.detectChanges();
		expect(element.componentInstance._writtenValue).toEqual("2");

		const dropdownToggle = element.nativeElement.querySelector(".cds--list-box__field");
		dropdownToggle.click();
		fixture.detectChanges();
		const dropdownOption = element.nativeElement.querySelector(".cds--list-box__menu-item");
		dropdownOption.click();
		fixture.detectChanges();

		expect(element.componentInstance._writtenValue).toEqual("1");
	});

	it("should set _isUsingReactiveForms to true when registerOnChange is called", () => {
		fixture = TestBed.createComponent(ComboboxTestNoModel);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-combo-box"));

		expect(element.componentInstance._isUsingReactiveForms).toBe(false);

		element.componentInstance.registerOnChange(() => {});
		fixture.detectChanges();

		expect(element.componentInstance._isUsingReactiveForms).toBe(true);
	});
});
