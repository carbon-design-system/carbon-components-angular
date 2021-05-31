import {
	Component,
	OnInit,
	OnDestroy
} from "@angular/core";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs } from "@storybook/addon-knobs/angular";
import { GridModule } from "../../grid/index";
import { UIShellModule } from "../../ui-shell/index";
import { DropdownModule } from "../../dropdown/index";
import { ButtonModule } from "../../button/index";
import { InputModule } from "../../input/index";
import { ProgressIndicatorModule } from "../../progress-indicator/index";
import { BreadcrumbModule } from "../../breadcrumb/index";
import {
	FormBuilder,
	FormControl,
	FormGroup,
	ReactiveFormsModule
} from "@angular/forms";

@Component({
	selector: "app-multi-step-form",
	template: `
		<div ibmGrid>
			<div ibmRow class="header">
				<ibm-header name="Patterns">
					<ibm-hamburger></ibm-hamburger>
				</ibm-header>
			</div>
			<div ibmRow>
				<div ibmCol [columnNumbers]="{'lg': 8, 'md': 8, 'sm': 8}">
					<ibm-breadcrumb [noTrailingSlash]="noTrailingSlash">
						<ibm-breadcrumb-item href="#1">
							Dashboard
						</ibm-breadcrumb-item>
					</ibm-breadcrumb>
				</div>
			</div>
			<div ibmRow class="sub-heading">
				<div ibmCol [columnNumbers]="{'lg': 8, 'md': 8, 'sm': 8}">
					<h4>Vertical multi-step form</h4>
				</div>
			</div>
			<div ibmRow>
				<div
					ibmCol
					[columnNumbers]="{'lg': 2, 'md': 2, 'sm': 2}"
					class="indicator-wrapper">
					<div class="indicator">
						<ibm-progress-indicator
							orientation="vertical"
							[steps]="steps"
							[current]="currentStep">
						</ibm-progress-indicator>
					</div>
				</div>
				<div ibmCol [columnNumbers]="{'lg': 6, 'md': 6, 'sm': 6}" [ngSwitch]="currentStep">
					<ng-container *ngSwitchCase="1">
						<form [formGroup]="step2FormGroup">
							<div ibmGrid>
								<div ibmRow>
									<h4>Create a new workspace</h4>
									<label class="form-label">
										When you create a workspace, you connect IBM Cloud
										Schematics to existing Github / Gitlab repos that host
										your Terraform templates.
									</label>
								</div>
								<div ibmRow class="form-item">
									<ibm-label>
										Workspace name
										<input
											ibmText
											[autocomplete]="false"
											formControlName="workspaceName">
									</ibm-label>
								</div>
								<div ibmRow class="form-item">
									<ibm-dropdown
										class="dropdown"
										label="Resource group"
										value="content"
										formControlName="resourceGroup"
										[dropUp]="false">
										<ibm-dropdown-list [items]="resourceGroups"></ibm-dropdown-list>
									</ibm-dropdown>
								</div>
								<div ibmRow class="form-item">
									<ibm-label>
										Description (optional)
										<textarea
											ibmTextArea
											placeholder="What is the purpose of this workspace?"
											formControlName="purpose"
											[rows]="3"
											aria-label="textarea"></textarea>
									</ibm-label>
								</div>
								<div ibmRow class="form-item">
									<button ibmButton (click)="changeStep(2)">Step 3</button>
								</div>
							</div>
						</form>
					</ng-container>
					<ng-container *ngSwitchCase="2">
						<div ibmGrid>
							<div ibmRow>
								Step 3 form!
							</div>
							<div ibmRow class="form-item">
								<button ibmButton (click)="changeStep(1)">Step 2</button>
							</div>
						</div>
					</ng-container>
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
	`]
})
class MultiStepFormStory implements OnInit, OnDestroy {
	public step2FormGroup: FormGroup;

	steps = [
		{
			text: "Step 1",
			state: ["complete"]
		},
		{
			text: "Step 2",
			state: ["current"]
		},
		{
			text: "Step 3",
			state: ["incomplete"]
		},
		{
			text: "Step 4",
			state: ["incomplete"],
			optionalText: "Optional"
		}
	];

	resourceGroups = [
		{ content: "None" },
		{ content: "Resource group 1"},
		{ content: "Resource group 2" }
	];

	currentStep = 1;

	constructor(protected formBuilder: FormBuilder) { }

	ngOnInit() {
		document.querySelector(".sb-show-main").classList.add("full-page");

		this.step2FormGroup = this.formBuilder.group({
			workspaceName: new FormControl(),
			resourceGroup: new FormControl(),
			purpose: new FormControl()
		});

		this.step2FormGroup.get("resourceGroup").setValue("None");
	}

	ngOnDestroy() {
		document.querySelector(".sb-show-main").classList.remove("full-page");
	}

	changeStep(step: number) {
		this.currentStep = step;
	}
}

storiesOf("Patterns|Forms", module)
	.addDecorator(
		moduleMetadata({
			declarations: [ MultiStepFormStory ],
			imports: [
				ButtonModule,
				GridModule,
				UIShellModule,
				ProgressIndicatorModule,
				BreadcrumbModule,
				ReactiveFormsModule,
				InputModule,
				DropdownModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Multi step", () => ({
		template: `
			<!--
				app-* components are for demo purposes only.
				You can create your own implementation by using the component source as an example.
			-->
			<app-multi-step-form></app-multi-step-form>
		`
	}));
