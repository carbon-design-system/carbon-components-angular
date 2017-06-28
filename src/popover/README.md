# Popover directive

demo: [https://pages.github.ibm.com/peretz-next/neutrino/#/popover](https://pages.github.ibm.com/peretz-next/neutrino/#/popover)

class: PopoverDirective (implements OnInit)
selector: `nPopover`

| @Input        | Type                       | Accepted Value                 | Default Value |
| ---------     | -------------------------- | ------------------------------ | ------------- |
| title         | string                     |                                | null          |
| nPopover    | string \| TemplateRef<any> |                                | null          |
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
<button nPopover="Hello There" placement="bottom" trigger="mouseenter">Pop over</button>
```

## Popover on hover

```html
<button class="btn" nPopover="Hello There" placement="top-left" trigger="mouseenter">Pop over</button>
```

## Programatically open or close popover

```html
<button class="btn" nPopover="Hello There" placement="right" #popOver="nPopover">Pop over right</button>
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
		<n-list-view [items]="demoItems" (select)="onSelect($event)"></n-list-view>
	</div>
</ng-template>
<button class="popover-menu-button"
	[nPopover]="list"
	placement="bottom-right"
	wrapperClass="popover-content-fullwidth"
	popoverMenu="true"
	[gap]="13">
	<n-glyphicon icon="dotdotdot_vert" size="16"></n-glyphicon>Menu
</button>
```

## Popover Filter

```html
<h3>Popover Filter</h3>
<ng-template #filter>
	<div class="filter-options">
		<n-checkbox>High</n-checkbox>
		<n-checkbox>Medium</n-checkbox>
		<n-checkbox>Low</n-checkbox>
		<n-checkbox>Danger</n-checkbox>
	</div>
	<div class="filter-options-buttons">
		<button class="btn">Apply</button>
		<button class="btn btn-secondary">Cancel</button>
	</div>
</ng-template>
<button class="btn"
	[nPopover]="filter"
	placement="right"
	wrapperClass="popover-content-filter"
	popoverFilter="true">
	Filter
</button>
```

# Tooltip directive

class: TooltipDirective (extends PopoverDirective)
selector: `nTooltip`

| @Input       | Type                       | Accepted Value                 | Default Value |
| ---------    | -------------------------- | ------------------------------ | ------------- |
| title        | string                     |                                | null          |
| nTooltip   | string \| TemplateRef<any> |                                | null          |
| trigger      | string                     | click, mouseenter              | click         |
| waitTime     | number                     |                                | 0             |
| gap          | number                     |                                | 10            |
| appendToBody | boolean                    |                                | false         |
| placement    | string                     | top, bottom, left, right, auto | auto          |
| type         | string                     | warning, danger                | ''            |


Ex:
```html
<button nTooltip="I am a tooltip" placement="right" trigger="mouseenter" type="danger">Tooltip Right</button>
<button nTooltip="I am a tooltip" type="warning">Tooltip Top warning on click</button>
```


# Ellipsis Tooltip directive

class: EllipsisTooltipDirective (extends PopoverDirective)
selector: `nEllipsisTooltip`

| @Input       | Type                       | Accepted Value                 | Default Value |
| ---------    | -------------------------- | ------------------------------ | ------------- |
| waitTime     | number                     |                                | 0             |
| gap          | number                     |                                | 10            |
| appendToBody | boolean                    |                                | false         |
| placement    | string                     | top, bottom, left, right, auto | auto          |
| type         | string                     | warning, danger                | ''            |


Ex:
```html
<div class="ellipsis" nEllipsisTooltip>Tooltip for ellipsis because I can and I am really really long</div>
```
