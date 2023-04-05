import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, select, boolean } from "@storybook/addon-knobs/angular";

import { ButtonModule } from "./button.module";
import { IconModule } from "../icon/icon.module";
import { DocumentationModule } from "../documentation-component/documentation.module";

storiesOf("Components|Button", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				ButtonModule,
				IconModule,
				DocumentationModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<a href="https://builder.carbondesignsystem.com/from-json/%7B%22&#13;
			title%22%3A%22ButtonFragment%22%2C%22data%22%3A%7B%22items%22%3A&#13;
			%5B%7B%22type%22%3A%22button%22%2C%22kind%22%3A%22primary%22%2C&#13;
			%22text%22%3A%22Button%22%2C%22size%22%3A%22%22%2C%22id%22%3A%222%22&#13;
			%2C%22codeContext%22%3A%7B%22name%22%3A%22button-2%22%7D%7D%5D%2C%22&#13;
			id%22%3A1%7D%2C%22allCssClasses%22%3A%5B%5D%7D" target="_blank">
				Edit on Carbon UI Builder
			</a>
			<br><br>
			<button [ibmButton]="ibmButton" (click)="click($event)" [size]="size" [isExpressive]="isExpressive">Button</button>
			&nbsp;
			<button [ibmButton]="ibmButton" (click)="click($event)" [size]="size" [isExpressive]="isExpressive" disabled="true">Button</button>
			&nbsp;
			<button [ibmButton]="ibmButton" (click)="click($event)" [size]="size" [isExpressive]="isExpressive">
				With icon<svg class="bx--btn__icon" ibmIcon="add" size="16"></svg>
			</button>
			<br><br>
			<ibm-button-set>
				<button ibmButton="secondary" (click)="click($event)" [size]="size" [isExpressive]="isExpressive">Button</button>
				<button [ibmButton]="ibmButton" (click)="click($event)" [size]="size" [isExpressive]="isExpressive">Button</button>
			</ibm-button-set>
		`,
		props: {
			ibmButton: select(
				"Button kind",
				["primary", "secondary", "tertiary", "ghost", "danger", "danger--primary", "danger--tertiary", "danger--ghost"],
				"primary"),
			isExpressive: boolean("Expressive button style", false),
			size: select("Size of the buttons", ["normal", "sm", "field", "lg", "xl"], "normal"),
			click: action("button clicked!")
		}
	}))
	.add("Icon only", () => ({
		template: `
			<button
				[ibmButton]="ibmButton"
				[size]="size"
				[iconOnly]="true"
				[hasAssistiveText]="true"
				[assistiveTextPlacement]="assistiveTextPlacement"
				[assistiveTextAlignment]="assistiveTextAlignment"
				(click)="click($event)">
				<svg class="bx--btn__icon" ibmIcon="copy" size="16"></svg>
				<span class="bx--assistive-text">Icon description</span>
			</button>
		`,
		props: {
			ibmButton: select(
				"Button kind",
				["primary", "secondary", "tertiary", "ghost", "danger", "danger--primary", "danger--tertiary", "danger--ghost"],
				"tertiary"),
			size: select("Size of the buttons", ["normal", "sm", "field", "lg", "xl"], "normal"),
			assistiveTextPlacement: select("Placement of assistive text", ["top", "bottom", "left", "right"], "top"),
			assistiveTextAlignment: select("Alignment of assistive text", ["center", "start", "end"], "center"),
			click: action("button clicked!")
		}
	}))
	.add("Skeleton", () => ({
		template: `
			<button ibmButton skeleton="true"></button>
			&nbsp;
			<button ibmButton skeleton="true" size="sm"></button>
		`
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/classes/src_button.button.html"></ibm-documentation>
		`
	}));
