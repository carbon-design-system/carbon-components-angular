import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { By	} from "@angular/platform-browser";
import { DropdownSubMenu } from "./sub-menu.component";
import { SubMenuWrapper } from "./sub-menu-wrapper.component";
import { SubMenuItem } from "./sub-menu-item.component";
import { ListItem } from "./../list-item.interface";

@Component({
	template: `<n-dropdown-sub-menu [items]="items" (select)="onSelect($event)"></n-dropdown-sub-menu>`
})
class TestComponent {
	items = [{content: "one", selected: false}, {content: "two", selected: false}];
	selected: ListItem;
	onSelect(ev) {
		this.selected = ev.item;
	}
}

@Component({
	template: `<n-dropdown-sub-menu [items]="items" (select)="onSelect($event)" type="multi"></n-dropdown-sub-menu>`
})
class TestMultiComponent {
	items = [
		{
			content: "one",
			selected: false
		},
		{
			content: "two",
			selected: false
		},
		{
			content: "three",
			selected: false,
			items: [
				{
					content: "one",
					selected: false
				},
				{
					content: "two",
					selected: false
				}
			]
		}
	];
	selected: ListItem[];
	onSelect(ev) {
		this.selected = ev;
	}
}

// ????? without this karma blows up?????
describe("wtf", () => {});

describe("Dropdown tree", () => {
	let fixture, wrapper;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				DropdownSubMenu,
				SubMenuItem,
				SubMenuWrapper,
				TestComponent
			]
		});
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TestComponent);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should work", () => {
		fixture = TestBed.createComponent(DropdownSubMenu);
		expect(fixture.componentInstance instanceof DropdownSubMenu).toBe(true);
	});

	it("should select an item", () => {
		let itemEl = fixture.debugElement.query(By.css(".sub-menu-item-wrapper"));
		itemEl.triggerEventHandler("click", null);
		expect(wrapper.selected.content).toBe("one");
	});

	it("should select and change selection", () => {
		let itemEls = fixture.debugElement.queryAll(By.css(".sub-menu-item-wrapper"));
		itemEls[0].triggerEventHandler("click", null);
		expect(wrapper.selected.content).toBe("one");
		itemEls[1].triggerEventHandler("click", null);
		expect(wrapper.selected.content).toBe("two");
	});
});

describe("tree multi list", () => {
	let fixture, wrapper;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				DropdownSubMenu,
				SubMenuItem,
				SubMenuWrapper,
				TestMultiComponent
			]
		});
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TestMultiComponent);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should work", () => {
		fixture = TestBed.createComponent(DropdownSubMenu);
		fixture.type = "multi";
		expect(fixture.componentInstance instanceof DropdownSubMenu).toBe(true);
	});

	it("should multi select", () => {
		let itemEls = fixture.debugElement.queryAll(By.css(".sub-menu-item-wrapper"));
		itemEls[0].triggerEventHandler("click", null);
		itemEls[1].triggerEventHandler("click", null);
		expect(wrapper.selected.length).toBe(2);
		expect(wrapper.selected[0].content).toBe("one");
		expect(wrapper.selected[1].content).toBe("two");
	});

	xit("should expand the selection and not emit the item", () => {
		let itemEls = fixture.debugElement.queryAll(By.css(".sub-menu-item-wrapper"));
		itemEls[2].triggerEventHandler("click", null);
		expect(wrapper.selected).toBe(null);
	});
});
