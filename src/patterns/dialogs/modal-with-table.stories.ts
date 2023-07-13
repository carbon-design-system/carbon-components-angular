/* tslint:disable variable-name */

import {
	Component,
	OnInit,
	ViewEncapsulation
} from "@angular/core";
import { moduleMetadata, Meta, Story  } from "@storybook/angular";
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
		<cds-modal
			size="lg"
			[open]="true"
			(overlaySelected)="closeModal()">
			<cds-modal-header>
				<h3 cdsModalHeaderHeading>Create workspace</h3>
			</cds-modal-header>
			<section cdsModalContent [hasForm]="true">
				<div class="progress-wrapper">
					<cds-progress-indicator
						[steps]="steps"
						[current]="current"
						spacing="equal">
					</cds-progress-indicator>
				</div>
				<cds-table-container>
					<cds-table-toolbar size="md">
						<cds-table-toolbar-content>
							<cds-table-toolbar-search
								[expandable]="true"
								placeholder="Search node ID"
								(valueChange)="onSearch($event)">
							</cds-table-toolbar-search>
							<button cdsButton="ghost" class="toolbar-action" size="sm">
								<svg size="16" class="cds--toolbar-action__icon" cdsIcon="Data_2"></svg>
							</button>
						</cds-table-toolbar-content>
					</cds-table-toolbar>
					<cds-table
						[model]="model"
						size="sh"
						[showSelectionColumn]="true"
						[sortable]="false"
						[striped]="false"
						[isDataGrid]="false">
						<ng-content></ng-content>
					</cds-table>
				</cds-table-container>
			</section>
			<cds-modal-footer>
				<a href="#" cdsLink [disabled]="disabled" [inline]="inline">Cancel</a>
				<div class="buttons-wrapper">
					<button class="modal-button" cdsButton="secondary">Previous</button>
					<button class="modal-button" cdsButton="primary">Next</button>
				</div>
			</cds-modal-footer>
		</cds-modal>
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
