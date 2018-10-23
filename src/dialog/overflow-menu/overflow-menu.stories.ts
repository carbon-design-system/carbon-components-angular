import { storiesOf, moduleMetadata } from "@storybook/angular";

import { DialogModule } from "../../";

storiesOf("Overflow Menu", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				DialogModule
			]
		})
	)
	.add("Basic", () => ({
		template: `
			<ibm-overflow-menu>
				<ibm-overflow-menu-option>
					An example option that is really long to show what should be done to handle long text
				</ibm-overflow-menu-option>
				<ibm-overflow-menu-option>Option 2</ibm-overflow-menu-option>
				<li class="bx--overflow-menu-options__option">
					<button class="bx--overflow-menu-options__btn">A fully custom option</button>
				</li>
				<ibm-overflow-menu-option>Option 4</ibm-overflow-menu-option>
				<ibm-overflow-menu-option disabled="true">Disabled</ibm-overflow-menu-option>
				<ibm-overflow-menu-option type="danger">Danger option</ibm-overflow-menu-option>
			</ibm-overflow-menu>
			<ibm-dialog-placeholder></ibm-dialog-placeholder>
		`
	}));
