import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { By	} from "@angular/platform-browser";
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from "@ngx-translate/core";
import { StaticIconModule } from "./../icon/static-icon.module";

import { ListItem } from "./../dropdown/list-item.interface";
import { ComboBox } from "./combobox.component";
import { Pill } from "./pill.component";
import { PillInput } from "./pill-input.component";
import { DropdownList } from "./../dropdown/list/dropdown-list.component";

@Component({
	template: `
	<n-combo-box
		placeholder="placeholder"
		[items]="items"
		(select)="onSelect($event)">
		<n-dropdown-list></n-dropdown-list>
	</n-combo-box>`
})
class TestComponent {
	items = [{content: "one", selected: false}, {content: "two", selected: false}];
	selected: ListItem;
	onSelect(ev) {
		this.selected = ev.item;
	}
}

describe("Combo box", () => {
	let fixture, wrapper;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				ComboBox,
				PillInput,
				Pill,
				DropdownList,
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
		fixture = TestBed.createComponent(ComboBox);
		expect(fixture.componentInstance instanceof ComboBox).toBe(true);
	});

	// it("should select an item", () => {
	// 	let itemEl = fixture.debugElement.query(By.css(".option"));
	// 	itemEl.triggerEventHandler("click", null);
	// 	expect(wrapper.selected.content).toBe("one");
	// });

	// it("should have a placeholder of 'placeholder'", () => {
	// 	let placeholder = fixture.debugElement.query(By.css(".placeholder"));
	// 	expect(placeholder.nativeElement.textContent.trim()).toBe("placeholder");
	// });

	it("should change the placeholder value", () => {
		let itemEl = fixture.debugElement.query(By.css("[role=option]"));
		itemEl.triggerEventHandler("click", null);
		fixture.detectChanges();
		let comboInput = fixture.debugElement.query(By.css("input"));
		expect(comboInput.nativeElement.value.trim()).toBe("one");
	});
});
