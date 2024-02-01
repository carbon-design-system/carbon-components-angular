import { TestBed, ComponentFixture, fakeAsync, tick } from "@angular/core/testing";
import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

import { TreeViewComponent } from "./treeview.component";
import { TreeNodeComponent } from "./tree-node.component";

@Component({
	template: `
		<cds-tree-view
			label="Tree view"
			style="width: 18rem; display: block;"
			[tree]="tree"
			(selected)="onSelect()">
		</cds-tree-view>
	`
})
class TreeviewTestComponent {
	onSelect() {}

	tree = [
		{
			id: "1",
			value: "Artificial intelligence",
			label: "Artificial intelligence"
		},
		{
			id: "2",
			value: "Blockchain",
			label: "Blockchain"
		},
		{
			id: "bus-auto",
			value: "Business automation",
			label: "Business automation",
			expanded: true,
			disabled: true,
			children: [
				{
					id: "bus-auto-process",
					value: "Business process automation",
					label: "Business process automation"
				},
				{
					id: "bus-auto-process-map",
					value: "Business process mapping",
					label: "Business process mapping"
				}
			]
		}
	];
}


describe("Treeview", () => {
	let component: TreeviewTestComponent;
	let fixture: ComponentFixture<TreeviewTestComponent>;
	let nodes: DebugElement[];
	let tree: DebugElement;

	beforeEach(async () => {
		TestBed.configureTestingModule({
			declarations: [
				TreeviewTestComponent,
				TreeNodeComponent,
				TreeViewComponent
			]
		}).compileComponents();

		fixture = TestBed.createComponent(TreeviewTestComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		tree = fixture.debugElement.query(By.directive(TreeViewComponent));
		nodes = fixture.debugElement.queryAll(By.directive(TreeNodeComponent));
	});

	it("should create a tree view", () => {
		expect(component).toBeTruthy();
	});

	it("should indicate if the node has children", () => {
		const parentNode = nodes[2].componentInstance;
		expect(parentNode.expanded).toBeTruthy();
		expect(nodes[2].nativeElement.querySelector(".cds--tree-node__children")).toBeTruthy();
	});

	it("should disable the children nodes when parent is disabled", () => {
		const parentNode = nodes[2].componentInstance;
		expect(parentNode.disabled).toBeTruthy();
		const childNode = nodes[3].componentInstance;
		expect(childNode.disabled).toBeTruthy();
		expect(
			nodes[3].nativeElement.querySelector("#bus-auto-process")
				.classList
				.contains("cds--tree-node--disabled")
		).toBeTruthy();
	});

	it("should set the depth of a node based on the height of the tree", () => {
		const parentNode = nodes[2].componentInstance;
		const childNode = nodes[3].componentInstance;
		expect(parentNode.depth).toEqual(0);
		expect(childNode.depth).toEqual(1);
	});

	it("should expand parent node to show child nodes", () => {
		const parentNode = nodes[2].componentInstance;
		expect(parentNode.expanded).toBeTruthy();
		expect(nodes[2].nativeElement.querySelector(".cds--tree-parent-node__toggle-icon--expanded")).toBeTruthy();
	});

	it("should emit 'select' event from the tree wrapper when a node is clicked", fakeAsync(() => {
		const wrapper = tree.componentInstance;
		const selectSpy = spyOn(wrapper.select, 'emit');
		fixture.detectChanges();
		nodes[0].nativeElement.querySelector('.cds--tree-node__label').dispatchEvent(new Event('click'));
		tick();
		expect(selectSpy).toHaveBeenCalled();
	}))
});

