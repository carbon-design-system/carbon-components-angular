import { Component, OnInit } from "@angular/core";

@Component({
	selector: "tree-view-demo",
	template: `
	<h1>Tree view demo</h1>

	<h3>Default tree view</h3>
	<n-tree-view
		[items]="demoItems"
		(select)="onSelect($event)"
		label="Default Tree View">
	</n-tree-view>

	<h3>Tree view with custom template</h3>
	<n-tree-view
		[items]="demoItems1"
		(select)="expand($event)"
		[template]="treeTpl"
		[label]="'Tree view with custom template (Added Icon) with no selected icon'">
		<ng-template #treeTpl let-item="item">
			<div class="checkbox">
				<label>
					<input
						#cb
						[checked]="isChecked(item, cb)"
						[indeterminate]="isIndeterminate(item, cb)"
						(change)="onCheck({item: item}, $event)"
						[disabled]="item.disabled"
						type="checkbox">
					<span class="label">{{item.content}}</span>
				</label>
			</div>
		</ng-template>
	</n-tree-view>

	<h3>Searchable tree view</h3>
	<div id="demo">
		<div
			class="filter-search"
			style="width: 100%; background: #f5f5f5;">
			<div
				class="search-icon"
				style="top: 11px;">
				<svg
					class="icon"
					viewBox="0 0 16 16">
					<g>
						<path
							d="M6,0C2.7,0,0,2.7,0,6s2.7,6,6,6s6-2.7,6-6S9.3,0,6,0z
							M6,11c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5
							S8.8,11,6,11z"/>
						<rect
							x="12"
							y="10.2"
							transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 31.4698 13.0355)"
							width="2"
							height="5.7"/>
					</g>
				</svg>
			</div>
			<input
				style="background: transparent; border: none; height: 40px;"
				#filter
				(keyup)="search($event)"
				type="text"
				class="input-field"
				tabindex="0"
				(focus)="filterFocus = true"
				(blur)="filterFocus = filter.value?true:false"/>
			<span
				class="placeholder"
				[ngClass]="{
					visible: !filterFocus
				}"
				style="top: 12px;">
				Search
			</span>
			<button
				class="search-cancel"
				type="button"
				aria-label="cancel"
				[ngClass]="{
					visible: filter.value.trim()
				}"
				(click)="filter.value = ''; search($event); filterFocus = false"
				style="top: 11px;">
				<svg
					class="icon"
					viewBox="0 0 16 16">
					<polygon
						points="14.5,2.6 13.4,1.5
						8,6.9 2.6,1.5
						1.5,2.6 6.9,8
						1.5,13.4
						2.6,14.5
						8,9.1
						13.4,14.5
						14.5,13.4
						9.1,8"/>
				</svg>
			</button>
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
		let any = (items, cb) => {
			for (let item of items) {
				if (cb(item)) {
					return true;
				}
				if (item.items) {
					return any(item.items, cb);
				}
			}
			return false;
		};
		if (ev.item.items) {
			if (any(ev.item.items, item => item.selected)) {
				setSelect(ev.item.items, false);
				ev.item.selected = false;
				event.target.checked = false;
			} else {
				setSelect(ev.item.items, true);
				ev.item.selected = true;
				event.target.checked = true;
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
		let any = (items, cb) => {
			for (let i of items) {
				if (cb(i)) {
					return true;
				}
				if (i.items) {
					return any(i.items, cb);
				}
			}
			return false;
		};
		if (item.items) {
			let selected = item.items.filter(i => i.selected);
			if (any(item.items, i => i.selected) && !item.items.every(i => i.selected)) {
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
