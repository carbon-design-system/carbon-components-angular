import { Component, Input } from "@angular/core";
import { fakeAsync, TestBed } from "@angular/core/testing";
import { By	 } from "@angular/platform-browser";
import { advancedFakeAsync, hasClass } from "../test-helpers/change-detection";

import { Dropdown } from "./dropdown.component";
import { DropdownList } from "./list/dropdown-list.component";
import { ListItem } from "./list-item.interface";
import { FormsModule } from "@angular/forms";

@Component({
	template: `
	<cds-dropdown
		placeholder="test"
		class="custom-class"
		[isOpen]="isOpen"
		(selected)="onSelect()"
		[(ngModel)]="model">
		<cds-dropdown-list [items]="items" />
	</cds-dropdown>`,
	imports: [
		Dropdown,
		DropdownList,
		FormsModule
	]
})
class DropdownTest {
	model = null;
	items = [{ content: "one", id: 0, selected: false }, { content: "two", id: 1, selected: false }];
	selected: ListItem;
	@Input() isOpen = false;
	onSelect() {}
}

@Component({
	template: `
	<cds-dropdown
		placeholder="test"
		class="custom-class"
		[itemValueKey]="itemValueKey"
		[allowNullValues]="allowNullValues"
		[type]="type"
		(selected)="onSelect()">
		<cds-dropdown-list [items]="items"></cds-dropdown-list>
	</cds-dropdown>`,
	imports: [
		Dropdown,
		DropdownList
	]
})
class DropdownTestNoModel {
	items = [{content: "one", id: 0, selected: false}, {content: "two", id: 1, selected: false}];
	itemValueKey = undefined;
	allowNullValues = false;
	type = "single";
	onSelect() {}
}

