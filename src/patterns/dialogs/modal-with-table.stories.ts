/* tslint:disable variable-name */

import {
	Component,
	OnInit,
	ViewEncapsulation
} from "@angular/core";
import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { BaseModal, ModalModule } from "../../modal";
import {
	TableHeaderItem,
	TableItem,
	TableModel,
	TableModule
} from "../../table/index";
import { ButtonModule } from "../../button";
import { ProgressIndicatorModule } from "../../progress-indicator";
import { LinkModule } from "../../link";

@Component({
	selector: "app-modal-with-table",
	template: `
		<ibm-modal
			size="lg"
			[open]="true"
			(overlaySelected)="closeModal()">
			<ibm-modal-header>
				<h3 ibmModalHeaderHeading>Create workspace</h3>
			</ibm-modal-header>
			<section ibmModalContent [hasForm]="true">
				<div class="progress-wrapper">
					<ibm-progress-indicator
						[steps]="steps"
						[current]="current"
						spacing="equal">
					</ibm-progress-indicator>
				</div>
				<div ibmTableContainer>
					<ibm-table-toolbar size="md">
						<ibm-table-toolbar-content>
							<ibm-table-toolbar-search
								[expandable]="true"
								placeholder="Search node ID"
								(valueChange)="onSearch($event)">
							</ibm-table-toolbar-search>
							<button ibmButton="ghost" class="toolbar-action" size="sm">
								<svg size="16" class="cds--toolbar-action__icon" ibmIcon="Data_2"></svg>
							</button>
						</ibm-table-toolbar-content>
					</ibm-table-toolbar>
					<ibm-table
						[model]="model"
						size="sh"
						[showSelectionColumn]="true"
						[sortable]="false"
						[striped]="false"
						[isDataGrid]="false">
						<ng-content></ng-content>
					</ibm-table>
				</div>
			</section>
			<ibm-modal-footer>
				<a href="#" ibmLink [disabled]="disabled" [inline]="inline">Cancel</a>
				<div class="buttons-wrapper">
					<button class="modal-button" ibmButton="secondary">Previous</button>
					<button class="modal-button" ibmButton="primary">Next</button>
				</div>
			</ibm-modal-footer>
		</ibm-modal>
	`,
	encapsulation: ViewEncapsulation.None,
	styles: [`
		.cds--modal-content {
			/* !important is needed to prevent override from media queries. */
			padding-left: 0 !important;
			padding-right: 0 !important;
		}

		.progress-wrapper {
			margin-top: 2rem;
			margin-bottom: 1rem;
			padding-left: 1rem;
			padding-right: 1rem;
			width: 100%;
		}

		.buttons-wrapper {
			width: 50%;
		}

		.modal-button{
			width: 50%;
		}

		.cds--link {
			position: absolute;
			align-self: center;
			left: 1rem;
		}
	`
	]
})
class ModalWithTableStory extends BaseModal implements OnInit {
	steps = [
		{
			text: "General",
			state: ["complete"]
		},
		{
			text: "Select nodes",
			state: ["current"]
		},
		{
			text: "Select widgets",
			state: ["incomplete"]
		}
	];

	current = 1;

	model = new TableModel();

	dataset = [
		[
			new TableItem({ data: "800" }),
			new TableItem({ data: "East Sadye" }),
			new TableItem({ data: "Store" }),
			new TableItem({ data: "US" })
		],
		[
			new TableItem({ data: "500" }),
			new TableItem({ data: "Lueilwitzview" }),
			new TableItem({ data: "Store" }),
			new TableItem({ data: "US" })
		],
		[
			new TableItem({ data: "120" }),
			new TableItem({ data: "East Arcelyside" }),
			new TableItem({ data: "Store" }),
			new TableItem({ data: "France" })
		],
		[
			new TableItem({ data: "119" }),
			new TableItem({ data: "West Dylan" }),
			new TableItem({ data: "Store" }),
			new TableItem({ data: "Argentina" })
		],
		[
			new TableItem({ data: "54" }),
			new TableItem({ data: "Brandynberg" }),
			new TableItem({ data: "Store" }),
			new TableItem({ data: "Japan" })
		],
		[
			new TableItem({ data: "15" }),
			new TableItem({ data: "Stoltenbergport" }),
			new TableItem({ data: "Store" }),
			new TableItem({ data: "Canada" })
		],
		[
			new TableItem({ data: "12" }),
			new TableItem({ data: "Rheabury" }),
			new TableItem({ data: "Store" }),
			new TableItem({ data: "US" })
		]
	];

	ngOnInit() {
		this.model.header = [
			new TableHeaderItem({
				data: "Node ID"
			}),
			new TableHeaderItem({
				data: "Node name"
			}),
			new TableHeaderItem({
				data: "Node type"
			}),
			new TableHeaderItem({
				data: "Country"
			})
		];

		this.model.data = this.dataset;
	}

	onSearch(searchString: string) {
		this.model.data = this.dataset.filter(row => row[0].data.toLowerCase().includes(searchString));
	}
}

// Storybook starts here
export default {
	title: "Pattern/Dialogs",
	decorators: [
		moduleMetadata({
			declarations: [ModalWithTableStory],
			imports: [
				ModalModule,
				TableModule,
				ButtonModule,
				ProgressIndicatorModule,
				LinkModule
			]
		})
	]
} as Meta;

const Template: Story = (args) => ({
	props: args,
	template: `
		<!--
		app-* components are for demo purposes only.
		You can create your own implementation by using the component source as an example.
		-->
		<app-modal-with-table></app-modal-with-table>
	`
});
export const WithDataTable = Template.bind({});
