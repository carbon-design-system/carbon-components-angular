import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, select } from "@storybook/addon-knobs/angular";

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
			<ibm-tag type="warm-gray" [size]="size">Warm-gray</ibm-tag>
			<br><br>
			<ibm-tag type="red" [size]="size">Red</ibm-tag>
			<br><br>
			<ibm-tag type="magenta" [size]="size">Magenta</ibm-tag>
			<br><br>
			<ibm-tag type="purple" [size]="size">Purple</ibm-tag>
			<br><br>
			<ibm-tag type="blue" [size]="size">Blue</ibm-tag>
			<br><br>
			<ibm-tag type="cyan" [size]="size">Cyan</ibm-tag>
			<br><br>
			<ibm-tag type="teal" [size]="size">Teal</ibm-tag>
			<br><br>
			<ibm-tag type="green" [size]="size">Green</ibm-tag>
			<br><br>
			<ibm-tag type="cool-gray" [size]="size">Cool-gray</ibm-tag>
			<br><br>
			<ibm-tag type="high-contrast" [size]="size">High contrast</ibm-tag>
			<br><br>
			<ibm-tag type="outline" [size]="size">Outline</ibm-tag>
		`,
		props: {
			size: select("size", ["sm", "md"], "md"),
		}
	}))
	.add("Filter", () => ({
		template: `
			<ibm-tag-filter
				type="blue"
				title="Filter"
				closeButtonLabel="Clear"
			>filter</ibm-tag-filter>
		`
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/classes/src_tag.tag.html"></ibm-documentation>
		`
	}));
