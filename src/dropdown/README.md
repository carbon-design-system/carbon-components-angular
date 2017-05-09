# Dropdown

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
`content` and `selected` are the only **required** properties you **must** provide.

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
| @Input        | Type                              | Default value |
| ------------- | --------------------------------- | ------------- |
| displayValue  | string                            | ""            |
| size          | "sm" \| "default" \| "lg" \| "sm" | "default"     |
| type          | "single" \| "multi"               | "single"      |
| disabled      | boolean                           | false         |
| appendToBody  | boolean                           | false         |

**Outputs:**
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


### DropdownList
class: DropdownList
selector: `cdl-dropdown-list`
source: `src/dropdown/list/list.component.ts`
**Inputs:**
| @Input  | Type                       | Default value |
| ------- | -------------------------- | ------------- |
| items   | Array<ListItem>            | []            |
| listTpl | string \| TemplateRef<any> | null          |

###

### DropdownTree
class: DropdownTree
selector: `cdl-dropdown-tree`
source: `src/dropdown/tree/tree.component.ts`
**Inputs:**
| @Input  | Type                       | Default value |
| ------- | -------------------------- | ------------- |
| items   | Array<ListItem>            | []            |
| listTpl | string \| TemplateRef<any> | null          |

### DropdownSubMenu
class: DropdownSubMenu
selector: `cdl-dropdown-sub-menu`
source: `src/dropdown/sub-menu/sub-menu.component.ts`
**Inputs:**
| @Input  | Type                       | Default value |
| ------- | -------------------------- | ------------- |
| items   | Array<ListItem>            | []            |
| listTpl | string \| TemplateRef<any> | null          |

