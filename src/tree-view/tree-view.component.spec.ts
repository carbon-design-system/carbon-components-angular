import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { By	} from "@angular/platform-browser";
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from "@ngx-translate/core";
import { TreeView, TreeViewItem, TreeViewWrapper } from "./tree-view.module";

@Component({
	template: `
	<n-tree-view
		[items]="items"
		(select)="onSelect($event)"
		[label]="'label'">
	</n-tree-view>`
})
class TestComponent {
	items = [{content: "one", selected: false}, {content: "two", selected: false}];
	selected = {};
	onSelect(ev) {
		this.selected = ev.item;
	}
}

describe("Treeview", () => {
	let fixture, wrapper;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				TreeView,
				TreeViewWrapper,
				TreeViewItem,
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
		fixture = TestBed.createComponent(TreeView);
		expect(fixture.componentInstance instanceof TreeView).toBe(true);
	});

	it("should select an item", () => {
		let itemEl = fixture.debugElement.query(By.css(".tree-view_label"));
		itemEl.triggerEventHandler("click", null);
		expect(wrapper.selected.content).toBe("one");
	});

	it("should have a label", () => {
		let treeRoot = fixture.debugElement.query(By.css(".tree-view"));
		expect(treeRoot.nativeElement.getAttribute("aria-label")).toBe("label");
	});
});
