import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs } from "@storybook/addon-knobs/angular";

import { TagModule } from "../tag/tag.module";
import { DocumentationModule } from "./../documentation-component/documentation.module";

storiesOf("Tag", module)
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
			<ibm-tag-filter>filter</ibm-tag-filter>
		`
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/components/Tag.html"></ibm-documentation>
		`
	}));
