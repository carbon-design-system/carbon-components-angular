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

import { of } from "rxjs";
import { PlaceholderModule } from "../placeholder/index";
import { DocumentationModule } from "./../documentation-component/documentation.module";
import { DropdownModule } from "./dropdown.module";
import { ModalModule } from "../modal";

const modalText =
	`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non egestas neque.
	Etiam aliquet nisl non volutpat vehicula.
	Aliquam finibus sapien et erat suscipit euismod.
	Sed dapibus condimentum nisl, eu condimentum felis tempor sit amet. Pellentesque tempus velit vel nisi scelerisque facilisis.
	Ut dapibus nibh ac suscipit venenatis.
	Aliquam ex purus, consequat eu volutpat vel, scelerisque vel leo. Nunc congue tellus lectus, pretium lobortis erat mattis congue.
	Ut dapibus nibh ac suscipit venenatis.
	Aliquam ex purus, consequat eu volutpat vel, scelerisque vel leo. Nunc congue tellus lectus, pretium lobortis erat mattis congue.
	Integer facilisis, erat nec iaculis gravida, est libero ornare mauris, venenatis mollis risus eros et metus.
	Sed ornare massa tristique arcu pulvinar fermentum.
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non egestas neque.
	Etiam aliquet nisl non volutpat vehicula.
	Aliquam finibus sapien et erat suscipit euismod.
	Sed dapibus condimentum nisl, eu condimentum felis tempor sit amet. Pellentesque tempus velit vel nisi scelerisque facilisis.
	Ut dapibus nibh ac suscipit venenatis.
	Aliquam ex purus, consequat eu volutpat vel, scelerisque vel leo. Nunc congue tellus lectus, pretium lobortis erat mattis congue.
	Ut dapibus nibh ac suscipit venenatis.
	Aliquam ex purus, consequat eu volutpat vel, scelerisque vel leo. Nunc congue tellus lectus, pretium lobortis erat mattis congue.
	Integer facilisis, erat nec iaculis gravida, est libero ornare mauris, venenatis mollis risus eros et metus.
	Sed ornare massa tristique arcu pulvinar fermentum.`;

const getProps = (overrides = {}) => Object.assign({}, {
	invalid: boolean("Invalid", false),
	size: select("Size", ["sm", "md", "xl"], "md"),
	invalidText: "This is not a validation text",
	warn: boolean("Show the warning state", false),
	warnText: text("Text for the warning", "This is a warning"),
	disabled: boolean("disabled", false),
	label: text("Label", "Dropdown label"),
	helperText: text("Helper text", "Optional helper text."),
	items: object("items", [
		{ content: "one" },
		{ content: "two", selected: true },
		{ content: "three", disabled: true },
		{ content: "four", disabled: false },
		{ content: "five", disabled: false },
		{ content: "six", disabled: false },
		{ content: "seven", disabled: false },
		{ content: "eight", disabled: false },
		{ content: "nine", disabled: false },
		{ content: "ten", disabled: false }
	]),
	selected: action("Selected fired for dropdown"),
	onClose: action("Dropdown closed"),
	theme: select("theme", ["dark", "light"], "dark"),
	dropUp: boolean("Drop up", false)
}, overrides);

