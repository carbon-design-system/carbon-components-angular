# Top-nav component

class: TopNav (implements OnInit)

selector: `cdl-top-nav`

| @Input       | Type                       | Default Value |
| ---------    | -------------------------- | ------------- |
| brand        | string                     | null          |
| badge        | string                     | null          |
| fixed        | boolean                    | false         |



Ex:
```html
<cdl-top-nav [brand]="topNavBrand" [badge]="topNavBadge" [sticky]="true"></cdl-top-nav>
```

Top-nav takes 3 optional projections for hamburger, links and menu:
Ex:
```html
<cdl-top-nav [brand]="topNavBrand" [badge]="topNavBadge" [sticky]="false">
	<cdl-hamburger hamburger></cdl-hamburger>
	<cdl-list-view links [items]="demoItems"></cdl-list-view>
</cdl-top-nav>
```

`items` expects an array of objects where the objects follow the format:
```javascript
{
	content: "string",
	disabled: false //optional
}
```

See list-view component.

# Hamburger component

class: Hamburger (extends PopoverDirective)
selector: `cdl-hamburger`

| @Output | Event                      |
| ------- | -------------------------- |
| onClick | `{hamburgerClick: Object}` |


Ex:
```html
<cdl-hamburger (onClick)="onClick($event)" hamburger></cdl-hamburger>
```