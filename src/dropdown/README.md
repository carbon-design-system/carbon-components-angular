# Dropdown

class: Dropdown  
selector: `cdl-dropdown`

| @Input        | Type                              | Default Value |
| ------------- | --------------------------------- | ------------- |
| displayValue  | string                            | ""            |
| size          | "sm" \| "default" \| "lg" \| "sm" | "default"     |
| disabled      | boolean                           | false         |
| selectedVal   | any                               |               |
| isSplit       | boolean                           | false         |
| closeOnSelect | boolean                           | true          |
| multiSelect   | boolean                           | false         |

Dropdown also takes a ContentChild that implements the View base class; in Neutrino those are ListView, NestedView, and TreeView.  
Ex:
```html
<cdl-dropdown [displayValue]="dropdown">
	<cdl-list-view [items]="items" (select)="handleSelect($event)"></cdl-list-view>
</cdl-dropdown>
```