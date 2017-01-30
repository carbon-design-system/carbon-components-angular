# Typeahead

class: Typeahead (implements AfterContentInit)
selector: `cdl-typeahead`

| @Input     | Type                       | Default Value |
| ---------- | -------------------------- | ------------- |
| list       | Array<Object>              | `[]`          |
| listTpl    | TemplateRef<any>           | null          |
| displayKey | string                     | true          |
| waitTime   | number                     | 0             |
| limit      | number                     | 5             |


| @Output  | Event            |
| -------- | ---------------- |
| onSearch | input: string    |
| onSelect | `{item: Object}` |

Ex:
```html
<cdl-typeahead [list]="list" (onSearch)="search($event)" (onSelect)="onSelect($event)" [limit]="8"></cdl-typeahead>
```