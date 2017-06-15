import { Component, OnInit } from "@angular/core";

@Component({
	selector: "tree-view-demo",
	template: `
	<h1>Tree View Demo</h1>
	<ng-template #listTpl let-item="item">
		<cdl-icon icon="alert" size="md"></cdl-icon>
		<span style="margin-left: 5px;">{{item.content}}</span>
	</ng-template>

	<h3>Default tree view</h3>
	<cdl-tree-view
		[items]="demoItems"
		(select)="onSelect($event)"
		[label]="'Default Tree View'">
	</cdl-tree-view>

	<h3>Tree view with custom template (Added Icon) with no selected icon</h3>
	<cdl-tree-view
		[items]="demoItems1"
		(select)="onSelect($event)"
		[listTpl]="listTpl"
		[selectedIcon]="false"
		[label]="'Tree view with custom template (Added Icon) with no selected icon'">
	</cdl-tree-view>

	<h3>Searchable tree view</h3>
	<div id="demo">
		<div id="search">
			<cdl-icon icon="search" size="md" id="search-icon"></cdl-icon>
			<input
				type="search"
				id="search-input"
				placeholder="Filter"
				(keyup)="search($event)">
		</div>
		<cdl-tree-view
			[items]="displayItems"
			(select)="onSelect($event)"
			[label]="'Default Tree View'">
		</cdl-tree-view>
	</div>
	`,
	styles: [
		`
			#search {
				position: relative;
			}
			#search-icon {
				position: absolute;
				top: 10px;
				left: 10px;
			}
			#search-input {
				background: #f5f5f5;
				height: 40px;
				width: 100%;
				border: none;
				padding-left: 40px; // 10px padding + 20px icon
			}
			#demo {
				width: 300px;
			}
		`
	]
})
export class TreeViewDemo {
	demoItems = [
		{
			content: "Item one",
			selected: false
		},
		{
			content: "Item two",
			selected: false,
			items: [
				{
					content: "Sub item two 1",
					selected: false
				},
				{
					content: "Sub item two 2",
					selected: false,
					items: [
						{
							content: "Sub item two 1b",
							selected: false,
							disabled: true
						},
						{
							content: "Sub item two 2b",
							selected: false,
						}
					]
				},
			]
		},
		{
			content: "Item three",
			selected: false,
			disabled: true
		},
		{
			content: "Item four",
			selected: false
		},
		{
			content: "Item six",
			selected: false,
			items: [
				{
					content: "Sub item six 1",
					selected: false
				},
				{
					content: "Sub item six 2",
					selected: false,
					items: [
						{
							content: "Sub item six 1b",
							selected: false
						},
						{
							content: "Sub item six 2b",
							selected: false,
						}
					]
				},
			]
		}
	];

	demoItems1 = Array.from(this.demoItems, this.clone);

	demoItems2 = Array.from(this.demoItems, this.clone);
	displayItems = this.demoItems2;

	private clone (el) {
		return Object.assign({}, el);
	}

	flattenTree(_items) {
		let flatList = [];
		let flattenHelper = items => {
			for (let item of items) {
				flatList.push(item);
				if (item.items) {
					this.flattenTree(item.items);
				}
			}
		};
		flattenHelper(_items);
		return flatList;
	}

	filter(items, cb) {
		let filteredList = [];
		for (let item of items) {
			if (!item.items && cb(item)) {
				filteredList.push(Object.assign({}, item));
			}
			if (item.items) {
				let filteredItem = Object.assign({}, item, {
					items: this.filter(item.items, cb),
					selected: true
				});
				filteredList.push(filteredItem);
			}
		}
		return filteredList;
	}

	onSelect(ev) {
		// hmm ... for dropdown it made sense to handle all the selection
		// logic in the component - consumers only care about what's selected
		// but for tree view ... now we're in a weird place where maybe we want
		// to do something special ... with dropdown you have to accept what
		// the dropdown gives you - very limited customization (this is a good thing!)
		// but with tree view ... it makes more sense to let the consumer handle most things
		// we can deal with open/closing the tree ... but we still need a way to let consumers add:
		// popovers, checkboxes (for fully multi select), checkmarks (for partial multi select),
		// nav links, editable feilds (and related events), other magic ...
		// the only thing I'm wondering might be worth supporting in the component is filtering
		// and really just by adding a "filterBy" or "query" input ... though even then I'd
		// be kinda concerned that we're filtering "correctly"
		// ev.item.selected = !ev.item.selected;
	}

	search(ev) {
		console.log(ev.target.value);
		// this only does a top level filter
		// we should demo a nested filter ... and/or provide a nested filter function (in a common/treeTools module)
		// this.displayItems = this.demoItems2.filter(item => item.content.toLowerCase().includes(ev.target.value.toLowerCase()));
		this.displayItems = this.filter(this.demoItems2, item => item.content.toLowerCase().includes(ev.target.value.toLowerCase()));
	}
}
