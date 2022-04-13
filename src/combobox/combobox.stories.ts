import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs/angular";

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
import isEqual from "lodash-es/isEqual";
import { ModalModule } from "../modal";
import { PlaceholderModule } from "../placeholder";

const getOptions = (override = {}) => {
	const options = {
		disabled: boolean("disabled", false),
		invalid: boolean("Invalid", false),
		invalidText: text("Invalid text", "A valid value is required"),
		warn: boolean("Show the warning state", false),
		warnText: text("Text for the warning", "This is a warning"),
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
		size: select("size", ["sm", "md", "xl"], "md"),
		theme: select("theme", ["dark", "light"], "dark"),
		search: action("search")
	};

	return Object.assign({}, options, override);
};

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
		setTimeout(() => {
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
				itemValueKey="content"
				[theme]="theme"
				[invalid]="invalid"
				[invalidText]="invalidText"
				[warn]="warn"
				[warnText]="warnText"
				[items]="_items">
				<ibm-dropdown-list></ibm-dropdown-list>
			</ibm-combo-box>
			selected: {{ sampleForm.get("combobox").value | json }}
			<ibm-combo-box
				style="margin-top: 40px"
				formControlName="multibox"
				[label]="label"
				[size]="size"
				itemValueKey="content"
				[helperText]="helperText"
				type="multi"
				[invalid]="invalid"
				[invalidText]="invalidText"
				[warn]="warn"
				[warnText]="warnText"
				[items]="_items">
				<ibm-dropdown-list></ibm-dropdown-list>
			</ibm-combo-box>
			selected: {{ sampleForm.get("multibox").value | json }}
		</form>
	`
})
class ReactiveFormsCombobox implements OnInit {
	public sampleForm: FormGroup;
	@Input() invalid = false;
	@Input() invalidText = "";
	@Input() warn = false;
	@Input() warnText = "";
	@Input() label = "";
	@Input() helperText = "";
	@Input() size = "md";
	@Input() theme = "dark";
	@Input() set items(newItems = []) {
		if (!isEqual(this._items, newItems)) {
			this._items = newItems;
		}
	}
	@Input() set disabled(isDisabled: boolean) {
		if (this.sampleForm) {
			if (isDisabled) {
				this.sampleForm.disable();
			} else {
				this.sampleForm.enable();
			}
		}
	}

	_items = [];

	constructor(private fb: FormBuilder) {}

	ngOnInit() {
		this.sampleForm = this.fb.group({
			combobox: new FormControl,
			multibox: new FormControl
		});

		this.sampleForm.get("combobox").setValue("four");
		this.sampleForm.get("multibox").setValue(["four", "two"]);
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

@Component({
	selector: "app-combobox-modal",
	template: `
        <ibm-modal [open]="true" [hasScrollingContent]="false">
            <ibm-modal-header>Header label</ibm-modal-header>
            <section class="cds--modal-content">
                <h1>Sample modal works.</h1>
                <p class="cds--modal-content__text">{{modalText}}</p>
				<div style="width: 300px">
					<ibm-combo-box [items]="items" [appendInline]="true">
						<ibm-dropdown-list></ibm-dropdown-list>
					</ibm-combo-box>
				</div>
				<p class="cds--modal-content__text">{{modalText}}</p>
            </section>
		</ibm-modal>
		<ibm-placeholder></ibm-placeholder>
    `
})
class ComboBoxModal {
	@Input() modalText: string;
	@Input() items: any;
	@Input() appendInline: boolean;
}

storiesOf("Components|Combobox", module)
	.addDecorator(
		moduleMetadata({
			declarations: [
				DynamicListComboBox,
				ReactiveFormsCombobox,
				MockQueryCombobox,
				ComboBoxModal
			],
			imports: [
				ComboBoxModule,
				ButtonModule,
				ReactiveFormsModule,
				DocumentationModule,
				ModalModule,
				PlaceholderModule
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
					[appendInline]="false"
					[invalidText]="invalidText"
					[warn]="warn"
					[warnText]="warnText"
					[label]="label"
					[helperText]="helperText"
					[items]="items"
					[theme]="theme"
					(selected)="selected($event)"
					(submit)="submit($event)"
					(search)="search($event)">
					<ibm-dropdown-list></ibm-dropdown-list>
				</ibm-combo-box>
		`,
		props: getOptions()
	}))
	.add("Dynamically added list items", () => ({
		template: `
			<div style="width: 300px">
				<!--
					app-* components are for demo purposes only.
					You can create your own implementation by using the component source as an example.
				-->
				<app-dynamic-list-combobox></app-dynamic-list-combobox>
			</div>
		`
	}))
	.add("Basic with max length", () => ({
		template: `
			<div style="width: 300px">
				<ibm-combo-box
					[disabled]="disabled"
					[invalid]="invalid"
					[size]="size"
					[invalidText]="invalidText"
					[label]="label"
					[helperText]="helperText"
					[items]="items"
					[theme]="theme"
					(selected)="selected($event)"
					(submit)="submit($event)"
					[maxLength]="maxLength">
					<ibm-dropdown-list></ibm-dropdown-list>
				</ibm-combo-box>
			</div>
		`,
		props: {
			...getOptions(),
			maxLength: number("Max length", 5)
		}
	}))
	.add("With dynamic search", () => ({
		template: `
			<div style="width: 300px">
				<ibm-combo-box
					[disabled]="disabled"
					[invalid]="invalid"
					[size]="size"
					[invalidText]="invalidText"
					[label]="label"
					[helperText]="helperText"
					[items]="items"
					[theme]="theme"
					(selected)="onSelected()"
					(search)="onSearch($event)">
					<ibm-dropdown-list></ibm-dropdown-list>
				</ibm-combo-box>
			</div>
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
	.add("With template", () => ({
		template: `
			<div style="width: 300px">
				<ibm-combo-box
					[disabled]="disabled"
					[invalid]="invalid"
					[invalidText]="invalidText"
					[label]="label"
					[size]="size"
					[helperText]="helperText"
					[items]="items"
					[theme]="theme"
					(selected)="onSelected()"
					(search)="onSearch($event)">
					<ibm-dropdown-list></ibm-dropdown-list>
				</ibm-combo-box>

				<ng-template #invalidText>
					<div class="cds--form-requirement">This is a template</div>
				</ng-template>
			</div>
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
			<div style="width: 300px">
				<ibm-combo-box
					[invalid]="invalid"
					[invalidText]="invalidText"
					[label]="label"
					[warn]="warn"
					[disabled]="disabled"
					[size]="size"
					[helperText]="helperText"
					[appendInline]="false"
					[items]="items"
					[theme]="theme"
					[selectionFeedback]="selectionFeedback"
					type="multi"
					(selected)="selected($event)"
					(submit)="submit($event)">
					<ibm-dropdown-list></ibm-dropdown-list>
				</ibm-combo-box>
			</div>
		`,
		props: {
			...getOptions(),
			selectionFeedback: select("Selection feedback", ["top", "fixed", "top-after-reopen"], "top-after-reopen")
		}
	}))
	.add("With reactive forms", () => ({
		template: `
			<div style="width: 300px">
				<!--
					app-* components are for demo purposes only.
					You can create your own implementation by using the component source as an example.
				-->
				<app-reactive-combobox
					[disabled]="disabled"
					[invalid]="invalid"
					[size]="size"
					[invalidText]="invalidText"
					[warn]="warn"
					[warnText]="warnText"
					[label]="label"
					[helperText]="helperText"
					[items]="items"
					[theme]="theme">
				</app-reactive-combobox>
			</div>
		`,
		props: getOptions()
	}))
	.add("With submit", () => ({
		template: `
			<div style="width: 300px">
				<ibm-combo-box
					[invalid]="invalid"
					[invalidText]="invalidText"
					[label]="label"
					[helperText]="helperText"
					[items]="items"
					[theme]="theme"
					[selectionFeedback]="selectionFeedback"
					[size]="size"
					type="multi"
					(selected)="selected($event)"
					(submit)="submit($event)">
					<ibm-dropdown-list></ibm-dropdown-list>
				</ibm-combo-box>
			</div>
		`,
		props: {
			...getOptions({
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
			}),
			selectionFeedback: select("Selection feedback", ["top", "fixed", "top-after-reopen"], "top-after-reopen")
		}
	}))
	.add("With ngModel", () => ({
		template: `
			<div style="width: 300px">
				<ibm-combo-box
					[invalid]="invalid"
					[invalidText]="invalidText"
					[label]="label"
					[size]="size"
					itemValueKey="content"
					[helperText]="helperText"
					[items]="items"
					[theme]="theme"
					[(ngModel)]="model"
					(selected)="selected($event)"
					(submit)="submit($event)">
					<ibm-dropdown-list></ibm-dropdown-list>
				</ibm-combo-box>

				<p>model: {{model | json}}</p>
			</div>
		`,
		props: getOptions({
			model: "three"
		})
	}))
	.add("Mock query search", () => ({
		template: `
			<!--
				app-* components are for demo purposes only.
				You can create your own implementation by using the component source as an example.
			-->
			<app-mock-query-search></app-mock-query-search>
		`
	}))
	.add("In modal", () => ({
		template: `
			<!--
				app-* components are for demo purposes only.
				You can create your own implementation by using the component source as an example.
			-->
			<app-combobox-modal
				[modalText]="modalText"
				[items]="items"
				[appendInline]="true">
			</app-combobox-modal>
		`,
		props: getOptions({
			modalText: text("modal text", modalText)
		})
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/classes/src_combobox.combobox.html"></ibm-documentation>
		`
	}));
