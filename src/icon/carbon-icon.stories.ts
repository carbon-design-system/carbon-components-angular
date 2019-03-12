import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, object } from "@storybook/addon-knobs/angular";
import * as icons from "carbon-icons";

import { CarbonIconModule } from "./carbon-icon.module";

storiesOf("Carbon Icon", module)
	.addDecorator(
		moduleMetadata({
			imports: [CarbonIconModule]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", withNotes({ text: "Example: <ibm-carbon-icon name='add'></ibm-carbon-icon>" })(() => ({
		template: `
			<style>
				.story-icon-box {
					padding: 15px;
					width: 150px;
					height: 100px;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
					float: left;
				}
			</style>
			<div class="story-icon-box" *ngFor="let icon of iconsArray">
				<!--
				Example:
				<ibm-carbon-icon name="add"></ibm-carbon-icon>
				-->
				<ibm-carbon-icon [name]="icon.id.substr(6)"></ibm-carbon-icon>
				<p style="padding-top: 10px;">
					{{ icon.id.substr(6) }}
				</p>
			</div>
		`,
		props: {
			iconsArray: icons.default
		}
	})));
