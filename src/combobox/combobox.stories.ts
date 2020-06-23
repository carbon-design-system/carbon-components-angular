import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import {
	withKnobs,
	text,
	boolean,
	number,
	select
} from "@storybook/addon-knobs/angular";

import { ComboBoxModule } from "./combobox.module";
import { ButtonModule } from "../button/button.module";
import { DocumentationModule } from "./../documentation-component/documentation.module";
import {
	ReactiveFormsModule,
	FormGroup,
	FormBuilder,
	FormControl
} from "@angular/forms";
import {
	Component,
	OnInit,
	Input,
	AfterViewInit
} from "@angular/core";

const getOptions = (override = {}) => {
	const options = {
		disabled: boolean("disabled", false),
		invalid: boolean("Invalid", false),
		invalidText: text("Invalid text", "A valid value is required"),
		label: text("Label", "ComboBox label"),
		helperText: text("Helper text", "Optional helper text."),
		items: [
			{
				content: "one"
			},
			{
				content: "two"
			},
			{
				content: "three"
			},
			{
				content: "four"
			}
		],
		selected: action("selection changed"),
		submit: action("submit"),
		size: select("size", ["sm", "md", "xl"], "md")
	};

	return Object.assign({}, options, override);
};

@Component({
	selector: "app-dynamic-list-combobox",
	template: `
		<ibm-combo-box
			[(items)]="items"
			type="multi"
			(selected)="updateSelected($event)">
			<ibm-dropdown-list></ibm-dropdown-list>
		</ibm-combo-box>
	`
})
class DynamicListComboBox implements AfterViewInit {
	items = [
		{
			content: "one"
		},
		{
			content: "two"
		},
		{
			content: "three"
		},
		{
			content: "four"
		}
	];

	updateSelected(event) {
		this.items.forEach((item: any) => {
			if (event.some(selectedItem => selectedItem.content === item.content)) {
				item.selected = true;
			} else {
				item.selected = false;
			}
		});
	}

	ngAfterViewInit() {
		setInterval(() => {
			const newItems = JSON.parse(JSON.stringify(this.items));
			newItems.push({ content: `New ${newItems.length}` });
			this.items = newItems;
		}, 4000);
	}
}

@Component({
	selector: "app-reactive-combobox",
	template: `
		<form [formGroup]="sampleForm" (ngSubmit)="onSubmit(sampleForm)">
			<ibm-combo-box
				formControlName="combobox"
				[size]="size"
				[label]="label"
				[helperText]="helperText"
				[items]="items">
				<ibm-dropdown-list></ibm-dropdown-list>
			</ibm-combo-box>
			selected: {{ sampleForm.get("combobox").value | json }}
			<ibm-combo-box
				style="margin-top: 40px"
				formControlName="multibox"
				[label]="label"
				[size]="size"
				[helperText]="helperText"
				type="multi"
				[items]="items">
				<ibm-dropdown-list></ibm-dropdown-list>
			</ibm-combo-box>
			selected: {{ sampleForm.get("multibox").value | json }}
		</form>
	`
})
class ReactiveFormsCombobox implements OnInit {
	public sampleForm: FormGroup;
	@Input() items = [];
	@Input() label = "";
	@Input() helperText = "";
	@Input() size = "md";

	constructor(private fb: FormBuilder) {}

	ngOnInit() {
		this.sampleForm = this.fb.group({
			combobox: new FormControl,
			multibox: new FormControl
		});

		this.sampleForm.get("combobox").setValue({ content: "four", selected: true });
		this.sampleForm.get("multibox").setValue(
			[
				{ content: "four", selected: true },
				{ content: "two", selected: true }
			]
		);
	}
}

@Component({
	selector: "app-mock-query-search",
	template: `
		<ibm-combo-box
			appendInline="true"
			[items]="filterItems"
			(search)="onSearch($event)">
			<ibm-dropdown-list></ibm-dropdown-list>
		</ibm-combo-box>
	`
})
class MockQueryCombobox {
	filterItems = [];

	onSearch() {
		setTimeout(() => {
			this.filterItems = [
				{ content: `Random ${Math.random()}` },
				{ content: `Random ${Math.random()}` },
				{ content: `Random ${Math.random()}` },
				{ content: `Random ${Math.random()}` }
			];
		}, 1000);
	}
}

