# Side-nav

class: SideNav
selector: `cdl-side-nav`

| @Input | Type    | Default Value |
| ------ | ------- | ------------- |
| open   | boolean | true          |
| fixed  | boolean | false         |

SideNav contains a single projection for side-nav content. Below is an example for a tree-view component.

Ex:
```html
<cdl-side-nav [open]="sideNavOpen">
	<cdl-tree-view [items]="demoItems" [listTpl]="listTpl"> </cdl-tree-view>
</cdl-side-nav>
```

class: SideNavItem
selector: `cdl-side-nav-item`

| @Input   | Type    | Default Value |
| -------- | ------- | ------------- |
| selected | boolean | false         |

SideNavItem expects either a icon with the class `.side-nav-glyph` and a title with the class `.side-nav-item` or a `.side-nav-glyph` and a SideNavPaneTitle contained within a `.side-nav-pane-sub-template`. For example:

```html
<cdl-side-nav-item>
	<cdl-glyphicon class="side-nav-glyph" icon="alert" size="md"></cdl-glyphicon>
	<span class="side-nav-item">Some title content here</span>
</cdl-side-nav-item>
```

```html
<cdl-side-nav-item>
	<span class="side-nav-item">Some title content here</span>
	<div class="side-nav-pane-sub-template">
		<cdl-side-nav-pane-title>Some title content here</cdl-side-nav-pane-title>
		<cdl-tree-view [items]="demoItems" [listTpl]="listTpl" [elemSpacing]="44" ></cdl-tree-view>
	</div>
</cdl-side-nav-item>
```

class: SideNavPaneTitle
selector: `cdl-side-nav-pane-title`

SideNavPaneTitle expects some title to be projected, to be used as the title of the fly in sub view.
