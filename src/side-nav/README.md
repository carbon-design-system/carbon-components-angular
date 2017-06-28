# Side-nav

class: SideNav
selector: `n-side-nav`

| @Input | Type    | Default Value |
| ------ | ------- | ------------- |
| open   | boolean | true          |
| fixed  | boolean | false         |

SideNav contains a single projection for side-nav content. Below is an example for a tree-view component.

Ex:
```html
<n-side-nav [open]="sideNavOpen">
	<n-tree-view [items]="demoItems" [listTpl]="listTpl"> </n-tree-view>
</n-side-nav>
```

class: SideNavItem
selector: `n-side-nav-item`

| @Input     | Type    | Default Value |
| ---------- | ------- | ------------- |
| selected   | boolean | false         |
| aria-level | number  | 1             |

SideNavItem expects either a icon with the class `.side-nav-glyph` and a title with the class `.side-nav-item` or a `.side-nav-glyph` and a SideNavPaneTitle contained within a `.side-nav-pane-sub-template`. For example:

```html
<n-side-nav-item>
	<n-glyphicon class="side-nav-glyph" icon="alert" size="md"></n-glyphicon>
	<span class="side-nav-item">Some title content here</span>
</n-side-nav-item>
```

```html
<n-side-nav-item>
	<span class="side-nav-item">Some title content here</span>
	<div class="side-nav-pane-sub-template">
		<n-side-nav-pane-title>Some title content here</n-side-nav-pane-title>
		<n-tree-view [items]="demoItems" [listTpl]="listTpl" [elemSpacing]="44" ></n-tree-view>
	</div>
</n-side-nav-item>
```

class: SideNavPaneTitle
selector: `n-side-nav-pane-title`

SideNavPaneTitle expects some title to be projected, to be used as the title of the fly in sub view.

Full side nav example:
```html
<ng-template #listTpl let-item="item">
	<n-icon *ngIf="item.icon" icon="{{item.icon}}" size="md"></n-icon>
	{{item.content}}
</ng-template>

<n-side-nav [open]="sideNavOpen">
	<n-side-nav-item routerLink="/somewhere/nice" tabindex="-1">
		<n-icon
			class="side-nav-glyph"
			icon="lightbulb"
			size="md">
		</n-icon>
		<span class="side-nav-item">Understand</span>
	</n-side-nav-item>
	<n-side-nav-item>
		<n-icon
			class="side-nav-glyph"
			icon="attributes"
			size="md">
		</n-icon>
		<span class="side-nav-item">Even more</span>
		<n-side-nav-item>
			<span class="side-nav-item">To show how ellipsis gets activated</span>
		</n-side-nav-item>
		<n-side-nav-item>
			<span class="side-nav-item">And this is how ellipsis happens</span>
			<div class="side-nav-pane-sub-template">
				<n-side-nav-pane-title>And this is how ellipsis happens</n-side-nav-pane-title>
				<n-tree-view
					[items]="demoItems"
					[template]="listTpl">
				</n-tree-view>
			</div>
		</n-side-nav-item>
		<n-side-nav-item>
			<span class="side-nav-item">And here</span>
			<div class="side-nav-pane-sub-template">
				<n-side-nav-pane-title>And here</n-side-nav-pane-title>
				<n-tree-view
					[items]="demoItems2"
					[template]="listTpl">
				</n-tree-view>
			</div>
		</n-side-nav-item>
	</n-side-nav-item>
</n-side-nav>
```

```typescript
private demoItems = [
	{
		content: "Understand",
		selected: false,
		icon: "alert",
		items: [
			{
				content: "Experience integrations",
				selected: false,
				items: [
					{
						content: "Experience integrations",
						selected: false
					},
					{
						content: "Predictive custom intelligence",
						selected: false
					},
				]
			},
			{
				content: "Predictive custom intelligence",
				selected: false
			},
		]
	},
	{
		content: "Plan",
		selected: false,
		icon: "alert"
	},
	{
		content: "Design",
		selected: false,
		icon: "alert"
	}
];

private demoItems2 = this.clone(this.demoItems);

private clone (el) {
	return JSON.parse(JSON.stringify(el));
}
```
