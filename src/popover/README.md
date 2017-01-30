# Popover directive

class: PopoverDirective (implements OnInit)
selector: `cdlPopover`

| @Input       | Type                       | Accepted Value                 | Default Value |
| ---------    | -------------------------- | ------------------------------ | ------------- |
| title        | string                     |                                | null          |
| cdlPopover   | string \| TemplateRef<any> |                                | null          |
| trigger      | string                     | click, mouseenter              | click         |
| waitTime     | number                     |                                | 0             |
| gap          | number                     |                                | 10            |
| appendToBody | boolean                    |                                | false         |
| placement    | string                     | top, bottom, left, right, auto | auto          |
| type         | string                     | warning, danger                | ''            |


Ex:
```html
<button cdlPopover="Hello There" placement="bottom" trigger="mouseenter">Pop over</button>
```


# Tooltip directive

class: TooltipDirective (extends PopoverDirective)
selector: `cdlTooltip`

| @Input       | Type                       | Accepted Value                 | Default Value |
| ---------    | -------------------------- | ------------------------------ | ------------- |
| title        | string                     |                                | null          |
| cdlTooltip   | string \| TemplateRef<any> |                                | null          |
| trigger      | string                     | click, mouseenter              | click         |
| waitTime     | number                     |                                | 0             |
| gap          | number                     |                                | 10            |
| appendToBody | boolean                    |                                | false         |
| placement    | string                     | top, bottom, left, right, auto | auto          |
| type         | string                     | warning, danger                | ''            |


Ex:
```html
<button cdlTooltip="I am a tooltip" placement="right" trigger="mouseenter" type="danger">Tooltip</button>
```


# Ellipsis Tooltip directive

class: EllipsisTooltipDirective (extends PopoverDirective)
selector: `cdlEllipsisTooltip`

| @Input       | Type                       | Accepted Value                 | Default Value |
| ---------    | -------------------------- | ------------------------------ | ------------- |
| waitTime     | number                     |                                | 0             |
| gap          | number                     |                                | 10            |
| appendToBody | boolean                    |                                | false         |
| placement    | string                     | top, bottom, left, right, auto | auto          |
| type         | string                     | warning, danger                | ''            |


Ex:
```html
<div class="ellipsis" cdlEllipsisTooltip>Tooltip for ellipsis because I can and I am really really long</div>
```