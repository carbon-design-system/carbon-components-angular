import {
	Component,
	OnInit,
	Input,
	Output,
	EventEmitter
} from "@angular/core";
import {
	ReactiveFormsModule,
	FormBuilder,
	FormGroup,
	FormControl
} from "@angular/forms";

import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import {
	withKnobs,
	select,
	boolean,
	object,
	text
} from "@storybook/addon-knobs/angular";

import { DropdownModule, DocumentationModule } from "../";
import { of } from "rxjs";
import { PlaceholderModule } from "../placeholder/placeholder.module";

const getProps = (overrides = {}) => Object.assign({}, {
	invalid: boolean("Invalid", false),
	invalidText: "This is not a validation text",
	disabled: boolean("disabled", false),
	label: text("Label", "Dropdown label"),
	helperText: text("Helper text", "Optional helper text."),
	items: object("items", [
		{ content: "one" },
		{ content: "two" },
		{ content: "three" },
		{ content: "four" }
	]),
	selected: action("Selected fired for dropdown"),
	onClose: action("Dropdown closed"),
	theme: select("theme", ["dark", "light"], "dark")
}, overrides);

@Component({
	selector: "app-reactive-forms",
	template: `
		<form [formGroup]="formGroup">
			<div style="text-align:center">
				<ibm-dropdown
					[label]="label"
					[helperText]="helperText"
					[invalid]="invalid"
					[invalidText]="invalidText"
					[theme]="theme"
					type="multi"
					placeholder="Multi-select"
					value="oid"
					(selected)="selected.emit($event)"
					(onClose)="onClose.emit($event)"
					formControlName="roles">
					<ibm-dropdown-list [items]="items"></ibm-dropdown-list>
				</ibm-dropdown>
			</div>
		</form>

		<br>

		<code>{{ formGroup.get("roles").value | json }}</code>
	`
})
class ReactiveFormsStory implements OnInit {
	public formGroup: FormGroup;

	@Input() items = [];
	@Input() label = "";
	@Input() helperText = "";
	@Input() invalid = false;
	@Input() invalidText = "";
	@Input() set disabled(value) {
		if (!this.formGroup) { return; }
		if (value) {
			this.formGroup.get("roles").disable();
		} else {
			this.formGroup.get("roles").enable();
		}
	}
	@Output() selected = new EventEmitter();
	@Output() onClose = new EventEmitter();

	constructor(protected formBuilder: FormBuilder) {}

	ngOnInit() {
		this.formGroup = this.formBuilder.group({
			roles: new FormControl()
		});
		this.selectRoles();
	}

	private selectRoles() {
		this.formGroup.get("roles").setValue([1, 2]);
	}
}

