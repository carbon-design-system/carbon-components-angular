import { Component } from "@angular/core";
import { moduleMetadata, Meta } from "@storybook/angular";
import { ColumnDirective, GridDirective, GridService, RowDirective } from "../../grid";
import { ProgressIndicator} from "../../progress-indicator";
import { Placeholder } from "../../placeholder";
import { Dropdown, DropdownList } from "../../dropdown";
import { Loading } from "../../loading";
import { Button } from "../../button";
import {
	FormGroup,
	FormControl,
	Validators,
	FormsModule,
	ReactiveFormsModule
} from "@angular/forms";
import { Checkbox } from "../../checkbox";
import { Label, TextArea, TextInput } from "../../input";
import { Hamburger, Header } from "../../ui-shell";

@Component({
	selector: "app-sample-large-loading",
	template: `
	<div cdsGrid>
		<div cdsRow class="header">
			<cds-header name="Patterns">
				<cds-hamburger></cds-hamburger>
			</cds-header>
		</div>
		<div cdsRow class="progress-indicator-wrapper">
			<cds-progress-indicator [steps]="steps"></cds-progress-indicator>
		</div>
		<div cdsRow class="form">
			<form [formGroup]="formGroup" (ngSubmit)="onSubmit()">
				<div class="cds--form-item">
					<cds-label
						helperText="Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)"
						[invalid]="isInvalid('input')"
						invalidText="Please enter a response">
						Text input label
						<input
							cdsText
							formControlName="input"
							placeholder="Optional placeholder text">
					</cds-label>
				</div>
				<div class="cds--form-item">
					<cds-label
						helperText="Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)"
						[invalid]="isInvalid('textArea')"
						invalidText="Please enter a response">
						Text input label
						<textarea
							cdsTextArea
							formControlName="textArea"
							placeholder="Optional placeholder text">
						</textarea>
					</cds-label>
				</div>
				<div class="cds--form-item">
					<div class="dropdown-wrapper">
						<cds-dropdown
							label="Choose one option"
							[invalid]="isInvalid('dropdown')"
							invalidText="Please choose an option"
							placeholder="Select an option"
							formControlName="dropdown">
							<cds-dropdown-list [items]="items"></cds-dropdown-list>
						</cds-dropdown>
					</div>
				</div>
				<div class="cds--form-item">
					<button
						class="form-button"
						cdsButton
						type="submit">
						Show Loading
					</button>
				</div>
			</form>
		</div>
	</div>
	@if (isLoading) {
		<cds-loading
			[isActive]="isLoading"
			size="normal"
			[overlay]="overlay">
		</cds-loading>
	}
	`,
	styles: [`
		.header {
			margin-bottom: 80px;
		}

		.progress-indicator-wrapper {
			margin-bottom: 50px;
		}

		.dropdown-wrapper {
			width: 50%;
		}
	`
	],
	standalone: true,
	imports: [
		GridDirective,
		RowDirective,
		ColumnDirective,
		Checkbox,
		Dropdown,
		DropdownList,
		Placeholder,
		Loading,
		ProgressIndicator,
		Loading,
		FormsModule,
		ReactiveFormsModule,
		Button,
		TextInput,
		TextArea,
		Label,
		Header,
		Hamburger
	]
})
class SampleLargeLoading {
	isLoading = false;
	overlay = false;

	formGroup = new FormGroup({
		input: new FormControl("", [Validators.required]),
		textArea: new FormControl("", [Validators.required]),
		dropdown: new FormControl("", [Validators.required])
	});

	steps = [
		{
			text: "First step",
			state: ["complete"]
		},
		{
			text: "Second step",
			state: ["complete"],
			tooltip: { content: "Overflow tooltip content.", trigger: "click", placement: "bottom" }
		},
		{
			text: "Third step",
			state: ["current"],
			tooltip: {
				content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Animi consequuntur hic ratione aliquid cupiditate, nesciunt saepe iste
					blanditiis cumque maxime tenetur veniam est illo deserunt sint quae pariatur.
					Laboriosam, consequatur.`,
				trigger: "click",
				placement: "bottom"
			}
		},
		{
			text: "Fourth step",
			state: ["incomplete"]
		},
		{
			text: "Fifth step",
			state: ["incomplete"]
		}
	];

	items = [
		{ content: "Option 1" },
		{ content: "Option 2" },
		{ content: "Option 3" },
		{ content: "Option 4" },
		{ content: "Option 5" }
	];

	onSubmit() {
		this.isLoading = true;
		this.overlay = true;

		setTimeout(() => {
			this.isLoading = false;
			this.overlay = false;
		}, 2000);

		if (this.formGroup.invalid) {
			const invalidFields = [].slice.call(document.getElementsByClassName("ng-invalid"));
			invalidFields[1].focus();
		}
		return;
	}

	isInvalid(controlName: string): boolean {
		const control = this.formGroup.get(controlName);

		return (control && control.invalid && (control.dirty || control.touched)) as boolean;
	}
}

// Storybook starts here
export default {
	title: "Pattern/Loading",
	decorators: [
		moduleMetadata({
			declarations: [],
			imports: [
				SampleLargeLoading
			]
		})
	]
} as Meta;

const Template = (args) => ({
	props: args,
	template: `
		<!--
			app-* components are for demo purposes only.
			You can create your own implementation by using the component source as an example.
		-->
		<app-sample-large-loading></app-sample-large-loading>
	`
});
export const LargeLoading = Template.bind({});
