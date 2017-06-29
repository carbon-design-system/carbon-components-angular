import { Component, OnInit } from "@angular/core";

@Component({
	selector: "tree-view-demo",
	template: `
	<h1>Tree view demo</h1>

	<h3>Default tree view</h3>
	<n-tree-view
		[items]="demoItems"
		(select)="onSelect($event)"
		[label]="'Default Tree View'">
	</n-tree-view>

	<h3>Tree view with custom template</h3>
	<n-tree-view
		[items]="demoItems1"
		(select)="expand($event)"
		[template]="treeTpl"
		[label]="'Tree view with custom template (Added Icon) with no selected icon'">
		<ng-template #treeTpl let-item="item">
			<n-checkbox
				[checked]="item.selected"
				[indeterminate]="isIndeterminate(item)"
				(change)="onCheck({item: item})"
				[disabled]="item.disabled">
				{{item.content}}
			</n-checkbox>
		</ng-template>
	</n-tree-view>

	<h3>Searchable tree view</h3>
	<div id="demo">
		<div id="search">
			<n-icon icon="search" size="md" id="search-icon"></n-icon>
			<input
				type="search"
				id="search-input"
				placeholder="Search"
				(keyup)="search($event)">
		</div>
		<n-tree-view
			[items]="displayItems"
			(select)="onSelect($event)"
			[label]="'Default Tree View'">
		</n-tree-view>
		<em *ngIf="displayItems.length === 0" class="empty">No search results</em>
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
				height: 600px;
			}
			#demo .empty {
				height: 100%;
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
			}
			/deep/ n-checkbox .checkbox {
				margin-bottom: 0;
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
			opened: false,
			items: [
				{
					content: "Sub item two 1",
					selected: false
				},
				{
					content: "Sub item two 2",
					selected: false,
					opened: false,
					items: [
						{
							content: "Sub item two 1b",
							selected: false
						},
						{
							content: "Sub item two 2b",
							selected: false
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
			content: "Item four which is a seriously long item so we can demo text overflow",
			selected: false
		},
		{
			content: "Item six",
			selected: false,
			opened: false,
			items: [
				{
					content: "Sub item six 1",
					selected: false
				},
				{
					content: "Sub item six 2",
					selected: false,
					opened: false,
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

	demoItems1 = JSON.parse(JSON.stringify(this.demoItems));

	demoItems2 = JSON.parse(JSON.stringify(this.demoItems));
	displayItems = this.demoItems2;

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
				let filteredItems = this.filter(item.items, cb);
				if (filteredItems.length !== 0) {
					let filteredItem = Object.assign({}, item, {
						items: filteredItems,
						opened: true
					});
					filteredList.push(filteredItem);
				}
			}
		}
		return filteredList;
	}

	onSelect(ev) {
		if (ev.item.items) {
			ev.item.opened = !ev.item.opened;
		} else {
			ev.item.selected = !ev.item.selected;
		}
	}

	expand(ev) {
		if (ev.item.items) {
			ev.item.opened = !ev.item.opened;
		}
	}

	onCheck(ev) {
		let setSelect = (items, state) => {
			items.forEach(item => {
				item.selected = state;
				if (item.items) {
					setSelect(item.items, state);
				}
			});
		};
		let findParents = (items, toFind) => {
			for (let item of items) {
				if (item.items && item.items.includes(toFind)) {
					return [item];
				} else if (item.items) {
					let tmpItem = findParents(item.items, toFind);
					if (tmpItem) {
						return [item, ...tmpItem];
					}
				}
			}
		};
		ev.item.selected = !ev.item.selected;
		if (ev.item.items) {
			setSelect(ev.item.items, ev.item.selected);
		}
		// this doesn't matter if only the parents are selectable
		// in that case use check/blank icons for children
		// and checkboxes for the parents. Of course, if you have
		// highly nested trees, a version of this may be useful
		let parents = findParents(this.demoItems1, ev.item);
		if (parents && parents.length > 0) {
			parents.forEach(parent => {
				// ignores the event item
				if (parent.items.every(i => i === ev.item ? true : i.selected)) {
					parent.selected = ev.item.selected;
				}
			});
		}
	}

	isIndeterminate(item) {
		if (item.items) {
			let selected = item.items.filter(i => i.selected);
			if (selected.length < item.items.length && selected.length > 0) {
				return true;
			}
		}
		return false;
	}

	isChecked(item) {
		if (item.items && item.items.every(i => i.selected)) {
			return true;
		} else if (!item.items && item.selected) {
			return true;
		}
		return false;
	}

	search(ev) {
		this.displayItems = this.filter(this.demoItems2, item => item.content.toLowerCase().includes(ev.target.value.toLowerCase()));
	}
}
