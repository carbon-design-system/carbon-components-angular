import { Component, OnInit, OnDestroy } from "@angular/core";
import { moduleMetadata, Meta } from "@storybook/angular";
import { ColumnDirective, GridDirective, GridService, RowDirective } from "../../grid";
import { Dropdown, DropdownList } from "../../dropdown";
import { Button } from "../../button";
import { ProgressIndicator } from "../../progress-indicator";
import { Breadcrumb, BreadcrumbItemComponent } from "../../breadcrumb";
import {
	FormBuilder,
	FormControl,
	FormGroup,
	ReactiveFormsModule
} from "@angular/forms";
import { Checkbox } from "../../checkbox";
import { Hamburger, Header } from "../../ui-shell";
import { Label, TextArea, TextInput } from "../../input";

@Component({
	selector: "app-multi-step-form",
	template: `
		<div cdsGrid>
			<div cdsRow class="header">
				<cds-header name="Patterns">
					<cds-hamburger></cds-hamburger>
				</cds-header>
			</div>
			<div cdsRow>
				<div cdsCol [columnNumbers]="{'lg': 8, 'md': 8, 'sm': 8}">
					<cds-breadcrumb [noTrailingSlash]="noTrailingSlash">
						<cds-breadcrumb-item href="#1">
							Dashboard
						</cds-breadcrumb-item>
					</cds-breadcrumb>
				</div>
			</div>
			<div cdsRow class="sub-heading">
				<div cdsCol [columnNumbers]="{'lg': 8, 'md': 8, 'sm': 8}">
					<h4>Vertical multi-step form</h4>
				</div>
			</div>
			<div cdsRow>
				<div
					cdsCol
					[columnNumbers]="{'lg': 2, 'md': 2, 'sm': 2}"
					class="indicator-wrapper">
					<div class="indicator">
						<cds-progress-indicator
							orientation="vertical"
							[steps]="steps"
							[current]="currentStep">
						</cds-progress-indicator>
					</div>
				</div>
				<div cdsCol [columnNumbers]="{'lg': 6, 'md': 6, 'sm': 6}">
					@switch (currentStep) {
						@case (1) {
							<form [formGroup]="step2FormGroup">
								<div cdsGrid>
									<div cdsRow>
										<h4>Create a new workspace</h4>
										<label class="form-label">
											When you create a workspace, you connect IBM Cloud
											Schematics to existing Github / Gitlab repos that host
											your Terraform templates.
										</label>
									</div>
									<div cdsRow class="form-item">
										<cds-label>
											Workspace name
											<input
												cdsText
												[autocomplete]="false"
												formControlName="workspaceName">
										</cds-label>
									</div>
									<div cdsRow class="form-item">
										<cds-dropdown
											class="dropdown"
											label="Resource group"
											value="content"
											formControlName="resourceGroup"
											[dropUp]="false">
											<cds-dropdown-list [items]="resourceGroups"></cds-dropdown-list>
										</cds-dropdown>
									</div>
									<div cdsRow class="form-item">
										<cds-label>
											Description (optional)
											<textarea
												cdsTextArea
												placeholder="What is the purpose of this workspace?"
												formControlName="purpose"
												[rows]="3"
												aria-label="textarea"></textarea>
										</cds-label>
									</div>
									<div cdsRow class="form-item">
										<button cdsButton (click)="changeStep(2)">Step 3</button>
									</div>
								</div>
							</form>
						}
						@case (2) {
							<div cdsGrid>
								<div cdsRow>
									Step 3 form!
								</div>
								<div cdsRow class="form-item">
									<button cdsButton (click)="changeStep(1)">Step 2</button>
								</div>
							</div>
						}
					}
				</div>
			</div>
		</div>
	`,
	styles: [`
		.header {
			margin-bottom: 5rem;
		}

		.indicator-wrapper {
			background-color: #f4f4f4;
		}

		.sub-heading {
			margin-bottom: 1.5rem;
		}

		.indicator {
			margin-top: 1rem;
		}

		.form-label {
			margin-top: 0.7rem;
			margin-bottom: 0.5rem;
		}

		.dropdown {
			width: 100%;
		}

		.form-item {
			margin-top: 1.5rem;
		}
	`],
	imports: [GridDirective, RowDirective, ColumnDirective, Checkbox, ProgressIndicator, Button,
		Breadcrumb, BreadcrumbItemComponent, ReactiveFormsModule, Dropdown, DropdownList, Header,
		Hamburger,  Label, TextArea, TextInput],
	standalone: true
})
class MultiStepFormStory implements OnInit, OnDestroy {
	public step2FormGroup: FormGroup;

	steps = [
		{
			label: "Step 1",
			complete: true
		},
		{
			label: "Step 2",
			current: true,
			complete: false
		},
		{
			label: "Step 3",
			complete: false,
			invalid: true
		},
		{
			label: "Step 4",
			complete: false,
			secondaryLabel: "Optional"
		}
	];

	resourceGroups = [
		{ content: "None" },
		{ content: "Resource group 1" },
		{ content: "Resource group 2" }
	];

	currentStep = 1;

	constructor(protected formBuilder: FormBuilder) { }

	ngOnInit() {
		document.querySelector(".sb-show-main")?.classList.add("full-page");

		this.step2FormGroup = this.formBuilder.group({
			workspaceName: new FormControl(),
			resourceGroup: new FormControl(),
			purpose: new FormControl()
		});

		this.step2FormGroup.get("resourceGroup")?.setValue("None");
	}

	ngOnDestroy() {
		document.querySelector(".sb-show-main")?.classList.remove("full-page");
	}

	changeStep(step: number) {
		this.currentStep = step;
	}
}

// Storybook starts here
export default {
	title: "Pattern/Forms",
	decorators: [
		moduleMetadata({
			declarations: [  ],
			imports: [
				MultiStepFormStory
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
		<app-multi-step-form></app-multi-step-form>
	`
});
export const MultiStep = Template.bind({});
