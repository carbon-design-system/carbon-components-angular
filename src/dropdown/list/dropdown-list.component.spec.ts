import { Component } from "@angular/core";
import { ComponentFixture, fakeAsync, TestBed } from "@angular/core/testing";
import { By	} from "@angular/platform-browser";
import { advancedFakeAsync } from "../../test-helpers/change-detection";

import { DropdownList } from "./dropdown-list.component";
import { ListItem } from "./../list-item.interface";
import { ScrollableList } from "./../scrollable-list.directive";

@Component({
	template: `<cds-dropdown-list [items]="items" (select)="onSelect($event)" />`,
	imports: [DropdownList]
})
class DropdownListTest {
	items = [
		({content: "one", selected: false} as ListItem),
		({content: "two", selected: false} as ListItem)
	];
	selected: ListItem;
	onSelect(ev) {
		this.selected = ev.item;
	}
}

@Component({
	template: `<cds-dropdown-list [items]="items" (select)="onSelect($event)" type="multi" />`,
	imports: [DropdownList]
})
class MultiTest {
	items = [
		({content: "one", selected: false} as ListItem),
		({content: "two", selected: false} as ListItem)
	];
	selected: ListItem[];
	onSelect(ev) {
		this.selected = ev;
	}
}

describe("Dropdown list", () => {
	let fixture: ComponentFixture<DropdownListTest>, wrapper: DropdownListTest;
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				DropdownListTest
			]
		});
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(DropdownListTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should work", () => {
		let fixture2 = TestBed.createComponent(DropdownList);
		expect(fixture2.componentInstance instanceof DropdownList).toBe(true);
	});

	it("should select an item", () => {
		let itemEl = fixture.debugElement.query(By.css("[role='option']"));
		itemEl.triggerEventHandler("click", {
			preventDefault: () => {}
		});
		expect(wrapper.selected.content).toBe("one");
	});

	it("should disable a list-item", () => {
		wrapper.items = [
			({content: "one", selected: false} as ListItem),
			({content: "two", selected: false, disabled: false} as ListItem),
			({content: "three", selected: false, disabled: true} as ListItem)
		];
		fixture.detectChanges();
		const disabledEls = fixture.debugElement.queryAll(By.css(".cds--list-box__menu-item[disabled]"));
		expect(disabledEls.length).toEqual(1);
		const enabledEls = fixture.debugElement.queryAll(By.css(".cds--list-box__menu-item:not([disabled])"));
		expect(enabledEls.length).toEqual(2);
	});

	it("should re-render the list when the items change", () => {
		expect(fixture.nativeElement.querySelectorAll("li").length).toBe(2);

		wrapper.items = [
			<ListItem>{ content: "one", selected: false },
			<ListItem>{ content: "two", selected: false },
			<ListItem>{ content: "three", selected: false }
		];
		fixture.detectChanges();

		const renderedItems = fixture.nativeElement.querySelectorAll("li");
		expect(renderedItems.length).toBe(3);
		expect(renderedItems[2].textContent.trim()).toBe("three");
	});

	it("should mark an item active when it is passed as selected", () => {
		wrapper.items = [
			<ListItem>{ content: "one", selected: true },
			<ListItem>{ content: "two", selected: false }
		];
		fixture.detectChanges();

		const renderedItems = fixture.nativeElement.querySelectorAll("li");
		expect(renderedItems[0].classList.contains("cds--list-box__menu-item--active")).toBe(true);
		expect(renderedItems[0].getAttribute("aria-selected")).toBe("true");
	});

	it("should highlight the selected item when the list is focused", fakeAsync(() => {
		const list = fixture.debugElement.query(By.css("cds-dropdown-list")).componentInstance;
		expect(fixture.nativeElement.querySelector("ul").getAttribute("aria-activedescendant")).toBeFalsy();

		list.initFocus();
		advancedFakeAsync(fixture);

		expect(list.highlightedItem).toBeTruthy();
		expect(fixture.nativeElement.querySelector("ul").getAttribute("aria-activedescendant")).toBe(list.highlightedItem);
		expect(fixture.nativeElement.querySelector(`#${list.highlightedItem}`).classList)
			.toContain("cds--list-box__menu-item--highlighted");
	}));

	it("should follow the selected item when the list is reordered", fakeAsync(() => {
		const list = fixture.debugElement.query(By.css("cds-dropdown-list")).componentInstance;
		wrapper.items = [
			<ListItem>{ content: "one", selected: false },
			<ListItem>{ content: "two", selected: true }
		];
		fixture.detectChanges();

		list.reorderSelected(true);
		advancedFakeAsync(fixture);

		const renderedItems = fixture.nativeElement.querySelectorAll("li");
		expect(renderedItems[0].textContent.trim()).toBe("two");
		// the selected item moved to the top, so the highlight has to follow it there
		expect(list.highlightedItem).toBe(renderedItems[0].id);
		expect(renderedItems[0].classList).toContain("cds--list-box__menu-item--highlighted");
	}));
});

describe("Dropdown multi list", () => {
	let fixture: ComponentFixture<MultiTest>, wrapper: MultiTest;
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				DropdownList,
				MultiTest,
				ScrollableList
			]
		});
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(MultiTest);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should work", () => {
		let fixture2 = TestBed.createComponent(DropdownList);
		fixture2.componentInstance.type = "multi";
		expect(fixture2.componentInstance instanceof DropdownList).toBe(true);
	});

	it("should multi select", () => {
		let itemEl = fixture.debugElement.query(By.css("[role='option']:nth-child(1)"));
		itemEl.triggerEventHandler("click", {
			preventDefault: () => {}
		});
		itemEl = fixture.debugElement.query(By.css("[role='option']:nth-child(2)"));
		itemEl.triggerEventHandler("click", {
			preventDefault: () => {}
		});
		expect(wrapper.selected.length).toBe(2);
		expect(wrapper.selected[0].content).toBe("one");
		expect(wrapper.selected[1].content).toBe("two");
	});

	it("should disable a list-item and its checkbox", () => {
		wrapper.items = [
			({content: "one", selected: false} as ListItem),
			({content: "two", selected: false, disabled: false} as ListItem),
			({content: "three", selected: false, disabled: true} as ListItem)
		];
		fixture.detectChanges();
		const disabledEls = fixture.debugElement.queryAll(By.css(".cds--list-box__menu-item[disabled]"));
		const disabledInputEls = fixture.debugElement.queryAll(By.css(".cds--checkbox[disabled]"));
		expect(disabledEls.length).toEqual(1);
		expect(disabledInputEls.length).toEqual(1);
		const enabledEls = fixture.debugElement.queryAll(By.css(".cds--list-box__menu-item:not([disabled])"));
		const enabledInputEls = fixture.debugElement.queryAll(By.css(".cds--checkbox:not([disabled])"));
		expect(enabledEls.length).toEqual(2);
		expect(enabledInputEls.length).toEqual(2);
	});
});
