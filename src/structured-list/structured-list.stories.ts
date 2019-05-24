import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import { StructuredListModule, DocumentationModule } from "../";

storiesOf("Structured List", module).addDecorator(
	moduleMetadata({
		imports: [StructuredListModule, DocumentationModule]
	}))
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<ibm-structured-list [border]="border" [condensed]="condensed" [nowrap]="nowrap">
				<ibm-list-header>
					<ibm-list-column nowrap="true">Column 1</ibm-list-column>
					<ibm-list-column nowrap="true">Column 2</ibm-list-column>
					<ibm-list-column>Column 3</ibm-list-column>
				</ibm-list-header>
				<ibm-list-row>
					<ibm-list-column>Row 1</ibm-list-column>
					<ibm-list-column nowrap="true">Row One</ibm-list-column>
					<ibm-list-column>
						Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. Nunc dui magna,
						finibus id tortor sed, aliquet bibendum augue.
						Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor.
						Pellentesque vulputate nisl a porttitor interdum.
					</ibm-list-column>
				</ibm-list-row>
				<ibm-list-row>
					<ibm-list-column>Row 2</ibm-list-column>
					<ibm-list-column nowrap="true">Row Two</ibm-list-column>
					<ibm-list-column>
						Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. Nunc dui magna,
						finibus id tortor sed, aliquet bibendum augue.
						Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor.
						Pellentesque vulputate nisl a porttitor interdum.
					</ibm-list-column>
				</ibm-list-row>
			</ibm-structured-list>
		`,
		props: {
			border: boolean("border", false),
			condensed: boolean("condensed", false),
			nowrap: boolean("nowrap", false)
		}
	}))
	.add("With selection", () => ({
		template: `
			<ibm-structured-list
				[border]="border"
				[condensed]="condensed"
				[nowrap]="nowrap"
				selection="true"
				(selected)="selected($event)">
				<ibm-list-header>
					<ibm-list-column nowrap="true">Column 1</ibm-list-column>
					<ibm-list-column nowrap="true">Column 2</ibm-list-column>
					<ibm-list-column>Column 3</ibm-list-column>
				</ibm-list-header>
				<ibm-list-row value="row1">
					<ibm-list-column>Row 1</ibm-list-column>
					<ibm-list-column nowrap="true">Row One</ibm-list-column>
					<ibm-list-column>
						Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. Nunc dui magna,
						finibus id tortor sed, aliquet bibendum augue.
						Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor.
						Pellentesque vulputate nisl a porttitor interdum.
					</ibm-list-column>
				</ibm-list-row>
				<ibm-list-row value="row2">
					<ibm-list-column>Row 2</ibm-list-column>
					<ibm-list-column nowrap="true">Row Two</ibm-list-column>
					<ibm-list-column>
						Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. Nunc dui magna,
						finibus id tortor sed, aliquet bibendum augue.
						Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor.
						Pellentesque vulputate nisl a porttitor interdum.
					</ibm-list-column>
				</ibm-list-row>
			</ibm-structured-list>
		`,
		props: {
			selected: action("row selected"),
			border: boolean("border", true),
			condensed: boolean("condensed", false),
			nowrap: boolean("nowrap", false)
		}
	}))
	.add("With ngModel", () => ({
		template: `
			<ibm-structured-list
				[border]="border"
				[condensed]="condensed"
				[nowrap]="nowrap"
				selection="true"
				[(ngModel)]="valueSelected">
				<ibm-list-header>
					<ibm-list-column nowrap="true">Column 1</ibm-list-column>
					<ibm-list-column nowrap="true">Column 2</ibm-list-column>
					<ibm-list-column>Column 3</ibm-list-column>
				</ibm-list-header>
				<ibm-list-row value="row1">
					<ibm-list-column>Row 1</ibm-list-column>
					<ibm-list-column nowrap="true">Row One</ibm-list-column>
					<ibm-list-column>
						Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. Nunc dui magna,
						finibus id tortor sed, aliquet bibendum augue.
						Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor.
						Pellentesque vulputate nisl a porttitor interdum.
					</ibm-list-column>
				</ibm-list-row>
				<ibm-list-row value="row2">
					<ibm-list-column>Row 2</ibm-list-column>
					<ibm-list-column nowrap="true">Row Two</ibm-list-column>
					<ibm-list-column>
						Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. Nunc dui magna,
						finibus id tortor sed, aliquet bibendum augue.
						Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor.
						Pellentesque vulputate nisl a porttitor interdum.
					</ibm-list-column>
				</ibm-list-row>
			</ibm-structured-list>
			<p>{{valueSelected}}</p>
		`,
		props: {
			border: boolean("border", true),
			condensed: boolean("condensed", false),
			nowrap: boolean("nowrap", false)
		}
	}))
	.add("Skeleton", () => ({
		template: `
		<div style="width: 800px">
			<ibm-structured-list skeleton="true">
				<ibm-list-header>
					<ibm-list-column></ibm-list-column>
					<ibm-list-column></ibm-list-column>
					<ibm-list-column></ibm-list-column>
				</ibm-list-header>
				<ibm-list-row>
					<ibm-list-column></ibm-list-column>
					<ibm-list-column></ibm-list-column>
					<ibm-list-column></ibm-list-column>
				</ibm-list-row>
				<ibm-list-row>
					<ibm-list-column></ibm-list-column>
					<ibm-list-column></ibm-list-column>
					<ibm-list-column></ibm-list-column>
				</ibm-list-row>
			</ibm-structured-list>

			<ibm-structured-list skeleton="true" border="true">
				<ibm-list-header>
					<ibm-list-column></ibm-list-column>
					<ibm-list-column></ibm-list-column>
					<ibm-list-column></ibm-list-column>
				</ibm-list-header>
				<ibm-list-row>
					<ibm-list-column></ibm-list-column>
					<ibm-list-column></ibm-list-column>
					<ibm-list-column></ibm-list-column>
				</ibm-list-row>
				<ibm-list-row>
					<ibm-list-column></ibm-list-column>
					<ibm-list-column></ibm-list-column>
					<ibm-list-column></ibm-list-column>
				</ibm-list-row>
			</ibm-structured-list>
		</div>
		`
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/components/StructuredList.html"></ibm-documentation>
		`
	}));

