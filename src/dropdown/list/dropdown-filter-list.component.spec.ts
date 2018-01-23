import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { By	} from "@angular/platform-browser";
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from "@ngx-translate/core";
import { StaticIconModule } from "./../../icon/static-icon.module";

import { DropdownFilter } from "./dropdown-filter-list.component";
import { ListItem } from "./../list-item.interface";

@Component({
	template: `<n-dropdown-filter [items]="items" (select)="onSelect($event)"></n-dropdown-filter>`
})
class TestComponent {
	items = [{content: "one", selected: false}, {content: "two", selected: false}];
	selected: ListItem;
	onSelect(ev) {
		this.selected = ev.item;
	}
}

@Component({
	template: `<n-dropdown-filter [items]="items" (select)="onSelect($event)" type="multi"></n-dropdown-filter>`
})
class TestMultiComponent {
	items = [{content: "one", selected: false}, {content: "two", selected: false}];
	selected: ListItem[];
	onSelect(ev) {
		this.selected = ev;
	}
}

describe("Dropdown search list", () => {
	let fixture, wrapper;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				DropdownFilter,
				TestComponent
			],
			imports: [
				TranslateModule.forRoot({loader: {provide: TranslateLoader, useClass: TranslateFakeLoader}}),
				StaticIconModule
			]
		});
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TestComponent);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should work", () => {
		fixture = TestBed.createComponent(DropdownFilter);
		expect(fixture.componentInstance instanceof DropdownFilter).toBe(true);
	});

	it("should select an item", () => {
		let itemEl = fixture.debugElement.query(By.css("[role=option]"));
		itemEl.triggerEventHandler("click", null);
		expect(wrapper.selected.content).toBe("one");
	});
});

describe("Dropdown search multi list", () => {
	let fixture, wrapper;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				DropdownFilter,
				TestMultiComponent
			],
			imports: [
				TranslateModule.forRoot({loader: {provide: TranslateLoader, useClass: TranslateFakeLoader}}),
				StaticIconModule
			]
		});
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TestMultiComponent);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should work", () => {
		fixture = TestBed.createComponent(DropdownFilter);
		fixture.type = "multi";
		expect(fixture.componentInstance instanceof DropdownFilter).toBe(true);
	});

	it("should multi select", () => {
		let itemEl = fixture.debugElement.query(By.css("[role=option]:nth-child(1)"));
		itemEl.triggerEventHandler("click", null);
		itemEl = fixture.debugElement.query(By.css("[role=option]:nth-child(2)"));
		itemEl.triggerEventHandler("click", null);
		expect(wrapper.selected.length).toBe(2);
		expect(wrapper.selected[0].content).toBe("one");
		expect(wrapper.selected[1].content).toBe("two");
	});
});
