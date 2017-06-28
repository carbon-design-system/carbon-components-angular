# Datepicker directive

class: DatepickerDirective (implements OnInit)
selector: `nDatepicker`

| @Input       | Type                       | Accepted Value                 | Default Value |
| ---------    | -------------------------- | ------------------------------ | ------------- |
| format       | string                     | valid date format              | yyyy/mm/dd    |
| ngModel      |                            |                                |               |
| selectedDate | Date                       |                                |               |
| validDate    | boolean                    |                                |               |
| appendToBody | boolean                    |                                | false         |
| placement    | string                     | top, bottom, left, right, auto | auto          |

| @Output            | Event             |
| ------------------ | ----------------- |
| ngModelChange      | date: string      |
| selectedDateChange | date: Date        |
| validDateChange    | validate: boolean |



Ex:
```html
<div style="position: relative">
  <input type="text"
    [(ngModel)]="date1"
    nDatepicker
    placement="bottom"
    #nDatepicker="nDatepicker"
    [(selectedDate)]="selectedDate1"
    [(validDate)]="validDate1"
  />
  <button class="btn" (click)="nDatepicker.toggle($event)">
    <span style="pointer-events: none; display: inline-block">
      <n-icon icon="Calendar" size="md"></n-icon>
    </span>
  </button>
</div>
```

