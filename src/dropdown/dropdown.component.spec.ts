import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { By	 } from "@angular/platform-browser";
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from "@ngx-translate/core";
import { Dropdown } from "./dropdown.component";
import { DropdownList } from "./list/dropdown-list.component";
import { ListItem } from "./list-item.interface";

@Component({
	template: `
	<n-dropdown
		placeholder="test"
		(select)="onSelect($event)">
		<n-dropdown-list [items]="items"></n-dropdown-list>
	</n-dropdown>`
})
class TestComponent {
	items = [{content: "one", selected: false}, {content: "two", selected: false}];
	selected: ListItem;
	onSelect(ev) {
		this.selected = ev.item;
	}
}

describe("Dropdown", () => {
	let fixture, wrapper;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				Dropdown,
				DropdownList,
				TestComponent
			],
			imports: [
				TranslateModule.forRoot({loader: {provide: TranslateLoader, useClass: TranslateFakeLoader}})
			]
		});
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TestComponent);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should work", () => {
		fixture = TestBed.createComponent(Dropdown);
		expect(fixture.componentInstance instanceof Dropdown).toBe(true);
	});

	// it("should select an item", () => {
	// 	let itemEl = fixture.debugElement.query(By.css(".option"));
	// 	itemEl.triggerEventHandler("click", null);
	// 	fixture.detectChanges();
	// 	expect(wrapper.selected.content).toBe("one");
	// });

	it("should change the placeholder value", () => {
		let itemEl = fixture.debugElement.query(By.css("[role=option]"));
		itemEl.triggerEventHandler("click", null);
		fixture.detectChanges();
		let buttonEl = fixture.debugElement.query(By.css("button"));
		expect(buttonEl.nativeElement.textContent.trim()).toBe("one");
	});
});
