import { storiesOf, moduleMetadata } from "@storybook/angular";

import { LayerModule } from "./";
import { DocumentationModule } from "../documentation-component/documentation.module";

storiesOf("Components|Layer", module).addDecorator(
	moduleMetadata({
		imports: [LayerModule, DocumentationModule]
	}))
	.add("Basic", () => ({
		template: `
			<div class="example-layer">Layer 1</div>
			<div ibmLayer>
				<div class="example-layer">Layer 2</div>
				<div ibmLayer>
					<div class="example-layer">Layer 3</div>
				</div>
			</div>
		`,
	styles: [
		`.example-layer {
			padding: 1rem;
			background: var(--cds-layer);
			color: theme.$text-primary;
		}
		`
	]
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/classes/src_layer.layer.html"></ibm-documentation>
		`
	}));
