# Side-nav component

class: SideNav (implements OnInit)
selector: `cdl-side-nav`

| @Input       | Type                       | Accepted Value                 | Default Value |
| ---------    | -------------------------- | ------------------------------ | ------------- |
| open         | boolean                    |                                | true          |

Side-nav contains a single projection for side-nav content. Below is an example for a nested-view component.

Ex:
```html
<cdl-side-nav [open]="sideNavOpen">
	<cdl-nested-view [items]="demoItems" [listTpl]="listTpl"> </cdl-nested-view>
</cdl-side-nav>
```