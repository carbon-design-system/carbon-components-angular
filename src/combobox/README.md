# Combobox

demo: [https://pages.github.ibm.com/peretz/neutrino/#/combobox](https://pages.github.ibm.com/peretz/neutrino/#/combobox)

## Interfaces
### ListItem interface
interface: ListItem

source: `src/dropdown/list-item.interface.ts`

```typescript
export interface ListItem {
	content: string;
	selected: boolean;
	disabled?: boolean;
	items?: ListItem[];
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
	public size: "sm" | "md" | "default" | "lg" = "md";
	getNextItem(): ListItem { return; }
	getNextElement(): HTMLElement { return; }
	getPrevItem(): ListItem { return; }
	getPrevElement(): HTMLElement { return; }
	getSelected(): ListItem[] { return; }
	getCurrentItem(): ListItem { return; }
	getCurrentElement(): HTMLElement { return; }
	propagateSelected(value: Array<ListItem>): void {}
}
```
_(size `"default"` is being deprecated as of neutrino v1.2.0, please use `"md"` instead)_

A component that intends to be used within Dropdown must provide an implementation that follows this base class. It also must provide the base class in the `@Component` meta-data, ex: `providers: [{provide: AbstractDropdownView, useExisting: forwardRef(() => MyDropdownView)}]`

## Components
### Dropdown
class: ComboBox

selector: `n-combo-box`

source: `src/combo-box/combo-box.component.ts`

**Inputs:**

| @Input        | Type                | Default value |
| ------------- | ------------------- | ------------- |
| items         | ListItem[]          | []            |
| placeholder   | string              | ""            |
| type          | "single" \| "multi" | "single"      |
| disabled      | boolean             | false         |

**Outputs:**

| @Output | Value       |
| ------- | ----------- |
| submit  | Object      |
| select  | ListItem    |

`placeholder` will __always__ be rendered when no options are selected. Either the `content` property of the ListItem (for single select combo boxes) or pills (for multi select combo boxes) will be rendered when options are selected.



Ex:
```html
<n-combo-box
	placeholder="Select or enter"
	[items]="items">
	<n-dropdown-button>
		<n-dropdown-list></n-dropdown-list>
	</n-dropdown-button>
</n-combo-box>
```

### Dropdown button
class: DropdownButton

selector: `n-dropdown-button`

source: `src/combo-box/dropdown-button.component.ts`

**Inputs:**

| @Input | Type    | Default value |
| ------ | ------- | ------------- |
| open   | boolean | false         |

**Outputs:**

| @Output | Value |
| ------- | ----- |
| close   | void  |

Dropdown button expects a component that implements the AbstractDropdownView base class; in Neutrino those are DropdownList, DropdownTree, and DropdownSubMenu. **note:** According to the design specs you should **only** use DropdownList or DropdownTree.

###Pill input
class: PillInput

selector: `n-pill-input`

source: `src/combo-box/pill-input.component.ts`

docs TBD since this is an internal component

###Pill
class: Pill

selector: `n-pill`

source: `src/combo-box/pill.component.ts`

docs TBD since this is an internal component