storiesOf("Components|Combobox", module)
	.addDecorator(
		moduleMetadata({
			declarations: [
				DynamicListComboBox,
				ReactiveFormsCombobox,
				MockQueryCombobox
			],
			imports: [
				ComboBoxModule,
				ButtonModule,
				ReactiveFormsModule,
				DocumentationModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<ibm-combo-box
				[disabled]="disabled"
				[invalid]="invalid"
				[size]="size"
				[invalidText]="invalidText"
				[label]="label"
				[helperText]="helperText"
				[items]="items"
				(selected)="selected($event)"
				(submit)="submit($event)">
				<ibm-dropdown-list></ibm-dropdown-list>
			</ibm-combo-box>
		`,
		props: getOptions()
	}))
	.add("Dynamically added list items", () => ({
		template: `
			<app-dynamic-list-combobox></app-dynamic-list-combobox>
		`
	}))
	.add("Basic with max length", () => ({
		template: `
			<ibm-combo-box
				[disabled]="disabled"
				[invalid]="invalid"
				[size]="size"
				[invalidText]="invalidText"
				[label]="label"
				[helperText]="helperText"
				[items]="items"
				(selected)="selected($event)"
				(submit)="submit($event)"
				[maxLength]="maxLength">
				<ibm-dropdown-list></ibm-dropdown-list>
			</ibm-combo-box>
		`,
		props: {
			...getOptions(),
			maxLength: number("Max length", 5)
		}
	}))
	.add("With dynamic search", () => ({
		template: `
			<ibm-combo-box
				[disabled]="disabled"
				[invalid]="invalid"
				[size]="size"
				[invalidText]="invalidText"
				[label]="label"
				[helperText]="helperText"
				[items]="items"
				(selected)="onSelected()"
				(search)="onSearch($event)">
				<ibm-dropdown-list></ibm-dropdown-list>
			</ibm-combo-box>
		`,
		props: {
			disabled: boolean("disabled", false),
			invalid: boolean("Invalid", false),
			invalidText: text("Invalid text", "A valid value is required"),
			label: text("Label", "ComboBox label"),
			helperText: text("Helper text", "Optional helper text."),
			items: [
				{
					content: "one"
				},
				{
					content: "two"
				},
				{
					content: "three"
				},
				{
					content: "four"
				}
			],
			onSelected: function() {
				this.invalid = false;
			},
			onSearch: function(event) {
				const selected = this.items.find(
					({ content }) => content.toLowerCase().includes(event.toLowerCase())
				);

				if (!selected) {
					this.invalid = true;
				} else {
					this.invalid = false;
				}
			}
		}
	}))
	.add("With template", () => ({
		template: `
			<ibm-combo-box
				[disabled]="disabled"
				[invalid]="invalid"
				[invalidText]="invalidText"
				[label]="label"
				[size]="size"
				[helperText]="helperText"
				[items]="items"
				(selected)="onSelected()"
				(search)="onSearch($event)">
				<ibm-dropdown-list></ibm-dropdown-list>
			</ibm-combo-box>

			<ng-template #invalidText>
				<div class="bx--form-requirement">This is a template</div>
			</ng-template>
		`,
		props: getOptions({
			onSelected: function() {
				this.invalid = false;
			},
			onSearch: function(event) {
				const selected = this.items.find(
					({ content }) => content.toLowerCase().includes(event.toLowerCase())
				);

				if (!selected) {
					this.invalid = true;
				} else {
					this.invalid = false;
				}
			}
		})
	}))
	.add("Multi-select", () => ({
		template: `
			<ibm-combo-box
				[invalid]="invalid"
				[invalidText]="invalidText"
				[label]="label"
				[size]="size"
				[helperText]="helperText"
				[items]="items"
				type="multi"
				(selected)="selected($event)"
				(submit)="submit($event)">
				<ibm-dropdown-list></ibm-dropdown-list>
			</ibm-combo-box>
		`,
		props: getOptions()
	}))
	.add("With reactive forms", () => ({
		template: `
			<app-reactive-combobox
				[items]="items"
				[size]="size"
				[label]="label"
				[helperText]="helperText">
			</app-reactive-combobox>
		`,
		props: getOptions()
	}))
	.add("With submit", () => ({
		template: `
			<ibm-combo-box
				[invalid]="invalid"
				[invalidText]="invalidText"
				[label]="label"
				[helperText]="helperText"
				[items]="items"
				[size]="size"
				type="multi"
				(selected)="selected($event)"
				(submit)="submit($event)">
				<ibm-dropdown-list></ibm-dropdown-list>
			</ibm-combo-box>
		`,
		props: getOptions({
			submit: function(event) {
				// so the action still shows up in the "actions" panel
				action("submit")(event);
				if (event.value.content) {
					this.items = [
						...event.items,
						Object.assign({}, event.value, { selected: true })
					];
				}
			}
		})
	}))
	.add("With ngModel", () => ({
		template: `
			<ibm-combo-box
				[invalid]="invalid"
				[invalidText]="invalidText"
				[label]="label"
				[size]="size"
				[helperText]="helperText"
				[items]="items"
				[(ngModel)]="model"
				(selected)="selected($event)"
				(submit)="submit($event)">
				<ibm-dropdown-list></ibm-dropdown-list>
			</ibm-combo-box>

			<p>model: {{model | json}}</p>
		`,
		props: getOptions({
			model:  { "content": "three", "selected": true }
		})
	}))
	.add("Mock query search", () => ({
		template: `
			<app-mock-query-search></app-mock-query-search>
		`
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/components/ComboBox.html"></ibm-documentation>
		`
	}));
