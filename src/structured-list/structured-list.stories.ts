import { storiesOf, moduleMetadata } from "@storybook/angular";

import { StructuredListModule } from "../";

storiesOf("Structured List", module).addDecorator(
	moduleMetadata({
		imports: [StructuredListModule]
	}))
	.add("Basic", () => ({
		template: `
			<ibm-structured-list>
				<ibm-list-header>
					<ibm-list-column>Column 1</ibm-list-column>
					<ibm-list-column>Column 2</ibm-list-column>
					<ibm-list-column>Column 3</ibm-list-column>
				</ibm-list-header>
				<ibm-list-row>
					<ibm-list-column>Row 1</ibm-list-column>
					<ibm-list-column whiteSpace="nowrap">Row One</ibm-list-column>
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
					<ibm-list-column whiteSpace="nowrap">Row Two</ibm-list-column>
					<ibm-list-column>
						Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. Nunc dui magna,
						finibus id tortor sed, aliquet bibendum augue.
						Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor.
						Pellentesque vulputate nisl a porttitor interdum.
					</ibm-list-column>
				</ibm-list-row>
			</ibm-structured-list>
		`
	}))
	.add("With selection", () => ({
		template: `
			<ibm-structured-list selection="true">
				<ibm-list-header>
					<ibm-list-column>Column 1</ibm-list-column>
					<ibm-list-column>Column 2</ibm-list-column>
					<ibm-list-column>Column 3</ibm-list-column>
				</ibm-list-header>
				<ibm-list-row>
					<ibm-list-column>Row 1</ibm-list-column>
					<ibm-list-column whiteSpace="nowrap">Row One</ibm-list-column>
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
					<ibm-list-column whiteSpace="nowrap">Row Two</ibm-list-column>
					<ibm-list-column>
						Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. Nunc dui magna,
						finibus id tortor sed, aliquet bibendum augue.
						Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor.
						Pellentesque vulputate nisl a porttitor interdum.
					</ibm-list-column>
				</ibm-list-row>
			</ibm-structured-list>
		`
	}));

