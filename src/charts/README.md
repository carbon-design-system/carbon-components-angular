# Charts Module

Charts exports various types of reusable D3 visualizations like bar chart.

### Bar Chart
class: BarChart (implements OnInit, OnChanges)
selector: `n-bar-chart`

| @Input       | Type                       | Accepted Value                 | Default Value |
| ---------    | -------------------------- | ------------------------------ | ------------- |
| config       | Config                   	|                                |           	 |
| data         | any*                       |                                |           	 |


Bar Chart builds a simple bar-graph that accepts an configuration object and data object as inputs.

*currently set as any as a final data format is TBD

Ex:
```html
    <n-bar-chart [config]="barConfig" [data]="chartData"></n-bar-chart>
```
