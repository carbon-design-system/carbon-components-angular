# Tree view

demo: [https://pages.github.ibm.com/peretz-next/neutrino/#/tree-view](https://pages.github.ibm.com/peretz-next/neutrino/#/tree-view)

## Components
### Tree view

class: TreeView

selector: `n-tree-view`

source: `src/tree-view/tree-view.component.ts`

**Inputs:**

| @Input   | Type                       | Default Value |
| -------- | -------------------------- | ------------- |
| items    | Array<ListItem>            | `[]`          |
| template | string \| TemplateRef<any> |               |
| label    | string                     |               |
| role     | "tree" \| "group"          | "tree"        |

**Outputs:**

| @Output | Event            |
| ------- | ---------------- |
| select  | `{item: Object}` |

`items` expects an array of objects that follow the ListItem format:
```javascript
{
	content: "string",
	selected: false,
	disabled: false, // optional
	items: [] // optional array of items following this format
}
```

`template` binds `item` to the template context

`label` sets the `aria-label` for the root of the tree

`role` is primarily for internal use, but can be used to customize the tree root role

Ex:
```html
<n-tree-view
	[items]="demoItems"
	(select)="onSelect($event)"
	label="Default Tree View">
</n-tree-view>
```

### Tree view wrapper

Internal render helper

### Tree view item

Internal item component
