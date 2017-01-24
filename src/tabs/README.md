# Tabs

class: Tabs  
selector: `cdl-tabs`

| @Input  | Type                   | Default Value |
| ------- | ---------------------- | ------------- |
| tabsPosition | "top" \| "bottom" |               |

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
| heading  | string \| TemplateRef<any> |               |
| active   | boolean                    |               |
| disabled | boolean                    |               |
