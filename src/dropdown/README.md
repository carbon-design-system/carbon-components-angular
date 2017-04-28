# Dropdown

interface: ListItem
source: `src/dropdown/list-item.interface.ts`
```typescript
interface ListItem {
	content: string;
	disabled: boolean;
	selected: boolean;
	items?: ListItem[];
}
```

class: Dropdown  
selector: `cdl-dropdown`
source: `src/dropdown/dropdown.component.ts`

| @Input        | Type                              | Default value |
| ------------- | --------------------------------- | ------------- |
| displayValue  | string                            | ""            |
| size          | "sm" \| "default" \| "lg" \| "sm" | "default"     |
| type          | "single" \| "multi"               | "single"      |
| disabled      | boolean                           | false         |
| appendToBody  | boolean                           | false         |

| @Output | Value shape |
| ------- | ----------- |
| select  | ListItem    |
| onClose | undefined   |

Dropdown expects a component that implements the AbstractDropdownView base class; in Neutrino those are DropdownList, DropdownTree, and DropdownSubMenu.  
Ex:
```html
<cdl-dropdown
	[displayValue]="display || 'Select an option'"
	(select)="display = getDisplay($event.item)">
	<cdl-dropdown-list [items]="items"></cdl-dropdown-list>
</cdl-dropdown>
```

class: DropdownList
selector: `cdl-dropdown-list`
source: `src/dropdown/list/list.component.ts`

| @Input  | Type                       | Default value |
| ------- | -------------------------- | ------------- |
| items   | Array<ListItem>            | []            |
| listTpl | string \| TemplateRef<any> | null          |

class: DropdownTree
selector: `cdl-dropdown-tree`
source: `src/dropdown/tree/tree.component.ts`

| @Input  | Type                       | Default value |
| ------- | -------------------------- | ------------- |
| items   | Array<ListItem>            | []            |
| listTpl | string \| TemplateRef<any> | null          |

class: DropdownSubMenu
selector: `cdl-dropdown-sub-menu`
source: `src/dropdown/sub-menu/sub-menu.component.ts`

| @Input  | Type                       | Default value |
| ------- | -------------------------- | ------------- |
| items   | Array<ListItem>            | []            |
| listTpl | string \| TemplateRef<any> | null          |

