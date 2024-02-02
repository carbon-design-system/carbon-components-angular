import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { Node } from "../tree-node.types";

@Component({
	selector: "app-treeview-icon-component",
	template: `
		<cds-tree-view
			label="Tree view"
			style="width: 18rem; display: block;"
			[tree]="tree">
		</cds-tree-view>

		<ng-template #document>
			<svg cdsIcon="document" class="cds--tree-node__icon" size="16"></svg>
		</ng-template>
	`
})
export class IconTreeviewDemoComponent implements AfterViewInit {
	tree: Node[] = [];

	@ViewChild("document") documentIcon: TemplateRef<any>;


	ngAfterViewInit() {
		// Wait for the view child to be picked up
		this.tree = [
			{
				id: "1",
				value: "Artificial intelligence",
				label: "Artificial intelligence",
				icon: this.documentIcon
			},
			{
				id: "2",
				value: "Blockchain",
				label: "Blockchain",
				icon: this.documentIcon
			},
			{
				id: "3",
				value: "Business automation",
				label: "Business automation",
				children: [
					{
						id: "3-1",
						value: "Business process automation",
						label: "Business process automation",
						icon: this.documentIcon
					},
					{
						id: "3-2",
						value: "Business process mapping",
						label: "Business process mapping",
						icon: this.documentIcon
					}
				],
				icon: "folder"
			},
			{
				id: "4",
				value: "Business operations",
				label: "Business operations",
				icon: this.documentIcon
			},
			{
				id: "5",
				value: "Cloud computing",
				label: "Cloud computing",
				"expanded": true,
				children: [
					{
						id: "5-1",
						value: "Containers",
						label: "Containers",
						icon: this.documentIcon
					},
					{
						id: "5-2",
						value: "Databases",
						label: "Databases",
						icon: this.documentIcon
					},
					{
						id: "5-3",
						value: "DevOps",
						label: "DevOps",
						"expanded": true,
						children: [
							{
								id: "5-4",
								value: "Solutions",
								label: "Solutions",
								icon: this.documentIcon
							},
							{
								id: "5-5",
								value: "Case studies",
								label: "Case studies",
								"expanded": true,
								children: [
									{
										id: "5-6",
										value: "Resources",
										label: "Resources",
										icon: this.documentIcon
									}
								],
								icon: "folder"
							}
						],
						icon: "folder"
					}
				],
				icon: "folder"
			},
			{
				id: "6",
				value: "Data & Analytics",
				label: "Data & Analytics",
				children: [
					{
						id: "6-1",
						value: "Big data",
						label: "Big data",
						icon: this.documentIcon
					},
					{
						id: "6-2",
						value: "Business intelligence",
						label: "Business intelligence",
						icon: this.documentIcon
					}
				],
				icon: "folder"
			},
			{
				id: "7",
				value: "IT infrastructure",
				label: "IT infrastructure",
				"expanded": true,
				"disabled": true,
				children: [
					{
						id: "7-1",
						value: "Data storage",
						label: "Data storage",
						icon: this.documentIcon
					},
					{
						id: "7-2",
						value: "Enterprise servers",
						label: "Enterprise servers",
						icon: this.documentIcon
					},
					{
						id: "8",
						value: "Hybrid cloud infrastructure",
						label: "Hybrid cloud infrastructure",
						"expanded": true,
						children: [
							{
								id: "8-1",
								value: "Insights",
								label: "Insights",
								icon: this.documentIcon
							},
							{
								id: "8-2",
								value: "Benefits",
								label: "Benefits",
								icon: this.documentIcon
							}
						],
						icon: "folder"
					}
				],
				icon: "folder"
			}
		];
	}
}
