import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs } from "@storybook/addon-knobs/angular";

import { TagModule } from "../tag/tag.module";
import { ExperimentalComponenent } from "../../.storybook/experimental.component";
import { ExperimentalModule } from "../experimental.module";

storiesOf("Tag", module)
	.addDecorator(
		moduleMetadata({
			declarations: [
				ExperimentalComponenent
			],
			imports: [
				TagModule,
				ExperimentalModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<app-experimental-component [(isExperimental)]="experimental"></app-experimental-component>
			<ibm-tag [type]="(!experimental ? 'ibm' : 'warm-gray')" class="foo {{test}}">{{ !experimental ? "IBM" : "Warm-gray" }}</ibm-tag>
			<br><br>
			<ibm-tag [type]="(!experimental ? 'beta' : 'red')">{{ !experimental ?  "Beta" : "Red" }}</ibm-tag>
			<br><br>
			<ibm-tag [type]="(!experimental ? 'community' : 'magenta')">{{ !experimental ?  "Community" : "Magenta" }}</ibm-tag>
			<br><br>
			<ibm-tag [type]="(!experimental ? 'custom' : 'purple')">{{ !experimental ?  "Custom" : "Purple" }}</ibm-tag>
			<br><br>
			<ibm-tag [type]="(!experimental ? 'dedicated' : 'blue')">{{ !experimental ?  "Dedicated" : "Blue" }}</ibm-tag>
			<br><br>
			<ibm-tag [type]="(!experimental ? 'experimental' : 'cyan')">{{ !experimental ?  "Experimental" : "Cyan" }}</ibm-tag>
			<br><br>
			<ibm-tag [type]="(!experimental ? 'local' : 'teal')">{{ !experimental ?  "Local" : "Teal" }}</ibm-tag>
			<br><br>
			<ibm-tag [type]="(!experimental ? 'private' : 'green')">{{ !experimental ?  "Private" : "Green" }}</ibm-tag>
			<br><br>
			<ibm-tag [type]="(!experimental ? 'third-party' : 'cool-gray')">{{ !experimental ?  "Third-party" : "Cool-gray" }}</ibm-tag>
		`,
		props: {
			experimental: false
		}
	}));
