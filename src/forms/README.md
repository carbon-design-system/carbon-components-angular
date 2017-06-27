# Forms

demo: [https://pages.github.ibm.com/peretz-next/neutrino/#/forms](https://pages.github.ibm.com/peretz-next/neutrino/#/forms)

Forms module adds convenience components for forms to Neutrino.

## Components
### CheckboxComponent
class: CheckboxComponent

selector: `cdl-checkbox`

source: `src/forms/checkbox.component.ts`

**Inputs:**

| @Input          | Type     | Default value       |
| --------------- | -------- | ------------------- |
| disabled        | boolean  | false               |
| name            | string   |                     |
| id              | string   | "checkbox-<number>" |
| required        | boolean  |                     |
| value           | string   |                     |
| aria-label      | string   | ""                  |
| aria-labelledby | string   |                     |
| indeterminate   | boolean  |                     |
| checked         | boolean  |                     |

**Outputs:**

| @Output             | Value          |
| ------------------- | -------------- |
| change              | CheckboxChange |
| indeterminateChange | boolean        |

Ex:
```html
<cdl-checkbox [(ngModel)]="checkboxState">Checkbox</cdl-checkbox>
```

#### Using indeterminate state

```typescript
@Component({
	selector: "indeterminate-checkbox-demo",
	template: `
	<cdl-checkbox
		[(ngModel)]="checkboxState"
		[indeterminate]="someSelected"
		(change)="onTristateChange()">
		Tristate Checkbox (State: {{checkboxState}} Indeterminate: {{someSelected}})
	</cdl-checkbox>

	<cdl-checkbox *ngFor="let one of manyCheckboxes"
		[(ngModel)]="one.checked"
		(change) = "multiCheckboxChanged()"
		class="indent">
		Check ({{one.checked}})
	</cdl-checkbox>
	`
})
export class FormsDemo {
	checkboxState = false;
	someSelected = false;
	firstSwitchState = false;

	manyCheckboxes = [{checked: false}, {checked: false}, {checked: false}, {checked: false}];

	onTristateChange() {
		this.someSelected = false;
		for (let i = 0; i < this.manyCheckboxes.length; i++) {
			let one = this.manyCheckboxes[i];
			one.checked = this.checkboxState;
		}
	}

	multiCheckboxChanged() {
		let startValue = this.manyCheckboxes[0].checked;

		for (let i = 1; i < this.manyCheckboxes.length; i++) {
			let one = this.manyCheckboxes[i];

			if (one.checked !== startValue) {
				// set indeterminate
				this.secondCheckboxState = false;
				this.someSelected = true;
				return;
			}
		}

		this.someSelected = false;
		this.secondCheckboxState = startValue;
	}
}
```

### SwitchComponent
class: SwitchComponent (extends CheckboxComponent)

selector: `cdl-switch`

source: `src/forms/switch.component.ts`

**Inputs:**

| @Input          | Type     | Default value     |
| --------------- | -------- | ----------------- |
| disabled        | boolean  | false             |
| name            | string   |                   |
| id              | string   | "switch-<number>" |
| required        | boolean  |                   |
| value           | string   |                   |
| aria-label      | string   | ""                |
| aria-labelledby | string   |                   |
| indeterminate   | boolean  |                   |
| checked         | boolean  |                   |

**Outputs:**

| @Output             | Value          |
| ------------------- | -------------- |
| change              | CheckboxChange |
| indeterminateChange | boolean        |

Ex:
```html
<cdl-switch [(ngModel)]="switchState">Switch</cdl-switch>
```

### LabelComponent
class: LabelComponent

selector: `cdl-label`

source: `src/forms/label.component.ts`

**Inputs:**

| @Input          | Type                                     | Default value |
| --------------- | ---------------------------------------- | ------------- |
| labelState      | "success" \| "warning" \| "error" \| ""  | ""            |

Ex:
```html
<cdl-label labelState="success">
	<label label>Field with success</label>
	<input type="text" class="input-field">
</cdl-label>

<cdl-label labelState="warning">
	<label label>Field with warning</label>
	<input type="text" class="input-field">
</cdl-label>

<cdl-label labelState="error">
	<label label>Field with error</label>
	<input type="text" class="input-field">
</cdl-label>
```
