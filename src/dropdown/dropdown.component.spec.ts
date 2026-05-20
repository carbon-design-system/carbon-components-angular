import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { By	 } from "@angular/platform-browser";

import { Dropdown } from "./dropdown.component";
import { DropdownList } from "./list/dropdown-list.component";
import { ListItem } from "./list-item.interface";
import { ScrollableList } from "./scrollable-list.directive";
import { I18nModule } from "../i18n/index";
import { DropdownService } from "./dropdown.service";
import { PlaceholderModule } from "./../placeholder/index";
import { FormsModule } from "@angular/forms";
import { UtilsModule } from "../utils/utils.module";
import { IconModule } from "../icon/index";

@Component({
	template: `
	<cds-dropdown
		placeholder="test"
		class="custom-class"
		(selected)="onSelect()"
		[(ngModel)]="model">
		<cds-dropdown-list [items]="items"></cds-dropdown-list>
	</cds-dropdown>`
})
class DropdownTest {
	model = null;
	items = [{content: "one", id: 0, selected: false}, {content: "two", id: 1, selected: false}];
	selected: ListItem;
	onSelect() {}
}

@Component({
	template: `
	<cds-dropdown
		placeholder="test"
		class="custom-class"
		[itemValueKey]="itemValueKey"
		(selected)="onSelect()">
		<cds-dropdown-list [items]="items"></cds-dropdown-list>
	</cds-dropdown>`
})
class DropdownTestNoModel {
	items = [{content: "one", id: 0, selected: false}, {content: "two", id: 1, selected: false}];
	itemValueKey = undefined;
	onSelect() {}
}

describe("Dropdown", () => {
	let fixture, element, wrapper;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				Dropdown,
				DropdownList,
				DropdownTest,
				ScrollableList,
				DropdownTestNoModel
			],
			imports: [
				I18nModule,
				PlaceholderModule,
				FormsModule,
				IconModule,
				UtilsModule
			],
			providers: [ DropdownService ]
		});
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(DropdownTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should work", () => {
		fixture = TestBed.createComponent(Dropdown);
		expect(fixture.componentInstance instanceof Dropdown).toBe(true);
	});

	it("should expand the dropdown on click", () => {
		fixture = TestBed.createComponent(DropdownTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css(".cds--list-box__field"));
		element.triggerEventHandler("click", null);
		fixture.detectChanges();
		expect(element.nativeElement.getAttribute("aria-expanded")).toEqual("true");
	});

	it("should propagate the change in selected option back to the form and emit a selected event", () => {
		fixture = TestBed.createComponent(DropdownTest);
		wrapper = fixture.componentInstance;
		spyOn(wrapper, "onSelect");
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-dropdown"));
		element.componentInstance.menuIsClosed = false;
		fixture.detectChanges();
		element.nativeElement.querySelector(".cds--list-box__menu-item__option").click();
		fixture.detectChanges();
		expect(element.nativeElement.querySelector(".cds--list-box__label").textContent).toEqual("one");
		expect(wrapper.onSelect).toHaveBeenCalled();
		expect(wrapper.model.content).toEqual("one");
		expect(wrapper.model.selected).toBe(true);
	});

	it("should set the placeholder text to test", () => {
		fixture = TestBed.createComponent(DropdownTest);
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-dropdown"));
		expect(element.nativeElement.querySelector(".cds--list-box__label").textContent).toEqual("test");
	});

	it("should keep custom classes on the host el", () => {
		const el = fixture.debugElement.query(By.css("cds-dropdown"));
		expect(el.nativeElement.classList.contains("custom-class")).toBe(true);
	});

	it("should ignore selected property from the items when _isUsingReactiveForms is true", () => {
		fixture = TestBed.createComponent(DropdownTestNoModel);
		wrapper = fixture.componentInstance;
		wrapper.itemValueKey = "id";
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-dropdown"));

		expect(element.componentInstance._isUsingReactiveForms).toBe(false);
		expect(element.componentInstance.view.getSelected()).toEqual([]);

		element.componentInstance._isUsingReactiveForms = true;
		wrapper.items[0].selected = true;
		fixture.detectChanges();

		expect(element.componentInstance.view.getSelected()).toEqual([]);
	});

	it("should automatically reselect the _writtenValue when items are updated and _isUsingReactiveForms is true", () => {
		fixture = TestBed.createComponent(DropdownTestNoModel);
		wrapper = fixture.componentInstance;
		wrapper.itemValueKey = "id";
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-dropdown"));

		element.componentInstance._isUsingReactiveForms = true;
		element.componentInstance.writeValue(0);
		fixture.detectChanges();

		expect(element.componentInstance.view.getSelected()[0].id).toEqual(0);

		wrapper.items.push({ id: 4, content: "four", selected: false });
		fixture.detectChanges();

		expect(element.componentInstance.view.getSelected()[0].id).toEqual(0);
	});

	it("should update _writtenValue if user manually changes selection when _isUsingReactiveForms is true", () => {
		fixture = TestBed.createComponent(DropdownTestNoModel);
		wrapper = fixture.componentInstance;
		wrapper.itemValueKey = "id";
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-dropdown"));

		element.componentInstance._isUsingReactiveForms = true;
		element.componentInstance.writeValue(1);
		fixture.detectChanges();
		expect(element.componentInstance._writtenValue).toEqual(1);

		const dropdownToggle = element.nativeElement.querySelector(".cds--list-box__field");
		dropdownToggle.click();
		fixture.detectChanges();
		const dropdownOption = element.nativeElement.querySelector(".cds--list-box__menu-item");
		dropdownOption.click();
		fixture.detectChanges();

		expect(element.componentInstance._writtenValue).toEqual(0);
	});

	it("should set _isUsingReactiveForms to true when registerOnChange is called", () => {
		fixture = TestBed.createComponent(DropdownTestNoModel);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-dropdown"));

		expect(element.componentInstance._isUsingReactiveForms).toBe(false);

		element.componentInstance.registerOnChange(() => {});
		fixture.detectChanges();

		expect(element.componentInstance._isUsingReactiveForms).toBe(true);
	});
});
