import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { select, withKnobs } from "@storybook/addon-knobs/angular";

import { ContentSwitcherModule } from "./content-switcher.module";
import { DocumentationModule } from "../documentation-component/documentation.module";

storiesOf("Components|Content Switcher", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				ContentSwitcherModule,
				DocumentationModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<a href="https://builder.carbondesignsystem.com/from-json/%7B%22title%22&#13;
			%3A%22Content%20switcher%22%2C%22data%22%3A%7B%22items%22%3A%5B%7B%22&#13;
			type%22%3A%22content-switcher%22%2C%22size%22%3A%22sm%22%2C%22&#13;
			selectedIndex%22%3A0%2C%22items%22%3A%5B%7B%22name%22%3A%22&#13;
			first%22%2C%22text%22%3A%22First%20section%22%2C%22disabled%22%3Afalse%2C%22&#13;
			type%22%3A%22switch-item%22%2C%22id%22%3A%223%22%2C%22codeContext%22%3A%7B%22&#13;
			name%22%3A%22switch-item-3%22%7D%7D%2C%7B%22name%22%3A%22second%22%2C%22text%22&#13;
			%3A%22Second%20section%22%2C%22disabled%22%3Afalse%2C%22type%22%3A%22&#13;
			switch-item%22%2C%22id%22%3A%224%22%2C%22codeContext%22%3A%7B%22name%22%3A%22&#13;
			switch-item-4%22%7D%7D%2C%7B%22name%22%3A%22third%22%2C%22text%22%3A%22Third%20&#13;
			section%22%2C%22disabled%22%3Afalse%2C%22type%22%3A%22switch-item%22%2C%22id%22&#13;
			%3A%225%22%2C%22codeContext%22%3A%7B%22name%22%3A%22switch-item-5%22%7D%7D%5D%2C&#13;
			%22id%22%3A%222%22%2C%22codeContext%22%3A%7B%22name%22%3A%22content-switcher-2%22&#13;
			%7D%2C%22cssClasses%22%3A%5B%5D%7D%5D%2C%22id%22%3A1%7D%2C%22cssClasses%22&#13;
			%3A%5B%5D%2C%22allCssClasses%22%3A%5B%5D%7D" target="_blank">
				Edit on Carbon UI Builder
			</a>
			<br><br>
			<ibm-content-switcher
				(selected)="selected($event)"
				[theme]="theme"
				[size]="size">
				<button ibmContentOption name="First">First section</button>
				<button ibmContentOption name="Second">Second section</button>
				<button ibmContentOption name="Third">Third section</button>
			</ibm-content-switcher>
		`,
		props: {
			selected: action("selection changed"),
			theme: select("theme", ["dark", "light"], "dark"),
			size: select("size", ["sm", "md", "lg"], "md")
		}
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/classes/src_content_switcher.contentswitcher.html"></ibm-documentation>
		`
	}));
