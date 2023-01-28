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
			<a href="https://builder.carbondesignsystem.com/from-json/%7B%22&#13;
			title%22%3A%22Tag%22%2C%22data%22%3A%7B%22items%22%3A%5B%7B%22&#13;
			type%22%3A%22tag%22%2C%22kind%22%3A%22gray%22%2C%22size%22%3A%22&#13;
			md%22%2C%22filter%22%3Afalse%2C%22disabled%22%3Afalse%2C%22title%22&#13;
			%3A%22Tag%22%2C%22id%22%3A%222%22%2C%22codeContext%22%3A%7B%22name%22&#13;
			%3A%22tag-2%22%7D%7D%5D%2C%22id%22%3A1%7D%2C%22allCssClasses%22%3A%5B%5D%7D" target="_blank">
				Edit on Carbon UI Builder
			</a>
			<br><br>
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
			size: select("size", ["sm", "md"], "md")
		}
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
				title="Disabled filter"
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