storiesOf("Dropdown", module)
	.addDecorator(
		moduleMetadata({
			declarations: [ ReactiveFormsStory ],
			imports: [
				DropdownModule,
				PlaceholderModule,
				DocumentationModule,
				ReactiveFormsModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
		<div style="width: 300px">
			<ibm-dropdown
				[label]="label"
				[helperText]="helperText"
				[invalid]="invalid"
				[invalidText]="invalidText"
				[theme]="theme"
				placeholder="Select"
				[disabled]="disabled"
				(selected)="selected($event)"
				(onClose)="onClose($event)">
				<ibm-dropdown-list [items]="items"></ibm-dropdown-list>
			</ibm-dropdown>
		</div>
		<ibm-placeholder></ibm-placeholder>
	`,
		props: getProps({
			invalid: boolean("Invalid", false),
			invalidText: "This is not a validation text"
		})
	}))
	.add("Multi-select", () => ({
		template: `
		<div style="width: 300px">
			<ibm-dropdown
				[label]="label"
				[helperText]="helperText"
				[invalid]="invalid"
				[invalidText]="invalidText"
				type="multi"
				placeholder="Multi-select"
				[disabled]="disabled"
				(selected)="selected($event)"
				(onClose)="onClose($event)">
				<ibm-dropdown-list [items]="items"></ibm-dropdown-list>
			</ibm-dropdown>
		</div>
	`,
		props: getProps()
	}))
	.add("Multi-select with ngModel", () => ({
		template: `
		<div style="width: 300px">
			<ibm-dropdown
				type="multi"
				[label]="label"
				[helperText]="helperText"
				[invalid]="invalid"
				[invalidText]="invalidText"
				placeholder="Select"
				[disabled]="disabled"
				[(ngModel)]="model"
				value="id">
				<ibm-dropdown-list [items]="items"></ibm-dropdown-list>
			</ibm-dropdown>
			<span>{{model | json}}</span>
		</div>
		`,
		props: getProps({
			items: object("items", [
				{ content: "one", id: 0 },
				{ content: "two", id: 1 },
				{ content: "three", id: 2 },
				{ content: "four", id: 3 }
			]),
			model: null
		})
	}))
	.add("With ngModel", () => ({
		template: `
		<div style="width: 300px">
			<ibm-dropdown
				[label]="label"
				[helperText]="helperText"
				[invalid]="invalid"
				[invalidText]="invalidText"
				placeholder="Select"
				[disabled]="disabled"
				[(ngModel)]="model"
				value="content">
				<ibm-dropdown-list [items]="items"></ibm-dropdown-list>
			</ibm-dropdown>
			<span>{{model | json}}</span>
		</div>
		`,
		props: getProps({
			model: null
		})
	}))
	.add("Width reactive forms", () => ({
		template: `
			<app-reactive-forms
				[label]="label"
				[helperText]="helperText"
				[invalid]="invalid"
				[invalidText]="invalidText"
				[disabled]="disabled"
				[items]="items"
				(selected)="selected($event)"
				(onClose)="onClose($event)">
			</app-reactive-forms>
		`,
		props: getProps({
			items: [
				{ content: "role 1", oid: 1, selected: false },
				{ content: "role 2", oid: 2, selected: false },
				{ content: "role 3", oid: 3, selected: false }
			],
			selected: action("Selected fired for multi-select dropdown"),
			onClose: action("Multi-select dropdown closed")
		})
	}))
	.add("With Observable items", () => ({
		template: `
		<div style="width: 300px">
			<ibm-dropdown
				[label]="label"
				[helperText]="helperText"
				[invalid]="invalid"
				[invalidText]="invalidText"
				[theme]="theme"
				placeholder="Select"
				[disabled]="disabled"
				(selected)="selected($event)"
				(onClose)="onClose($event)">
				<ibm-dropdown-list [items]="items"></ibm-dropdown-list>
			</ibm-dropdown>
		</div>
	`,
		props: getProps({
			items: of([
				{ content: "one" },
				{ content: "two" },
				{ content: "three" },
				{ content: "four" }
			])
		})
	}))
	.add("With Template", () => ({
		template: `
		<div style="width: 300px;">
			<ibm-dropdown
				[theme]="theme"
				placeholder="Select"
				[displayValue]="dropdownRenderer"
				[invalid]="invalid"
				[invalidText]="invalidText"
				[disabled]="disabled"
				(selected)="selected($event)"
				(onClose)="onClose($event)">
				<ibm-dropdown-list [items]="items" [listTpl]="dropdownRenderer"></ibm-dropdown-list>
			</ibm-dropdown>
			<ng-template #dropdownRenderer let-item="item">
				<div *ngIf="item && item.content" style="font-size: 14px;">
					<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg"
							width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" style="will-change: transform;">
						<path d="M9.3 3.7l3.8 3.8H1v1h12.1l-3.8 3.8.7.7 5-5-5-5z"></path>
					</svg>
					&nbsp;{{item.content}}
				</div>
			</ng-template>
		</div>
	`,
		props: getProps()

	}))
	.add("Skeleton", () => ({
		template: `
		<div style="width: 300px">
			<ibm-dropdown skeleton="true">
				<ibm-dropdown-list [items]="items"></ibm-dropdown-list>
			</ibm-dropdown>
			&nbsp;
			<ibm-dropdown skeleton="true" inline="true">
				<ibm-dropdown-list [items]="items"></ibm-dropdown-list>
			</ibm-dropdown>
		</div>
		`,
		props: getProps()
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/components/Dropdown.html"></ibm-documentation>
		`
	}));
