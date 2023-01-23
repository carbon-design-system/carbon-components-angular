import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, select } from "@storybook/addon-knobs/angular";

import { LoadingModule } from "../";
import { DocumentationModule } from "../documentation-component/documentation.module";

storiesOf("Components|Loading", module).addDecorator(
	moduleMetadata({
		imports: [LoadingModule, DocumentationModule]
	})
)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
		<a href="https://builder.carbondesignsystem.com/from-json/%7B%22&#13;
		title%22%3A%22Loading%22%2C%22data%22%3A%7B%22items%22%3A%5B%7B%22&#13;
		type%22%3A%22loading%22%2C%22label%22%3A%22Loading%22%2C%22overlay%22&#13;
		%3Afalse%2C%22size%22%3A%22normal%22%2C%22active%22%3Atrue%2C%22id%22&#13;
		%3A%222%22%2C%22codeContext%22%3A%7B%22name%22%3A%22loading-2%22%7D%7D&#13;
		%5D%2C%22id%22%3A1%7D%2C%22allCssClasses%22%3A%5B%5D%7D" target="_blank">
			Edit on Carbon UI Builder
		</a>
		<br><br>
		<ibm-loading [isActive]="isActive" [size]="size" [overlay]="overlay"></ibm-loading>
	`,
		props: {
			isActive: boolean("Active", true),
			overlay: boolean("With overlay", false),
			size: select("Size of the loading circle", ["normal", "sm"], "normal")
		}
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/classes/src_loading.loading.html"></ibm-documentation>
		`
	}));
