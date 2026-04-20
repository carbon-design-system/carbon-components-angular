/* tslint:disable variable-name */

import { CommonModule } from "@angular/common";
import { moduleMetadata, Meta } from "@storybook/angular";
import { ButtonModule } from "../button";
import { IconModule } from "../icon";
import { AILabelModule } from "../ai-label";
import { TableModule } from "./";
import {
	TableAiLabelColumnExpansionStory,
	TableAiLabelColumnSortStory,
	TableAiLabelExpansionOnlyStory,
	TableAiLabelFullTableStory,
	TableAiLabelRadioSelectionStory,
	TableAiLabelSelectionExpansionStory,
	TableAiLabelWithSelectionStory
} from "./stories";
import { AI_LABEL_STORY_STYLES } from "../storybook/ai-label-story-shared";

export default {
	title: "Components/Table/WithAILabel",
	component: TableAiLabelWithSelectionStory,
	decorators: [
		moduleMetadata({
			imports: [
				CommonModule,
				TableModule,
				AILabelModule,
				ButtonModule,
				IconModule
			],
			declarations: [
				TableAiLabelWithSelectionStory,
				TableAiLabelRadioSelectionStory,
				TableAiLabelSelectionExpansionStory,
				TableAiLabelExpansionOnlyStory,
				TableAiLabelColumnExpansionStory,
				TableAiLabelColumnSortStory,
				TableAiLabelFullTableStory
			]
		})
	]
} as Meta;

const columnTableStyles = [
	...AI_LABEL_STORY_STYLES,
	`
		#storybook-root .ai-label-column-table .cds--data-table-content,
		.ai-label-column-table .cds--data-table-content {
			overflow: visible;
		}
	`
];

export const AILabelWithSelection = () => ({
	template: `
		<cds-table-container class="ai-label-column-table">
			<cds-table-header>
				<h4 cdsTableHeaderTitle>DataTable</h4>
				<p cdsTableHeaderDescription>With selection</p>
			</cds-table-header>
			<app-table-ai-label-selection></app-table-ai-label-selection>
		</cds-table-container>
	`,
	styles: columnTableStyles
});

export const AILabelWithRadioSelection = () => ({
	template: `
		<cds-table-container class="ai-label-column-table">
			<cds-table-header>
				<h4 cdsTableHeaderTitle>DataTable</h4>
				<p cdsTableHeaderDescription>With radio selection</p>
			</cds-table-header>
			<app-table-ai-label-radio></app-table-ai-label-radio>
		</cds-table-container>
	`,
	styles: columnTableStyles
});

export const AILabelWithSelectionAndExpansion = () => ({
	template: `
		<cds-table-container class="ai-label-column-table">
			<cds-table-header>
				<h4 cdsTableHeaderTitle>DataTable</h4>
				<p cdsTableHeaderDescription>With expansion</p>
			</cds-table-header>
			<app-table-ai-label-selection-expansion></app-table-ai-label-selection-expansion>
		</cds-table-container>
	`,
	styles: columnTableStyles
});

export const AILabelWithExpansion = () => ({
	template: `
		<cds-table-container class="ai-label-column-table">
			<cds-table-header>
				<h4 cdsTableHeaderTitle>DataTable</h4>
				<p cdsTableHeaderDescription>With expansion</p>
			</cds-table-header>
			<app-table-ai-label-expansion-only></app-table-ai-label-expansion-only>
		</cds-table-container>
	`,
	styles: columnTableStyles
});

export const ColumnAILabelWithSelectionAndExpansion = () => ({
	template: `
		<cds-table-container class="ai-label-column-table">
			<cds-table-header>
				<h4 cdsTableHeaderTitle>DataTable</h4>
				<p cdsTableHeaderDescription>With expansion</p>
			</cds-table-header>
			<app-table-ai-label-column-expansion></app-table-ai-label-column-expansion>
		</cds-table-container>
	`,
	styles: columnTableStyles
});

export const ColumnAILabelSort = () => ({
	template: `
		<cds-table-container class="ai-label-column-table">
			<cds-table-header>
				<h4 cdsTableHeaderTitle>DataTable</h4>
				<p cdsTableHeaderDescription>With sorting</p>
			</cds-table-header>
			<app-table-ai-label-column-sort></app-table-ai-label-column-sort>
		</cds-table-container>
	`,
	styles: columnTableStyles
});

export const FullTableAI = () => ({
	template: `<app-table-ai-label-full-table></app-table-ai-label-full-table>`,
	styles: columnTableStyles
});
