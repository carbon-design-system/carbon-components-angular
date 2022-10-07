import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs } from "@storybook/addon-knobs/angular";

import { TagModule } from "../tag/index";
import { DocumentationModule } from "./../documentation-component/documentation.module";

storiesOf("Components|Tag", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				TagModule,
				DocumentationModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<ibm-tag type="warm-gray">Warm-gray</ibm-tag>
			<br><br>
			<ibm-tag type="red">Red</ibm-tag>
			<br><br>
			<ibm-tag type="magenta">Magenta</ibm-tag>
			<br><br>
			<ibm-tag type="purple">Purple</ibm-tag>
			<br><br>
			<ibm-tag type="blue">Blue</ibm-tag>
			<br><br>
			<ibm-tag type="cyan">Cyan</ibm-tag>
			<br><br>
			<ibm-tag type="teal">Teal</ibm-tag>
			<br><br>
			<ibm-tag type="green">Green</ibm-tag>
			<br><br>
			<ibm-tag type="cool-gray">Cool-gray</ibm-tag>
		`
	}))
	.add("Filter", () => ({
		template: `
			<ibm-tag-filter
				type="blue"
				title="Filter"
				closeButtonLabel="Clear"
			>filter</ibm-tag-filter>
			<ibm-tag-filter
				type="blue"
				title="Disabled Filter"
				closeButtonLabel="Clear"
				[disabled]="true"
			>disabled filter</ibm-tag-filter>
		`
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/classes/src_tag.tag.html"></ibm-documentation>
		`
	}));
