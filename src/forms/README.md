# Forms

demo: [https://pages.github.ibm.com/peretz-next/neutrino/#/forms](https://pages.github.ibm.com/peretz-next/neutrino/#/forms)

Forms module adds convenience components for forms to Neutrino.

## Components
### CheckboxComponent
class: CheckboxComponent

selector: `n-checkbox`

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
<n-checkbox [(ngModel)]="checkboxState">Checkbox</n-checkbox>
```

#### Using indeterminate state

```typescript
@Component({
	selector: "indeterminate-checkbox-demo",
	template: `
	<n-checkbox
		[(ngModel)]="checkboxState"
		[indeterminate]="someSelected"
		(change)="onTristateChange()">
		Tristate Checkbox (State: {{checkboxState}} Indeterminate: {{someSelected}})
	</n-checkbox>

	<n-checkbox *ngFor="let one of manyCheckboxes"
		[(ngModel)]="one.checked"
		(change) = "multiCheckboxChanged()"
		class="indent">
		Check ({{one.checked}})
	</n-checkbox>
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

selector: `n-switch`

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
<n-switch [(ngModel)]="switchState">Switch</n-switch>
```

### LabelComponent
class: LabelComponent

selector: `n-label`

source: `src/forms/label.component.ts`

**Inputs:**

| @Input          | Type                                     | Default value |
| --------------- | ---------------------------------------- | ------------- |
| labelState      | "success" \| "warning" \| "error" \| ""  | ""            |

Ex:
```html
<n-label labelState="success">
	<label label>Field with success</label>
	<input type="text" class="input-field">
</n-label>

<n-label labelState="warning">
	<label label>Field with warning</label>
	<input type="text" class="input-field">
</n-label>

<n-label labelState="error">
	<label label>Field with error</label>
	<input type="text" class="input-field">
</n-label>
```
