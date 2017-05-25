# Popover directive

demo: [https://pages.github.ibm.com/peretz-next/neutrino/#/popover](https://pages.github.ibm.com/peretz-next/neutrino/#/popover)

class: PopoverDirective (implements OnInit)
selector: `cdlPopover`

| @Input        | Type                       | Accepted Value                 | Default Value |
| ---------     | -------------------------- | ------------------------------ | ------------- |
| title         | string                     |                                | null          |
| cdlPopover    | string \| TemplateRef<any> |                                | null          |
| trigger       | string                     | click, mouseenter              | click         |
| waitTime      | number                     |                                | 0             |
| gap           | number                     |                                | 10            |
| appendToBody  | boolean                    |                                | false         |
| placement     | string                     | top, bottom, left, right, auto | auto          |
| type          | string                     | warning, danger                | ''            |
| popoverMenu   | boolean                    |                                | false         |
| popoverFilter | boolean                    |                                | false         |


Ex:
```html
<button cdlPopover="Hello There" placement="bottom" trigger="mouseenter">Pop over</button>
```

## Popover on hover

```html
<button class="btn" cdlPopover="Hello There" placement="top-left" trigger="mouseenter">Pop over</button>
```

## Programatically open or close popover

```html
<button class="btn" cdlPopover="Hello There" placement="right" #popOver="cdlPopover">Pop over right</button>
<br>
<button class="btn" (click)="popOver.close()">Close above popover</button>
<button class="btn" (click)="this.open()">Open above popover</button>
```

```ts
export class PopoverDemo {
	private open() {
		setTimeout( () => {this.popOver.open(); }, 1);
	}
}
```

## Popover Menu

Ex:
```html
<ng-template #list>
	<div>
		<cdl-list-view [items]="demoItems" (select)="onSelect($event)"></cdl-list-view>
	</div>
</ng-template>
<button class="popover-menu-button"
	[cdlPopover]="list"
	placement="bottom-right"
	wrapperClass="popover-content-fullwidth"
	popoverMenu="true"
	[gap]="13">
	<cdl-glyphicon icon="dotdotdot_vert" size="16"></cdl-glyphicon>Menu
</button>
```

## Popover Filter

```html
<h3>Popover Filter</h3>
<ng-template #filter>
	<div class="filter-options">
		<cdl-checkbox>High</cdl-checkbox>
		<cdl-checkbox>Medium</cdl-checkbox>
		<cdl-checkbox>Low</cdl-checkbox>
		<cdl-checkbox>Danger</cdl-checkbox>
	</div>
	<div class="filter-options-buttons">
		<button class="btn">Apply</button>
		<button class="btn btn-secondary">Cancel</button>
	</div>
</ng-template>
<button class="btn"
	[cdlPopover]="filter"
	placement="right"
	wrapperClass="popover-content-filter"
	popoverFilter="true">
	Filter
</button>
```

```css
.filter-options {
	padding: 20px 20px 10px 20px;
	border-bottom: 1px solid color("gray", 10);
}

.filter-options-buttons {
	padding: 10px 20px;
}
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
<button cdlTooltip="I am a tooltip" placement="right" trigger="mouseenter" type="danger">Tooltip Right</button>
<button cdlTooltip="I am a tooltip" type="warning">Tooltip Top warning on click</button>
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
