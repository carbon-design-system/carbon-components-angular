# Tabs

class: Tabs
selector: `cdl-tabs`

| @Input   | Type                   | Default Value |
| -------- | ---------------------- | ------------- |
| position | "top" \| "bottom"      | "top"         |

Tabs expects a set of `cdl-tab` elements
Ex:
```html
<cdl-tabs>
	<cdl-tab heading='tab1'>
		tab 1 content
	</cdl-tab>
	<cdl-tab heading='tab1'>
		tab 2 content
	</cdl-tab>
	<!-- ... -->
	<cdl-tab heading='tab1'>
		tab n content
	</cdl-tab>
</cdl-tabs>
```

class: Tab
selector: `cdl-tab`

| @Input   | Type                       | Default Value |
| -------- | -------------------------- | ------------- |
| heading  | string \| TemplateRef<any> | undefined     |
| active   | boolean                    | false         |

Tab takes a string or TemplateRef for the header, and any content for the body of the tab. Disabled states should be handled by the application (ie. switch to the tab, but display some indication as to _why_ the tab is disabled)

Ex:
```html
<cdl-tab heading='tab1'>
	tab 1 content
</cdl-tab>
```

Custom header example:
```html
<ng-template #tabHeading>
	<cdl-icon
		icon="facebook"
		size="sm"
		style="margin-right: 7px;">
	</cdl-icon>
	Hello Tab 1
</ng-template>
<cdl-tabs>
	<cdl-tab [heading]="tabHeading">
		Tab 1 content <cdl-icon icon="alert" size="lg"></cdl-icon>
	</cdl-tab>
	<cdl-tab heading='Tab2'>
		Tab 2 content
	</cdl-tab>
	<cdl-tab   heading='Tab3'>
		Tab 3 content
	</cdl-tab>
</cdl-tabs>
```
