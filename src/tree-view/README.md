# Tree View

class: TreeView (implements View)
selector: `n-tree-view`

| @Input  | Type                       | Default Value |
| ------- | -------------------------- | ------------- |
| items   | Array<Object>              | `[]`          |
| listTpl | string \| TemplateRef<any> |               |

| @Output | Event            |
| ------- | ---------------- |
| select  | `{item: Object}` |

`listTpl` binds `item` to the template context

`items` expects an array of objects where the objects follow the format:
```javascript
{
	content: "string",
	selected: false,
	disabled: false, // optional
	subMenu: [] // optional array of items following this format
}
```