describe("Dropdown", () => {
	let fixture, element, wrapper;
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				DropdownTest,
				DropdownTestNoModel
			]
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
		fixture.componentRef.setInput("isOpen", true);
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

	it("should ignore selected property from the items when _isUsingNgControl is true", () => {
		fixture = TestBed.createComponent(DropdownTestNoModel);
		wrapper = fixture.componentInstance;
		wrapper.itemValueKey = "id";
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-dropdown"));

		expect(element.componentInstance._isUsingNgControl).toBe(false);
		expect(element.componentInstance.view.getSelected()).toEqual([]);

		element.componentInstance._isUsingNgControl = true;
		wrapper.items[0].selected = true;
		fixture.detectChanges();

		expect(element.componentInstance.view.getSelected()).toEqual([]);
	});

	it("should automatically reselect the _writtenValue when items are updated and _isUsingNgControl is true", () => {
		fixture = TestBed.createComponent(DropdownTestNoModel);
		wrapper = fixture.componentInstance;
		wrapper.itemValueKey = "id";
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-dropdown"));

		element.componentInstance._isUsingNgControl = true;
		element.componentInstance.writeValue(0);
		fixture.detectChanges();

		expect(element.componentInstance.view.getSelected()[0].id).toEqual(0);

		wrapper.items.push({ id: 4, content: "four", selected: false });
		fixture.detectChanges();

		expect(element.componentInstance.view.getSelected()[0].id).toEqual(0);
	});

	it("should update _writtenValue if user manually changes selection when _isUsingNgControl is true", () => {
		fixture = TestBed.createComponent(DropdownTestNoModel);
		wrapper = fixture.componentInstance;
		wrapper.itemValueKey = "id";
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-dropdown"));

		element.componentInstance._isUsingNgControl = true;
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

	it("should set _isUsingNgControl to true when registerOnChange is called", () => {
		fixture = TestBed.createComponent(DropdownTestNoModel);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-dropdown"));

		expect(element.componentInstance._isUsingNgControl).toBe(false);

		element.componentInstance.registerOnChange(() => {});
		fixture.detectChanges();

		expect(element.componentInstance._isUsingNgControl).toBe(true);
	});

	it("should allow null values when allowNullValues is true", () => {
		const expectedContent = "null item";
		fixture = TestBed.createComponent(DropdownTestNoModel);
		wrapper = fixture.componentInstance;
		wrapper.itemValueKey = "id";
		wrapper.allowNullValues = true;
		wrapper.items.push({ content: expectedContent, id: null, selected: false });
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css("cds-dropdown"));
		spyOn(element.componentInstance.view, "propagateSelected").and.callThrough();
		expect(element.componentInstance.view.propagateSelected).not.toHaveBeenCalled();
		element.componentInstance.writeValue(null);
		expect(element.componentInstance.view.propagateSelected).toHaveBeenCalledWith([{ content: expectedContent, id: null, selected: true }]);
		expect(element.componentInstance.view.getSelected()[0].content).toEqual(expectedContent);
	});

	it("should collapse the list box when an item is picked", fakeAsync(() => {
		fixture = TestBed.createComponent(DropdownTestNoModel);
		fixture.detectChanges();
		const dropdown = fixture.debugElement.query(By.css("cds-dropdown")).componentInstance;

		dropdown.openMenu();
		advancedFakeAsync(fixture);
		expect(hasClass(fixture, ".cds--list-box", "cds--list-box--expanded")).toBe(true);

		// select through the projected list, the same path a user click takes
		dropdown.view.select.emit({ item: { content: "one", id: 0, selected: true } });
		advancedFakeAsync(fixture);

		expect(dropdown.isOpen).toBe(false);
		expect(hasClass(fixture, ".cds--list-box", "cds--list-box--expanded")).toBe(false);
		expect(fixture.nativeElement.querySelector(".cds--list-box__field").getAttribute("aria-expanded")).toBe("false");
	}));

	it("should add the drop up class when there is no room below", fakeAsync(() => {
		fixture = TestBed.createComponent(DropdownTestNoModel);
		fixture.detectChanges();
		const dropdown = fixture.debugElement.query(By.css("cds-dropdown")).componentInstance;
		const shouldDropUp = spyOn(dropdown, "_shouldDropUp").and.returnValue(true);

		dropdown.openMenu();
		advancedFakeAsync(fixture);

		const menu = dropdown.dropdownMenu.nativeElement;
		expect(dropdown._dropUp).toBe(true);
		expect(menu.classList.contains("cds--list-box--up")).toBe(true);

		// `closeMenu` deliberately leaves `_dropUp` alone, it is re-measured on the next open
		dropdown.closeMenu();
		shouldDropUp.and.returnValue(false);
		dropdown.openMenu();
		advancedFakeAsync(fixture);

		expect(dropdown._dropUp).toBe(false);
		expect(menu.classList.contains("cds--list-box--up")).toBe(false);
	}));

	it("should collapse the list box when clicking outside", fakeAsync(() => {
		fixture = TestBed.createComponent(DropdownTestNoModel);
		fixture.detectChanges();
		const dropdown = fixture.debugElement.query(By.css("cds-dropdown")).componentInstance;

		dropdown.openMenu();
		advancedFakeAsync(fixture);
		expect(hasClass(fixture, ".cds--list-box", "cds--list-box--expanded")).toBe(true);

		document.body.click();
		advancedFakeAsync(fixture);

		expect(dropdown.isOpen).toBe(false);
		expect(hasClass(fixture, ".cds--list-box", "cds--list-box--expanded")).toBe(false);
	}));

	it("should show the number of selected items in multi select", fakeAsync(() => {
		fixture = TestBed.createComponent(DropdownTestNoModel);
		fixture.componentInstance.type = "multi";
		fixture.detectChanges();
		const dropdown = fixture.debugElement.query(By.css("cds-dropdown")).componentInstance;

		expect(fixture.nativeElement.querySelector(".cds--list-box__selection--multi")).toBeFalsy();

		// select through the projected list itself, so `getSelectedCount()` reads a real change
		const listItems = dropdown.view.getListItems();
		listItems[0].selected = true;
		dropdown.view.select.emit([listItems[0]]);
		advancedFakeAsync(fixture);

		const selectionTag = fixture.nativeElement.querySelector(".cds--list-box__selection--multi");
		expect(selectionTag).toBeTruthy();
		expect(selectionTag.textContent.trim()).toContain("1");
	}));
});