@Component({
	selector: "app-reactive-forms",
	template: `
		<form [formGroup]="formGroup">
			<div style="width: 300px">
				<ibm-dropdown
					[label]="label"
					[helperText]="helperText"
					[invalid]="invalid"
					[invalidText]="invalidText"
					[theme]="theme"
					[selectionFeedback]="selectionFeedback"
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
	@Input() selectionFeedback = "top-after-reopen";
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

	constructor(protected formBuilder: FormBuilder) { }

	ngOnInit() {
		this.formGroup = this.formBuilder.group({
			roles: new FormControl()
		});
		this.selectRoles();
	}

	private selectRoles() {
		this.formGroup.get("roles").setValue(1);
	}
}

@Component({
	selector: "app-dropdown-modal",
	template: `
        <ibm-modal [open]="true">
            <ibm-modal-header>Header label</ibm-modal-header>
            <section class="bx--modal-content">
                <h1>Sample modal works.</h1>
                <p class="bx--modal-content__text">{{modalText}}</p>
                <div style="width: 300px">
					<ibm-dropdown placeholder="Select" [appendInline]="true">
						<ibm-dropdown-list [items]="items"></ibm-dropdown-list>
					</ibm-dropdown>
				</div>
                <p class="bx--modal-content__text">{{modalText}}</p>
            </section>
        </ibm-modal>
    `
})
class DropdownModal {
	@Input() modalText: string;
	@Input() items: any[];
	@Input() appendInline: boolean;
}

storiesOf("Components|Dropdown", module)
	.addDecorator(
		moduleMetadata({
			declarations: [ReactiveFormsStory, DropdownModal],
			imports: [
				DropdownModule,
				ModalModule,
				PlaceholderModule,
				DocumentationModule,
				ReactiveFormsModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
		<a href="https://builder.carbondesignsystem.com/from-json/%7B%22title%22%3A%22&#13;
		DropdownFragment%22%2C%22data%22%3A%7B%22items%22%3A%5B%7B%22type%22%3A%22dropdown&#13;
		%22%2C%22placeholder%22%3A%22placeholder%22%2C%22isMulti%22%3Afalse%2C%22isInline&#13;
		%22%3Afalse%2C%22selectionFeedback%22%3A%22top-after-reopen%22%2C%22direction%22&#13;
		%3A%22bottom%22%2C%22size%22%3A%22md%22%2C%22label%22%3A%22Label%22%2C%22helperText&#13;
		%22%3A%22Optional%20helper%20text%22%2C%22listItems%22%3A%5B%7B%22text%22%3A%22Text&#13;
		%22%7D%5D%2C%22id%22%3A%222%22%2C%22codeContext%22%3A%7B%22name%22%3A%22dropdown-2&#13;
		%22%7D%7D%5D%2C%22id%22%3A1%7D%2C%22allCssClasses%22%3A%5B%5D%7D" target="_blank">
			Edit on Carbon UI Builder
		</a>
		<br><br>
		<div style="width: 300px">
			<ibm-dropdown
				[label]="label"
				[helperText]="helperText"
				[size]="size"
				[dropUp]="dropUp"
				[invalid]="invalid"
				[invalidText]="invalidText"
				[warn]="warn"
				[warnText]="warnText"
				[theme]="theme"
				placeholder="Select"
				[disabled]="disabled"
				(selected)="selected($event)"
				(onClose)="onClose($event)">
				<ibm-dropdown-list [items]="items"></ibm-dropdown-list>
			</ibm-dropdown>
		</div>
	`,
		props: getProps()
	}))
	.add("Multi-select", () => ({
		template: `
		<div style="width: 300px">
			<ibm-dropdown
				[label]="label"
				[helperText]="helperText"
				[size]="size"
				[dropUp]="dropUp"
				[invalid]="invalid"
				[invalidText]="invalidText"
				[selectionFeedback]="selectionFeedback"
				type="multi"
				placeholder="Multi-select"
				[disabled]="disabled"
				(selected)="selected($event)"
				(onClose)="onClose($event)">
				<ibm-dropdown-list [items]="items"></ibm-dropdown-list>
			</ibm-dropdown>
		</div>
	`,
		props: {
			...getProps(),
			selectionFeedback: select("Selection feedback", ["top", "fixed", "top-after-reopen"], "top-after-reopen")
		}
	}))
	.add("Multi-select with ngModel", () => ({
		template: `
		<div style="width: 300px">
			<ibm-dropdown
				type="multi"
				[label]="label"
				[helperText]="helperText"
				[size]="size"
				[dropUp]="dropUp"
				[invalid]="invalid"
				[invalidText]="invalidText"
				[selectionFeedback]="selectionFeedback"
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
			model: [2],
			selectionFeedback: select("Selection feedback", ["top", "fixed", "top-after-reopen"], "top-after-reopen")
		})
	}))
	.add("With ngModel", () => ({
		template: `
		<div style="width: 300px">
			<ibm-dropdown
				[label]="label"
				[helperText]="helperText"
				[size]="size"
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
			model: "two"
		})
	}))
	.add("In modal", () => ({
		template: `
			<!--
				app-* components are for demo purposes only.
				You can create your own implementation by using the component source as an example.
			-->
			<app-dropdown-modal
				[items]="items"
				[modalText]="modalText"
				[appendInline]="true">
			</app-dropdown-modal>
		`,
		props: getProps({
			modalText: text("modal text", modalText)
		})
	}))
	.add("With reactive forms", () => ({
		template: `
			<!--
				app-* components are for demo purposes only.
				You can create your own implementation by using the component source as an example.
			-->
			<app-reactive-forms
				[label]="label"
				[helperText]="helperText"
				[invalid]="invalid"
				[invalidText]="invalidText"
				[disabled]="disabled"
				[items]="items"
				[selectionFeedback]="selectionFeedback"
				(selected)="selected($event)"
				(onClose)="onClose($event)">
			</app-reactive-forms>
		`,
		props: getProps({
			items: object("items", [
				{
					content: "numerical value item 1",
					oid: 1,
					selected: false
				},
				{
					content: "string value item 2",
					oid: 2,
					selected: false
				}
			]),
			selectionFeedback: select("Selection feedback", ["top", "fixed", "top-after-reopen"], "top-after-reopen"),
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
				[size]="size"
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
			items: of({...getProps()}.items)
		})
	}))
	.add("With Template", () => ({
		template: `
		<div style="width: 300px;">
			<ibm-dropdown
				[theme]="theme"
				placeholder="Select"
				[displayValue]="dropdownRenderer"
				[size]="size"
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
			<ibm-documentation src="documentation/classes/src_dropdown.dropdown.html"></ibm-documentation>
		`
	}));
