# Charts Module

Charts exports various types of reusable D3 visualizations like bar chart.

### Bar Chart
class: BarChart (implements OnInit, OnChanges)
selector: `cdl-bar-chart`

| @Input       | Type                       | Accepted Value                 | Default Value |
| ---------    | -------------------------- | ------------------------------ | ------------- |
| config       | Config                   	|                                |           	 |
| data         | any*                       |                                |           	 |


Bar Chart builds a simple bar-graph that accepts an configuration object and data object as inputs.

Ex:
```html
    <cdl-bar-chart [config]="barConfig" [data]="chartData"></sci-bar-chart>
```
