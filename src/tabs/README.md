# Tabs

class: Tabs
selector: `n-tabs`

| @Input   | Type                   | Default Value |
| -------- | ---------------------- | ------------- |
| position | "top" \| "bottom"      | "top"         |

Tabs expects a set of `n-tab` elements
Ex:
```html
<n-tabs>
	<n-tab heading='tab1'>
		tab 1 content
	</n-tab>
	<n-tab heading='tab1'>
		tab 2 content
	</n-tab>
	<!-- ... -->
	<n-tab heading='tab1'>
		tab n content
	</n-tab>
</n-tabs>
```

class: Tab
selector: `n-tab`

**Inputs:**

| @Input   | Type                       | Default Value |
| -------- | -------------------------- | ------------- |
| heading  | string \| TemplateRef<any> | undefined     |
| active   | boolean                    | false         |

**Outputs:**

| @Output | Value       |
| ------- | ----------- |
| select  | void        |

Tab takes a string or TemplateRef for the header, and any content for the body of the tab. Disabled states should be handled by the application (ie. switch to the tab, but display some indication as to _why_ the tab is disabled)

When the tab is selected the `select` output will be triggered. `select` will also be triggred for the active tab when the tabs are loaded or updated.

Ex:
```html
<n-tab heading='tab1'>
	tab 1 content
</n-tab>
```

Custom header example:
```html
<ng-template #tabHeading>
	<n-icon
		icon="facebook"
		size="sm"
		style="margin-right: 7px;">
	</n-icon>
	Hello Tab 1
</ng-template>
<n-tabs>
	<n-tab [heading]="tabHeading">
		Tab 1 content <n-icon icon="alert" size="lg"></n-icon>
	</n-tab>
	<n-tab heading='Tab2'>
		Tab 2 content
	</n-tab>
	<n-tab heading='Tab3'>
		Tab 3 content
	</n-tab>
</n-tabs>
```
