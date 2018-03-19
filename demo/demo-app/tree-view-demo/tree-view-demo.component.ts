import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-tree-view-demo",
	template: `
	<h1 class="p-demo-heading">Tree view</h1>

	<h2 class="p-demo-section">Default</h2>
	<n-tree-view
		[items]="demoItems"
		(select)="onSelect($event)"
		label="Default Tree View">
	</n-tree-view>

	<h2 class="p-demo-section">Custom template</h2>
	<n-tree-view
		[items]="demoItems1"
		(select)="expand($event)"
		[template]="treeTpl"
		[label]="'Tree view with custom template (Added Icon) with no selected icon'">
		<ng-template #treeTpl let-item="item">
			<n-checkbox
				#cb
				inline="true"
				[checked]="isChecked(item, cb)"
				[indeterminate]="isIndeterminate(item, cb)"
				(change)="onCheck({item: item}, $event)"
				[disabled]="item.disabled"
				type="checkbox">
				{{item.content}}
			</n-checkbox>
		</ng-template>
	</n-tree-view>

	<h2 class="p-demo-section">Searchable</h2>
	<div id="demo">
		<label class="search_group--tree">
			<svg class="search_icon" aria-hidden="true">
				<use href="https://peretz-icons.mybluemix.net/core_set.svg#search_20"></use>
			</svg>
			<input placeholder="Find workspace" aria-controls="ex1treeView" type="search"
			(keyup)="search($event)" #filter>
			<button class="close" type="reset" aria-label="Reset search"
			[ngClass]="{
				visible: filter.value.trim()
			}"
			(click)="filter.value = ''; search($event); filterFocus = false">
				<svg class="close_icon">
					<use href="https://peretz-icons.mybluemix.net/core_set.svg#x_16"></use>
				</svg>
			</button>
		</label>
		<n-tree-view
			id="ex1treeView"
			[items]="displayItems"
			(select)="onSelect($event)"
			[label]="'Default Tree View'">
		</n-tree-view>
		<em *ngIf="displayItems.length === 0" class="empty">No search results</em>
	</div>
	`,
	styles: [
		`
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
			div.checkbox {
				margin-bottom: 0;
			}
			.selected .label {
				color: #595859;
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

	onCheck(ev, event) {
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
		let anyF = (items, cb) => {
			for (let item of items) {
				if (cb(item)) {
					return true;
				}
				if (item.items) {
					return anyF(item.items, cb);
				}
			}
			return false;
		};
		if (ev.item.items) {
			if (anyF(ev.item.items, item => item.selected)) {
				setSelect(ev.item.items, false);
				ev.item.selected = false;
			} else {
				setSelect(ev.item.items, true);
				ev.item.selected = true;
			}
		} else {
			ev.item.selected = !ev.item.selected;
		}
		// this doesn't matter if only the parents are selectable
		// in that case use check/blank icons for children
		// and checkboxes for the parents. Of course, if you have
		// highly nested trees, a version of this may be useful
		let parents = findParents(this.demoItems1, ev.item);
		if (parents && parents.length > 0) {
			parents.forEach(parent => {
				// ignores the event item
				if (parent.items.every(i => i.selected)) {
					parent.selected = true;
				} else {
					parent.selected = false;
				}
			});
		}
		setTimeout(() => {}, 0);
	}

	isIndeterminate(item, box) {
		let anyF = (items, cb) => {
			for (let i of items) {
				if (cb(i)) {
					return true;
				}
				if (i.items) {
					return anyF(i.items, cb);
				}
			}
			return false;
		};
		if (item.items) {
			let selected = item.items.filter(i => i.selected);
			if (anyF(item.items, i => i.selected) && !item.items.every(i => i.selected)) {
				box.indeterminate = true;
				return true;
			}
		}
		box.indeterminate = false;
		return false;
	}

	isChecked(item, cb) {
		if (item.items && item.items.every(i => i.selected)) {
			cb.checked = true;
			return true;
		} else if (!item.items && item.selected) {
			cb.checked = true;
			return true;
		}
		cb.checked = false;
		return false;
	}

	search(ev) {
		this.displayItems = this.filter(this.demoItems2, item => item.content.toLowerCase().includes(ev.target.value.toLowerCase()));
	}
}
