import { storiesOf, moduleMetadata } from "@storybook/angular";

import { ListModule } from "../";
import { DocumentationModule } from "./../documentation-component/documentation.module";

storiesOf("List", module).addDecorator(
	moduleMetadata({
		imports: [ListModule, DocumentationModule]
	}))
	.add("Basic", () => ({
		template: `
			<p>Ordered List</p>
			<ol ibmList>
				<li ibmListItem>One</li>
				<li ibmListItem>Two</li>
				<li ibmListItem>Three</li>
			</ol>
			<p>Unordered List</p>
			<ul ibmList>
				<li ibmListItem>One</li>
				<li ibmListItem>Two</li>
				<li ibmListItem>Three</li>
			</ul>
		`
	}))
	.add("With nesting", () => ({
		template: `
			<p>Ordered List</p>
			<ol ibmList>
				<li ibmListItem>
					One
					<ol ibmList>
						<li ibmListItem>Nested one</li>
						<li ibmListItem>Nested two</li>
						<li ibmListItem>Nested three</li>
					</ol>
				</li>
				<li ibmListItem>Two</li>
				<li ibmListItem>Three</li>
			</ol>
			<p>Unordered List</p>
			<ul ibmList>
				<li ibmListItem>
					One
					<ul ibmList>
						<li ibmListItem>Nested one</li>
						<li ibmListItem>Nested two</li>
						<li ibmListItem>Nested three</li>
					</ul>
				</li>
				<li ibmListItem>Two</li>
				<li ibmListItem>Three</li>
			</ul>
		`
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/directives/List.html"></ibm-documentation>
		`
	}));
