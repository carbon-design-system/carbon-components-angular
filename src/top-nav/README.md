# Top-nav component

class: TopNav

selector: `cdl-top-nav`

| @Input    | Type        | Default Value |
| --------- | ----------- | ------------- |
| brand     | string      | null          |
| badge     | string      | null          |
| fixed     | boolean     | false         |


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

| @Input    | Type        | Default Value |
| --------- | ----------- | ------------- |
| selected  | boolean     | false         |

| @Output | Event               |
| ------- | ------------------- |
| onClick | `{onClick: Object}` |


Ex:
```html
<cdl-hamburger (onClick)="onClick($event)" hamburger></cdl-hamburger>
```

# Example

```html
<cdl-top-nav [fixed]="false">
	<cdl-hamburger hamburger></cdl-hamburger>
	<div title>
		<a class="top-nav-heading top-nav-link-item fl" href="#">
			<h1 class="top-nav-brand">
				IBM <strong>{{topNavBrand}}</strong>
			</h1>
			<span class="top-nav-badge">Beta</span>
		</a>
	</div>
	<ul class="top-nav-links fr" menu>
		<li>
			<input *ngIf="showSearchInput1" type="text" class="top-nav-search-input">
			<label class="top-nav-link-item"
				(click)="showSearchInput1 = toggleSearch(showSearchInput1)"
				tabindex="0">
				<cdl-icon class="menu-icon menu-icon-only" icon="search" size="16"></cdl-icon>
			</label>
		</li>
		<li>
			<a class="top-nav-link-item"
				tabindex="0"
				(click)="showNotifications1 = !showNotifications1"
				[ngClass]="{'top-nav-link-item-selected': showNotifications1}"
				[attr.aria-expanded]="!!showNotifications1">
				<cdl-icon class="menu-icon menu-icon-only" icon="alert" size="16"></cdl-icon>
			</a>
			<div [ngClass]="{'hidden': !showNotifications1}" class="top-nav-dropdown">
				There will be a drop down here of sorts.
			</div>
		</li>
		<li>
			<div *ngIf="!showSearchInput1" class="top-nav-divider"></div>
		</li>
		<li>
			<a class="top-nav-link-item"
				tabindex="0"
				(click)="showUser1 = !showUser1"
				[ngClass]="{'top-nav-link-item-selected': showUser1}"
				[attr.aria-expanded]="!!showUser1">
				<cdl-icon class="menu-icon" [ngClass]="{'menu-icon-only': showSearchInput1}" icon="user" size="16"></cdl-icon>
				<span *ngIf="!showSearchInput1">Sam Uncley</span>
			</a>
			<div [ngClass]="{'hidden': !showUser1}" class="top-nav-dropdown">
				There will be a drop down here of sorts.
			</div>
		</li>
		<li>
			<a class="top-nav-link-item"
				tabindex="0"
				(click)="showHelp1 = !showHelp1"
				[ngClass]="{'top-nav-link-item-selected': showHelp1}"
				[attr.aria-expanded]="!!showHelp1">
				<cdl-icon class="menu-icon" [ngClass]="{'menu-icon-only': showSearchInput1}" icon="help" size="16"></cdl-icon>
				<span *ngIf="!showSearchInput1">Help</span>
			</a>
			<div [ngClass]="{'hidden': !showHelp1}" class="top-nav-dropdown">
				There will be a drop down here of sorts.
			</div>
		</li>
	</ul>
</cdl-top-nav>
```

```typescript
toggleSearch(showSearchInput) {
	showSearchInput = !showSearchInput;

	if (showSearchInput) {
		setTimeout( () => {
			(document.querySelector(".top-nav-search-input") as HTMLElement).focus();
		}, 1);
	}

	return showSearchInput;
}
```
