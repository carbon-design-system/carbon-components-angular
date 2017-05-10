# Dropdown

demo: [https://pages.github.ibm.com/peretz-next/neutrino/#/dropdown](https://pages.github.ibm.com/peretz-next/neutrino/#/dropdown)

## Interfaces
### ListItem interface
interface: ListItem

source: `src/dropdown/list-item.interface.ts`

```typescript
interface ListItem {
	content: string;
	selected: boolean;
	items?: ListItem[];
	disabled?: boolean;
}
```
`content` and `selected` are the only **required** properties you **must** provide. When using a custom item template (supported by all the Neutrino item views, not required by AbstractDropdownView) the entire ListItem will be passed to the template as `item`.

### AbstractDropdownView base class
class: AbstractDropdownView

source: `src/dropdown/abstract-dropdown-view.class.ts`

```typescript
export class AbstractDropdownView {
	@Input() items: Array<ListItem>;
	@Output() select: EventEmitter<Object>;
	public type: "single" | "multi" = "single";
	getNextItem(): ListItem { return; }
	getNextElement(): HTMLElement { return; }
	getPrevItem(): ListItem { return; }
	getPrevElement(): HTMLElement { return; }
	getSelected(): ListItem[] { return; }
	getCurrentElement(): HTMLElement { return; }
	propagateSelected(value: Array<ListItem>): void {}
}
```
A component that intends to be used within Dropdown must provide an implementation that follows this base class. It also must provide the base class in the `@Component` meta-data, ex: `providers: [{provide: AbstractDropdownView, useExisting: forwardRef(() => MyDropdownView)}]`

## Components
### Dropdown
class: Dropdown

selector: `cdl-dropdown`

source: `src/dropdown/dropdown.component.ts`

**Inputs:**

| @Input        | Type                      | Default value |
| ------------- | ------------------------- | ------------- |
| placeholder   | string                    | ""            |
| displayValue  | string                    | ""            |
| size          | "sm" \| "default" \| "lg" | "default"     |
| type          | "single" \| "multi"       | "single"      |
| disabled      | boolean                   | false         |
| appendToBody  | boolean                   | false         |

**Outputs:**

| @Output | Value       |
| ------- | ----------- |
| select  | ListItem    |
| onClose | undefined   |

`placeholder` will __always__ be rendered when no options are selected. Either the `content` property of the ListItem (for single select dropdowns) or "# selected" (for multi select dropdowns) will be rendered when options are selected. `displayValue` can be used to set custom text to be shown when options are selected.

Dropdown expects a component that implements the AbstractDropdownView base class; in Neutrino those are DropdownList, DropdownTree, and DropdownSubMenu.

Ex:
```html
<cdl-dropdown
	placeholder="Select an option"
	(select)="display = getDisplay($event.item)">
	<cdl-dropdown-list [items]="items"></cdl-dropdown-list>
</cdl-dropdown>
```


### DropdownList
class: DropdownList

selector: `cdl-dropdown-list`

source: `src/dropdown/list/list.component.ts`

**Inputs:**

| @Input  | Type                       | Default value |
| ------- | -------------------------- | ------------- |
| items   | Array<ListItem>            | []            |
| listTpl | string \| TemplateRef<any> | null          |

Ex:
```html
<cdl-dropdown-list [items]="listItems"></cdl-dropdown-list>
```
```typescript
listItems = [
	{
		content: "item one",
		selected: false
	},
	{
		content: "item two",
		selected: false,
	},
	{
		content: "item three",
		selected: false
	},
	{
		content: "item four",
		selected: false
	}
];
```

### DropdownFilter
class: DropdownFilter (extends DropdownList)

selector: `cdl-dropdown-filter`

source: `src/dropdown/list/dropdown-filter-list.component.ts`

**Inputs:**

| @Input  | Type                       | Default value |
| ------- | -------------------------- | ------------- |
| items   | Array<ListItem>            | []            |
| listTpl | string \| TemplateRef<any> | null          |

Ex:
```html
<cdl-dropdown-filter [items]="listItems"></cdl-dropdown-filter>
```

### DropdownTree
class: DropdownTree

selector: `cdl-dropdown-tree`

source: `src/dropdown/tree/tree.component.ts`

**Inputs:**

| @Input  | Type                       | Default value |
| ------- | -------------------------- | ------------- |
| items   | Array<ListItem>            | []            |
| listTpl | string \| TemplateRef<any> | null          |

Ex:
```html
<cdl-dropdown-tree [items]="treeItems"></cdl-dropdown-tree>
```
```typescript
treeItems = [
	{
		content: "item one",
		selected: false
	},
	{
		content: "item two",
		selected: false,
		items: [
			{
				content: "sub item two 1",
				selected: false
			},
			{
				content: "sub item two 2",
				selected: false,
				items: [
					{
						content: "sub item two 1b",
						selected: false
					},
					{
						content: "sub item two 2b",
						selected: false,
					}
				]
			},
		]
	},
	{
		content: "item three",
		selected: false,
	},
	{
		content: "item four",
		selected: false
	}
];
```

### DropdownSubMenu
class: DropdownSubMenu

selector: `cdl-dropdown-sub-menu`

source: `src/dropdown/sub-menu/sub-menu.component.ts`

**Inputs:**

| @Input  | Type                       | Default value |
| ------- | -------------------------- | ------------- |
| items   | Array<ListItem>            | []            |
| listTpl | string \| TemplateRef<any> | null          |

Ex:
```html
<cdl-dropdown-sub-menu [items]="treeItems"></cdl-dropdown-sub-menu>
```
